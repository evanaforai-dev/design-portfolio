import type { Section } from "@/types/caseStudy";
import { Reveal } from "@/components/Reveal";
import { Media, Container } from "./Media";

/** Vertical rhythm wrapper for in-flow (contained) sections. */
function Band({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <section className={`py-16 md:py-28 ${className}`}>{children}</section>
    </Reveal>
  );
}

function heightClass(h?: "auto" | "tall" | "screen") {
  if (h === "screen") return "h-[86vh]";
  if (h === "tall") return "h-[70vh] md:h-[86vh]";
  return "";
}

export function renderSection(section: Section, i: number) {
  switch (section.kind) {
    /* THESIS — large editorial statement. */
    case "thesis":
      return (
        <Band key={i}>
          <Container>
            {section.eyebrow && (
              <p className="label mb-6">{section.eyebrow}</p>
            )}
            <p className="max-w-[46rem] text-2xl font-medium leading-snug tracking-tight text-fg md:text-4xl md:leading-[1.15]">
              {section.text}
            </p>
          </Container>
        </Band>
      );

    /* CONTEXT — quiet label rail + reading column. */
    case "context":
      return (
        <Band key={i}>
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
              <p className="label md:col-span-3">
                {section.label ?? "context"}
              </p>
              <div className="max-w-[46rem] space-y-5 md:col-span-9">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-fg">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Band>
      );

    /* QUESTION — the central design question, made prominent. */
    case "question":
      return (
        <Band key={i}>
          <Container>
            <div className="border-t border-hairline pt-8">
              <p className="label mb-8">the question</p>
              <p className="max-w-[54rem] text-3xl font-medium leading-tight tracking-tight text-fg md:text-6xl md:leading-[1.05]">
                {section.text}
              </p>
            </div>
          </Container>
        </Band>
      );

    /* CONSTRAINTS — honest grid of limits. */
    case "constraints":
      return (
        <Band key={i}>
          <Container>
            <p className="label mb-10">{section.label ?? "constraints"}</p>
            <div className="grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((it, j) => (
                <div
                  key={j}
                  className="border-b border-hairline py-6 pr-8 lg:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <p className="mb-2 text-sm font-medium text-fg">{it.label}</p>
                  <p className="text-sm leading-relaxed text-muted">{it.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </Band>
      );

    /* DECISIONS — the core: decision / why / tradeoff / result, with media. */
    case "decisions":
      return (
        <Reveal key={i}>
          <section className="py-16 md:py-28">
            <Container>
              <p className="label mb-12 md:mb-16">
                {section.label ?? "key decisions"}
              </p>
              <div className="flex flex-col gap-20 md:gap-32">
                {section.items.map((d, j) => (
                  <div key={j}>
                    {d.media && (
                      <div className="mb-8 aspect-[16/10] w-full overflow-hidden border border-hairline md:mb-10">
                        <Media
                          asset={d.media}
                          fit={d.fit ?? "cover"}
                          className="h-full w-full"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                      <div className="md:col-span-5">
                        {d.n && (
                          <span className="font-mono text-xs font-light text-muted">
                            {d.n}
                          </span>
                        )}
                        <h3 className="mt-2 text-xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
                          {d.title}
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:col-span-7">
                        {d.why && <MicroField label="why" text={d.why} />}
                        {d.tradeoff && (
                          <MicroField label="tradeoff" text={d.tradeoff} />
                        )}
                        {d.result && (
                          <MicroField label="result" text={d.result} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </Reveal>
      );

    /* FULL — full-bleed media moment. */
    case "full":
      return (
        <Reveal key={i}>
          <figure className="my-4 md:my-8">
            {section.fit === "contain" ? (
              <Container>
                <div
                  className={`flex items-center justify-center ${
                    section.frame ? "border border-hairline" : ""
                  } ${heightClass(section.height) || "py-10 md:py-16"}`}
                >
                  <Media
                    asset={section.media}
                    fit="contain"
                    position={section.position}
                    className="max-h-[80vh] w-auto max-w-full"
                  />
                </div>
              </Container>
            ) : heightClass(section.height) ? (
              <div className={`w-full overflow-hidden ${heightClass(section.height)}`}>
                <Media
                  asset={section.media}
                  fit="cover"
                  position={section.position}
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="w-full overflow-hidden">
                {/* auto height: media keeps its natural aspect at full width */}
                <Media
                  asset={section.media}
                  fit="cover"
                  position={section.position}
                  className="block w-full"
                />
              </div>
            )}
            {section.caption && (
              <Container>
                <figcaption className="label mt-4">{section.caption}</figcaption>
              </Container>
            )}
          </figure>
        </Reveal>
      );

    /* FIGURES — 2/3 up related objects. */
    case "figures":
      return (
        <Reveal key={i}>
          <figure className="my-4 md:my-8">
            <Container>
              <div
                className={`grid grid-cols-1 gap-4 md:gap-6 ${
                  section.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {section.media.map((m, j) => (
                  <div
                    key={j}
                    className="aspect-[4/3] w-full overflow-hidden border border-hairline"
                  >
                    <Media
                      asset={m}
                      fit={section.fit ?? "cover"}
                      className="h-full w-full"
                    />
                  </div>
                ))}
              </div>
              {section.caption && (
                <figcaption className="label mt-4">{section.caption}</figcaption>
              )}
            </Container>
          </figure>
        </Reveal>
      );

    /* DETAIL — asymmetric media + annotation. */
    case "detail":
      return (
        <Band key={i}>
          <Container>
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
              <div
                className={`md:col-span-7 ${
                  section.side === "right" ? "md:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden border border-hairline">
                  <Media
                    asset={section.media}
                    fit={section.fit ?? "cover"}
                    position={section.position}
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div
                className={`md:col-span-5 ${
                  section.side === "right" ? "md:order-1" : ""
                }`}
              >
                {section.title && (
                  <h3 className="text-xl font-medium leading-snug tracking-tight text-fg md:text-2xl">
                    {section.title}
                  </h3>
                )}
                {section.text && (
                  <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-muted">
                    {section.text}
                  </p>
                )}
              </div>
            </div>
          </Container>
        </Band>
      );

    /* FLOW — the real process/system as connected steps. */
    case "flow":
      return (
        <Band key={i}>
          <Container>
            {section.label && <p className="label mb-10">{section.label}</p>}
            <div className="flex flex-col items-stretch gap-0 md:flex-row md:items-stretch">
              {section.steps.map((s, j) => (
                <div key={j} className="flex flex-1 flex-col md:flex-row">
                  <div className="flex-1 border border-hairline p-5 md:p-6">
                    <span className="font-mono text-xs font-light text-muted">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-sm font-medium text-fg">{s.label}</p>
                    {s.note && (
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {s.note}
                      </p>
                    )}
                  </div>
                  {j < section.steps.length - 1 && (
                    <div
                      className="flex items-center justify-center text-muted"
                      aria-hidden
                    >
                      <span className="px-3 py-2 md:py-0">
                        <span className="hidden md:inline">→</span>
                        <span className="md:hidden">↓</span>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {section.caption && (
              <p className="label mt-6">{section.caption}</p>
            )}
          </Container>
        </Band>
      );

    /* STATEMENT — a quiet full-width editorial line. */
    case "statement":
      return (
        <Band key={i} className="md:py-40">
          <Container>
            <p className="mx-auto max-w-[50rem] text-center text-2xl font-medium leading-snug tracking-tight text-fg md:text-4xl md:leading-[1.2]">
              {section.text}
            </p>
          </Container>
        </Band>
      );

    /* OUTCOME — honest status + learning. */
    case "outcome":
      return (
        <Band key={i}>
          <Container>
            <div className="grid grid-cols-1 gap-8 border-t border-hairline pt-8 md:grid-cols-12 md:gap-10">
              <p className="label md:col-span-3">{section.label ?? "outcome"}</p>
              <div className="max-w-[46rem] space-y-5 md:col-span-9">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-fg">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Band>
      );

    /* REFLECTION — a genuine, short changed-thinking insight. */
    case "reflection":
      return (
        <Band key={i}>
          <Container>
            <div className="max-w-[46rem]">
              <p className="label mb-6">reflection</p>
              <p className="text-xl leading-relaxed text-fg md:text-2xl md:leading-relaxed">
                {section.text}
              </p>
            </div>
          </Container>
        </Band>
      );

    default:
      return null;
  }
}

function MicroField({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="label mb-2">{label}</p>
      <p className="text-sm leading-relaxed text-fg">{text}</p>
    </div>
  );
}
