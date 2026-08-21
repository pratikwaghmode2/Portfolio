"use client";

import React from "react";
import { Award, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Certifications() {
  const { data, t } = useLanguage();
  const { certifications, profile } = data;

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto border-b border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("verifiedCredentials")}
        </h2>
        <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
        <p className="text-slate-500 dark:text-slate-400 max-w-lg">
          {t("certificationsSubtitle")}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={index}
              className="glass-premium p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-350 dark:hover:border-slate-700 transition-colors shadow-sm text-left"
            >
              <div>
                {/* Header Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-brand-cyan">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Title and Issuer */}
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono font-bold text-brand-cyan mb-3">
                  {cert.issuer}
                </p>
              </div>

              {/* Card Footer: Cred ID and Link */}
              <div className="border-t border-slate-200/60 dark:border-slate-850 pt-3 mt-4 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex flex-col gap-0.5">
                  <span>{t("issued")}: {cert.date}</span>
                  {cert.credentialId && (
                    <span className="text-[10px] text-slate-400">ID: {cert.credentialId}</span>
                  )}
                </div>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-0.5 text-slate-800 dark:text-white font-semibold hover:text-brand-cyan dark:hover:text-brand-cyan hover:underline transition-all cursor-pointer"
                  >
                    {t("verify")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] text-slate-400 italic">{t("internalCred")}</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {profile.certificationsPdfUrl && (
        <div className="flex justify-center mt-12">
          <a
            href={profile.certificationsPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan hover:text-white font-mono text-xs font-bold tracking-tight transition-all duration-300 shadow-sm hover:shadow-brand-cyan/20 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            {t("downloadAllCertificates")}
          </a>
        </div>
      )}

    </section>
  );
}
