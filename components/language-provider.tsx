"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en" | "ja" | "zh";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("pbti_lang") as Lang | null;
    if (stored) setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("pbti_lang", next);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
