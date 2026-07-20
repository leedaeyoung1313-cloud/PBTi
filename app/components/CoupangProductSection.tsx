// app/components/CoupangProductSection.tsx
"use client";

import { HybridCard } from "./HybridCard";
import { CoupangProductCard, type CoupangProduct } from "./CoupangProductCard";

// 강아지/고양이 공통 "최다 판매 필수 아이템" (유형별 매칭과는 별개로 항상 동일하게 노출)
// 실제 쿠팡 파트너스 링크가 정해지면 href만 채워 넣으면 된다.
const BESTSELLER_ITEMS: Record<
  "dog" | "cat",
  { icon: string; name: string; href: string }[]
> = {
  dog: [
    { icon: "🐶", name: "탐사 실속형 배변패드", href: "#" },
    { icon: "🍖", name: "굿데이 강아지 건강한 육포 간식", href: "#" },
  ],
  cat: [
    { icon: "🐱", name: "고양이 프리미엄 벤토나이트 모래", href: "#" },
    { icon: "🐾", name: "고양이 스크래쳐 골판지 매트", href: "#" },
  ],
};

interface CoupangProductSectionProps {
  title?: string;
  /** 유형별로 자동 매칭된 추천 상품 2~3개 */
  products?: CoupangProduct[];
  /** 상품 카드 이동 버튼 라벨 (언어별) */
  ctaLabel?: string;
  /** 파트너스 고지 문구 (언어별) */
  disclaimer?: string;
  /** 기부 안내 문구 (언어별, 있을 때만 노출) */
  donationNotice?: string;
  variant?: "dog" | "cat"; // 위젯을 강아지/고양이 중 어떤 걸 보여줄지
}

export function CoupangProductSection({
  title,
  products = [],
  ctaLabel,
  disclaimer,
  donationNotice,
  variant,
}: CoupangProductSectionProps) {
  const bestsellers = BESTSELLER_ITEMS[variant === "cat" ? "cat" : "dog"];

  return (
    <HybridCard>
      {/* 메인 타이틀 (눈에 띄게 확대·볼드) */}
      {title && (
        <h2 className="text-lg sm:text-xl font-extrabold text-neutral-900 mb-4 leading-snug">
          {title}
        </h2>
      )}

      {/* 🤔 추천 아이템 유도 배너 (고정 CTA 링크, 섹션 전체가 하나의 버튼) */}
      <a
        href="https://link.coupang.com/a/fxrTXP09Nk"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 block w-full cursor-pointer rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-orange-50 p-6 shadow-sm transition-all duration-200 active:scale-[0.98]"
      >
        <p className="text-center text-base sm:text-lg font-bold text-gray-800">
          🤔 우리 아이 성향에 지금 가장 필요한 아이템은?
        </p>
        <div className="mx-auto my-4 flex max-w-md items-center justify-center gap-2 rounded-full border border-gray-200 bg-white p-3 shadow-md">
          <span aria-hidden>🔍</span>
          <span className="text-base sm:text-lg font-semibold text-blue-600">
            {variant === "cat"
              ? "고양이 캣닢 장난감 보러가기"
              : "강아지 노즈워크 장난감 보러가기"}
          </span>
        </div>
        <p className="mt-2 text-center text-xs text-gray-500">
          👆 배너를 눌러 쿠팡에서 추천 아이템을 확인해보세요! (구매하시면 수익의
          일부가 유기동물 보호센터에 후원됩니다 🐾)
        </p>
      </a>

      {/* 🐾 기부 안내 배너 (강조) */}
      {donationNotice && (
        <div className="mb-4 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100 px-4 py-5 sm:px-6 sm:py-6 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-extrabold text-emerald-800 leading-snug">
            {donationNotice}
          </p>
        </div>
      )}

      {/* 🔥 유형별 자동 큐레이션 상품 카드 - 어디를 눌러도 파트너스 링크로 이동 */}
      {products.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 mb-4">
          {products.map((p, i) => (
            <CoupangProductCard key={i} product={p} ctaLabel={ctaLabel} />
          ))}
        </div>
      )}

      {/* 고지 문구 */}
      <div className="space-y-1 mb-4">
        <p className="text-[11px] text-neutral-500">
          {disclaimer ??
            "※ 이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."}
        </p>
      </div>

      {/* 🔥 강아지/고양이 최다 판매 필수 아이템 (유형과 무관하게 공통 노출) */}
      <div>
        <p className="text-lg font-bold text-gray-900 mb-3">
          🔥 우리 아이를 위한 쿠팡 최다 판매 필수 아이템
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {bestsellers.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-20 w-full items-center justify-center rounded-lg bg-neutral-50 text-3xl">
                {item.icon}
              </div>
              <p className="text-xs font-semibold text-neutral-900 leading-snug line-clamp-2">
                {item.name}
              </p>
              <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                🚀 로켓배송
              </span>
              <span className="mt-auto inline-flex items-center justify-center rounded-lg bg-neutral-900 px-2 py-1.5 text-[11px] font-medium text-white">
                쿠팡 최저가 보기
              </span>
            </a>
          ))}
        </div>
      </div>
    </HybridCard>
  );
}
