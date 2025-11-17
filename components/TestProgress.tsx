"use client";

import { useLanguage } from "./language-provider";

interface TestProgressProps {
  current: number;
  total: number;
}

const tProg = {
  ko: { item: "문항" },
  en: { item: "Q" },
  ja: { item: "問" },
  zh: { item: "题" },
} as const;

export function TestProgress({ current, total }: TestProgressProps) {
  const { lang } = useLanguage();
  const label = tProg[lang].item;
  const percent = Math.round((current / total) * 100);

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[11px] text-neutral-500">
        <span>
          {label} {current} / {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#F1E6D7] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
