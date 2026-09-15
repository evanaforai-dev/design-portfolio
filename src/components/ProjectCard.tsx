"use client";

import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/types/project";

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
 * Hover treatment: on hover / keyboard focus the image eases into a gentle
 * zoom (clipped to the tile) while a solid caption band rises from the bottom
 * edge, carrying the title and tags. Because the band is an opaque --bg panel
 * with a crisp hairline top edge (never a scrim over the photo), the text
 * always sits on clean background and reads at full contrast — the same cut
 * language as the grid itself. The zoom is motion-safe only. On touch the band
 * stays visible, so the info is never hover-exclusive.
 *
 * Animated (GIF) covers stay on a quiet static poster and only come alive on
 * hover.
 */
export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const fit = project.display?.fit ?? "cover";
  const pad = project.display?.pad ?? "";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const label = `${project.title}, ${project.tags.join(", ")}`;
  const position = project.display?.position;

  const animated = project.display?.animated ?? false;
  const poster = project.display?.poster ?? project.cover;
  const [live, setLive] = useState(false);
  const baseSrc = animated ? poster : project.cover;

  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={label}
      onPointerEnter={() => animated && !reduceMotion && setLive(true)}
      onPointerLeave={() => setLive(false)}
      className="group relative block h-full w-full overflow-hidden"
    >
      {/* 1 · project image — eases into a gentle zoom on hover (clipped to the
          tile), motion-safe only. Both the base frame and the GIF share this
          wrapper so they scale together. */}
      <div className="absolute inset-0">
        <div
          className={`relative h-full w-full transition-transform duration-500 ease-editorial motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105 ${pad}`}
        >
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

      {/* 2 · caption band — an opaque --bg panel that slides up from the bottom
          on hover / focus (static on touch). Title in magenta (the colour
          exception); tags in the single theme colour, since the text now sits
          on --bg rather than over the image. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-full flex-col gap-1 border-t border-hairline bg-bg px-4 py-3 transition-transform duration-200 ease-editorial group-hover:translate-y-0 group-focus-visible:translate-y-0 md:px-5 md:py-4 [@media(hover:none)]:translate-y-0">
        <span className="text-sm font-medium text-[#FC0FC0]">
          {project.title}
        </span>
        <span className="text-xs text-fg">{project.tags.join(", ")}</span>
      </div>
    </Link>
  );
}
