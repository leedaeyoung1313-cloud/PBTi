"use client";

import Image from "next/image";

export interface CoupangProduct {
  title: string;       // 상품명
  brand?: string;      // 태그/브랜드명 (옵션)
  reason?: string;     // 이 유형에게 추천하는 이유 (옵션)
  url: string;         // 쿠팡 파트너스 링크
  image?: string;      // 썸네일 이미지 URL (없으면 기본 아이콘으로 표시)
}

interface CoupangProductCardProps {
  product: CoupangProduct;
  /** 이동 버튼 라벨 (언어별로 부모에서 넘겨줌, 기본값은 한국어) */
  ctaLabel?: string;
}

/**
 * 쿠팡 스타일 단일 상품 카드
 * - 썸네일(next/image) + 상품명 + 추천 이유 + 명확한 이동 버튼(CTA)
 */
export function CoupangProductCard({
  product,
  ctaLabel = "쿠팡에서 보기",
}: CoupangProductCardProps) {
  return (
    // 카드 전체(이미지·글자 없는 여백/패딩 포함)를 눌러도 링크로 이동하도록
    // 최외곽 태그 자체를 <a>로 감싼다.
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block w-full h-full flex flex-col gap-2 p-3 border border-[#E5DDCF] rounded-xl bg-white/90 shadow-sm transition duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        {/* 썸네일 */}
        <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-neutral-100 flex items-center justify-center">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
          ) : (
            <span className="text-xl" aria-hidden>
              🛒
            </span>
          )}
        </div>

        {/* 텍스트 */}
        <div className="flex flex-col text-sm min-w-0">
          <p className="font-semibold text-neutral-800 leading-snug line-clamp-2">
            {product.title}
          </p>
          {product.brand && (
            <p className="text-[11px] text-neutral-500 mt-0.5">
              #{product.brand}
            </p>
          )}
          {product.reason && (
            <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
              {product.reason}
            </p>
          )}
        </div>
      </div>

      {/* 명확한 이동 버튼(시각적 강조용) - 카드 전체가 이미 링크이므로
          클릭이 중복으로 상위 <a>까지 전파되지 않도록 stopPropagation 처리 */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          window.open(product.url, "_blank", "noopener,noreferrer");
        }}
        className="inline-flex items-center justify-center gap-1 rounded-lg bg-emerald-600 text-white text-xs font-medium py-2 px-3 transition duration-200 hover:bg-emerald-700 hover:scale-105 active:scale-95"
      >
        {ctaLabel}
        <span aria-hidden>→</span>
      </button>
    </a>
  );
}
