"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const { data, t } = useLanguage();
  const { blogPosts } = data;
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPostId((prev) => (prev === id ? null : id));
  };

  if (!blogPosts || blogPosts.length === 0) return null;

  return (
    <section id="blog" className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto border-b border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("careerUpdates")}
        </h2>
        <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
        <p className="text-slate-500 dark:text-slate-400 max-w-lg">
          {t("blogSubtitle")}
        </p>
      </div>

      {/* Blog Cards List */}
      <div className="space-y-8">
        {blogPosts.map((post) => {
          const isExpanded = expandedPostId === post.id;
          return (
            <motion.div
              layout
              key={post.id}
              className="glass-premium p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 md:items-start transition-colors duration-300 hover:border-slate-350 dark:hover:border-slate-700"
            >
              {/* Featured Image */}
              <div className="relative w-full md:w-60 h-44 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </div>

              {/* Text Area */}
              <div className="flex-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-2.5 text-left">
                  {/* Meta tag, date and readtime */}
                  <div className="flex flex-wrap items-center gap-3.5 text-xs font-mono font-bold">
                    <span className="text-brand-cyan uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-905 dark:text-white leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-550 dark:text-slate-350 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-left"
                    >
                      <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 text-sm text-slate-655 dark:text-slate-300 space-y-4 whitespace-pre-wrap leading-relaxed">
                        <div>{post.content}</div>
                        {post.id === "last-day-accenture" && (
                          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 mt-4">
                            <Image
                              src="/Portfolio/blog/accenture_2.jpg"
                              alt="Accenture Farewell Memories"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 600px"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expansion button */}
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-tight text-slate-700 hover:text-brand-cyan dark:text-slate-400 dark:hover:text-brand-cyan transition-colors cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        {t("collapseStory")}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        {t("readFullStory")}
                        <BookOpen className="w-3.5 h-3.5 ml-0.5" />
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
