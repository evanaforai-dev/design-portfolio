/**
 * Site-wide content. All copy is lowercase by rule, and contains no em dashes.
 */

export const site = {
  name: "evana sajan pallivathukkal",
  /** Wordmark shown in the minimal nav (links home). */
  wordmark: "evana sajan pallivathukkal",
  role: "product designer",
  email: "hello@evana.design",
  resumeUrl: "/resume.pdf",

  social: [
    { label: "email", href: "mailto:hello@evana.design" },
    // TODO · replace with the real profile url before this goes out.
    { label: "linkedin", href: "https://linkedin.com/" },
    { label: "github", href: "https://github.com/evanaforai-dev" },
  ],
};

export const about = {
  headline: "the practice predates the profession.",

  bio: [
    "creative technologist, not always digital. i like to practice “let the work speak for itself” a little too seriously, since my time at spa delhi.",
    "anything that offers a new way to express an idea, and the mechanics of it, usually gets my attention. some interests stay for years, others just long enough to understand them: painting and film, printmaking, animation, writing, architecture, furniture, data viz, music, and maybe even apps.",
    "being at idc, iit bombay shifted my attention from what we make to why we make it. that curiosity has since wandered through philosophy, mythology, history, business, kickboxing, even formula 1.",
    "i don’t think of technology as an end in itself. it’s simply another medium. i’m usually more interested in what it causes than what it enables.",
  ],

  /** The two registers the work runs in. Shown as a pair, not a toggle. */
  hours: [
    {
      key: "office hours",
      note: "finds leverage in systems, strategy, and emerging technology. more interested in defining the right problem than debating a 16px margin.",
      axes: [
        "ai native",
        "user empathy",
        "visual refinement",
        "collaborative execution",
        "systems thinking",
      ],
    },
    {
      key: "after hours",
      note: "usually investigating the same thing from different angles: how people make meaning.",
      axes: ["f1 / kickboxing", "side quests", "films", "drawing", "literature"],
    },
  ],

  service: [
    "product design",
    "ai workflows",
    "design research",
    "design systems",
    "visual data design",
    "0 → 1 strategy",
    "prototyping & development",
    "architecture",
  ],

  background: [
    {
      period: "2026",
      sector: "education",
      place: "airtribe",
      role: "ai tools for learners / for business",
    },
    {
      period: "2025",
      sector: "finance",
      place: "wells fargo",
      role: "migration in design systems for lob products",
    },
    {
      period: "2024",
      sector: "civic tech",
      place: "kochi metro",
      role: "academic collaboration",
    },
    {
      period: "2022",
      sector: "architecture",
      place: "sangath collective",
      role: "bv doshi",
    },
  ],

  education: [
    { place: "idc, iit bombay", award: "m.des interaction design" },
    { place: "spa, new delhi", award: "b.arch" },
  ],

  /** up my sleeve: what i do, and what i do it with. */
  skills: [
    "systems thinking",
    "product strategy",
    "interaction design",
    "design engineering",
    "research synthesis",
    "information design",
    "ai experiences",
    "prototyping",
  ],

  tools: [
    "figma",
    "cursor",
    "claude",
    "framer",
    "adobe suite",
    "v0",
    "notion",
    "jira",
  ],

  contact: "let’s create something solid. open to experimentation worldwide.",

  future: [
    { horizon: "immediate future", line: "contributing to social tech" },
    {
      horizon: "plausible future",
      line: "curate design, discussions, and open my independent gallery",
    },
  ],
};
