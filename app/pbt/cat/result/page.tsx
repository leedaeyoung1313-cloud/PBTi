// app/pbt/cat/result/page.tsx
"use client";

import { HybridCard } from "../../../components/HybridCard";
import ShareButtons from "../../../components/ShareButtons";
import { catTypes, CatCode } from "../../../../data/catTypes";
import { catTypesI18n } from "../../../../data/catTypes.i18n";
import { catProducts } from "../../../../data/catProducts";
import { catGlobalProducts } from "../../../../data/catGlobalProducts";
import { useLanguage } from "../../../../components/language-provider";
import { resolveAffiliateUrl } from "../../../../data/affiliate";
import { CAT_DESC_PROFESSIONAL_KO } from "../../../../data/catExplain.ko";
import { CoupangProductSection } from "../../../components/CoupangProductSection";
import type { CoupangProduct } from "../../../components/CoupangProductCard";
import { getPbtiGroupStyle } from "../../../../data/pbtiGroup";

interface SearchParams {
  type?: string;
}

const tRes = {
  ko: {
    badge: "🐱 고양이 PBTi 결과",
    disclaimer:
      "본 결과는 반려묘의 평소 행동 경향을 기반으로 한 참고 정보이며, 의학적 진단이나 치료를 대체하지 않습니다.",
    strengths: "강점 (Strength)",
    weaknesses: "이렇게 함께해보세요",
    likes: "이 유형이 좋아하는 활동",
    care: "케어 팁",
    cats: "잘 맞는 상품 카테고리",
    products: "추천 상품",
    productsTitle: (nickname: string) => `${nickname}에게 딱 맞는 추천 아이템`,
    ctaLabel: "쿠팡에서 보기",
    donationNotice:
      "🐾 이 상품을 통해 발생한 수익은 매출 정산 후 국내 지자체 동물보호센터에 후원됩니다.",
    affiliate:
      "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",
  },
  en: {
    badge: "🐱 Cat PBTi Result",
    disclaimer:
      "This result is for informational purposes based on everyday behavior; it is not a medical diagnosis or treatment.",
    strengths: "Strengths",
    weaknesses: "Ways to support them",
    likes: "Activities this type enjoys",
    care: "Care tips",
    cats: "Recommended product categories",
    products: "Recommended products",
    productsTitle: (nickname: string) => `Picks perfect for ${nickname}`,
    ctaLabel: "Check on Coupang",
    donationNotice:
      "🐾 A portion of the proceeds from these picks is donated to local government-run animal shelters after revenue settlement.",
    affiliate:
      "Links may use affiliate programs depending on your language/region.",
  },
  ja: {
    badge: "🐱 ネコちゃん PBTi 結果",
    disclaimer:
      "本結果は日常の行動傾向に基づく参考情報であり、医療的な診断や治療に代わるものではありません。",
    strengths: "強み",
    weaknesses: "こうやって寄り添ってみましょう",
    likes: "このタイプが好きな活動",
    care: "ケアのヒント",
    cats: "おすすめ商品カテゴリー",
    products: "おすすめ商品",
    productsTitle: (nickname: string) => `${nickname}にぴったりのおすすめアイテム`,
    ctaLabel: "Coupangで見る",
    donationNotice:
      "🐾 このアイテムから生まれた収益の一部は、売上精算後に国内自治体運営の動物保護センターへ寄付されます。",
    affiliate:
      "言語/地域によりアフィリエイトリンクが適用される場合があります。",
  },
  zh: {
    badge: "🐱 猫咪 PBTi 结果",
    disclaimer:
      "本结果仅基于日常行为供参考，不构成医疗诊断或治疗建议。",
    strengths: "优势",
    weaknesses: "试着这样陪伴它",
    likes: "该类型喜欢的活动",
    care: "照顾建议",
    cats: "推荐商品类别",
    products: "推荐商品",
    productsTitle: (nickname: string) => `为${nickname}精选的推荐好物`,
    ctaLabel: "去Coupang查看",
    donationNotice:
      "🐾 通过这些商品产生的部分收益，将在销售结算后捐赠给国内地方政府运营的流浪动物保护中心。",
    affiliate: "根据语言/地区可能使用联盟链接。",
  },
} as const;

export default function CatResultPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const { lang } = useLanguage();
  const t = tRes[lang];

  const raw = (searchParams?.type || "INFJ").toUpperCase();
  const type = ((catTypes as any)[raw] ? raw : "INFJ") as CatCode;
  const groupStyle = getPbtiGroupStyle(type);

  // Base + i18n overlay
  const base = catTypes[type];
  const i18n = (catTypesI18n as any)?.[type];

  const nickname = i18n?.nickname_i18n?.[lang] ?? base.nickname;
  const summary = i18n?.summary_i18n?.[lang] ?? base.summary;
  const strengths = i18n?.strengths_i18n?.[lang] ?? base.strengths;
  const weaknesses = i18n?.weaknesses_i18n?.[lang] ?? base.weaknesses;
  const activities =
    i18n?.idealActivities_i18n?.[lang] ?? base.idealActivities;
  const careTips = i18n?.careTips_i18n?.[lang] ?? base.careTips;
  const categories =
    i18n?.recommendedCategories_i18n?.[lang] ??
    base.recommendedCategories;

  // ✅ Hero에 쓸 설명
  const explain =
    lang === "ko" ? CAT_DESC_PROFESSIONAL_KO[type] : summary;

  // 🔥 이 유형(type)과 매치되는 추천 상품 2~3개를 자동으로 구성
  // - 타입 전용 상품이 2개 이상이면 타입 전용 상품만 최대 3개
  // - 타입 전용 상품이 부족하면 공통 상품으로 채워서 최소 2개는 보장
  const typeProducts = catProducts[type] || [];
  const productItems =
    typeProducts.length >= 2
      ? typeProducts.slice(0, 3)
      : [...typeProducts, ...catGlobalProducts].slice(0, 3);

  // CoupangProductSection에 넘길 형태로 변환
  const coupangProducts: CoupangProduct[] = productItems.map((p: any) => {
    const url = resolveAffiliateUrl(lang as any, p as any);
    const title = (p as any).title_i18n?.[lang] ?? p.title;
    const brand = (p as any).tag_i18n?.[lang] ?? (p as any).tag ?? undefined;
    const reason = (p as any).description_i18n?.[lang] ?? (p as any).description;
    const image = (p as any).imageUrl ?? undefined;

    return {
      title,
      brand,
      reason,
      url,
      image,
    };
  });

  const shareTitle = `${base.code} · ${nickname}`;
  const shareSubtitle = summary;

    return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* SNS 공유용 카드 */}
      <HybridCard accentBorderClassName={groupStyle.border}>
        <div
          className={`rounded-3xl border ${groupStyle.border} bg-gradient-to-br ${groupStyle.gradientFrom} ${groupStyle.gradientTo} p-4 sm:p-5 flex flex-col gap-3`}
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={`text-[11px] font-medium ${groupStyle.text} mb-1`}>
                🐾 PBTi · 고양이 성향 유형
              </p>
              <p className="text-xl sm:text-2xl font-bold text-neutral-900">
                {shareTitle}
              </p>
            </div>
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/70 border border-[#E5DDCF] flex items-center justify-center text-2xl">
              🐱
            </div>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {shareSubtitle}
          </p>
          <p className="text-[10px] text-neutral-500 mt-1">
            이 카드는 스크린샷해서 카톡·인스타·블로그 등에 공유해도 좋아요.{" "}
            <span className={`font-semibold ${groupStyle.text}`}>
              PBTi (Pet Behavioral Type Indicator)
            </span>
          </p>

          <div className="mt-3">
            <ShareButtons title={shareTitle} />
          </div>
        </div>
      </HybridCard>

      {/* Hero */}
      <HybridCard accentBorderClassName={groupStyle.border}>
        <p className={`text-xs font-medium ${groupStyle.text} mb-1`}>{t.badge}</p>
        <p className="text-2xl font-bold text-neutral-900 mb-1 flex items-baseline gap-2">
          <span className={groupStyle.text}>{base.code}</span>
          <span className="text-sm text-neutral-500">· {nickname}</span>
        </p>

        <p className="text-sm text-neutral-700 whitespace-pre-line">
          {explain}
        </p>

        <p className="mt-3 text-[11px] text-neutral-500">{t.disclaimer}</p>
      </HybridCard>

      {/* 강점 / 약점 */}
      <div className="grid gap-4 md:grid-cols-2">
        <HybridCard title={t.strengths}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {strengths.map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </HybridCard>
        <HybridCard title={t.weaknesses}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {weaknesses.map((w: string, i: number) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </HybridCard>
      </div>

      {/* 활동 / 케어 */}
      <div className="grid gap-4 md:grid-cols-2">
        <HybridCard title={t.likes}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {activities.map((a: string, i: number) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </HybridCard>
        <HybridCard title={t.care}>
          <ul className="list-disc pl-4 text-sm space-y-1">
            {careTips.map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </HybridCard>
      </div>

      {/* 🔥 유형별 자동 큐레이션 추천 상품 – 쿠팡 파트너스 섹션 (검색 위젯 포함 한 박스) */}
      {coupangProducts.length > 0 && (
        <CoupangProductSection
          title={t.productsTitle(nickname)}
          products={coupangProducts}
          ctaLabel={t.ctaLabel}
          disclaimer={t.affiliate}
          donationNotice={t.donationNotice}
          variant="cat"
        />
      )}

      {/* 추천 카테고리 */}
      <HybridCard title={t.cats}>
        <div className="flex flex-wrap gap-2 mt-1">
          {categories.map((cat: string, i: number) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-[#E5DDCF] bg-white/80 px-3 py-1 text-[11px] text-neutral-700"
            >
              #{cat}
            </span>
          ))}
        </div>
      </HybridCard>
    </div>
  );
}
