"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/project";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Square grid cell. The image fills the square (object-cover). Title + tags
 * fade in on hover over a subtle dim (200ms, no scale). Copy is lowercase and
 * comma-separated, with no em dashes. Touch devices never trigger hover, so the
 * grid stays clean on mobile; tapping opens the project link instead.
 */
export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0.9 } }}
        transition={{ duration: 0.2, ease: EASE }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.2, ease: EASE }}
        className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-1 bg-black/30 p-4 md:p-5"
      >
        <span className="text-sm text-white">{project.title}</span>
        <span className="text-xs text-white/70">{project.tags.join(", ")}</span>
      </motion.div>
    </>
  );

  const label = `${project.title}, ${project.tags.join(", ")}`;

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="aspect-square"
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="relative block h-full w-full overflow-hidden"
        >
          {inner}
        </a>
      ) : (
        <div
          aria-label={label}
          className="relative block h-full w-full overflow-hidden"
        >
          {inner}
        </div>
      )}
    </motion.div>
  );
}
