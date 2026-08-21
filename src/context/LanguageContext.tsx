"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioDataEn, portfolioDataDe, uiTranslations, PortfolioData } from "@/data/portfolioData";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: PortfolioData;
  t: (key: keyof typeof uiTranslations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-language") as Language;
    if (savedLang === "en" || savedLang === "de") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  // Safe fallback to prevent hydration mismatch during Server-Side-Rendering (SSR)
  const resolvedLanguage = mounted ? language : "en";
  const data = resolvedLanguage === "de" ? portfolioDataDe : portfolioDataEn;

  const t = (key: keyof typeof uiTranslations.en): string => {
    const lang = mounted ? language : "en";
    return uiTranslations[lang][key] || uiTranslations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: resolvedLanguage, setLanguage, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
