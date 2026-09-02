"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { revealUp } from "@/hooks/useScrollReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-content px-6">
        <motion.p {...revealUp} className="font-mono text-[13px] text-signal-cyan">
          {t.projects.title}
        </motion.p>
        <motion.h2
          {...revealUp}
          className="mt-3 max-w-[26ch] text-balance font-display text-2xl font-semibold text-ink sm:text-3xl"
        >
          {t.projects.lead}
        </motion.h2>

        <div className="mt-12 flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
