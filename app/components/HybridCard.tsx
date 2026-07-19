import { ReactNode } from "react";

interface HybridCardProps {
  title?: string;
  children: ReactNode;
  /** 그룹 컬러 등으로 기본 보더색을 덮어쓰고 싶을 때 전달 (예: "border-pbti-nt/40") */
  accentBorderClassName?: string;
}

export function HybridCard({
  title,
  children,
  accentBorderClassName,
}: HybridCardProps) {
  return (
    <div
      className={`rounded-3xl border ${
        accentBorderClassName ?? "border-[#E5DDCF]"
      } bg-white/80 shadow-sm p-5`}
    >
      {title && (
        <h2 className="text-sm font-semibold text-neutral-900 mb-2">
          {title}
        </h2>
      )}
      <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>
    </div>
  );
}
