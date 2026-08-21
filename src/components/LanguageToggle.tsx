"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all border border-slate-200 dark:border-slate-850 cursor-pointer font-mono text-xs font-bold text-slate-800 dark:text-slate-200"
      aria-label="Toggle language"
    >
      <Globe className="w-3.5 h-3.5 text-brand-cyan animate-[pulse_2s_infinite]" />
      <span>{language === "en" ? "EN" : "DE"}</span>
    </button>
  );
}
