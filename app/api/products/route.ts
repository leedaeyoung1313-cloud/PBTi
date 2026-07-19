// app/api/products/route.ts
// 공개 read-only 엔드포인트. 결과 페이지가 관리자 오버라이드 상품을 조회할 때 사용한다.
// 인증 불필요 (미들웨어 matcher가 /api/admin/** 만 보호하므로 이 경로는 통과된다).
import { NextRequest, NextResponse } from "next/server";
import { productStore, type Species } from "../../../lib/productStore";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const species = searchParams.get("species") as Species | null;
  const code = searchParams.get("code");

  if ((species !== "cat" && species !== "dog") || !code) {
    return NextResponse.json(
      { error: "species, code 쿼리 파라미터가 필요합니다." },
      { status: 400 }
    );
  }

  const products = await productStore.getForType(species, code);
  return NextResponse.json({ products });
}
