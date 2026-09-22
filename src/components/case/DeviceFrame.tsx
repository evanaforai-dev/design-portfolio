"use client";

import { useEffect, useRef, useState } from "react";

/*
 * A handset prototype inside a phone shell.
 *
 * The bug this exists to fix: an iframe is its own viewport. A page that asks
 * for `width=393` (deep cuts) or `width=device-width` (soundmap, kochi) gets
 * the IFRAME's css width, not the phone's, and the shell's screen is about
 * 362px across at its widest and narrower on a small display. So every build
 * was being laid out into a box narrower than the one it was drawn for: the
 * fixed-width one overflowed by thirty-odd pixels and could be dragged around
 * inside the bezel, and the fluid ones reflowed to a width no phone has.
 *
 * The fix is to stop resizing the page and start resizing the picture of it.
 * The iframe is given the device viewport it was designed for -- 393 x 875
 * css px, which is the aspect of the screen cut-out -- and then scaled to
 * whatever the shell is actually drawn at. The page inside always believes it
 * is on a 393px phone, which is true, so nothing reflows and nothing pans.
 *
 * The scale has to be measured rather than declared: the shell is fluid below
 * its 380px cap, so the ratio changes with the column. A ResizeObserver is the
 * only honest way to get it, and until the first measurement the frame renders
 * at scale 1 clipped to the screen -- the same thing it did before, for one
 * frame, rather than a flash of empty black.
 */

/** The viewport every embedded handset build is composed for. */
const DEVICE_W = 393;

export function DeviceFrame({
  src,
  title,
  allow,
}: {
  src: string;
  title: string;
  allow?: string;
}) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const measure = () => {
      const { clientWidth: w, clientHeight: h } = el;
      if (!w || !h) return;
      /*
       * The device's height is derived from the screen rather than declared,
       * so the scaled iframe lands on the cut-out exactly. Working it out from
       * the shell's own numbers (430/932 with 2.4% padding, giving 875) is
       * right to within a pixel, and that pixel is a scrollbar: clientWidth
       * and clientHeight are integers, so the true aspect moves a little with
       * the column and only a measurement tracks it.
       */
      setBox({ scale: w / DEVICE_W, height: DEVICE_W * (h / w) });
    };
    measure();
    // Not just the window: the shell also changes width when a sibling
    // reflows, and resize events say nothing about that.
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="mx-auto w-full max-w-[380px]">
      <div
        data-device="shell"
        className="relative aspect-[430/932] w-full bg-fg p-[2.4%] ring-1 ring-hairline"
      >
        <div
          ref={screenRef}
          data-device="screen"
          className="relative h-full w-full overflow-hidden bg-bg"
        >
          <iframe
            src={src}
            title={title}
            loading="lazy"
            allow={allow}
            /*
             * Pinned to the top-left corner and scaled from it, so the
             * scaled box lands exactly on the screen cut-out. Width and
             * height are the device's, in css pixels, and never change.
             */
            style={{
              width: DEVICE_W,
              height: box.height || undefined,
              transform: `scale(${box.scale})`,
              transformOrigin: "top left",
              // Nothing to show until the screen has been measured; without
              // this the build paints once at full size and visibly snaps.
              visibility: box.height ? undefined : "hidden",
            }}
            className="absolute left-0 top-0 block border-0"
          />
          {/*
            No island is drawn. These builds were made for a browser and do
            not reserve the safe-area inset, so a pill at the top of the
            screen sat on top of their own headers: on kochi it covered the
            product's name. The shell reads as a handset from its proportions
            and its corners without one.
          */}
        </div>
      </div>
    </div>
  );
}
