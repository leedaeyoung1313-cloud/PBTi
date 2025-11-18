"use client";

export interface CoupangProduct {
  title: string;       // 상품명
  brand?: string;      // 브랜드명 (옵션)
  url: string;         // 쿠팡 파트너스 링크
  image?: string;      // 썸네일 이미지 URL (없으면 기본 스타일로 표시)
}

/**
 * 쿠팡 스타일 단일 상품 카드
 */
export function CoupangProductCard({ product }: { product: CoupangProduct }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-[#E5DDCF] rounded-xl bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition cursor-pointer">
      {/* 썸네일 */}
      {product.image && (
        <div className="h-16 w-16 flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="h-16 w-16 object-contain rounded-md"
          />
        </div>
      )}

      {/* 텍스트 */}
      <div className="flex flex-col text-sm min-w-0">
        <p className="font-semibold text-neutral-800 leading-snug line-clamp-2">
          {product.title}
        </p>
        {product.brand && (
          <p className="text-xs text-neutral-500 mt-0.5">{product.brand}</p>
        )}
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-emerald-600 hover:underline mt-1 break-all"
        >
          {product.url}
        </a>
      </div>
    </div>
  );
}
