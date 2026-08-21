"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, Database, Landmark, LineChart, Play, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DagNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  tools: string[];
  description: string;
  details: string;
}

export default function PipelineDag() {
  const { language } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<string>("ingestion");

  const nodes: DagNode[] = [
    {
      id: "ingestion",
      label: language === "de" ? "1. Daten-Ingestion" : "1. Data Ingestion",
      icon: <Database className="w-5 h-5" />,
      color: "border-brand-cyan text-brand-cyan bg-brand-cyan/5",
      glowColor: "rgba(14, 165, 233, 0.4)",
      tools: ["Apache Kafka", "Google Cloud Storage", "REST APIs", "LiDAR / Camera Raw (ROS)"],
      description: language === "de"
        ? "Extraktion von strukturierten, unstrukturierten und Streaming-Daten."
        : "Extracting raw structured, unstructured, and streaming data.",
      details: language === "de"
        ? "Konfigurierte Kafka-Event-Buses zum Streamen von FMCG-Verkaufsdaten. Import von Echtzeit-Sensor-Paketen (Laserscans und RGB-D-Tiefenbilder) mit 10-20 Hz in ROS-Schnittstellen für autonome Navigations-Subsysteme."
        : "Configured Kafka event buses to stream FMCG sales data. Ingested real-time sensor packets (laser scans and RGB-D depth frames) at 10-20Hz into ROS interfaces for autonomous navigation subsystems."
    },
    {
      id: "processing",
      label: language === "de" ? "2. Datenverarbeitung" : "2. Data Processing",
      icon: <Cpu className="w-5 h-5" />,
      color: "border-brand-purple text-brand-purple bg-brand-purple/5",
      glowColor: "rgba(139, 92, 246, 0.4)",
      tools: ["PySpark", "Python (Pandas)", "Apache Airflow", "ROS Nodes (C++)"],
      description: language === "de"
        ? "Bereinigung, Validierung, Transformationen und Koordinatentransformationen."
        : "Cleansing, validation, transformations, and coordinate transforms.",
      details: language === "de"
        ? "Optimierte Pipelines unter Verwendung von parallelisiertem PySpark und Python, wodurch die Ausführungsdauer um 87% verkürzt wurde. Integration von Echtzeit-Koordinatentransformationen (TF-Knoten) in Positionsregelschleifen von Schwarmrobotern."
        : "Optimized pipelines using parallelized PySpark and optimized Python, slashing execution runs by 87%. Integrated real-time coordinate transformations (TF transforms) inside swarm robotics positional loops."
    },
    {
      id: "storage",
      label: language === "de" ? "3. Skalierbare Speicherung" : "3. Scalable Storage",
      icon: <Landmark className="w-5 h-5" />,
      color: "border-brand-blue text-brand-blue bg-brand-blue/5",
      glowColor: "rgba(59, 130, 246, 0.4)",
      tools: ["GCP BigQuery", "Snowflake", "Docker Containers"],
      description: language === "de"
        ? "Hochleistungsfähige Enterprise Data Lakes und partitionierte Tabellen."
        : "High-performance enterprise data lakes and partitioned tables.",
      details: language === "de"
        ? "Entwicklung von GCP BigQuery-Datenbanken mit optimierter Tabellenpartitionierung und Clustering-Schlüsseln. Gewährleistung von Katalog-Konformität und Deduplizierungsregeln in Cloud-Storage-Containern."
        : "Engineered GCP BigQuery databases with optimized table partitioning and clustering keys. Maintained catalog compliance and deduplication rules across cloud storage containers."
    },
    {
      id: "analytics",
      label: language === "de" ? "4. Analysen & ML" : "4. Analytics & ML",
      icon: <LineChart className="w-5 h-5" />,
      color: "border-brand-emerald text-brand-emerald bg-brand-emerald/5",
      glowColor: "rgba(16, 185, 129, 0.4)",
      tools: ["PyTorch", "Power BI", "Scikit-Learn", "Microsoft Fabric"],
      description: language === "de"
        ? "Downstream-Berichterstattung, statistische Modellierung und Pfadplanung."
        : "Downstream reporting, statistical modeling, and path planning.",
      details: language === "de"
        ? "Aufbau von Power BI-Dashboards für FMCG-Geschäftsbereiche. Anwendung von Deep-Learning und statistischer Modellierung für Arbeitsmarktprognosen beim IAB und Pfadplanungsalgorithmen für Patiententransport-Roboter."
        : "Built Power BI dashboards for FMCG business lines. Applied deep learning/statistical modeling for employment forecasts at IAB and path routing algorithms for patient escort robotics."
    }
  ];

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="glass-premium p-6 rounded-3xl w-full border border-slate-200 dark:border-slate-800 relative">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white flex items-center gap-2">
          <Play className="w-4.5 h-4.5 text-brand-cyan fill-brand-cyan/20" />
          {language === "de" ? "Interaktive Datenpipeline & ROS-DAG" : "Interactive Data Pipeline & ROS DAG"}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {language === "de"
            ? "Klicken Sie auf eine Phase der Pipeline, um integrierte Tools und Implementierungsdetails anzuzeigen."
            : "Click on any stage of the pipeline to see integrated tools and implementation details."}
        </p>
      </div>

      {/* Grid DAG Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center mb-8 relative">
        {nodes.map((node, index) => {
          const isSelected = selectedNode === node.id;
          return (
            <div key={node.id} className="relative flex flex-col items-center">
              {/* Connector line for large screens */}
              {index < nodes.length - 1 && (
                <div className="hidden lg:block absolute left-[80%] top-[40px] w-[50%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0">
                  {/* Glowing data flow packet along line */}
                  <motion.div
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      delay: index * 0.6,
                      ease: "linear"
                    }}
                    className="absolute top-[-3px] w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#0ea5e9]"
                  />
                </div>
              )}

              {/* Node Card */}
              <button
                onClick={() => setSelectedNode(node.id)}
                className={`relative z-10 w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? `${node.color} scale-102 border-current shadow-lg`
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-white/40 dark:bg-white/5"
                }`}
                style={{
                  boxShadow: isSelected ? `0 0 20px ${node.glowColor}` : "none"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border border-current bg-current/5`}>
                    {node.icon}
                  </div>
                  <span className="font-bold text-sm font-mono tracking-tight text-slate-900 dark:text-white">
                    {node.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {node.description}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="glass p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start justify-between"
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50">
                {language === "de" ? "Pipeline-Details" : "Pipeline Details"}
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {activeNode.label.split(". ")[1]}
              </h4>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
              {activeNode.details}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="w-full md:w-80 space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider text-left">
              {language === "de" ? "Toolchain-Integrationen" : "Toolchain Integrations"}
            </h5>
            <div className="grid grid-cols-1 gap-2">
              {activeNode.tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30 text-xs font-mono font-semibold text-slate-850 dark:text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-brand-emerald" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
