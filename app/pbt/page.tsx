"use client";
import Link from "next/link";
import { useLanguage } from "../../components/language-provider";

const tPage = {
  ko: {
    badge: "반려동물 성격 유형 지표 · PBTi",
    title1: "우리 집 강아지·고양이도",
    title2: "16가지 PBTi 유형이 있어요.",
    desc1:
      "30문항으로 알아보는 반려동물 성격 유형 지표. 에너지, 정보 처리, 결정 방식, 생활 패턴을 바탕으로",
    desc2:
      "강점·주의점·잘 맞는 놀이와 맞춤 케어·상품까지 한 번에 추천해 드립니다.",
    dog: "🐶 강아지 PBTi 시작하기",
    cat: "🐱 고양이 PBTi 시작하기",

    // 예전 ENTJ 샘플 카드용 텍스트(지금은 사용 안 함)
    today: "오늘의 결과",
    strength: "강점",
    caution: "주의할 점",
    likeTitle: "ENTJ 유형이 좋아하는 활동",

    // 하단 3컬럼 카드
    card1Title: "30문항 심리 테스트",
    card1Desc:
      "에너지, 정보, 결정, 생활 패턴을 4가지 축으로 나누어 16가지 유형을 도출합니다.",
    card2Title: "반려동물 맞춤 프로파일",
    card2Desc:
      "강점과 약점, 잘 맞는 놀이, 스트레스 신호까지 유형별로 정리해 드립니다.",
    card3Title: "케어 & 쇼핑 가이드",
    card3Desc:
      "유형별로 추천되는 장난감, 간식, 하우스 등을 쿠팡 파트너스 링크와 함께 제안합니다.",

    // 🔸 새로 추가: “이 사이트를 만든 이유” 카드
    storyBadge: "이 사이트를 만든 이유",
    storyTitle: "동물을 사랑하는 마음에서 시작된 프로젝트예요.",
    storyBody1:
      "반려동물과 함께 지내다 보면 ‘왜 이런 행동을 하지?’, ‘오늘은 왜 이렇게 예민할까?’ 같은 궁금함이 생기죠.",
    storyBody2:
      "PBTi는 그런 궁금함과 사랑에서 출발했습니다. 강아지·고양이의 에너지, 사회성, 정보 처리 방식, 생활 패턴을 30문항으로 정리해, 보호자가 우리 아이의 심리와 성향을 조금 더 깊게 이해할 수 있도록 돕는 작은 도구입니다.",
  },
  en: {
    badge: "Pet Personality Indicator · PBTi",
    title1: "Your dog or cat also has",
    title2: "one of 16 PBTi types.",
    desc1:
      "A 30-question indicator based on energy, info processing, decision style and lifestyle patterns.",
    desc2:
      "We recommend strengths, cautions, ideal play, custom care and products in one place.",
    dog: "🐶 Start Dog PBTi",
    cat: "🐱 Start Cat PBTi",

    today: "Today’s example result",
    strength: "Strengths",
    caution: "Things to watch out for",
    likeTitle: "Activities ENTJ dogs enjoy",

    card1Title: "30-question assessment",
    card1Desc:
      "We analyze four axes to determine 16 personality types.",
    card2Title: "Personalized pet profile",
    card2Desc:
      "We summarize strengths, weaknesses, play preference and stress signals by type.",
    card3Title: "Care & shopping guide",
    card3Desc:
      "Recommended toys, treats and houses with affiliate links.",

    storyBadge: "Why we created PBTi",
    storyTitle: "It began with wanting to understand our pets better.",
    storyBody1:
      "Living with a dog or cat, we often wonder, “Why are they acting like this today?” and “What might they be feeling right now?”",
    storyBody2:
      "PBTi was born from that curiosity and love. With just 30 questions, it reads your pet’s energy, social style and daily patterns so you can understand their mind a little deeper and care for them more gently.",
  },
  ja: {
    badge: "ペット性格タイプ指標 · PBTi",
    title1: "あなたのワンちゃん・ネコちゃんにも",
    title2: "16タイプのPBTi性格があります。",
    desc1:
      "エネルギー・情報処理・意思決定・生活パターンに基づく30問の指標です。",
    desc2:
      "強み・注意点・遊びの好み・ケア・アイテム提案をまとめてご案内します。",
    dog: "🐶 ワンちゃん PBTiを始める",
    cat: "🐱 ネコちゃん PBTiを始める",

    today: "本日のサンプル結果",
    strength: "強み",
    caution: "注意ポイント",
    likeTitle: "ENTJタイプが好きな遊び",

    card1Title: "30問の心理テスト",
    card1Desc:
      "4つの軸から16タイプの性格傾向を導き出します。",
    card2Title: "ペット専用プロファイル",
    card2Desc:
      "タイプごとの強み・弱み・遊び・ストレスサインを整理します。",
    card3Title: "ケア & ショッピングガイド",
    card3Desc:
      "おすすめのおもちゃ・おやつ・ハウスをアフィリエイトリンク付きで紹介します。",

    storyBadge: "PBTiを作った理由",
    storyTitle: "もっとペットの気持ちを理解したい、という想いから始まりました。",
    storyBody1:
      "一緒に暮らしていると「今日はどうしてこんな行動をするんだろう？」「今どんな気持ちなんだろう？」と気になることがたくさんあります。",
    storyBody2:
      "PBTiは、そんな好奇心とペットへの愛情から生まれました。30問でエネルギーや社交性、情報の受け取り方、生活パターンを読み解き、飼い主さんが愛犬・愛猫の心と性格を少し深く理解できるようお手伝いするツールです。",
  },
  zh: {
    badge: "宠物性格类型指标 · PBTi",
    title1: "你家的狗狗或猫咪也有",
    title2: "属于自己的 16 种 PBTi 类型。",
    desc1:
      "基于能量、信息处理、决策方式、生活模式的 30 题性格指标。",
    desc2:
      "一次性提供优点、注意事项、喜好玩法、照顾建议和商品推荐。",
    dog: "🐶 开始狗狗 PBTi",
    cat: "🐱 开始猫咪 PBTi",

    today: "今天的示例结果",
    strength: "优势",
    caution: "需要注意",
    likeTitle: "ENTJ 类型喜欢的活动",

    card1Title: "30 题心理测试",
    card1Desc: "从四个维度分析并归类到 16 种类型。",
    card2Title: "个性化档案",
    card2Desc: "按类型总结优点、弱点、玩法偏好和压力信号。",
    card3Title: "照顾 & 购物指南",
    card3Desc: "按类型推荐玩具、零食和窝，并附带联盟链接。",

    storyBadge: "我们为什么做 PBTi",
    storyTitle: "一切都源于想更懂自己的毛孩子。",
    storyBody1:
      "和狗狗、猫咪一起生活时，我们常常会想：「它今天为什么这样？」「现在到底是什么心情呢？」",
    storyBody2:
      "PBTi 就是从这种好奇和爱出发：通过 30 道问题，阅读它的能量、社交方式和生活习惯，帮助饲主更了解毛孩子的心理和性格，从而给出更温柔、合适的照顾。",
  },
} as const;

export default function PbtLandingPage() {
  const { lang } = useLanguage();
  const t = tPage[lang];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-orange-600 shadow-sm border border-[#E5DDCF]">
            🐾 {t.badge}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            {t.title1}
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {t.desc1}
            <br className="hidden sm:block" />
            {t.desc2}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/pbt/dog"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition"
            >
              {t.dog}
            </Link>
            <Link
              href="/pbt/cat"
              className="inline-flex items-center justify-center rounded-full border border-[#E5DDCF] bg-white/80 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-white transition"
            >
              {t.cat}
            </Link>
          </div>
          <p className="text-[11px] text-neutral-500">
            테스트 결과에는 반려동물 유형에 기반한 맞춤 케어 & 쿠팡 파트너스
            상품 추천이 포함될 수 있습니다.
          </p>
        </div>

        {/* 오른쪽: “이 사이트를 만든 이유” 단일 카드 */}
        <div className="relative">
          <div className="absolute -top-4 -right-2 h-10 w-10 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 blur-2 opacity-70" />
          <div className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-br from-emerald-400 to-amber-400 blur-[3px] opacity-70" />
          <div className="relative rounded-3xl bg-white/80 border border-[#E5DDCF] shadow-xl p-5 space-y-3">
            <p className="inline-flex items-center rounded-full bg-[#FFF7EC] px-3 py-1 text-[11px] font-medium text-orange-600 border border-[#F3E0BE]">
              {t.storyBadge}
            </p>
            <p className="text-sm sm:text-base font-semibold text-neutral-900">
              {t.storyTitle}
            </p>
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              {t.storyBody1}
            </p>
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              {t.storyBody2}
            </p>
          </div>
        </div>
      </section>

      {/* 3컬럼 설명 섹션 */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { title: t.card1Title, desc: t.card1Desc },
          { title: t.card2Title, desc: t.card2Desc },
          { title: t.card3Title, desc: t.card3Desc },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#E5DDCF] bg-white/80 p-4 shadow-sm"
          >
            <p className="text-sm font-semibold text-neutral-900 mb-1">
              {card.title}
            </p>
            <p className="text-[13px] text-neutral-600 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
