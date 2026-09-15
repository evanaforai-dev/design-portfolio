"use client";

import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/types/project";
import { ProjectLens } from "./ProjectLens";

/**
 * A project rendered as an object placed inside its grid cell (the cell and its
 * hairline borders belong to ProjectGrid). No card, border, shadow, or rounded
 * corners.
 *
 * The `display` treatment decides how the asset sits:
 *  - fit "cover": full-bleed photograph/diagram filling the cell
 *  - fit "contain" + `pad`: the asset floats as an object with negative space;
 *    transparent assets let the grid show through behind them.
 *
 * Hover treatment is an optical magnifying lens (ProjectLens): the tile and its
 * image stay perfectly stationary while a circular glass lens follows the
 * cursor and magnifies the area beneath it. Layer order is image (0) · lens
 * (10) · title/tags (20), so the text always renders crisply above the lens and
 * is never magnified or obscured. The title/tags reveal on hover, keyboard
 * focus, and (always-on) touch, so the info is never hover-exclusive.
 *
 * Animated (GIF) covers stay on a quiet static poster and only come alive on
 * hover.
 */
export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const fit = project.display?.fit ?? "cover";
  const pad = project.display?.pad ?? "";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const clip = fit === "cover" ? "overflow-hidden" : "";
  const label = `${project.title}, ${project.tags.join(", ")}`;
  const position = project.display?.position;

  const animated = project.display?.animated ?? false;
  const poster = project.display?.poster ?? project.cover;
  const [live, setLive] = useState(false);
  const baseSrc = animated ? poster : project.cover;

  // Tag text follows the global light/dark rule against the actual surface
  // behind the label: a light image → design-black, a dark image → white, and
  // the theme background (padded objects) → --fg. The title stays magenta.
  const surface = project.display?.labelSurface;
  const tagColor =
    surface === "light"
      ? "text-[#111111]"
      : surface === "dark"
        ? "text-white"
        : "text-fg";

  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={label}
      onPointerEnter={() => animated && !reduceMotion && setLive(true)}
      onPointerLeave={() => setLive(false)}
      className="group relative block h-full w-full"
    >
      {/* 1 · project image (stationary) */}
      <div className={`absolute inset-0 ${clip}`}>
        <div className={`relative h-full w-full ${pad}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={baseSrc}
            alt={project.title}
            loading="lazy"
            style={{ objectPosition: position }}
            className={`h-full w-full ${objectClass}`}
          />

          {/* GIF activation: the animated asset mounts only on hover, so it
              plays from its first frame and stays quiet when idle. */}
          {animated && live && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt=""
              aria-hidden
              style={{ objectPosition: position }}
              className={`absolute inset-0 h-full w-full ${objectClass}`}
            />
          )}
        </div>
      </div>

      {/* 2 · optical lens (desktop / fine-pointer only, clipped to the tile) */}
      <ProjectLens
        src={baseSrc}
        fit={fit}
        pad={pad}
        objectPosition={position}
      />

      {/* 3 · title + tags — crisp, above the lens, no dark overlay, no shadow.
          Title in magenta (the colour exception); tags follow the light/dark
          rule for the surface behind them. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col gap-1 p-4 opacity-0 transition-opacity duration-200 ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100 md:p-5 [@media(hover:none)]:opacity-100">
        <span className="text-sm font-medium text-[#FC0FC0]">
          {project.title}
        </span>
        <span className={`text-xs ${tagColor}`}>{project.tags.join(", ")}</span>
      </div>
    </Link>
  );
}
