"use client";

// Shared reveal presets so every section animates the same restrained way:
// one fade-and-rise on first view, never repeated per-child on scroll.
export const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export function revealUpDelayed(delay = 0) {
  return {
    ...revealUp,
    transition: { ...revealUp.transition, delay },
  };
}
