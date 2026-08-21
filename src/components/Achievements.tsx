"use client";

import React from "react";
import { Sparkles, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Achievements() {
  const { data, t } = useLanguage();
  const { achievements } = data;

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto border-b border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("achievementsTitle")}
        </h2>
        <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
        <p className="text-slate-500 dark:text-slate-400 max-w-lg">
          {t("achievementsSubtitle")}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={ach.id}
              className="glass-premium p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:border-slate-350 dark:hover:border-slate-700 transition-colors shadow-sm group text-left"
            >
              {/* Highlight Circle Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-900 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 flex flex-shrink-0 flex-col items-center justify-center text-center text-white p-2 select-none group-hover:border-brand-cyan transition-all duration-300">
                <span className="text-[10px] uppercase font-mono tracking-tighter text-slate-400">
                  Impact
                </span>
                <span className="text-xs sm:text-sm font-extrabold font-mono text-brand-cyan mt-0.5 leading-none">
                  {ach.highlight.split(" ")[0]}
                </span>
                {ach.highlight.includes(" ") && (
                  <span className="text-[9px] font-mono text-slate-300 tracking-tighter truncate w-full">
                    {ach.highlight.split(" ").slice(1).join(" ")}
                  </span>
                )}
              </div>

              {/* Text Info */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {ach.category}
                  </span>
                  <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {ach.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
