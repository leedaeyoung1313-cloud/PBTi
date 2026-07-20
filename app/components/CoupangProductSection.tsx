// app/components/CoupangProductSection.tsx
"use client";

import { HybridCard } from "./HybridCard";
import { CoupangProductCard, type CoupangProduct } from "./CoupangProductCard";

// 강아지/고양이 공통 "에디터 추천 솔루션" 어드바이스 문구 (유형별 매칭과는 별개로 항상 동일하게 노출)
const EDITOR_ADVICE: Record<"dog" | "cat", string[]> = {
  dog: [
    "💡 실내 활동이 많은 우리 강아지들에게는 스트레스 해소와 두뇌 자극을 주는 **[지능형 노즈워크 장난감]**이 필수적입니다. 성취감을 느끼게 해주면 분리불안 완화에도 큰 도움이 됩니다.",
    "💡 매일 쓰는 배변패드는 흡수력과 탈취력이 검증된 **[실속형 대용량 배변패드]**로 미리 구비해 두시는 것이 경제적입니다. 아이들의 위생적인 환경을 위해 자주 갈아주세요.",
    "💡 훈련이나 칭찬 보상용으로는 기호성이 좋고 성분이 투명한 **[견종 공통 건강한 육포 간식]**을 추천합니다. 작은 크기로 잘라 급여하시면 훌륭한 동기부여가 됩니다.",
  ],
  cat: [
    "💡 영역 동물인 고양이에게 스트레스 해소와 수직 공간 확보는 생명과 같습니다. 발톱 관리와 스트레스 완화를 돕는 **[대형 스크래쳐 골판지 매트]**를 집안 곳곳에 배치해 주세요.",
    "💡 민감한 고양이들의 비뇨기 건강과 직결되는 모래는 먼지 날림이 적고 응고력이 뛰어난 **[프리미엄 벤토나이트 모래]**를 검색해 보시는 것을 권장합니다.",
    "💡 무료한 일상에 활력을 불어넣고 사냥 본능을 채워주기 위해 캣닢 성분이 포함된 **[고양이 캣닢/마따따비 장난감]**을 선물해 보세요. 정서적 안정에 큰 도움이 됩니다.",
  ],
};

/** "**강조**" 마크다운을 <strong>으로 변환해서 렌더링 */
function renderWithBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

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
  const editorAdvice = EDITOR_ADVICE[variant === "cat" ? "cat" : "dog"];

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

      {/* 🐾 전문가 에디션 추천 가이드 (글 위주 매거진 스타일) */}
      <div className="rounded-2xl border border-amber-100/60 bg-amber-50/50 p-5">
        <p className="mb-3 text-base font-bold text-amber-900">
          🐾 PBTi 에디터가 제안하는 우리 아이 맞춤 솔루션
        </p>
        <div className="space-y-3">
          {editorAdvice.map((line, i) => (
            <p key={i} className="text-sm leading-relaxed text-neutral-700">
              {renderWithBold(line)}
            </p>
          ))}
        </div>

        <a
          href="https://link.coupang.com/a/fxrTXP09Nk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center rounded-lg bg-amber-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          👉 에디터 추천 필수 아이템 쿠팡에서 최저가로 찾아보기
        </a>
      </div>
    </HybridCard>
  );
}
