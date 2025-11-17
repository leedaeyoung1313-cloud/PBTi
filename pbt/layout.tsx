
"use client";
import type { ReactNode } from "react";
import { useLanguage } from "../../components/language-provider";

const tNav = {
  ko: {
    intro: "소개",
    dog: "강아지 테스트",
    cat: "고양이 테스트",
    f1: "PBTi는 Myers-Briggs Type Indicator®(MBTI®)와 관련 없는 독립적인 반려동물 성향 콘텐츠이며, 본 서비스의 결과는 과학적 진단이나 치료 목적이 아닌 일반 정보 제공용입니다.",
    f2: "본 페이지에는 쿠팡 파트너스 링크가 포함될 수 있으며, 이를 통해 일정 수수료를 제공받을 수 있습니다.",
    terms: "이용약관",
    privacy: "개인정보 처리방침",
  },
  en: {
    intro: "Introduction",
    dog: "Dog Test",
    cat: "Cat Test",
    f1: "PBTi is an independent pet personality content and is not related to MBTI®. Results are for information only, not medical diagnosis or treatment.",
    f2: "This page may include Coupang Partners affiliate links through which a commission may be earned.",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
  },
  ja: {
    intro: "紹介",
    dog: "ワンちゃんテスト",
    cat: "ネコちゃんテスト",
    f1: "PBTiはMBTI®とは無関係の独立したペット性格コンテンツであり、結果は診断や治療を目的としたものではなく情報提供のみを目的としています。",
    f2: "本ページにはクーパンパートナーズのアフィリエイトリンクが含まれる場合があります。",
    terms: "利用規約",
    privacy: "プライバシーポリシー",
  },
  zh: {
    intro: "介绍",
    dog: "狗狗测试",
    cat: "猫咪测试",
    f1: "PBTi 是独立的宠物性格内容，与 MBTI® 无关，结果仅供参考，不作为医疗诊断或治疗依据。",
    f2: "本页面可能包含 Coupang Partners 的联盟链接，并可能因此获得佣金。",
    terms: "服务条款",
    privacy: "隐私政策",
  },
} as const;

export default function PbtLayout({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();
  const t = tNav[lang];
  return (
    <div className="min-h-screen bg-[#F9F5EC] text-[#262626]">
      <header className="border-b border-[#E5DDCF]/70 bg-[#F9F5EC]/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-sm font-semibold">
              P
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm sm:text-base">PBTi</span>
              <span className="text-[11px] sm:text-xs text-neutral-500">
                Pet Behavioral Type Indicator
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex gap-4 text-xs text-neutral-600">
              <a href="/pbt" className="hover:text-neutral-900">{t.intro}</a>
              <a href="/pbt/dog" className="hover:text-neutral-900">{t.dog}</a>
              <a href="/pbt/cat" className="hover:text-neutral-900">{t.cat}</a>
            </nav>
            <div className="flex items-center gap-1 text-[11px]">
              {(["ko","en","ja","zh"] as const).map(code => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-2 py-1 ${
                    lang === code ? "bg-orange-500 text-white" : "bg-white/80 text-neutral-700 border border-[#E5DDCF]"
                  } transition`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

      <footer className="mt-12 border-t border-[#E5DDCF]/80 bg-[#F9F5EC]">
        <div className="mx-auto max-w-5xl px-4 py-6 text-[11px] sm:text-xs text-neutral-500 space-y-2">
          <p>{t.f1}</p>
          <p>{t.f2}</p>
          <div className="flex flex-wrap justify-between gap-2 pt-2 border-t border-dashed border-[#E5DDCF]/80">
            <span>© 2025 PBTi. All rights reserved.</span>
            <div className="flex gap-3">
              <a href="/legal/terms" className="hover:text-neutral-700">{t.terms}</a>
              <a href="/legal/privacy" className="hover:text-neutral-700">{t.privacy}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
