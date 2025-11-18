// app/pbt/types/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../components/language-provider";
import { HybridCard } from "../../components/HybridCard";
import { dogTypesI18n } from "../../../data/dogTypes.i18n";
import { catTypesI18n } from "../../../data/catTypes.i18n";

const speciesTabs = {
  dog: {
    ko: "강아지 유형",
    en: "Dog Types",
    ja: "ワンちゃんタイプ",
    zh: "狗狗类型",
  },
  cat: {
    ko: "고양이 유형",
    en: "Cat Types",
    ja: "ネコちゃんタイプ",
    zh: "猫咪类型",
  },
} as const;

export default function PbtTypesLibraryPage() {
  const { lang } = useLanguage();
  const [current, setCurrent] = React.useState<"dog" | "cat">("dog");

  const title =
    lang === "ko"
      ? "강아지·고양이 PBTi 16가지 유형 한눈에 보기"
      : "Browse all PBTi types for dogs & cats";

  const desc =
    lang === "ko"
      ? "우리 아이가 어떤 유형인지 이미 알고 있다면, 아래에서 바로 결과 페이지로 이동할 수 있어요."
      : "If you already know your pet’s type, jump directly to the result page from the list below.";

  const list =
    current === "dog"
      ? Object.entries(dogTypesI18n as Record<string, any>)
      : Object.entries(catTypesI18n as Record<string, any>);

  return (
    <div className="space-y-8">
      {/* 상단 소개 영역 */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-orange-600 border border-[#E5DDCF]">
          🧾 PBTi 유형 도감
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          {title}
        </h1>
        <p className="text-sm text-neutral-600">{desc}</p>

        {/* 강아지 / 고양이 토글 탭 */}
        <div className="inline-flex rounded-full border border-[#E5DDCF] bg-white/80 p-1 text-xs mt-2">
          <button
            type="button"
            onClick={() => setCurrent("dog")}
            className={`px-4 py-1 rounded-full ${
              current === "dog"
                ? "bg-orange-500 text-white font-semibold"
                : "text-neutral-700"
            }`}
          >
            🐶 {speciesTabs.dog[lang]}
          </button>
          <button
            type="button"
            onClick={() => setCurrent("cat")}
            className={`px-4 py-1 rounded-full ${
              current === "cat"
                ? "bg-orange-500 text-white font-semibold"
                : "text-neutral-700"
            }`}
          >
            🐱 {speciesTabs.cat[lang]}
          </button>
        </div>
      </section>

      {/* 유형 리스트 그리드 */}
      <section className="grid gap-3 sm:grid-cols-2">
        {list.map(([code, profile]) => {
          const p: any = profile;
          const label = p.label_i18n?.[lang] ?? code;
          const nickname = p.nickname_i18n?.[lang] ?? "";
          const href =
            current === "dog"
              ? `/pbt/dog/result?type=${code}`
              : `/pbt/cat/result?type=${code}`;

          return (
            <Link key={code} href={href} className="block">
              <HybridCard>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">
                      {current === "dog" ? "Dog Type" : "Cat Type"} · {code}
                    </p>
                    <p className="text-sm font-semibold text-neutral-900">
                      {label}
                    </p>
                    {nickname && (
                      <p className="text-[11px] text-neutral-600 mt-1">
                        {nickname}
                      </p>
                    )}
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-[#F9F5EC] border border-[#E5DDCF] flex items-center justify-center text-xl">
                    {current === "dog" ? "🐶" : "🐱"}
                  </div>
                </div>
              </HybridCard>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
