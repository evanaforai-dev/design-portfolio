"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types/project";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * A project rendered as an object placed inside its grid cell (the cell and its
 * hairline borders belong to ProjectGrid). No card, border, shadow, or rounded
 * corners.
 *
 * The `display` treatment decides how the asset sits:
 *  - fit "cover": full-bleed photograph/diagram filling the cell
 *  - fit "contain" + `pad`: the asset floats as an object with negative space;
 *    transparent assets let the grid show through behind them
 * GIF covers animate on their own. Title + tags stay hidden until hover.
 */
export function ProjectCard({ project }: { project: Project }) {
  const fit = project.display?.fit ?? "cover";
  const pad = project.display?.pad ?? "";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const label = `${project.title}, ${project.tags.join(", ")}`;

  const inner = (
    <>
      <div className={`absolute inset-0 ${pad}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          variants={{ rest: { opacity: 1 }, hover: { opacity: 0.9 } }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{ objectPosition: project.display?.position }}
          className={`h-full w-full ${objectClass}`}
        />
      </div>

      {/* Hover-only label — no permanent text on the object. */}
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

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="absolute inset-0"
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="relative block h-full w-full"
        >
          {inner}
        </a>
      ) : (
        <div aria-label={label} className="relative block h-full w-full">
          {inner}
        </div>
      )}
    </motion.div>
  );
}
