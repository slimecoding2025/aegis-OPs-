"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { statsData } from "@/data/skills";
import { revealUp } from "@/hooks/useScrollReveal";

export default function About() {
  const { t, lang } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div {...revealUp} className="mx-auto w-full max-w-[280px] md:mx-0">
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="absolute inset-0 bg-grid opacity-40" />
            {!imgFailed ? (
              <img
                src="/profile.jpg"
                alt="Developer profile portrait"
                onError={() => setImgFailed(true)}
                className="relative h-full w-full object-cover"
              />
            ) : (
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 text-ink-faint">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M4.5 20c1.6-3.6 4.6-5.5 7.5-5.5s5.9 1.9 7.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-mono text-xs">/profile.jpg</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-shadow duration-300 group-hover:shadow-glow-cyan" />
          </div>
        </motion.div>

        <div>
          <motion.p {...revealUp} className="font-mono text-[13px] text-signal-violet">
            {t.about.title}
          </motion.p>
          <motion.h2
            {...revealUp}
            className="mt-3 max-w-[22ch] text-balance font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            {t.about.lead}
          </motion.h2>
          <motion.p {...revealUp} className="mt-5 max-w-[62ch] text-base leading-relaxed text-ink-dim">
            {t.about.body}
          </motion.p>

          <motion.dl {...revealUp} className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {statsData.map((stat) => (
              <div key={stat.value}>
                <dt className="sr-only">{stat.label[lang]}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-ink-dim">{stat.label[lang]}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
