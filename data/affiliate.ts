// data/affiliate.ts
// Language-based affiliate URL resolver (ADD-ONLY).
// If a mapping is missing, it falls back to the original product.coupangUrl.

export type Lang = "ko" | "en" | "ja" | "zh";

export const affiliateById: Record<string, Partial<Record<Lang, string>>> = {
  // Example (fill gradually):
  // "entj-dog-1": { ko: "https://link.coupang.com/...", en: "https://amzn.to/..." },
};

export const resolveAffiliateUrl = (
  lang: Lang,
  product: { id?: string; coupangUrl?: string }
) => affiliateById[product?.id || ""]?.[lang] ?? product?.coupangUrl ?? "#";
