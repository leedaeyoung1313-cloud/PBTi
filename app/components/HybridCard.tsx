import { ReactNode } from "react";

interface HybridCardProps {
  title?: string;
  children: ReactNode;
}

export function HybridCard({ title, children }: HybridCardProps) {
  return (
    <div className="rounded-3xl border border-[#E5DDCF] bg-white/80 shadow-sm p-5">
      {title && (
        <h2 className="text-sm font-semibold text-neutral-900 mb-2">
          {title}
        </h2>
      )}
      <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>
    </div>
  );
}
