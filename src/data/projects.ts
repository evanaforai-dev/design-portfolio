import type { Project } from "@/types/project";

/**
 * ── ADD A PROJECT HERE ────────────────────────────────────────────────────
 * Every project — Work and Playground — lives in this one array and uses the
 * one `Project` shape. To publish a new project, append an entry below and set
 * `category` to "work" or "playground". Nothing else needs to change: the
 * grids, cards, routing, and case-study template all read from here.
 *
 * Cover / case-study images are placeholders in /public/covers and /public/case.
 * Swap the `src` paths for your real assets when you have them.
 */

export const projects: Project[] = [
  {
    slug: "atlas-banking",
    title: "Atlas — Business Banking",
    tags: ["Fintech", "Product Design", "2024"],
    category: "work",
    cover: "/covers/01.svg",
    year: "2024",
    summary:
      "Rebuilding the core banking dashboard around clarity, trust, and the numbers that actually matter to a founder.",
    role: "Lead Product Designer",
    client: "Atlas",
    duration: "10 months",
    caseStudyBlocks: [
      {
        type: "text",
        heading: "Overview",
        body: "Atlas is a business bank for early-stage companies. The existing dashboard buried the two questions every founder asks daily — how much do I have, and what changed — under a wall of transactions.\nWe rebuilt the product around those questions, treating the balance as the anchor and everything else as context.",
      },
      {
        type: "image",
        src: "/case/wide-a.svg",
        alt: "The redesigned Atlas dashboard with balance anchored top-left.",
        caption: "The new home. One number, one trend line, one honest answer.",
      },
      {
        type: "text",
        heading: "Approach",
        body: "I ran two weeks of research with fourteen founders, then reframed the information architecture from account-first to question-first. Every screen now leads with a decision, not a data dump.",
      },
      {
        type: "imagePair",
        images: [
          { src: "/case/pair-a.svg", alt: "Balance detail view." },
          { src: "/case/pair-b.svg", alt: "Transaction timeline." },
        ],
      },
      {
        type: "quote",
        quote:
          "For the first time I open my bank and immediately know if I'm okay.",
        attribution: "Beta customer, seed-stage founder",
      },
      {
        type: "fullWidthImage",
        src: "/case/full-a.svg",
        alt: "The full Atlas design system in context.",
        caption: "A restrained system: one typeface, hairline rules, no chrome.",
      },
      {
        type: "text",
        heading: "Outcome",
        body: "Time-to-answer for the balance question dropped by 62% in usability testing. The system shipped across web and iOS and now underpins every new Atlas surface.",
      },
    ],
  },
  {
    slug: "northwind-care",
    title: "Northwind — Care Coordination",
    tags: ["Healthcare", "UX Research", "2023"],
    category: "work",
    cover: "/covers/02.svg",
    year: "2023",
    summary:
      "A calmer workflow for nurses coordinating care across dozens of patients without dropping a single detail.",
    role: "Senior Product Designer",
    client: "Northwind Health",
    duration: "8 months",
    caseStudyBlocks: [
      {
        type: "text",
        heading: "Overview",
        body: "Care coordinators were managing complex patient loads across three disconnected tools. We designed a single, quiet workspace that keeps the whole panel in view.",
      },
      {
        type: "image",
        src: "/case/wide-b.svg",
        alt: "Northwind care panel overview.",
        caption: "The panel view — every patient, one glance.",
      },
      {
        type: "quote",
        quote: "It stopped feeling like I was going to miss something.",
        attribution: "Care coordinator, pilot site",
      },
      {
        type: "text",
        heading: "Outcome",
        body: "Handoff errors fell measurably across two pilot clinics, and the workspace became the daily home screen for the coordination team.",
      },
    ],
  },
  {
    slug: "foundry-design-system",
    title: "Foundry — Design System",
    tags: ["Design System", "Tooling", "2022"],
    category: "work",
    cover: "/covers/03.svg",
    year: "2022",
    summary:
      "One source of truth for a fast-growing product org: tokens, components, and the documentation that keeps them honest.",
    role: "Design Systems Lead",
    client: "Foundry Labs",
    duration: "Ongoing",
    caseStudyBlocks: [
      {
        type: "text",
        heading: "Overview",
        body: "Five product teams, five drifting interpretations of the brand. Foundry unified them into a single token-driven system spanning Figma and code.",
      },
      {
        type: "fullWidthImage",
        src: "/case/full-b.svg",
        alt: "The Foundry component library.",
        caption: "Primitives, patterns, and the rules that bind them.",
      },
      {
        type: "text",
        heading: "Outcome",
        body: "New feature scaffolding time dropped from days to hours, and visual consistency scores across products converged for the first time.",
      },
    ],
  },
  {
    slug: "signal-analytics",
    title: "Signal — Analytics",
    tags: ["Data Product", "Product Design", "2023"],
    category: "work",
    cover: "/covers/04.svg",
    year: "2023",
    summary:
      "Making a dense analytics product legible — turning charts into answers and dashboards into decisions.",
    role: "Product Designer",
    client: "Signal",
    duration: "6 months",
    caseStudyBlocks: [
      {
        type: "text",
        heading: "Overview",
        body: "Signal's power users loved its depth; everyone else drowned in it. We designed a progressive interface that reveals complexity only when it's asked for.",
      },
      {
        type: "image",
        src: "/case/wide-c.svg",
        alt: "Signal analytics workspace.",
        caption: "Defaults that answer, controls that stay out of the way.",
      },
      {
        type: "text",
        heading: "Outcome",
        body: "Activation among non-analyst users nearly doubled in the quarter after launch.",
      },
    ],
  },
  {
    slug: "type-specimen",
    title: "Type Specimen Machine",
    tags: ["Experiment", "Typography", "2024"],
    category: "playground",
    cover: "/covers/05.svg",
    year: "2024",
    summary:
      "A small tool that generates editorial type specimens from any variable font you drop into it.",
    caseStudyBlocks: [
      {
        type: "text",
        heading: "Note",
        body: "A weekend build exploring how far a single variable font can be pushed as an editorial system. Drop in a font, get a printable specimen.",
      },
      {
        type: "fullWidthImage",
        src: "/case/full-c.svg",
        alt: "Generated type specimen.",
      },
    ],
  },
  {
    slug: "grid-studies",
    title: "Grid Studies",
    tags: ["Experiment", "Motion", "2023"],
    category: "playground",
    cover: "/covers/06.svg",
    year: "2023",
    summary:
      "An ongoing series of compositions exploring rhythm, negative space, and the discipline of the modular grid.",
    caseStudyBlocks: [
      {
        type: "text",
        heading: "Note",
        body: "A personal practice — one composition a week, always monochrome, always on a strict grid. This is a selection.",
      },
      {
        type: "imagePair",
        images: [
          { src: "/case/pair-c.svg", alt: "Grid study 04." },
          { src: "/case/pair-d.svg", alt: "Grid study 09." },
        ],
      },
    ],
  },
];

// ── Derived helpers — used by pages, no need to edit ─────────────────────────

export const workProjects = projects.filter((p) => p.category === "work");
export const playgroundProjects = projects.filter(
  (p) => p.category === "playground",
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
