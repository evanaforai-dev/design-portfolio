/**
 * Site-wide content: identity, intro line, nav, and the About page.
 * Kept as data so copy can be edited without touching layout code.
 */

export const site = {
  name: "Evana Rao",
  /** Short wordmark shown in the persistent nav (top-left). */
  wordmark: "Evana Rao",
  role: "Product Designer",
  /** Home intro — one sentence, max. */
  intro:
    "Product designer working on systems, interfaces, and the quiet details in between.",
  email: "hello@evana.design",
  resumeUrl: "/resume.pdf",

  social: [
    { label: "Email", href: "mailto:hello@evana.design" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Read.cv", href: "https://read.cv/" },
  ],

  /** Global, persistent navigation links. */
  nav: [
    { label: "Work", href: "/" },
    { label: "Playground", href: "/playground" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "mailto:hello@evana.design" },
  ],
};

export const about = {
  headline:
    "I design products end to end — from research and systems thinking through to the last pixel.",
  bio: [
    "I'm a product designer with eight years shaping software for finance, health, and developer tools. I care about clarity: interfaces that explain themselves, systems that scale, and interactions that stay out of the way.",
    "My work sits between research and craft. I like the messy early questions — what is this really for, who is it for — as much as the final polish of type, spacing, and motion. I've led design at early-stage startups and inside larger product orgs, and I've built and maintained the design systems that hold both together.",
    "Outside client work I keep a small studio practice of experiments, tools, and type — most of it lives on the Playground.",
  ],
  background: [
    { period: "2022 — Now", role: "Lead Product Designer", place: "Atlas" },
    { period: "2019 — 2022", role: "Senior Product Designer", place: "Northwind Health" },
    { period: "2016 — 2019", role: "Product Designer", place: "Foundry Labs" },
  ],
  tools: [
    "Figma",
    "Framer",
    "Origami Studio",
    "SwiftUI",
    "React / Next.js",
    "Design systems",
    "User research",
    "Prototyping",
  ],
};
