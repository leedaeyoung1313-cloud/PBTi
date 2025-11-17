#!/usr/bin/env node
// One-shot Next.js/Vercel preflight fixer (non-destructive, content-safe)
// - Outputs a fully fixed copy to ./one_shot_fixed/
// - See ONE_SHOT_CHANGELOG.txt for details

import fs from 'fs';
import path from 'path';
import url from 'url';

const CWD = process.cwd();
const SRC = CWD;
const OUT = path.join(CWD, 'one_shot_fixed');

const IGNORE_DIRS = new Set([
  'node_modules','.next','dist','build','.turbo','.git','.vercel','coverage','tmp','out'
]);
const CODE_EXTS = new Set(['.ts','.tsx','.js','.jsx']);

const CHANGES = [];
const WARNINGS = [];
const ENV_KEYS = new Set();
const IMAGE_HOSTS = new Set();

function walk(dir, list = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), list);
    } else if (e.isFile()) {
      list.push(path.join(dir, e.name));
    }
  }
  return list;
}

function rel(p) { return path.relative(SRC, p).split(path.sep).join('/'); }
function ensureDir(p) { fs.mkdirSync(path.dirname(p), { recursive: true }); }
function readText(p) {
  try { return fs.readFileSync(p, 'utf8'); }
  catch { return null; }
}
function writeText(outPath, txt) {
  ensureDir(outPath);
  fs.writeFileSync(outPath, txt);
}
function copyFile(src, out) {
  ensureDir(out);
  fs.copyFileSync(src, out);
}
function isCode(p) { return CODE_EXTS.has(path.extname(p).toLowerCase()); }

function cloneTree() {
  if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
  const all = walk(SRC);
  for (const srcFile of all) {
    const outFile = path.join(OUT, rel(srcFile));
    copyFile(srcFile, outFile);
  }
  return all;
}

// --- case-sensitive import fix helpers ---
function dirEntriesCaseMap(dir) {
  const m = new Map();
  for (const n of fs.readdirSync(dir)) m.set(n.toLowerCase(), n);
  return m;
}
const candidateExts = ['','.ts','.tsx','.js','.jsx','.json','/index.tsx','/index.ts','/index.js','/index.jsx'];

function resolveRealCase(baseDir, importPath) {
  // returns: { realPath, fixedImport } or null
  const parts = importPath.split('/');
  let curDir = baseDir;
  const fixedParts = [];
  for (let i=0;i<parts.length;i++){
    const part = parts[i];
    if (part === '.' || part === '..') {
      curDir = path.normalize(path.join(curDir, part));
      fixedParts.push(part);
      continue;
    }
    if (!fs.existsSync(curDir) || !fs.statSync(curDir).isDirectory()) return null;
    const cmap = dirEntriesCaseMap(curDir);
    const real = cmap.get(part.toLowerCase());
    if (!real) {
      // maybe file with extension
      // we'll fix at the end via candidateExts
      fixedParts.push(part); // keep as is
      curDir = path.join(curDir, part);
      continue;
    }
    fixedParts.push(real);
    curDir = path.join(curDir, real);
  }

  // Check existence with candidate extensions
  let base = path.join(baseDir, fixedParts.join('/'));
  let hit = null;
  for (const ext of candidateExts) {
    const p = path.normalize(base + ext);
    if (fs.existsSync(p)) { hit = p; break; }
  }
  if (!hit) return null;

  const fixedImport = fixedParts.join('/');
  const realPath = hit;
  return { realPath, fixedImport };
}

// --- analysis helpers ---
const clientMarkers = /\b(useState|useEffect|useRef|useLayoutEffect|useReducer|useTransition|window|document)\b/;
const externalImg = /src\s*=\s*["'](https?:\/\/[^"']+)["']/g;
const envKey = /process\.env\.([A-Z0-9_]+)/g;

function hasUseClientAtTop(text) {
  const head = text.trimStart().slice(0, 120).toLowerCase();
  return head.startsWith("'use client'") || head.startsWith('"use client"');
}

function addUseClient(text) {
  return `'use client';\n` + text;
}

function replaceNextRouterIfSimple(text, fileRel) {
  // Only if import from 'next/router' includes ONLY useRouter
  // More complex patterns -> warn only
  const importRe = /import\s+{([^}]+)}\s+from\s+['"]next\/router['"];?/g;
  let changed = false;
  const newText = text.replace(importRe, (m, inner) => {
    const names = inner.split(',').map(s=>s.trim());
    const clean = names.filter(Boolean);
    const onlyUseRouter = clean.length === 1 && clean[0] === 'useRouter';
    if (onlyUseRouter) {
      changed = true;
      return `import { useRouter } from 'next/navigation';`;
    } else {
      WARNINGS.push(`Complex next/router import left as-is: ${fileRel} (imports: ${clean.join(', ')})`);
      return m;
    }
  });
  if (changed) CHANGES.push(`Rewrote next/router -> next/navigation (useRouter) in ${fileRel}`);
  return newText;
}

function listImageHosts(text) {
  const hosts = [];
  let m;
  while ((m = externalImg.exec(text)) !== null) {
    try {
      const host = m[1].split('//')[1].split('/')[0];
      if (host) hosts.push(host.toLowerCase());
    } catch {}
  }
  return hosts;
}

function listEnvKeys(text) {
  const keys = [];
  let m;
  while ((m = envKey.exec(text)) !== null) keys.push(m[1]);
  return keys;
}

// --- main ---
console.log('> Cloning source tree to one_shot_fixed/ ...');
const allFiles = cloneTree();
const relFiles = allFiles.map(rel);
const hasApp = relFiles.some(p => p.startsWith('app/'));
const hasPages = relFiles.some(p => p.startsWith('pages/'));
const routerType = hasApp && hasPages ? 'mixed' : (hasApp ? 'app' : (hasPages ? 'pages' : 'unknown'));

if (routerType === 'mixed') {
  WARNINGS.push('Both app/ and pages/ exist -> potential router conflict. Prefer one.');
}

if (routerType === 'app' || routerType === 'mixed') {
  const rootLayout = path.join(OUT, 'app', 'layout.tsx');
  if (!fs.existsSync(rootLayout)) {
    const layout = `export const metadata = { title: 'App', description: '' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ko"><body>{children}</body></html>);
}
`;
    writeText(rootLayout, layout);
    CHANGES.push('Added app/layout.tsx (minimal).');
  }
}

// pass 1: code scan/fix
for (const abs of allFiles) {
  if (!isCode(abs)) continue;
  const relp = rel(abs);
  if (relp.startsWith('app/api')) continue;

  const outPath = path.join(OUT, relp);
  let text = readText(outPath);
  if (text == null) continue;

  // image hosts & env keys for report
  for (const h of listImageHosts(text)) IMAGE_HOSTS.add(h);
  for (const k of listEnvKeys(text)) ENV_KEYS.add(k);

  // 'use client' insertion (only for likely client components)
  if ((relp.startsWith('app/') || relp.startsWith('components/') || relp.startsWith('src/components/'))
      && !hasUseClientAtTop(text) && clientMarkers.test(text)) {
    text = addUseClient(text);
    writeText(outPath, text);
    CHANGES.push(`Inserted 'use client' into ${relp}`);
  }

  // App Router: next/router -> next/navigation (simple case)
  if ((routerType === 'app' || routerType === 'mixed')
      && (text.includes(`from 'next/router'`) || text.includes(`from "next/router"`))) {
    const before = text;
    text = replaceNextRouterIfSimple(text, relp);
    if (text !== before) writeText(outPath, text);
  }
}

// pass 2: case-sensitive import fixes
const importFromRe = /^\s*import\s+.+?\s+from\s+['"](\.[^'"]+)['"]/gm;
const requireRe   = /^\s*const\s+\w+\s*=\s*require\(['"](\.[^'"]+)['"]\)/gm;

for (const abs of allFiles) {
  if (!isCode(abs)) continue;
  const relp = rel(abs);
  const outPath = path.join(OUT, relp);
  let text = readText(outPath);
  if (!text) continue;

  let changed = false;
  function fixAll(re) {
    let m;
    const edits = [];
    while ((m = re.exec(text)) !== null) {
      const imp = m[1];
      const baseDir = path.dirname(path.join(OUT, relp));
      const resolved = resolveRealCase(baseDir, imp);
      if (resolved && resolved.fixedImport !== imp) {
        edits.push({ start: m.index, end: m.index + m[0].length, full: m[0], imp, fix: resolved.fixedImport });
      }
    }
    // apply edits backwards
    for (let i = edits.length - 1; i >= 0; i--) {
      const e = edits[i];
      const fixed = e.full.replace(e.imp, e.fix);
      text = text.slice(0, e.start) + fixed + text.slice(e.end);
      changed = true;
      CHANGES.push(`Fixed import case in ${relp}: ${e.imp} -> ${e.fix}`);
    }
  }
  fixAll(importFromRe);
  fixAll(requireRe);

  if (changed) writeText(outPath, text);
}

// package.json scripts/engines
const pkgPath = path.join(OUT, 'package.json');
if (fs.existsSync(pkgPath)) {
  try {
    const pkg = JSON.parse(readText(pkgPath));
    pkg.scripts = pkg.scripts || {};
    const need = {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint'
    };
    let changed = false;
    for (const [k,v] of Object.entries(need)) {
      if (pkg.scripts[k] !== v) { pkg.scripts[k] = v; changed = true; }
    }
    pkg.engines = pkg.engines || {};
    if (!pkg.engines.node) { pkg.engines.node = ">=18.17 <21"; changed = true; }
    if (changed) {
      writeText(pkgPath, JSON.stringify(pkg, null, 2));
      CHANGES.push('Updated package.json scripts/engines.');
    }
  } catch (e) {
    WARNINGS.push(`package.json parse failed in fixed tree: ${e.message}`);
  }
}

// emit changelog
const changelog = [];
changelog.push('One-shot non-destructive fixes (content untouched):\n');
if (CHANGES.length === 0) {
  changelog.push('- No automatic changes applied (project already conformed to heuristics).\n');
} else {
  for (const c of CHANGES) changelog.push(`- ${c}\n`);
}
if (ENV_KEYS.size) {
  changelog.push('\nEnvironment variable keys detected (configure on Vercel & .env.example):\n');
  for (const k of [...ENV_KEYS].sort()) changelog.push(`- ${k}\n`);
}
if (IMAGE_HOSTS.size) {
  changelog.push('\nExternal image hosts detected (allow in next.config images.domains/remotePatterns):\n');
  for (const h of [...IMAGE_HOSTS].sort()) changelog.push(`- ${h}\n`);
}
if (WARNINGS.length) {
  changelog.push('\nWarnings (manual review recommended):\n');
  for (const w of WARNINGS) changelog.push(`- ${w}\n`);
}
writeText(path.join(OUT, 'ONE_SHOT_CHANGELOG.txt'), changelog.join(''));

// done
console.log('✅ Done. Fixed project at: one_shot_fixed/');
console.log('   See one_shot_fixed/ONE_SHOT_CHANGELOG.txt for details.');
