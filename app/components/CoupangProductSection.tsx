// app/components/CoupangProductSection.tsx
"use client";

import { HybridCard } from "./HybridCard";
import { CoupangProductCard, type CoupangProduct } from "./CoupangProductCard";
import { DOG_WIDGETS } from "../../data/coupangDogWidgets";
import { CAT_WIDGETS } from "../../data/coupangCatWidgets";

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
  const widgets = variant === "cat" ? CAT_WIDGETS : DOG_WIDGETS;

  return (
    <HybridCard>
      {/* 제목 */}
      {title && (
        <h2 className="text-sm font-semibold text-neutral-900 mb-2">
          {title}
        </h2>
      )}

      {/* 🐾 기부 안내 배너 (강조) */}
      {donationNotice && (
        <div className="mb-4 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100 px-4 py-5 sm:px-6 sm:py-6 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-extrabold text-emerald-800 leading-snug">
            {donationNotice}
          </p>
        </div>
      )}

      {/* 🔥 유형별 자동 큐레이션 상품 카드 */}
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
        <p className="text-[11px] text-neutral-500">
          더 많은 정보를 원하시면 아래 쿠팡 위젯을 이용해 주세요.
        </p>
      </div>

      {/* 🔍 검색 배너 (공통) */}
      <div className="mb-6 w-full">
        <iframe
          src="https://coupa.ng/ckIzmq"
          width="100%"
          height="75"
          frameBorder={0}
          scrolling="no"
          referrerPolicy="unsafe-url"
        />
      </div>

      {/* 🧩 강아지/고양이 배너 - 가로 2개 배치 */}
      <div className="grid sm:grid-cols-2 gap-1 place-items-center justify-center">
        {widgets.map((w) => (
          <div
            key={w.id}
            dangerouslySetInnerHTML={{ __html: w.iframe }}
          />
        ))}
      </div>
    </HybridCard>
  );
}
