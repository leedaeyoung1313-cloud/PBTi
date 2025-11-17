// app/page.tsx
"use client";

import Link from "next/link";
import { useLanguage } from "../components/language-provider";


// 간단 번역 데이터 (필요하면 나중에 파일로 분리 가능)
const translations = {
  ko: {
    badge: "PBTi · Pet Behavioral Type Indicator",
    titleLine1: "반려동물 성향 분석의 시작",
    titleLine2: "PBTi에 오신 것을 환영합니다.",
    desc: "PBTi는 반려동물의 행동 패턴과 감정 반응을 바탕으로 16가지 성향 유형을 분석해 드리는 서비스입니다. 지금 우리 아이의 성격과 맞춤 케어를 알아보세요.",
    mainCta: "PBTi 소개 보러가기 / 들어가기",
    subLead: "또는 바로 테스트를 시작할 수도 있어요",
    dogCta: "강아지 PBTi",
    catCta: "고양이 PBTi",
  },
  en: {
    badge: "PBTi · Pet Behavioral Type Indicator",
    titleLine1: "Start understanding your pet’s personality",
    titleLine2: "Welcome to PBTi.",
    desc: "PBTi analyzes your pet’s behavior and emotional patterns to suggest one of 16 personality types. Discover the best way to care for your dog or cat.",
    mainCta: "See how PBTi works",
    subLead: "Or start the test right away",
    dogCta: "Dog PBTi",
    catCta: "Cat PBTi",
  },
  ja: {
    badge: "PBTi · Pet Behavioral Type Indicator",
    titleLine1: "ペットの性格診断のはじまり",
    titleLine2: "PBTiへようこそ。",
    desc: "PBTiはペットの行動パターンと感情反応から16タイプの性格傾向を分析します。あなたの子に合ったケアと遊び方を見つけてみましょう。",
    mainCta: "PBTiについて見る",
    subLead: "または今すぐテストを始める",
    dogCta: "ワンちゃん PBTi",
    catCta: "ネコちゃん PBTi",
  },
  zh: {
    badge: "PBTi · Pet Behavioral Type Indicator",
    titleLine1: "从这里开始了解宠物的性格",
    titleLine2: "欢迎来到 PBTi。",
    desc: "PBTi 通过分析宠物的行为和情绪反应，将其归类为 16 种性格类型。一起找到最适合你家孩子的照顾方式吧。",
    mainCta: "了解 PBTi 服务",
    subLead: "或者现在就开始测试",
    dogCta: "狗狗 PBTi",
    catCta: "猫咪 PBTi",
  },
} as const;

export default function HomePage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-[#F9F5EC]">
      {/* 상단 헤더: 로고 + 언어 스위치 */}
      <header className="w-full border-b border-[#E5DDCF]/60 bg-[#F9F5EC]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-xs font-semibold text-white shadow-sm">
              P
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-neutral-900">
                PBTi
              </span>
              <span className="text-[11px] text-neutral-500">
                Pet Behavioral Type Indicator
              </span>
            </div>
          </Link>

          {/* 언어 선택 */}
          <div className="flex items-center gap-2 text-[11px]">
            {(["ko", "en", "ja", "zh"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-2 py-1 ${
                  lang === code
                    ? "bg-orange-500 text-white"
                    : "bg-white/80 text-neutral-700 border border-[#E5DDCF]"
                } text-[11px] font-medium transition`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 이하 내용은 기존 코드 + t.*로 교체 */}
      <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-5xl flex-col justify-between space-y-16 px-6 py-12">
        {/* HERO */}
        <section className="flex flex-col items-center text-center space-y-6 pt-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-[11px] font-medium text-orange-600 shadow-sm border border-[#E5DDCF]">
            🐾 {t.badge}
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-snug">
            {t.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              {t.titleLine2}
            </span>
          </h1>

          <p className="max-w-xl text-sm text-neutral-600 leading-relaxed">
            {t.desc}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <Link
              href="/pbt"
              className="rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition"
            >
              {t.mainCta}
            </Link>

            <div className="flex flex-col sm:flex-row gap-3 text-xs text-neutral-600 items-center justify-center">
              <span className="text-[11px] text-neutral-500">
                {t.subLead}
              </span>
              <div className="flex gap-3">
                <Link
                  href="/pbt/dog"
                  className="rounded-full border border-[#E5DDCF] bg-white px-4 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                >
                  🐶 {t.dogCta}
                </Link>

                <Link
                  href="/pbt/cat"
                  className="rounded-full border border-[#E5DDCF] bg-white px-4 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                >
                  🐱 {t.catCta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 아래 FEATURE / FOOTER는 일단 한국어로 두고, 나중에 필요하면 같은 방식으로 t.* 적용 가능 */}
        {/* ... 기존 FEATURE SECTION & FOOTER 그대로 ... */}
      </div>
    </main>
  );
}
