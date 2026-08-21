"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import SqlConsoleFilter from "./SqlConsoleFilter";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Network, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Animation Sub-Component 1: LiDAR Laser Scanning (Autonomous Patient Escort Robot)
const LidarScanAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="absolute top-2 right-2 w-28 h-28 pointer-events-none select-none transition-all duration-500 opacity-20 dark:opacity-25 group-hover:opacity-40 group-hover:scale-105">
    <svg className="w-full h-full text-brand-cyan" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
      
      {isHovered && (
        <motion.line
          x1="50" y1="50" x2="50" y2="5"
          stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round"
          style={{ originX: "50px", originY: "50px" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />
      )}

      {isHovered && (
        <>
          <motion.circle
            cx="25" cy="40" r="2" fill="currentColor"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
          />
          <motion.circle
            cx="72" cy="32" r="2" fill="currentColor"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          />
          <motion.circle
            cx="45" cy="78" r="1.5" fill="currentColor"
            animate={{ opacity: [0.1, 0.9, 0.1] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 0.8 }}
          />
        </>
      )}
      
      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.25" opacity="0.3" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.25" opacity="0.3" />
    </svg>
  </div>
);

// Animation Sub-Component 2: Nodes Coordinate Mesh Grid (Swarm Robotics System)
const SwarmRoboticsAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="absolute top-2 right-2 w-28 h-28 pointer-events-none select-none transition-all duration-500 opacity-20 dark:opacity-25 group-hover:opacity-40 group-hover:scale-105">
    <svg className="w-full h-full text-brand-purple" viewBox="0 0 100 100" fill="none">
      {isHovered && (
        <motion.path
          d="M20,30 L50,20 L80,35 L65,70 L30,65 Z M50,20 L65,70 M30,65 L80,35"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          animate={{ strokeDashoffset: [0, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      )}
      {!isHovered && (
        <path
          d="M20,30 L50,20 L80,35 L65,70 L30,65 Z"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          opacity="0.4"
        />
      )}

      <motion.circle
        cx="50" cy="20" r="3" fill="currentColor"
        animate={isHovered ? { y: [0, 3, -2, 0], x: [0, -2, 1, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.circle
        cx="20" cy="30" r="3" fill="currentColor"
        animate={isHovered ? { y: [0, -2, 1, 0], x: [0, 3, -1, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.circle
        cx="80" cy="35" r="3" fill="currentColor"
        animate={isHovered ? { y: [0, 2, -3, 0], x: [0, -1, 2, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle
        cx="65" cy="70" r="3" fill="currentColor"
        animate={isHovered ? { y: [0, -3, 2, 0], x: [0, 2, -2, 0] } : {}}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.circle
        cx="30" cy="65" r="3" fill="currentColor"
        animate={isHovered ? { y: [0, 2, -2, 0], x: [0, -3, 1, 0] } : {}}
        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1 }}
      />
    </svg>
  </div>
);

// Animation Sub-Component 3: Flowing Server Ingestion Stream (End-to-End Cloud ETL Pipeline)
const EtlPipelineAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="absolute top-2 right-2 w-28 h-28 pointer-events-none select-none transition-all duration-500 opacity-20 dark:opacity-25 group-hover:opacity-40 group-hover:scale-105">
    <svg className="w-full h-full text-brand-emerald" viewBox="0 0 100 100" fill="none">
      <path
        d="M10,25 C35,25 25,75 50,75 C75,75 65,25 90,25"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.2"
        strokeLinecap="round"
      />
      
      {isHovered && (
        <motion.path
          d="M10,25 C35,25 25,75 50,75 C75,75 65,25 90,25"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="4,4"
          animate={{ strokeDashoffset: [-20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      )}

      {isHovered && (
        <>
          <motion.circle cx="0" cy="0" r="2.5" fill="currentColor">
            <animateMotion
              path="M10,25 C35,25 25,75 50,75 C75,75 65,25 90,25"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </motion.circle>
          <motion.circle cx="0" cy="0" r="1.8" fill="currentColor">
            <animateMotion
              path="M10,25 C35,25 25,75 50,75 C75,75 65,25 90,25"
              dur="2.2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
          </motion.circle>
          <motion.circle cx="0" cy="0" r="2.2" fill="currentColor">
            <animateMotion
              path="M10,25 C35,25 25,75 50,75 C75,75 65,25 90,25"
              dur="2.2s"
              begin="1.4s"
              repeatCount="indefinite"
            />
          </motion.circle>
        </>
      )}

      <circle cx="10" cy="25" r="2.5" fill="currentColor" />
      <circle cx="50" cy="75" r="2.5" fill="currentColor" />
      <circle cx="90" cy="25" r="2.5" fill="currentColor" />
    </svg>
  </div>
);

export default function Projects() {
  const { t } = useLanguage();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [expandedProjId, setExpandedProjId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto border-b border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("projectsTitle")}
        </h2>
        <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
        <p className="text-slate-500 dark:text-slate-400 max-w-lg">
          {t("projectsSubtitle")}
        </p>
      </div>

      {/* SQL Filter Console */}
      <div className="mb-12">
        <SqlConsoleFilter onFilterChange={setFilteredProjects} />
      </div>

      {/* Pipeline DAG connector note */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/50 dark:bg-[#0c101b]/40 border border-slate-200/50 dark:border-slate-800/50 text-xs text-slate-500 font-mono">
          <Network className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          {t("projectsNote")}
        </span>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjId === project.id;
            const isHovered = hoveredCardId === project.id;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCardId(project.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="glass-premium p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 transition-all flex flex-col justify-between h-full relative overflow-hidden group text-left"
              >
                <div>
                  {/* Decorative Micro-Animation overlays based on active hover states */}
                  {project.id === "escort-robot" && (
                    <LidarScanAnimation isHovered={isHovered} />
                  )}
                  {project.id === "swarm-robotics" && (
                    <SwarmRoboticsAnimation isHovered={isHovered} />
                  )}
                  {project.id === "etl-pipeline" && (
                    <EtlPipelineAnimation isHovered={isHovered} />
                  )}

                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <div className="flex gap-2">
                        {project.metrics.slice(0, 1).map((m) => (
                          <span
                            key={m.label}
                            className="text-[10px] font-mono font-bold bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald px-2 py-0.5 rounded-md"
                          >
                            {m.value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight pr-12">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible Architecture Details */}
                  {project.architecture && (
                    <div className="border-t border-slate-150 dark:border-slate-800/80 pt-4 mb-4">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-tight text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            {t("hideArchitecture")}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            {t("showArchitecture")}
                          </>
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="py-3 text-xs space-y-2 border-l border-brand-cyan/30 pl-3.5 ml-1 mt-2 text-slate-600 dark:text-slate-350 bg-slate-100/30 dark:bg-[#0b0e14]/20 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
                              <p className="font-semibold text-slate-700 dark:text-slate-200 mb-2">
                                {t("implementationStrategy")}
                              </p>
                              {project.architecture.map((step, idx) => (
                                <div key={idx} className="leading-relaxed">
                                  • {step}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold font-mono text-slate-605 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      {t("repository")}
                    </a>
                  ) : (
                    <span />
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold font-mono text-brand-cyan hover:underline cursor-pointer"
                    >
                      {t("liveDemo")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span />
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
