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
    slug: "kochi1app",
    title: "kochi1app",
    tags: ["service design", "ux research", "mobility"],
    category: "work",
    cover: "/covers/kochi1app.jpg",
    year: "2024",
    summary:
      "a service-design redesign of kochi's official transit app: plan a trip by intention, nudge greener journeys, and design the first and last mile.",
    link: "https://www.behance.net/gallery/212543637/Public-Transport-Systems-Service-Design",
    // wide editorial hero (hands, phone, metro tunnel), filled full-bleed.
    display: { fit: "cover" },
  },
  {
    slug: "wells-fargo",
    title: "wells fargo",
    tags: ["product design", "design systems", "financial services"],
    category: "work",
    cover: "/covers/wells-fargo-plate.svg",
    year: "2025",
    summary:
      "migrating legacy financial products onto wells fargo's responsive public-site design system: policy-compliant, mobile-first, conversion-focused.",
    link: "https://www.wellsfargo.com/about/responsibility-and-impact/sustainability/",
    // the brand plate on a transparent 1:1 canvas, floated like the other
    // object tiles: the square gives it the kochi water metro tile's width,
    // and the plate's height lands under the deep cuts receipt.
    display: { fit: "contain" },
  },
  {
    slug: "airtribe-learn",
    title: "airtribe learn",
    tags: ["product design", "ai", "learning design"],
    category: "work",
    cover: "/covers/airtribe-learn.png",
    year: "2026",
    summary:
      "an ai tutor that runs a short intake, then writes you a structured, cited lesson with a concept map that builds as you learn.",
    link: "https://willowy-blancmange-6a230b.netlify.app/",
    // product landing shot (light ui), filled full-bleed.
    display: { fit: "cover" },
  },
  {
    slug: "a-century-of-villains",
    title: "a century of villains",
    tags: ["data visualization", "information design", "creative technology"],
    category: "playground",
    // case-study hero image, filled (cover)
    cover: "/covers/villains-stream.svg",
    year: "2026",
    summary:
      "an interactive d3 streamgraph tracing bollywood villains across the decades.",
    link: "https://villain2.vercel.app",
    // transparent artifact: it floats in the cell and the grid shows through
    display: { fit: "contain" },
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
    // animated cover: static poster idle, plays on hover
    display: {
      fit: "contain",
      animated: true,
      poster: "/covers/lipi-poster.png",
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
    // space; the grid shows through behind it
    display: { fit: "contain", pad: "p-6 md:p-10" },
  },
  {
    slug: "soundmap",
    title: "soundmap",
    tags: ["product design", "creative technology", "motion"],
    category: "playground",
    cover: "/covers/soundmap-day.svg",
    year: "2026",
    summary:
      "a daily sound journal, record a moment and watch it become a visual artifact on your calendar.",
    link: "https://github.com/evanaforai-dev/soundmap",
    // transparent artifact: it floats in the cell and the grid shows through
    display: { fit: "contain" },
  },
  {
    slug: "kochi-water-metro",
    title: "kochi water metro",
    tags: ["product design", "systems thinking", "information design"],
    category: "playground",
    cover: "/covers/kochi-journey.svg",
    year: "2026",
    summary:
      "an offline-first pwa: the official interactive map plus a bilingual, location-aware storytelling layer.",
    link: "https://github.com/evanaforai-dev/kochi-water-metro",
    // transparent: the official map cropped to the operating route, the ferry
    // running it on a loop, and the app's own story card floated over it
    display: { fit: "contain" },
  },
];

// ── Derived helpers ─────────────────────────────────────────────────────────

export const workProjects = projects.filter((p) => p.category === "work");
export const playgroundProjects = projects.filter(
  (p) => p.category === "playground",
);
