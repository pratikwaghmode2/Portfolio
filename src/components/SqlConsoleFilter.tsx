"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Play, RotateCcw } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface SqlConsoleFilterProps {
  onFilterChange: (filteredProjects: Project[]) => void;
}

interface QueryPreset {
  id: string;
  query: string;
  descriptionKey: "allProjects" | "dataEngineering" | "roboticsSwarmSystems" | "pythonMlDriven";
  filterFn: (projects: Project[]) => Project[];
}

export default function SqlConsoleFilter({ onFilterChange }: SqlConsoleFilterProps) {
  const { data, t } = useLanguage();
  const projects = data.projects;

  const [activeQueryId, setActiveQueryId] = useState<string>("all");
  const [displayedQueryText, setDisplayedQueryText] = useState("SELECT * FROM projects;");
  const [isTyping, setIsTyping] = useState(false);
  const [executionStats, setExecutionStats] = useState({ rows: projects.length, timeMs: 4 });

  const queryPresets: QueryPreset[] = [
    {
      id: "all",
      query: "SELECT * FROM projects ORDER BY date_created DESC;",
      descriptionKey: "allProjects",
      filterFn: (projects) => projects
    },
    {
      id: "de",
      query: "SELECT * FROM projects WHERE category = 'Data Engineering';",
      descriptionKey: "dataEngineering",
      filterFn: (projects) => projects.filter((p) => p.category === "Data Engineering")
    },
    {
      id: "robotics",
      query: "SELECT * FROM projects WHERE category = 'Robotics & AI';",
      descriptionKey: "roboticsSwarmSystems",
      filterFn: (projects) => projects.filter((p) => p.category === "Robotics & AI")
    },
    {
      id: "ml",
      query: "SELECT * FROM projects WHERE tags LIKE '%Python%';",
      descriptionKey: "pythonMlDriven",
      filterFn: (projects) => projects.filter((p) => p.techStack.includes("Python"))
    }
  ];

  const handlePresetClick = (preset: QueryPreset) => {
    if (isTyping) return;
    setActiveQueryId(preset.id);
    setIsTyping(true);

    // Typing animation
    let currentText = "";
    const targetText = preset.query;
    let index = 0;

    const interval = setInterval(() => {
      currentText += targetText[index];
      setDisplayedQueryText(currentText);
      index++;

      if (index >= targetText.length) {
        clearInterval(interval);
        setIsTyping(false);
        // Apply filter after typing completes
        const filtered = preset.filterFn(projects);
        onFilterChange(filtered);
        setExecutionStats({
          rows: filtered.length,
          timeMs: Math.floor(Math.random() * 8) + 2
        });
      }
    }, 15);
  };

  // Run the filter automatically when projects change (on mount or on language toggle)
  useEffect(() => {
    const activePreset = queryPresets.find((q) => q.id === activeQueryId) || queryPresets[0];
    const filtered = activePreset.filterFn(projects);
    onFilterChange(filtered);
    setExecutionStats({
      rows: filtered.length,
      timeMs: 4
    });
    // Set query string immediately if not currently animating typing
    if (!isTyping) {
      setDisplayedQueryText(activePreset.query);
    }
  }, [projects, activeQueryId]);

  // Syntax highlighting helper
  const renderHighlightedSql = (sql: string) => {
    const keywords = ["SELECT", "FROM", "WHERE", "ORDER BY", "DESC", "LIKE"];
    const strings = ["'projects'", "'Data Engineering'", "'Robotics & AI'", "'%Python%'"];
    const operators = ["*", "=", "%"];

    let words = sql.split(/(\s+|,|;)/);

    return words.map((word, idx) => {
      const trimmed = word.trim().replace(/;$/, "");
      if (keywords.includes(word.toUpperCase()) || keywords.includes(trimmed.toUpperCase())) {
        return <span key={idx} className="text-brand-purple font-bold">{word}</span>;
      }
      if (strings.includes(word) || strings.includes(trimmed)) {
        return <span key={idx} className="text-brand-emerald">{word}</span>;
      }
      if (operators.includes(word)) {
        return <span key={idx} className="text-brand-cyan font-semibold">{word}</span>;
      }
      if (word === "projects") {
        return <span key={idx} className="text-[#e2e8f0] dark:text-[#94a3b8] underline decoration-brand-cyan/40">{word}</span>;
      }
      return <span key={idx} className="text-slate-350">{word}</span>;
    });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Selector presets buttons */}
      <div className="flex flex-wrap gap-2">
        {queryPresets.map((preset) => {
          const isActive = activeQueryId === preset.id;
          return (
            <button
              key={preset.id}
              disabled={isTyping}
              onClick={() => handlePresetClick(preset)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-brand-cyan/10 border-brand-cyan text-brand-cyan font-bold"
                  : "bg-white/40 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {t(preset.descriptionKey)}
            </button>
          );
        })}
      </div>

      {/* SQL Terminal Console */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
        {/* Terminal Header */}
        <div className="bg-slate-100 dark:bg-[#0b0e14] px-4 py-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-mono font-bold text-slate-605 dark:text-slate-400">
              query_console.sql
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
        </div>

        {/* Terminal Editor Body */}
        <div className="bg-slate-950 p-5 font-mono text-sm min-h-[100px] flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <span className="text-brand-cyan font-bold select-none">&gt;</span>
            <div className="flex-1 whitespace-pre-wrap leading-relaxed text-left">
              {renderHighlightedSql(displayedQueryText)}
              {isTyping && <span className="inline-block w-1.5 h-4 bg-brand-cyan animate-pulse ml-0.5" />}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-6 flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-900 pt-3 select-none">
            <span>
              STATUS: {isTyping ? "RUNNING..." : "SUCCESS"}
            </span>
            <span>
              {executionStats.rows} rows returned in {executionStats.timeMs}ms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
