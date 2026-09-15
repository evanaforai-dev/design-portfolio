import type { Project } from "@/types/project";

/**
 * ── ADD A PROJECT HERE ────────────────────────────────────────────────────
 * Every project lives in this one array and uses the one `Project` shape. To
 * publish a new project, append an entry below. The home grid reads from here;
 * `category` is retained in the schema but no longer changes the layout.
 *
 * All visible copy is lowercase and contains no em dashes, per the site's
 * typography rules. `link` is where the grid cell points; `cover` is the
 * square thumbnail in /public/covers.
 */

export const projects: Project[] = [
  {
    slug: "a-century-of-villains",
    title: "a century of villains",
    tags: ["data visualization", "information design", "creative technology"],
    category: "playground",
    cover: "/covers/villains.svg",
    year: "2026",
    summary:
      "an interactive d3 streamgraph tracing bollywood villains across the decades.",
    link: "https://villain2.vercel.app",
    // data-viz screen: a slight lateral shift on hover. Light image, so the
    // label tags read in design-black.
    display: { hover: "shift", labelSurface: "light" },
  },
  {
    slug: "lipi",
    title: "lipi",
    tags: ["developer tooling", "design systems", "interaction design", "prototyping"],
    category: "playground",
    cover: "/covers/lipi.gif",
    year: "2026",
    summary:
      "a figma plugin that pressure-tests ui against localized indic copy, fixing where translation breaks layout.",
    link: "https://github.com/evanaforai-dev/lipi",
    // animated cover: static poster idle, plays on hover; gentle rise
    display: {
      fit: "contain",
      hover: "float",
      animated: true,
      poster: "/covers/lipi-poster.png",
      // the square ui fills the cell and its lower area is dark, so the label
      // tags read in white
      labelSurface: "dark",
    },
  },
  {
    slug: "deep-cuts",
    title: "deep cuts",
    tags: ["interaction design", "creative technology", "prototyping"],
    category: "playground",
    cover: "/covers/deepcuts.png",
    year: "2026",
    summary:
      "a walkman-inspired interactive experience, a hardware-styled react ui cut into a launch film.",
    link: "https://github.com/evanaforai-dev/deepcuts",
    // transparent "mixtape receipt" object, floated in the cell with negative
    // space; lifts slightly on hover like a physical object
    display: { fit: "contain", pad: "p-6 md:p-10", hover: "lift" },
  },
  {
    slug: "soundmap",
    title: "soundmap",
    tags: ["product design", "creative technology", "motion"],
    category: "playground",
    cover: "/covers/soundmap.png",
    year: "2026",
    summary:
      "a daily sound journal, record a moment and watch it become a visual artifact on your calendar.",
    link: "https://github.com/evanaforai-dev/soundmap",
    // close-up crop of the artifact calendar; photograph, a barely-there zoom.
    // Light image, so the label tags read in design-black.
    display: { fit: "cover", position: "top", hover: "zoom", labelSurface: "light" },
  },
  {
    slug: "kochi-water-metro",
    title: "kochi water metro",
    tags: ["product design", "systems thinking", "information design"],
    category: "playground",
    cover: "/covers/kochi.jpg",
    year: "2026",
    summary:
      "an offline-first pwa: the official interactive map plus a bilingual, location-aware storytelling layer.",
    link: "https://github.com/evanaforai-dev/kochi-water-metro",
    // photograph: a barely-there zoom on hover. Dark sunset image, so the label
    // tags read in white.
    display: { hover: "zoom", labelSurface: "dark" },
  },
];

// ── Derived helpers ─────────────────────────────────────────────────────────

export const workProjects = projects.filter((p) => p.category === "work");
export const playgroundProjects = projects.filter(
  (p) => p.category === "playground",
);
