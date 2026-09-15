"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The single card used by BOTH the Work and Playground grids.
 * Uniform 4:3 image, hairline border, no shadow, no rounded corners.
 * Hover = subtle desaturation + dim only; the label never moves.
 */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="aspect-[4/3] w-full overflow-hidden border border-hairline">
          {/* Plain img keeps SVG placeholders and real photos equally simple. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 ease-editorial group-hover:opacity-80 group-hover:grayscale"
          />
        </div>

        <div className="mt-4">
          <span className="font-mono text-xs font-light text-muted">{num}</span>
          <h3 className="mt-1 text-base font-medium tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="label mt-2">{project.tags.join(" — ")}</p>
        </div>
      </Link>
    </motion.article>
  );
}
