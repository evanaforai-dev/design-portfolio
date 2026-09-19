"use client";

import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/types/project";
import { asset } from "@/lib/asset";

/**
 * A project rendered as an object placed inside its grid cell (the cell and its
 * hairline borders belong to ProjectGrid). No card, border, shadow, or rounded
 * corners.
 *
 * Structure: the square image well, then a caption plate beneath it carrying
 * the name and the full tag list. Both are ALWAYS readable — the grid used to
 * hide them behind a hover band, which meant someone scanning the homepage on
 * a laptop saw eight pictures and no words. The plate is a fixed 5rem so the
 * grid's mirrored hairline overlay can match the row height exactly, which is
 * why the tags clamp to two lines rather than growing the cell.
 *
 * The `display` treatment decides how the asset sits in the well:
 *  - fit "cover": full-bleed photograph/diagram filling it
 *  - fit "contain" + `pad`: the asset floats as an object with negative space
 *
 * Hover is now only the motion-safe zoom, clipped to the well. Animated (GIF)
 * covers stay on a quiet static poster and come alive on hover.
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
      className="group block h-full w-full"
    >
      {/* 1 · image well — the object, clipped, easing into a gentle zoom. */}
      <div className="relative aspect-square overflow-hidden">
        <div
          className={`h-full w-full transition-transform duration-500 ease-editorial motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105 ${pad}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(baseSrc)}
            alt={project.title}
            loading="lazy"
            style={{ objectPosition: position }}
            className={`h-full w-full ${objectClass}`}
          />

          {animated && live && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(project.cover)}
              alt=""
              aria-hidden
              style={{ objectPosition: position }}
              className={`absolute inset-0 h-full w-full ${objectClass}`}
            />
          )}
        </div>
      </div>

      {/* 2 · caption plate — name then the full tag list, always visible. */}
      <div className="flex h-20 flex-col justify-center gap-1 border-t border-hairline px-4 md:px-5">
        <span className="truncate text-sm font-medium text-[#FC0FC0]">
          {project.title}
        </span>
        <span className="line-clamp-2 text-xs leading-4 text-fg opacity-70">
          {project.tags.join(" / ")}
        </span>
      </div>
    </Link>
  );
}
