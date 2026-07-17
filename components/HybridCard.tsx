"use client";
import { ReactNode } from "react";

export function HybridCard({
  title,
  children,
  accentBorderClassName,
}: {
  title?: ReactNode;
  children?: ReactNode;
  /** 그룹 컬러 등으로 기본 보더색을 덮어쓰고 싶을 때 전달 (예: "border-pbti-nt/40") */
  accentBorderClassName?: string;
}) {
  return (
    <div
      className={`rounded-2xl border ${
        accentBorderClassName ?? "border-neutral-200"
      } bg-white/70 p-4`}
    >
      {title && <h3 className="mb-2 text-sm font-semibold">{title}</h3>}
      {children}
    </div>
  );
}

export default HybridCard;
