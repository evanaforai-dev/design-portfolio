import type { CaseStudy } from "@/types/caseStudy";
import { site } from "./site";

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
        { label: "context", value: "wells fargo · wf.com public site" },
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
      { kind: "thesis", eyebrow: "product thesis", text: "three public-site products, three different kinds of trouble. one was scheduled for decommission over policy violations. one had never been made responsive. one existed only as a pdf. i worked on all three, and on every one of them the constraints were the same: policy, legal, a legacy cms, and a deadline. two of the three are live on wellsfargo.com, so you can check the result rather than take my word for it." },
      {
        /*
         * Labelled rather than left as the default "context": on a page about
         * an enterprise migration run by a team across two countries, the
         * first question a reader has is which parts were the author's. The
         * answer is co-led, and it says so in the label as well as the prose.
         */
        kind: "context",
        label: "role and ownership",
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
      {
        kind: "deeper",
        paragraphs: [
          "what is shown here is the public half: three live pages and the reasoning that got them there. the comps, the research, the ia explorations and the directions that were rejected along the way stay behind a wells fargo nda.",
          "i am happy to walk through the full process privately, including the parts that did not ship.",
        ],
        links: [{ label: "get in touch", href: `mailto:${site.email}` }],
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
        { label: "context", value: "kochi metro · mobility app redesign" },
        { label: "year", value: "2024" },
      ],
      links: [
        {
          label: "service design report",
          href: "https://www.behance.net/gallery/212543637/Public-Transport-Systems-Service-Design",
        },
      ],
    },
    /*
     * The deck, in its own order. This case study used to show three images
     * and describe the rest; the study itself is twenty-four slides and the
     * argument is in them, so they run here in the sequence they were made,
     * with the narrative sections holding them together rather than
     * replacing them.
     */
    sections: [
      { kind: "thesis", eyebrow: "product thesis", text: "people could already find a route in kochi1app. what they could not find was what the trip would actually be like, whether the transfer was walkable, where the exit came out, how long they would be standing in the sun waiting for the connection. the redesign is mostly about that gap." },
      {
        kind: "context",
        label: "role and ownership",
        paragraphs: [
          "kochi1app is the official app for kochi's metro and water metro. i ran an end-to-end service-design study across the city's multimodal transport, interviews with riders, station staff and management, personas, journey maps, service blueprints and a competitor teardown, to find where the app leaves people stranded rather than just where a screen looks dated.",
          "everything on this page is mine: the research, the framing, the information architecture, the screens and the usability testing.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/01-why-care.png", alt: "survey data on why people adopt public transport in kochi" },
        caption: "the case, in the city's own numbers: around 60 per cent mode share across kochi's 2.6 million travellers, 72 per cent asking for direct services and 60 per cent for better information (cppr mobility study).",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/02-existing-app.png", alt: "the existing kochi1 app, its feature set and its store rating" },
        fit: "contain",
        frame: true,
        caption: "what had already shipped. plan trips, book tickets, manage the kochi1 card, explore the city, bus and metro details, emergency messages. over 100,000 downloads and 2.5 stars across 2.26k reviews, which is the gap this project starts in.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/03-goals.png", alt: "the four goals of the redesign" },
        fit: "contain",
        frame: true,
        caption: "four goals, set before any screen.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/04-board.png", alt: "the redesign board, all four themes at once" },
        caption: "the whole redesign on one board.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/05-gaps.png", alt: "the gaps, sorted into seven categories" },
        fit: "contain",
        frame: true,
        caption: "the gaps, sorted before any of them were solved. the question under the slide is the real one: which of these do we fill first.",
      },
      {
        kind: "context",
        label: "the research",
        paragraphs: [
          "secondary research and case studies from ahmedabad, kolkata, chennai and bangalore, then primary work in kochi: ecosystem mapping, interviews across riders, station staff and management, stakeholder and affinity mapping, and service experience mapping through a customer gap model, touchpoint maps and causal loops.",
          "it ended in two kinds of recommendation, policy and design, because several of the failures were not things an app can fix.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/06-background-research.png", alt: "the six stages of the background research" },
        fit: "contain",
        frame: true,
        caption: "the method. the study produced policy recommendations alongside design ones, since a transfer that does not exist cannot be designed around.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/07-competitor-analysis.png", alt: "a feature matrix comparing eight transit apps" },
        fit: "contain",
        frame: true,
        caption: "eight apps against twelve capabilities. kochi1app is the only one in the set with no offline access, no first and last mile suggestions, no multimodal transport, no live crowd information and no fare calculation. the red column is the brief.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/08-personas.png", alt: "five rider personas across the city" },
        caption: "five riders the app has to serve at once: a school student, a new call-centre commuter, a daily-wage worker who walks when the fare is too high, a last-mile auto driver, and a visitor with no local knowledge.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/09-unboxing.png", alt: "evaluating the existing app: usability goals, heuristic evaluation and task-based evaluation" },
        fit: "contain",
        frame: true,
        caption: "what already shipped, evaluated three ways: usability goals, a heuristic evaluation scored on ten dimensions, and a task-based evaluation with real users.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/10-findings.png", alt: "what users said about the existing app" },
        fit: "contain",
        frame: true,
        caption: "the findings in the words they arrived in. the homepage does not cater to the primary task, the route turns from horizontal to vertical halfway, options in filter and sort do not make sense, and it felt like a generic app.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/11-sorting-the-pile.png", alt: "what to retain and what to improve" },
        fit: "contain",
        frame: true,
        caption: "sorting the pile into two questions: what has to be kept because people rely on it, and what would actually make it better.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/12-ia-existing.png", alt: "the existing information architecture, colour-coded" },
        fit: "contain",
        frame: true,
        caption: "the existing architecture, audited node by node. the circled planner is where the app's actual job lives and where almost none of its screen went.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/13-ia-redesigned.png", alt: "the redesigned information architecture" },
        fit: "contain",
        frame: true,
        caption: "the architecture rebuilt around eight areas. the planner stops being one item in a menu.",
      },
      {
        kind: "decisions",
        label: "key design decisions",
        items: [
          {
            n: "01",
            title: "plan by intention",
            why: "people don't only travel to an address. they travel to explore, to catch a scenic route, to be home before dark. the old app only understood destinations.",
            tradeoff: "the planner has to turn a fuzzy intent, i want to explore the city, into concrete routes.",
            result: "a dynamic intention layer: choose cultural, scenic, food, half a day or home by dinner, and the trip is built around that, not only the fastest line.",
          },
          {
            n: "02",
            title: "make the greener choice the easy one",
            why: "a sustainability nudge only works if it costs the rider nothing to think about.",
            tradeoff: "reward mechanics turn gimmicky fast if they are not tied to something real.",
            result: "a green card tracks carbon saved against a monthly target and pays out small, real rewards, a free ride or an offer, for low-carbon routes.",
          },
          {
            n: "03",
            title: "design the transfer and the last mile",
            why: "the trip breaks where the app stops: the confusing exit, the missed connection, the walk nobody mapped.",
            tradeoff: "far more surface than a point-to-point route: buffers, alternatives, live context.",
            result: "editable transfer buffers, alternative modes priced inline, and weather-aware routing, a shaded route when it is sunny and a place to wait out a downpour.",
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
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/14-ui-homescreen.png", alt: "the homescreen redesign and its iterations" },
        fit: "contain",
        frame: true,
        caption: "the homescreen, with the reasoning kept beside it. the version that shipped leads with green nudges and frequent tasks, and defaults geodata for a novice.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/15-ui-route.png", alt: "the route suggestion redesign and its iterations" },
        fit: "contain",
        frame: true,
        caption: "route suggestion, annotated through three rounds.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/16-user-flows.png", alt: "the full set of user flows" },
        caption: "every flow in the redesign, including the ones that only exist because the intention layer does.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/17-what-you-see.png", alt: "the nearest point of commute flow" },
        fit: "contain",
        frame: true,
        caption: "the first thing the app now does is answer where you are and what is near you, rather than opening on a menu.",
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
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/18-daily-route.png", alt: "the daily route and monthly pass flow" },
        fit: "contain",
        frame: true,
        caption: "the daily route and the monthly pass: the commuter case, where the job is to remove decisions rather than offer them.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/19-travel-mode.png", alt: "planning by travel mode" },
        fit: "contain",
        frame: true,
        caption: "planning by travel mode, through to the qr at the gate and the places worth stopping at on the way.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/20-edit-intermediate.png", alt: "editing intermediate travel options" },
        fit: "contain",
        frame: true,
        caption: "the transfer, made editable. an intermediate leg can be changed without rebuilding the journey, which is the part the old planner could not do at all.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/21-previous-transactions.png", alt: "booking a journey from a previous transaction" },
        fit: "contain",
        frame: true,
        caption: "booking from a past transaction, because most trips in a commuter's week are a trip they have already taken.",
      },
      {
        kind: "context",
        label: "testing it",
        paragraphs: [
          "the redesign was tested with sixteen participants aged fifteen to fifty, against three task scenarios: intention-based navigation, micro-route suggestions, and the sustainability nudges.",
          "the protocol was written before the prototype: welcome and overview, objectives, consent, the test itself on normal scenarios, then a post-test discussion. what to observe was written down too, so difficulty, recognition, efficiency and frustration were recorded rather than remembered.",
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/22-evaluation-plan.png", alt: "the evaluation plan: key questions, precautions, target users, test goals and screener" },
        fit: "contain",
        frame: true,
        caption: "the plan before the test. travel cannot be replicated in a room, so the scenario has to carry it.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/23-test-design.png", alt: "the test protocol and the three task scenarios with their metrics" },
        fit: "contain",
        frame: true,
        caption: "three scenarios with their success criteria set in advance: intention-based navigation at 80 per cent, micro-route suggestions at 90, sustainability nudges at 70. writing the target down first is what makes a result a result.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/kochi1app/deck/24-test-results.png", alt: "the test results: sus and nasa-tlx scores, per-task completion and the four failures" },
        fit: "contain",
        frame: true,
        caption: "the results, including the parts that did not work.",
      },
      {
        kind: "turn",
        label: "the part of the thesis the testing did not support",
        tried: "the sustainability layer was the argument i cared most about: carbon saved against a monthly target, small real rewards for low-carbon routes, and the greener option surfaced inside the planner rather than parked in its own tab.",
        result: "it tested worst of the three. the sustainability scenario scored 70 on sus against 80.5 and 85 for the other two, it was the only task that did not reach full completion, and nine of the sixteen participants failed to recognise which routes were the sustainable ones at all.",
        change: "a nudge is a visual-hierarchy problem before it is a behavioural one. the rest of the work assumed that if the greener route was present and cheap to choose, it would be chosen, and the testing showed that most people never saw it was being offered. recognition has to be measured separately from completion, because a task can complete at ninety per cent while the thing it was meant to demonstrate goes unseen.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "tested with sixteen participants across three task scenarios. the redesign scored 80 on the system usability scale, 80.5 for intention-based navigation, 85 for micro-route suggestions and 70 for the sustainability nudges. task completion was 100 per cent, 100 per cent and 90 per cent against targets of 80, 90 and 70 set before the test.",
          "cognitive load came out at 53.8 on nasa-tlx, with mental demand at 70 and temporal demand at 65 the two highest components and frustration lowest at 29.8. the load is in reading and deciding rather than in operating the interface, which is the right place for it in a planner and the wrong place for it in a commuter's daily route.",
          "the failures are the more useful half. thirteen of sixteen could not cancel a trip, ten of sixteen were confused by sorting for the nearest station, nine of sixteen did not recognise the sustainable routes, and five of sixteen missed the qr code after confirming a trip. three of those four are recognition failures rather than comprehension ones.",
          "it was delivered to kochi metro as a service-design study, personas, journey maps, service blueprints and policy plus design recommendations, not just a set of screens.",
        ],
      },
      {
        kind: "deeper",
        paragraphs: [
          "the twenty-four boards above are the study as it was made. what is not here is the raw material behind them: the interview transcripts, the full service blueprints, the causal loop diagrams and the policy recommendations that went out alongside the design ones.",
          "the full service-design report is public. i am happy to walk through the research and the rounds the screens went through privately.",
        ],
        links: [
          {
            label: "the complete study",
            href: "https://www.behance.net/gallery/212543637/Public-Transport-Systems-Service-Design",
          },
          { label: "get in touch", href: `mailto:${site.email}` },
        ],
      },
      { kind: "reflection", text: "i spent far more of this project in interviews and service blueprints than in a design file, and the screens only got obvious once i could see the whole service around them: the station staff, the auto drivers waiting outside, the walk at the end that nobody had mapped. the testing then did the thing testing is for, which is to disagree with you. the part i was most attached to is the part sixteen people could not find." },
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
        /*
         * Vision's surfaces composed on a transparent ground: the saved view
         * and its filter rows floating above, the payments record itself, the
         * cohort filter open across three courses, the bulk slack-access
         * modal, a row's action menu, and the selection bar the bulk actions
         * hang off. It runs on the synthetic cast, the leads are famous
         * mathematicians, the addresses are example.com and the phone numbers
         * are 9876543210, so nothing here is a real learner.
         *
         * The plain payments capture it replaces is still in the page, in the
         * decision that argues for the view control. This fold is the product
         * as an object; that figure is the screen as an argument.
         *
         * Contained and unframed: the artwork is drawn to its own edges on a
         * transparent ground, so a cover crop would cut the outer surfaces and
         * a hairline box would put a specimen case around a product shot.
         */
        type: "image",
        src: "/case/vision/hero.webp",
        alt: "vision's payments record with its surfaces laid around it: the view switcher and filter rows above, the cohort filter open across three courses, a modal setting slack access for several learners at once, a row's action menu offering change cohort, assign unit, re-sync and remove access, and a selection bar reading ten selected",
      },
      mediaFit: "contain",
      mediaFrame: false,
      meta: [
        { label: "role", value: "product designer" },
        { label: "team", value: "four: two product designers, one backend, one frontend" },
        { label: "context", value: "airtribe · internal sales and operations" },
        { label: "year", value: "2026" },
      ],
    },
    sections: [
      { kind: "thesis", eyebrow: "product thesis", text: "every enrolment, instalment and refund the company took lived in one google sheet, and finance, delivery and onboarding all read from it. the brief was to replace it. the harder fact was that nobody was unhappy with it: it was fast, it was visible, and it had never once asked anyone for permission." },
      {
        kind: "context",
        label: "role and ownership",
        paragraphs: [
          "two product designers ran this end to end. i took the ground research, the problem framing, the conversations with every team that touches a payment, and the design decisions below. the ui screens we split between us, and the other designer led the handoff. we worked alongside one backend and one frontend engineer. no separate researcher and no ux writer, so the column list, the payment states and the dropdown copy are decisions rather than inherited requirements.",
          "vision is airtribe's internal operations dashboard, none of it learner-facing. payments sit at the seam: sales records what a learner paid and how, and enrolment, slack access, onboarding and invoicing all key off that record.",
                  ],
      },
      {
        kind: "question",
        text: "what does a product have to do before someone gives up a spreadsheet they trust?",
      },
      {
        /*
         * The sales sheet, redacted the same way. It used to be the hero, from
         * a time when no capture of vision itself could leave. Now that one
         * can, the two sheets belong together as the before: the product opens
         * the page, and the thing it replaced is the evidence underneath it.
         */
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/sheet-sales.jpg",
          alt: "the sales sheet the product replaced, with every cell's contents redacted: columns of struck-out rows, cleared payments banded in green, refund flags cutting across in red",
        },
        fit: "contain",
        frame: true,
        caption: "the sales sheet, redacted. green bands are cleared payments, red is a refund flag, and that is the only thing in the file that can be found at a glance.",
      },
      {
        /*
         * The onboarding sheet. Data rows destroyed, header row deliberately
         * left at full resolution: column names are not personal data, and
         * they are the whole argument. The one thing a reader can recover by
         * zooming is the one thing worth recovering.
         */
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/sheet-onboarding.png",
          alt: "the onboarding sheet: a legible header row of close to thirty column names above rows of colour-coded cells whose contents have been destroyed",
        },
        fit: "contain",
        frame: true,
        caption: "the onboarding sheet, redacted. the header row is legible because the columns are the argument: close to thirty for one person, two adjacent and both called remarks, one called problematic leaner, spelled exactly like that.",
      },
      {
        kind: "constraints",
        label: "what the decisions were based on",
        items: [
          { label: "primary research with the teams", text: "sessions with the sales and lxd people who lived in the sheet, before anything was designed. the column list came out of those, not out of the schema." },
          { label: "clarity session data", text: "how people moved through the existing screens rather than how they described it. this is what made the filter overflow visible before anyone complained." },
          { label: "algolia search data", text: "what people searched for, which told us which fields were being filtered by hand because no filter existed yet." },
          { label: "testing with the same people", text: "every phase went back to the teammates who would use it. onboarding changed most: unused columns were deleted, and several that were really a sequence of tasks became a checklist." },
        ],
      },
      {
        kind: "decisions",
        label: "the decisions that shaped the screen",
        items: [
          {
            n: "01",
            title: "a table, by default, because that is the muscle they already had",
            why: "the sales team had spent years in a grid. opening on cards or a form would have made every one of them slower on day one, which is when a replacement earns trust or loses it.",
            tradeoff: "a table is the least forgiving layout there is, and it commits you to solving density everywhere else: filters, views, permissions, overflow.",
            result: "nobody needed a re-learning period. the work went into making the table hold more than a sheet could.",
          },
          {
            n: "02",
            title: "views instead of one table, once three teams were in the same row",
            why: "by phase 3 a payment carried slack access, dashboard access, an lxd comment and the onboarding sheet as well. one table meant both teams scrolled past two thirds of it to reach their own third.",
            tradeoff: "views split a shared surface, and a shared surface was half of why the sheet was trusted. so they overlap deliberately, and an all view stays available.",
            result: "sales, lxd and all, with the columns inside each one governed by role and permission rather than by preference.",
            /*
             * This capture used to be the fold. It is a better argument than
             * an opening image: the view switcher reading all and onboarding
             * is the decision, and it is legible here next to the reasoning
             * rather than sitting above it unexplained.
             */
            media: { type: "image", src: "/case/vision/payments-all.png", alt: "the payments record in vision: a view switcher reading all and onboarding, four rows of filters, and a table of payment rows with inline track dropdowns" },
            fit: "contain",
          },
          {
            n: "03",
            title: "friction proportional to consequence",
            why: "a typo in a comment costs nothing; a change to a payment status moves money and triggers access downstream. a spreadsheet treats both identically.",
            tradeoff: "every piece of friction is a slower edit for someone who knew exactly what they were doing.",
            result: "each column is either directly editable or behind an action button that names what is about to happen, and that menu is role-dependent. change logs sit alongside, so a row can be asked who last touched it.",
          },
        ],
      },
      {
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/onboarding-view.png",
          alt: "the onboarding view: a different filter set and a different column set, with a row's action menu open on change cohort, assign unit, re-sync and remove access",
        },
        fit: "contain",
        frame: true,
        caption: "the same rows under the other view. onboarding gets its own filters and columns, career service, ctc, profile, the two track assignments, and none of the payment machinery it never touches. that is where the scroll went.",
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
          "a payment is not an amount. it is an amount, the instrument it arrived by, where that instrument is now, and what each downstream team may do next. six types and eleven statuses, and the statuses are not a pipeline, they are the states a real payment gets stuck in. the row spans sales, finance and delivery, for people who each care about a third of it.",
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
        note: "it also carries slack access, onboarding status, an lxd comment and dashboard access. phase 2: other teams' columns inside a sales record, because that is where the sheet had put them.",
      },
      {
        /*
         * These were written as callouts for a screenshot that did not exist
         * yet. Captures do exist now and sit above and below this block, but
         * these six stay as prose: each states its own decision in full, and
         * six labels pinned around one frame would make a diagram out of
         * something that reads better as a list.
         */
        kind: "constraints",
        label: "the decisions the screen had to make",
        items: [
          { label: "constrain anything with a definitive answer", text: "every field with a finite set of correct answers became a dropdown. this is what made filtering possible at all: you cannot filter a column eleven people have spelled eleven ways, and the sheet had several." },
          { label: "colour is for spotting, not reading", text: "only the anomalies carry colour: likely to refund, confirmed but not paid, loan rejected. the ordinary states do not, because if everything is coloured nothing is." },
          { label: "sync is a state, not a success message", text: "reconciling with the sheet resolves six ways: created, pulled in, already in sync, not found or not permitted, failed, or ambiguous. ambiguous is the one that matters, because a person at 6pm has to be told which record they are looking at and which they are not." },
          { label: "a rejected loan is a state, not an error", text: "loan rejected, access removed, awaiting documents and waiting for disbursement are ordinary places a payment sits. as error states they would say the agent had done something wrong." },
          { label: "the same learner, twice, on purpose", text: "a learner who re-enrols is a second payment record, not a correction of the first, so duplicates by name are legitimate and cannot be merged away. the latest carries a live badge; the older ones stay readable." },
          { label: "the same name leads two different places", text: "the same lead opens the opportunities page for sales and the learner profile for lxd. the row is shared; the job you are doing with it is not." },
        ],
      },
      {
        kind: "turn",
        label: "the flaw we shipped",
        tried: "a name and an email are never read apart, so we merged them into one cell: name on the line, email as a subline. it tested well with the sales team and gave back a column on a table that needed the room.",
        result: "it broke a workflow nobody had shown us. the people granting slack access take the whole column at once: one drag, about five minutes for a cohort. as a subline there was nothing to select, so it became copying by hand, about fifty minutes. we had researched the team that writes the record and missed the team that reads it a hundred rows at a time.",
        change: "the email came back out as its own column, and the rule came with it: a column is not a field, it is a workflow. every merge candidate now gets a second question, not is it read beside its neighbour, but is it ever selected, sorted, exported or copied alone.",
      },
      {
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/slack-bulk.png",
          alt: "rows selected across the table, a bar reading ten selected with copy ten emails and update slack access, and the dialogue that collects the selected addresses as chips",
        },
        fit: "contain",
        frame: true,
        caption: "the repair. select the rows, take all ten addresses in one click, or set slack access for all of them in one dialogue. fifty minutes of copying is now the fastest path in the product.",
      },
      {
        kind: "context",
        label: "filters, and a chicken and egg problem",
        paragraphs: [
          "an opportunity carries about twenty five fields across three lifecycle axes people mistake for one: a status, a stage, and a separate lead status. showing all of them was the overflow; burying them two clicks deep would have made the product slower than the sheet at the task the sheet was worst at.",
          "so the filter set stopped being fixed. a new user gets recommended filters, then the bar shows what they last used, and the rest expand in place. a combination worth keeping becomes a named view. search gained include and exclude, to stop a query quietly returning the wrong queue.",
        ],
      },
      {
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/filters-before.png",
          alt: "the old filter bar: twenty-nine filter controls wrapping onto four rows",
        },
        fit: "contain",
        frame: true,
        caption: "before. twenty-nine filters over four rows, between the search box and the table they govern, and the same twenty-nine for everyone.",
      },
      {
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/filters-after.png",
          alt: "the new filter bar: nine filters over two rows, four of them active and showing their values, with more filters, save filter view and a saved view selector",
        },
        fit: "contain",
        frame: true,
        caption: "after. nine, and they are this person's nine. an active filter prints its value and counts the rest, so the bar states the query rather than naming the fields it could run one on. the other twenty expand in place.",
      },
      {
        kind: "context",
        label: "email templates, for managers and agents",
        paragraphs: ["the same product, a different muscle. templates are what the sales team sends from, and the design question is not the editor, it is the line between the two roles: what a manager can author and what an agent can only send. it is the same question the permissions work below asks at the level of the whole product."],
      },
      {
        kind: "context",
        label: "who is allowed to see what",
        paragraphs: [
          "almost nobody should see the whole row, so access runs on four axes that are deliberately not the same thing: department, role, permission group, and who you report to. a title is not a permission, which is why the role and permission group columns disagree on most rows and why that is the system working.",
          "permissions are namespaced into eleven categories and compose into named groups rather than being handed out one at a time. it took the longest to argue for, and it is what makes every other decision on this page enforceable: views, editable columns and the action menu all read from it.",
        ],
      },
      {
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/team-members.png",
          alt: "the team members table: department, role, manager and permission group as four separate columns, with a row's action menu open on edit, login as, block access and remove",
        },
        fit: "contain",
        frame: true,
        caption: "four columns because they are four separate questions. six of the eight rows here carry a role and a permission group that do not match. blocking and removing are different things, which matters when somebody leaves and their records must not.",
      },
      {
        kind: "full",
        media: {
          type: "image",
          src: "/case/vision/permission-group.png",
          alt: "building a permission group: a category sidebar, namespaced permission checkboxes, and a review dialogue listing every permission selected before the group is created",
        },
        fit: "contain",
        frame: true,
        caption: "opportunity management alone holds ten permissions, through to manage descendant's opportunities, which reads the reporting line to decide whose records you can touch. the group is listed back in full before it exists, and again before anyone is given it.",
      },
      {
        kind: "statement",
        text: "a spreadsheet's real advantage is not that it is flexible. it is that nobody has ever had to ask it for permission.",
      },
      {
        kind: "outcome",
        paragraphs: [
          "the sales sheet is no longer the source of truth. three spreadsheets across two departments are now one table carrying the whole lead lifecycle, first payment through to onboarding into the lms. all three phases shipped, alongside the email template flow, the cohort filter and the filters and search redesign.",
          "views and role-based permissions cut scroll depth in half, and accidental edits dropped once a row could be asked who last touched it. the sales team moved off the sheet with no re-learning period, which was the bar the table layout was chosen to clear. onboarding ended with fewer columns than it started with. the one workflow the design broke, bulk-copying emails, went from five minutes to fifty before it was caught and undone.",
          ],
      },
      {
        kind: "deeper",
        paragraphs: [
          "the rest of vision, the opportunities pages, the learner profile, the email templates and the permission work, sits behind an airtribe nda, as do the research sessions and the phases that were tested and cut. i can walk through it privately.",
        ],
        links: [{ label: "get in touch", href: `mailto:${site.email}` }],
      },
      {
        kind: "reflection",
        text: "the first phase went on matching the sheet rather than beating it, and everything after on the two things it structurally could not do. i think that order was the whole job. the sync states are the proof of how long it takes: the product had to say already in sync for months before anyone agreed it was the source of truth.",
      },
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
      /*
       * The pre-read components themselves, composed over a render on a
       * transparent ground: a rice calculator with its live ranking, the
       * three-column dimensions table, the type-hint lab and a budget
       * allocator already two weeks over. The fold introduces the internal
       * skill, so it opens on what that skill produces.
       *
       * Contained, not filled. The cards are laid to the frame's edges and a
       * cover crop eats the outermost two; the transparent ground means the
       * space either side is the page, not a band.
       */
      media: {
        type: "image",
        src: "/case/airtribe-ai-skills/hero.webp",
        alt: "four pre-read components composed over a purple render: a rice calculator with a live priority ranking, a table comparing the product manager's job across three company stages, a type-hint clarity lab, and a quarterly budget allocator flagged two weeks over",
      },
      mediaFit: "contain",
      mediaFrame: false,
      meta: [
        { label: "role", value: "product designer" },
        { label: "team", value: "four: two product designers, one backend, one frontend" },
        { label: "context", value: "airtribe · pre-reads and cohort live" },
        { label: "year", value: "2026" },
      ],
      /*
       * No links in this fold. It used to carry kai's live demo and a link
       * out to kai's own page, which sent a reader to the second half of the
       * page before they had read the first, and out of the site entirely
       * before the pre-read skill, which is what the fold introduces, had
       * said anything. Kai is now a chapter below rather than a separate
       * case study, so its demo link sits where kai is discussed.
       */
    },
    sections: [
      { kind: "thesis", eyebrow: "product thesis", text: "a skill is a packaged set of instructions a model works inside. airtribe's two are not versions of each other, and in both the work is the same: deciding what the author may change and what they may never touch." },
      {
        kind: "context",
        paragraphs: [
          "the two pull in opposite directions. inside, the author is a colleague building for a catalogue, so the risk is drift. outside, the author is the model itself, writing for one reader who cannot easily check it, so the risk is trust. the pre-read skill protects the product from its authors; kai protects the reader from the product.",
        ],
      },
      {
        /*
         * Stated once, at the top, rather than repeated inside each of the
         * two case studies below: it is one team and one way of working
         * across both skills.
         */
        kind: "context",
        label: "role and ownership",
        paragraphs: [
          "two product designers ran both of these end to end. i took the ground research, the problem framing, the conversations with the lxd team and the stakeholders around them, and the design decisions below. the ui screens we split between us, and the other designer led the handoff. we worked alongside one backend and one frontend engineer. each skill below is its own case study; they share a team and a question and nothing else.",
        ],
      },

      /*
       * ── 01 · PRE-READS, THE INTERNAL SKILL ────────────────────────────
       *
       * Two case studies share this page, and each one runs its own full
       * arc: thesis, context, question, the product, the decisions, the
       * outcome. They open on a `thesis` rather than a labelled `context`
       * because the eyebrow plus display type is the only break on this site
       * big enough to read as "a new project starts here" in one scroll.
       *
       * The internal skill leads. Both are ai work, but this is the one that
       * is a system somebody else has to author inside, and that is the
       * harder thing to have done. Kai follows, and the page still opens on
       * kai's landing, because the index tile is kai and a reader clicking a
       * tile should arrive at the picture they clicked.
       */
      {
        kind: "thesis",
        eyebrow: "01 · pre-reads · the internal skill",
        text: "a pre-read is what a learner gets before a live session, and at airtribe they are written by learning designers rather than visual ones. across a growing catalogue that produced fifty lessons which each looked slightly like whoever wrote them.",
      },
      {
        kind: "context",
        label: "what drifted, and how",
        paragraphs: [
          "the lxd team took up the problem that pre-reads were walls of text and wanted them interactive enough to be worth opening. the catch is who writes them. the restyle checklist is the record of the drift, because it lists what has to be undone.",
        ],
      },
      {
        kind: "question",
        text: "how do you hand ten to fifteen people the freedom to build anything a lesson needs, and still have it come out looking like one product?",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-ai-skills/boards.webp", alt: "two working boards side by side: on the left the component exploration in light and dark, from avatars and text blocks through chat, quiz, visualisation and loader states; on the right the comp board for the product management programme" },
        fit: "contain",
        frame: true,
        caption: "the working boards, at the zoom where you stop reading them and start seeing the size of the problem.",
      },
      /*
       * The four-stage research run that used to sit here (frame, audit,
       * scan, synthesise) came out. It documented method rather than
       * decisions, and everything it carried is said more usefully elsewhere:
       * the audit is the restyle checklist quoted in the context above, and
       * the eight families are the system section below. The decisions block
       * that replaces it is the same work, cut as calls rather than steps.
       */
      {
        kind: "decisions",
        label: "key decisions · pre-reads",
        items: [
          {
            n: "01",
            title: "a skill, not a template set and not a rulebook",
            why: "templates hold a catalogue together by capping what a lesson can be. a rulebook leaves an author free and gets read once. the lxd team needed both halves at once, across a catalogue still growing.",
            tradeoff: "a skill has to be comprehensive enough to write a whole lesson inside, far more to author and maintain than a page of guidelines.",
            result: "the brand is inherited by construction rather than checked after the fact, so the only thing left for a learning designer to decide is the teaching.",
          },
          {
            n: "02",
            title: "classify by behaviour, so the component nobody has built yet is already covered",
            why: "most of a real pre-read is not a library primitive. it is dioramas, chat dialogues, tap-sort exercises, a gamification rail, a 3d rice space. whatever a library failed to cover would have been the interesting part of the lesson.",
            tradeoff: "eight behaviours is coarser than a list of components, and it asks an author to decide what a thing does before building it.",
            result: "anything new is placed by what it does, prose, widget, data-figure, chrome or code, inherits that family's surfaces, and comes out airtribe without passing a designer.",
          },
          {
            n: "03",
            title: "govern the look and nothing else",
            why: "a skill that reached into structure or pedagogy is one the learning designers would route around, and its whole value is that they author inside it.",
            tradeoff: "it can produce a pre-read that is perfectly on-brand and badly taught, and there is no guardrail in it that would catch that.",
            result: "one accent, cool neutrals, two typefaces, every state defined. structure, sections and the teaching stay with the author, and the skill says so in as many words.",
          },
        ],
      },
      {
        kind: "turn",
        label: "the tool we built and threw away",
        tried: "the lxd team arrived with a version that had every possible interaction in it. we broke it into categories, shipped a basic version, and it was rejected: too simple. so we went back and did the pedagogical work we had skipped, then built a component maker, a framer-like tool for assembling the artifacts.",
        result: "it made the workflow worse. the chain already ran designer, program manager, copy-paste into the dashboard; the maker added another station and one more place for an error to enter.",
        change: "we scratched it and built the skill instead, comprehensive enough that the designer writes the whole lesson inside it and hands over a link. the rule: when a tool sits between the person who understands the material and the thing the learner reads, the tool is the problem.",
      },
      /*
       * The pedagogical pass. The `turn` above says we went back and did the
       * work we had skipped; this is that work, and without it the claim is
       * just a sentence. The finding that mattered is the cheapest one on the
       * board: the last beat already existed, it was in the wrong place.
       */
      {
        kind: "annotated",
        label: "what interactive was actually doing",
        media: { type: "image", src: "/case/airtribe-ai-skills/pedagogy-jobs.png", alt: "a board splitting the prototype's interactive elements into two jobs: forcing active thought, and visual variety as a palate cleanser" },
        fit: "contain",
        frame: true,
        items: [
          { title: "two jobs, and only one of them teaches", text: "every interactive element in the prototype, sorted into two piles. job a forces active thought: the quiz that interrupts the narrative, the prompt that makes you apply it. job b is visual variety: radar charts, fake linear chrome, mock terminals." },
          { title: "job b is allowed, it is just not progress", text: "visual variety makes a page less monotonous. it does not change what the learner remembers. the prototype was dense with job b, and we had read that density as evidence the lesson was interactive." },
          { title: "name the mechanism, or you are only adding widgets", text: "job a works because of retrieval practice, spaced thinking and the generation effect. writing those down let us argue for one interaction over another instead of about how many there were." },
        ],
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-ai-skills/pedagogy-loop.png", alt: "a four beat learning loop: encountering a situation, forming a position, testing it against reality, connecting it to yourself" },
        fit: "contain",
        frame: true,
        caption: "what a learner does in a good lesson, as four beats. the second is the one the old pre-reads did not have, and the expensive one: a learner who commits to an answer before the explanation arrives lets the explanation be written as a reply to what they picked. the fourth was already there, sitting at the end after everything had been explained. moving it is most of the difference between a reading with a quiz stapled on and a lesson, and it cost no new components.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-ai-skills/interactivity.png", alt: "probable types of interactivity mapped across three programmes: product management, backend engineering and generative ai" },
        fit: "contain",
        frame: true,
        caption: "the three programmes do not share a way of being right. a product answer is defended, so pml gets decision scenarios and spec critique. a backend answer is executable, so bel gets a sandbox. a generative ai answer is evaluated, so gai gets prompt iteration and eval design. one approved list could not have served all three.",
      },
      {
        kind: "pipeline",
        label: "the workflow the skill actually changed",
        steps: [
          { glyph: "input", label: "the designer writes the lesson", text: "the learning experience designer designs the material and its teaching in one pass, inside the skill.", note: "before, they designed the material and handed it on to someone else to assemble" },
          { glyph: "receipt", label: "a link, not a document", text: "what comes out is an interactive lesson at a url.", note: "before, a program manager copy-pasted the material into the internal dashboard, which is where errors entered" },
          { glyph: "converge", label: "the manager embeds the link", text: "the program manager drops it into the learner dashboard. that is the whole handover.", note: "content quality now belongs to the person with the pedagogy, and uniformity belongs to the skill" },
        ],
      },
      /*
       * The first spec, and why it had to be loosened. Without this the page
       * contradicts itself: it argues for eight behaviour families while the
       * artifact on screen is a thirteen-component library. The contradiction
       * is the story, so it is stated rather than cropped out.
       */
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-ai-skills/spec.png", alt: "the first skill's output contract: its five sections, and the required html boilerplate with the pinned babel version and the exact script tag called out" },
        fit: "contain",
        caption: "section 1.2 of the first version of the skill, typeset from the file. it gives the tag verbatim and writes the failure next to the version that causes it, because a rule an author can paste survives the next person who tidies a dependency list.",
      },
      /*
       * The part that is not a style guide. A reader can dismiss tokens and
       * families as taste; these are the rules that decide whether the file
       * renders on the platform at all, and they are the reason an author
       * without an engineer can ship one.
       */
      {
        kind: "constraints",
        label: "what the spec carries besides colour",
        items: [
          { label: "a file, not a design file", text: "one self-contained html page, react and tailwind from a cdn, no build step, so a learning designer can upload it without an engineer. the whole premise rests on that line." },
          { label: "a pinned version, with the reason next to it", text: "babel standalone is pinned to 7.17.12. newer builds default to the automatic jsx runtime, which injects an import into a non-module script and renders a blank page. the pin is written down with the failure beside it." },
          { label: "one exact script tag", text: "type text/babel, with no data-presets, no data-type and no type module. each reintroduces the same blank page." },
          { label: "a weight budget", text: "the renderer accepts 500kb. generated pre-reads land between 50 and 80kb, so the budget is headroom rather than something an author thinks about." },
          { label: "an allowlist, not a hope", text: "the content security policy names the script, font and avatar hosts by hand. without it a file works on the designer's laptop and nowhere else, and the failure arrives weeks later as somebody else's bug." },
          { label: "no em dashes, anywhere", text: "a copy rule that is really a visual one, checked with a grep before shipping. the smallest rule in the system and the most reliable tell for whether a lesson went through it." },
        ],
      },
      {
        kind: "turn",
        label: "the spec that was too tight",
        tried: "the first version was prescriptive: thirteen components with their full source in the file, two permitted border radii, twenty-two named prohibitions, and a rule saying do not invent new components. on its own terms it worked.",
        result: "the lxd team found it too limiting. they built their own pre-reads outside it, with components the thirteen did not cover, and those were the ones that shipped, off the visual language. the worst available outcome: a spec nobody authored inside, and a catalogue that had stopped looking like one product.",
        change: "it was rewritten to govern less. thirteen components became eight behaviour families, radius went back to the author, and the scope narrowed to the visual layer alone. a rule people route around protects nothing.",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-ai-skills/comps.png", alt: "the component comp board for the product management programme: text, dialogue, table, tab, progressive, quiz, slider calculator and data-viz cards" },
        fit: "contain",
        frame: true,
        caption: "the inventory for one programme, and the drift, in one picture. each column is a behaviour the system had to cover. the cream grounds, the orange tabs and the serif heading are what the restyle checklist lists.",
      },
      {
        kind: "system",
        label: "eight families, not a component library",
        paragraphs: [
          "the catalogue is not a set of components, it is eight behaviours with a visual treatment attached. each family carries the same three constants, purple is the one accent, neutrals are cool, colour means state, which is why a component invented tomorrow still comes out airtribe.",
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
        note: "permissive on purpose. radius is the author's choice as long as one pre-read is consistent with itself.",
      },
      {
        kind: "annotated",
        label: "what a guardrail looks like up close",
        media: { type: "image", src: "/case/airtribe-ai-skills/components-states.png", alt: "a quiz answered correctly, a slider calculator and a counter allocator, each with its motion spec" },
        fit: "contain",
        frame: true,
        items: [
          { title: "one accent, one job", text: "the score, the slider fill and the chosen row are the same purple. correctness is green, over-budget is red, because colour is only ever allowed to mean state." },
          { title: "every state, or it isn't done", text: "hover, focus-visible, selected, correct, incorrect, disabled. a component with only a default state is unfinished." },
          { title: "the spec sits in the corner", text: "200ms, ease-out, colour transition, written beside the component so the next author does not guess at what calm looks like." },
          { title: "replay, not confetti", text: "the reward for a right answer is the state change, plus a way to run it again." },
          { title: "a written list of what we are not doing", text: "kind a hangs off an interaction, eases out, finishes inside 500ms. kind b was decorative, scroll fades on prose, confetti, ambient loops, bounce and elastic easings, and it did not ship. it sits in the spec under what we are not doing, because it is easier to hold a line when the argument against it is written down." },
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
        caption: "built inside the guardrails, by learning designers. neither is a component in a library. both were placed by behaviour and inherited the treatment.",
      },

      {
        kind: "outcome",
        label: "outcome · pre-reads",
        paragraphs: [
          "the skill carries around fifty pre-reads across fifty modules, five subtracks and three courses, reaching more than fifteen hundred learners, authored by ten to fifteen people with no visual designer in the loop. those are scope figures, not outcome claims.",
          "of the four hundred and twenty learners who answered the closing prompt in phase one, sixty per cent called the format more positive and engaging. that is one phase across two tracks, not the catalogue, and it is the one measured signal this work has so far.",
          "because each artifact is placed by behaviour rather than built one-off, a lesson is updated by recombining them instead of remaking them.",
          "what the system did to the work is still the next thing to measure against a baseline: adoption over one-off styling, review rounds per pre-read before and after, brand-audit pass rate, and whether authors say they can ship on-brand without design support.",
        ],
      },

      /* ── 02 · KAI, THE CONSUMER SKILL ─────────────────────────────────── */
      {
        kind: "thesis",
        eyebrow: "02 · kai · the consumer skill",
        text: "most 'learn anything with ai' products are a chat box with a better frame: you ask, it answers, and what you are left with is a transcript. kai writes a lesson instead, to four answers you give before it starts.",
      },
      {
        /*
         * The chapter opener, straight after the eyebrow that names it, so
         * the second case study starts on an image the way the page does.
         * Contained on a transparent ground and unframed, like the two
         * heroes: the artwork is drawn to its own edges and a box round it
         * would read as a specimen case.
         */
        kind: "full",
        media: {
          type: "image",
          src: "/case/airtribe-learn/kai-opener.webp",
          alt: "kai's landing: learn something you've been wondering about, a prompt field, and three steps reading you bring the question, kai builds the lesson around you, you learn test and explore. around it, a concept map of consciousness and a diagram of photosynthesis, both produced inside a lesson",
          width: 2000,
          height: 1403,
        },
        fit: "contain",
        caption: "a guided lesson with sources, not an answer. what sits around the landing is the part a chat box cannot do: a map of what the topic is made of, and a diagram where a third paragraph would have gone.",
      },
      {
        kind: "context",
        label: "what kai is",
        paragraphs: [
          "kai is an ai-first learning experience for the airtribe community. you give it a topic, answer four questions, and it writes the lesson to those answers, opening by naming what you already know so it starts where you are. a concept map draws the ideas as you read, a library holds the source behind every claim, and kai waits in the margin to unpack any phrase you highlight.",
        ],
      },
      {
        kind: "question",
        text: "what if ai adapted to how someone learns, instead of only answering what they asked?",
      },
      {
        kind: "full",
        media: { type: "image", src: "/case/airtribe-learn/lesson.png", alt: "the three-pane workspace: kai chat, the lesson, and the lesson, map and library tabs" },
        fit: "cover",
        caption: "kai on the left, the lesson in the centre, the map and library one tab away. the tip up top is the whole posture: highlight anything and ask.",
      },
      { kind: "statement", text: "kai opens a lesson by naming what you already know. it is one sentence, and it does more for trust than anything else in the product." },
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
        label: "key decisions · kai",
        items: [
          {
            n: "01",
            title: "build it the way a teacher would",
            why: "a chat answers the question you asked and skips the shape around it. that is nearly the opposite of teaching.",
            tradeoff: "the output has to be planned before it is written, which is far more machinery than answering.",
            result: "a hook, a worked example, the misconception that keeps the idea fuzzy, a quick check, a reflection. the hard idea gets a diagram, not another paragraph.",
            media: { type: "image", src: "/case/airtribe-learn/framework.png", alt: "a lesson diagram splitting the easy problems from the hard problem" },
            fit: "contain",
          },
          {
            n: "02",
            title: "ask four questions, then commit",
            why: "personalising after the fact, a simplify-this button, comes too late; the lesson is already written for no one.",
            tradeoff: "four questions is four screens before anyone has read a single word.",
            result: "purpose, background, prior knowledge and depth are set once, and the lesson, its examples and how far each section pushes are written to them.",
            media: { type: "image", src: "/case/airtribe-learn/intake.png", alt: "the four-question intake before a lesson is written" },
            fit: "cover",
          },
          {
            n: "03",
            title: "draw the topic while you read it",
            why: "a lesson you read and close leaves nothing you can hold onto.",
            tradeoff: "a second, structural view of the topic to build and keep in step with the lesson.",
            result: "the map draws the concepts and their links as you go, with room for your own notes, so the shape of the topic outlives the reading.",
            media: { type: "image", src: "/case/airtribe-learn/map.png", alt: "a concept map connecting the ideas in the lesson" },
            fit: "cover",
          },
          {
            n: "04",
            title: "cite sources, not vibes",
            why: "an ai that merely sounds confident is easy to build and easy to distrust.",
            tradeoff: "every claim has to trace to something real, in the lesson and in the library.",
            result: "key sentences are footnoted, and the library gathers the sources, each marked cited and linked out.",
            media: { type: "image", src: "/case/airtribe-learn/library.png", alt: "the library of cited and further-reading sources" },
            fit: "cover",
          },
        ],
      },
      {
        /*
         * The same three moves on a phone. Cut out of the mobile prototype's
         * own captures and unframed, so they stand on the page in either
         * theme. Three separate figures rather than one composed strip: the
         * grid drops to a single column under md, and a strip of three
         * phones on a 375px screen is three phones at 100px each.
         */
        kind: "figures",
        columns: 3,
        frame: false,
        media: [
          { type: "image", src: "/case/airtribe-learn/mobile-waiting.webp", width: 822, height: 1635, alt: "kai on a phone while a lesson is being written: the opening hook in large type, ready when you are underneath it, and a start reading button" },
          { type: "image", src: "/case/airtribe-learn/mobile-map-sheet.webp", width: 822, height: 1635, alt: "the map and library arriving as a sheet over the lesson, with the concept tree listed under retrieval augmented generation" },
          { type: "image", src: "/case/airtribe-learn/mobile-concept-map.webp", width: 822, height: 1635, alt: "the concept map as a vertical tree, with cosine similarity open in a detail sheet showing what it relates to and a jump to lesson 3 button" },
        ],
        caption: "the wait, the map and library as a sheet over the lesson, and the concept map with one concept open. each of the three is a desktop answer that had to be rebuilt rather than resized.",
      },
      {
        kind: "turn",
        label: "the wait we tried to hide",
        tried: "generating a lesson takes ten to thirty seconds, and the first instinct was the usual furniture for that gap: a spinner, or a progress bar.",
        result: "a progress bar that tracks nothing is a lie, and neither it nor a spinner gives the learner anything to do. the countdown we tried next was worse than both: naming the seconds left makes the wait feel longer.",
        change: "the building screen became a wait ladder: a hook lands immediately, then the shape of the lesson assembles line by line while the rest is written, so the learner is reading before the lesson exists. a notify me hatch sits under it. the rule: dead time is a content problem before it is a loading problem.",
      },
      {
        kind: "turn",
        label: "the map that could not be shrunk",
        tried: "on desktop the concept map is an svg, with measured and word-wrapped text and collision-free tree packing. the obvious move for the phone was to scale that same svg down.",
        result: "shrunk, it is unreadable and un-tappable. the svg had already cost a layout bug, labels like 'knowledge argument (mary's room)' overflowing their nodes. the phone version was not a rendering problem, it was the wrong object.",
        change: "the phone got a different map rather than a smaller one: a native vertical tree of plain dom lists with css connector spines. it scrolls, it wraps, a tap opens a focus card. two renderings for two jobs beats one compromised for both.",
      },
      {
        kind: "constraints",
        label: "the rest of what the phone changed",
        items: [
          { label: "kai is a sheet, not a screen", text: "kai was close to becoming a separate destination, which fights the product: the lesson is the point. it became a peek and expand sheet, a line at the bottom that one tap brings up over the lesson, so the lesson never leaves." },
          { label: "the header was carrying desktop clutter", text: "teach appeared twice on the expanded sheet, and the demo badge sat on the header's map icon. the fix was not to nudge either: the header came down to brand left and map icon right, the breadcrumb went, the badge moved to the bottom. a collision is usually a density problem in a positioning costume." },
          { label: "the em dash rule did the editing", text: "the hook was written with em dashes, which the project style forbids. rewriting them as full sentence breaks made it punchier. the pre-reads spec above carries the same rule, so the smallest constraint in either system has now done editorial work twice." },
        ],
      },
      {
        kind: "panel",
        label: "a way out of the model",
        bg: "#16131F",
        fg: "#F7F6FB",
        emphasise: [0],
        paragraphs: [
          "an ai-first product that never points outside itself is asking to be trusted more than it has earned.",
        ],
      },
      {
        kind: "bleed",
        media: { type: "image", src: "/case/airtribe-learn/launch/thesis.png", alt: "a kai lesson on the hard problem of consciousness, with its concept map open beside it" },
      },
      {
        kind: "outcome",
        label: "outcome · kai",
        paragraphs: [
          "kai is a demo, and it is the honest word for it. one seeded lesson runs the full system end to end, and the intake accepts any topic.",
          "it carries no catalogue and there are no adoption or retention figures, because there is nothing yet to measure. what it demonstrates is the shape: an ai learning product can plan a lesson rather than answer a question, and the cost is four screens of intake before anyone reads a word.",
        ],
      },

      // ── close ────────────────────────────────────────────────────────────
      {
        kind: "statement",
        text: "both are defined by what they refuse. the pre-read skill refuses confetti. kai refuses to just answer. in a system that generates, the design decision worth having is almost always a subtraction.",
      },
      /*
       * The single combined outcome that used to sit here has been split in
       * two and moved: each skill now closes its own case study with its own
       * result, because a catalogue of fifty pre-reads and a one-lesson demo
       * are not the same kind of claim and reading them as one paragraph
       * invited someone to average them.
       */
      {
        kind: "deeper",
        paragraphs: [
          "the pre-reads the internal skill produces are what paid learners get, so the system and the reasoning are public here and the lessons themselves are not.",
          "the spec, the audit the eight families came out of, and the version that was built and thrown away are all things i am happy to walk through privately.",
        ],
        links: [
          { label: "open the kai demo", href: "https://willowy-blancmange-6a230b.netlify.app/" },
          { label: "get in touch", href: `mailto:${site.email}` },
        ],
      },
      { kind: "reflection", text: "i was annoyed when the first version came back as too simple, and it took me a while to hear what was being asked: not more components, but evidence we had thought about the teaching. the skill still governs only how a pre-read looks, so it can produce something on-brand and badly taught." },
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
        { label: "role", value: "design + build" },
        { label: "context", value: "self-initiated · data storytelling" },
        { label: "year", value: "2026" },
      ],
      links: [{ label: "live piece", href: "https://villain2.vercel.app" }],
    },
    /*
     * SHORT REGISTER. A side project's argument is the build, so the page
     * hands the reader the running piece four screens in and then says only
     * what the piece cannot: what it is, the thesis, why it is not another
     * chart, how it was made, the calls, and the edges.
     */
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "the bollywood villain is usually argued about one film at a time. this takes the long view: not who the villains were, but what kind of threat each decade cast as the enemy.",
          "495 films hand-sampled across ten decades, each villain tagged by archetype and by whether the threat was personal or systemic.",
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
        kind: "prototype",
        label: "try it",
        src: "https://villain2.vercel.app",
        title: "a century of villains, the live piece",
        frame: "wide",
        hint: "tap a colour in the legend to isolate one archetype across the whole century. hover a decade to get its two voices, the analytical line and the first-person one.",
        caption: "the live piece. ten decade columns, thirteen archetypes, and the sampling caveat kept in view under the chart.",
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/villains/launch/piece-mobile.png", alt: "the piece at phone width" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "a villain is a mirror. i wanted to see what ninety years of hindi cinema had been afraid of, and whether the fear had a shape. it does: the enemy stops being a man and becomes a nation, a policy, a system.",
      },
      {
        kind: "panel",
        label: "why this one is different",
        emphasise: [0],
        paragraphs: [
          "every other version of this argument is an essay about films you have seen.",
          "this one puts a number on it, then spends most of its design budget admitting how soft the number is.",
          "for the first time, the 2020s tip systemic.",
        ],
      },
      {
        kind: "constraints",
        label: "the systems thinking",
        items: [
          { label: "sample", text: "495 films across ten decades, hand-sampled rather than scraped, because there is no clean dataset of who the villain was." },
          { label: "tag", text: "each villain gets an archetype out of thirteen, and a second axis: was the threat a person, or a system." },
          { label: "weight", text: "column width is how many films a decade actually made, not how many i sampled. the chart is weighted by the industry, not by my reading list." },
          { label: "draw", text: "band height is each archetype's share of its own decade, so a decade that made forty films and one that made four hundred can still be read against each other." },
        ],
      },
      {
        kind: "decisions",
        label: "key design decisions",
        items: [
          {
            n: "01",
            title: "encode the doubt into the chart itself",
            why: "a streamgraph is a persuasive shape. left alone it makes a thinly-sourced decade look exactly as settled as a well-covered one.",
            tradeoff: "the piece is less striking than it could be, and it interrupts its own argument to say how little it knows.",
            result: "column width is tied to real output, sparse decades wear a warning glyph, and the caveat sits under the chart rather than in a footnote. most of the design was arguing with the chart about this.",
          },
          {
            n: "02",
            title: "let colour carry the thesis",
            why: "the whole finding is a drift from intimate evil to systemic evil, and a legend nobody reads cannot carry that.",
            tradeoff: "thirteen archetypes is a lot of hues to keep legible on black, so the constraint set the palette rather than the other way round.",
            result: "warm reds and ambers for personal crimes, cool blues and teals for systemic ones. the palette moves warm to cool as the century turns, so you see the argument before you read it.",
          },
          {
            n: "03",
            title: "give every decade two voices",
            why: "a chart states a fact. it rarely makes you feel one, and this subject is half mood.",
            tradeoff: "twice the copy to write, and twice the copy to keep honest.",
            result: "each decade pairs a clipped analytical line with a first-person literary one, so the number and the mood arrive in the same hover.",
          },
        ],
      },
      {
        kind: "constraints",
        label: "edge cases accounted for",
        items: [
          { label: "a decade with almost nothing in it", text: "the 1930s and 1940s are the thinnest samples in the set. they keep their real column width and wear the warning glyph, so they cannot quietly pass as evidence." },
          { label: "thirteen hues on near-black", text: "adjacent bands that read as one colour would invent a trend. the palette was built for separation at small band heights first and for prettiness second." },
          { label: "a phone in portrait", text: "a ninety-year x-axis does not fit a handset. at phone width the piece keeps the legend as the control and lets the chart scroll, rather than squeezing ten decades into 375px and making all of them illegible." },
          { label: "an archetype that barely exists", text: "colonial oppressor is most of two decades and almost none of the rest. isolating one archetype from the legend is the only way to see a band that thin, which is why the legend is interactive rather than a key." },
        ],
      },
    ],

  },


  // ──────────────────────────────────────────────────────────────── lipi ──
  lipi: {
    slug: "lipi",
    // The plugin's own ground, sampled off its panel.
    theme: { bg: "#10131A", fg: "#E8EAEE", hairline: "rgba(232,234,238,0.16)" },
    hero: {
      kicker: "figma plugin · self-initiated",
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
        { label: "role", value: "design + direction, built with ai" },
        { label: "context", value: "self-initiated · localisation testing" },
        { label: "year", value: "2026" },
      ],
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
      /*
       * Lipi keeps its long read: the edge cases ARE the product here, and
       * cutting them would cut the argument. The demo goes in early anyway,
       * because a plugin that finds layout breaks is far easier to believe
       * once you have watched it find one.
       */
      {
        kind: "prototype",
        label: "try it",
        src: "/play/lipi/index.html",
        title: "lipi, running on a simulated figma canvas",
        frame: "wide",
        hint: "tick a language, then press generate and test. the demo dictionary runs with no api key, so the whole loop works: it localizes the frames, measures what moved, and marks the components that broke.",
        caption: "the plugin running against a mock food-delivery app. the canvas is simulated; the panel, the dictionary and the detection are the real build.",
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
      kicker: "experiment · self-initiated",
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
        { label: "role", value: "design + systems, built with ai" },
        { label: "context", value: "self-initiated · experiment" },
        { label: "year", value: "2026" },
      ],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "we have unlimited access to information and very few ways to preserve the paths that lead us through it. most ai tools optimize for answers.",
          "deep cuts is a curiosity machine that turns exploration into a collectible object. you navigate a series of ai-generated connections, curating your own path, and the finished journey prints as a receipt and goes into a permanent archive. a mixtape for the mind.",
        ],
        creditsLabel: "credits",
        credits: [
          { role: "creative direction, strategy, systems architecture, ui/ux", name: "evana sajan" },
          { role: "eng development", name: "claude, openai" },
          { role: "design inspiration", name: "teenage eng." },
        ],
      },
      {
        /*
         * The slot the other four side projects give to a running prototype.
         * Deep cuts cannot fill it the same way: it needs a node server and a
         * model behind it, so there is nothing static to embed, and a fake one
         * would be worse than none. These are the three stills that carry the
         * loop instead, and the film in the fold above is the system running
         * end to end.
         *
         * They are also the first use the page makes of its own artefacts: it
         * had twenty-two and was showing one.
         */
        kind: "figures",
        label: "the loop, in three stills",
        columns: 3,
        fit: "contain",
        media: [
          { type: "image", src: "/case/deepcuts/launch/console.png", alt: "the console dial, scored like a record, with the scroll control at its centre" },
          { type: "image", src: "/case/deepcuts/launch/directions.png", alt: "choose a direction: three cards fanned out, each a different genre of connection" },
          { type: "image", src: "/case/deepcuts/launch/receipt.png", alt: "the printed mixtape receipt: the path taken, the connecting facts, and a weirdness and rarity score" },
        ],
        caption: "you turn the dial, you take one of three, and five stops later it prints. deep cuts runs on a server and a model, so unlike the other things here it cannot be embedded and played in the page; the film in the fold above is a full journey, start to receipt.",
      },
      {
        kind: "detail",
        media: { type: "image", src: "/case/deepcuts/launch/thesis.png", alt: "the deep cuts mixtape receipt" },
        fit: "contain",
        side: "right",
        title: "product thesis",
        text: "the answer is the part you forget. what you remember is the route you took to it, and no ai product gives you that to keep. deep cuts throws the answer away and prints the route.",
      },
      {
        kind: "panel",
        label: "why this one is different",
        emphasise: [1],
        paragraphs: [
          "every other ai product is racing to hand you a conclusion.",
          "this one will not give you one at all.",
          "it is the only version of an ai interface i know of where the output is an object rather than a paragraph, and where going slower is the feature.",
        ],
      },
      {
        kind: "constraints",
        label: "the systems thinking",
        items: [
          { label: "signal", text: "a journey starts from one word. numbers and non-words resolve to a random signal, and anything offensive is lifted to a larger umbrella word rather than refused." },
          { label: "directions", text: "every step offers exactly three, and each one has to belong to a distinct genre. the model is re-asked until they are genuinely different, or they are repaired deterministically." },
          { label: "the bridge fact", text: "each jump has to be justified by a specific connecting fact between the two nodes. a generic one is rejected and regenerated, because a chain of vague links is not a journey." },
          { label: "length", text: "five signal stops, then a deep cut. the end is fixed rather than open, so the artifact has a shape." },
          { label: "receipt", text: "the path, the facts, a weirdness score and a rarity score, printed and filed. stored on the server and in local storage, so the archive survives either one going away." },
        ],
      },
      {
        kind: "decisions",
        label: "key design decisions",
        items: [
          {
            n: "01",
            title: "three directions, never more",
            why: "early explorations maximized options and the result was decision paralysis. a wall of suggestions is the same as no suggestions.",
            tradeoff: "three is arbitrary and it hides most of the space. a direction you would have loved is often not on the table.",
            result: "limiting every step to three created a much stronger sense of authorship while keeping exploration open-ended. you are choosing rather than scanning.",
          },
          {
            n: "02",
            title: "end it at five, whether or not you are done",
            why: "an endless journey produces cognitive fatigue and destroys novelty. it also never produces an artifact, because nothing that does not end can be collected.",
            tradeoff: "the machine cuts you off mid-curiosity, which is exactly when you least want it to.",
            result: "five stops then a deep cut. the limit is what turns a session into an object with a beginning and an end.",
          },
          {
            n: "03",
            title: "build it as an instrument, not an app",
            why: "the interface had to argue against the speed and complexity of every other ai product, and hardware is the only visual language people already read as deliberate.",
            tradeoff: "a console with focused controls is slower to use and less legible to someone expecting a chat box.",
            result: "a hardware-era console that reveals a small set of meaningful choices at a time. the goal is not to maximize exploration but to make it intentional.",
          },
          {
            n: "04",
            title: "make the ending an object",
            why: "most exploration tools end with an answer, which is the least memorable part and cannot be kept.",
            tradeoff: "a receipt is only worth having if the journey behind it was good, so the whole system has to hold up for the artifact to mean anything.",
            result: "a mixtape-style receipt with scores, filed in a personal archive as spines you can pull out. curiosity becomes collectible.",
          },
        ],
      },
      {
        kind: "constraints",
        label: "edge cases accounted for",
        items: [
          { label: "a signal that is not a word", text: "numbers, keysmashes and empty input resolve to a random signal rather than an error, because the machine refusing to start is a worse failure than it starting somewhere unexpected." },
          { label: "a signal nobody should type", text: "offensive input is lifted to a larger umbrella concept instead of being rejected. the journey continues and the subject quietly changes." },
          { label: "the model going in a circle", text: "directions are checked against the current node and the previous one, so the machine cannot offer you a self-loop or an immediate backtrack dressed as a new direction." },
          { label: "a weak connecting fact", text: "the bridge fact is validated and regenerated up to three times. on the last attempt the best effort is accepted rather than failing the journey, because a stalled machine is worse than a soft link." },
          { label: "the model not answering at all", text: "every failure, network, timeout, malformed body, collapses to one uniform failure handled in one place, so the interface never has two different ideas about what went wrong." },
          { label: "the archive with nothing in it", text: "scores are derived deterministically from the journey rather than asked for, so a receipt never prints as zero out of zero." },
        ],
      },
    ],

  },


  // ──────────────────────────────────────────────────────────── soundmap ──
  soundmap: {
    slug: "soundmap",
    // Warm paper, read off the artifact itself.
    theme: { bg: "#EFEDE5", fg: "#1A1917", hairline: "rgba(26,25,23,0.18)" },
    hero: {
      kicker: "installable pwa · self-initiated",
      title: "soundmap",
      subtitle:
        "a daily sound journal. record one moment; it becomes a coloured artifact on a calendar.",
      media: { type: "video", src: "/case/soundmap/film.mp4", alt: "browsing the soundmap calendar and opening a day's artifact" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "role", value: "design + build" },
        { label: "context", value: "self-initiated · daily sound journal" },
        { label: "year", value: "2026" },
      ],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "once a day you record about thirty seconds. the app reads the sound and renders it as a two-colour gradient drawn from traditional japanese hues, and that artifact takes its place on a month calendar.",
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
        kind: "prototype",
        label: "try it",
        src: "/play/soundmap/index.html",
        title: "soundmap, running",
        frame: "phone",
        allow: "microphone",
        hint: "the month is already seeded, so tap any coloured day to replay it and watch the gradient re-reveal in step with the audio. recording your own asks for the microphone; decline it and everything else still works.",
        caption: "the real build, running on device. nothing you record here leaves the browser, because there is nowhere for it to go.",
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
        kind: "panel",
        label: "why this one is different",
        bg: "#1A1917",
        fg: "#EFEDE5",
        emphasise: [1],
        paragraphs: [
          "every other audio journal is a list of files you will never open.",
          "this one gives the day a face before it gives you a filename.",
          "you can recognise a tuesday in march by its colour a year later, which is the whole product.",
        ],
      },
      {
        kind: "constraints",
        label: "the systems thinking",
        items: [
          { label: "read", text: "three things are measured off the recording: loudness, instability and warmth. nothing else." },
          { label: "map", text: "loudness sets where the two colours meet, instability sets how softly they blend, warmth nudges the temperature. the mapping is fixed." },
          { label: "store", text: "audio and artifact both live in the browser's own indexeddb, on one device. there is no account and no server." },
          { label: "share", text: "a shared link carries the visual signature only. the sound is not in it." },
        ],
      },
      {
        kind: "decisions",
        label: "key design decisions",
        items: [
          {
            n: "01",
            title: "one recording a day, and no retakes",
            why: "a feed of your own moments is not a keepsake, it is a chore. unlimited capture would turn this into a voice-memo app with a nicer skin.",
            tradeoff: "you cannot fix a bad take, and a day you miss is gone. some people will find that annoying rather than meaningful.",
            result: "the record button spends itself after a single take and rests until tomorrow. the scarcity is what makes the moment worth choosing.",
          },
          {
            n: "02",
            title: "make the colour deterministic",
            why: "if the visual were random it would mean nothing, and the calendar would be wallpaper rather than a record.",
            tradeoff: "a strict mapping is much harder to design than a pretty accident, and it rules out tuning a result that comes out ugly.",
            result: "the same soundscape always resolves to the same artifact, so the colour is evidence rather than ornament.",
          },
          {
            n: "03",
            title: "keep it local by principle, not by default",
            why: "an archive of your own days should not live on someone else's server, and a sync feature would quietly make it theirs.",
            tradeoff: "no backup, no second device, and if you clear site data the year is gone.",
            result: "the audio never leaves the browser. no sync, no accounts, one device, and the acoustic reading sits behind a quiet toggle for anyone who goes looking.",
          },
        ],
      },
      {
        kind: "constraints",
        label: "edge cases accounted for",
        items: [
          { label: "a day you missed", text: "empty days still render as days. the gaps in the record are part of the record, so a month you fell off does not quietly close up." },
          { label: "a microphone you never granted", text: "the calendar, the artifacts and the replay all work without it. only the record button needs permission, and it is the last thing the app asks for rather than the first." },
          { label: "near-silence, and a fire alarm", text: "the two ends of the loudness range are where a naive mapping produces mud or a flat block. the scale is clamped so a very quiet room and a very loud one still resolve to two distinguishable colours." },
          { label: "a link sent to someone else", text: "a shared artifact is a visual signature with no audio behind it. the failure mode of a sharing feature on a private journal is that it shares the private part, so it does not carry it at all." },
        ],
      },
    ],

  },


  // ───────────────────────────────────────────────────── kochi water metro ──
  "kochi-water-metro": {
    slug: "kochi-water-metro",
    // The story layer's own ground, sampled off the app.
    theme: { bg: "#0E2C3A", fg: "#E9F1F4", hairline: "rgba(233,241,244,0.18)" },
    hero: {
      kicker: "installable pwa · independent",
      title: "kochi water metro",
      subtitle:
        "an offline-first companion for a ferry ride: the route map, plus a bilingual story that surfaces as each place drifts past.",
      media: { type: "video", src: "/case/kochi/film.mp4", alt: "a full simulated ferry journey playing out on the map" },
      mediaFit: "cover",
      mediaPosition: "center",
      mode: "launch",
      meta: [
        { label: "role", value: "design + build" },
        { label: "context", value: "independent, unaffiliated · kochi water metro" },
        { label: "year", value: "2026" },
      ],
    },
    sections: [
      {
        kind: "credits",
        label: "about",
        paragraphs: [
          "kochi's water metro crosses backwaters most apps render as blank blue. this is an independent, non-commercial companion built on the official public map: pick a boarding terminal and a destination, and a journey plays out on its own.",
          "the ferry animates along the real water channels, its status cycles from boarding to arrived, and photos and stories surface as each place passes. there is a full english version and a full malayalam one, narration included.",
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
        kind: "prototype",
        label: "try it",
        src: "/play/kochi-water-metro/index.html",
        title: "kochi water metro, along the way",
        frame: "phone",
        hint: "pick a boarding terminal and a destination, press begin, and then stop touching it. the toggle at the top right switches the whole thing, narration included, into malayalam.",
        caption: "the real build. the embedded copy has its service worker removed, since installing one from inside a portfolio page would be a rude thing to do to a visitor.",
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
        kind: "panel",
        label: "why this one is different",
        bg: "#F2F6F7",
        fg: "#0E2C3A",
        emphasise: [1],
        paragraphs: [
          "a transit app assumes you are trying to get somewhere and are late.",
          "on a ferry you have already arrived at the only decision there was.",
          "so this one spends its whole interface on the window, not on the route.",
        ],
      },
      {
        kind: "constraints",
        label: "the systems thinking",
        items: [
          { label: "map", text: "the official public route map, attributed, with hand-traced channel geometry over it so the ferry never crosses land." },
          { label: "journey", text: "you choose two terminals and the ride drives itself. status cycles boarding, under way, arrived; the interface reflects rather than waits for input." },
          { label: "stories", text: "each terminal and each stretch of water carries a landmark story and a waterway story, surfaced by position rather than by tapping." },
          { label: "language", text: "malayalam is the language of the place, not a translation of the english. every story, fact and label exists twice, and the narration doubles." },
          { label: "offline", text: "map, photos, fonts and narration are cached up front. zero external requests, and the malayalam webfont is bundled rather than fetched." },
        ],
      },
      {
        kind: "decisions",
        label: "key design decisions",
        items: [
          {
            n: "01",
            title: "no buttons to press",
            why: "you are on a boat with a phone in your hand, not at a desk. an interface that needs attention competes with the thing it is describing.",
            tradeoff: "you give up fine-grained control. you cannot skip ahead, scrub, or pull up a place you already passed.",
            result: "you choose a journey, then put the phone down. the ferry drives, the interface reflects, and the stories arrive on their own.",
          },
          {
            n: "02",
            title: "assume there is no signal",
            why: "mid-river is exactly where a connection drops, which is also exactly when the next story is due.",
            tradeoff: "everything has to be cached up front, so the first load is heavy and the content cannot be updated without a new install.",
            result: "an offline-first install caches the whole experience, narration included, and a single missing file never breaks the journey.",
          },
          {
            n: "03",
            title: "bilingual as equals, not as a setting",
            why: "a malayalam mode that is a thinner version of the english one tells a local reader exactly what the product thinks of them.",
            tradeoff: "twice the content to write, twice to keep accurate, and a recorded narration in both rather than one.",
            result: "the two versions are the same product. the font is bundled so malayalam never falls back to a system face, and the narration has a timed read-along fallback in both languages.",
          },
        ],
      },
      {
        kind: "constraints",
        label: "edge cases accounted for",
        items: [
          { label: "a terminal that is not on the route", text: "the network is a real graph rather than a list, so an impossible pair cannot be chosen and a journey with a change on the way is described as one." },
          { label: "the connection dropping mid-river", text: "the whole experience is cached before the ride starts, so losing signal halfway is indistinguishable from not losing it." },
          { label: "a missing photo or narration file", text: "a single absent asset degrades to its story text rather than failing the journey. an offline app that breaks on one 404 is not an offline app." },
          { label: "a malayalam font that never loads", text: "bundled rather than fetched, because a system fallback for malayalam is usually no malayalam at all, and the read-along fallback covers narration that will not play." },
        ],
      },
    ],

  },

};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
