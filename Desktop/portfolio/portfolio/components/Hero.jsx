"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />

      <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 font-mono text-[13px] leading-relaxed text-signal-cyan"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[46ch] text-balance text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg bg-signal-cyan px-6 py-3 text-sm font-medium text-void transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
            >
              {t.hero.cta1}
            </a>
            <a
              href="/cv.pdf"
              download
              className="rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-signal-violet/50 hover:text-signal-violet"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative mx-auto aspect-square w-full max-w-[420px]"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
