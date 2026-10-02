"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, MapPin, Download, Sun, Moon, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ResumeModal from "./ResumeModal";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { data, t } = useLanguage();
  const { name, titles, bio, location, email, github, linkedin, profileImage, resumeUrl, website } = data.profile;
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const [downloadCount, setDownloadCount] = useState(142);

  useEffect(() => {
    const stored = localStorage.getItem("cv_download_count");
    if (stored) {
      setDownloadCount(parseInt(stored, 10));
    } else {
      const initialVal = Math.floor(Math.random() * 45) + 120;
      localStorage.setItem("cv_download_count", initialVal.toString());
      setDownloadCount(initialVal);
    }
  }, []);

  const incrementCounter = () => {
    setDownloadCount((prev) => {
      const nextVal = prev + 1;
      localStorage.setItem("cv_download_count", nextVal.toString());
      return nextVal;
    });
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden tech-grid scanline-effect border-b border-slate-200 dark:border-slate-800">
      
      {/* Floating neon gradients for high-end aesthetics */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-cyan/10 dark:bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple/10 dark:bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Navigation / Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-12 md:mb-16 z-20">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold tracking-widest uppercase bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-3 py-1 rounded-lg">
            PW
          </span>
          <span className="font-bold text-sm font-mono text-slate-800 dark:text-slate-200 hidden sm:inline">
            // sys_admin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all border border-slate-200 dark:border-slate-850 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-650" />
            )}
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
        
        {/* Left Side: Photo and Quick Bio */}
        <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start justify-center">
          
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold text-slate-500 dark:text-slate-350 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            {location}
          </motion.div>

          {/* Name & Titles */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors duration-300"
                >
                  {name}
                </a>
              ) : (
                name
              )}
            </motion.h1>

            {/* Dynamic Titles */}
            <div className="h-10 flex items-center">
              <span className="text-brand-cyan font-mono text-base sm:text-lg md:text-xl font-bold mr-2">
                &gt;
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-emerald"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-650 dark:text-slate-300 text-base md:text-lg max-w-xl leading-relaxed"
          >
            {bio}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <button
              onClick={() => {
                setIsResumeOpen(true);
                incrementCounter();
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyan/95 dark:hover:bg-brand-cyan/90 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-brand-cyan/20 dark:shadow-brand-cyan/10 hover:scale-102 hover:shadow-brand-cyan/30 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              {t("viewResume")}
            </button>

            <a
              href={resumeUrl}
              download
              onClick={incrementCounter}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-850/50 border border-slate-200 dark:border-slate-800 text-slate-805 dark:text-slate-200 font-semibold text-sm transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {t("resumeDownload")}
            </a>
            
            <div className="flex items-center gap-2">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-605 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-605 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-605 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Telemetry Counter Widget */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/30 w-fit select-none font-mono text-[10px] font-bold text-slate-500 dark:text-slate-450"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-slate-400 dark:text-slate-400 uppercase tracking-wider">{t("cvTelemetryLabel")}:</span>
            <span className="text-brand-cyan font-extrabold font-mono">{downloadCount}</span>
            <span>{t("hitsLabel")}</span>
          </motion.div>

        </div>

        {/* Right Side: Photo Headshot Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-brand-cyan/30 dark:border-brand-cyan/20 p-2 flex items-center justify-center">
            {/* Outer animated orbits */}
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-purple/40 animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[105%] h-[105%] rounded-full border border-slate-200 dark:border-slate-800 animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

            {/* Glowing Ring under image */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-brand-cyan via-brand-purple to-brand-emerald opacity-20 blur-xl pointer-events-none" />

            {/* Circular Profile headshot container using Next.js Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#0c101b] shadow-2xl">
              <Image
                src={profileImage}
                alt={name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          </div>
        </motion.div>

      </div>



      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={resumeUrl}
      />
    </section>
  );
}
