"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { revealUp } from "@/hooks/useScrollReveal";

const accentMap = {
  cyan: {
    text: "text-signal-cyan",
    border: "hover:border-signal-cyan/40",
    glow: "group-hover:shadow-glow-cyan",
  },
  violet: {
    text: "text-signal-violet",
    border: "hover:border-signal-violet/40",
    glow: "group-hover:shadow-glow-violet",
  },
  amber: {
    text: "text-signal-amber",
    border: "hover:border-signal-amber/40",
    glow: "",
  },
};

export default function ProjectCard({ project, index }) {
  const { t, lang } = useLanguage();
  const accent = accentMap[project.accent] ?? accentMap.cyan;
  const reversed = index % 2 === 1;

  return (
    <motion.article
      {...revealUp}
      className={`group grid grid-cols-1 items-center gap-8 rounded-2xl border border-line bg-panel p-6 transition-all duration-300 sm:p-8 md:grid-cols-2 md:gap-12 ${accent.border} ${accent.glow}`}
    >
      <div className={reversed ? "md:order-2" : ""}>
        <span className={`font-mono text-xs ${accent.text}`}>{project.category[lang]}</span>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-ink-dim">
          {project.description[lang]}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line bg-panel-raised px-2.5 py-1 font-mono text-[11px] text-ink-dim"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          className={`mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors ${accent.text}`}
        >
          {t.projects.visit}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
        className={`relative block aspect-[16/10] overflow-hidden rounded-xl border border-line bg-void ${reversed ? "md:order-1" : ""}`}
        aria-label={`Open ${project.name} live site`}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-lg font-semibold text-ink-faint transition-colors duration-300 group-hover:text-ink-dim">
            {project.name}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line bg-panel/80 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-[11px] text-ink-faint">
            {project.url.replace("https://", "")}
          </span>
          <span className={`h-1.5 w-1.5 rounded-full ${accent.text.replace("text-", "bg-")}`} />
        </div>
      </a>
    </motion.article>
  );
}
