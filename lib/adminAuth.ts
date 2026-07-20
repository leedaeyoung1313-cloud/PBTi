// lib/adminAuth.ts
// 관리자 세션 최소 구현. DB/세션스토어 없이 ADMIN_PASSWORD 해시값을 쿠키로만 검증한다.
// Edge(middleware)와 Node(route handler) 양쪽에서 동작해야 하므로 Web Crypto(globalThis.crypto)만 사용한다.
// Node 18.17+/20+ 필요 (Next.js 14 최소 요구 버전과 동일).

export const ADMIN_SESSION_COOKIE = "pbti_admin_session";

async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await globalThis.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** 로그인 성공 시 쿠키에 저장할 토큰. ADMIN_PASSWORD 자체를 쿠키에 남기지 않기 위해 해시로 변환. */
export async function getExpectedSessionToken(): Promise<string | null> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return sha256Hex(`pbti-admin-session:${password}`);
}

export async function isValidPassword(candidate: string): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  return candidate === password;
}
