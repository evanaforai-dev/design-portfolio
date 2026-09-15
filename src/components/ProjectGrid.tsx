"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Persistent architectural grid — every cell holds a project; there are no
 * empty slots. Seven projects don't tile a plain grid evenly, so one FEATURE
 * tile spans two columns (and reads 2:1 so its height matches its neighbours),
 * and the remaining six are square. That is eight cell-units, a gap-free
 * rectangle at every breakpoint:
 *   lg  4 cols × 2 rows  →  [ feature (2) · a · b ] [ c · d · e · f ]
 *   sm  2 cols × 4 rows  →  [ feature (2) ] [ a · b ] [ c · d ] [ e · f ]
 *   base 1 col           →  a stack, the feature a wide banner on top
 *
 * Border technique (no doubled lines): the container draws the top + left
 * frame; each cell draws only its right + bottom line, so the hairlines run
 * continuously across the whole rectangle.
 *
 * Microinteraction — CURSOR-REACTIVE GRID: a second, masked copy of the exact
 * same lines (`.reactive-grid-overlay`) fades up near the pointer, revealing
 * the construction system a touch more clearly. The base geometry never moves;
 * only local visual emphasis changes. Pointer tracking writes CSS variables in
 * a rAF loop (no React re-render), and the effect is disabled on touch /
 * reduced-motion devices.
 */

// Grid order + which tile is the wide feature. Every entry renders a real,
// occupied cell, so the grid is always full.
const LAYOUT: { slug: string; feature?: boolean }[] = [
  { slug: "kochi1app", feature: true },
  { slug: "airtribe-learn" },
  { slug: "a-century-of-villains" },
  { slug: "lipi" },
  { slug: "deep-cuts" },
  { slug: "soundmap" },
  { slug: "kochi-water-metro" },
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));

const GRID_CLASS =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t";

// A feature tile spans two columns and is 2:1 so its height equals a square
// cell's; every other tile is square.
function cellShape(feature?: boolean) {
  return feature ? "aspect-[2/1] sm:col-span-2" : "aspect-square";
}

export function ProjectGrid() {
  const frameRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const overlay = overlayRef.current;
    if (!frame || !overlay) return;

    // Pointer-reactive emphasis is for fine pointers only, and never when the
    // user prefers reduced motion.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      raf = 0;
      overlay.style.setProperty("--mx", `${x}px`);
      overlay.style.setProperty("--my", `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      const rect = frame.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onEnter = () => {
      overlay.style.opacity = "1";
    };
    const onLeave = () => {
      overlay.style.opacity = "0";
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerenter", onEnter);
    frame.addEventListener("pointerleave", onLeave);
    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerenter", onEnter);
      frame.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={frameRef} className="relative">
      <div className={`${GRID_CLASS} border-hairline`}>
        {LAYOUT.map(({ slug, feature }) => {
          const project = bySlug.get(slug);
          if (!project) return null;
          return (
            <div
              key={slug}
              className={`relative border-b border-r border-hairline ${cellShape(feature)}`}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      {/* Masked emphasis layer: exactly mirrors the grid lines above. */}
      <div
        ref={overlayRef}
        aria-hidden
        className={`reactive-grid-overlay pointer-events-none absolute inset-0 ${GRID_CLASS}`}
      >
        {LAYOUT.map(({ slug, feature }) => (
          <div key={slug} className={`border-b border-r ${cellShape(feature)}`} />
        ))}
      </div>
    </div>
  );
}
