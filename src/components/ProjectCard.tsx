"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { Project } from "@/types/project";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Product-object hover treatments. Each project reacts as if it were a physical
 * object sitting in the grid — small distances, a fraction of a degree, no
 * bounce — rather than a uniform card scale. The grid cell itself never moves;
 * only the object inside responds. Values are deliberately tiny (2–5px,
 * <1 degree). See `Project.display.hover`.
 */
const HOVER: Record<string, Variants> = {
  none: { rest: {}, hover: {} },
  zoom: { rest: { scale: 1 }, hover: { scale: 1.03 } },
  lift: {
    rest: { y: 0, rotate: 0, scale: 1 },
    hover: { y: -4, rotate: -0.6, scale: 1.012 },
  },
  float: { rest: { y: 0, scale: 1 }, hover: { y: -3, scale: 1.015 } },
  tilt: { rest: { rotate: 0, y: 0 }, hover: { rotate: 0.8, y: -3 } },
  shift: { rest: { x: 0, scale: 1 }, hover: { x: -4, scale: 1.02 } },
};

/**
 * A project rendered as an object placed inside its grid cell (the cell and its
 * hairline borders belong to ProjectGrid). No card, border, shadow, or rounded
 * corners.
 *
 * The `display` treatment decides how the asset sits:
 *  - fit "cover": full-bleed photograph/diagram filling the cell (clipped so a
 *    hover zoom never bleeds onto neighbours)
 *  - fit "contain" + `pad`: the asset floats as an object with negative space;
 *    transparent assets let the grid show through behind them, and can lift
 *    slightly out on hover.
 *
 * Animated (GIF) covers stay on a quiet static poster and only come alive on
 * hover. Title + tags stay hidden until hover.
 */
export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const fit = project.display?.fit ?? "cover";
  const pad = project.display?.pad ?? "";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const clip = fit === "cover" ? "overflow-hidden" : "";
  const label = `${project.title}, ${project.tags.join(", ")}`;

  const animated = project.display?.animated ?? false;
  const poster = project.display?.poster ?? project.cover;
  const [live, setLive] = useState(false);

  const variants = HOVER[reduceMotion ? "none" : project.display?.hover ?? "none"];
  const posStyle = { objectPosition: project.display?.position };

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      onHoverStart={() => animated && !reduceMotion && setLive(true)}
      onHoverEnd={() => setLive(false)}
      className="absolute inset-0"
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={label}
        className="group relative block h-full w-full"
      >
        <div className={`absolute inset-0 ${clip}`}>
          {/* The object itself carries the physical hover response. */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.4, ease: EASE }}
            className={`relative h-full w-full ${pad}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={animated ? poster : project.cover}
              alt={project.title}
              loading="lazy"
              style={posStyle}
              className={`h-full w-full ${objectClass}`}
            />

            {/* GIF activation: the animated asset is only mounted on hover, so
                it plays from its first frame ("comes alive") and stays quiet
                when idle. It fades over the static poster. */}
            {animated && live && (
              // eslint-disable-next-line @next/next/no-img-element
              <motion.img
                src={project.cover}
                alt=""
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={posStyle}
                className={`absolute inset-0 h-full w-full ${objectClass}`}
              />
            )}
          </motion.div>
        </div>

        {/* Label reveal. CSS-driven so it responds to pointer hover, keyboard
            focus, and (always-on) touch devices, where hover cannot expose the
            info. The title turns electric magenta; tags stay quiet. */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-1 bg-black/30 p-4 opacity-0 transition-opacity duration-200 ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100 md:p-5 [@media(hover:none)]:opacity-100">
          <span className="text-sm text-[#FC0FC0]">{project.title}</span>
          <span className="text-xs text-white/70">{project.tags.join(", ")}</span>
        </div>
      </Link>
    </motion.div>
  );
}
