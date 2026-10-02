import React from "react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative dot-pattern">
      
      {/* Background data-stream ambient accents */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none z-0" />
      
      {/* Hero Section (Includes Profile, Bio, Contact, Resume) */}
      <Hero />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 relative z-10 space-y-16">

        {/* Experience Section (Work Experience & Education Tabbed Timeline) */}
        <Experience />

        {/* Projects Section (Dynamic SQL Filter & Project Cards Grid) */}
        <Projects />

        {/* Certifications Section (AWS, Fabric, Power BI, SQL Grid) */}
        <Certifications />

        {/* Achievements Section (Key Milestones and Performance Optimizations) */}
        <Achievements />

        {/* Blog / Story Section */}
        <Blog />

        {/* Skills & Contact Section (Categorized Skills Grid & Validated Message Form) */}
        <ContactForm />

      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-20 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>// designed and engineered by pratik waghmode</span>
          <span>© 2026. all rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
