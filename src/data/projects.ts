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
      "three legacy financial products migrated onto wells fargo's responsive public-site design system. policy-compliant, mobile-first, and live on wellsfargo.com.",
    link: "https://www.wellsfargo.com/about/responsibility-and-impact/sustainability/",
    // the brand plate on a transparent 1:1 canvas, floated like the other
    // object tiles: the square gives it the kochi water metro tile's width,
    // and the plate's height lands under the deep cuts receipt.
    display: { fit: "contain" },
  },
  {
    slug: "vision",
    title: "vision",
    tags: ["product design", "payments", "internal tooling"],
    category: "work",
    /*
     * Vision itself, on placeholder data: the payments table, the cohort
     * filter and the slack-access modal, composed over a render on a
     * transparent ground. It replaces the redacted google sheet, which was
     * the honest tile while no capture of the product could leave, and is
     * the better one now that one can: the case study is about what was
     * built, not only about what it killed. Every name, address and number
     * in the frame is seeded, not a real learner.
     */
    cover: "/covers/vision.webp",
    year: "2026",
    summary:
      "the company's payments moved out of a google sheet and into airtribe's internal sales and operations product, in three phases, without the sheet ever going dark.",
    display: { fit: "contain" },
  },
  {
    slug: "airtribe-ai-skills",
    title: "airtribe ai skills",
    tags: ["ai product design", "design systems", "learning design"],
    category: "work",
    /*
     * Kai's landing surface, composed on a transparent ground. Contained
     * rather than filled: the art is drawn to its own edges and cropping it
     * cuts the knot or the prompt field, and a transparent ground means the
     * letterboxing is the page rather than a band of another colour.
     */
    cover: "/covers/airtribe-ai-skills.webp",
    year: "2026",
    summary:
      "two ai skills at airtribe: a design language the lxd team authors inside so a growing catalogue stays on-brand, and a tutor that writes one cited lesson for one reader.",
    link: "https://willowy-blancmange-6a230b.netlify.app/",
    display: { fit: "contain" },
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
    cover: "/covers/lipi-tile.gif",
    year: "2026",
    summary:
      "a figma plugin that pressure-tests ui against localized indic copy, fixing where translation breaks layout.",
    link: "https://github.com/evanaforai-dev/lipi",
    // animated cover: static poster idle, plays on hover. The tile copies have
    // the dark ground lifted out, so the two panels float on the grid like the
    // other object tiles; the case study still uses the originals on their
    // ground.
    display: {
      fit: "contain",
      animated: true,
      poster: "/covers/lipi-tile-poster.png",
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
