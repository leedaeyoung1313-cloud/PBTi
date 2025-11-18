// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { LanguageProvider } from "../components/language-provider";

export const metadata: Metadata = {
  title: "PBTi - Pet Behavioral Type Indicator",
  description: "반려동물 성향 분석 웹서비스 PBTi by Soulverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* ✅ 카카오톡 / 네이버 / 페이스북 / 트위터 미리보기용 OG 메타 태그 */}
        <meta
          property="og:title"
          content="PBTi - Pet Behavioral Type Indicator"
        />
        <meta
          property="og:description"
          content="반려동물 성향 분석 테스트로 우리 아이 성향을 분석해보세요!"
        />
        <meta property="og:url" content="https://petbti.netlify.app" />
        <meta property="og:type" content="website" />

        {/* ✅ 절대 경로로 써야 함 */}
        <meta
          property="og:image"
          content="https://petbti.netlify.app/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 트위터 카드 (선택이지만 넣어두면 이득) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://petbti.netlify.app/og-image.png"
        />
      </head>

      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            {/* 페이지 내용 */}
            <main className="flex-1">{children}</main>

            {/* 공통 푸터 */}
            <footer className="border-t border-[#E5DDCF] bg-[#F9F5EC]/80">
              <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-4 text-[11px] text-neutral-600 sm:flex-row">
                <div className="flex items-center gap-3">
                  <Link href="/legal/terms" className="hover:underline">
                    이용약관
                  </Link>
                  <span className="text-neutral-300">|</span>
                  <Link href="/legal/privacy" className="hover:underline">
                    개인정보처리방침
                  </Link>
                </div>
                <div className="text-neutral-400">
                  © {new Date().getFullYear()} Soulverse · PBTi
                </div>
              </div>
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
