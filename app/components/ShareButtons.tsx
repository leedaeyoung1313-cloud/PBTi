// app/components/ShareButtons.tsx
"use client";

import { useEffect, useState } from "react";

type ShareButtonsProps = {
  /** 공유 메시지에 같이 들어갈 제목 (예: "카리스마 캣 리더 (ENTJ)") */
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 클라이언트에서 현재 페이지 URL 가져오기
      setUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("링크가 복사되었어요! 카톡이나 인스타 DM에 바로 붙여넣기 하시면 돼요 :)");
    } catch (e) {
      alert("링크 복사에 실패했어요. 브라우저 주소창에서 직접 복사해주세요!");
    }
  };

  const openNewWindow = (href: string) => {
    if (!url) return;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const shareToFacebook = () => {
    if (!url) return;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    openNewWindow(shareUrl);
  }

  const openInstagram = () => {
    // 인스타는 웹에서 바로 링크 공유 URL이 없어서 앱/웹 메인으로만 띄우고,
    // 복사한 링크를 직접 붙여넣게 안내하는 방식이 현실적이에요.
    openNewWindow("https://www.instagram.com/");
  };

  return (
    <section className="mt-6 border-t border-zinc-200 pt-4">
      <p className="mb-2 text-xs font-semibold text-zinc-500">이 결과 공유하기</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {/* 링크 복사 */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1 hover:bg-zinc-100"
        >
          📎 <span>링크 복사</span>
        </button>

        {/* 카카오톡 공유 → 링크 복사해서 직접 붙여넣는 컨셉 */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-full border border-yellow-400 text-yellow-700 px-3 py-1 hover:bg-yellow-50"
        >
          🟡 <span>카톡에 붙여넣기</span>
        </button>

        {/* 페이스북 공유 (웹 공유 링크) */}
        <button
          type="button"
          onClick={shareToFacebook}
          className="flex items-center gap-1 rounded-full border border-blue-500 text-blue-600 px-3 py-1 hover:bg-blue-50"
        >
          👍 <span>페이스북</span>
        </button>

        {/* 인스타그램 → 앱/웹 열기 + 안내 (링크는 직접 붙여넣게) */}
        <button
          type="button"
          onClick={openInstagram}
          className="flex items-center gap-1 rounded-full border border-pink-400 text-pink-500 px-3 py-1 hover:bg-pink-50"
        >
          📸 <span>인스타그램</span>
        </button>
      </div>

      <p className="mt-2 text-[11px] text-zinc-400">
        * 링크를 복사해서 카카오톡, 인스타 DM, 문자 등 원하는 곳에 붙여넣어 공유할 수 있어요.
      </p>
    </section>
  );
}
