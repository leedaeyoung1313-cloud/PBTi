import "./globals.css";
import { LanguageProvider } from "../components/language-provider";

export const metadata = {
  title: "PBTi - Pet Behavioral Type Indicator",
  description:
    "반려동물의 행동 패턴 기반으로 16가지 성향 유형을 분석하는 PBTi 서비스. 강아지/고양이 맞춤 성격 분석 및 케어 가이드 제공.",
  keywords: [
    "PBTi",
    "반려동물 성향 테스트",
    "강아지 성격 유형",
    "고양이 성격 유형",
    "펫 MBTI",
    "반려동물 케어",
    "펫 심리",
  ],
  authors: [{ name: "PBTi" }],
  creator: "PBTi Team",
  publisher: "PBTi",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "PBTi - 반려동물 성향 분석",
    description:
      "반려동물 행동 패턴을 기반으로 성향 유형을 분석하는 PBTi 서비스",
    type: "website",
    url: "https://yourdomain.com",
    siteName: "PBTi",
    images: [
      {
        url: "/og-pbti.png",
        width: 1200,
        height: 630,
        alt: "PBTi - Pet Behavioral Type Indicator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PBTi - 반려동물 성향 분석",
    description:
      "반려동물 행동 기반 성향 분석. 16가지 강아지/고양이 유형 제공.",
    images: ["/og-pbti.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#F9F5EC] text-neutral-900">
        {/* 전체 앱을 전역 Provider로 감쌈 */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
