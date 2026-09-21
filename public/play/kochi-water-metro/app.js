/* ============================================================================
   Kochi Water Metro · Along the Way
   Official interactive map  +  location-aware bilingual storytelling.
   Vanilla ES module. No build step. Static hosting only.
   ============================================================================ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const SVGNS = "http://www.w3.org/2000/svg";

/* ------------------------------------------------------------------ UI copy */
/* Static + templated strings, ported verbatim from the prototype (EN + ML). */
const UI = {
  en: {
    tagline: "Along the Way", kick: "Your backwater companion",
    heroTitle: 'Every ride has<b>a story to tell.</b>',
    heroP: "Pick where you're boarding and where you're headed. We'll narrate the spots, waters, birds and hidden facts that drift past your window.",
    boardLbl: "Boarding at", offLbl: "Getting off at",
    begin: "Begin the journey",
    hintSame: "Choose two different terminals to set sail",
    hintOk: "Ready when you are — tap to begin",
    hintInvalid: "No water-metro service links these two yet — try another pair",
    boarding: "Boarding", passing: "Passing by", dest: "Destination", transfer: "Change here",
    stops: s => `${s} stop${s === 1 ? "" : "s"} · audio tour ready`,
    transferNote: (a, b, n) => `No direct boat — we'll route you ${a} → <b>${b}</b> → ${n}, changing automatically.`,
    directNote: "Direct service — no changes on the way.",
    nowIdle: "Tap play for this stop's audio tour", nowSub: "or listen to any card individually",
    storyOf: (a, b) => `Story ${a} of ${b}`, tourDone: "Tour complete", replayAny: "Replay any card anytime",
    listen: "Listen", listening: "Playing…",
    continue: "Continue journey", depart: "Depart",
    arrived: n => `You've arrived at ${n}`,
    arrivedP: "Hope the water told you something new. Every route hides its own set of stories.",
    replan: "Plan another journey",
    kindBoarding: "Now boarding", kindStop: "Now docking", kindArrival: "Journey complete",
    disc: "Stories are curated from public sources for a demo experience. Wildlife sightings are indicative of the habitat, not guaranteed on every trip. Photography: official Kochi Water Metro & Wikimedia Commons contributors (CC BY / CC BY-SA) — full credits in CREDITS.",
  },
  ml: {
    tagline: "യാത്രയ്‌ക്കൊപ്പം", kick: "നിങ്ങളുടെ കായൽ സഹയാത്രികൻ",
    heroTitle: 'ഓരോ യാത്രയ്‌ക്കും<b>ഒരു കഥ പറയാനുണ്ട്.</b>',
    heroP: "എവിടെ കയറുന്നു, എവിടെ ഇറങ്ങുന്നു എന്ന് തിരഞ്ഞെടുക്കൂ. ജനലിനരികിലൂടെ കടന്നുപോകുന്ന സ്ഥലങ്ങളും കായലുകളും പക്ഷികളും രഹസ്യ വിവരങ്ങളും ഞങ്ങൾ പറഞ്ഞുതരാം.",
    boardLbl: "കയറുന്ന ടെർമിനൽ", offLbl: "ഇറങ്ങുന്ന ടെർമിനൽ",
    begin: "യാത്ര തുടങ്ങാം",
    hintSame: "രണ്ട് വ്യത്യസ്ത ടെർമിനലുകൾ തിരഞ്ഞെടുക്കൂ",
    hintOk: "തയ്യാറാണ് — തുടങ്ങാൻ അമർത്തൂ",
    hintInvalid: "ഈ രണ്ട് ടെർമിനലുകളെ ബന്ധിപ്പിക്കുന്ന സർവീസ് ഇപ്പോൾ ഇല്ല — മറ്റൊന്ന് നോക്കൂ",
    boarding: "കയറുന്നു", passing: "കടന്നുപോകുന്നു", dest: "ലക്ഷ്യസ്ഥാനം", transfer: "ഇവിടെ മാറുക",
    stops: s => `${s} സ്റ്റോപ്പുകൾ · ഓഡിയോ ടൂർ തയ്യാർ`,
    transferNote: (a, b, n) => `നേരിട്ട് ബോട്ടില്ല — ${a} → <b>${b}</b> → ${n} എന്ന വഴി സ്വയമേവ മാറ്റിത്തരാം.`,
    directNote: "നേരിട്ടുള്ള സർവീസ് — വഴിയിൽ മാറ്റമില്ല.",
    nowIdle: "ഈ സ്റ്റോപ്പിന്റെ ഓഡിയോ ടൂറിനായി പ്ലേ അമർത്തൂ", nowSub: "അല്ലെങ്കിൽ ഓരോ കാർഡും വെവ്വേറെ കേൾക്കൂ",
    storyOf: (a, b) => `കഥ ${a} / ${b}`, tourDone: "ടൂർ പൂർത്തിയായി", replayAny: "എപ്പോൾ വേണമെങ്കിലും വീണ്ടും കേൾക്കാം",
    listen: "കേൾക്കൂ", listening: "പ്ലേ ചെയ്യുന്നു…",
    continue: "യാത്ര തുടരൂ", depart: "പുറപ്പെടൂ",
    arrived: n => `നിങ്ങൾ ${n}-ൽ എത്തി`,
    arrivedP: "കായൽ പുതിയതെന്തെങ്കിലും പറഞ്ഞുതന്നിരിക്കുമെന്ന് കരുതുന്നു. ഓരോ റൂട്ടിനും അതിന്റേതായ കഥകളുണ്ട്.",
    replan: "മറ്റൊരു യാത്ര ആസൂത്രണം ചെയ്യൂ",
    kindBoarding: "കയറുന്നു", kindStop: "അടുക്കുന്നു", kindArrival: "യാത്ര പൂർത്തിയായി",
    disc: "ഈ കഥകൾ ഒരു ഡെമോയ്‌ക്കായി പൊതു സ്രോതസ്സുകളിൽ നിന്ന് തയ്യാറാക്കിയതാണ്. പക്ഷി ദർശനങ്ങൾ ആ പ്രദേശത്തിന്റെ സ്വഭാവം സൂചിപ്പിക്കുന്നു, എല്ലാ യാത്രയിലും ഉറപ്പില്ല. ചിത്രങ്ങൾ: ഔദ്യോഗിക കൊച്ചി വാട്ടർ മെട്രോ & വിക്കിമീഡിയ കോമൺസ് (CC BY / CC BY-SA) — വിശദ വിവരങ്ങൾ CREDITS-ൽ.",
  },
};

/* Observation-prompt banners — short, authored to complement the prototype
   (new bilingual copy, kept in the prototype's voice). Keyed by terminal. */
const OBS = {
  highcourt:   { en: "Look right — Marine Drive's promenade hugs the shore.", ml: "വലത്തേക്ക് നോക്കൂ — മറൈൻ ഡ്രൈവ് നടപ്പാത തീരത്തോട് ചേർന്ന്." },
  vypin:       { en: "Watch the water — fishing boats and the island lighthouse.", ml: "വെള്ളം ശ്രദ്ധിക്കൂ — മീൻപിടിത്ത വള്ളങ്ങളും ദ്വീപിലെ ലൈറ്റ്ഹൗസും." },
  fortkochi:   { en: "Ahead — the cantilevered Chinese fishing nets.", ml: "മുന്നിൽ — പ്രശസ്തമായ ചീനവലകൾ." },
  mattancherry:{ en: "Breathe in — warehouses still scented with pepper.", ml: "ശ്വസിക്കൂ — കുരുമുളക് സുഗന്ധം പേറുന്ന ഗോഡൗണുകൾ." },
  willingdon:  { en: "To your right — the docks of a great artificial island.", ml: "വലത്ത് — വലിയ കൃത്രിമ ദ്വീപിന്റെ തുറമുഖം." },
  schittoor:   { en: "Notice the banks softening from city into backwater.", ml: "കര നഗരത്തിൽ നിന്ന് കായലിലേക്ക് അലിയുന്നത് ശ്രദ്ധിക്കൂ." },
  cheranalloor:{ en: "Palm-lined banks and quiet country boats drift past.", ml: "തെങ്ങിൻ കരകളും ശാന്ത നാടൻ വള്ളങ്ങളും കടന്നുപോകുന്നു." },
  eloor:       { en: "The Periyar widens along this northern edge.", ml: "ഈ വടക്കൻ അതിരിൽ പെരിയാർ വിശാലമാകുന്നു." },
  vyttila:     { en: "Behind you — Kerala's busiest mobility hub.", ml: "പിന്നിൽ — കേരളത്തിലെ ഏറ്റവും തിരക്കേറിയ ഹബ്." },
  kakkanad:    { en: "Look for kingfishers on the mangrove fringe.", ml: "കണ്ടൽക്കാടിന്റെ അരികിൽ മീൻകൊത്തിയെ തിരയൂ." },
};

/* Live journey-status copy — small system messages that reassure, not stories. */
const JSTATUS = {
  en: {
    boarding: t => `Boarding at ${t}`, departAt: tm => `Scheduled departure · ${tm}`,
    departing: t => `Departing ${t}`, leaving: "The boat is leaving the terminal…",
    enroute: "En route", cruisingTo: t => `Cruising towards ${t}`,
    approaching: t => `Approaching ${t}`, arriveIn: m => `Arrival in about ${m} min`,
    calling: t => `Calling at ${t}`, change: "A brief stop · continuing automatically",
    arrived: "Arrived", welcome: t => `Welcome to ${t}`,
  },
  ml: {
    boarding: t => `${t}-ൽ കയറുന്നു`, departAt: tm => `നിശ്ചയിച്ച സമയം · ${tm}`,
    departing: t => `${t} വിട്ട് പുറപ്പെടുന്നു`, leaving: "ബോട്ട് ടെർമിനൽ വിടുന്നു…",
    enroute: "യാത്രയിൽ", cruisingTo: t => `${t}-ലേക്ക് നീങ്ങുന്നു`,
    approaching: t => `${t} അടുക്കുന്നു`, arriveIn: m => `ഏകദേശം ${m} മിനിറ്റിൽ എത്തും`,
    calling: t => `${t}-ൽ നിർത്തുന്നു`, change: "ചെറിയ നിർത്തം · സ്വയമേവ തുടരും",
    arrived: "എത്തി", welcome: t => `${t}-ലേക്ക് സ്വാഗതം`,
  },
};
const ARR = {
  en: { thanks: "Thank you for travelling with Kochi Water Metro.", nearby: "Nearby highlights", explore: "Continue exploring Kochi…" },
  ml: { thanks: "കൊച്ചി വാട്ടർ മെട്രോയിൽ യാത്ര ചെയ്തതിന് നന്ദി.", nearby: "സമീപ കാഴ്ചകൾ", explore: "കൊച്ചി കൂടുതൽ ആസ്വദിക്കൂ…" },
};
/* Nearby highlights at each terminal — real landmarks, [icon, EN, ML]. */
const HIGHLIGHTS = {
  fortkochi: [["🎣", "Chinese Fishing Nets", "ചീനവല"], ["🏖", "Fort Kochi Beach", "ഫോർട്ട് കൊച്ചി ബീച്ച്"], ["⛪", "St. Francis Church", "സെന്റ് ഫ്രാൻസിസ് പള്ളി"]],
  highcourt: [["🌆", "Marine Drive walkway", "മറൈൻ ഡ്രൈവ്"], ["🌉", "Rainbow Bridge", "റെയിൻബോ പാലം"], ["🛍", "Broadway market", "ബ്രോഡ്‌വേ മാർക്കറ്റ്"]],
  vypin: [["🗼", "Vypin Lighthouse", "വൈപ്പിൻ ലൈറ്റ്ഹൗസ്"], ["🏖", "Cherai Beach", "ചെറായി ബീച്ച്"], ["🐟", "Fishing harbours", "മത്സ്യബന്ധന തുറമുഖം"]],
  mattancherry: [["🕍", "Paradesi Synagogue", "പരദേശി സിനഗോഗ്"], ["🏛", "Mattancherry Palace", "മട്ടാഞ്ചേരി കൊട്ടാരം"], ["🛒", "Jew Town antiques", "ജൂത തെരുവ്"]],
  vyttila: [["🚌", "Vyttila Mobility Hub", "വൈറ്റില മൊബിലിറ്റി ഹബ്"], ["🌿", "Chilavannoor backwaters", "ചിലവന്നൂർ കായൽ"]],
  kakkanad: [["💻", "Infopark", "ഇൻഫോപാർക്ക്"], ["🌿", "Kadambrayar eco-zone", "കടമ്പ്രയാർ"], ["🏙", "SmartCity", "സ്മാർട്ട് സിറ്റി"]],
  schittoor: [["🚣", "Riverine island walks", "ദ്വീപ് നടത്തം"], ["🌅", "Backwater sunsets", "കായൽ സൂര്യാസ്തമയം"]],
  eloor: [["🌊", "Periyar riverfront", "പെരിയാർ തീരം"]],
  willingdon: [["⚓", "Willingdon Island docks", "വെല്ലിംഗ്ടൺ തുറമുഖം"]],
  cheranalloor: [["🌿", "Riverside village", "നദീതീര ഗ്രാമം"]],
};

/* Cinematic narration for the two official terminals that lacked a prototype story —
   written in the calm local-guide voice (replaces the encyclopedia-style official text). */
const CINEMATIC = {
  "Willingdon Island": {
    en: { t: "Willingdon Island", p: "As we pull alongside Willingdon Island, you're arriving at one of India's largest man-made islands — dry land conjured entirely from the mud dredged up while deepening Kochi's great harbour a century ago. Watch the quays slide past: this is still a working port, its warehouses and naval jetties humming with the quiet business of the sea." },
    ml: { t: "വെല്ലിംഗ്ടൺ ദ്വീപ്", p: "വെല്ലിംഗ്ടൺ ദ്വീപിനരികിലേക്ക് നാം അടുക്കുമ്പോൾ, ഇന്ത്യയിലെ ഏറ്റവും വലിയ കൃത്രിമ ദ്വീപുകളിലൊന്നിലാണ് നിങ്ങൾ എത്തുന്നത് — ഒരു നൂറ്റാണ്ട് മുമ്പ് കൊച്ചി തുറമുഖം ആഴത്തിലാക്കിയപ്പോൾ കോരിയെടുത്ത ചെളിയിൽ നിന്ന് രൂപപ്പെട്ട കര. ഇന്നും തിരക്കുള്ള തുറമുഖമാണിത് — ഗോഡൗണുകളും കപ്പൽക്കടവുകളും കടലിന്റെ ശാന്ത വ്യാപാരത്താൽ മുഖരിതം." },
  },
  "Cheranalloor": {
    en: { t: "Cheranalloor", p: "We're drifting past Cheranalloor now — a quiet riverside suburb where backwater life still keeps its own unhurried rhythm. Country boats nose along the banks, coconut palms lean out over the water, and the little jetties sit worn smooth by generations of crossings." },
    ml: { t: "ചേരാനല്ലൂർ", p: "നാം ഇപ്പോൾ ചേരാനല്ലൂരിനരികിലൂടെ ഒഴുകുന്നു — കായൽ ജീവിതം അതിന്റെ സ്വന്തം ശാന്തതാളം കാത്തുസൂക്ഷിക്കുന്ന ഒരു നദീതീര ഗ്രാമം. നാടൻ വള്ളങ്ങൾ കരയോട് ചേർന്ന്, തെങ്ങുകൾ വെള്ളത്തിലേക്ക് ചാഞ്ഞ്, തലമുറകളുടെ യാത്രകളാൽ മിനുസമായ ചെറു ജെട്ടികൾ." },
  },
};

/* Subtle ambient sound — soft chimes on story unlock / arrival. Web Audio, unlocked
   by the first user gesture (the Begin tap). Degrades silently. */
const Sound = (() => {
  let ctx = null;
  const ensure = () => { if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; } } if (ctx && ctx.state === "suspended") ctx.resume(); return ctx; };
  const tone = (f, t0, dur, vol, type = "sine") => { const c = ctx; if (!c) return; const o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = f; o.connect(g); g.connect(c.destination); g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); o.start(t0); o.stop(t0 + dur + 0.02); };
  return {
    unlock() { ensure(); },
    story() { if (!ensure()) return; const t = ctx.currentTime; tone(659, t, 0.55, 0.035); tone(988, t + 0.07, 0.6, 0.025); },
    depart() { if (!ensure()) return; const t = ctx.currentTime; tone(494, t, 0.4, 0.03); tone(659, t + 0.08, 0.5, 0.022); },
    arrive() { if (!ensure()) return; const t = ctx.currentTime; [523, 659, 784].forEach((f, i) => tone(f, t + i * 0.13, 0.7, 0.04)); },
  };
})();

/* card image resolver — real photos only (official terminal photography today;
   thematic photos slot in by key later without code changes). */
const TERM_PHOTO = {
  highcourt: "highcourt.jpg", vypin: "vypin.jpg", fortkochi: "fort_kochi.jpeg",
  mattancherry: "mattancherry.jpeg", willingdon: "willingdon_island.jpg",
  schittoor: "south_chittoor.jpeg", cheranalloor: "cheranalloor.jpeg",
  eloor: "eloor.jpeg", vyttila: "vytilla.jpg", kakkanad: "kakkanad.jpg",
};
// "netKey:cardIdx" -> thematic photo (assets/images/story). Openly-licensed, real
// Kochi photography (Wikimedia Commons — see CREDITS.md). Cards without an entry
// fall back to the terminal's official photo.
const CARD_IMG = {
  "highcourt:0": "marine_drive.jpg",   // Marine Drive Waterfront
  "highcourt:1": "harbour.jpg",        // The Cochin Harbour
  "highcourt:2": "brahminy_kite.jpg",  // Watch for Brahminy Kites
  "vypin:1": "fishing_village.jpg",    // Fishing-village Kerala
  "fortkochi:0": "chinese_nets.jpg",   // Chinese Fishing Nets
  "mattancherry:0": "spice.jpg",       // The Spice Quarter
  "mattancherry:1": "synagogue.jpg",   // Palace & Synagogue
  "mattancherry:2": "jewtown.jpg",     // Jew Town
  "vyttila:2": "backwater.jpg",        // Inland backwaters
  "kakkanad:1": "mangrove.jpg",        // Kadambrayar Eco-Zone
  "kakkanad:2": "kingfisher.jpg",      // Kingfishers & egrets
  "schittoor:1": "egret.jpg",          // Whistling ducks at dusk
};
function imgFor(netKey, idx) {
  const override = CARD_IMG[`${netKey}:${idx}`];
  if (override) return `assets/images/story/${override}`;
  return `assets/images/terminals/${TERM_PHOTO[netKey] || "highcourt.jpg"}`;
}

/* badges (from prototype) */
const BADGE = {
  spot:   { en: "Landmark", ml: "സ്ഥലം",     cls: "b-spot",    ic: "📍" },
  water:  { en: "Waterway", ml: "കായൽ",       cls: "b-water",   ic: "💧" },
  bird:   { en: "Wildlife", ml: "പക്ഷികൾ",    cls: "b-bird",    ic: "🪶" },
  eco:    { en: "Eco impact", ml: "പരിസ്ഥിതി", cls: "b-eco",    ic: "🌱" },
  culture:{ en: "Heritage", ml: "പൈതൃകം",     cls: "b-culture", ic: "🏛" },
};

/* ------------------------------------------------------------------- state */
let LANG = "en";
let NET, STORIES, OFFICIAL, MAP;   // loaded data + svg element
let ADJ = {};                       // graph adjacency: term -> [{to, edge}]
const state = { route: null, legs: null, idx: 0, camReq: null };

/* =================================================================== BOOT */
boot();
async function boot() {
  try {
    const [net, stories, official, svgText] = await Promise.all([
      fetch("assets/data/network.json").then(r => r.json()),
      fetch("assets/data/stories.json").then(r => r.json()),
      fetch("assets/data/official_terminals.json").then(r => r.json()),
      fetch("assets/svg/map.local.svg").then(r => r.text()),
    ]);
    NET = net; STORIES = stories; OFFICIAL = official;
    injectMap(svgText);
    buildGraph();
    setupPlanner();
    setLang("en");
    setTimeout(() => $("#boot").classList.add("gone"), 250);
  } catch (e) {
    console.error(e);
    $("#boot").innerHTML = `<div style="color:#7fe3ef;font:14px system-ui;padding:24px;text-align:center">Couldn't load the map.<br><small style="opacity:.7">Serve the folder over http (not file://).</small></div>`;
  }
}

/* ------------------------------------------------------------- map inject */
function injectMap(svgText) {
  $("#map").innerHTML = svgText;
  MAP = $("#map svg");
  MAP.removeAttribute("style");
  MAP.setAttribute("preserveAspectRatio", "xMidYMid slice");
  MAP.classList.add("focusing");
  // veil to focus the active route during a journey (added on start)
  camera.base = NET.viewBox.slice();
  setViewBox(camera.base);
  camera.cur = camera.base.slice();
}

/* --------------------------------------------------------------- graph */
function buildGraph() {
  Object.keys(NET.terminals).forEach(t => (ADJ[t] = []));
  NET.edges.forEach(e => {
    ADJ[e.a].push({ to: e.b, edge: e });
    ADJ[e.b].push({ to: e.a, edge: e });
  });
}
/* BFS shortest path (fewest hops) → array of terminal keys, or null */
function planRoute(from, to) {
  if (from === to) return null;
  const prev = { [from]: null }, q = [from];
  while (q.length) {
    const u = q.shift();
    if (u === to) break;
    for (const { to: v } of ADJ[u]) if (!(v in prev)) { prev[v] = u; q.push(v); }
  }
  if (!(to in prev)) return null;
  const path = []; let c = to;
  while (c !== null) { path.unshift(c); c = prev[c]; }
  return path;
}
function edgeBetween(a, b) {
  const link = ADJ[a].find(x => x.to === b);
  return link ? link.edge : null;
}

/* ============================================================ PLANNER */
function setupPlanner() {
  buildSelects();
  $("#from").onchange = $("#to").onchange = validate;
  $("#swap").onclick = () => { const a = $("#from").value; $("#from").value = $("#to").value; $("#to").value = a; validate(); };
  $("#start").onclick = startJourney;
  $("#back").onclick = goPlanner;
  $$(".langsw button").forEach(b => (b.onclick = () => setLang(b.dataset.lang)));
  // sensible defaults: the flagship green route
  $("#from").value = "highcourt"; $("#to").value = "fortkochi";
}
function termName(key) { return NET.terminals[key][LANG] || NET.terminals[key].en; }
function buildSelects() {
  const keep = { f: $("#from").value, t: $("#to").value };
  const opts = Object.keys(NET.terminals)
    .map(k => ({ k, n: termName(k) }))
    .sort((a, b) => a.n.localeCompare(b.n));
  const html = opts.map(o => `<option value="${o.k}">${o.n}</option>`).join("");
  $("#from").innerHTML = html; $("#to").innerHTML = html;
  $("#from").value = keep.f || "highcourt"; $("#to").value = keep.t || "fortkochi";
  $("#from").classList.toggle("lang-ml", LANG === "ml");
  $("#to").classList.toggle("lang-ml", LANG === "ml");
}
function validate() {
  const u = UI[LANG], from = $("#from").value, to = $("#to").value;
  const note = $("#routeNote");
  if (from === to) {
    $("#start").disabled = true; $("#hint").textContent = u.hintSame; note.classList.remove("show"); return;
  }
  const route = planRoute(from, to);
  if (!route) {
    $("#start").disabled = true; $("#hint").textContent = u.hintInvalid; note.classList.remove("show"); return;
  }
  $("#start").disabled = false; $("#hint").textContent = u.hintOk;
  // transfer preview
  if (route.length > 2) {
    const mids = route.slice(1, -1).map(termName).join(" → ");
    note.innerHTML = u.transferNote(termName(from), mids, termName(to));
  } else {
    note.innerHTML = u.directNote;
  }
  note.classList.toggle("lang-ml", LANG === "ml");
  note.classList.add("show");
}

/* --------------------------------------------------------------- language */
function setLang(l) {
  LANG = l;
  const u = UI[l];
  document.documentElement.lang = l === "ml" ? "ml" : "en";
  $$(".langsw button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  document.body.classList.toggle("lang-ml", l === "ml");
  // static strings
  $('[data-i="tagline"]').textContent = u.tagline;
  $('[data-i="kick"]').textContent = u.kick;
  $("#heroTitle").innerHTML = u.heroTitle;
  $('[data-i="heroP"]').textContent = u.heroP;
  $('[data-i="begin"]').textContent = u.begin;
  $('[data-i="boardLbl"] .lbltxt').textContent = u.boardLbl;
  $('[data-i="offLbl"] .lbltxt').textContent = u.offLbl;
  $$(".field-label").forEach(el => el.classList.toggle("lang-ml", l === "ml"));
  buildSelects();
  validate();
  // re-localize an in-progress journey without interrupting it
  if (!$("#s-journey").classList.contains("hide") && state.route) {
    $("#r-from").textContent = termName(state.route[0]);
    $("#r-to").textContent = termName(state.route[state.route.length - 1]);
    $("#r-meta").textContent = u.stops(state.route.length); $("#r-meta").classList.toggle("lang-ml", l === "ml");
    renderRail();
    if (state.curStation != null) setCurrentStation(state.curStation);
    reapplyStatus();
    if ($("#arrivalSheet").classList.contains("show")) showArrival(state.route[state.route.length - 1]);
  }
}

/* ============================================================ CAMERA */
const camera = { base: null, cur: null, target: null };
function setViewBox(vb) { MAP.setAttribute("viewBox", vb.map(n => +n.toFixed(1)).join(" ")); }
function aspect() { const r = $("#app").getBoundingClientRect(); return r.height / r.width; }
/* frame centred on (x,y) with view width w (SVG units), clamped to the map so the
   camera never drifts off into empty water */
function frame(x, y, w) {
  const h = w * aspect();
  const [VX, VY, VW, VH] = NET.viewBox, pad = 70;
  let vx = x - w / 2, vy = y - h / 2;
  if (w < VW + 2 * pad) vx = Math.max(VX - pad, Math.min(vx, VX + VW - w + pad));
  if (h < VH + 2 * pad) vy = Math.max(VY - pad, Math.min(vy, VY + VH - h + pad));
  return [vx, vy, w, h];
}
function frameBounds(pts, pad) {
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  pts.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const w = Math.max((x1 - x0) + pad * 2, ((y1 - y0) + pad * 2) / aspect());
  return frame(cx, cy, w);
}
function camTo(vb, snap) { camera.target = vb.slice(); if (snap) { camera.cur = vb.slice(); setViewBox(camera.cur); } startCam(); }
function startCam() {
  if (state.camReq) return;
  const step = () => {
    const c = camera.cur, t = camera.target;
    let moved = false;
    for (let i = 0; i < 4; i++) { const d = t[i] - c[i]; if (Math.abs(d) > 0.5) { c[i] += d * 0.12; moved = true; } else c[i] = t[i]; }
    setViewBox(c);
    if (moved) state.camReq = requestAnimationFrame(step);
    else state.camReq = null;
  };
  state.camReq = requestAnimationFrame(step);
}

/* ============================================================ JOURNEY */
function orient(points, from) {
  const pts = points.map(p => p.slice());
  const t = NET.terminals[from].svg;
  if (dist(pts[pts.length - 1], t) < dist(pts[0], t)) pts.reverse();
  return pts;
}
function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }

/* ---- autonomous journey timeline: the ferry drives; the app reflects it ---- */
const JT = { timers: [], raf: null, alive: false };
function jClear() { JT.timers.forEach(clearTimeout); JT.timers = []; if (JT.raf) cancelAnimationFrame(JT.raf); JT.raf = null; JT.alive = false; player.stop(); }
function jWait(ms, fn) { const id = setTimeout(() => { if (JT.alive) fn(); }, ms); JT.timers.push(id); return id; }
function departureTime() { const d = new Date(); d.setMinutes(d.getMinutes() + 2); let h = d.getHours(); const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12; return `${h}:${String(d.getMinutes()).padStart(2, "0")} ${ap}`; }

function startJourney() {
  const from = $("#from").value, to = $("#to").value;
  const route = planRoute(from, to);
  if (!route) return;
  Sound.unlock();                                   // audio unlocked by this tap
  state.route = route; state.departAt = departureTime();
  state.legs = [];
  for (let i = 0; i < route.length - 1; i++) {
    const e = edgeBetween(route[i], route[i + 1]);
    const leg = { from: route[i], to: route[i + 1], route: orient(e.pts, route[i]), nav: orient(e.nav || e.pts, route[i]) };
    leg.mins = Math.max(2, Math.round(polyLen(leg.nav) / 130));
    state.legs.push(leg);
  }
  $("#r-from").textContent = termName(from);
  $("#r-to").textContent = termName(to);
  const meta = $("#r-meta"); meta.textContent = UI[LANG].stops(route.length); meta.classList.toggle("lang-ml", LANG === "ml");

  drawHighlight(); renderRail();
  $("#s-plan").classList.add("hide"); $("#s-journey").classList.remove("hide");
  hideSheet(); hideArrival(); hideFloat(); hideObs();

  camTo(frameBounds(state.legs.flatMap(l => l.nav), 300), true);
  placeBoat(NET.terminals[from].svg, headingAt(state.legs[0].nav, 0));
  jClear(); JT.alive = true;
  jWait(1500, () => runBoarding(0));
}

function goPlanner() {
  jClear();
  hideSheet(); hideArrival(); hideFloat(); hideObs(); hideStatus();
  removeHighlight();
  $("#s-journey").classList.add("hide"); $("#s-plan").classList.remove("hide");
  camTo(camera.base, false);
  state.route = null; state.status = null;
}

/* ---- the timeline phases (all automatic — no user progression) ---- */
const Z_BOARD = 900, Z_CRUISE = 860, Z_DOCK = 880, Z_ARR = 820;

function runBoarding(ti) {
  if (!JT.alive) return;
  const key = state.route[ti];
  setCurrentStation(ti);
  camTo(frame(...NET.terminals[key].svg, Z_BOARD));
  placeBoat(NET.terminals[key].svg, headingAt(state.legs[0].nav, 0));
  setStatus("boarding", key);
  rippleAt(NET.terminals[key].svg); Sound.story();
  jWait(500, () => showTerminalStory(ti, true, () => runDepart(ti)));
}
function runDepart(ti) {
  if (!JT.alive) return;
  setStatus("departing", state.route[ti]); Sound.depart();
  hideSheet();
  jWait(2600, () => runCruise(ti));
}
function runCruise(li) {
  if (!JT.alive) return;
  const leg = state.legs[li], toKey = leg.to;
  markRail(li, "cruising");
  setStatus("enroute", toKey);
  const dur = Math.min(15000, Math.max(6500, polyLen(leg.nav) * 9));   // calm, deliberate
  let start = null, obsShown = false, transitShown = false, approachShown = false;
  const step = ts => {
    if (!JT.alive) return;
    if (start === null) start = ts;
    let t = (ts - start) / dur; if (t > 1) t = 1;
    const e = easeInOut(t);
    const pos = ptAlong(leg.nav, e);
    placeBoat(pos, headingAlong(leg.nav, e));
    camTo(frame(pos[0], pos[1], Z_CRUISE + 90 * Math.sin(t * Math.PI)));
    const seg = $$("#rail .seg")[li]; if (seg) seg.style.background = `linear-gradient(90deg,var(--aqua) ${(e * 100).toFixed(1)}%,rgba(127,227,239,.28) ${(e * 100).toFixed(1)}%)`;
    if (!obsShown && e >= 0.26) { obsShown = true; rippleAt(pos); jWait(300, () => showObs(toKey)); }
    if (!transitShown && e >= 0.52) { transitShown = true; rippleAt(ptAlong(leg.nav, 0.55)); jWait(300, () => showTransit(toKey)); }   // boat keeps moving
    if (!approachShown && e >= 0.82) { approachShown = true; setStatus("approaching", toKey, Math.max(1, Math.round(leg.mins * 0.3))); }
    if (t < 1) JT.raf = requestAnimationFrame(step);
    else { JT.raf = null; hideObs(); arriveLeg(li); }
  };
  JT.raf = requestAnimationFrame(step);
}
function arriveLeg(li) {
  if (!JT.alive) return;
  const ti = li + 1;
  markRail(li, "done"); setCurrentStation(ti);
  jWait(700, () => hideFloat());
  if (ti === state.route.length - 1) jWait(500, () => runArrival(ti));
  else jWait(400, () => runDock(ti));
}
function runDock(ti) {
  if (!JT.alive) return;
  const key = state.route[ti];
  camTo(frame(...NET.terminals[key].svg, Z_DOCK));
  setStatus("calling", key);
  rippleAt(NET.terminals[key].svg); Sound.story();
  jWait(400, () => showTerminalStory(ti, false, () => runDepart(ti)));
}
function runArrival(ti) {
  if (!JT.alive) return;
  const key = state.route[ti];
  camTo(frame(...NET.terminals[key].svg, Z_ARR));
  setCurrentStation(ti, true);
  setStatus("arrived", key); Sound.arrive();
  jWait(600, () => showArrival(key));
}

/* ---- live status (semantic → localized, re-derivable on language switch) ---- */
function setStatus(type, key, extra) {
  state.status = { type, key, extra };
  const J = JSTATUS[LANG], t = key ? termName(key) : "";
  let dot = "move", title = "", sub = "";
  if (type === "boarding") { dot = "board"; title = J.boarding(t); sub = J.departAt(state.departAt); }
  else if (type === "departing") { dot = "move"; title = J.departing(t); sub = J.leaving; }
  else if (type === "enroute") { dot = "move"; title = J.enroute; sub = J.cruisingTo(t); }
  else if (type === "approaching") { dot = "near"; title = J.approaching(t); sub = J.arriveIn(extra); }
  else if (type === "calling") { dot = "near"; title = J.calling(t); sub = J.change; }
  else if (type === "arrived") { dot = "done"; title = J.arrived; sub = J.welcome(t); }
  const st = $("#jstatus"), txt = $(".js-txt");
  const apply = () => {
    $("#jsDot").className = "js-dot " + dot;
    const tt = $("#jsTitle"); tt.textContent = title; tt.classList.toggle("lang-ml", LANG === "ml");
    const ss = $("#jsSub"); ss.textContent = sub; ss.classList.toggle("lang-ml", LANG === "ml");
    txt.style.opacity = "1";
  };
  if (st.classList.contains("show")) { txt.style.opacity = "0"; clearTimeout(st._f); st._f = setTimeout(apply, 220); }  // gentle crossfade
  else { apply(); st.classList.add("show"); }
}
function reapplyStatus() { if (state.status) setStatus(state.status.type, state.status.key, state.status.extra); }
function hideStatus() { $("#jstatus").classList.remove("show"); }

/* ---- map micro-motion: current station glows/pulses, passed ones fade ---- */
function setCurrentStation(ti, strong) {
  state.curStation = ti;
  $$("#jOverlay .st-node").forEach((n, k) => n.classList.toggle("passed", k < ti));
  const p = document.getElementById("stPulse");
  if (p) { const [x, y] = NET.terminals[state.route[ti]].svg; p.setAttribute("cx", x); p.setAttribute("cy", y); p.setAttribute("stroke", strong ? "#4bb06a" : "#26c6da"); p.style.display = ""; }
}
function rippleAt(pos) {
  if (!gOverlay) return;
  const r = document.createElementNS(SVGNS, "circle");
  r.setAttribute("cx", pos[0]); r.setAttribute("cy", pos[1]); r.setAttribute("r", 6);
  r.setAttribute("fill", "none"); r.setAttribute("stroke", "#7fe3ef"); r.setAttribute("stroke-width", 3);
  r.innerHTML = `<animate attributeName="r" values="6;44" dur="0.9s" fill="freeze"/><animate attributeName="opacity" values="0.7;0" dur="0.9s" fill="freeze"/>`;
  gOverlay.appendChild(r);
  setTimeout(() => r.remove(), 950);
}

/* ---- route highlight + veil + boat sprite (SVG overlay) ---- */
let gOverlay;
function drawHighlight() {
  removeHighlight();
  gOverlay = document.createElementNS(SVGNS, "g");
  gOverlay.setAttribute("id", "jOverlay");
  // veil dims the rest of the network
  const veil = document.createElementNS(SVGNS, "rect");
  const [vx, vy, vw, vh] = NET.viewBox;
  veil.setAttribute("x", vx); veil.setAttribute("y", vy);
  veil.setAttribute("width", vw); veil.setAttribute("height", vh);
  veil.setAttribute("fill", "#eef7f8"); veil.setAttribute("opacity", "0.32");   // dim slightly, keep geography
  gOverlay.appendChild(veil);

  const d = "M" + state.legs.flatMap(l => l.route).map(p => p.join(" ")).join(" L");
  const glow = mkPath(d); glow.setAttribute("id", "routeHiGlow");
  const hi = mkPath(d); hi.setAttribute("id", "routeHi");
  gOverlay.appendChild(glow); gOverlay.appendChild(hi);
  // draw-on (compositor-driven CSS animation — independent of rAF)
  const len = hi.getTotalLength();
  [glow, hi].forEach(p => { p.style.setProperty("--len", len); p.style.strokeDasharray = len; p.classList.add("route-drawon"); });

  // terminal dots on the active route (fade as passed, dest in coral)
  state.route.forEach((k, idx) => {
    const [x, y] = NET.terminals[k].svg;
    const c = document.createElementNS(SVGNS, "circle");
    c.setAttribute("cx", x); c.setAttribute("cy", y); c.setAttribute("r", 13);
    c.setAttribute("fill", "#eef7f8"); c.setAttribute("stroke", idx === state.route.length - 1 ? "#ef6f53" : "#0d7a8c"); c.setAttribute("stroke-width", 5);
    c.setAttribute("class", "st-node");
    gOverlay.appendChild(c);
  });
  // current-station pulse ring (SMIL — compositor-driven, calm)
  const pulse = document.createElementNS(SVGNS, "circle");
  pulse.setAttribute("id", "stPulse"); pulse.setAttribute("cx", -100); pulse.setAttribute("cy", -100);
  pulse.setAttribute("r", 13); pulse.setAttribute("fill", "none"); pulse.setAttribute("stroke", "#26c6da"); pulse.setAttribute("stroke-width", 3);
  pulse.innerHTML = `<animate attributeName="r" values="13;36" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0 0.3 1"/><animate attributeName="opacity" values="0.5;0" dur="2.6s" repeatCount="indefinite"/>`;
  gOverlay.appendChild(pulse);
  // boat
  gOverlay.appendChild(makeBoat());
  MAP.appendChild(gOverlay);
}
function mkPath(d) { const p = document.createElementNS(SVGNS, "path"); p.setAttribute("d", d); return p; }
function removeHighlight() { if (gOverlay) gOverlay.remove(); gOverlay = null; boatG = null; }

let boatG;
function makeBoat() {
  boatG = document.createElementNS(SVGNS, "g");
  boatG.setAttribute("id", "boat");
  boatG.innerHTML = `
    <ellipse cx="-52" cy="0" rx="30" ry="10" fill="rgba(127,227,239,.16)"></ellipse>
    <ellipse cx="-34" cy="0" rx="22" ry="8" fill="rgba(127,227,239,.26)"></ellipse>
    <ellipse class="boat-shadow" cx="4" cy="8" rx="34" ry="15"></ellipse>
    <g>
      <path d="M-30 -12 L18 -12 Q34 0 18 12 L-30 12 Q-36 0 -30 -12 Z" fill="#0d5f7a" stroke="#eef7f8" stroke-width="2.5"/>
      <rect x="-22" y="-8" width="30" height="16" rx="4" fill="#eef7f8"/>
      <rect x="-18" y="-5" width="8" height="10" rx="1.5" fill="#26c6da"/>
      <rect x="-6" y="-5" width="8" height="10" rx="1.5" fill="#26c6da"/>
      <circle cx="22" cy="0" r="3" fill="#f4a83c"/>
    </g>`;
  return boatG;
}
function headingAt(pts, t) {
  const i = Math.min(Math.floor(t * (pts.length - 1)), pts.length - 2);
  const a = pts[i], b = pts[i + 1];
  return Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
}
function placeBoat(pos, deg) {
  if (!boatG) return;
  const scale = Math.max(0.7, camera.cur[2] / 1400); // keep boat readable across zoom
  boatG.setAttribute("transform", `translate(${pos[0]} ${pos[1]}) rotate(${deg}) scale(${scale})`);
}

/* interpolate a point at fraction t (0..1) along a polyline */
function ptAlong(pts, t) {
  if (t <= 0) return pts[0].slice();
  if (t >= 1) return pts[pts.length - 1].slice();
  const segs = []; let total = 0;
  for (let i = 0; i < pts.length - 1; i++) { const d = dist(pts[i], pts[i + 1]); segs.push(d); total += d; }
  let target = t * total, acc = 0;
  for (let i = 0; i < segs.length; i++) {
    if (acc + segs[i] >= target) {
      const f = (target - acc) / segs[i];
      return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f];
    }
    acc += segs[i];
  }
  return pts[pts.length - 1].slice();
}
function headingAlong(pts, t) {
  const a = ptAlong(pts, Math.max(0, t - 0.02)), b = ptAlong(pts, Math.min(1, t + 0.02));
  return Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
}

function polyLen(pts) { let s = 0; for (let i = 0; i < pts.length - 1; i++) s += dist(pts[i], pts[i + 1]); return s; }
function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

/* ============================================================ STORIES */
/* cards for a terminal, split by "type family" */
function cardsOf(termKey) {
  const t = NET.terminals[termKey];
  if (t.story && STORIES.STORY[t.story]) {
    return STORIES.STORY[t.story].map((c, idx) => ({ ...c, storyKey: t.story, netKey: termKey, idx }));
  }
  // minimal official card for operational terminals with no prototype story
  const off = OFFICIAL[t.official];
  if (off) {
    const key = t.official.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
    const cin = CINEMATIC[t.official];
    return [{
      type: "spot", storyKey: key, netKey: termKey, idx: 0, official: true,
      en: cin ? cin.en : { t: off.name, p: off.long_description || off.description },
      ml: cin ? cin.ml : { t: t.ml, p: off.long_description || off.description },
    }];
  }
  return [];
}
const DOCK_TYPES = ["spot", "culture", "eco"];   // shown while docked (terminal story)

/* light terminal-story sheet — narrates automatically, departs when done (no buttons) */
function showTerminalStory(ti, isBoarding, onDone) {
  if (!JT.alive) return;
  const termKey = state.route[ti], u = UI[LANG];
  const sheet = $("#sheet"); sheet.classList.toggle("compact", !isBoarding);   // intermediate stops feel lighter
  const all = cardsOf(termKey);
  const place = all.filter(c => DOCK_TYPES.includes(c.type) || c.official);
  const dockCards = isBoarding ? all : [place[0] || all[0]];   // intermediate "calling" → one compact card
  $("#sheetHead").innerHTML = isBoarding
    ? `<div class="sh-kind">${u.kindBoarding}</div><h2 class="${mlc()}">${termName(termKey)}</h2><div class="sub ${mlc()}">${u.boarding}</div>`
    : `<div class="sh-kind ${mlc()}">${JSTATUS[LANG].calling(termName(termKey))}</div>`;
  const body = $("#sheetScroll"); body.innerHTML = "";
  if (isBoarding) {
    const facts = (LANG === "ml" ? STORIES.FACTS_ML : STORIES.FACTS)[NET.terminals[termKey].story];
    if (facts) body.insertAdjacentHTML("beforeend",
      `<div class="factstrip">${facts.map(f => `<div class="fact"><div class="n ${mlc()}">${f[0]}</div><div class="l ${mlc()}">${f[1]}</div></div>`).join("")}</div>`);
  }
  PLAYSET = [];
  dockCards.forEach(c => body.appendChild(renderCard(c)));
  resetMiniAudio(); showSheet();
  // narration plays automatically; the ferry departs when it finishes (or a max dwell)
  let fired = false; const finish = () => { if (fired || !JT.alive) return; fired = true; onDone && onDone(); };
  player.playSet(finish);   // departs when narration completes
  jWait(isBoarding ? Math.min(60000, 9000 + dockCards.length * 18000) : 22000, finish);   // safety only

}

/* rewarding arrival — not a repeat of boarding */
function showArrival(termKey) {
  const a = ARR[LANG], hl = HIGHLIGHTS[termKey] || [];
  $("#asKicker").textContent = JSTATUS[LANG].arrived; $("#asKicker").classList.toggle("lang-ml", LANG === "ml");
  const tt = $("#asTitle"); tt.textContent = JSTATUS[LANG].welcome(termName(termKey)); tt.classList.toggle("lang-ml", LANG === "ml");
  $("#asThanks").textContent = a.thanks;
  const lab = $("#asHlLabel"); lab.textContent = a.nearby; lab.classList.toggle("lang-ml", LANG === "ml"); lab.style.display = hl.length ? "" : "none";
  $("#asHighlights").innerHTML = hl.map(h => `<div class="as-hl"><span class="ic">${h[0]}</span><span class="nm ${mlc()}">${LANG === "ml" ? h[2] : h[1]}</span></div>`).join("");
  $("#asContinue").textContent = a.explore; $("#asContinue").classList.toggle("lang-ml", LANG === "ml");
  hideSheet(); hideFloat(); hideObs();
  $("#arrivalSheet").classList.add("show");
}
function hideArrival() { $("#arrivalSheet").classList.remove("show"); }
function currentDeg() { const tr = boatG ? boatG.getAttribute("transform") || "" : ""; const m = tr.match(/rotate\(([-\d.]+)\)/); return m ? +m[1] : 0; }

function renderCard(c) {
  const L = c[LANG] || c.en, b = BADGE[c.type] || BADGE.spot;
  const el = document.createElement("div");
  el.className = "card" + (LANG === "ml" ? " lang-ml" : "");
  el.innerHTML = `
    <div class="imgwrap">
      <img loading="lazy" src="${imgFor(c.netKey, c.idx)}" alt="">
      <span class="imgtag ${b.cls} ${mlc()}">${b.ic} ${b[LANG]}</span>
    </div>
    <div class="body">
      <h4 class="${mlc()}"><span class="pin">◉</span>${L.t}</h4>
      <p>${L.p}</p>
    </div>`;
  PLAYSET.push({ el, card: c, text: `${L.t}. ${L.p}` });
  return el;
}

/* transit floating card — boat keeps moving; narrates and auto-dismisses */
let transitAudio = null;
function showTransit(termKey) {
  const all = cardsOf(termKey);
  const c = all.find(x => x.type === "water") || all.find(x => x.type === "eco");
  if (!c) return;
  const L = c[LANG] || c.en, b = BADGE[c.type];
  const fc = $("#floatcard");
  fc.innerHTML = `
    <div class="fc-img"><img loading="lazy" src="${imgFor(c.netKey, c.idx)}" alt=""></div>
    <div class="fc-body ${mlc()}">
      <div class="fc-tag">${b.ic} ${b[LANG]}</div>
      <h4>${L.t}</h4><p>${L.p}</p>
    </div>`;
  fc.classList.add("show");
  Sound.story();
  // narration plays if present; card auto-dismisses when it (or a timed estimate) ends
  const words = `${L.t}. ${L.p}`.trim().split(/\s+/).length;
  const estMs = Math.max(6500, Math.min(15000, words * 380));
  if (transitAudio) { transitAudio.pause(); transitAudio = null; }
  const a = new Audio(); a.src = `assets/audio/${c.storyKey}-${c.idx}-${LANG}.mp3`; transitAudio = a;
  let started = false;
  a.oncanplay = () => { if (!started) { started = true; a.play().catch(() => {}); } };
  a.onended = () => { if (transitAudio === a) hideFloat(); };
  a.onerror = () => { if (!started) { started = true; transitAudio = null; } };
  clearTimeout(fc._t); fc._t = setTimeout(hideFloat, estMs);
}
function hideFloat() { $("#floatcard").classList.remove("show"); if (transitAudio) { transitAudio.pause(); transitAudio = null; } }

/* observation banner */
function showObs(termKey) {
  const o = OBS[termKey]; if (!o) return;
  const tx = $("#obsTx"); tx.textContent = o[LANG] || o.en;
  tx.classList.toggle("lang-ml", LANG === "ml");
  $("#obs").classList.add("show");
  clearTimeout($("#obs")._t); $("#obs")._t = setTimeout(hideObs, 4200);
}
function hideObs() { $("#obs").classList.remove("show"); }

function showSheet() { $("#sheet").classList.add("show"); }
function hideSheet() { $("#sheet").classList.remove("show"); }
function mlc() { return LANG === "ml" ? "lang-ml" : ""; }

/* --------------------------------------------------------------- rail */
function renderRail() {
  const rail = $("#rail"); rail.innerHTML = "";
  state.route.forEach((k, i) => {
    if (i > 0) {
      const isTransfer = state.route.length > 2 && i > 0 && i < state.route.length; // any change point
      const seg = document.createElement("div");
      seg.className = "seg" + (i <= (state.curStation || 0) ? " done" : "");
      rail.appendChild(seg);
    }
    const stop = document.createElement("div");
    const isDest = i === state.route.length - 1;
    stop.className = "stop" + (isDest ? " dest" : "");
    stop.dataset.i = i;
    stop.innerHTML = `<div class="node"></div><div class="lbl ${mlc()}">${termName(k)}</div>`;
    rail.appendChild(stop);
  });
  markRail(state.curStation != null ? state.curStation : 0, "active");
}
function markRail(i, mode) {
  const stops = $$("#rail .stop"), segs = $$("#rail .seg");
  if (mode === "cruising") {
    stops.forEach((s, k) => s.classList.toggle("done", k <= i));
    stops.forEach(s => s.classList.remove("active"));
    segs.forEach((s, k) => s.classList.toggle("done", k <= i));
  } else if (mode === "done") {
    if (stops[i]) stops[i].classList.add("done");
    if (segs[i]) segs[i].classList.add("done");
  } else if (mode === "active") {
    stops.forEach((s, k) => { s.classList.toggle("active", k === i); s.classList.toggle("done", k < i); });
    segs.forEach((s, k) => s.classList.toggle("done", k < i));
  }
}

/* ============================================================ AUDIO */
/* Plays real narration MP3s when present (assets/audio/<storyKey>-<idx>-<lang>.mp3);
   until they're supplied, advances a timed "read-along" so the tour always works
   and never exposes a missing-audio state. */
let PLAYSET = [];
const player = {
  i: -1, active: false, paused: false, audio: null, raf: null, onComplete: null,
  _t0: 0, _dur: 0, _elapsed: 0,
  audioSrc(item) { const c = item.card; return `assets/audio/${c.storyKey}-${c.idx}-${LANG}.mp3`; },
  estDur(item) { const w = item.text.trim().split(/\s+/).length; return Math.max(4, Math.min(15, w * 0.34)); },
  stop() {
    this.active = false; this.paused = false; this.onComplete = null;
    if (this.audio) { this.audio.onended = null; this.audio.pause(); this.audio = null; }
    cancelAnimationFrame(this.raf); this.raf = null;
    PLAYSET.forEach(p => p.el.classList.remove("playing"));
  },
  playSet(onComplete) { this.stop(); this.active = true; this.paused = false; this.onComplete = onComplete; this.i = 0; this.run(); },
  run() {
    if (!this.active) return;
    if (this.i >= PLAYSET.length) { const cb = this.onComplete; this.active = false; if (cb) cb(); return; }
    this.playIndex(this.i, () => { if (this.active) { this.i++; this.run(); } });
  },
  playIndex(i, onEnd) {
    if (i < 0 || i >= PLAYSET.length) return;
    this.i = i; this.paused = false;
    highlightCard(i); setNowTitle(PLAYSET[i].text.split(".")[0]); setPlayIcon(true);
    const item = PLAYSET[i], prog = $("#pprog");
    const done = () => onEnd && onEnd();
    const fallback = () => {
      this._dur = this.estDur(item) * 1000; this._elapsed = 0; this._t0 = performance.now();
      const tick = () => {
        if (!this.active) return;
        if (this.paused) { this.raf = requestAnimationFrame(tick); return; }
        const el = this._elapsed + (performance.now() - this._t0);
        if (prog) prog.style.width = Math.min(100, el / this._dur * 100) + "%";
        if (el < this._dur) this.raf = requestAnimationFrame(tick); else done();
      };
      this.raf = requestAnimationFrame(tick);
    };
    let started = false;
    const a = new Audio(); a.src = this.audioSrc(item); this.audio = a;
    a.oncanplay = () => { if (!started) { started = true; a.play().catch(fallback); } };
    a.ontimeupdate = () => { if (a.duration && prog) prog.style.width = (a.currentTime / a.duration * 100) + "%"; };
    a.onended = done;
    a.onerror = () => { if (!started) { started = true; this.audio = null; fallback(); } };
    setTimeout(() => { if (!started) { started = true; this.audio = null; fallback(); } }, 350);
  },
  togglePause() {
    if (!this.active) return;
    if (this.paused) { this.paused = false; if (this.audio) this.audio.play().catch(() => {}); else this._t0 = performance.now(); setPlayIcon(true); }
    else { this.paused = true; if (this.audio) this.audio.pause(); else this._elapsed += performance.now() - this._t0; setPlayIcon(false); }
  },
  replay() { if (this.active && this.i >= 0 && this.i < PLAYSET.length) this.playIndex(this.i, () => { if (this.active) { this.i++; this.run(); } }); },
};
function setPlayIcon(playing) { $("#playicon").innerHTML = playing ? '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>' : '<path d="M8 5v14l11-7z"/>'; }
function setNowTitle(t) { const n = $("#now-title"); if (n) { n.textContent = t; n.classList.toggle("lang-ml", LANG === "ml"); } }
function highlightCard(i) {
  PLAYSET.forEach((p, k) => p.el.classList.toggle("playing", k === i));
  if (i >= 0 && PLAYSET[i]) {                       // scroll only the sheet's own scroller (never the page)
    const sc = $("#sheetScroll"), el = PLAYSET[i].el;
    sc.scrollTo({ top: Math.max(0, el.offsetTop - sc.clientHeight / 2 + el.offsetHeight / 2), behavior: "smooth" });
  }
}
function resetMiniAudio() { const pr = $("#pprog"); if (pr) pr.style.width = "0"; setPlayIcon(true); setNowTitle(""); }
$("#play").onclick = () => player.togglePause();
$("#replay").onclick = () => player.replay();
