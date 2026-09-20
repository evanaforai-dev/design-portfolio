"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/**
 * Persistent architectural grid — every cell holds a project; there are no
 * empty slots.
 *
 * FITS THE VIEWPORT, ALWAYS. The grid is never taller than the space between
 * the header and the footer, so no project is ever below the fold. Rather than
 * a fixed 4-column, square-celled layout, the column count is solved for at
 * runtime: for every candidate count we know the rows it implies and therefore
 * the cell size, and we keep the one whose artwork comes out largest and
 * closest to square. Adding a ninth or a twentieth project re-solves it; the
 * grid gets denser instead of taller.
 *
 * Border technique (no doubled lines): the container draws the top + left
 * frame; each cell draws only its right + bottom line, so the hairlines run
 * continuously across the whole rectangle.
 *
 * Microinteraction — CURSOR-REACTIVE GRID: a second, masked copy of the same
 * lines (`.reactive-grid-overlay`) fades up near the pointer. The base geometry
 * never moves; only local emphasis changes. Pointer tracking writes CSS
 * variables in a rAF loop (no React re-render), and the effect is disabled on
 * touch / reduced-motion devices.
 */

// Preferred order. Anything not listed still renders, appended in data order,
// so adding a project to projects.ts is enough to publish it.
const LAYOUT: string[] = [
  "kochi1app",
  "wells-fargo",
  "vision",
  "airtribe-ai-skills",
  "a-century-of-villains",
  "lipi",
  "deep-cuts",
  "soundmap",
  "kochi-water-metro",
];

// `unlisted` projects keep their route and drop off the grid.
const VISIBLE = projects.filter((p) => !p.unlisted);
const bySlug = new Map(VISIBLE.map((p) => [p.slug, p]));
const ORDERED = [
  ...LAYOUT.map((s) => bySlug.get(s)).filter((p): p is NonNullable<typeof p> => !!p),
  ...VISIBLE.filter((p) => !LAYOUT.includes(p.slug)),
];

/** Caption plate height (h-20) — fixed, so it is subtracted before solving. */
const CAPTION = 80;
/** Below this the artwork is too small to be worth showing. */
const MIN_ART = 96;

export function ProjectGrid() {
  const frameRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(4);
  const [height, setHeight] = useState<number | null>(null);

  const solve = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const footer = document.querySelector("footer");
    const footerH = footer?.getBoundingClientRect().height ?? 0;
    // Space from the top of the grid to the top of the footer.
    const avail = window.innerHeight - rect.top - footerH;
    const w = rect.width;
    const n = ORDERED.length;
    if (!w || avail <= 0) return;

    let bestCols = 1;
    let bestScore = -Infinity;
    for (let c = 1; c <= n; c++) {
      const rows = Math.ceil(n / c);
      const cellW = w / c;
      const art = avail / rows - CAPTION;
      if (art < MIN_ART) continue;
      // Largest artwork wins, penalised for drifting away from square and for
      // leaving holes — the grid's rule is that every cell holds a project.
      const empty = c * rows - n;
      const score =
        Math.min(cellW, art) - Math.abs(cellW - art) * 0.35 - empty * 14;
      if (score > bestScore) {
        bestScore = score;
        bestCols = c;
      }
    }
    // Every candidate was too short (a very small viewport): fall back to the
    // densest layout that still clears MIN_ART, and let the page scroll.
    if (bestScore === -Infinity) {
      setCols(Math.max(1, Math.min(n, Math.floor(w / 220) || 1)));
      setHeight(null);
      return;
    }
    setCols(bestCols);
    setHeight(avail);
  }, []);

  useLayoutEffect(() => {
    solve();
    window.addEventListener("resize", solve);
    return () => window.removeEventListener("resize", solve);
  }, [solve]);

  useEffect(() => {
    const frame = frameRef.current;
    const overlay = overlayRef.current;
    if (!frame || !overlay) return;

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
    const onEnter = () => { overlay.style.opacity = "1"; };
    const onLeave = () => { overlay.style.opacity = "0"; };

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

  const rows = Math.ceil(ORDERED.length / cols);
  const template = {
    gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0,1fr))`,
  } as const;

  return (
    <div
      ref={frameRef}
      className="relative"
      style={height ? { height } : undefined}
    >
      <div className="grid h-full border-l border-t border-hairline" style={template}>
        {ORDERED.map((project) => (
          <div
            key={project.slug}
            className="relative min-h-0 border-b border-r border-hairline"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Masked emphasis layer: exactly mirrors the grid lines above. */}
      <div
        ref={overlayRef}
        aria-hidden
        className="reactive-grid-overlay pointer-events-none absolute inset-0 grid border-l border-t"
        style={template}
      >
        {ORDERED.map((p) => (
          <div key={p.slug} className="border-b border-r" />
        ))}
      </div>
    </div>
  );
}
