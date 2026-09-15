import type { CaseStudyBlock } from "@/types/project";
import { Reveal } from "@/components/Reveal";
import { Figure } from "./Figure";

/**
 * Renders an ordered list of case-study blocks. Adding a new block variant is
 * the only reason to touch this file — writing a new case study is pure data.
 *
 * Column model: text/image/quote sit in a centered reading column; pairs and
 * full-width images break out to the wider content measure.
 */
export function BlockRenderer({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      {blocks.map((block, i) => (
        <Reveal key={i}>{renderBlock(block)}</Reveal>
      ))}
    </div>
  );
}

function renderBlock(block: CaseStudyBlock) {
  switch (block.type) {
    case "text":
      return (
        <div className="mx-auto max-w-2xl">
          {block.heading && (
            <p className="label mb-4">{block.heading}</p>
          )}
          <div className="space-y-4">
            {block.body.split("\n").map((para, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-fg/90 md:text-xl"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      );

    case "image":
      return (
        <Figure
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          className="mx-auto max-w-4xl"
        />
      );

    case "imagePair":
      return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {block.images.map((img, i) => (
            <Figure key={i} {...img} />
          ))}
        </div>
      );

    case "fullWidthImage":
      return (
        <Figure src={block.src} alt={block.alt} caption={block.caption} />
      );

    case "quote":
      return (
        <blockquote className="mx-auto max-w-3xl border-l border-hairline pl-6 md:pl-8">
          <p className="text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
            “{block.quote}”
          </p>
          {block.attribution && (
            <cite className="label mt-4 block not-italic">
              {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}
