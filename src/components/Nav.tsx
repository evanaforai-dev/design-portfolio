"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the overlay whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll + allow Escape to close while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href.startsWith("mailto:")) return false;
    if (href === "/") return pathname === "/" || pathname.startsWith("/work");
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <>
      {/* Persistent bar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-fg mix-blend-difference"
            style={{ color: open ? "#fafafa" : undefined }}
          >
            {site.wordmark}
          </Link>

          <div className="flex items-center gap-6">
            <div style={{ color: open ? "#fafafa" : undefined }}>
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="label transition-colors duration-300 ease-editorial hover:text-fg"
              style={{ color: open ? "#fafafa" : undefined }}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#0a0a0a] px-6 pb-10 pt-24 text-[#ededed] md:px-10"
          >
            <ul className="mx-auto flex w-full max-w-shell flex-col">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: 0.06 + i * 0.05,
                  }}
                  className="border-b border-white/12"
                >
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between py-5 md:py-6"
                  >
                    <span className="text-5xl font-medium tracking-tight text-white/60 transition-colors duration-300 ease-editorial group-hover:text-white md:text-7xl">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      {isActive(item.href) ? "Current" : `0${i + 1}`}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.25 }}
              className="mx-auto flex w-full max-w-shell flex-wrap items-center justify-between gap-4 pt-8"
            >
              <span className="label text-white/50">
                {site.name} — {site.role}
              </span>
              <div className="flex gap-6">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="label text-white/50 transition-colors duration-300 ease-editorial hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
