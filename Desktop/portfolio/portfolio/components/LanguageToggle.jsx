"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const isDE = lang === "de";

  return (
    <button
      type="button"
      onClick={toggleLang}
      role="switch"
      aria-checked={isDE}
      aria-label={isDE ? "Switch to English" : "Auf Deutsch umschalten"}
      className="relative flex h-8 w-[68px] items-center rounded-full border border-line bg-panel px-1 transition-colors hover:border-signal-cyan/40"
    >
      <span
        className={`pointer-events-none absolute h-6 w-8 rounded-full bg-panel-raised shadow-glow-cyan transition-transform duration-300 ease-out ${
          isDE ? "translate-x-[32px]" : "translate-x-0"
        }`}
      />
      <span
        className={`z-10 flex-1 text-center text-[11px] font-mono transition-colors ${
          !isDE ? "text-ink" : "text-ink-faint"
        }`}
      >
        EN
      </span>
      <span
        className={`z-10 flex-1 text-center text-[11px] font-mono transition-colors ${
          isDE ? "text-ink" : "text-ink-faint"
        }`}
      >
        DE
      </span>
    </button>
  );
}
