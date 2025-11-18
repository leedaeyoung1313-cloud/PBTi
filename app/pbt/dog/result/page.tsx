// app/pbt/dog/result/page.tsx
"use client";

import { HybridCard } from "../../../components/HybridCard";
import { dogTypes, DogCode } from "../../../../data/dogTypes";
import { dogTypesI18n } from "../../../../data/dogTypes.i18n";
import { dogProducts } from "../../../../data/dogProducts";
import { dogGlobalProducts } from "../../../../data/dogGlobalProducts";
import { useLanguage } from "../../../../components/language-provider";
import { resolveAffiliateUrl } from "../../../../data/affiliate";

interface SearchParams {
  type?: string;
}

const tRes = {
  ko: {
    badge: "🐶 강아지 PBTi 결과",
    disclaimer:
      "본 결과는 반려견의 평소 행동 경향을 기반으로 한 참고 정보이며, 의학적 진단이나 치료를 대체하지 않습니다.",
    strengths: "강점 (Strength)",
    weaknesses: "주의할 점 (Weakness)",
    likes: "이 유형이 좋아하는 활동",
    care: "케어 팁",
    cats: "잘 맞는 상품 카테고리",
    products: "추천 상품",
    affiliate:
      "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",
  },
  en: {
    badge: "🐶 Dog PBTi Result",
    disclaimer:
      "This result is for informational purposes based on everyday behavior; it is not a medical diagnosis or treatment.",
    strengths: "Strengths",
    weaknesses: "Things to watch out for",
    likes: "Activities this type enjoys",
    care: "Care tips",
    cats: "Recommended product categories",
    products: "Recommended products",
    affiliate:
      "Links may use affiliate programs depending on your language/region.",
  },
  ja: {
    badge: "🐶 ワンちゃん PBTi 結果",
    disclaimer:
      "本結果は日常の行動傾向に基づく参考情報であり、医療的な診断や治療に代わるものではありません。",
    strengths: "強み",
    weaknesses: "注意ポイント",
    likes: "このタイプが好きな活動",
    care: "ケアのヒント",
    cats: "おすすめ商品カテゴリー",
    products: "おすすめ商品",
    affiliate:
      "言語/地域によりアフィリエイトリンクが適用される場合があります。",
  },
  zh: {
    badge: "🐶 狗狗 PBTi 结果",
    disclaimer:
      "本结果仅基于日常行为供参考，不构成医疗诊断或治疗建议。",
    strengths: "优势",
    weaknesses: "需要注意",
    likes: "该类型喜欢的活动",
    care: "照顾建议",
    cats: "推荐商品类别",
    products: "推荐商品",
    affiliate:
      "根据语言/地区可能使用联盟链接。",
  },
} as const;

export default function DogResultPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const { lang } = useLanguage();
  const t = tRes[lang];

  const raw = (searchParams?.type || "INFJ").toUpperCase();
  const type = ((dogTypes as any)[raw] ? raw : "INFJ") as DogCode;

  // Base + i18n overlay
  const base = dogTypes[type];
  const i18n = (dogTypesI18n as any)?.[type];

  const nickname =
    i18n?.nickname_i18n?.[lang] ?? base.nickname;
  const summary =
    i18n?.summary_i18n?.[lang] ?? base.summary;
  const strengths =
    i18n?.strengths_i18n?.[lang] ?? base.strengths;
  const weaknesses =
    i18n?.weaknesses_i18n?.[lang] ?? base.weaknesses;
  const activities =
    i18n?.idealActivities_i18n?.[lang] ?? base.idealActivities;
  const careTips =
    i18n?.careTips_i18n?.[lang] ?? base.careTips;
  const categories =
    i18n?.recommendedCategories_i18n?.[lang] ??
    base.recommendedCategories;

  // 🔥 추천 상품 구성: 공통 2개 + 타입 전용 2개
  const typeProducts = dogProducts[type] || [];
  const products = [
    ...dogGlobalProducts.slice(0, 2), // 모든 강아지 공통 추천상품
    ...typeProducts.slice(0, 2), // 이 유형 전용 상품
  ];

  const shareTitle = `${base.code} · ${nickname}`;
  const shareSubtitle = summary;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* 공유 카드 */}
      <HybridCard>
        <div className="rounded-3xl border border-[#E5DDCF] bg-gradient-to-br from-indigo-50 to-emerald-50 p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium text-blue-600 mb-1">
                🐾 PBTi · 강아지 성향 유형
              </p>
              <p className="text-xl sm:text-2xl font-bold text-neutral-900">
                {shareTitle}
              </p>
            </div>
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/70 border border-[#E5DDCF] flex items-center justify-center text-2xl">
              🐶
            </div>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {shareSubtitle}
          </p>
          <p className="text-[10px] text-neutral-500 mt-1">
            스크린샷해서 카톡·인스타·블로그 등 어디서든 공유해도 돼요.{" "}
            <span className="font-semibold text-blue-600">
              PBTi (Pet Behavioral Type Indicator)
            </span>
          </p>
        </div>
      </HybridCard>

      {/* Hero */}
      <HybridCard>
        <p className="text-xs font-medium text-blue-600 mb-1">{t.badge}</p>
        <p className="text-2xl font-bold text-neutral-900 mb-1 flex items-baseline gap-2">
          <span className="text-blue-600">{base.code}</span>
          <span className="text-sm text-neutral-500">· {nickname}</span>
        </p>
        <p className="text-sm text-neutral-700">{summary}</p>
        <p className="mt-3 text-[11px] text-neutral-500">{t.disclaimer}</p>
      </HybridCard>

      {/* 강점 / 약점 */}
      <div className="grid gap-4 md:grid-cols-2">
        <HybridCard title={t.strengths}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </HybridCard>
        <HybridCard title={t.weaknesses}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {weaknesses.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </HybridCard>
      </div>

      {/* 활동 / 케어 팁 */}
      <div className="grid gap-4 md:grid-cols-2">
        <HybridCard title={t.likes}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {activities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </HybridCard>

        <HybridCard title={t.care}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {careTips.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </HybridCard>
      </div>

      {/* 추천 카테고리 */}
      <HybridCard title={t.cats}>
        <div className="flex flex-wrap gap-2 mt-1">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-[#E5DDCF] bg-white/80 px-3 py-1 text-[11px] text-neutral-700"
            >
              #{cat}
            </span>
          ))}
        </div>
      </HybridCard>

      {/* 추천 상품 */}
      {products.length > 0 && (
        <HybridCard title={t.products}>
          <p className="text-[11px] text-neutral-500 mb-3">
            {t.affiliate}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((p) => {
              const url = resolveAffiliateUrl(lang as any, p as any);
              const title =
                (p as any).title_i18n?.[lang] ?? p.title;
              const description =
                (p as any).description_i18n?.[lang] ?? p.description;
              const tag =
                (p as any).tag_i18n?.[lang] ?? p.tag;

              return (
                <a
                  key={p.id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-[#E5DDCF] bg-white/90 p-3 flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  {p.imageUrl && (
                    <img
                      src={p.imageUrl}
                      alt={title}
                      className="h-28 w-full object-cover rounded-xl"
                    />
                  )}
                  <p className="text-sm font-semibold text-neutral-900">
                    {title}
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    {description}
                  </p>
                  {tag && (
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700">
                      #{tag}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </HybridCard>
      )}
    </div>
  );
}
