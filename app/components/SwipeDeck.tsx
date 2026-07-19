"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface SwipeDeckProps {
  slides: ReactNode[];
}

/**
 * 외부 라이브러리 없이 CSS scroll-snap만으로 만든 가로 스와이프 슬라이드.
 * 각 slide는 한 화면(컨테이너 너비) 전체를 차지하며, 하단에 dot 인디케이터를
 * 두어 몇 번째 카드인지 알 수 있게 하고, 데스크톱에서는 좌우 화살표도 보조로 노출한다.
 */
export function SwipeDeck({ slides }: SwipeDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [activeHeight, setActiveHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (!el.clientWidth) return;
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(Math.min(Math.max(idx, 0), slides.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [slides.length]);

  // 슬라이드마다 콘텐츠 길이가 다르므로, 지금 보이는 슬라이드 높이에 맞춰
  // 스크롤 컨테이너 높이를 동적으로 맞춘다 (그래야 짧은 슬라이드에서 인디케이터가
  // 화면 밖으로 밀려나지 않는다).
  useEffect(() => {
    const measure = () => {
      const node = slideRefs.current[active];
      if (node) setActiveHeight(node.offsetHeight);
    };
    measure();

    const node = slideRefs.current[active];
    if (!node || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [active, slides.length]);

  function goTo(index: number) {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        style={activeHeight ? { height: activeHeight } : undefined}
        className="no-scrollbar flex items-start snap-x snap-mandatory overflow-x-auto scroll-smooth transition-[height] duration-300 -mx-4 sm:mx-0"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(node) => {
              slideRefs.current[i] = node;
            }}
            className="w-full shrink-0 snap-start snap-always px-4 sm:px-0"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* 좌우 화살표 (데스크톱 보조 가이드) */}
      {active > 0 && (
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="이전 카드"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-9 w-9 items-center justify-center rounded-full bg-white/90 border border-[#E5DDCF] shadow-sm text-neutral-500 hover:text-neutral-800 transition"
        >
          ←
        </button>
      )}
      {active < slides.length - 1 && (
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="다음 카드"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-9 w-9 items-center justify-center rounded-full bg-white/90 border border-[#E5DDCF] shadow-sm text-neutral-500 hover:text-neutral-800 transition"
        >
          →
        </button>
      )}

      {/* 점(Dot) 인디케이터 */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${i + 1}번째 카드로 이동`}
            aria-current={active === i}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? "w-5 bg-orange-500" : "w-1.5 bg-neutral-300"
            }`}
          />
        ))}
      </div>

      {/* 스와이프 가능 힌트 (모바일, 처음 한 번) */}
      {active === 0 && (
        <p className="mt-1 text-center text-[10px] text-neutral-400 sm:hidden">
          ← 옆으로 넘겨서 더 보기 →
        </p>
      )}
    </div>
  );
}
