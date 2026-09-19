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
    cover: "/covers/obj-kochi1app.svg",
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
    cover: "/covers/obj-wells-fargo.svg",
    year: "2025",
    summary:
      "migrating legacy financial products onto wells fargo's responsive public-site design system: policy-compliant, mobile-first, conversion-focused.",
    link: "https://www.wellsfargo.com/about/responsibility-and-impact/sustainability/",
    // branded abstract hero (devices arranged as the wf star), filled.
    display: { fit: "cover" },
  },
  {
    slug: "airtribe-learn",
    title: "airtribe learn",
    tags: ["product design", "ai", "learning design"],
    category: "work",
    cover: "/covers/obj-airtribe-learn.svg",
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
    cover: "/covers/obj-villains.svg",
    year: "2026",
    summary:
      "an interactive d3 streamgraph tracing bollywood villains across the decades.",
    link: "https://villain2.vercel.app",
    // data-viz screen, filled full-bleed; caption band rises on hover.
    display: { fit: "cover" },
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
      fit: "cover",
      animated: true,
      poster: "/covers/obj-lipi.svg",
    },
  },
  {
    slug: "deep-cuts",
    title: "deep cuts",
    tags: ["interaction design", "creative technology", "prototyping"],
    category: "playground",
    cover: "/covers/obj-deepcuts.svg",
    year: "2026",
    summary:
      "a walkman-inspired interactive experience, a hardware-styled react ui cut into a launch film.",
    link: "https://github.com/evanaforai-dev/deepcuts",
    // the mixtape receipt drawn as a full-bleed plate on the shared ground
    display: { fit: "cover" },
  },
  {
    slug: "soundmap",
    title: "soundmap",
    tags: ["product design", "creative technology", "motion"],
    category: "playground",
    cover: "/covers/obj-soundmap.svg",
    year: "2026",
    summary:
      "a daily sound journal, record a moment and watch it become a visual artifact on your calendar.",
    link: "https://github.com/evanaforai-dev/soundmap",
    // one day's artifact, with its acoustic reading, on the shared ground
    display: { fit: "cover" },
  },
  {
    slug: "kochi-water-metro",
    title: "kochi water metro",
    tags: ["product design", "systems thinking", "information design"],
    category: "playground",
    cover: "/covers/obj-kochi-water-metro.svg",
    year: "2026",
    summary:
      "an offline-first pwa: the official interactive map plus a bilingual, location-aware storytelling layer.",
    link: "https://github.com/evanaforai-dev/kochi-water-metro",
    // photograph, filled full-bleed (dark sunset image).
    display: { fit: "cover" },
  },
];

// ── Derived helpers ─────────────────────────────────────────────────────────

export const workProjects = projects.filter((p) => p.category === "work");
export const playgroundProjects = projects.filter(
  (p) => p.category === "playground",
);
