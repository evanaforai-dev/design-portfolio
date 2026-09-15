/**
 * Case-study content model.
 *
 * A case study is a HERO plus an ordered list of art-directed SECTIONS. The
 * section set is intentionally varied (not text/image/text/image) so each
 * project can be composed with its own rhythm. Every project uses a different
 * subset and order — the narrative emerges from the project, not a template.
 *
 * All copy is authored lowercase and em-dash-free, matching the site.
 */

export interface MediaAsset {
  /** "image" (default; includes GIF) or "video" (autoplay, muted, looped). */
  type?: "image" | "video";
  src: string;
  alt?: string;
  /** Poster frame for video. */
  poster?: string;
}

export interface CaseMeta {
  label: string;
  value: string;
}

export interface CaseLink {
  label: string;
  href: string;
}

export interface CaseHero {
  /** quiet eyebrow, e.g. "figma plugin · developer tooling". */
  kicker?: string;
  title: string;
  /** one line: what is this. */
  subtitle: string;
  media: MediaAsset;
  mediaFit?: "cover" | "contain";
  /** optional object-position for cover crops. */
  mediaPosition?: string;
  meta: CaseMeta[];
  links?: CaseLink[];
}

export interface DecisionItem {
  /** index like "01". */
  n?: string;
  title: string;
  why?: string;
  tradeoff?: string;
  result?: string;
  media?: MediaAsset;
  fit?: "cover" | "contain";
}

export type Section =
  | { kind: "thesis"; eyebrow?: string; text: string }
  | { kind: "context"; label?: string; paragraphs: string[] }
  | { kind: "question"; text: string }
  | { kind: "constraints"; label?: string; items: { label: string; text: string }[] }
  | { kind: "decisions"; label?: string; items: DecisionItem[] }
  | {
      kind: "full";
      media: MediaAsset;
      fit?: "cover" | "contain";
      position?: string;
      /** cell height treatment for the media. */
      height?: "auto" | "tall" | "screen";
      caption?: string;
      /** hairline frame around the media (for contained objects). */
      frame?: boolean;
    }
  | {
      kind: "figures";
      media: MediaAsset[];
      columns?: 2 | 3;
      fit?: "cover" | "contain";
      caption?: string;
    }
  | {
      kind: "detail";
      media: MediaAsset;
      fit?: "cover" | "contain";
      position?: string;
      title?: string;
      text?: string;
      /** which side the media sits on (desktop). */
      side?: "left" | "right";
    }
  | { kind: "flow"; label?: string; steps: { label: string; note?: string }[]; caption?: string }
  | { kind: "statement"; text: string }
  | { kind: "outcome"; label?: string; paragraphs: string[] }
  | { kind: "reflection"; text: string };

export interface CaseStudy {
  slug: string;
  hero: CaseHero;
  sections: Section[];
}
