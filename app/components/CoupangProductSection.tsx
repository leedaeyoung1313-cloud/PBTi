// app/components/CoupangProductSection.tsx
"use client";

import { CoupangProductCard, CoupangProduct } from "./CoupangProductCard";
import { HybridCard } from "./HybridCard";
import { CoupangWidget } from "./CoupangWidget";

interface CoupangProductSectionProps {
  title?: string;              // 섹션 제목 (예: "추천 상품")
  products: CoupangProduct[];  // 추천 상품 배열
}

/**
 * 쿠팡 파트너스 섹션
 * - HybridCard 안에
 *   1) 제목
 *   2) 고지 문구
 *   3) 검색 위젯
 *   4) 상품 카드 리스트
 *   를 한 박스로 묶어서 보여줌
 */
export function CoupangProductSection({
  title,
  products,
}: CoupangProductSectionProps) {
  if (!products || products.length === 0) return null;

  return (
    <HybridCard>
      {/* 제목 */}
      {title && (
        <h2 className="text-sm font-semibold text-neutral-900 mb-2">
          {title}
        </h2>
      )}

      {/* 쿠팡 파트너스 고지 문구 */}
      <div className="space-y-1 mb-3">
        <p className="text-[11px] text-neutral-500">
          ※ 이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
        <p className="text-[11px] text-neutral-500">
          추천 상품에 대한 더 자세한 정보는 아래 링크 및 검색 위젯을 통해 확인하실 수 있습니다.
        </p>
      </div>

      {/* 쿠팡 검색 위젯 */}
      <div className="mb-4">
        <CoupangWidget />
      </div>

      {/* 상품 카드 리스트 */}
      <div className="space-y-3">
        {products.map((product) => (
          <CoupangProductCard key={product.url} product={product} />
        ))}
      </div>
    </HybridCard>
  );
}
