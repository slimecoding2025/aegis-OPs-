"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 text-xs text-ink-faint sm:flex-row">
        <span>© {year} — {t.footer.rights}</span>
        <span className="font-mono">Built with Next.js · Tailwind · Three.js</span>
      </div>
    </footer>
  );
}
