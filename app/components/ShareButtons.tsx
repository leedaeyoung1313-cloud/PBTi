// app/components/ShareButtons.tsx
"use client";

import { useEffect, useState } from "react";

type ShareButtonsProps = {
  /** 공유 메시지 제목 (예: "카리스마 캣 리더 (ENTJ)") */
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("🔗 링크가 복사되었습니다!\n카카오톡, 인스타그램 DM 등에 붙여넣기 하세요 :)");
    } catch (e) {
      alert("복사에 실패했어요. 주소창에서 직접 복사해주세요!");
    }
  };

  return (
    <section className="mt-6 border-t border-zinc-200 pt-4">
      <p className="mb-2 text-xs font-semibold text-zinc-500">이 결과 공유하기</p>

      <button
        type="button"
        onClick={handleCopy}
        className="flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1 text-xs hover:bg-zinc-100"
      >
        📎 링크 복사
      </button>

      <p className="mt-2 text-[11px] text-zinc-400">
        * 복사된 링크를 카톡, 인스타 DM, 문자 등에 자유롭게 붙여넣어 공유하실 수 있어요.
      </p>
    </section>
  );
}
