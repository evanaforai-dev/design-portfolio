"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The single grid unit used by BOTH the Work and Playground grids.
 *
 * Contact-sheet treatment: the image IS the cell — no card container, no
 * per-cell border, no permanent label. Title + tags fade in only on hover
 * (desktop) over a subtle dim; touch devices never trigger hover, so the grid
 * stays clean on mobile and the label lives on the case-study page instead.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="relative aspect-[4/3] overflow-hidden"
    >
      <Link
        href={`/work/${project.slug}`}
        className="block h-full w-full"
        aria-label={`${project.title} — ${project.tags.join(", ")}`}
      >
        {/* Image — no scale/zoom, only a slight dim on hover. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          variants={{ rest: { opacity: 1 }, hover: { opacity: 0.9 } }}
          transition={{ duration: 0.2, ease: EASE }}
          className="h-full w-full object-cover"
        />

        {/* Hover-reveal label — quiet Inter, no letter-spacing, no uppercase. */}
        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.2, ease: EASE }}
          className="pointer-events-none absolute inset-0 flex items-end bg-black/25"
        >
          <p className="p-4 text-sm text-white md:p-5">
            {project.title} — {project.tags.join(", ")}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
