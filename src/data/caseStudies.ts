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
  // ────────────────────────────────────────────────────────────── wells fargo ──
  "wells-fargo": {
    slug: "wells-fargo",
    hero: {
      kicker: "product design · wells fargo",
      title: "wells fargo",
      subtitle:
        "three public-site migrations, each one deadline away from decommission or a compliance failure. moving legacy financial products onto a responsive, policy-compliant design system.",
      media: {
        type: "image",
        src: "/case/wells-fargo/hero.jpg",
        alt: "devices arranged as the wells fargo star on a warm gradient",
      },
      mediaFit: "cover",
      mediaPosition: "center",
      meta: [
        { label: "role", value: "product designer" },
        { label: "client", value: "wells fargo" },
        { label: "platform", value: "wf.com public site" },
        { label: "year", value: "2025" },
      ],
      links: [
        {
          label: "sustainability, live",
          href: "https://www.wellsfargo.com/about/responsibility-and-impact/sustainability/",
        },
      ],
    },
    sections: [
      { kind: "thesis", text: "three public-site products, three different kinds of trouble. one was scheduled for decommission over policy violations. one had never been made responsive. one existed only as a pdf. i worked on all three, and on every one of them the constraints were the same: policy, legal, a legacy cms, and what an nda lets me show." },
      {
        kind: "context",
        paragraphs: [
          "as a product designer on the public site, i co-led the migration of legacy financial experiences onto wells fargo's responsive design system, working across the line-of-business product team, legal, cms and engineering, us and india.",
          "the brief was the same each time. make it simpler, make it compliant, make it work on a phone, and do not break the business already running through it.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/wells-fargo/before-after.jpg", alt: "practice finance before and after: fragmented pages consolidated into one conversion page" },
        fit: "contain",
        frame: true,
        caption: "practice finance, at risk of removal for policy and mobile-usability failures, consolidated from six-plus fragmented pages into one conversion-focused, policy-compliant landing. (the redesigned screen is blurred under nda.)",
      },
      {
        kind: "constraints",
        label: "what could not move",
        items: [
          { label: "policy", text: "practice finance was set for decommission over policy violations. staying compliant came before anything i wanted to change about it." },
          { label: "legal", text: "every page went through legal review, which shaped the architecture long before it shaped a layout." },
          { label: "the existing site", text: "the plcc redesign had to fold into wf.com for tracking and seo rather than survive as a standalone microsite." },
          { label: "accessibility", text: "dense legacy charts and tables had to fit the design system across six breakpoints and pass enterprise wcag, on a speed-to-market deadline." },
          { label: "the nda", text: "the confidential screens stay behind it. what is shown here is structure and strategy." },
        ],
      },
      {
        kind: "decisions",
        label: "three migrations",
        items: [
          {
            n: "01",
            title: "rescue practice finance",
            why: "the practice-finance site was set for decommission by may 2026 over policy violations and poor mobile usability, taking digital loan origination for ~1,000 monthly visitors with it.",
            tradeoff: "anything i wanted to change for design reasons came after keeping it compliant and keeping it live.",
            result: "a six-plus-page architecture consolidated into one conversion-focused landing and one simplified contact flow, signed off as a policy-compliant experience.",
            media: { type: "image", src: "/case/wells-fargo/strategy.jpg", alt: "who practice finance serves and the experience it needs" },
            fit: "cover",
          },
          {
            n: "02",
            title: "simplify the plcc experience",
            why: "3.8m retail-services customers, 1m new a year, sat on a dated, non-responsive microsite that drove ~200k monthly visits and 120k service calls a month at $11.37 each.",
            tradeoff: "the redesign had to fold into wf.com for tracking and seo, not survive as a standalone microsite.",
            result: "a ux audit, competitor synthesis and ia rework cut nine pages to four, over 50% less structural complexity, with clear paths to the highest-frequency tasks and room to reduce those calls.",
            media: { type: "image", src: "/case/wells-fargo/board.jpg", alt: "the breadth of the redesign work, blurred under nda" },
            fit: "cover",
          },
          {
            n: "03",
            title: "digitize the sustainability report",
            why: "wells fargo's annual esg report was trapped in a static, inaccessible pdf, a version-control and compliance risk with a poor mobile experience.",
            tradeoff: "dense legacy charts and tables had to fit the design system across six breakpoints and pass enterprise wcag, on a speed-to-market deadline.",
            result: "a responsive, accessible web experience: 100% digital adoption, the legacy pdf deprecated so outdated compliance data can no longer circulate.",
            media: { type: "image", src: "/case/wells-fargo/esg.jpg", alt: "the live wells fargo sustainability web experience" },
            fit: "cover",
          },
        ],
      },
      { kind: "statement", text: "the person i kept coming back to was someone on a phone between appointments, looking for one number. that was the test i could actually apply to a page." },
      {
        kind: "outcome",
        paragraphs: [
          "all three are shipping to wf.com through 2026, practice finance by may, the plcc pages by august, the sustainability experience already live.",
          "the full designs stay behind a wells fargo nda; what's shown here is the structure and the strategy, not the confidential screens.",
        ],
      },
      { kind: "reflection", text: "most of the work that mattered happened before anything looked like a screen: cutting scope with the product team, getting legal and engineering to agree on what was possible. by the time i was moving things around a page, the difficult calls had already been made." },
    ],
  },

  // ─────────────────────────────────────────────────────────────── kochi1app ──
  kochi1app: {
    slug: "kochi1app",
    hero: {
      kicker: "service design + ux · kochi metro",
      title: "kochi1app",
      subtitle:
        "a service-design redesign of kochi's official transit app: plan a trip by intention, make the greener route the easy one, and design the transfers and the last mile the map leaves out.",
      media: {
        type: "image",
        src: "/case/kochi1app/hero.jpg",
        alt: "hands holding a phone over a metro concourse, route lines flowing outward",
      },
      mediaFit: "cover",
      mediaPosition: "center",
      meta: [
        { label: "role", value: "service design + ux" },
        { label: "client", value: "kochi metro" },
        { label: "type", value: "mobility app redesign" },
        { label: "year", value: "2024" },
      ],
      links: [
        {
          label: "service design report",
          href: "https://www.behance.net/gallery/212543637/Public-Transport-Systems-Service-Design",
        },
      ],
    },
    sections: [
      { kind: "thesis", text: "people could already find a route in kochi1app. what they could not find was what the trip would actually be like, whether the transfer was walkable, where the exit came out, how long they would be standing in the sun waiting for the connection. the redesign is mostly about that gap." },
      {
        kind: "context",
        paragraphs: [
          "kochi1app is the official app for kochi's metro and water metro. i ran an end-to-end service-design study across the city's multimodal transport, interviews with riders, station staff and management, personas, journey maps, service blueprints and a competitor teardown, to find where the app leaves people stranded rather than just where a screen looks dated.",
          "three things kept coming up. why someone was making the trip at all. how little the app did to make the greener route the attractive one. and how much of a journey happens outside the route itself, in the transfer, the walk, the auto at the other end.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/data.png", alt: "survey data on why people adopt public transport in kochi" },
        fit: "contain",
        frame: true,
        caption: "the case, in the city's own numbers: half of kochi's 2.6 million travellers already move on public transport, and the top unmet asks are direct services and better information (cppr mobility study).",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/personas.png", alt: "five rider personas and the study's recommendations" },
        fit: "contain",
        frame: true,
        caption: "five riders the app has to serve at once, a school student, a new call-centre commuter, a daily-wage worker, a last-mile auto driver, and a first-time visitor, and the recommendations the study prioritised.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/redesign.jpg", alt: "the redesigned kochi1app screens across its four themes" },
        fit: "contain",
        frame: true,
        caption: "the redesign in one board: intention-based planning, weather-aware transfers, green nudges, and an experience layer of landmarks you can add to a route.",
      },
      {
        kind: "pipeline",
        label: "planning by intention",
        steps: [
          { glyph: "input", label: "intention", text: "cultural, scenic, food, half a day, home by dinner." },
          { glyph: "map", label: "route", text: "the trip is built around that rather than only the fastest line." },
          { glyph: "converge", label: "transfer", text: "editable buffers, and weather-aware routing when the wait is in the sun." },
          { glyph: "cards", label: "last mile", text: "walk, cycle or auto, priced inline, plus the landmarks worth stopping at." },
        ],
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "plan by intention",
            why: "people don't only travel to an address. they travel to explore, to catch a scenic route, to be home before dark. the old app only understood destinations.",
            tradeoff: "the planner has to turn a fuzzy intent, ‘i want to explore the city’, into concrete routes.",
            result: "a dynamic intention layer: choose cultural, scenic, food, ‘half a day’ or ‘home by dinner’, and the trip is built around that, not only the fastest line.",
          },
          {
            n: "02",
            title: "make the greener choice the easy one",
            why: "a sustainability nudge only works if it costs the rider nothing to think about.",
            tradeoff: "reward mechanics turn gimmicky fast if they aren't tied to something real.",
            result: "a green card tracks carbon saved against a monthly target (‘energy equivalent to 3 trees’) and pays out small, real rewards, a free ride, an offer, for low-carbon routes.",
          },
          {
            n: "03",
            title: "design the transfer and the last mile",
            why: "the trip breaks where the app stops: the confusing exit, the missed connection, the walk nobody mapped.",
            tradeoff: "far more surface than a point-to-point route, buffers, alternatives, live context.",
            result: "editable transfer buffers, alternative modes (walk, cycle, auto) priced inline, and weather-aware routing, a shaded route when it's sunny, a place to wait out a downpour.",
          },
          {
            n: "04",
            title: "let the city be part of the trip",
            why: "a first-time visitor and a daily commuter want different things from the same line.",
            tradeoff: "surfacing places and stories without burying the core task of getting somewhere.",
            result: "landmarks, cultural stops and quieter paths you can add to a route, so a journey can be built around what is worth seeing rather than only how fast it is.",
          },
        ],
      },
      {
        kind: "outcome",
        paragraphs: [
          "the redesign was validated with usability testing across the personas. user satisfaction rose from below 50% to 70%, and to 90% after refinement cycles.",
          "it was delivered to kochi metro as a service-design study, personas, journey maps, service blueprints and policy plus design recommendations, not just a set of screens.",
        ],
      },
      { kind: "reflection", text: "i spent far more of this project in interviews and service blueprints than in a design file. the screens only got obvious once i could see the whole service around them: the station staff, the auto drivers waiting outside, the walk at the end that nobody had mapped." },
    ],
  },

  // ─────────────────────────────────────────────────────── airtribe learn ──
  "airtribe-learn": {
    slug: "airtribe-learn",
    hero: {
      kicker: "ai learning product · airtribe",
      title: "airtribe learn",
      subtitle:
        "a tutor that treats a lesson as something authored: it asks four questions, then writes you a structured, cited lesson with a concept map and a source library that build as you read.",
      media: {
        type: "image",
        src: "/case/airtribe-learn/landing.png",
        alt: "the airtribe learn landing screen: learn something you've been wondering about",
      },
      mediaFit: "cover",
      mediaPosition: "center",
      meta: [
        { label: "role", value: "product design" },
        { label: "type", value: "ai learning product" },
        { label: "year", value: "2026" },
        { label: "status", value: "demo" },
      ],
      links: [
        { label: "live demo", href: "https://willowy-blancmange-6a230b.netlify.app/" },
      ],
    },
    sections: [
      { kind: "thesis", text: "most ‘learn anything with ai’ products are a chat box with a better frame. you ask, it answers, and what you are left with afterwards is a transcript. kai writes you a lesson instead, tuned to four things it asks before it starts, and it shows where the facts came from." },
      {
        kind: "context",
        paragraphs: [
          "you give kai a topic and answer four quick questions, what you need it for, your background, what you already know, and how far to go. it writes a full lesson tuned to those answers, and opens by naming what you already know so it starts where you are, not at the beginning.",
          "the lesson is only the centre of it. a concept map draws what you are learning and how the ideas connect, a library holds the source behind every claim, and kai waits in the margin to unpack any phrase you highlight.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-learn/lesson.png", alt: "the three-pane workspace: kai chat, the lesson, and the lesson/map/library tabs" },
        fit: "cover",
        caption: "the workspace: kai on the left, the lesson in the centre, the map and library one tab away. the tip up top is the whole posture, highlight anything and ask.",
      },
      {
        kind: "pipeline",
        label: "how a lesson gets made",
        steps: [
          { glyph: "input", label: "topic", text: "you give kai something you have been wondering about." },
          { glyph: "cards", label: "intake", text: "four questions: purpose, background, prior knowledge, depth.", note: "/asked once, up front. personalising afterwards writes the lesson for no one" },
          { glyph: "layers", label: "lesson", text: "a hook, a worked example, the misconception, a quick check, a reflection." },
          { glyph: "graph", label: "map", text: "the concepts and their links, drawn as you read." },
          { glyph: "archive", label: "library", text: "the source behind each claim, marked cited and linked out." },
        ],
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "build it the way a teacher would",
            why: "a chat answers the question you asked and skips the shape around it. that is nearly the opposite of teaching.",
            tradeoff: "the output has to be planned before it is written, which is far more machinery than answering.",
            result: "every lesson is built the way a teacher builds one: a hook, a worked example, the misconception that keeps the idea fuzzy, a quick check, and a reflection to sit with. the hard idea gets a diagram, not another paragraph.",
            media: { type: "image", src: "/case/airtribe-learn/framework.png", alt: "a lesson diagram splitting the easy problems from the hard problem" },
            fit: "contain",
          },
          {
            n: "02",
            title: "ask four questions, then commit",
            why: "personalising after the fact, a ‘simplify this’ button, comes too late; the lesson is already written for no one.",
            tradeoff: "four questions is four screens before anyone has read a single word.",
            result: "purpose, background, prior knowledge and depth are set once, up front, and the whole lesson, its examples and how far each section pushes, is written to them.",
            media: { type: "image", src: "/case/airtribe-learn/intake.png", alt: "the four-question intake before a lesson is written" },
            fit: "cover",
          },
          {
            n: "03",
            title: "draw the topic while you read it",
            why: "a lesson you read and close leaves nothing you can hold onto.",
            tradeoff: "a second, structural view of the topic to build and keep in step with the lesson.",
            result: "the map draws the concepts and their links as you go, with a ‘worth keeping’ takeaway and room for your own notes, so the shape of the topic outlives the reading.",
            media: { type: "image", src: "/case/airtribe-learn/map.png", alt: "a concept map connecting the ideas in the lesson" },
            fit: "cover",
          },
          {
            n: "04",
            title: "cite sources, not vibes",
            why: "an ai that merely sounds confident is easy to build and easy to distrust.",
            tradeoff: "every claim has to trace to something real, in the lesson and in the library.",
            result: "key sentences are footnoted, and the library gathers the sources, kai's picks, browse-by-concept, and go-further, each marked cited and linked out.",
            media: { type: "image", src: "/case/airtribe-learn/library.png", alt: "the library of cited and further-reading sources" },
            fit: "cover",
          },
        ],
      },
      { kind: "statement", text: "kai opens a lesson by naming what you already know. it is one sentence, and it does more for trust than anything else in the product." },
      {
        kind: "outcome",
        paragraphs: [
          "airtribe learn is a demo: one seeded lesson, the hard problem of consciousness, runs the full system end to end. the intake accepts any topic; the lesson, map and library shown here are the worked example of what each one would become.",
        ],
      },
      { kind: "reflection", text: "every time i got stuck, the quickest fix was to let kai just answer. i kept not taking it. the parts worth designing were the slow ones. starting where the reader already is. naming the misconception before you name the fact. footnoting the claim." },
    ],
  },

  // ───────────────────────────────────────────── a century of villains ──
  // ──────────────────────────────────────────────────────── airtribe ai skills ──
  "airtribe-ai-skills": {
    slug: "airtribe-ai-skills",
    hero: {
      kicker: "ai systems · airtribe",
      title: "airtribe ai skills",
      subtitle:
        "two skills at airtribe. one is used by the team that writes what paid learners get, one by the learner. in both, the thing being designed is not a screen, it is how much room the author is allowed.",
      media: {
        type: "image",
        src: "/case/airtribe-ai-skills/components-hero.png",
        alt: "a quiz component in its answered state, correct option filled green, with its motion spec printed in the corner",
      },
      mediaFit: "cover",
      mediaPosition: "center",
      meta: [
        { label: "role", value: "TODO · your role across the two" },
        { label: "company", value: "airtribe" },
        { label: "surfaces", value: "pre-reads, cohort live and xavier's" },
        { label: "year", value: "2026" },
      ],
      links: [
        { label: "kai, live demo", href: "https://willowy-blancmange-6a230b.netlify.app/" },
        { label: "the full kai case", href: "/work/airtribe-learn/" },
      ],
    },
    sections: [
      { kind: "thesis", text: "a skill is a packaged set of instructions a model works inside. airtribe has two, and they are not versions of each other. one is used by the learning designers who write the material paid learners get. one is used by the learner. in both, the work is the same and it is not a screen: deciding what the author may change and what they may never touch." },
      {
        kind: "context",
        paragraphs: [
          "the two pull in opposite directions. inside, the author is a colleague building for a catalogue, so the risk is drift: fifty lessons that each look slightly like whoever wrote them. outside, the author is the model itself, writing for one reader who has no easy way to check it, so the risk is trust.",
          "which means the guardrail points the other way in each. the pre-read skill protects the product from its authors. kai protects the reader from the product.",
        ],
      },

      // ── 01 · internal ────────────────────────────────────────────────────
      {
        kind: "context",
        label: "01 · the internal skill · pre-reads",
        paragraphs: [
          "a pre-read is what a learner gets before a live session. the lxd team took up the problem that they were walls of text, and wanted them interactive enough to be worth opening.",
          "the catch is who writes them. pre-reads are authored by learning designers, not visual designers, and across a growing catalogue the output drifted: mismatched colours, off-brand type, components that behaved differently from one lesson to the next.",
        ],
      },
      {
        kind: "question",
        text: "how do you hand ten to fifteen people the freedom to build anything a lesson needs, and still have it come out looking like one product?",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-ai-skills/board.png", alt: "the research board: problem framing, an audit of shipped pre-reads, a reference scan and component exploration in light and dark" },
        fit: "contain",
        frame: true,
        caption: "the working board, roughly 20,000 by 22,000 px. the two obvious answers were both bad: templates are consistent and cap what a lesson can be, a rulebook is free and gets read once.",
      },
      {
        kind: "pipeline",
        label: "how the board got there",
        steps: [
          { glyph: "map", label: "frame", text: "what a pre-read is for, and where interactivity actually helps someone prepare." },
          { glyph: "scan", label: "audit", text: "shipped pre-reads pulled side by side, to find where consistency broke and how." },
          { glyph: "archive", label: "scan", text: "references and patterns for interactive learning content, light and dark." },
          { glyph: "converge", label: "synthesise", text: "every recurring piece clustered into reusable families.", note: "eight of them, which is what the catalogue needed rather than a round number" },
        ],
      },
      {
        kind: "statement",
        text: "don't choose between freedom and consistency. make the brand inherited by construction, so the only thing left to design is the teaching.",
      },
      {
        kind: "system",
        label: "eight families, not a component library",
        paragraphs: [
          "most of a real pre-read is not a shadcn primitive. it is dioramas, chat dialogues, tap-sort exercises, a gamification rail, a 3d rice space, code blocks, llm pipeline diagrams. a library could not have covered that, and whatever it failed to cover would have been the interesting part of the lesson.",
          "so the catalogue is not a set of components, it is eight behaviours with a visual treatment attached. anything that does not exist yet gets placed by what it does, prose, widget, data-figure, chrome or code, inherits that family's surfaces, and holds three constants: purple is the one accent, neutrals are cool, colour means state. a component invented tomorrow still comes out airtribe.",
        ],
        mapping: [
          { from: "01 reading & narrative", to: "prose on the ground, accent for emphasis, never a boxed paragraph" },
          { from: "02 characters & dialogue", to: "learner bubble purple-tinted, mentor neutral, always inside a panel" },
          { from: "03 assessment & interaction", to: "selected purple, correct green, wrong red, no confetti" },
          { from: "04 calculators & inputs", to: "purple is the value, semantics are the state, tabular numerals" },
          { from: "05 comparison & structured", to: "column tags, hairline separators, a middle dot for an empty cell" },
          { from: "06 data-viz & dioramas", to: "chart palette purple-led, real type inside the svg, dark surfaces never black" },
          { from: "07 app chrome & gamification", to: "purple progress on cool neutrals, calm rather than arcade" },
          { from: "08 technical, code & diagrams", to: "a defined code surface, mono for code, palette-restrained connectors" },
        ],
        colors: [
          { hex: "#683FBE", name: "purple, the one accent" },
          { hex: "#2563EB", name: "blue, info" },
          { hex: "#12875A", name: "green, correct" },
          { hex: "#DC2626", name: "red, wrong" },
          { hex: "#CA8A04", name: "yellow, warning" },
        ],
        type: [
          { name: "display", value: "plus jakarta sans" },
          { name: "body", value: "inter" },
          { name: "data", value: "jetbrains mono, real code only" },
        ],
        note: "permissive on purpose. radius is the author's choice as long as one pre-read is consistent with itself, and the skill says in as many words that it governs the visual layer only, never the structure, the components or the pedagogy.",
      },
      {
        kind: "annotated",
        label: "what a guardrail looks like up close",
        media: { type: "image", src: "/case/airtribe-ai-skills/components-states.png", alt: "a quiz answered correctly, a slider calculator and a counter allocator, each with its motion spec" },
        fit: "contain",
        frame: true,
        items: [
          { title: "one accent, one job", text: "the score, the slider fill and the chosen row are the same purple. correctness is green, over-budget is red, because colour is only ever allowed to mean state." },
          { title: "every state, or it isn't done", text: "hover, focus-visible, selected, correct, incorrect, disabled. a component with only a default state is unfinished, which is the rule that catches the ones built in a hurry." },
          { title: "the spec sits in the corner", text: "200ms, ease-out, colour transition. durations are written beside the component, so the next author does not have to guess what calm looks like." },
          { title: "replay, not confetti", text: "the reward for a right answer is the state change, plus a way to run it again." },
        ],
      },
      {
        kind: "turn",
        label: "the motion that got cut",
        tried: "the motion pass was written as two kinds. kind a is tied to an interaction. kind b was the decorative half: scroll-triggered fades on prose, confetti on a correct answer, looping ambient animation, bounce and elastic easings.",
        result: "kind b did not ship. it sits in the spec under the heading what we are not doing, as a list.",
        change: "feedback is the reward. animation now hangs off an interaction, eases out, and finishes inside 500ms, and reduced motion renders the whole thing instantly static. keeping the rejected list is the part that pays later: it is easier to hold a line when the argument against it is already written down.",
      },
      {
        kind: "constraints",
        label: "the guardrails, deliberately narrow",
        items: [
          { label: "one accent", text: "purple is the only brand colour. never indigo, never another purple." },
          { label: "cool neutrals", text: "cool grey on pure white. no cream, no warm greys." },
          { label: "two typefaces", text: "plus jakarta sans and inter, with mono kept for real code." },
          { label: "every state", text: "an interactive element defines all of its states or it is not finished." },
          { label: "what stays free", text: "structure, sections, which components a concept needs, and the pedagogy. the skill governs how a pre-read looks and nothing else, which is the line that makes authors trust it." },
        ],
      },
      {
        kind: "figures",
        media: [
          { type: "image", src: "/case/airtribe-ai-skills/lesson.png", alt: "a pre-read opening with its learning objectives and a tabbed comparison of three systems" },
          { type: "image", src: "/case/airtribe-ai-skills/exercise.png", alt: "a four-step trace exercise that fills in as the learner answers" },
        ],
        columns: 2,
        fit: "contain",
        caption: "built inside the guardrails, by learning designers: a lesson that opens on its objectives and compares three systems in one tabbed frame, and a four-step trace that fills itself in as you answer. neither is a component in a library. both were placed by behaviour and inherited the treatment.",
      },

      // ── 02 · consumer ────────────────────────────────────────────────────
      {
        kind: "context",
        label: "02 · the consumer skill · kai",
        paragraphs: [
          "most 'learn anything with ai' products are a chat box with a better frame. you ask, it answers, and what you are left with afterwards is a transcript.",
          "kai writes a lesson instead. you give it a topic and answer four quick questions, what you need it for, your background, what you already know, and how far to go, and it writes to those answers, opening by naming what you already know so it starts where you are. a concept map draws the ideas and their links as you read, a library holds the source behind every claim, and kai waits in the margin to unpack any phrase you highlight.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-learn/lesson.png", alt: "the three-pane workspace: kai chat, the lesson, and the lesson, map and library tabs" },
        fit: "cover",
        caption: "the workspace: kai on the left, the lesson in the centre, the map and library one tab away. the tip up top is the whole posture, highlight anything and ask.",
      },
      {
        kind: "pipeline",
        label: "how a lesson gets made",
        steps: [
          { glyph: "input", label: "topic", text: "you give kai something you have been wondering about." },
          { glyph: "cards", label: "intake", text: "four questions: purpose, background, prior knowledge, depth.", note: "asked once, up front. personalising afterwards writes the lesson for no one" },
          { glyph: "layers", label: "lesson", text: "a hook, a worked example, the misconception, a quick check, a reflection." },
          { glyph: "graph", label: "map", text: "the concepts and their links, drawn as you read." },
          { glyph: "archive", label: "library", text: "the source behind each claim, marked cited and linked out." },
        ],
      },
      {
        kind: "decisions",
        items: [
          {
            n: "01",
            title: "build it the way a teacher would",
            why: "a chat answers the question you asked and skips the shape around it. that is nearly the opposite of teaching.",
            tradeoff: "the output has to be planned before it is written, which is far more machinery than answering.",
            result: "every lesson is built the way a teacher builds one: a hook, a worked example, the misconception that keeps the idea fuzzy, a quick check, and a reflection to sit with. the hard idea gets a diagram, not another paragraph.",
            media: { type: "image", src: "/case/airtribe-learn/framework.png", alt: "a lesson diagram splitting the easy problems from the hard problem" },
            fit: "contain",
          },
          {
            n: "02",
            title: "ask four questions, then commit",
            why: "personalising after the fact, a simplify-this button, comes too late; the lesson is already written for no one.",
            tradeoff: "four questions is four screens before anyone has read a single word.",
            result: "purpose, background, prior knowledge and depth are set once, up front, and the whole lesson, its examples and how far each section pushes, is written to them.",
            media: { type: "image", src: "/case/airtribe-learn/intake.png", alt: "the four-question intake before a lesson is written" },
            fit: "cover",
          },
          {
            n: "03",
            title: "draw the topic while you read it",
            why: "a lesson you read and close leaves nothing you can hold onto.",
            tradeoff: "a second, structural view of the topic to build and keep in step with the lesson.",
            result: "the map draws the concepts and their links as you go, with a worth-keeping takeaway and room for your own notes, so the shape of the topic outlives the reading.",
            media: { type: "image", src: "/case/airtribe-learn/map.png", alt: "a concept map connecting the ideas in the lesson" },
            fit: "cover",
          },
          {
            n: "04",
            title: "cite sources, not vibes",
            why: "an ai that merely sounds confident is easy to build and easy to distrust.",
            tradeoff: "every claim has to trace to something real, in the lesson and in the library.",
            result: "key sentences are footnoted, and the library gathers the sources, kai's picks, browse-by-concept, and go-further, each marked cited and linked out.",
            media: { type: "image", src: "/case/airtribe-learn/library.png", alt: "the library of cited and further-reading sources" },
            fit: "cover",
          },
        ],
      },
      { kind: "statement", text: "kai opens a lesson by naming what you already know. it is one sentence, and it does more for trust than anything else in the product." },

      // ── close ────────────────────────────────────────────────────────────
      {
        kind: "statement",
        text: "both are defined by what they refuse. the pre-read skill refuses confetti. kai refuses to just answer. in a system that generates, the design decision worth having is almost always a subtraction.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "the pre-read skill carries the catalogue: around fifty pre-reads across fifty modules, five subtracks and three courses, reaching more than fifteen hundred learners, authored by ten to fifteen people without a visual designer in the loop. those are scope figures, what it covers, not outcome claims.",
          "what it did to the work is the next thing to measure, against a baseline rather than asserted early: adoption of the system over one-off styling, design-review rounds per pre-read before and after, brand-audit pass rate on a fixed checklist, and whether authors say they can ship on-brand without design support.",
          "kai is a demo. one seeded lesson, the hard problem of consciousness, runs the full system end to end, and the intake accepts any topic.",
        ],
      },
      {
        kind: "reflection",
        text: "TODO · one paragraph spanning both, in your voice. the strongest version names what is still wrong. a candidate, if it is true for you: writing rules for a person and writing rules for a model turned out to be the same job, except the model follows them exactly, which makes a lazy rule visible the first time it runs.",
      },
    ],
  },
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
        kind: "pipeline",
        label: "how the chart was built",
        steps: [
          { glyph: "grid", label: "sample", text: "495 films, hand-sampled across ten decades.", note: "/4 to 20 percent of a decade, leaning toward well-known titles" },
          { glyph: "cards", label: "tag", text: "each villain by archetype, and by whether the threat was personal or systemic." },
          { glyph: "layers", label: "weight", text: "column width is set by how many films a decade actually made, not by how many i sampled." },
          { glyph: "graph", label: "draw", text: "band height is each archetype's share of its decade.", note: "/thinly-sourced decades wear a ▲" },
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
          "it is a hand-built sample and the piece never pretends otherwise. the column widths, the ▲ and the copy under the chart all keep saying so.",
        ],
      },
      { kind: "reflection", text: "the column widths and that little ▲ took more of my attention than the colours did. a streamgraph is a persuasive shape, and left alone it will make a thinly-sampled decade look every bit as settled as a well-covered one. most of the design was arguing with the chart about that." },
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
      { kind: "thesis", text: "localization usually turns up after the layout is finished, as a developer's bug. lipi runs it while the frames are still editable, and points at the component rather than the screen it happened to break on." },
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
        kind: "turn",
        tried: "the first version only analysed text already sitting on the canvas.",
        result: "it found nothing. there is no break to detect until somebody has localized the screen by hand, which is the work you were trying to avoid in the first place.",
        change: "the plugin generates the translated screens itself, off to the side, and measures the growth. it has to cause the break before it can point at the cause.",
      },
      {
        kind: "pipeline",
        label: "four steps",
        steps: [
          { glyph: "scan", label: "select", text: "point it at the english frames you care about." },
          { glyph: "layers", label: "generate", text: "a clone is translated into hindi or tamil and re-measured.", note: "/never writes to your file" },
          { glyph: "cards", label: "preview", text: "the localized version lays over the original; reveal draws the measurements." },
          { glyph: "archive", label: "export", text: "the only permanent write in the whole tool." },
        ],
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
            title: "roll the failures up to their cause",
            why: "forty separate overflow warnings is noise a designer will ignore.",
            tradeoff: "grouping by cause is more work than listing every overflow.",
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
        title: "it measures, it does not guess",
        text: "every flag is geometry: the baseline bounds, the localized bounds, and the growth between them.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "a working prototype, not yet run inside the live figma runtime. hindi and tamil today; the script ranges are written so more indic languages are a small addition, not a rebuild.",
        ],
      },
      { kind: "reflection", text: "it has not run inside the live figma runtime yet, so the open question is whether the root-cause grouping holds up on a real design file, with its detached instances and its one-off frames. that is the part i would want a designer to break first." },
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
      { kind: "thesis", text: "i wanted curiosity to feel like operating an object. you tune it, you play it, and at the end you are holding something." },
      {
        kind: "context",
        paragraphs: [
          "you type a signal and tune it on a dial. the machine plays a chain of connected cards, each one picking up where the last left off, and at the end it prints a mixtape receipt you can collect into an archive.",
          "there is no backend and no language model behind it. the journeys are a hand-authored tree, which is the point: every branch leads somewhere genuinely different.",
        ],
      },
      {
        kind: "pipeline",
        label: "behind the experience",
        steps: [
          { glyph: "input", label: "question", text: "curiosity starts as one typed word.", note: "/numbers and non-words fall back to a random seed rather than an error" },
          { glyph: "graph", label: "space", text: "the word is placed among the things it connects to." },
          { glyph: "layers", label: "paths", text: "the routes worth taking are pulled out of the noise around it." },
          { glyph: "cards", label: "exploration", text: "three directions surface. you pick one.", note: "/all three have to belong to mutually exclusive genres, or the choice is not a choice" },
          { glyph: "converge", label: "synthesis", text: "choices compound. each card picks up where the last one left off.", note: "/one fact has to carry the jump, or the chain reads as random" },
          { glyph: "receipt", label: "receipt", text: "the path you took prints as a record." },
          { glyph: "archive", label: "archive", text: "saved, stored, and openable again later." },
        ],
        caption: "the notes in the margin are the rules that keep it usable. this is the system as designed; in the prototype the tree behind it is seeded by hand.",
      },
      {
        kind: "turn",
        label: "designed for curiosity",
        tried: "the early explorations maximised options. every stop offered as many directions as the tree could produce, on the assumption that more branches meant more freedom.",
        result: "decision paralysis. the extra choice made a journey feel less like yours, not more, because nothing you picked felt like it had cost anything.",
        change: "every step now offers exactly three directions, and a journey ends after five signal stops. the limit is what produces the feeling of having chosen, and it keeps the last card as interesting as the first.",
      },
      {
        kind: "annotated",
        label: "interaction design",
        media: { type: "image", src: "/case/deepcuts/splash.png", alt: "the deep cuts hardware console" },
        fit: "contain",
        frame: true,
        items: [
          { title: "the wheel navigates, always", text: "turn to scroll a selection, press to lock it. the same gesture does the same thing everywhere, so the thing reads as one device instead of a set of screens." },
          { title: "switches stay down", text: "a switch remains pressed after activation. an interaction becomes a state you can see rather than a tap that disappears." },
          { title: "shuffle is not a shortcut", text: "it hands the next choice to the machine. discovery over optimisation, and the only control that takes the decision away from you." },
          { title: "orange marks one action", text: "the single context action available at that moment. nothing else in the interface carries colour." },
          { title: "sound is synthesised, not sampled", text: "contacts are filtered noise so they read as material, and a tone is saved for the moment you collect. a softer detent means the machine turned the wheel, not your hand." },
        ],
      },
      {
        kind: "system",
        label: "system design",
        paragraphs: [
          "a consistent interaction language mattered more than any individual screen. every state follows the same hardware logic, so the interface holds together as one object.",
        ],
        mapping: [
          { from: "wheel", to: "navigate" },
          { from: "play", to: "progress" },
          { from: "orange", to: "context action" },
          { from: "shuffle", to: "autopilot" },
        ],
        colors: [
          { hex: "070808", name: "bg_main" },
          { hex: "18191A", name: "bg_elevated" },
          { hex: "54595B", name: "receipt_ghost" },
          { hex: "E7E5DF", name: "bg_hover" },
          { hex: "DE723B", name: "bg_selected" },
        ],
        type: [
          { name: "typeface", value: "geist / geist mono" },
          { name: "primary", value: "EBEBEB" },
          { name: "secondary", value: "838383" },
          { name: "metadata", value: "5E5E5E" },
        ],
        metrics: [
          { label: "screen", value: "512px" },
          { label: "header", value: "94px" },
          { label: "console", value: "276px" },
          { label: "switch", value: "82px" },
          { label: "wheel", value: "115px" },
          { label: "hub", value: "30px" },
        ],
        note: "everything resolves to an 8px grid.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/deepcuts/system.png", alt: "the deep cuts component library" },
        fit: "contain",
        frame: true,
        caption: "the component library: header, input, direction cards, device shell, content card, scanning state, and the receipt.",
      },
      {
        kind: "constraints",
        label: "edge cases",
        items: [
          { label: "bad input", text: "numbers and non-words fall back to a random seed instead of an error. offensive or flagged input is redirected to a broader safe category rather than refused." },
          { label: "the three doors", text: "all three surfaced suggestions have to sit in mutually exclusive genres. without that rule the machine offers you the same door three times." },
          { label: "runaway journeys", text: "synthesis is capped at five journey stops, so a session cannot wander past the point where any of it is still novel." },
          { label: "the archive", text: "empty, full, buffering and card overflow are designed states rather than conditions the interface falls into." },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/deepcuts/receipt-in-situ.png", alt: "the printed receipt held in the interface" },
        fit: "contain",
        side: "right",
        title: "the artifact",
        text: "your signal, the path taken, leaps and rarity, a timestamp. the scores are read off the real journey tree, so a receipt's numbers mean what they say and never change.",
      },
      { kind: "statement", text: "the autoplay film presses the same controls a hand presses. nothing on camera is mocked." },
      {
        kind: "outcome",
        paragraphs: [
          "deep cuts is a working prototype and a launch film cut entirely from the live product. it runs itself as an unattended loop for the camera.",
          "the content is a single seeded tree, enough to prove the interaction. a real version would put a live source of knowledge behind the same machine.",
        ],
      },
      { kind: "reflection", text: "almost all of the work here is in press travel, detents and synthesized clicks, and none of it survives a screenshot. that is why there is a film." },
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
      { kind: "thesis", text: "a photo of a moment is easy to keep. a recording of one is awkward to go back to. soundmap is an attempt at a sound you would actually return to, without it turning into a feed." },
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
        kind: "pipeline",
        label: "one day, one recording",
        steps: [
          { glyph: "wave", label: "record", text: "about thirty seconds, once a day.", note: "/the button spends itself after a single take and rests until tomorrow" },
          { glyph: "scan", label: "read", text: "loudness, instability and warmth are measured off the recording." },
          { glyph: "layers", label: "artifact", text: "those three readings resolve to a two-colour gradient.", note: "/the same soundscape always resolves to the same artifact" },
          { glyph: "grid", label: "calendar", text: "the day takes its place in the month, and the days you missed stay visible." },
        ],
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
            result: "the acoustic reading, the mix and the two colours the sound chose, sits behind a quiet toggle. it is there if you go looking for it.",
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
      { kind: "statement", text: "you cannot retake it. whatever you caught that day is the day." },
      {
        kind: "outcome",
        paragraphs: [
          "soundmap is an installable pwa, built for one person on one device.",
          "the open question is whether a deterministic visual reads as personal enough to return to, or whether people would want to shape it themselves.",
        ],
      },
      { kind: "reflection", text: "the app works out far more about a recording than it ever shows you. deciding how much to hide took longer than building the mapping did, and i am still not convinced the toggle is in the right place." },
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
      { kind: "thesis", text: "you do not really need navigation on a ferry. there is one route and someone else is steering. what you might want is something telling you what you are passing." },
      {
        kind: "context",
        paragraphs: [
          "kochi's water metro crosses backwaters most apps render as blank blue. i built an independent, non-commercial companion on top of the official public map: pick a boarding terminal and a destination, and a journey plays out on its own.",
          "the ferry animates along the real water channels, its status cycles from boarding to arrived, and photos and stories surface as each place passes. there is a full english version and a full malayalam one, narration included.",
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
        kind: "pipeline",
        label: "a journey, end to end",
        steps: [
          { glyph: "map", label: "choose", text: "a boarding terminal and a destination. then you put the phone down." },
          { glyph: "wave", label: "sail", text: "the ferry follows the real water channels; status cycles from boarding to arrived." },
          { glyph: "cards", label: "stories", text: "photos and stories surface as each place passes, in either language." },
          { glyph: "archive", label: "offline", text: "map, photos, fonts and narration are all cached up front.", note: "/zero external requests. the malayalam font is bundled" },
        ],
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
      { kind: "reflection", text: "i kept calling this location-aware. there is no gps in it at all. the journey is simulated, and over open water that behaves better than a real signal would, which is either a shortcut or the right answer depending on how generous you are feeling." },
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
