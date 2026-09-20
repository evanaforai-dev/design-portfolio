import type { CaseStudy } from "@/types/caseStudy";

/**
 * ── DRAFT · NOT WIRED IN ──────────────────────────────────────────────────
 *
 * vision · the payments migration. This file is a scaffold, not a case study:
 * every string below is a PROMPT asking for a specific fact, not copy. Nothing
 * imports it, so the live site cannot render it by accident.
 *
 * To see what is still unanswered:
 *   grep -n "TODO ·" src/data/drafts/vision.ts
 *
 * To publish once it is filled in, two moves:
 *   1. paste this object into src/data/caseStudies.ts under the key "vision"
 *   2. add the tile to src/data/projects.ts (cover, tags, summary)
 *
 * The rule from every other case study on this site holds here: no invented
 * metrics, research, quotes or outcomes. A number goes in only if you can point
 * at where it came from. If a fact is not available, cut the sentence rather
 * than soften it into something unfalsifiable.
 *
 * NDA: the interface may be shown; the data may not. Every screenshot is
 * repopulated with the synthetic cast in ./vision-media.md before it is
 * exported. The synthetic-data disclosure belongs in ONE caption, not repeated
 * on every image.
 */
export const visionDraft: CaseStudy = {
  slug: "vision",

  hero: {
    kicker: "product design · airtribe",
    title: "vision",
    subtitle:
      "TODO · one line: what vision is and whose day it runs. name the users by their job, not as 'stakeholders'. the payments workflow should be visible in this sentence.",
    media: {
      type: "image",
      src: "/case/vision/hero.jpg",
      alt: "TODO · describe the screen literally, for someone who cannot see it",
    },
    mediaFit: "cover",
    mediaPosition: "center",
    meta: [
      { label: "role", value: "TODO · your actual title on this work" },
      { label: "company", value: "airtribe" },
      { label: "product", value: "vision, internal sales and operations platform" },
      { label: "year", value: "TODO · the year(s) this shipped" },
    ],
  },

  sections: [
    // ── the spine ───────────────────────────────────────────────────────────
    {
      kind: "thesis",
      text:
        "TODO · the sentence the whole case rests on. the honest version of it is something like: the spreadsheet was not losing. it was winning, because it was faster to edit than anything we had built. say why it kept winning, in your own words, and what that meant the product had to beat.",
    },
    {
      kind: "context",
      paragraphs: [
        "TODO · what vision is, in two sentences, for a reader who has never seen it. who logs into it, how often, and to do what.",
        "TODO · where payments actually lived before this. which sheet, who owned it, who else read it, what broke when two people edited at once. concrete detail here is worth more than any amount of framing.",
      ],
    },
    {
      kind: "question",
      text:
        "TODO · the question you were actually answering. not 'how might we improve payments' — the real one, e.g. what does a product have to do before someone gives up a spreadsheet they trust.",
    },
    {
      kind: "constraints",
      label: "what could not move",
      items: [
        {
          label: "the sheet stayed live",
          text: "TODO · the workflow was running money while you rebuilt it. say what that ruled out — no big-bang cutover, no read-only period, whatever was actually true.",
        },
        {
          label: "TODO · finance / accounting",
          text: "TODO · what downstream depended on the sheet's exact shape (reconciliation, invoicing, reporting). this is usually the constraint that shaped the data model.",
        },
        {
          label: "TODO · the people",
          text: "TODO · the teams whose habits you were changing. sales, lxd, onboarding — whoever. what they would not give up.",
        },
        {
          label: "the nda",
          text: "the interface is shown here with synthetic records. every name, company, amount and date on these screens is invented; the structure is the real thing.",
        },
      ],
    },

    // ── the turn · mandatory. the section a screenshot cannot give you ──────
    {
      kind: "turn",
      label: "TODO · name the wrong turn",
      tried:
        "TODO · the first direction. the likely candidates: a form-per-payment, or a faithful grid clone of the sheet. say which, and why it looked right at the time.",
      result:
        "TODO · what happened when it met a real user or a real week of data. be specific about the moment it broke.",
      change:
        "TODO · what replaced it, and the rule you carried forward. this is the most valuable paragraph in the case study — it is the one thing a reader cannot get from the screens.",
    },

    // ── act 01 · the migration ──────────────────────────────────────────────
    {
      kind: "pipeline",
      label: "killing the spreadsheet, in three phases",
      steps: [
        {
          glyph: "grid",
          label: "TODO · phase 1, the sales sheet",
          text: "TODO · what moved first and why that was the safe place to start.",
          note: "TODO · the awkward detail. what still had to be done by hand in this phase.",
        },
        {
          glyph: "layers",
          label: "TODO · phase 2, widened for lxd",
          text: "TODO · what widening meant in fields — which columns arrived, whose they were, what they broke.",
          note: "TODO · what this phase cost the people already using phase 1.",
        },
        {
          glyph: "converge",
          label: "TODO · phase 3, the onboarding sheet",
          text: "TODO · the last sheet to come in, and what made it the hardest or the easiest.",
          note: "TODO · what is still outside the product today, honestly.",
        },
      ],
      caption:
        "TODO · one line on why it was staged at all rather than migrated at once.",
    },

    // ── dense information · the reason this case exists ─────────────────────
    {
      kind: "annotated",
      label: "TODO · e.g. holding the whole record on one screen",
      media: {
        type: "image",
        src: "/case/vision/table.jpg",
        alt: "TODO · describe the table: roughly how many columns, what a row is",
      },
      fit: "contain",
      frame: true,
      items: [
        {
          title: "TODO · what earns a column",
          text: "TODO · the rule you used to decide what stays visible and what collapses. every dense-data product has one; name yours.",
        },
        {
          title: "TODO · what the eye lands on first",
          text: "TODO · the hierarchy decision. which field wins, and what you demoted to let it win.",
        },
        {
          title: "TODO · status",
          text: "TODO · how a payment's state is read at a glance, and why that treatment over a plain label.",
        },
        {
          title: "TODO · what you refused to add",
          text: "TODO · the thing someone asked for that you kept off this screen. a density case is only credible if something was left out.",
        },
      ],
    },
    {
      kind: "system",
      label: "TODO · e.g. the editing grammar",
      paragraphs: [
        "TODO · one paragraph on the editing model. a spreadsheet's whole advantage is that edit is one click and never leaves the grid. say what you matched, and where you deliberately made editing slower because money was involved.",
      ],
      mapping: [
        { from: "TODO · click a cell", to: "TODO · what happens" },
        { from: "TODO · tab / enter", to: "TODO · what happens" },
        { from: "TODO · escape", to: "TODO · what happens" },
        { from: "TODO · bulk select", to: "TODO · what happens" },
      ],
      metrics: [
        { label: "TODO · e.g. columns in a row", value: "TODO · a number you can point at" },
        { label: "TODO · e.g. fields editable inline", value: "TODO" },
        { label: "TODO · e.g. clicks to record a payment, before", value: "TODO" },
        { label: "TODO · e.g. clicks after", value: "TODO" },
      ],
      note:
        "TODO · the safeguard. what stops a mis-edit on a money field — confirmation, undo, audit trail, permissions. if there is none, say that instead.",
    },

    // ── act 02 · templates ──────────────────────────────────────────────────
    {
      kind: "detail",
      side: "right",
      media: {
        type: "image",
        src: "/case/vision/templates.jpg",
        alt: "TODO · describe the template screen",
      },
      fit: "contain",
      title: "TODO · e.g. templates ops can send from",
      text:
        "TODO · two or three sentences. what a manager can do that an agent cannot, and why that line is drawn where it is. the roles are the design here, so the permission model is the story, not the editor ui.",
    },

    // ── act 03 · filters and search ─────────────────────────────────────────
    {
      kind: "detail",
      side: "left",
      media: {
        type: "image",
        src: "/case/vision/filters.jpg",
        alt: "TODO · describe the filter panel in its applied state",
      },
      fit: "contain",
      title: "TODO · e.g. making the dataset navigable",
      text:
        "TODO · what a real query looks like in this product — the actual question someone is asking when they reach for include/exclude. name one. then say what the interface does to make that question cheap to ask.",
    },

    // ── close ───────────────────────────────────────────────────────────────
    {
      kind: "statement",
      text:
        "TODO · one line, human. the person you kept in mind while deciding. the wells fargo case does this well: someone on a phone between appointments, looking for one number.",
    },
    {
      kind: "outcome",
      paragraphs: [
        "TODO · what is actually live now, and what is not. dates if you have them. adoption or usage only if you can point at where the number came from.",
        "the designs are shown here with synthetic records under an airtribe nda. the structure, the flows and the decisions are real; every value on the screens is invented.",
      ],
    },
    {
      kind: "reflection",
      text:
        "TODO · what you would do differently. the strongest version names something that is still wrong with it, not a lesson learned.",
    },
  ],
};
