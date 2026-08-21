"use client";

import React, { useEffect, useState } from "react";
import { Server, Activity, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TelemetryCard() {
  const { t } = useLanguage();
  const [ingestCount, setIngestCount] = useState(14820739);
  const [latency, setLatency] = useState(98);
  const [activeThreads, setActiveThreads] = useState(12);

  useEffect(() => {
    // Fluctuating telemetry data simulation
    const interval = setInterval(() => {
      setIngestCount((prev) => prev + Math.floor(Math.random() * 85) + 15);
      setLatency((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        const newVal = prev + change;
        return newVal > 120 ? 115 : newVal < 85 ? 90 : newVal;
      });
      setActiveThreads((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        const newVal = prev + change;
        return newVal > 16 ? 15 : newVal < 8 ? 9 : newVal;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Metric 1: Ingested Records */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-premium p-5 rounded-2xl relative overflow-hidden scanline-effect group"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/20 transition-all duration-500" />
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">
            {t("telemetryIngestLabel")}
          </span>
          <Database className="w-5 h-5 text-brand-cyan" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
            {ingestCount.toLocaleString()}
          </span>
          <span className="text-xs text-brand-cyan flex items-center gap-1 mt-2 font-mono">
            <span className="h-2 w-2 rounded-full bg-brand-cyan animate-ping inline-block" />
            +{(120).toLocaleString()} {t("telemetryIngestUnit")}
          </span>
        </div>
      </motion.div>

      {/* Metric 2: Uptime Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-premium p-5 rounded-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-emerald/10 rounded-full blur-2xl group-hover:bg-brand-emerald/20 transition-all duration-500" />
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">
            {t("telemetryUptimeLabel")}
          </span>
          <ShieldCheck className="w-5 h-5 text-brand-emerald" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
            99.98%
          </span>
          <span className="text-xs text-brand-emerald flex items-center gap-1 mt-2 font-mono">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-emerald animate-pulse inline-block" />
            {t("telemetryUptimeStatus")}
          </span>
        </div>
      </motion.div>

      {/* Metric 3: Latency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-premium p-5 rounded-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/10 rounded-full blur-2xl group-hover:bg-brand-purple/20 transition-all duration-500" />
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">
            {t("telemetryLatencyLabel")}
          </span>
          <Activity className="w-5 h-5 text-brand-purple" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
            {latency} ms
          </span>
          <span className="text-xs text-brand-purple flex items-center gap-2 mt-2 font-mono">
            <Server className="w-3.5 h-3.5" />
            {activeThreads} {t("telemetryLatencyStatus")}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
