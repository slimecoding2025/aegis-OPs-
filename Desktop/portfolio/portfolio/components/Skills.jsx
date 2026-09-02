"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skillsData } from "@/data/skills";
import { revealUp } from "@/hooks/useScrollReveal";

const dotColor = {
  cyan: "bg-signal-cyan",
  violet: "bg-signal-violet",
  amber: "bg-signal-amber",
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-content px-6">
        <motion.p {...revealUp} className="font-mono text-[13px] text-signal-amber">
          {t.skills.title}
        </motion.p>
        <motion.h2
          {...revealUp}
          className="mt-3 max-w-[26ch] text-balance font-display text-2xl font-semibold text-ink sm:text-3xl"
        >
          {t.skills.lead}
        </motion.h2>

        <motion.div {...revealUp} className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {skillsData.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-white/10"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className={`h-1.5 w-1.5 rounded-full ${dotColor[group.accent]}`} />
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-dim">
                  {group.label[lang]}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-panel-raised px-2.5 py-1.5 text-sm text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
