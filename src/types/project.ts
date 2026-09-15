/**
 * The single shared data shape for every project on the site.
 *
 * Adding a new project — Work or Playground — is only ever a matter of adding
 * one more `Project` entry to `src/data/projects.ts`. No layout, routing, or
 * component code needs to change.
 */

export type Category = "work" | "playground";

/**
 * Reusable case-study content blocks. The case-study template renders whatever
 * sequence of blocks a project provides, so writing a new case study is just
 * data — never new layout code.
 */
export type CaseStudyBlock =
  | TextBlock
  | ImageBlock
  | ImagePairBlock
  | FullWidthImageBlock
  | QuoteBlock;

export interface TextBlock {
  type: "text";
  /** Optional small section label shown above the paragraph. */
  heading?: string;
  /** Body copy. Newlines split into separate paragraphs. */
  body: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface ImagePairBlock {
  type: "imagePair";
  images: [ProjectImage, ProjectImage];
}

export interface FullWidthImageBlock {
  type: "fullWidthImage";
  src: string;
  alt: string;
  caption?: string;
}

export interface QuoteBlock {
  type: "quote";
  quote: string;
  attribution?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  /** URL segment, e.g. /work/atlas-banking */
  slug: string;
  title: string;
  /** Shown as uppercase, letter-spaced label under the card title. */
  tags: string[];
  category: Category;
  /** Cover image used in the grid card and case-study hero. */
  cover: string;
  year: string;
  /** One-sentence summary used on cards and at the top of the case study. */
  summary: string;

  // Optional case-study metadata rendered in the header meta rail.
  role?: string;
  client?: string;
  duration?: string;

  /** Ordered content that builds the case-study page. */
  caseStudyBlocks: CaseStudyBlock[];
}
