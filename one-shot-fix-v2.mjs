#!/usr/bin/env node
// One-shot Next.js/Vercel fixer (content-safe)
// - Creates ./deploy_ready/ as a fully-patched copy
// - Logs all changes to ONE_SHOT_CHANGELOG.txt
// - Keeps texts/translations untouched

import fs from 'fs';
import path from 'path';

const CWD = process.cwd();
const SRC = CWD;
const OUT = path.join(CWD, 'deploy_ready');

const IGNORE_DIRS = new Set(['node_modules','.next','dist','build','.git','.vercel','.turbo','coverage','out','tmp']);
const CODE_EXTS = new Set(['.ts','.tsx','.js','.jsx']);

const CHANGES = [];
const WARNINGS = [];
const ENV_KEYS = new Set();
const IMAGE_HOSTS = new Set();

function walk(dir, acc=[]) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), acc);
    } else if (e.isFile()) {
      acc.push(path.join(dir, e.name));
    }
  }
  return acc;
}
function rel(p) { return path.relative(SRC, p).split(path.sep).join('/'); }
function ensureDir(p) { fs.mkdirSync(path.dirname(p), { recursive: true }); }
function readText(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } }
function writeText(p, s) { ensureDir(p); fs.writeFileSync(p, s); }
function copyFile(src, dst) { ensureDir(dst); fs.copyFileSync(src, dst); }
function isCode(p) { return CODE_EXTS.has(path.extname(p).toLowerCase()); }
function hasUseClientTop(t) {
  const h = t.trimStart().slice(0,120).toLowerCase();
  return h.startsWith("'use client'") || h.startsWith('"use client"');
}

console.log('> Cloning → deploy_ready/');
if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
for (const f of walk(SRC)) {
  const out = path.join(OUT, rel(f));
  copyFile(f, out);
}

const all = walk(OUT);
const rels = all.map(x => path.relative(OUT, x).split(path.sep).join('/'));
const hasApp = rels.some(p => p.startsWith('app/'));
const hasPages = rels.some(p => p.startsWith('pages/'));
const routerType = hasApp && hasPages ? 'mixed' : (hasApp ? 'app' : (hasPages ? 'pages' : 'unknown'));
if (routerType === 'mixed') WARNINGS.push('Both app/ and pages/ exist → possible router conflict.');

if (routerType === 'app' || routerType === 'mixed') {
  const layout = path.join(OUT, 'app', 'layout.tsx');
  if (!fs.existsSync(layout)) {
    writeText(layout,
`export const metadata = { title: 'App', description: '' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ko"><body>{children}</body></html>);
}
`);
    CHANGES.push('Added app/layout.tsx (minimal).');
  }
}

const clientMarkers = /\b(useState|useEffect|useRef|useLayoutEffect|useReducer|useTransition|window|document)\b/;
const mapArrowRe = /\.map\(\s*\(([^)]+)\)\s*=>/g;
const nextRouterImportRe = /import\s*{([^}]+)}\s*from\s*['"]next\/router['"];?/g;
const importFromRe = /^\s*import\s+.+?\s+from\s+['"](\.[^'"]+)['"]/gm;
const requireRe = /^\s*const\s+\w+\s*=\s*require\(['"](\.[^'"]+)['"]\)/gm;

function patchMapParams(text) {
  return text.replace(mapArrowRe, (m, params) => {
    const raw = params.trim();
    if (!raw || raw.includes(':') || raw.includes('{') || raw.includes('[')) return m; // already typed / destructuring
    const parts = raw.split(',').map(s=>s.trim()).filter(Boolean);
    if (parts.length === 1) return `.map((${parts[0]}: any) =>`;
    const p0 = parts[0] || 'x';
    const p1 = parts[1] || 'i';
    return `.map((${p0}: any, ${p1}: number) =>`;
  });
}

function dirCaseMap(dir) {
  try { return Object.fromEntries(fs.readdirSync(dir).map(n=>[n.toLowerCase(),n])); }
  catch { return {}; }
}
const candidateExts = ["",".ts",".tsx",".js",".jsx",".json","/index.tsx","/index.ts","/index.js","/index.jsx"];
function fixImportCase(baseDir, imp) {
  const parts = imp.split('/');
  let cur = baseDir;
  const fixed = [];
  for (const part of parts) {
    if (part === '.' || part === '..') { cur = path.normalize(path.join(cur, part)); fixed.push(part); continue; }
    const cmap = dirCaseMap(cur);
    const real = cmap[part.toLowerCase()];
    fixed.push(real || part);
    cur = path.join(cur, real || part);
  }
  const base = path.join(baseDir, fixed.join('/'));
  for (const ext of candidateExts) {
    const p = path.normalize(base + ext);
    if (fs.existsSync(p)) return fixed.join('/');
  }
  return null;
}

for (const abs of all) {
  if (!isCode(abs)) continue;
  const relp = rel(path.relative(OUT, abs));
  if (relp.startsWith('app/api')) continue;
  let t = readText(abs);
  if (t == null) continue;

  let changed = false;

  // collect env keys & external hosts (for report)
  for (const m of t.matchAll(/src\s*=\s*["'](https?:\/\/[^"']+)["']/g)) {
    try { IMAGE_HOSTS.add(m[1].split('//')[1].split('/')[0].toLowerCase()); } catch {}
  }
  for (const m of t.matchAll(/process\.env\.([A-Z0-9_]+)/g)) ENV_KEYS.add(m[1]);

  // 'use client'
  if ((relp.startsWith('app/') || relp.startsWith('components/') || relp.startsWith('src/components/'))
      && !hasUseClientTop(t) && clientMarkers.test(t)) {
    t = `'use client';\n` + t;
    changed = true;
    CHANGES.push(`Inserted 'use client' → ${relp}`);
  }

  // next/router simple case
  if ((routerType === 'app' || routerType === 'mixed') && (t.includes("next/router"))) {
    t = t.replace(nextRouterImportRe, (m, inner) => {
      const names = inner.split(',').map(s=>s.trim()).filter(Boolean);
      if (names.length === 1 && names[0] === 'useRouter') {
        CHANGES.push(`next/router → next/navigation (useRouter) → ${relp}`);
        return `import { useRouter } from 'next/navigation';`;
      }
      WARNINGS.push(`Complex next/router import left as-is → ${relp}: ${names.join(', ')}`);
      return m;
    });
  }

  // implicit-any map callbacks
  const beforeMap = t;
  t = patchMapParams(t);
  if (t !== beforeMap) {
    changed = true;
    CHANGES.push(`Patched implicit-any in .map callbacks → ${relp}`);
  }

  // case-sensitive relative import fix
  function applyFix(regex) {
    let made = 0;
    t = t.replace(regex, (full, imp) => {
      const fixed = fixImportCase(path.dirname(abs), imp);
      if (fixed && fixed !== imp) { made++; return full.replace(imp, fixed); }
      return full;
    });
    return made;
  }
  const n1 = applyFix(importFromRe);
  const n2 = applyFix(requireRe);
  if (n1+n2>0) {
    changed = true;
    CHANGES.push(`Fixed ${n1+n2} relative import path(s) (case) → ${relp}`);
  }

  if (changed) writeText(abs, t);
}

// package.json standardization
const pkgPath = path.join(OUT, 'package.json');
if (fs.existsSync(pkgPath)) {
  try {
    const pkg = JSON.parse(readText(pkgPath) || '{}');
    pkg.scripts = pkg.scripts || {};
    const need = { dev: 'next dev', build: 'next build', start: 'next start', lint: 'next lint' };
    let save = false;
    for (const [k,v] of Object.entries(need)) {
      if (pkg.scripts[k] !== v) { pkg.scripts[k] = v; save = true; }
    }
    pkg.engines = pkg.engines || {};
    if (!pkg.engines.node) { pkg.engines.node = ">=18.17 <21"; save = true; }
    if (save) {
      writeText(pkgPath, JSON.stringify(pkg, null, 2));
      CHANGES.push('Updated package.json scripts/engines.');
    }
  } catch (e) {
    WARNINGS.push('package.json parse failed (skipped).');
  }
}

// changelog
let log = 'One-shot changes (content untouched):\n';
if (CHANGES.length === 0) log += '- No automatic changes applied.\n';
else for (const c of CHANGES) log += `- ${c}\n`;
if (ENV_KEYS.size) {
  log += '\nEnvironment variable keys detected (set on Vercel & .env.example):\n';
  for (const k of [...ENV_KEYS].sort()) log += `- ${k}\n`;
}
if (IMAGE_HOSTS.size) {
  log += '\nExternal image hosts (allow in next.config images.domains/remotePatterns):\n';
  for (const h of [...IMAGE_HOSTS].sort()) log += `- ${h}\n`;
}
if (WARNINGS.length) {
  log += '\nWarnings (manual review recommended):\n';
  for (const w of WARNINGS) log += `- ${w}\n`;
}
writeText(path.join(OUT, 'ONE_SHOT_CHANGELOG.txt'), log);

console.log('✅ Done. See ./deploy_ready/ and ONE_SHOT_CHANGELOG.txt');
