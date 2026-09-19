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
 * then a caption plate of fixed height beneath it carrying
 * the name and the full tag list, both always readable.
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
 * CORNER BRACKETS — hairline L's at the cell's corners that grow and thicken on
 * hover, so the grid's construction asserts itself under the pointer.
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

  // Invisible until the pointer arrives: nothing at rest, then a heavy
  // bracket. Thickness is constant so only opacity and size animate, which
  // keeps the stroke crisp instead of easing through fractional widths.
  const corner =
    "pointer-events-none absolute z-10 h-4 w-4 border-[3px] border-fg opacity-0 transition-all duration-300 ease-editorial group-hover:h-6 group-hover:w-6 group-hover:opacity-100 group-focus-visible:h-6 group-focus-visible:w-6 group-focus-visible:opacity-100";

  return (
    <Link
      ref={rootRef}
      href={`/work/${project.slug}`}
      aria-label={label}
      onPointerEnter={() => animated && !reduceMotion && setLive(true)}
      onPointerLeave={() => setLive(false)}
      className="group relative flex h-full w-full flex-col"
    >
      {/* corner brackets — the cell's construction, asserted under the pointer */}
      <span aria-hidden className={`${corner} left-0 top-0 border-b-0 border-r-0`} />
      <span aria-hidden className={`${corner} right-0 top-0 border-b-0 border-l-0`} />
      <span aria-hidden className={`${corner} bottom-0 left-0 border-r-0 border-t-0`} />
      <span aria-hidden className={`${corner} bottom-0 right-0 border-l-0 border-t-0`} />

      {/* image well — the artwork leans toward the pointer inside it */}
      <div className="relative min-h-0 flex-1 overflow-hidden">
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
      <div className="flex h-20 shrink-0 flex-col justify-center gap-1 border-t border-hairline px-4 md:px-5">
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
