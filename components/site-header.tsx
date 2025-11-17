// components/site-header.tsx
"use client";

import Link from "next/link";
import { useLanguage } from "./language-provider";

export function SiteHeader() {
  const { lang, setLang } = useLanguage();

  return (
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
          {(["ko", "en", "ja", "zh"] as const).map((code: any) => (
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
  );
}
