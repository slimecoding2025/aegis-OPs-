"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const sections = ["about", "projects", "skills", "contact"];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-lg font-semibold tracking-tight text-ink"
          aria-label="Back to top"
        >
          dev<span className="text-signal-cyan">.</span>folio
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 font-body text-sm text-ink-dim">
            {sections.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(id)}
                  className="relative py-1 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-signal-cyan after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t.nav[id]}
                </button>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-4 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-void md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {sections.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(id)}
                    className="w-full py-3 text-left font-body text-base text-ink-dim transition-colors hover:text-ink"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-line px-6 py-4">
              <LanguageToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
