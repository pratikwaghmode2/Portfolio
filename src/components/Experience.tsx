"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const { data, t } = useLanguage();
  const { experience, education } = data;

  const items = activeTab === "work" ? experience : education;

  return (
    <section id="experience" className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto border-b border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("careerTimeline")}
        </h2>
        <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
        <p className="text-slate-500 dark:text-slate-400 max-w-lg">
          {t("timelineSubtitle")}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex justify-center mb-12">
        <div className="p-1 rounded-2xl glass-premium flex items-center gap-1 border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "work"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            {t("workHistory")}
          </button>
          
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "education"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            {t("education")}
          </button>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
        {items.map((item, idx) => {
          const isEdu = activeTab === "education";
          const title = isEdu ? (item as any).degree : (item as any).role;
          const subtitle = isEdu ? (item as any).school : (item as any).company;
          const details = isEdu ? (item as any).details : (item as any).description;
          const grade = isEdu ? (item as any).grade : null;

          return (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline node icon */}
              <span className="absolute -left-[17px] top-1 bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-slate-800 p-1.5 rounded-xl text-slate-550 dark:text-slate-350 group-hover:border-brand-cyan transition-colors duration-300">
                {isEdu ? (
                  <GraduationCap className="w-4.5 h-4.5 group-hover:text-brand-cyan transition-colors" />
                ) : (
                  <Briefcase className="w-4.5 h-4.5 group-hover:text-brand-cyan transition-colors" />
                )}
              </span>

              {/* Subtitle / Timeline side label (only visible on large screens) */}
              <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right">
                <span className="text-xs font-mono font-bold tracking-tight text-slate-500 dark:text-slate-455 uppercase">
                  {item.duration.split(" (")[0]}
                </span>
              </div>

              {/* Main Card */}
              <div className="glass-premium p-6 rounded-2xl border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors shadow-sm">
                
                {/* Title & Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-905 dark:text-white leading-tight">
                      {title}
                    </h3>
                    <h4 className="text-sm font-semibold text-brand-cyan font-mono mt-1">
                      {subtitle}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 text-xs font-semibold font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1 md:hidden">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Optional Grade badge */}
                {grade && (
                  <span className="inline-block text-xs font-mono font-bold text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2.5 py-1 rounded-md mb-4">
                    {grade}
                  </span>
                )}

                {/* Details bullet points */}
                <ul className="space-y-2.5">
                  {details.map((desc: string, descIdx: number) => (
                    <li key={descIdx} className="flex items-start gap-2.5 text-sm text-slate-655 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-cyan flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
