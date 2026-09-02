"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang");
    if (stored === "en" || stored === "de") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((current) => (current === "en" ? "de" : "en"));

  const value = useMemo(
    () => ({ lang, toggleLang, t: translations[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
