"use client";

import React, { useEffect } from "react";
import { X, Download, Printer, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  const { t } = useLanguage();

  // Escape key close handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    const printWindow = window.open(resumeUrl, "_blank");
    if (printWindow) {
      printWindow.addEventListener("load", () => {
        printWindow.print();
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
            className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header Control Bar */}
            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#0e121a]/80">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-tight text-slate-500 dark:text-slate-400">
                  document_viewer.sys
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                </button>

                {/* Direct Download button */}
                <a
                  href={resumeUrl}
                  download
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </a>

                {/* Open in new tab button */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Open in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="h-4 w-[1px] bg-slate-250 dark:bg-slate-800 mx-1" />

                {/* Close modal button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-200/50 hover:bg-red-500/10 text-slate-600 hover:text-red-550 dark:bg-slate-800/40 dark:hover:bg-red-500/20 dark:text-slate-350 dark:hover:text-red-400 transition-all cursor-pointer"
                  title="Close Viewer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded Resume Viewport */}
            <div className="flex-1 bg-slate-100 dark:bg-[#07090d] p-3 md:p-4 overflow-hidden relative">
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0 rounded-2xl bg-white shadow-sm"
                title="Pratik Waghmode Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
