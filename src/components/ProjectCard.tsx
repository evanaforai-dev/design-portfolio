"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/types/project";
import { asset } from "@/lib/asset";

/** How far the artwork leans toward the pointer, in px at the cell's edge. */
const PULL = 14;

/**
 * A project rendered as an object placed inside its grid cell (the cell and its
 * hairline borders belong to ProjectGrid). No card, border, shadow, or rounded
 * corners.
 *
 * Structure: the image well takes whatever height the grid gives the cell,
 * then a caption plate beneath it carrying the name and the full tag list,
 * both always readable.
 *
 * Two variants, one component. `fitted` is the pointer-device grid, where the
 * cell's height is solved for and the caption plate is a fixed 80px the solver
 * has already subtracted. Unfitted is the phone, where the page scrolls: the
 * well takes a square of its own and the caption plate grows to whatever the
 * title needs. The title is never clipped in either — a project whose name
 * reads "airtribe ai s..." is a project nobody clicks.
 *
 * MAGNETIC PULL — the artwork leans toward the pointer and eases back when it
 * leaves. Pointer position is written straight to the element's transform in a
 * rAF loop (no React re-render, matching ProjectGrid's overlay); the easing
 * that makes it feel magnetic rather than glued is the CSS transition, not the
 * maths. Only the artwork moves: the caption stays put so text never jitters.
 *
 * The hover zoom lives on the <img> rather than on the same wrapper, because
 * two transforms on one element would overwrite each other.
 *
 * CORNER MARKS — four small solid squares set inside the image well's corners,
 * invisible at rest and appearing under the pointer. Registration marks rather
 * than a frame: they note where the cell is without drawing one.
 */
/*
 * A scrolling cell's well is a square per column it occupies, so a cell that
 * spans the remainder of a row is the same HEIGHT as its neighbours and simply
 * wider. Literal class names, for Tailwind's content scan.
 */
const WELL: Record<number, string> = {
  1: "aspect-square",
  2: "aspect-[2/1]",
  3: "aspect-[3/1]",
  4: "aspect-[4/1]",
  5: "aspect-[5/1]",
};

export function ProjectCard({
  project,
  fitted = true,
  span = 1,
}: {
  project: Project;
  /** True when the grid has solved a height for this cell (pointer devices). */
  fitted?: boolean;
  /** Columns this cell occupies, when it absorbs a row's remainder. */
  span?: number;
}) {
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

  const rootRef = useRef<HTMLAnchorElement>(null);
  const pullRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const art = pullRef.current;
    if (!root || !art) return;

    // Magnetism is a fine-pointer affordance, and never overrides a stated
    // preference for less motion.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      raf = 0;
      art.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      x = ((e.clientX - r.left) / r.width - 0.5) * PULL * 2;
      y = ((e.clientY - r.top) / r.height - 0.5) * PULL * 2;
      queue();
    };
    const onLeave = () => {
      x = 0;
      y = 0;
      queue();
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Invisible until the pointer arrives, then a small solid square. Size is
  // constant so only opacity animates and the square stays crisp instead of
  // easing through fractional pixels.
  const corner =
    "pointer-events-none absolute z-10 h-1.5 w-1.5 bg-white mix-blend-difference opacity-0 transition-opacity duration-300 ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100";

  return (
    <Link
      ref={rootRef}
      href={`/work/${project.slug}`}
      aria-label={label}
      onPointerEnter={() => animated && !reduceMotion && setLive(true)}
      onPointerLeave={() => setLive(false)}
      className="group relative flex h-full w-full flex-col"
    >
      {/* image well — the artwork leans toward the pointer inside it */}
      <div
        className={`relative overflow-hidden ${
          fitted ? "min-h-0 flex-1" : `w-full ${WELL[span] ?? "aspect-square"}`
        }`}
      >
        {/* corner marks — set inside the well, noted under the pointer */}
        <span aria-hidden className={`${corner} left-2.5 top-2.5`} />
        <span aria-hidden className={`${corner} right-2.5 top-2.5`} />
        <span aria-hidden className={`${corner} bottom-2.5 left-2.5`} />
        <span aria-hidden className={`${corner} bottom-2.5 right-2.5`} />

        <div
          ref={pullRef}
          className={`h-full w-full transition-transform duration-500 ease-editorial ${pad}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(baseSrc)}
            alt={project.title}
            loading="lazy"
            style={{ objectPosition: position }}
            className={`h-full w-full transition-transform duration-500 ease-editorial motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105 ${objectClass}`}
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

      {/* caption plate — name then the full tag list, always visible. */}
      <div
        className={`flex shrink-0 flex-col justify-center gap-1 border-t border-hairline ${
          fitted ? "h-20 px-4 md:px-5" : "px-4 py-4"
        }`}
      >
        <span className="text-sm font-medium leading-snug text-accent">
          {project.title}
        </span>
        {/* Two lines is all the fitted plate has room for. The scrolling
            plate is not height-constrained, so the tag list finishes rather
            than trailing off mid-word. */}
        <span
          className={`text-xs leading-4 text-fg opacity-70 ${
            fitted ? "line-clamp-2" : ""
          }`}
        >
          {project.tags.join(" / ")}
        </span>
      </div>
    </Link>
  );
}
