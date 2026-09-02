"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { revealUp } from "@/hooks/useScrollReveal";

const EMAIL = "bousminaselim@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/slimecoding2025" },
];

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the visible email text is the fallback.
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          {...revealUp}
          className="relative overflow-hidden rounded-2xl border border-line bg-panel px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <p className="font-mono text-[13px] text-signal-cyan">{t.contact.title}</p>
            <h2 className="mx-auto mt-3 max-w-[32ch] text-balance font-display text-2xl font-semibold text-ink sm:text-3xl">
              {t.contact.lead}
            </h2>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-lg bg-signal-cyan px-6 py-3 text-sm font-medium text-void transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
              >
                {copied ? t.contact.copied : t.contact.cta}
                <span className="font-mono text-xs opacity-70">{EMAIL}</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ink-dim transition-colors hover:text-signal-violet"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
