// app/api/admin/products/route.ts
// 관리자 전용(미들웨어에서 인증 검사). 전체 오버라이드 조회 / 유형별 상품 목록 저장.
import { NextRequest, NextResponse } from "next/server";
import {
  productStore,
  type Species,
  type AdminProduct,
} from "../../../../lib/productStore";

export async function GET() {
  const all = await productStore.getAll();
  return NextResponse.json(all);
}

export async function PUT(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const species = body?.species as Species | undefined;
  const code = body?.code as string | undefined;
  const products = body?.products as AdminProduct[] | undefined;

  if ((species !== "cat" && species !== "dog") || !code || !Array.isArray(products)) {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  for (const p of products) {
    if (!p.title?.trim() || !p.url?.trim()) {
      return NextResponse.json(
        { error: "모든 상품에는 상품명과 링크가 필요합니다." },
        { status: 400 }
      );
    }
  }

  const saved = await productStore.setForType(species, code, products);
  return NextResponse.json({ ok: true, products: saved });
}
