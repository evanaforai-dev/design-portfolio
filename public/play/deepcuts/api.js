/*
 * DEEP CUTS — the server, running in the page.
 *
 * The live build is an express app: the browser posts to /api/journey/step and
 * /api/receipts, and node generates the step, validates it and stores the
 * receipt in sqlite. A portfolio page is a static export with nothing behind
 * it, so those two endpoints are answered here instead.
 *
 * Everything below the banner is the server's own source, concatenated with its
 * CommonJS plumbing removed -- the direction validator, the bridge-fact check,
 * the character clamps and the prompt text are byte-for-byte what runs behind
 * express, so the embedded copy cannot drift from the real one. The provider is
 * `mock`, which is the same provider the project ships with by default: it is
 * deterministic and offline, so no key is needed and nothing is sent anywhere.
 * sqlite is replaced by localStorage, which is the honest equivalent -- the
 * receipts are yours and they stay in your browser.
 */
(function () {
  "use strict";
  
  // ==========================================================================
  // server/content.js
  // ==========================================================================
  // ════════════════════════════════════════════════════════════════════════════
  //  Content length layer  (reusable)
  //  ----------------------------------------------------------------------------
  //  Maximum character lengths for every AI-generated text field, plus a clamp that
  //  enforces them as a safety net. The PROMPTS ask for concise writing (BREVITY);
  //  the ROUTE clamps the response so nothing can overflow the fixed card / receipt
  //  layout even if a model ignores the word count. One definition, imported by both
  //  prompts and the route, so limits and guidance never drift.
  // ════════════════════════════════════════════════════════════════════════════
  
  // Character caps, tuned to the visual layout:
  //   - ContentCard body: 337px wide, 16px text, ~30ch measure, min-height 490 →
  //     ~150 chars (≈ 4–5 lines) reads comfortably without crowding.
  //   - Headlines/topics are a few words.
  //   - The deep cut may run a hair longer (it's the climax) but still must fit.
  //   - Receipt "summaries" are the accumulated journey bodies, shown small.
  const LIMITS = {
    topic:        50,   // card headline / connection name
    signalFact:  150,   // opening fact about the signal
    body:        140,   // journey connecting fact (also the receipt summary lines)
    deepCutBody: 160,   // final deep-cut closing fact
  };
  
  // Trim to a hard cap WITHOUT a mid-word cut or an ellipsis (a clean sentence reads
  // as intentional; "…" reads as broken). Collapses whitespace first. Backs off to
  // the last word boundary and strips dangling punctuation.
  function clamp(text, max) {
    let s = String(text == null ? "" : text).trim().replace(/\s+/g, " ");
    if (s.length <= max) return s;
    s = s.slice(0, max);
    const lastSpace = s.lastIndexOf(" ");
    if (lastSpace > max * 0.6) s = s.slice(0, lastSpace);   // word boundary if reasonable
    return s.replace(/[\s,;:.—-]+$/, "").trim();        // no trailing punctuation/dash
  }
  
  // Shared brevity instruction injected into the prompts (single source of truth).
  const BREVITY =
    "Write ONE sentence, 12–16 words MAX. High-signal and specific — no preamble, " +
    "no hedging, no filler, no trailing clauses. Concision is the priority.";
  
  // ==========================================================================
  // server/directions.js
  // ==========================================================================
  // ════════════════════════════════════════════════════════════════════════════
  //  Direction validation layer  (reusable — req 8)
  //  ----------------------------------------------------------------------------
  //  Single source of truth for the rules every set of 3 directions must satisfy.
  //  Both the PROMPT (PROMPT_GUIDANCE) and the ROUTE (validateDirections / repair-
  //  Directions) import from here, so a prompt tweak can never drift away from
  //  enforcement. The route generates, validates, and — if needed — regenerates or
  //  repairs, so the client only ever receives a set that passes ALL rules.
  // ════════════════════════════════════════════════════════════════════════════
  
  // 12 conceptual genres → keyword sets. A label is classified by matching its
  // words against these. SYNONYM CLUSTERS that must never co-occur are encoded as
  // members of the SAME genre — so "systems/structure/patterns" all collapse to the
  // `systems` genre and get rejected together, as do "origins/history/past"
  // (historical) and "design/aesthetics/form" (design). Each keyword lives in
  // exactly ONE genre; classification takes the first genre (in this order) that
  // matches a word of the label.
  const GENRES = {
    historical:    ["history","historical","origin","origins","past","heritage","ancestry","antiquity","chronology","lineage","legacy","era"],
    psychological: ["psychology","mind","memory","emotion","cognition","perception","desire","fear","dream","trauma","instinct","attention","identity","obsession"],
    philosophical: ["philosophy","ethics","metaphysics","meaning","truth","existence","logic","morality","consciousness","epistemology","virtue","paradox"],
    technical:     ["technology","engineering","machinery","mechanics","tooling","hardware","software","instrumentation","apparatus","manufacture","automation","circuitry"],
    cultural:      ["culture","ritual","tradition","custom","folklore","cuisine","fashion","language","subculture","festival","etiquette","taboo"],
    economic:      ["economy","economics","trade","commerce","market","markets","money","finance","labor","capital","scarcity","exchange"],
    biological:    ["biology","ecology","organism","evolution","anatomy","genetics","metabolism","microbes","physiology","species","disease","fermentation"],
    political:     ["politics","power","governance","government","policy","empire","sovereignty","law","revolution","diplomacy","authority","borders","propaganda"],
    symbolic:      ["symbol","myth","mythology","icon","metaphor","allegory","semiotics","emblem","totem","archetype","omen"],
    speculative:   ["future","futures","futurism","speculative","scenario","prediction","utopia","dystopia","forecast","frontier","emergent"],
    design:        ["design","aesthetics","aesthetic","form","style","ornament","typography","craft","composition","materials","ergonomics","interface"],
    systems:       ["system","systems","structure","pattern","patterns","network","networks","infrastructure","feedback","topology","architecture","flow","logistics"],
  };
  const GENRE_ORDER = Object.keys(GENRES);
  
  // Reverse index: word → genre (built once).
  const WORD_TO_GENRE = {};
  for (const g of GENRE_ORDER) for (const w of GENRES[g]) WORD_TO_GENRE[w] = g;
  
  // ── small string helpers ─────────────────────────────────────────────────────
  const singular = (w) => w.replace(/ies$/, "y").replace(/s$/, "");
  // canonical token of a label's PRIMARY word: lowercase, letters only, singularized
  function canonical(label) {
    const first = String(label || "").trim().toLowerCase().split(/\s+/)[0] || "";
    return singular(first.replace(/[^a-z]/g, ""));
  }
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
    return d[m][n];
  }
  
  // Classify a label into one of the 12 genres, or "other" if unrecognised.
  function classifyGenre(label) {
    const words = String(label || "").toLowerCase().match(/[a-z]+/g) || [];
    for (const raw of words) {
      const w = singular(raw);
      if (WORD_TO_GENRE[w]) return WORD_TO_GENRE[w];
      if (WORD_TO_GENRE[raw]) return WORD_TO_GENRE[raw];
    }
    return "other";
  }
  
  // Two labels are "too similar" morphologically (catches dups the genre map can't,
  // e.g. Design/Designs, Pattern/Patterns, Form/Forms).
  function tooSimilar(a, b) {
    const ca = canonical(a), cb = canonical(b);
    if (!ca || !cb) return false;
    if (ca === cb) return true;                              // same root word
    if (levenshtein(ca, cb) <= 1 && Math.min(ca.length, cb.length) >= 4) return true;
    const pre = Math.min(ca.length, cb.length, 5);           // long shared prefix
    if (pre >= 5 && ca.slice(0, pre) === cb.slice(0, pre)) return true;
    return false;
  }
  
  const fail = (reason) => ({ ok: false, reason });
  
  // ── THE VALIDATION RULES (req 6) ─────────────────────────────────────────────
  // `exclude` is a list of node names already on the path (current + previous, etc.)
  // that a direction must NOT repeat — this prevents degenerate self-loops like
  // "X → X" and immediate back-tracking, keeping the journey a forward chain.
  // Returns { ok:true, directions:[...], genres:[...] } or { ok:false, reason }.
  function validateDirections(list, exclude = []) {
    if (!Array.isArray(list) || list.length !== 3)
      return fail("must be exactly 3 directions");
  
    const norm = list.map((s) => String(s == null ? "" : s).trim());
  
    // Rule 0 — no direction may repeat a node already on the path (no self-loop).
    const exSet = new Set((exclude || []).map(canonical).filter(Boolean));
    for (const s of norm)
      if (exSet.has(canonical(s))) return fail(`"${s}" repeats a node already on the path`);
  
    // Rule 1 — non-empty.
    if (norm.some((s) => s.length === 0)) return fail("a direction is empty");
  
    // Rule 2 — at most 2 words each (req 4).
    for (const s of norm) {
      if (s.split(/\s+/).length > 2) return fail(`"${s}" exceeds 2 words`);
    }
  
    // Rule 3 — no exact / plural duplicates.
    if (new Set(norm.map(canonical)).size < 3) return fail("duplicate labels");
  
    // Rule 4 — no morphological near-duplicates (synonym/stem clusters).
    for (let i = 0; i < 3; i++)
      for (let j = i + 1; j < 3; j++)
        if (tooSimilar(norm[i], norm[j])) return fail(`"${norm[i]}" ~ "${norm[j]}" too similar`);
  
    // Rule 5 — no two share a KNOWN conceptual genre (the core anti-synonym /
    // distinct-exploration-mode rule, reqs 1–3). "other" never conflicts so a
    // genuinely novel word is allowed, but it still had to pass rules 3 & 4.
    const genres = norm.map(classifyGenre);
    for (let i = 0; i < 3; i++)
      for (let j = i + 1; j < 3; j++)
        if (genres[i] !== "other" && genres[i] === genres[j])
          return fail(`"${norm[i]}" & "${norm[j]}" share genre "${genres[i]}"`);
  
    return { ok: true, directions: norm, genres };
  }
  
  // Curated fallback pool — one label per genre, all ≤2 words, used to top up a set
  // when regeneration can't produce 3 valid distinct directions (req 7: "request a
  // replacement direction").
  const FALLBACK = [
    "Memory",        // psychological
    "Infrastructure",// systems
    "Myth",          // symbolic
    "Power",         // political
    "Economics",     // economic
    "Biology",       // biological
    "Ritual",        // cultural
    "Design",        // design
    "Ethics",        // philosophical
    "Evolution",     // biological (alt)
    "Machinery",     // technical
    "Futures",       // speculative
    "Heritage",      // historical
  ];
  
  // Deterministic repair: trim each label to ≤2 words, greedily keep only labels
  // that don't collide with already-kept ones, then top up from FALLBACK choosing
  // labels whose genre is still unused. ALWAYS returns 3 valid, distinct directions.
  function repairDirections(list, seed = 0, exclude = []) {
    const trimmed = (Array.isArray(list) ? list : [])
      .map((s) => String(s == null ? "" : s).trim().split(/\s+/).slice(0, 2).join(" "))
      .filter(Boolean);
  
    const exSet = new Set((exclude || []).map(canonical).filter(Boolean));
    const kept = [];
    const usedGenres = new Set();
    const tryAdd = (label) => {
      if (kept.length >= 3) return;
      if (exSet.has(canonical(label))) return;            // never re-add a path node
      const g = classifyGenre(label);
      if (kept.some((k) => tooSimilar(k, label) || canonical(k) === canonical(label))) return;
      if (g !== "other" && usedGenres.has(g)) return;
      kept.push(label);
      if (g !== "other") usedGenres.add(g);
    };
  
    for (const l of trimmed) tryAdd(l);
    for (let i = 0; i < FALLBACK.length && kept.length < 3; i++)
      tryAdd(FALLBACK[(i + seed) % FALLBACK.length]);
  
    return kept.slice(0, 3);
  }
  
  // ── Prompt guidance (shared with journey-step.js so prompt == rules) ─────────
  const PROMPT_GUIDANCE = `DIRECTIONS — strict rules (a set of EXACTLY 3):
    - Each direction is a 1–2 WORD noun label. STRONGLY prefer a single word.
    - The 3 must be GENUINELY DIFFERENT exploration modes — pick from DIFFERENT
      conceptual genres: historical, psychological, philosophical, technical,
      cultural, economic, biological, political, symbolic, speculative, design,
      systems.
    - NO synonym clusters and NO three-of-a-kind. Reject sets that are variations
      of one idea.
        BAD:  Systems / Structure / Patterns      (all systems)
        BAD:  Origins / History / Past            (all historical)
        BAD:  Design / Aesthetics / Form          (all design)
        GOOD: Ritual / Economics / Biology
        GOOD: Memory / Infrastructure / Myth
        GOOD: Power / Design / Psychology
    - No verbs, no "Explore X" phrasing — just the concept name.
    - NEVER repeat the current concept or any concept already on the journey path —
      each direction must move the chain FORWARD to somewhere new.`;
  
  // ==========================================================================
  // server/factcheck.js
  // ==========================================================================
  // ════════════════════════════════════════════════════════════════════════════
  //  Connection-fact validation layer  (reusable)
  //  ----------------------------------------------------------------------------
  //  Every journey step's `body` is the BRIDGE between the previous concept and the
  //  newly chosen one. It must read like a genuine discovery — a real historical /
  //  scientific / cultural / linguistic / causal relationship — not a generic
  //  transition. The PROMPT asks for this (CONNECTION_GUIDANCE) and the ROUTE
  //  rejects-and-regenerates anything that fails validateConnectionFact(). One
  //  definition, imported by both, so guidance and enforcement can't drift.
  // ════════════════════════════════════════════════════════════════════════════
  
  // Phrases that signal a vague / generic / restating "non-fact". If any appears,
  // the bridge is rejected. These are the patterns called out as BAD in the spec.
  const GENERIC = [
    /\bare\s+(?:often\s+|closely\s+|deeply\s+)?related\b/i,
    /\b(?:are|is)\s+(?:closely\s+|deeply\s+)?connected\b/i,
    /\b(?:are|is)\s+linked\b/i,
    /\binvolves?\s+systems\b/i,
    /\bleads?\s+to\s+the\s+other\b/i,
    /\bone\s+can\s+lead\s+to\s+(?:the\s+)?other\b/i,
    /\binfluence[sd]?\s+(?:each\s+other|one\s+another)\b/i,
    /\brelate[sd]?\s+to\s+(?:each\s+other|one\s+another)\b/i,
    /\bin\s+many\s+ways\b/i,
    /\bhuman\s+(?:behavior|behaviour|nature)\b/i,
    /\bboth\s+(?:concepts|topics|ideas|involve|share|are|have)\b/i,
    /\bshare\s+(?:a\s+|many\s+|some\s+)?(?:connection|similarit|link|trait|theme)/i,
    /\b(?:are|is)\s+similar\b/i,
    /\bconnected\s+through\b/i,
    /\bvaguely\s+relate/i,
    /\bclosely\s+tied\b/i,
  ];
  
  // Cue words that a CONCRETE relationship is being asserted (causal / historical /
  // linguistic / influence). At least one of these — or a year, or a proper noun —
  // must be present, otherwise the sentence is too vague to be a real bridge.
  const RELATIONAL = /\b(?:inspir|shap|popular(?:iz|is)|deriv|borrow|influenc|coin|named|naming|led\b|leads\b|spark|enabl|gave\s+rise|gives\s+rise|trace[ds]?|adopt|evolv|descend|pioneer|invent|spread|transform|fuel|drove|driven|seed|emerg|formaliz|formalis|carr(?:y|ied)|reshap|sustain|fund|propel|trigger|spawn|forged|rooted|grew\s+out|begat|underpin|catalyz|catalys|exported|imported)/i;
  const YEAR = /\b(?:1\d{3}|20\d{2}|\d{1,2}(?:st|nd|rd|th)-century)\b/i;
  
  const wordCount = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;
  // A capitalized word that is NOT the first word reads as a proper noun (a place,
  // movement, person, institution) → a sign of specificity.
  function hasProperNoun(s) {
    const words = String(s || "").trim().split(/\s+/);
    return words.slice(1).some((w) => /^[A-Z][a-z]{2,}/.test(w));
  }
  
  // Returns { ok:true } or { ok:false, reason }.
  function validateConnectionFact(body) {
    const s = String(body || "").trim();
    if (wordCount(s) < 5) return { ok: false, reason: "too short to be a real bridge" };
    for (const re of GENERIC) if (re.test(s)) return { ok: false, reason: "generic/vague phrasing" };
    const specific = RELATIONAL.test(s) || YEAR.test(s) || hasProperNoun(s);
    if (!specific) return { ok: false, reason: "no specific/causal relationship asserted" };
    return { ok: true };
  }
  
  // Injected into the step prompt (single source of truth with the validator).
  const CONNECTION_GUIDANCE = `CONNECTING FACT — strict rules:
    - This is the NEXT LINK IN A CHAIN. Bridge the PREVIOUS concept to the NEWLY
      CHOSEN concept. Do NOT connect back to the original signal — each link joins
      the LAST node to the NEXT one.
    - Assert a REAL, specific relationship: prefer a historical, scientific,
      cultural, linguistic, causal, or documented-influence fact.
    - It must answer "why does the previous concept logically lead to this one?"
      with something concrete and a little surprising.
    - NO generic transitions, NO obvious observations, NO restating the two words.
        BAD:  "These ideas are often related."
        BAD:  "Both concepts involve systems."
        BAD:  "One can lead to the other."
        GOOD: "Monasteries helped popularize coffee as a tool for extended prayer and ritual."
        GOOD: "Many political movements adopted ritualized symbols to reinforce power."
        GOOD: "Biological signaling systems inspired early cybernetic theories of control."`;
  
  // ==========================================================================
  // server/prompts/journey-step.js
  // ==========================================================================
  /**
   * Prompt for a single journey step.
   *
   * INITIAL CALL (chosen = null, path = []):
   *   Returns a fact about the signal itself (signalFact) AND the first
   *   machine-proposed card (topic + body) plus 3 directions from it.
   *
   * SUBSEQUENT CALLS:
   *   Returns the next card (topic = chosen direction, body = connecting fact)
   *   plus 3 new directions from that card.
   *
   * Each card body is a SHORT, HIGH-SIGNAL CONNECTING FACT (one sentence, 12–16
   * words). The facts accumulate across the journey — each new fact builds on the
   * chain, creating a coherent narrative thread rather than isolated trivia.
   *
   * Edit the prose below freely. Variable interpolation via template literals.
   *
   * The DIRECTIONS rules (genre diversity, ≤2 words, no synonym clusters) live in
   * ../llm/directions.js; the BREVITY rule lives in ../llm/content.js. Both are
   * injected here so the prompt and the server-side validator/clamp share ONE
   * definition and can't drift apart.
   */
  
  
  
  function journeyStepPrompt({ signal, path, facts, chosenDirection }) {
    const isFirst = !chosenDirection;
  
    const chainSection = facts && facts.length > 0
      ? `\nFacts established so far (the narrative chain — build on these):\n${facts.map((f, i) => `  ${i + 1}. ${f}`).join('\n')}\n`
      : '';
  
    if (isFirst) {
      return `You are the Deep Cuts engine — a machine that surfaces unexpected conceptual connections between ideas.
  
  Original signal: "${signal}"
  
  ${BREVITY}
  
  Your task has TWO parts:
  
  PART 1 — Write a SHORT FACT about "${signal}" itself.
    - Use an unexpected, historically specific detail — not a dictionary definition
    - One confident sentence, 12–16 words
  
  PART 2 — Propose the FIRST CONNECTION: a topic that "${signal}" leads to unexpectedly.
    - A genuine conceptual leap, not the obvious next step
    - Write the connecting fact (one sentence, 12–16 words) for the FIRST link:
      "${signal}" → your topic.
  
  ${CONNECTION_GUIDANCE}
  
  ${PROMPT_GUIDANCE}
  
  Respond ONLY in JSON with this exact shape:
  {
    "signalFact": "<one sentence, ≤16 words, about ${signal}>",
    "topic": "<your proposed first connection topic>",
    "body": "<one sentence, ≤16 words: ${signal} → your topic>",
    "directions": ["<direction 1>", "<direction 2>", "<direction 3>"]
  }`;
    }
  
    return `You are the Deep Cuts engine — a machine that surfaces unexpected conceptual connections between ideas.
  
  Original signal (the START of the chain — NOT what to connect now): "${signal}"
  Journey so far: ${path.join(' → ')}${chainSection}
  PREVIOUS concept (the last node reached): "${path[path.length - 1]}"
  NEWLY CHOSEN concept (the next node): "${chosenDirection}"
  
  ${BREVITY}
  
  Write the CONNECTING FACT for THIS link: bridge the PREVIOUS concept
  "${path[path.length - 1]}" → the NEWLY CHOSEN concept "${chosenDirection}".
  Connect those TWO concepts to each other — do NOT reach back to the original
  signal "${signal}". Build naturally on the facts established so far.
  
  ${CONNECTION_GUIDANCE}
  
  Then generate 3 DIRECTIONS to explore next from "${chosenDirection}".
  
  ${PROMPT_GUIDANCE}
  
  Respond ONLY in JSON with this exact shape:
  {
    "topic": "${chosenDirection}",
    "body": "<one sentence, ≤16 words, connecting fact>",
    "directions": ["<direction 1>", "<direction 2>", "<direction 3>"]
  }`;
  };
  
  // ==========================================================================
  // server/prompts/deep-cut.js
  // ==========================================================================
  /**
   * Prompt for the final Deep Cut — the surprising destination of the journey.
   *
   * The Deep Cut should feel earned but unexpected: it connects back to the
   * origin signal in a way the user didn't see coming, informed by the full
   * chain of connecting facts. It is NOT the next obvious step — it is the
   * revelation that the whole path was leading somewhere surprising.
   *
   * Edit the prose below freely. Variable interpolation via template literals.
   * BREVITY (shared with the step prompts) keeps the closing fact tight; the route
   * additionally clamps it to LIMITS.deepCutBody so it always fits the receipt.
   */
  
  function deepCutPrompt({ signal, path, facts }) {
    const chain = facts && facts.length > 0
      ? facts.map((f, i) => `  ${i + 1}. ${f}`).join('\n')
      : '  (no facts recorded)';
  
    return `You are the Deep Cuts engine. A user has completed a concept journey.
  
  Original signal: "${signal}"
  Journey path: ${path.join(' → ')}
  
  The connecting facts they accumulated:
  ${chain}
  
  Now generate THE DEEP CUT — the final, unexpected destination of this journey.
  
  ${BREVITY}
  
  Rules:
    - The topic should be surprising but feel earned given this specific path
    - It should reframe the original signal ("${signal}") in a new, unexpected light
    - The body is ONE sentence (≤16 words) that closes the loop — connecting the last step back toward "${signal}" and recontextualising the journey
    - Do NOT pick the next obvious step. Find the concept that makes the user think "I didn't see that coming, but of course"
  
  Also assign:
    - weirdnessScore (0–100): how strange and unexpected the full journey's conceptual leaps were
    - rarityScore (0–100): how unlikely it is that another user starting at "${signal}" would have taken this exact path
  
  Respond ONLY in JSON with this exact shape:
  {
    "topic": "<the Deep Cut concept name>",
    "body": "<one sentence, ≤16 words, closing fact>",
    "weirdnessScore": <integer 0–100>,
    "rarityScore": <integer 0–100>
  }`;
  };
  
  // ==========================================================================
  // server/llm/providers/mock.js
  // ==========================================================================
  // ── Offline MOCK provider ─────────────────────────────────────────────────────
  // Returns valid, well-shaped journey content with NO LLM, NO API key, and NO
  // local model install. It exists so the COMPLETE experience can be viewed on a
  // first run with zero external setup. Switch LLM_PROVIDER to "groq" or "ollama"
  // in .env for real generation.
  //
  // The route passes only the prompt STRING to generate(), so we (a) detect which
  // of the three response shapes is expected by sniffing the prompt, and (b) lift
  // the original signal / chosen direction back out of it so the mock journey reads
  // coherently instead of generic. Shapes match what routes/journey.js validates.
  
  function hash(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }
  
  // One-word labels grouped by conceptual genre. directionsFor() picks from THREE
  // DIFFERENT genres so the mock's output already satisfies the validation rules
  // (distinct exploration modes, ≤2 words, no synonym clusters) — it never needs
  // the route's repair path. `topic` for a non-first step is still the chosen word.
  const POOL = {
    historical:    ["Origins", "Heritage", "Antiquity"],
    psychological: ["Memory", "Desire", "Obsession"],
    philosophical: ["Ethics", "Meaning", "Paradox"],
    technical:     ["Machinery", "Tooling", "Automation"],
    cultural:      ["Ritual", "Folklore", "Cuisine"],
    economic:      ["Economics", "Trade", "Scarcity"],
    biological:    ["Biology", "Evolution", "Disease"],
    political:     ["Power", "Borders", "Revolution"],
    symbolic:      ["Myth", "Metaphor", "Omens"],
    speculative:  ["Futures", "Utopias", "Frontiers"],
    design:        ["Design", "Ornament", "Materials"],
    systems:       ["Infrastructure", "Networks", "Feedback"],
  };
  const GENRE_KEYS = Object.keys(POOL);
  
  // Three deterministic directions, each from a DIFFERENT genre, seeded by prompt.
  // `exclude` holds node names already on the path — never offer them again (no
  // self-loop / backtrack), matching the route's validation.
  function directionsFor(seed, exclude = []) {
    const ex = new Set(exclude.map((s) => String(s).toLowerCase()));
    const out = [];
    const usedGenres = new Set();
    for (let i = 0; out.length < 3 && i < GENRE_KEYS.length * 3; i++) {
      const g = GENRE_KEYS[(seed + i * 5) % GENRE_KEYS.length];
      if (usedGenres.has(g)) continue;
      const bucket = POOL[g];
      // pick a word in this genre that isn't excluded
      let word = null;
      for (let k = 0; k < bucket.length; k++) {
        const w = bucket[(seed + i + k) % bucket.length];
        if (!ex.has(w.toLowerCase())) { word = w; break; }
      }
      if (!word) continue;                 // whole genre excluded → try another genre
      usedGenres.add(g);
      out.push(word);
    }
    return out;
  }
  // A representative single-word topic, seeded.
  const pick = (seed) => {
    const g = GENRE_KEYS[seed % GENRE_KEYS.length];
    return POOL[g][seed % POOL[g].length];
  };
  
  // Bridge templates connect FROM (previous node) → TO (next node) with a concrete,
  // causal/historical/linguistic framing. Each names both nodes and a relational
  // verb, so the output reads as a chain link AND passes validateConnectionFact.
  const BRIDGES = [
    (a, b) => `${a} directly gave rise to ${b}: its methods were carried into a new field.`,
    (a, b) => `Historians trace ${b} back to ${a}, where the earliest documented examples appear.`,
    (a, b) => `${a} supplied the techniques that ${b} later formalized and claimed as its own.`,
    (a, b) => `The language of ${b} was borrowed wholesale from ${a} generations earlier.`,
    (a, b) => `${a} quietly seeded ${b} once its practitioners crossed into unfamiliar territory.`,
    (a, b) => `${b} grew out of ${a} after one overlooked discovery reshaped both fields.`,
  ];
  const bridge = (a, b, seed) => BRIDGES[seed % BRIDGES.length](a, b);
  
  async function generate(prompt) {
    // Robust extraction — tolerant of extra parenthetical text after each label
    // (e.g. 'Original signal (the START ...): "Coffee"').
    const grab = (label) => (prompt.match(new RegExp(label + '[^"\\n]*"([^"]*)"')) || [])[1] || "";
    const signal = grab("Original signal") || "your signal";
    const chosen = grab("NEWLY CHOSEN concept") || grab("Chosen direction");
    const seed = hash(prompt);
  
    // FINAL deep cut — detected by the weirdness/rarity score fields in the prompt.
    // The deep cut LEGITIMATELY loops back to the origin signal (that is its job).
    if (prompt.includes("weirdnessScore")) {
      return {
        topic: `The Quiet Origin of ${signal}`,
        body: `${signal} loops back on itself — the path you took mirrors how ${signal} first spread: unnoticed, then everywhere.`,
        weirdnessScore: 40 + (seed % 56),        // 40–95
        rarityScore: 35 + ((seed >> 3) % 61),    // 35–95
      };
    }
  
    // FIRST step — the first link is genuinely signal → proposed topic.
    if (prompt.includes("signalFact")) {
      const t = pick(seed);
      return {
        signalFact: `${signal} has a longer, stranger history than its everyday use lets on.`,
        topic: t,
        body: bridge(signal, t, seed),           // signal → first connection
        directions: directionsFor(seed, [t, signal]),
      };
    }
  
    // SUBSEQUENT step — bridge the PREVIOUS node to the chosen node, NOT the signal.
    // Lift the previous node from the prompt's "PREVIOUS concept" marker (fallback:
    // the last hop of the printed "Journey so far" path).
    let prev = grab("PREVIOUS concept");
    if (!prev) {
      const journey = (prompt.match(/Journey so far: ([^\n]*)/) || [])[1] || "";
      const hops = journey.split("→").map((s) => s.trim()).filter(Boolean);
      prev = hops.length ? hops[hops.length - 1] : signal;
    }
    const topic = chosen || pick(seed);
    return {
      topic,
      body: bridge(prev, topic, seed),           // previous → chosen (the chain link)
      directions: directionsFor(seed + 5, [topic, prev]),
    };
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  server/routes/journey.js  — the retry / validate / repair loop
  // ══════════════════════════════════════════════════════════════════════════
  const MAX_STEP_ATTEMPTS = 3;

  function clampStep(c) {
    c.topic = clamp(c.topic, LIMITS.topic);
    c.body = clamp(c.body, LIMITS.body);
    if (c.signalFact != null) c.signalFact = clamp(c.signalFact, LIMITS.signalFact);
    return c;
  }

  function shapeOk(result, { isFinal, isFirstStep }) {
    if (!result || typeof result !== "object") return false;
    if (isFinal) {
      return result.topic && result.body && result.weirdnessScore != null && result.rarityScore != null;
    }
    const baseOk = result.topic && result.body && Array.isArray(result.directions) && result.directions.length === 3;
    if (!baseOk) return false;
    if (isFirstStep && !result.signalFact) return false;
    return true;
  }

  async function journeyStep(body) {
    const { signal, path, facts, chosen, isFinal } = body;

    if (!signal || typeof signal !== "string") return [400, { error: "signal is required" }];
    if (!Array.isArray(path)) return [400, { error: "path must be an array" }];

    const isFirstStep = !chosen;
    const prompt = isFinal
      ? deepCutPrompt({ signal, path, facts: facts || [] })
      : journeyStepPrompt({ signal, path, facts: facts || [], chosenDirection: chosen || null });

    if (isFinal) {
      const result = await generate(prompt);
      if (!shapeOk(result, { isFinal: true })) return [500, { error: "parse_error", retryable: true }];
      result.topic = clamp(result.topic, LIMITS.topic);
      result.body = clamp(result.body, LIMITS.deepCutBody);
      return [200, result];
    }

    let result = null;
    for (let attempt = 1; attempt <= MAX_STEP_ATTEMPTS; attempt++) {
      const candidate = await generate(prompt);
      if (!shapeOk(candidate, { isFirstStep })) continue;

      const prevNode = chosen ? path[path.length - 1] : signal;
      const exclude = [candidate.topic, prevNode];

      const dir = validateDirections(candidate.directions, exclude);
      const fact = validateConnectionFact(candidate.body);
      const isLast = attempt === MAX_STEP_ATTEMPTS;

      if (dir.ok && fact.ok) {
        candidate.directions = dir.directions;
        result = clampStep(candidate);
        break;
      }

      if (isLast) {
        candidate.directions = dir.ok
          ? dir.directions
          : repairDirections(candidate.directions, path.length, exclude);
        result = clampStep(candidate);
      }
    }

    if (!result) return [500, { error: "parse_error", retryable: true }];
    return [200, result];
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  server/routes/receipts.js  — sqlite replaced by this browser's storage
  // ══════════════════════════════════════════════════════════════════════════
  const STORE = "deepcuts.receipts";

  // Private browsing and blocked site-data both make localStorage throw on
  // access rather than return empty, so every read and write is guarded: the
  // archive then simply stays empty instead of taking the journey down with it.
  function load() {
    try {
      const raw = window.localStorage.getItem(STORE);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }
  function save(list) {
    try {
      window.localStorage.setItem(STORE, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getReceipts() {
    // sqlite returns newest first; match that ordering.
    return [200, load().slice().reverse()];
  }

  function postReceipt(b) {
    if (!b.id || !b.originSignal || !b.finalSignal || !Array.isArray(b.path)) {
      return [400, { error: "Missing required fields: id, originSignal, finalSignal, path" }];
    }
    const list = load();
    if (list.some((r) => r.id === b.id)) return [409, { error: "Receipt already exists", id: b.id }];
    list.push({
      id: b.id,
      sessionNumber: b.sessionNumber || 0,
      createdAt: b.createdAt || new Date().toISOString(),
      originSignal: b.originSignal,
      path: b.path,
      facts: b.facts || [],
      finalSignal: b.finalSignal,
      weirdnessScore: b.weirdnessScore || 0,
      rarityScore: b.rarityScore || 0,
      timestamp: b.timestamp || new Date().toLocaleString(),
    });
    save(list);
    return [201, { id: b.id, ok: true }];
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  The transport. The app's fetch calls are left exactly as written; only the
  //  two /api routes are answered here and everything else is passed through.
  // ══════════════════════════════════════════════════════════════════════════
  const realFetch = window.fetch.bind(window);

  const reply = (status, data) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { "content-type": "application/json" },
    });

  window.fetch = async function (input, init) {
    const url = typeof input === "string" ? input : input && input.url;
    const method = ((init && init.method) || (input && input.method) || "GET").toUpperCase();

    if (typeof url === "string") {
      let body = {};
      const readBody = async () => {
        if (init && typeof init.body === "string") {
          try { return JSON.parse(init.body); } catch (e) { return {}; }
        }
        return {};
      };

      if (url.indexOf("/api/journey/step") !== -1 && method === "POST") {
        body = await readBody();
        // The real thing takes a beat to answer. Returning instantly makes the
        // tuning animation snap, so hold for one frame's worth of latency.
        await new Promise((r) => setTimeout(r, 420));
        const [status, data] = await journeyStep(body);
        return reply(status, data);
      }
      if (url.indexOf("/api/receipts") !== -1) {
        if (method === "GET") { const [s, d] = getReceipts(); return reply(s, d); }
        if (method === "POST") { body = await readBody(); const [s, d] = postReceipt(body); return reply(s, d); }
      }
    }

    return realFetch(input, init);
  };
})();
