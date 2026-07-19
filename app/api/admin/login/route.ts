// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getExpectedSessionToken,
  isValidPassword,
} from "../../../../lib/adminAuth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const password = body?.password;

  if (typeof password !== "string" || !(await isValidPassword(password))) {
    return NextResponse.json(
      { error: "비밀번호가 올바르지 않습니다." },
      { status: 401 }
    );
  }

  const token = await getExpectedSessionToken();
  if (!token) {
    return NextResponse.json(
      { error: "서버에 ADMIN_PASSWORD 환경변수가 설정되어 있지 않습니다." },
      { status: 500 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7일
  });
  return res;
}
