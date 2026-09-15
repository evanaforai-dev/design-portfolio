"use client";

import { useEffect, useRef } from "react";

/** Magnification factor. Strong enough to read instantly, held stable. */
const Z = 2.3;
/** Inertia: how quickly the lens catches up to the cursor each frame. */
const LERP = 0.2;

/**
 * An optical magnifying-glass / refraction lens, contained inside a project
 * tile. On a fine pointer it fades in at the cursor and follows it with a hair
 * of inertia, showing a magnified duplicate of the tile image through a thin
 * bevelled glass rim. It is purely presentational (aria-hidden, pointer-events
 * none) and sits BELOW the title/tags layer, so text is never magnified,
 * covered, or blurred. Disabled on touch and under reduced motion.
 *
 * Technique — three nested transforms, all GPU-friendly:
 *   .lens-follow   translate3d to the (inertial) cursor position
 *     .lens-clip   circular clip-path window + fade/scale entrance
 *       .lens-imglayer   a full-tile duplicate, scaled Z about the cursor so
 *                        the pixel under the cursor stays put while its
 *                        neighbourhood magnifies
 *       .lens-glass      static rim / specular / chromatic fringe
 * The parent Link is the pointer surface; nothing here is interactive.
 */
export function ProjectLens({
  src,
  fit,
  pad,
  objectPosition,
}: {
  src: string;
  fit: "cover" | "contain";
  pad: string;
  objectPosition?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const imgLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const follow = followRef.current;
    const clip = clipRef.current;
    const imgLayer = imgLayerRef.current;
    if (!root || !follow || !clip || !imgLayer) return;
    const tile = root.parentElement; // the project Link
    if (!tile) return;

    // Fine pointer + motion allowed only. On touch / reduced motion the lens
    // stays hidden and the CSS title reveal is the treatment.
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    let active = false;
    let tx = 0; // target cursor (tile coords)
    let ty = 0;
    let lx = 0; // inertial lens centre
    let ly = 0;
    let D = 150;
    let R = 75;

    const measure = () => {
      const r = tile.getBoundingClientRect();
      D = Math.max(120, Math.min(210, Math.min(r.width, r.height) * 0.42));
      R = D / 2;
      follow.style.width = `${D}px`;
      follow.style.height = `${D}px`;
      imgLayer.style.width = `${r.width}px`;
      imgLayer.style.height = `${r.height}px`;
    };

    const frame = () => {
      lx += (tx - lx) * LERP;
      ly += (ty - ly) * LERP;
      follow.style.transform = `translate3d(${lx - R}px, ${ly - R}px, 0)`;
      imgLayer.style.transform = `translate(${R - Z * lx}px, ${
        R - Z * ly
      }px) scale(${Z})`;
      const settled = Math.abs(tx - lx) < 0.1 && Math.abs(ty - ly) < 0.1;
      raf = active || !settled ? requestAnimationFrame(frame) : 0;
    };

    const point = (e: PointerEvent) => {
      const r = tile.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    };
    const onEnter = (e: PointerEvent) => {
      measure();
      point(e);
      lx = tx; // snap on entry, then inertia while moving (no fly-in)
      ly = ty;
      active = true;
      clip.classList.add("is-visible");
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onMove = (e: PointerEvent) => {
      point(e);
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onLeave = () => {
      active = false;
      clip.classList.remove("is-visible");
    };

    tile.addEventListener("pointerenter", onEnter);
    tile.addEventListener("pointermove", onMove);
    tile.addEventListener("pointerleave", onLeave);
    return () => {
      tile.removeEventListener("pointerenter", onEnter);
      tile.removeEventListener("pointermove", onMove);
      tile.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [src, fit, pad, objectPosition]);

  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div ref={rootRef} aria-hidden className="lens-root pointer-events-none absolute inset-0">
      <div ref={followRef} className="lens-follow">
        <div ref={clipRef} className="lens-clip">
          <div ref={imgLayerRef} className="lens-imglayer">
            <div className={`relative h-full w-full ${pad}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden
                loading="lazy"
                style={{ objectPosition }}
                className={`h-full w-full ${objectClass}`}
              />
            </div>
          </div>
          <div className="lens-glass" />
        </div>
      </div>
    </div>
  );
}
