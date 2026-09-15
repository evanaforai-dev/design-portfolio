"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Persistent architectural grid. A fixed rectangle of square cells is always
 * rendered — projects are objects placed into chosen cells, the rest stay
 * empty. Because every slot (occupied or not) is a real bordered cell, the
 * hairline grid lines continue across the ENTIRE project area, empty cells
 * included. There are no per-card borders.
 *
 * The slot count (8) is a multiple of the column counts (4 / 2 / 1), so the
 * grid stays a clean, gap-free rectangle at every breakpoint.
 *
 * Border technique (no doubled lines): the container draws the top + left
 * frame; each cell draws only its right + bottom line.
 *
 * Microinteraction — CURSOR-REACTIVE GRID: a second, masked copy of the exact
 * same lines (`.reactive-grid-overlay`) fades up near the pointer, revealing
 * the construction system a touch more clearly. The base geometry never moves;
 * only local visual emphasis changes. Pointer tracking writes CSS variables in
 * a rAF loop (no React re-render), and the effect is disabled on touch /
 * reduced-motion devices.
 */

// Which project sits in which cell. `null` = an intentionally empty cell.
// Exactly two rows on the 4-column desktop grid (8 cells, a multiple of the
// 4 / 2 / 1 column counts so every breakpoint stays a clean rectangle). The
// empty cells still draw the grid, so the structure stays continuous.
//   villains   .          lipi        deep cuts
//   .          soundmap   .           kochi
const SLOTS: (string | null)[] = [
  "a-century-of-villains", null, "lipi", "deep-cuts",
  null, "soundmap", null, "kochi-water-metro",
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));

const GRID_CLASS =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t";

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
    <div ref={frameRef} className="project-grid relative">
      <div className={`${GRID_CLASS} border-hairline`}>
        {SLOTS.map((slug, i) => {
          const project = slug ? bySlug.get(slug) : undefined;
          return (
            <div
              key={i}
              className="grid-cell relative aspect-square border-b border-r border-hairline"
            >
              {project && <ProjectCard project={project} />}
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
        {SLOTS.map((_, i) => (
          <div key={i} className="aspect-square border-b border-r" />
        ))}
      </div>
    </div>
  );
}
