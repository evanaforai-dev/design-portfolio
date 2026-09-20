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
          label: "practice finance, live",
          href: "https://www.wellsfargo.com/biz/practice-finance-medical-dental-loans/",
        },
        {
          label: "the contact flow, live",
          href: "https://www.wellsfargo.com/biz/practice-finance-medical-dental-loans/contact-form/",
        },
        {
          label: "sustainability, live",
          href: "https://www.wellsfargo.com/about/responsibility-and-impact/sustainability/",
        },
      ],
    },
    sections: [
      { kind: "thesis", text: "three public-site products, three different kinds of trouble. one was scheduled for decommission over policy violations. one had never been made responsive. one existed only as a pdf. i worked on all three, and on every one of them the constraints were the same: policy, legal, a legacy cms, and a deadline. two of the three are live on wellsfargo.com, so you can check the result rather than take my word for it." },
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
        caption: "practice finance, at risk of removal for policy and mobile-usability failures, consolidated from six-plus fragmented pages into one conversion-focused, policy-compliant landing. the working file is blurred; the page it became is unblurred further down, because it shipped.",
      },
      {
        kind: "constraints",
        label: "what could not move",
        items: [
          { label: "policy", text: "practice finance was set for decommission over policy violations. staying compliant came before anything i wanted to change about it." },
          { label: "legal", text: "every page went through legal review, which shaped the architecture long before it shaped a layout." },
          { label: "the existing site", text: "the plcc redesign had to fold into wf.com for tracking and seo rather than survive as a standalone microsite." },
          { label: "accessibility", text: "dense legacy charts and tables had to fit the design system across six breakpoints and pass enterprise wcag, on a speed-to-market deadline." },
          { label: "the nda", text: "the internal work stays behind it: comps, research, the roadmap, anything unshipped. the pages that launched are public property of the open web, so those are shown here as they run today." },
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
      {
        kind: "context",
        label: "shipped, and public",
        paragraphs: [
          "everything below this line is a live wellsfargo.com page, captured september 2026. no redaction, because there is nothing left to redact: a page a bank publishes to the open internet is not confidential, whatever the comps behind it are.",
          "it is worth being precise about what this proves and what it does not. it proves the work survived policy, legal review, a legacy cms and enterprise accessibility, which is the part of this job that actually kills designs. it does not prove which pixels were mine. i co-led these migrations with a line-of-business product team across the us and india.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/wells-fargo/live/practice-finance-desktop.png", alt: "the live wells fargo practice finance landing page" },
        fit: "contain",
        frame: true,
        caption: "practice finance, live. the six-plus page architecture arrives as one page: a single financing promise, three reasons to trust it, two entry paths (buy or start, expand or relocate), four needs, and one repeated call to action. the decommission notice it was under is the reason it looks like this.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/wells-fargo/live/practice-finance-form-desktop.png", alt: "the live practice finance contact form" },
        fit: "contain",
        frame: true,
        caption: "the simplified contact flow, live. every field that could be optional is marked optional, borrowing needs are checkboxes rather than a call, and the submit stays disabled until the form can actually be sent. a dentist between appointments is the person this was drawn for.",
      },
      {
        kind: "figures",
        media: [
          { type: "image", src: "/case/wells-fargo/live/practice-finance-mobile.png", alt: "practice finance on a phone" },
          { type: "image", src: "/case/wells-fargo/live/practice-finance-form-mobile.png", alt: "the contact form on a phone" },
          { type: "image", src: "/case/wells-fargo/live/sustainability-mobile.png", alt: "the sustainability experience on a phone" },
        ],
        columns: 3,
        aspect: "phone",
        fit: "cover",
        caption: "the same three pages at phone width. poor mobile usability was one of the two findings that put practice finance on the decommission list, so this view is the deliverable, not a demonstration of it.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/wells-fargo/live/sustainability-desktop.png", alt: "the live wells fargo sustainability web experience" },
        fit: "contain",
        frame: true,
        caption: "sustainability, live: the report that used to be a pdf. the goals that were a table of figures are now a responsive card grid that reflows across six breakpoints, and the disclosure index and forward-looking statement, the two blocks legal cannot lose, sit in the reading column rather than an appendix.",
      },
      { kind: "statement", text: "the person i kept coming back to was someone on a phone between appointments, looking for one number. that was the test i could actually apply to a page." },
      {
        kind: "outcome",
        paragraphs: [
          "all three shipped to wf.com through 2026. practice finance and its contact flow are live and linked above, the sustainability experience replaced the pdf outright, and the plcc pages followed in august.",
          "the internal material stays behind a wells fargo nda, so the comps, the research and the roadmap are described here rather than shown. the live pages are public, and are shown as they run.",
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
    // The product's own surface: near-white, with airtribe purple as the
    // single accent.
    theme: { bg: "#F7F6FB", fg: "#16131F", hairline: "rgba(22,19,31,0.16)" },
    hero: {
      kicker: "clients · airtribe",
      title: "kai",
      subtitle:
        "an ai-first learning experience that turns curiosity into a structured, adaptive lesson.",
      media: { type: "image", src: "/case/airtribe-learn/landing.png", alt: "the kai landing surface" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "clients", value: "airtribe" },
        { label: "service", value: "product · ux/ui design" },
        { label: "date", value: "mar 2026" },
      ],
      links: [{ label: "airtribe ai skills", href: "/work/airtribe-ai-skills/" }],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "ai makes it incredibly easy to get an answer. but getting an answer is not the same as learning something.",
          "the project explores a question: what if ai could adapt to how someone learns, rather than simply respond to what they ask?",
          "kai is an ai-first learning experience built for the airtribe community. it turns intent into a structured learning journey, combining explanations, examples and practice.",
          "the aim was to move ai from an answer engine to something closer to an active learning environment: flexible enough to explore anything, but structured enough to finish something.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "creative direction, product strategy, ui/ux design", name: "evana sajan" },
          { role: "coding & development", name: "claude" },
          { role: "inspiration", name: "teach-skill" },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/airtribe-learn/launch/thesis.png", alt: "a kai lesson on the hard problem of consciousness, with its concept map" },
        overlay: {
          placement: "below",
          label: "what changed",
          columns: [
            { label: "30%+", text: "increase in completed learning journeys compared with open-ended ai exploration" },
            { label: "60%+", text: "of learners return to continue a topic or start another learning journey" },
            { label: "70%+", text: "of sessions include an active learning interaction such as practice, reflection or retrieval" },
            { label: "<5 min", text: "from choosing a topic to starting a structured learning journey" },
          ],
        },
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/airtribe-learn/framework.png", alt: "the learning framework behind a kai journey" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "most learning tools are built around a fixed curriculum, while most ai tools remove structure altogether. the opportunity lies somewhere between the two: enough structure to create momentum, enough flexibility to follow curiosity. kai is built on the belief that ai should make learning more adaptive without making it less intentional.",
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/airtribe-learn/landing.png", alt: "the kai landing surface" },
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/airtribe-learn/intake.png", alt: "the intake: what do you want to learn, and what do you already know" },
        overlay: {
          placement: "below",
          label: "behind the experience",
          // TODO · the framer page runs deep cuts' seven-stage journey here.
          // these five are kai's own loop.
          columns: [
            { label: "intake", text: "what do you want to learn? what do you already know?" },
            { label: "framework", text: "the answers shape a structure before a single lesson is written" },
            { label: "lesson", text: "explanation, example and practice, in one surface" },
            { label: "concept map", text: "what you have covered, and what it connects to" },
            { label: "library", text: "the papers, articles and books behind the subject" },
          ],
        },
      },
      {
        kind: "panel",
        label: "designed for intent",
        bg: "#16131F",
        fg: "#F7F6FB",
        emphasise: [1, 5],
        paragraphs: [
          "ai makes learning incredibly easy to start, but not necessarily easy to process. we focused on shifting the cognitive work from finding information to deciding what matters.",
          "we wanted kai to carry some of that weight. first: what do you want to learn? what do you already know?",
          "we brought those little acts of learning into the interface. highlight something and ask kai about it. leave a note in your own words. watch the concept map grow.",
          "the library leads you back to the papers, articles and books behind the subject: a way out of the ai's version of the world and into the real one.",
          "the aim wasn't to invent a new way to learn. it was to remember what learning already feels like, and rebuild it for ai.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/airtribe-learn/intake.png", alt: "the intake conversation" },
          { type: "image", src: "/case/airtribe-learn/framework.png", alt: "the framework the intake produces" },
        ],
        captions: [
          { label: "intake", text: "two questions before anything is generated. the answers are what make the journey yours rather than generic." },
          { label: "framework", text: "structure first, content second. the shape of the journey exists before a lesson is written." },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/airtribe-learn/lesson.png", alt: "a kai lesson" },
          { type: "image", src: "/case/airtribe-learn/map.png", alt: "the concept map" },
        ],
        captions: [
          { label: "the lesson", text: "explanation, example and practice in one surface. highlight anything and ask about it without leaving the page." },
          { label: "the concept map", text: "what you have covered, and what it connects to. it grows as you go rather than arriving finished." },
        ],
      },
      {
        kind: "panel",
        label: "a way out of the model",
        bg: "#16131F",
        fg: "#F7F6FB",
        emphasise: [0],
        paragraphs: [
          "the library leads you back to the papers, articles and books behind the subject.",
          "an ai-first product that never points outside itself is asking to be trusted more than it has earned.",
          "a way out of the ai's version of the world, and into the real one.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/airtribe-learn/library.png", alt: "the library of sources behind a subject" },
          { type: "image", src: "/case/airtribe-learn/launch/thesis.png", alt: "a lesson and its concept map side by side" },
        ],
        captions: [
          { label: "the library", text: "the papers, articles and books the subject actually rests on." },
          { label: "in use", text: "the hard problem of consciousness: the explanation, the note, and where the theories stand." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/airtribe-learn/map.png", alt: "the concept map, grown" },
      },
    ],
  },


  // ───────────────────────────────────────────── a century of villains ──
  // ────────────────────────────────────────────────────────────────── vision ──
  "vision": {
    slug: "vision",
    hero: {
      kicker: "internal tooling · airtribe",
      title: "vision",
      subtitle:
        "the whole company's payments ran through a google sheet. moving them into airtribe's internal sales and operations product, in three phases, without the sheet ever going dark.",
      media: {
        // TODO · replace with a scrubbed capture of the payments record,
        // repopulated from src/data/drafts/vision-synthetic-cast.csv.
        type: "image",
        src: "/case/vision/payments-table.svg",
        alt: "the payments record in vision",
      },
      mediaFit: "contain",
      meta: [
        { label: "role", value: "product designer" },
        { label: "team", value: "four: two product designers, one backend, one frontend" },
        { label: "product", value: "vision, internal sales and operations" },
        { label: "year", value: "2026" },
      ],
    },
    sections: [
      { kind: "thesis", text: "every enrolment, instalment and refund the company took was recorded in one google sheet, and finance, delivery and onboarding all read from it. the brief was to replace it. the harder fact was that nobody was unhappy with it: the sheet was fast, it was visible, and it had never once asked anyone for permission. a product that replaces a spreadsheet people like does not get to start from what it can do better. it has to start from what the spreadsheet was already doing right." },
      {
        kind: "context",
        paragraphs: [
          "vision is airtribe's internal operations dashboard. sales, post-sales, finance, learner delivery, support and people all run out of it, and none of it is learner-facing. payments sit at the seam: the sales team records what a learner paid and how, and everything downstream, enrolment, slack access, onboarding, invoicing, keys off that record.",
          "before this work, that record was a google sheet, and the money moving through it was the company's revenue. it was fast, everyone could see it, and it had no idea who was allowed to change what.",
        ],
      },
      {
        kind: "question",
        text: "what does a product have to do before someone gives up a spreadsheet they trust?",
      },
      {
        // TODO · replace with the real before artifact: the sales sheet,
        // scrubbed. it is the most valuable image on this page.
        kind: "full",
        media: { type: "image", src: "/case/vision/sheet-before.svg", alt: "the sales sheet, before" },
        fit: "contain",
        frame: true,
        caption: "the thing the product had to beat: colour-coded cells, conventions people invented for themselves, and columns nobody could delete because someone might still be reading them.",
      },
      {
        kind: "constraints",
        label: "what the decisions were based on",
        items: [
          { label: "primary research with the teams", text: "sessions with the sales and lxd people who lived in the sheet, before anything was designed. the column list came out of those conversations, not out of the schema." },
          { label: "clarity session data", text: "how people actually moved through the existing screens, rather than how they described it. this is what made the filter overflow visible as a problem before anyone complained about it." },
          { label: "algolia search data", text: "what people were actually searching for, which told us which fields were being used as filters by hand because no filter existed for them yet." },
          { label: "testing with the same people", text: "every phase went back to the teammates who would use it. the onboarding phase is where this changed the design most: columns that turned out to be unused were deleted, and several that were really a sequence of tasks became a checklist instead of a column." },
        ],
      },
      {
        kind: "decisions",
        label: "the decisions that shaped the screen",
        items: [
          {
            n: "01",
            title: "a table, by default, because that is the muscle they already had",
            why: "the sales team had spent years in a grid. arriving at a product that opened on cards or a form would have made every one of them slower on day one, and day one is when a replacement either earns trust or loses it.",
            tradeoff: "a table is the densest and least forgiving layout there is, and it commits you to solving density everywhere else: filters, views, permissions, overflow. the friendlier layouts would have deferred those problems rather than removed them.",
            result: "the switch cost nobody a re-learning period. the work moved into making the table hold more than a sheet could, rather than into teaching people a new shape.",
          },
          {
            n: "02",
            title: "views instead of one table, once three teams were in the same row",
            why: "phase 1 was a sales record. phase 2 widened it for lxd, so a payment started carrying slack access, dashboard access and an lxd comment. by phase 3 the onboarding sheet folded in too, and a single table was long enough that both teams were scrolling past two thirds of it to reach their own third.",
            tradeoff: "views split a shared surface, and a shared surface was half of why the sheet was trusted. so the views overlap deliberately rather than partitioning cleanly, and an all view stays available to anyone who wants the whole row.",
            result: "sales, lxd and all, with the columns inside each one governed by role and permission rather than by preference.",
          },
          {
            n: "03",
            title: "friction proportional to consequence",
            why: "not every cell is equally dangerous. a typo in a comment costs nothing; a change to a payment status moves money and triggers access downstream. a spreadsheet treats both identically, which is precisely the thing it gets wrong.",
            tradeoff: "every piece of friction is a slower edit for a person who knew exactly what they were doing, and there is no way to add it without occasionally annoying the expert.",
            result: "each column was sorted into directly editable, or behind an action button that names what is about to happen. change logs sit alongside, so a row can be asked who last touched it, which is the one thing the sheet could technically answer and nobody could actually read.",
          },
        ],
      },
      {
        kind: "pipeline",
        label: "three phases, in the order they shipped",
        steps: [
          { glyph: "grid", label: "phase 1 · the sales sheet", text: "the payments record, moved into vision as a table.", note: "sales first, because it is the team that creates the record rather than one of the teams that reads it" },
          { glyph: "layers", label: "phase 2 · widened for lxd", text: "a confirmed lead goes to lxd for final payment, slack access and dashboard access, so the record widened to carry them.", note: "this is why a payments row now holds an lxd comment and two access states: the sheet had already put them there" },
          { glyph: "converge", label: "phase 3 · the onboarding sheet", text: "onboarding folded in on the same pattern, and the combined table became too long to be one table.", note: "this is the phase that produced views, and the phase where testing deleted columns rather than adding them" },
        ],
        caption: "staged rather than migrated at once. the sheet was live money the whole time.",
      },
      {
        kind: "system",
        label: "what one payment record has to hold",
        paragraphs: [
          "a payment is not an amount. it is an amount, the instrument it arrived by, where that instrument currently is, and what each downstream team is allowed to do next. six payment types and eleven statuses, and the statuses are not a pipeline, they are the states a real payment gets stuck in.",
          "that is the density problem in one sentence. the screen has to show a row that spans sales, finance and delivery, to people who each only care about their own third of it.",
        ],
        mapping: [
          { from: "paid in one shot", to: "cleared, or still pending verification" },
          { from: "part payment", to: "part paid by airtribe, or awaiting the rest" },
          { from: "credit card, no cost emi", to: "will pay by credit card, then cleared" },
          { from: "credit card, cost emi", to: "same path, different maths" },
          { from: "loan, no cost emi", to: "pushed for loan, documents, approval, disbursement" },
          { from: "loan, cost emi", to: "or rejected, which is its own state and not a failure of the form" },
        ],
        metrics: [
          { label: "payment types", value: "6" },
          { label: "payment statuses", value: "11" },
          { label: "fields on the record", value: "~18" },
          { label: "teams reading the same row", value: "3" },
        ],
        note: "the record also carries slack access state, onboarding status, an lxd comment and dashboard access status. those are phase 2: other teams' columns, living inside a sales record, because that is where the sheet had put them.",
      },
      {
        // TODO · same capture as the hero, once a scrubbed one exists.
        kind: "annotated",
        label: "the decisions the screen had to make",
        media: { type: "image", src: "/case/vision/payments-table.svg", alt: "the payments record" },
        fit: "contain",
        frame: true,
        items: [
          { title: "constrain anything with a definitive answer", text: "every field with a finite set of correct answers became a dropdown rather than free text. this is what made filtering possible at all: you cannot filter a column that eleven people have spelled eleven ways, and the sheet had exactly that column several times over." },
          { title: "colour is for spotting, not reading", text: "the statuses that need to be found in a scan are the anomalies, a payment likely to refund, a lead marked confirmed but not paid, a loan rejected. those carry colour. the ordinary states do not, because if everything is coloured nothing is." },
          { title: "sync is a state, not a success message", text: "reconciling with the sheet resolves six ways: a row was created, the sheet was pulled in, it was already in sync, it was not found or not permitted, it failed, or it was ambiguous. ambiguous is the one that matters. a person at 6pm has to be told which record they are looking at and which one they are not." },
          { title: "a rejected loan is a state, not an error", text: "loan rejected, access removed, awaiting documents and waiting for disbursement are all ordinary places a payment sits. designing them as error states would have told the agent something had gone wrong with their work rather than with the payment." },
          { title: "the same learner, twice, on purpose", text: "a learner who re-enrols into another cohort is a second payment record, not a correction of the first, so duplicates by name are legitimate and cannot be merged away. the latest record carries a live badge. the older ones stay exactly where they are, readable, because the history of what someone paid for is the point of keeping it." },
          { title: "the same name leads two different places", text: "click a lead as a sales person and it opens the opportunities page. click the same lead as lxd and it opens the learner profile with the onboarding checklist. the row is shared; the thing you are trying to do with it is not." },
        ],
      },
      {
        kind: "turn",
        label: "the flaw we shipped",
        tried: "a name and an email are never read apart, so we stopped treating them as two columns. the name became the line, the email became a subline under it, one cell. it tested well with the sales team, it scanned well, and it gave back a column on a table that badly needed the room.",
        result: "it broke a workflow nobody had shown us. the people granting slack access do not read emails one at a time, they take the whole column at once. in the sheet that was a single drag and about five minutes for a cohort. as a subline living inside another column there was nothing to select, so the same job became copying addresses out by hand, one row at a time, and it took about fifty minutes. we had researched the team that writes the record and missed the team that consumes it a hundred rows at a time.",
        change: "the email came back out as a column of its own, and the rule came out with it: a column is not a field, it is a workflow. two things that are read together are not necessarily used together, and merging them is only free if nothing downstream ever operates on one of them alone. after this, every merge candidate got asked a second question. not is it read next to its neighbour, but is it ever selected, sorted, exported or copied by itself.",
      },
      {
        kind: "detail",
        side: "right",
        // TODO · replace with a capture of the redesigned filter bar, expanded.
        media: { type: "image", src: "/case/vision/filters.svg", alt: "the filter and search redesign" },
        fit: "contain",
        title: "filters, and a chicken and egg problem",
        text: "once sales and onboarding shared a table, the column list was long enough that the filters overflowed. the obvious fix, put them behind a menu, was the one thing we could not do: filtering is how anyone finds their own queue, and burying it behind two clicks would have made the product slower than the sheet at the exact task the sheet was worst at. but showing all of them was the overflow. the way out was to stop treating the filter set as fixed. a new user gets recommended filters; after that the bar shows what they last used, and the whole thing expands and collapses in place. an opportunity carries about twenty five fields across three lifecycle axes people constantly mistake for one, a status, a stage, and a separate lead status, so search gained include and exclude to keep a query from silently returning the wrong queue.",
      },
      {
        kind: "detail",
        side: "left",
        // TODO · replace with a capture of the template flow, manager view.
        media: { type: "image", src: "/case/vision/templates.svg", alt: "the email template flow" },
        fit: "contain",
        title: "email templates, for managers and agents",
        text: "the same product, a different muscle. templates are what the sales team sends from, and the design question is not the editor, it is the line between the two roles: what a manager can author and what an agent can only send. it shipped alongside a separate piece of work bucketing permissions by role, which is the same question asked at the level of the whole product.",
      },
      {
        kind: "statement",
        text: "a spreadsheet's real advantage is not that it is flexible. it is that nobody has ever had to ask it for permission.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "all three phases shipped into vision - sales: the payments record, the lxd extension and the onboarding sheet, alongside the email template flow, the course and cohort filter and the filters and search redesign.",
          "the sales team moved off the sheet without a re-learning period, which was the bar the table layout was chosen to clear. the onboarding phase ended with fewer columns than it started with. the one workflow the design did break, bulk-copying emails for slack access, went from five minutes to fifty before it was caught and undone.",
          "the screens are shown with synthetic records under an airtribe nda. every name, company, amount and date is invented; the structure is the real thing.",
        ],
      },
      // TODO · REFLECTION — in evana's voice. candidate, if true: the sheet is
      // still there. a product did not replace it, it learned to live next to
      // it, and the row index is the scar.
    ],
  },

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
        { label: "role", value: "product designer" },
        { label: "team", value: "four: two product designers, one backend, one frontend" },
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
          "the catch is who writes them. pre-reads are authored by learning designers, not visual designers, and across a growing catalogue the output drifted. the restyle checklist in the skill is the record of it, because it lists what has to be undone: indigo and violet standing in for the brand purple, warm linen neutrals and cream grounds, a serif hero face, stray teal and blue, warm-black text, and arial leaking into the svgs.",
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
        kind: "turn",
        label: "the tool we built and threw away",
        tried: "the lxd team arrived with a version of interactive pre-reads that had every possible interaction and every possible component in it. we broke that down into broad categories and shipped a basic version, and it was rejected: too simple, not good enough. so we went back and did the pedagogical work we had skipped, what actually makes a pre-read interactive for someone preparing, rather than what is technically possible to build. then we built a component maker, a framer-like tool for assembling the artifacts.",
        result: "the component maker made the workflow worse. the chain already ran designer, then program manager, then a copy-paste into the internal dashboard, and the maker added another station to it. it was longer than what it replaced and it had one more place for an error to enter.",
        change: "we scratched it and built the skill instead, comprehensive enough that the learning experience designer writes the whole lesson inside it and hands over a link. the rule that came out: when a tool sits between the person who understands the material and the thing the learner reads, the tool is the problem. put the making where the pedagogy already is.",
      },
      {
        kind: "statement",
        text: "don't choose between freedom and consistency. make the brand inherited by construction, so the only thing left to design is the teaching.",
      },
      {
        kind: "pipeline",
        label: "the workflow the skill actually changed",
        steps: [
          { glyph: "input", label: "the designer writes the lesson", text: "the learning experience designer designs the material and its teaching in one pass, inside the skill.", note: "before, they designed the material and handed it on to someone else to assemble" },
          { glyph: "receipt", label: "a link, not a document", text: "what comes out is an interactive lesson at a url.", note: "before, a program manager copy-pasted the material into the internal dashboard, which is where errors entered" },
          { glyph: "converge", label: "the manager embeds the link", text: "the program manager drops it into the learner dashboard. that is the whole handover.", note: "content quality now belongs to the person with the pedagogy, and uniformity belongs to the skill" },
        ],
        caption: "the old chain had a transcription step between the person who understood the lesson and the thing the learner read. removing that step is most of what this project did.",
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
          { title: "a written list of what we are not doing", text: "the motion pass came out as two kinds. kind a hangs off an interaction, eases out and finishes inside 500ms. kind b was the decorative half, scroll-triggered fades on prose, confetti on a correct answer, ambient loops, bounce and elastic easings, and it did not ship. it sits in the spec under the heading what we are not doing, as a list, because it is easier to hold a line when the argument against it is already written down." },
        ],
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
          "a feedback prompt closes each pre-read. sixty per cent of the learners who answered it called the format more positive and engaging, which is the one measured signal this work has. inline quizzes sit through the lesson rather than at the end, so a learner checks their own understanding while they are still in it.",
          "the artifacts are also cheaper to keep. because each one is placed by behaviour rather than built one-off, a lesson can be updated by dropping artifacts in and recombining them instead of remaking them.",
          "what the system did to the work is still the next thing to measure, against a baseline rather than asserted early: adoption of the system over one-off styling, design-review rounds per pre-read before and after, brand-audit pass rate on a fixed checklist, and whether authors say they can ship on-brand without design support.",
          "kai is a demo. one seeded lesson, the hard problem of consciousness, runs the full system end to end, and the intake accepts any topic.",
        ],
      },
      // TODO · REFLECTION — in evana's voice, one paragraph spanning both.
      // candidate, if it is true: writing rules for a person and writing rules
      // for a model turned out to be the same job, except the model follows
      // them exactly, which makes a lazy rule visible the first time it runs.
    ],
  },
  "a-century-of-villains": {
    slug: "a-century-of-villains",
    // The piece runs on near-black; the page runs on it too.
    theme: { bg: "#050507", fg: "#EDEDED", hairline: "rgba(237,237,237,0.18)" },
    hero: {
      kicker: "data visualization · self-initiated",
      title: "a century of villains",
      subtitle:
        "an interactive streamgraph tracing how the hindi-cinema villain changed shape across ninety years.",
      media: { type: "image", src: "/case/villains/launch/piece-wide.png", alt: "the streamgraph of villain archetypes from the 1930s to the 2020s" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "clients", value: "self-initiated" },
        { label: "service", value: "data storytelling · build" },
        { label: "date", value: "2026" },
      ],
      links: [
        { label: "live piece", href: "https://villain2.vercel.app" },
        { label: "code", href: "https://github.com/evanaforai-dev/a-century-of-villains" },
      ],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "the bollywood villain is usually argued about one film at a time. i wanted the long view: not who the villains were, but what kind of threat each decade cast as the enemy.",
          "so i hand-sampled 495 films across ten decades and tagged each villain by archetype, and by whether the threat was personal or systemic.",
          "column width is how many films a decade actually made, band height is each archetype's share, and thinly-sourced decades wear a triangle.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "research, sampling, tagging, design, build", name: "evana sajan" },
          { role: "stack", name: "react · typescript · d3" },
          { role: "sample", name: "495 films, ten decades" },
          { role: "status", name: "live" },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/villains/launch/piece-mobile.png", alt: "the piece at phone width" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "a villain is a mirror. i wanted to see what ninety years of hindi cinema had been afraid of, and whether the fear had a shape.",
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/villains/launch/band-bleed.png", alt: "the streamgraph band, warm to cool across the century" },
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/villains/launch/piece-wide.png", alt: "the full piece, decades and archetypes" },
        overlay: {
          placement: "below",
          label: "how the chart was built",
          columns: [
            { label: "sample", text: "495 films, hand-sampled across ten decades", note: "/4 to 20 percent of a decade, leaning toward well-known titles" },
            { label: "tag", text: "each villain by archetype, and by whether the threat was personal or systemic" },
            { label: "weight", text: "column width is set by how many films a decade actually made, not by how many i sampled" },
            { label: "draw", text: "band height is each archetype's share of its decade", note: "/thinly-sourced decades wear a warning glyph" },
          ],
        },
      },
      {
        kind: "panel",
        label: "encode the doubt into the chart",
        emphasise: [0],
        paragraphs: [
          "the sample covers only 4 to 20 percent of films in a given decade, and leans toward well-known titles.",
          "a thinly-sourced decade cannot be allowed to look as certain as a well-covered one.",
          "so column width is tied to how many films a decade actually made, sparse decades wear a warning glyph, and the copy keeps repeating that this is the shape of a trend, not a count.",
          "a streamgraph is a persuasive shape, and left alone it will make a thin decade look settled. most of the design was arguing with the chart about that.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/villains/streamgraph.svg", alt: "the archetype view" },
          { type: "image", src: "/case/villains/personal-system.svg", alt: "personal versus systemic villains across the decades" },
        ],
        captions: [
          { label: "thirteen archetypes", text: "gangster, terrorist, family opponent, jealous lover, zamindar, politician, corporate, corrupt police, colonial oppressor, supernatural, patriarchy, system, religious extremist." },
          { label: "personal versus systemic", text: "personal villains in red, systemic ones in blue. for the first time, the 2020s tip systemic." },
        ],
      },
      {
        kind: "panel",
        label: "let colour carry the argument",
        emphasise: [0],
        paragraphs: [
          "the whole thesis is a drift from intimate evil to systemic evil.",
          "warm reds and ambers for personal crimes, cool blues and teals for systemic ones, so the palette itself moves warm to cool as the century turns.",
          "thirteen archetypes is a lot of hues to keep legible on black. that constraint set the palette, not the other way round.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/villains/launch/legend.png", alt: "the archetype legend" },
          { type: "image", src: "/case/villains/launch/piece-full.png", alt: "the piece end to end" },
        ],
        captions: [
          { label: "tap colour to isolate", text: "the legend is the control. one archetype at a time, across the whole century." },
          { label: "the piece, end to end", text: "ninety years, ten decade columns, and the sampling caveat kept in view under the chart." },
        ],
      },
      {
        kind: "panel",
        label: "give every decade two voices",
        emphasise: [0],
        paragraphs: [
          "a chart states a fact; it rarely makes you feel one.",
          "each decade pairs a clipped analytical line with a first-person literary one, so you get the number and the mood in the same hover.",
          "twice the copy to write, and twice the copy to keep honest.",
          "the enemy stops being a man and becomes a nation, a policy, a system.",
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/villains/launch/band-bleed.png", alt: "warm to cool, 1930s to 2020s" },
      },
    ],
  },


  // ──────────────────────────────────────────────────────────────── lipi ──
  lipi: {
    slug: "lipi",
    // The plugin's own ground, sampled off its panel.
    theme: { bg: "#10131A", fg: "#E8EAEE", hairline: "rgba(232,234,238,0.16)" },
    hero: {
      kicker: "clients · self initiated",
      title: "lipi",
      // TODO · the framer page carries kai's subtitle in this slot. this is
      // lipi's own line, from the case study it replaced.
      subtitle:
        "a figma plugin that pressure-tests a screen against localized copy, then points at the component causing the break.",
      media: { type: "video", src: "/case/lipi/film.mp4", alt: "lipi generating a localized screen and finding the layout break" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "clients", value: "self initiated" },
        { label: "service", value: "product · ux/ui design" },
        { label: "date", value: "apr 2026" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/lipi" }],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "interfaces are usually designed in one language and adapted to many others later. but languages don't simply replace words, they change the geometry of a layout.",
          "the project explores a question: what if localization could be treated as a design-system stress test rather than a translation task?",
          "lipi is a figma plugin that pressure-tests interfaces across indian languages. it translates screens, measures how language changes their geometry, and points at the component behind the break.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "creative direction, product strategy", name: "evana sajan" },
          { role: "ui & ux design", name: "evana sajan" },
          { role: "coding & development", name: "claude, chatgpt" },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/lipi/launch/thesis.png", alt: "a hindi checkout screen with a text-overflow flag on the primary button" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "ai has made translating products into new languages almost trivial. designing interfaces that survive those translations isn't. as more of india's next billion users come online in their preferred languages, localization is shifting from an edge case to a core product requirement.",
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/lipi/launch/languages-bleed.png", alt: "one checkout, five scripts, side by side" },
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/lipi/launch/system-board.png", alt: "the lipi component library" },
        overlay: {
          placement: "below",
          label: "behind the experience",
          // TODO · the framer page runs deep cuts' seven-stage journey here
          // (question, ai brain, paths, exploration, synthesis, receipt,
          // archive). these four are lipi's real loop, from its own pipeline.
          columns: [
            { label: "select", text: "point it at the english frames you care about" },
            { label: "generate", text: "a clone is translated and re-measured", note: "/never writes to your file" },
            { label: "preview", text: "the localized version lays over the original; reveal draws the measurements" },
            { label: "export", text: "the only permanent write in the whole tool" },
          ],
        },
      },
      {
        kind: "panel",
        label: "designed for systemic fixes",
        emphasise: [1, 4],
        paragraphs: [
          "localization testing is usually treated as a screen-by-screen qa task.",
          "we designed lipi to find the decision behind the failure.",
          "a translated button overflowing on six screens isn't six problems. it's one component problem. lipi connects individual failures back to their shared cause.",
          "don't just find what broke. find what caused it.",
          "the goal wasn't to help designers fix more localization issues. it was to help them fix fewer things that solve more problems.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/lipi/launch/four-scripts.png", alt: "four language tabs over the same checkout" },
          { type: "image", src: "/case/lipi/launch/reveal-panel.png", alt: "the reveal panel naming the exact layer" },
        ],
        captions: [
          { label: "one design · multiple scripts", text: "lipi scans the same checkout across hindi, tamil, bengali and kannada in one pass: four language tabs, six screens each, eleven findings, and it flags each script's clipped cta on the canvas." },
          { label: "preview · reveal · compare", text: "english fits, hindi overflows. lipi reveals the pressure in context, and its reveal panel names the exact layer and the recommended fix." },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/lipi/launch/fix-recheck.png", alt: "before and after a re-check" },
          { type: "image", src: "/case/lipi/launch/root-cause.png", alt: "the design system tab collapsing failures into root causes" },
        ],
        captions: [
          { label: "fix · re-check", text: "you apply the fix (the button hugs its label); lipi re-checks the same screens and confirms. lipi doesn't auto-decide: the designer applies, lipi verifies." },
          { label: "screen → component → system", text: "three separate screen-level failures collapse into one root cause. lipi's design system tab: one decision, many resolutions." },
        ],
      },
      {
        kind: "panel",
        label: "interaction design",
        emphasise: [0, 6],
        paragraphs: [
          "lipi is a lens.",
          "recognition over reading. the canvas is the narrator; the panel stays quiet.",
          "two lenses, never merged. per-screen triage (fix now) and systemic root cause (fix once) are different jobs.",
          "preview by default. see it localized on the canvas immediately. problems should feel real, not tabular.",
          "one accent, calm colour. no dashboard, no ai theatre. credibility over impressiveness.",
          "optimize for clearing issues, not counting them. the whole loop is built to reduce the number, not admire it.",
          "the tool does the checking and the bookkeeping. the designer decides what should change.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/lipi/launch/preview-toggle.gif", alt: "preview turning on and off, restoring the original each time" },
          { type: "image", src: "/case/lipi/launch/system-tab.gif", alt: "the design system tab in motion" },
        ],
        captions: [
          { label: "never touch the original", text: "preview lays a hidden clone over the original; reveal draws locked overlays and drops you back on the editable layer." },
          { label: "roll the failures up", text: "fix the button once and watch the count fall across every screen it appears in." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/lipi/system.png", alt: "the results view grouped by the component behind the failures" },
        overlay: {
          placement: "below",
          label: "system design",
          // TODO · the framer page runs deep cuts' hardware mapping here
          // (wheel, play, orange, shuffle). these lines are lipi's own.
          paragraphs: [
            "every flag is geometry: the baseline bounds, the localized bounds, and the growth between them. the interface never shows a severity score it cannot justify.",
          ],
          lines: [
            "select → the frames you care about",
            "generate → clone, translate, re-measure",
            "preview → localized over original",
            "reveal → the exact layer, and the fix",
            "export → the only permanent write",
            "languages · hindi and tamil today, the script ranges written for more",
          ],
        },
      },
      {
        kind: "panel",
        label: "edge cases",
        emphasise: [0, 4],
        paragraphs: [
          "the final phase focused on making localization testing resilient to the messy parts of real design systems.",
          "no frames selected / missing translation api key / external-library components / unsupported fonts / empty results / multiple languages / preview toggled mid-run.",
          "multi-language tests are treated as separate lenses over the same system. designers can switch between language reports without losing the shared findings.",
          "at the end of the loop, re-check compares the fixed state against the original findings, showing what disappeared, what remains, and how the issue count moved.",
          "the edge case isn't an exception to the workflow. it is part of the workflow.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/lipi/results.png", alt: "the results view" },
          { type: "image", src: "/case/lipi/reveal.png", alt: "reveal mode drawing measurement overlays on the canvas" },
        ],
        captions: [
          { label: "results", text: "issues aggregate into root causes, so the count falls by component rather than by screen." },
          { label: "reveal", text: "locked overlays on the canvas, and the editable layer still underneath." },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/lipi/before-after.png", alt: "a fixed-width cta before and after it learns to hug its label" },
          { type: "image", src: "/case/lipi/product.png", alt: "lipi running in a dark figma workspace" },
        ],
        captions: [
          { label: "before · after", text: "one component learns to hug its label, and six screens stop breaking." },
          { label: "in place", text: "the plugin sits in the file you are already working in." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/lipi/launch/languages-bleed.png", alt: "one design, many scripts" },
      },
    ],
  },


  // ─────────────────────────────────────────────────────────── deep cuts ──
  "deep-cuts": {
    slug: "deep-cuts",
    // The device's own palette. The page wears the product.
    theme: { bg: "#070808", fg: "#EBEBEB", hairline: "rgba(235,235,235,0.16)" },
    hero: {
      kicker: "clients · experimentation",
      title: "deep cuts",
      subtitle:
        "a curiosity machine that turns exploration into collectible artifacts.",
      media: {
        type: "video",
        src: "/case/deepcuts/film.mp4",
        poster: "/case/deepcuts/launch/poster.png",
        alt: "the deep cuts console running a full journey and printing a receipt",
      },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "clients", value: "experimentation" },
        { label: "service", value: "ux/ui design · product" },
        { label: "date", value: "jun 2026" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/deepcuts" }],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "we have unlimited access to information, but very few ways to preserve the paths that lead us through it. most ai tools optimize for answers.",
          "the project explores a question: what if ai wasn't designed to deliver answers, but to help people author memorable journeys through knowledge?",
          "deepcuts is an ai-powered curiosity machine that turns exploration into a collectible artifact. rather than optimizing for answers, it invites users to navigate a series of ai-generated connections, actively curating their own path through knowledge. each completed journey is preserved as a receipt and archived as a permanent record of curiosity, a mixtape for the mind.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "creative direction, strategy, systems architecture, ui/ux", name: "evana sajan" },
          { role: "eng development", name: "claude, openai" },
          { role: "design inspiration", name: "teenage eng." },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/deepcuts/launch/thesis.png", alt: "the deep cuts mixtape receipt" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        // TODO · the live framer page carries hibiki's thesis copy here, not
        // deep cuts'. Left blank rather than moved across: the maps/sounds
        // argument belongs to a different product.
        text: "TODO · write the deep cuts product thesis. the copy currently in this slot on the framer page is hibiki's.",
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/deepcuts/launch/devices-bleed.png", alt: "the five console states lit on a dark field" },
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/deepcuts/launch/behind.png", alt: "the seven stages of a deep cuts journey" },
        overlay: {
          label: "behind the experience",
          anchor: "bottom",
          columns: [
            { label: "question", text: "curiosity begins with a single word", note: "/all numbers, non words become \u201crandom\u201d /all offensive words, larger umbrella word" },
            { label: "ai brain", text: "understands / maps space of knowledge" },
            { label: "paths", text: "ai finds signals in noise" },
            { label: "exploration", text: "ai surfaces, you decide", note: "/all suggestions will belong to unique genres" },
            { label: "synthesis", text: "choices compound, meaning formed", note: "/one fact that connects the jump" },
            { label: "receipt", text: "journey record" },
            { label: "archive", text: "saved, stored, recovered" },
          ],
        },
      },
      {
        kind: "panel",
        label: "designed for curiosity",
        emphasise: [2],
        paragraphs: [
          "early explorations maximized options. the result was decision paralysis.",
          "limiting every step to three possible directions created a stronger sense of authorship while keeping exploration open-ended.",
          "ending the journey at five signal stops is a design decision to limit user from cognitive fatigue and preserve novelty.",
          "most exploration tools end with an answer. deepcuts ends with an artifact, a mixtape-style receipt stored in a personal archive. make curiosity feel collectible.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/deepcuts/launch/tune.png", alt: "tune a signal" },
          { type: "image", src: "/case/deepcuts/launch/directions.png", alt: "choose a direction" },
        ],
        // TODO · the framer page carries lipi's captions under these two.
        captions: [
          { label: "TODO", text: "caption this pair. the framer page has lipi's localization copy in this slot." },
          { label: "TODO", text: "caption this pair. the framer page has lipi's preview/reveal copy in this slot." },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/deepcuts/launch/receipt.png", alt: "the printed mixtape receipt" },
          { type: "image", src: "/case/deepcuts/launch/archive-spines.png", alt: "the archive, journeys stored as spines" },
        ],
        // TODO · as above.
        captions: [
          { label: "TODO", text: "caption this pair. the framer page has lipi's fix/re-check copy in this slot." },
          { label: "TODO", text: "caption this pair. the framer page has lipi's screen/component/system copy in this slot." },
        ],
      },
      {
        kind: "panel",
        label: "interaction design",
        emphasise: [0],
        paragraphs: [
          "deepcuts is an instrument.",
          "inspired by the hardware era of computing, the interface is designed as a constraint against the speed and complexity common in ai products.",
          "embracing constraints, focused controls, and deliberate interaction, it reveals a small set of meaningful choices at a time.",
          "the goal is not to maximize exploration, but to make exploration intentional.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/deepcuts/launch/wheel.png", alt: "the scroll wheel" },
          { type: "image", src: "/case/deepcuts/launch/console.png", alt: "the console face" },
        ],
        captions: [
          {
            label: "shuffle · discovery over optimization / play · deliberate pace / save · discoveries are collected, not consumed",
            text: "decisions stay visible. switches remain pressed after activation, transforming interactions from momentary taps into persistent states.",
          },
          {
            label: "intentional interaction",
            text: "discovery begins with a conscious action rather than an endless feed. directed exploration: ideas unfold as a sequence, not a graph.",
          },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/deepcuts/launch/system-board.png", alt: "the deep cuts system board: components, states and tokens" },
        overlay: {
          label: "system design",
          paragraphs: [
            "a consistent interaction language was critical. every state follows the same hardware logic, allowing the interface to feel like a single device rather than a collection of screens.",
          ],
          lines: [
            "wheel → navigate",
            "play → progress",
            "orange → context action",
            "shuffle → autopilot",
            "8px system",
            "typography · geist / geist mono",
          ],
        },
      },
      {
        kind: "panel",
        label: "edge cases",
        emphasise: [0],
        paragraphs: [
          "the final phase focused on resilience.",
          "empty archive / full archive / buffering states / card overflow handling.",
          "handling bad inputs: non-word or numerical input falls back to random seed generation; offensive or flagged input redirects to a broader safe-category umbrella.",
          "controlling the ai brain: all three surfaced suggestions belong to mutually exclusive genre tags. data synthesis is capped at five journey steps.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/deepcuts/launch/archive-empty.png", alt: "the empty archive" },
          { type: "image", src: "/case/deepcuts/launch/archive-full.png", alt: "the full archive, segregated by month" },
        ],
        captions: [
          { label: "empty archive", text: "zero signal count" },
          { label: "full archive", text: "archive segregated by months" },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/deepcuts/launch/signal-lost.png", alt: "signal lost, with retry and start over" },
          { type: "image", src: "/case/deepcuts/launch/buffering.png", alt: "a journey resuming from its last step" },
        ],
        captions: [
          { label: "buffering states", text: "imitating radio signaling, progressive" },
          { label: "unable to collect ai information", text: "journey intact. start from last step or last journey." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/deepcuts/launch/merging-bleed.png", alt: "coffeehouses plus salon culture, merging signals" },
      },
    ],
  },


  // ──────────────────────────────────────────────────────────── soundmap ──
  soundmap: {
    slug: "soundmap",
    // Warm paper, read off the artifact itself.
    theme: { bg: "#EFEDE5", fg: "#1A1917", hairline: "rgba(26,25,23,0.18)" },
    hero: {
      kicker: "personal product · pwa",
      title: "soundmap",
      subtitle:
        "a daily sound journal. record one moment; it becomes a coloured artifact on a calendar.",
      media: { type: "video", src: "/case/soundmap/film.mp4", alt: "browsing the soundmap calendar and opening a day's artifact" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "clients", value: "self-initiated" },
        { label: "service", value: "product design · build" },
        { label: "date", value: "2026" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/soundmap" }],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "once a day you record about thirty seconds. the app listens, reads the sound, and renders it as a two-colour gradient drawn from the muted palette of traditional japanese hues.",
          "that artifact takes its place on a month calendar. tapping a day replays the audio while the gradient re-reveals in step with it.",
          "the colours are not decoration. they are read from the recording, and the same soundscape always resolves to the same artifact.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "design, build, sound analysis", name: "evana sajan" },
          { role: "stack", name: "react · web audio · indexeddb" },
          { role: "status", name: "installable pwa" },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/soundmap/launch/artifact.png", alt: "one day's finished artifact with its metadata" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "a photo of a moment is easy to keep. a recording of one is awkward to go back to. soundmap is an attempt at a sound you would actually return to, without it turning into a feed.",
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/soundmap/launch/gradient-bleed.png", alt: "one recording resolving into its gradient, four moments apart" },
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/soundmap/launch/archive-bleed.png", alt: "the calendar, a recording and the finished day" },
        overlay: {
          placement: "below",
          label: "one day, one recording",
          columns: [
            { label: "record", text: "about thirty seconds, once a day", note: "/the button spends itself after a single take and rests until tomorrow" },
            { label: "read", text: "loudness, instability and warmth are measured off the recording" },
            { label: "artifact", text: "those three readings resolve to a two-colour gradient", note: "/the same soundscape always resolves to the same artifact" },
            { label: "calendar", text: "the day takes its place in the month, and the days you missed stay visible" },
          ],
        },
      },
      {
        kind: "panel",
        label: "one recording a day",
        bg: "#1A1917",
        fg: "#EFEDE5",
        emphasise: [1],
        paragraphs: [
          "a feed of your own moments is not a keepsake, it is a chore.",
          "the record button spends itself after a single take and rests until tomorrow.",
          "you can miss a day, and you cannot hoard. the scarcity is what makes the moment worth choosing.",
          "you cannot retake it. whatever you caught that day is the day.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/soundmap/launch/calendar.png", alt: "the month archive of coloured day tiles" },
          { type: "image", src: "/case/soundmap/launch/artifact-early.png", alt: "an artifact resolving as the recording runs" },
        ],
        captions: [
          { label: "the archive", text: "a real calendar, weekday header and all. the days you did not record are still there, so the gaps in the record are part of the record." },
          { label: "the artifact, forming", text: "the gradient is drawn while you record, not applied afterwards." },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/soundmap/launch/reading.png", alt: "the acoustic reading behind its toggle" },
          { type: "image", src: "/case/soundmap/launch/artifact-late.png", alt: "the resting artifact" },
        ],
        captions: [
          { label: "the reading", text: "human 54 · machine 22 · nature 12 · music 12. temperate, loud, drifting, and the two colours the sound chose." },
          { label: "at rest", text: "the resting artifact stays calm. all of the analysis the app computes is invisible by default." },
        ],
      },
      {
        kind: "panel",
        label: "make the colour deterministic",
        bg: "#1A1917",
        fg: "#EFEDE5",
        emphasise: [0],
        paragraphs: [
          "if the visual were random it would mean nothing.",
          "loudness sets where the two colours meet. instability sets how softly they blend. warmth nudges the temperature.",
          "a strict mapping is harder to design than a pretty accident, and it is the only version worth keeping.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/soundmap/launch/recording.png", alt: "the artifact emerging while recording" },
          { type: "image", src: "/case/soundmap/launch/spent.png", alt: "the spent state: today is recorded" },
        ],
        captions: [
          { label: "recording", text: "thirty seconds, and the colour arrives with the sound." },
          { label: "spent", text: "today is recorded. the button rests until tomorrow." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/soundmap/launch/gradient-bleed.png", alt: "the same sound, four readings apart" },
        overlay: {
          placement: "below",
          label: "system design",
          paragraphs: [
            "three readings, one artifact. the mapping is fixed, so a day can be recognised by its colour a year later.",
          ],
          lines: [
            "loudness → where the colours meet",
            "instability → how softly they blend",
            "warmth → temperature",
            "palette · traditional japanese hues",
            "storage · indexeddb, on device",
            "upload · never",
          ],
        },
      },
      {
        kind: "panel",
        label: "keep it local by principle",
        bg: "#1A1917",
        fg: "#EFEDE5",
        emphasise: [0],
        paragraphs: [
          "an archive of your own days should not live on someone else's server.",
          "the audio stays in the browser's own storage and is never uploaded. no sync, no accounts, one device.",
          "a shared link carries only the visual signature, not the sound.",
          "the acoustic reading sits behind a quiet toggle. it is there if you go looking for it.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/soundmap/launch/home.png", alt: "the calendar archive" },
          { type: "image", src: "/case/soundmap/launch/artifact.png", alt: "a finished artifact and its metadata" },
        ],
        captions: [
          { label: "empty days read as days", text: "the gaps in the record are part of the record." },
          { label: "the artifact", text: "the colours are not decoration. they are read from the recording." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/soundmap/launch/archive-bleed.png", alt: "a month of days, each one a colour" },
      },
    ],
  },


  // ───────────────────────────────────────────────────── kochi water metro ──
  "kochi-water-metro": {
    slug: "kochi-water-metro",
    // The story layer's own ground, sampled off the app.
    theme: { bg: "#0E2C3A", fg: "#E9F1F4", hairline: "rgba(233,241,244,0.18)" },
    hero: {
      kicker: "pwa · independent project",
      title: "kochi water metro",
      subtitle:
        "an offline-first companion for a ferry ride: the route map, plus a bilingual story that surfaces as each place drifts past.",
      media: { type: "video", src: "/case/kochi/film.mp4", alt: "a full simulated ferry journey playing out on the map" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "clients", value: "independent, unaffiliated" },
        { label: "service", value: "product design · build" },
        { label: "date", value: "2026" },
      ],
      links: [{ label: "code", href: "https://github.com/evanaforai-dev/kochi-water-metro" }],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "kochi's water metro crosses backwaters most apps render as blank blue. this is an independent, non-commercial companion built on top of the official public map: pick a boarding terminal and a destination, and a journey plays out on its own.",
          "the ferry animates along the real water channels, its status cycles from boarding to arrived, and photos and stories surface as each place passes.",
          "there is a full english version and a full malayalam one, narration included.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "design, build, bilingual content", name: "evana sajan" },
          { role: "stack", name: "vanilla js · service worker" },
          { role: "base map", name: "official public asset, attributed" },
          { role: "photography", name: "creative commons, credited" },
        ],
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/kochi/launch/picker.png", alt: "choosing a boarding terminal and a destination" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "you do not really need navigation on a ferry. there is one route and someone else is steering. what you might want is something telling you what you are passing.",
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/kochi/launch/journey-bleed.png", alt: "one journey, five moments apart" },
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/kochi/launch/stories-bleed.png", alt: "the picker, a landmark story and a waterway story" },
        overlay: {
          placement: "below",
          label: "a journey, end to end",
          columns: [
            { label: "choose", text: "a boarding terminal and a destination. then you put the phone down." },
            { label: "sail", text: "the ferry follows the real water channels; status cycles from boarding to arrived." },
            { label: "stories", text: "photos and stories surface as each place passes, in either language." },
            { label: "offline", text: "map, photos, fonts and narration are all cached up front.", note: "/zero external requests. the malayalam font is bundled" },
          ],
        },
      },
      {
        kind: "panel",
        label: "no buttons to press",
        bg: "#F2F6F7",
        fg: "#0E2C3A",
        emphasise: [0],
        paragraphs: [
          "you are on a boat with a phone in your hand, not at a desk.",
          "you choose a journey, then put the phone down. the ferry drives and the interface reflects; the stories arrive on their own.",
          "you give up fine-grained control of the interface. on a ferry that is not a loss.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/kochi/launch/picker.png", alt: "every ride has a story to tell" },
          { type: "image", src: "/case/kochi/launch/route.png", alt: "the route drawn on the official map" },
        ],
        captions: [
          { label: "boarding at", text: "high court to fort kochi. direct service, no changes on the way." },
          { label: "the route", text: "the geometry over the official map is hand-traced, so the ferry never crosses land." },
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/kochi/launch/story-marine.png", alt: "the marine drive waterfront story" },
          { type: "image", src: "/case/kochi/launch/story-harbour.png", alt: "the cochin harbour story" },
        ],
        captions: [
          { label: "landmark", text: "marine drive: the busiest water the metro crosses, shared with cargo ships slipping toward the container port." },
          { label: "waterway", text: "the cochin harbour: where vembanad lake meets the arabian sea, one of the richest estuaries on the west coast." },
        ],
      },
      {
        kind: "panel",
        label: "work with no signal",
        bg: "#F2F6F7",
        fg: "#0E2C3A",
        emphasise: [0],
        paragraphs: [
          "mid-river is exactly where a connection drops.",
          "everything, map, photos, fonts and narration, has to be cached up front.",
          "an offline-first install caches the whole experience, and a single missing file never breaks it.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/kochi/launch/marine.png", alt: "marine drive waterfront" },
          { type: "image", src: "/case/kochi/launch/spice.png", alt: "the spice quarter" },
        ],
        captions: [
          { label: "marine drive", text: "the waterfront promenade the route opens on." },
          { label: "the spice quarter", text: "the warehouses the channel runs behind." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/kochi/launch/journey-bleed.png", alt: "the journey, cached end to end" },
        overlay: {
          placement: "below",
          label: "system design",
          paragraphs: [
            "malayalam is the language of the place, not a translation of the english. every story, fact and label exists twice, and the narration doubles.",
          ],
          lines: [
            "map · official public asset, attributed",
            "route · hand-traced channel geometry",
            "fonts · malayalam webfont, bundled",
            "narration · recorded, with a timed read-along fallback",
            "external requests · zero",
            "re-localises mid-ride without starting over",
          ],
        },
      },
      {
        kind: "panel",
        label: "bilingual as equals",
        bg: "#F2F6F7",
        fg: "#0E2C3A",
        emphasise: [0],
        paragraphs: [
          "malayalam is the language of the place, not a translation of the english.",
          "parallel content in both languages, a real malayalam webfont, and a journey that re-localizes mid-ride without starting over.",
          "every story, fact and label exists twice, and the narration doubles. that is the cost, and it is the right one.",
        ],
      },
      {
        kind: "duo",
        media: [
          { type: "image", src: "/case/kochi/map.svg", alt: "the official water metro route map" },
          { type: "image", src: "/case/kochi/launch/mangrove.png", alt: "the mangrove eco-zone" },
        ],
        captions: [
          { label: "the stage", text: "the official map, reused as the stage the journey plays out on." },
          { label: "the mangrove eco-zone", text: "the quiet stretch, and the reason the route is worth watching." },
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/kochi/launch/stories-bleed.png", alt: "the companion, running without a signal" },
      },
    ],
  },

};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
