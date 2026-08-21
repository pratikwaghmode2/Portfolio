"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const { data, t, language } = useLanguage();
  const { skills, languages } = data;

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    const isDe = language === "de";

    if (!form.name.trim()) {
      tempErrors.name = isDe ? "Name ist erforderlich." : "Name is required.";
    } else if (form.name.length < 2) {
      tempErrors.name = isDe ? "Name muss mindestens 2 Zeichen lang sein." : "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = isDe ? "E-Mail ist erforderlich." : "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = isDe ? "Bitte geben Sie eine gültige E-Mail-Adresse ein." : "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      tempErrors.message = isDe ? "Nachricht ist erforderlich." : "Message is required.";
    } else if (form.message.length < 10) {
      tempErrors.message = isDe ? "Nachricht muss mindestens 10 Zeichen lang sein." : "Message must be at least 10 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const formspreeId = data.profile.formspreeId;

    if (formspreeId && formspreeId !== "your-formspree-id") {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setForm({ name: "", email: "", message: "" });
        } else {
          setErrors({
            message: language === "de" 
              ? "Übermittlungsfehler. Bitte versuchen Sie es später erneut." 
              : "Transmission error. Please try again later."
          });
        }
      } catch (err) {
        setErrors({
          message: language === "de"
            ? "Verbindungsfehler. Bitte überprüfen Sie Ihre Netzwerkverbindung."
            : "Connection error. Please check your network connection."
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulation mode fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setForm({ name: "", email: "", message: "" });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Skills Grid */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t("skillsTitle")}
            </h2>
            <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t("skillsSubtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((cat, idx) => (
              <div key={idx} className="space-y-3.5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200/50 dark:border-slate-800/50 pb-1">
                  {cat.category}
                </h3>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400 font-bold">
                          {skill.level}/5
                        </span>
                      </div>
                      
                      {/* Custom visual progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Languages Spoken */}
            <div className="space-y-3.5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200/50 dark:border-slate-800/50 pb-1">
                {t("languagesSpoken")}
              </h3>
              <div className="grid grid-cols-2 gap-3.5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200/50 dark:border-slate-800/20 flex flex-col gap-1 justify-center text-left"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-mono text-brand-cyan font-semibold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Validated Contact Form */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t("getInTouch")}
            </h2>
            <div className="h-1 w-20 bg-brand-cyan rounded mt-3 mb-4" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t("contactSubtitle")}
            </p>
          </div>

          <div className="glass-premium p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-450 uppercase">
                      {t("yourName")}
                    </label>
                    <input
                      disabled={isSubmitting}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={language === "de" ? "z.B. Alex Müller" : "e.g. Alex Mercer"}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-cyan focus:ring-brand-cyan text-slate-900 dark:text-white"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1 select-none">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-450 uppercase">
                      {t("emailAddress")}
                    </label>
                    <input
                      disabled={isSubmitting}
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-cyan focus:ring-brand-cyan text-slate-900 dark:text-white"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1 select-none">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-450 uppercase">
                      {t("messageBody")}
                    </label>
                    <textarea
                      disabled={isSubmitting}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={language === "de" ? "Schreiben Sie Ihre Nachricht hier..." : "Write your message here..."}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-cyan focus:ring-brand-cyan text-slate-900 dark:text-white"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1 select-none">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyan/95 dark:hover:bg-brand-cyan/90 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-brand-cyan/10 hover:shadow-brand-cyan/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pt-2.5"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t("transmitMessage")}
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald animate-[pulse_2s_infinite]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t("transmissionConfirmed")}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mt-2 mx-auto leading-relaxed">
                      {t("transmissionSuccess")}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs font-mono font-bold text-brand-cyan hover:underline hover:scale-102 transition-all cursor-pointer"
                  >
                    {t("sendAnotherMessage")}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
