// app/components/CoupangProductSection.tsx
"use client";

import { HybridCard } from "./HybridCard";
import { DOG_WIDGETS } from "../../data/coupangDogWidgets";
import { CAT_WIDGETS } from "../../data/coupangCatWidgets";

interface CoupangProductSectionProps {
  title?: string;
  variant: "dog" | "cat"; // 강아지 / 고양이 구분
}

export function CoupangProductSection({
  title,
  variant,
}: CoupangProductSectionProps) {
  // 강아지 / 고양이 위젯 선택
  const widgets = variant === "dog" ? DOG_WIDGETS : CAT_WIDGETS;

  return (
    <HybridCard>
      {/* 제목 */}
      {title && (
        <h2 className="text-sm font-semibold text-neutral-900 mb-2">
          {title}
        </h2>
      )}

      {/* 고지 문구 */}
      <div className="space-y-1 mb-4">
        <p className="text-[11px] text-neutral-500">
          ※ 이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
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
