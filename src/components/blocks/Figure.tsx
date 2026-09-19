import type { ProjectImage } from "@/types/project";
import { asset } from "@/lib/asset";

/** Hairline-framed image with optional caption. Shared by the image blocks. */
export function Figure({
  src,
  alt,
  caption,
  className = "",
}: ProjectImage & { className?: string }) {
  return (
    <figure className={className}>
      <div className="w-full overflow-hidden border border-hairline">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(src)} alt={alt} loading="lazy" className="w-full" />
      </div>
      {caption && <figcaption className="label mt-3">{caption}</figcaption>}
    </figure>
  );
}
