// app/components/CoupangWidget.tsx
"use client";

export function CoupangWidget({ iframe }: { iframe: string }) {
  return (
    <div
      className="flex justify-center"
      dangerouslySetInnerHTML={{ __html: iframe }}
    />
  );
}
