// app/pbt/layout.tsx
"use client";

import type { ReactNode } from "react";
import { useLanguage } from "../../components/language-provider";

const tNav = {
  ko: {
    intro: "소개",
    dog: "강아지 테스트",
    cat: "고양이 테스트",
    types: "유형 전체보기",
    f1: "PBTi는 Myers-Briggs Type Indicator®(MBTI®)와 관련 없는 독립적인 반려동물 성향 콘텐츠이며, 본 서비스의 결과는 과학적 진단이나 치료 목적이 아닌 일반 정보 제공용입니다.",
    f2: "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",
    terms: "이용약관",
    privacy: "개인정보 처리방침",
  },
  en: {
    intro: "Introduction",
    dog: "Dog Test",
    cat: "Cat Test",
    types: "All Types",
    f1: "PBTi is independent pet personality content and is not related to MBTI®. Results are for general information only, not for medical diagnosis or treatment.",
    f2: "This posting is part of Coupang Partners activity, and we may earn a certain amount of commission from qualifying purchases.",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
  },
  ja: {
    intro: "紹介",
    dog: "ワンちゃんテスト",
    cat: "ネコちゃんテスト",
    types: "タイプ一覧",
    f1: "PBTiはMBTI®とは関係のない独立したペット性格コンテンツであり、本サービスの結果は医療的診断や治療を目的としたものではありません。",
    f2: "本投稿はクーパンパートナーズ活動の一環として、一定の手数料を受け取る場合があります。",
    terms: "利用規約",
    privacy: "プライバシーポリシー",
  },
  zh: {
    intro: "介绍",
    dog: "狗狗测试",
    cat: "猫咪测试",
    types: "全部类型",
    f1: "PBTi 是独立的宠物性格内容，与 MBTI® 无关，结果仅供一般信息参考，不作为医疗诊断或治疗依据。",
    f2: "本帖是 Coupang 合作项目的一部分，我们可能会因此获得一定金额的佣金。",
    terms: "使用条款",
    privacy: "隐私政策",
  },
} as const;

export default function PbtLayout({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();
  const t = tNav[lang];

  return (
    <div className="min-h-screen bg-[#F9F5EC] text-[#262626]">
      <header className="border-b border-[#E5DDCF]/70 bg-[#F9F5EC]/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2">
          {/* 상단: 로고 + (PC용 네비 + 언어 스위치) */}
          <div className="flex items-center justify-between">
            {/* 로고 영역 */}
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

            {/* 오른쪽: PC 네비 + 언어 버튼 */}
            <div className="flex items-center gap-3">
              {/* 🔹 PC(>=sm)에서만 보이는 네비 */}
              <nav className="hidden sm:flex gap-4 text-xs text-neutral-600">
                <a href="/pbt" className="hover:text-neutral-900">
                  {t.intro}
                </a>
                <a href="/pbt/dog" className="hover:text-neutral-900">
                  {t.dog}
                </a>
                <a href="/pbt/cat" className="hover:text-neutral-900">
                  {t.cat}
                </a>
                <a href="/pbt/types" className="hover:text-neutral-900">
                  {t.types}
                </a>
              </nav>

              {/* 언어 스위치 */}
              <div className="flex items-center gap-1 text-[11px]">
                {(["ko", "en", "ja", "zh"] as const).map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`rounded-full px-2 py-1 ${
                      lang === code
                        ? "bg-orange-500 text-white"
                        : "bg-white/80 text-neutral-700 border border-[#E5DDCF]"
                    } transition`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 🔹 모바일 전용 네비 (폰에서만 보임) */}
          <nav className="sm:hidden -mx-1 mt-1 flex gap-2 overflow-x-auto text-[11px] text-neutral-700">
            <a
              href="/pbt"
              className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DDCF] whitespace-nowrap"
            >
              {t.intro}
            </a>
            <a
              href="/pbt/dog"
              className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DDCF] whitespace-nowrap"
            >
              {t.dog}
            </a>
            <a
              href="/pbt/cat"
              className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DDCF] whitespace-nowrap"
            >
              {t.cat}
            </a>
            <a
              href="/pbt/types"
              className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DDCF] whitespace-nowrap"
            >
              {t.types}
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

      <footer className="mt-12 border-t border-[#E5DDCF]/80 bg-[#F9F5EC]">
        <div className="mx-auto max-w-5xl px-4 py-6 text-[11px] sm:text-xs text-neutral-500 space-y-2">
          <p>{t.f1}</p>
          <p>{t.f2}</p>
          <div className="flex flex-wrap justify-between gap-2 pt-2 border-t border-dashed border-[#E5DDCF]/80">
            <span>© {new Date().getFullYear()} PBTi. All rights reserved.</span>
            <div className="flex gap-3">
              <a href="/legal/terms" className="hover:text-neutral-700">
                {t.terms}
              </a>
              <a href="/legal/privacy" className="hover:text-neutral-700">
                {t.privacy}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
