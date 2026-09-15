import type { CaseStudy } from "@/types/caseStudy";

/**
 * Case-study content. Every claim here is grounded in the actual project repos.
 * No invented users, research, metrics, testimonials, or client work. Where a
 * project is a prototype or independent piece, it says so plainly.
 *
 * Assets are the real project artifacts, in /public/case/<slug>/ (plus a couple
 * of covers). Copy is lowercase and em-dash-free, matching the site.
 */

export const caseStudies: Record<string, CaseStudy> = {
  // ───────────────────────────────────────────── a century of villains ──
  "a-century-of-villains": {
    slug: "a-century-of-villains",
    hero: {
      kicker: "data visualization · self-initiated",
      title: "a century of villains",
      subtitle:
        "an interactive streamgraph tracing how the hindi-cinema villain changed shape across ninety years.",
      media: { type: "image", src: "/case/villains/streamgraph.svg", alt: "the streamgraph of villain archetypes from the 1930s to the 2020s" },
      mediaFit: "contain",
      meta: [
        { label: "role", value: "design + build" },
        { label: "type", value: "data storytelling" },
        { label: "year", value: "2026" },
        { label: "status", value: "live" },
        { label: "stack", value: "react · typescript · d3" },
      ],
      links: [
        { label: "live piece", href: "https://villain2.vercel.app" },
        { label: "code", href: "https://github.com/evanaforai-dev/a-century-of-villains" },
      ],
    },
    sections: [
      { kind: "thesis", text: "a villain is a mirror. i wanted to see what ninety years of hindi cinema had been afraid of, and whether the fear had a shape." },
      {
        kind: "context",
        paragraphs: [
          "the bollywood villain is usually argued about one film at a time. i wanted the long view: not who the villains were, but what kind of threat each decade cast as the enemy.",
          "so i hand-sampled 495 films across ten decades and tagged each villain by archetype and by whether the threat was personal or systemic. in the streamgraph above, column width is how many films a decade actually made, band height is each archetype's share, and thinly-sourced decades wear a ▲.",
        ],
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "encode the doubt into the chart itself",
            why: "the sample covers only 4 to 20 percent of films in a given decade and leans toward well-known titles.",
            tradeoff: "a thinly-sourced decade cannot be allowed to look as certain as a well-covered one.",
            result: "column width is tied to how many films a decade actually made, sparse decades wear a warning glyph, and the copy keeps repeating that this is a shape of the trend, not a count.",
          },
          {
            n: "02",
            title: "let colour carry the argument",
            why: "the whole thesis is a drift from intimate evil to systemic evil.",
            tradeoff: "thirteen archetypes is a lot of hues to keep legible on black.",
            result: "warm reds and ambers for personal crimes, cool blues and teals for systemic ones, so the palette itself moves warm to cool as the century turns.",
          },
          {
            n: "03",
            title: "give every decade two voices",
            why: "a chart states a fact; it rarely makes you feel one.",
            tradeoff: "twice the copy to write and keep honest.",
            result: "each decade pairs a clipped analytical line with a first-person literary one, so you get the number and the mood in the same hover.",
          },
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/villains/personal-system.svg", alt: "personal versus systemic villains across the decades" },
        fit: "cover",
        caption: "personal villains in red, systemic ones in blue. for the first time, the 2020s tip systemic.",
      },
      { kind: "statement", text: "the enemy stops being a man and becomes a nation, a policy, a system." },
      {
        kind: "outcome",
        paragraphs: [
          "the piece is live and self-initiated.",
          "what it settled for me: a transparently caveated sample can still carry a real argument, as long as the artwork keeps showing its own uncertainty rather than hiding it.",
        ],
      },
      { kind: "reflection", text: "i set out to measure the villain. the real subject turned out to be my own confidence: how much certainty a hand-built sample can carry before it starts to lie. most of the design was keeping that limit visible while the chart still made a bold claim." },
    ],
  },

  // ──────────────────────────────────────────────────────────────── lipi ──
  lipi: {
    slug: "lipi",
    hero: {
      kicker: "figma plugin · developer tooling",
      title: "lipi",
      subtitle:
        "a figma plugin that pressure-tests a screen against localized copy, then points at the component causing the break.",
      media: { type: "video", src: "/case/lipi/film.mp4", alt: "lipi generating a localized screen and finding the layout break" },
      mediaFit: "cover",
      meta: [
        { label: "role", value: "product design + build" },
        { label: "type", value: "design tooling" },
        { label: "year", value: "2026" },
        { label: "status", value: "prototype" },
        { label: "stack", value: "figma api · react · typescript" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/lipi" }],
    },
    sections: [
      { kind: "thesis", text: "localization usually arrives after the layout is finished, as a developer's problem. i wanted to move that pressure earlier, while the design is still editable, and aim it at the source instead of the symptom." },
      {
        kind: "context",
        paragraphs: [
          "indic scripts run longer than english and sit taller on the line. a button that fits “save” clips on “सहेजें”. designers rarely see this until it has already shipped.",
          "lipi takes your english frames, generates a hindi or tamil version, re-measures the layout, and flags exactly where the translated text breaks it.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/lipi/system.png", alt: "the results view grouping issues by the component behind them" },
        fit: "cover",
        caption: "the result view refuses a flat bug list. it names the component behind the failures: one update improves six screens.",
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "cause the break, don't wait for it",
            why: "the first plan only analysed text already on the canvas, which finds nothing until someone has localized by hand.",
            tradeoff: "the plugin now has to translate and reflow, far past a read-only checker.",
            result: "a clone, translate and re-measure delta engine produces the pressure itself, off to the side, then measures the growth.",
            media: { type: "image", src: "/case/lipi/reveal.png", alt: "reveal mode drawing measurement overlays on the canvas" },
            fit: "cover",
          },
          {
            n: "02",
            title: "surface the pattern, not the symptoms",
            why: "forty separate overflow warnings is noise a designer will ignore.",
            tradeoff: "more work to roll geometry failures up into their cause.",
            result: "issues aggregate into root causes, so you fix the button once and watch the count fall across every screen it appears in.",
            media: { type: "image", src: "/case/lipi/before-after.png", alt: "a fixed-width cta before and after it learns to hug its label" },
            fit: "cover",
          },
          {
            n: "03",
            title: "never touch the original",
            why: "a tool that mutates your file to test it is a tool you will not trust.",
            tradeoff: "extra machinery: clones, locked overlays, crash-safe cleanup.",
            result: "preview lays a hidden clone over the original; reveal draws locked overlays and drops you back on the editable layer. export is the only permanent write.",
            media: { type: "image", src: "/covers/lipi.gif", alt: "preview turning on and off, restoring the original each time" },
            fit: "contain",
          },
          {
            n: "04",
            title: "hide the engine",
            why: "designers do not need severity scores, confidence values, or the names of internal passes.",
            tradeoff: "all of that sophistication becomes invisible.",
            result: "the interface speaks only in reach and in four plain steps: select, generate, preview, export.",
          },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/lipi/product.png", alt: "lipi running in a dark figma workspace" },
        fit: "cover",
        side: "right",
        title: "measured, not translated",
        text: "every flag is geometry, not opinion: the baseline bounds, the localized bounds, and the growth between them. nothing about the break is guessed.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "a working prototype, not yet run inside the live figma runtime. hindi and tamil today; the script ranges are written so more indic languages are a small addition, not a rebuild.",
        ],
      },
      { kind: "reflection", text: "i planned a checker that reads what is already on the canvas. building it made the real constraint obvious: you cannot check for a break nobody has created yet. the tool had to become the thing that causes the break, safely, before it could ever point at the cause." },
    ],
  },

  // ─────────────────────────────────────────────────────────── deep cuts ──
  "deep-cuts": {
    slug: "deep-cuts",
    hero: {
      kicker: "interaction design · web",
      title: "deep cuts",
      subtitle:
        "a walkman-shaped machine that turns one typed signal into a branching journey, and prints the path as a receipt you can keep.",
      media: { type: "video", src: "/case/deepcuts/film.mp4", alt: "the deep cuts console running a full journey and printing a receipt" },
      mediaFit: "contain",
      meta: [
        { label: "role", value: "design + build" },
        { label: "type", value: "interaction study" },
        { label: "year", value: "2026" },
        { label: "status", value: "prototype + film" },
        { label: "stack", value: "react · framer motion · web audio" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/deepcuts" }],
    },
    sections: [
      { kind: "thesis", text: "most ai lives in a chat box. i wanted curiosity to feel like operating an object: something you tune, play, and collect, not something you prompt." },
      {
        kind: "context",
        paragraphs: [
          "you type a signal and tune it on a dial. the machine plays a chain of connected cards, each one picking up where the last left off, and at the end it prints a mixtape receipt you can collect into an archive.",
          "there is no backend and no language model behind it. the journeys are a hand-authored tree, which is the point: every branch leads somewhere genuinely different.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/deepcuts/splash.png", alt: "the deep cuts hardware console" },
        fit: "contain",
        frame: true,
        caption: "the console: a dial, a jog wheel, and three transport switches.",
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "make the controls do the work",
            why: "a hardware metaphor is a lie if you are still clicking flat buttons.",
            tradeoff: "far more interaction engineering: drag-to-rotate, detents, press travel, haptics.",
            result: "the jog wheel scrolls the selection, the dial locks characters, the switches shuffle, play and collect. every control has real travel and a synthesized click.",
            media: { type: "image", src: "/case/deepcuts/card.png", alt: "a knowledge card on the console screen" },
            fit: "contain",
          },
          {
            n: "02",
            title: "branch for real",
            why: "most choose-your-path demos quietly rejoin the same rail.",
            tradeoff: "authoring a genuine tree of twenty-seven threads instead of a script.",
            result: "the two doors you do not take lead somewhere actually different. the ending you reach is the deep cut the receipt prints.",
          },
          {
            n: "03",
            title: "print a keepsake, and keep its numbers honest",
            why: "the receipt is the one thing here someone would show a friend.",
            tradeoff: "the scores on it have to mean something.",
            result: "leaps and rarity are read off the real journey tree, so a receipt's numbers mean what they say and never change.",
            media: { type: "image", src: "/covers/deepcuts.png", alt: "the printed mixtape receipt" },
            fit: "contain",
          },
          {
            n: "04",
            title: "treat sound as material",
            why: "a machine should feel physical, not beep at you.",
            tradeoff: "a custom web-audio synth instead of audio files.",
            result: "contacts are filtered noise so they read as material; tones are saved for the moment you collect. a softer detent means the machine is turning the wheel, not your hand.",
          },
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/deepcuts/receipt-in-situ.png", alt: "the printed receipt held in the interface" },
        fit: "contain",
        frame: true,
        caption: "the receipt: your signal, the path taken, leaps and rarity, a timestamp. deterministic, so an artifact's numbers never change.",
      },
      { kind: "statement", text: "the autoplay film presses the same controls a hand presses. nothing on camera is mocked." },
      {
        kind: "outcome",
        paragraphs: [
          "deep cuts is a working prototype and a launch film cut entirely from the live product. it runs itself as an unattended loop for the camera.",
          "the content is a single seeded tree, enough to prove the interaction. a real version would put a live source of knowledge behind the same machine.",
        ],
      },
      { kind: "reflection", text: "i assumed the hard part would be the branching content. it was not. the hard part was making a screen feel like hardware, and that difference lives almost entirely in the press travel, the detent, and the sound, none of which shows up in a screenshot." },
    ],
  },

  // ──────────────────────────────────────────────────────────── soundmap ──
  soundmap: {
    slug: "soundmap",
    hero: {
      kicker: "pwa · web audio",
      title: "soundmap",
      subtitle:
        "a daily sound journal. record one moment; it becomes a coloured artifact on a calendar, and the same sound always makes the same colours.",
      media: { type: "video", src: "/case/soundmap/film.mp4", alt: "browsing the soundmap calendar and opening a day's artifact" },
      mediaFit: "contain",
      meta: [
        { label: "role", value: "design + build" },
        { label: "type", value: "personal product" },
        { label: "year", value: "2026" },
        { label: "status", value: "installable pwa" },
        { label: "stack", value: "react · web audio · indexeddb" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/soundmap" }],
    },
    sections: [
      { kind: "thesis", text: "a photo of a moment is easy. a recording of one is awkward to revisit. i wanted a way to keep a sound you would actually return to, without turning it into a feed." },
      {
        kind: "context",
        paragraphs: [
          "once a day you record about thirty seconds. the app listens, reads the sound, and renders it as a two-colour gradient drawn from the muted palette of traditional japanese hues.",
          "that artifact takes its place on a month calendar. tapping a day replays the audio while the gradient re-reveals in step with it.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/soundmap/artifact.png", alt: "a finished soundmap artifact with its metadata" },
        fit: "contain",
        frame: true,
        caption: "one day's artifact. the colours are not decoration; they are read from the recording.",
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "one recording a day",
            why: "a feed of your own moments is not a keepsake, it is a chore.",
            tradeoff: "you can miss a day, and you cannot hoard.",
            result: "the record button spends itself after a single take and rests until tomorrow. the scarcity is what makes the moment worth choosing.",
            media: { type: "image", src: "/case/soundmap/empty.png", alt: "the spent state: today is recorded" },
            fit: "contain",
          },
          {
            n: "02",
            title: "make the colour deterministic",
            why: "if the visual were random it would mean nothing.",
            tradeoff: "a strict mapping is harder to design than a pretty accident.",
            result: "loudness sets where the two colours meet, instability sets how softly they blend, warmth nudges the temperature. the same soundscape always resolves to the same artifact.",
            media: { type: "image", src: "/case/soundmap/recording.png", alt: "the artifact emerging while recording" },
            fit: "contain",
          },
          {
            n: "03",
            title: "hide the reading until it is asked for",
            why: "the resting artifact should stay calm.",
            tradeoff: "all the analysis the app computes is invisible by default.",
            result: "the acoustic reading, the mix and the two colours the sound chose, sits behind a quiet toggle. the calm is the point, not a missing feature.",
          },
          {
            n: "04",
            title: "keep it local by principle",
            why: "an archive of your own days should not live on someone else's server.",
            tradeoff: "no sync, no accounts, one device.",
            result: "the audio stays in the browser's own storage and is never uploaded. a shared link carries only the visual signature, not the sound.",
          },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/soundmap/home.png", alt: "the calendar archive of coloured day tiles" },
        fit: "contain",
        side: "right",
        title: "empty days read as days",
        text: "the archive is a real calendar, weekday header and all. the days you did not record are still there, so the gaps in the record are part of the record.",
      },
      { kind: "statement", text: "the same sound always makes the same colours. the artifact is a fingerprint, not a mood." },
      {
        kind: "outcome",
        paragraphs: [
          "soundmap is an installable pwa, built for one person on one device.",
          "the open question is whether a deterministic visual reads as personal enough to return to, or whether people would want to shape it themselves.",
        ],
      },
      { kind: "reflection", text: "i thought the interesting work was the mapping from audio to colour. the harder decision was restraint. the app can say a great deal about your sound, and most of the design was choosing to keep quiet about it, so the artifact stays something you feel rather than something you read." },
    ],
  },

  // ───────────────────────────────────────────────────── kochi water metro ──
  "kochi-water-metro": {
    slug: "kochi-water-metro",
    hero: {
      kicker: "pwa · independent project",
      title: "kochi water metro",
      subtitle:
        "an offline-first companion for a ferry ride: the route map, plus a bilingual story that surfaces as each place drifts past.",
      media: { type: "video", src: "/case/kochi/film.mp4", alt: "a full simulated ferry journey playing out on the map" },
      mediaFit: "contain",
      meta: [
        { label: "role", value: "design + build" },
        { label: "type", value: "independent project" },
        { label: "year", value: "2026" },
        { label: "status", value: "prototype" },
        { label: "stack", value: "vanilla js · service worker" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/kochi-water-metro" }],
    },
    sections: [
      { kind: "thesis", text: "a transit map tells you how to get there. i wanted to design the ride itself: what if the map stopped being a tool and became a companion you could put down and simply travel with?" },
      {
        kind: "context",
        paragraphs: [
          "kochi's water metro crosses backwaters most apps render as blank blue. i built an independent, non-commercial companion on top of the official public map: pick a boarding terminal and a destination, and a journey plays out on its own.",
          "the ferry animates along the real water channels, its status cycles from boarding to arrived, and photos and stories surface as each place passes. english and malayalam are treated as equals, not a toggle bolted on at the end.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi/map.svg", alt: "the kochi water metro route map" },
        fit: "contain",
        frame: true,
        caption: "the official water metro map, reused as the stage. the route geometry drawn over it is hand-traced so the ferry never crosses land.",
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "no buttons to press",
            why: "you are on a boat with a phone in your hand, not at a desk.",
            tradeoff: "you give up fine-grained control of the interface.",
            result: "you choose a journey, then put the phone down. the ferry drives and the interface reflects; the stories arrive on their own.",
            media: { type: "image", src: "/case/kochi/journey.gif", alt: "the ferry following the channel with an automatic transfer" },
            fit: "contain",
          },
          {
            n: "02",
            title: "work with no signal",
            why: "mid-river is exactly where a connection drops.",
            tradeoff: "everything, map, photos, fonts and narration, has to be cached up front.",
            result: "an offline-first install caches the whole experience, and a single missing file never breaks it. the malayalam font is bundled, so there are zero external requests.",
          },
          {
            n: "03",
            title: "bilingual as equals",
            why: "malayalam is the language of the place, not a translation of the english.",
            tradeoff: "every story, fact and label exists twice, and the narration doubles.",
            result: "parallel content in both languages, a real malayalam webfont, and a journey that re-localizes mid-ride without starting over.",
          },
        ],
      },
      {
        kind: "figures",
        media: [
          { type: "image", src: "/case/kochi/marine.jpg", alt: "marine drive waterfront" },
          { type: "image", src: "/case/kochi/spice.jpg", alt: "the spice quarter" },
          { type: "image", src: "/case/kochi/mangrove.jpg", alt: "the mangrove eco-zone" },
        ],
        columns: 3,
        caption: "the stories along the way: marine drive, the spice quarter, the mangrove eco-zone. photography is creative-commons, credited in the project.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "a working prototype and a demo film, built as an independent tribute on official public assets, with attribution. it is not affiliated with or endorsed by kochi water metro.",
          "the narration is partly recorded and partly falls back to a timed read-along; the story layer is the part i would extend next.",
        ],
      },
      { kind: "reflection", text: "the phrase in my head was location-aware. the honest version is that there is no gps at all, and the ride feels more present for it: a simulated journey you can trust to behave beats a real signal that stutters over open water. designing the feeling mattered more than sensing the position." },
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
