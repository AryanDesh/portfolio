import type { Metadata } from "next";
import { experiences } from "@/lib/data";
import { TechTag } from "@/components/tech-tag";
import { MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, responsibilities, and the systems I've shipped.",
};

/*
 * Blueprint layout, same system as the other pages: positioned `bp-h` / `bp-v`
 * lines (2px, staggered draw-in) frame the page; hatch strips fill gutters.
 * Entries are editorial rows — a mono meta column (period / location / status)
 * beside the role content — separated by rules between the page verticals.
 */
export default function ExperiencePage() {
  return (
    <div className="relative">
      {/* Page verticals framing the gutters */}
      <span
        aria-hidden
        className="bp-v dl-0"
        style={{ left: "4.5%", top: 0, bottom: 0, width: "2px" }}
      />
      <span
        aria-hidden
        className="bp-v dl-1"
        style={{ right: "4.5%", top: 0, bottom: 0, width: "2px" }}
      />

      {/* ===== Heading band ===== */}
      <section className="relative">
        {/* Hatch filling the right gutter of the band */}
        <div
          aria-hidden
          className="hatch dh-1 pointer-events-none absolute inset-y-0 right-0 hidden w-[4.5%] sm:block"
        />
        <span
          aria-hidden
          className="bp-h dl-1"
          style={{ bottom: 0, left: 0, right: 0, height: "2px" }}
        />
        {/* Minor compartment lines in the band's empty right half */}
        <span
          aria-hidden
          className="bp-v dl-2 hidden sm:block"
          style={{ left: "77%", top: 0, bottom: 0, width: "2px" }}
        />
        <span
          aria-hidden
          className="bp-h dl-3 hidden sm:block"
          style={{ top: "55%", left: "77%", right: "4.5%", height: "2px" }}
        />
        <span
          aria-hidden
          className="bp-h dl-4 hidden sm:block"
          style={{ top: "28%", left: 0, width: "4.5%", height: "2px" }}
        />

        <div className="mx-[4.5%] px-6 py-14 sm:px-10 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            // experience
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Where I&apos;ve <span className="text-accent">worked</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            The teams I&apos;ve built with and the systems I&apos;ve shipped
            along the way.
          </p>
        </div>
      </section>

      {/* ===== Entries ===== */}
      {experiences.map((exp, index) => (
        <section key={`${exp.company}-${exp.role}`} className="relative">
          {/* Separator above every entry after the first, with a gutter tick */}
          {index > 0 ? (
            <>
              <span
                aria-hidden
                className="bp-h dl-2"
                style={{ top: 0, left: "4.5%", right: "4.5%", height: "2px" }}
              />
              <span
                aria-hidden
                className="bp-h dl-3 hidden sm:block"
                style={{ top: 0, right: 0, width: "4.5%", height: "2px" }}
              />
            </>
          ) : null}

          {/* Outer gutter stub — alternates sides per entry */}
          <span
            aria-hidden
            className="bp-v dl-3 hidden sm:block"
            style={
              index % 2 === 0
                ? { left: "1.5%", top: 0, bottom: 0, width: "2px" }
                : { right: "1.5%", top: 0, bottom: 0, width: "2px" }
            }
          />

          <div className="mx-[4.5%] grid gap-x-12 gap-y-6 px-6 py-12 sm:px-10 md:grid-cols-[200px_1fr]">
            {/* Meta column — divider line splits it from the content */}
            <div className="relative space-y-3 font-mono text-xs uppercase tracking-[0.15em] text-subtle">
              <span
                aria-hidden
                className="bp-v dl-2 hidden md:block"
                style={{ right: "-1.5rem", top: 0, bottom: 0, width: "2px" }}
              />
              <p className="text-foreground">{exp.period}</p>
              <p className="flex items-center gap-1.5">
                <MapPinIcon className="h-3.5 w-3.5" />
                {exp.location}
              </p>
              {exp.current ? (
                <p className="flex items-center gap-2 text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Current
                </p>
              ) : null}
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold uppercase tracking-wide text-foreground">
                {exp.role}
              </h2>
              <p className="mt-1.5 text-sm font-medium text-accent">
                {exp.company}
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
                {exp.summary}
              </p>

              <ul className="mt-5 max-w-3xl space-y-2.5">
                {exp.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-7 text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ===== Closing strip ===== */}
      <section className="relative h-16 sm:h-20">
        <span
          aria-hidden
          className="bp-h dl-3"
          style={{ top: 0, left: 0, right: 0, height: "2px" }}
        />
        <div
          aria-hidden
          className="hatch dh-2 pointer-events-none absolute inset-y-0 left-0 hidden w-[4.5%] sm:block"
        />
        <div
          aria-hidden
          className="hatch dh-2 pointer-events-none absolute inset-y-0 right-0 hidden w-[4.5%] sm:block"
        />
        {/* Minor verticals dividing the strip into thirds */}
        <span
          aria-hidden
          className="bp-v dl-3 hidden sm:block"
          style={{ left: "36.33%", top: 0, bottom: 0, width: "2px" }}
        />
        <span
          aria-hidden
          className="bp-v dl-4 hidden sm:block"
          style={{ left: "68.16%", top: 0, bottom: 0, width: "2px" }}
        />
      </section>
    </div>
  );
}
