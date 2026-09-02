// Grouped by discipline so the skills section can render clusters instead
// of one flat wall of badges. Add new stacks (mobile, desktop) as new groups.

export const skillsData = [
  {
    id: "frontend",
    label: { en: "Frontend", de: "Frontend" },
    accent: "cyan",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    label: { en: "Backend", de: "Backend" },
    accent: "violet",
    items: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Prisma"],
  },
  {
    id: "ai-tools",
    label: { en: "AI & Tooling", de: "KI & Werkzeuge" },
    accent: "amber",
    items: ["OpenAI API", "Git", "Docker", "Vercel", "Figma"],
  },
];

export const statsData = [
  { value: "5+", label: { en: "Live projects shipped", de: "Live-Projekte veröffentlicht" } },
  { value: "3", label: { en: "Languages spoken", de: "Gesprochene Sprachen" } },
];
