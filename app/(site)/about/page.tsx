import type { Metadata } from "next";
import { profile, education } from "@/lib/data";
import { SkillMarquee } from "@/components/skill-marquee";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.role} based in ${profile.location}.`,
};

/*
 * Blueprint layout, same system as the home page: every line is a positioned
 * `bp-h` / `bp-v` span (animated draw-in), never a border. Each section is a
 * `relative` compartment; lines anchor to its edges, hatch strips fill the
 * gutters. Verticals: bio + "What I use" keep a left line at 4.5%; Education
 * steps out to a hatched left column (1.5%–8%) and a right line at 4.5%.
 */
export default function AboutPage() {
  return (
    <div>
      {/* ===== Intro / bio ===== */}
      <section className="relative">
        <span
          aria-hidden
          className="bp-v dl-0"
          style={{ left: "4.5%", top: 0, bottom: 0, width: "2px" }}
        />
        <div className="ml-[4.5%] mr-[8.5%] px-6 py-16 sm:px-10 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            // about
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-6xl">
            {profile.role} based in {profile.location}.
          </h1>
          <div className="mt-8 grid max-w-3xl gap-5">
            {profile.summary.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What I use ===== */}
      <section className="relative">
        {/* Tall hatch strip filling the right gutter, full section height */}
        <div
          aria-hidden
          className="hatch pointer-events-none absolute inset-y-0 right-0 hidden w-[8.5%] sm:block"
        />
        {/* Section lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span
            className="bp-h dl-0"
            style={{ top: 0, left: 0, right: 0, height: "2px" }}
          />
          <span
            className="bp-h dl-3"
            style={{ bottom: 0, left: 0, right: 0, height: "2px" }}
          />
          <span
            className="bp-v dl-1"
            style={{ left: "4.5%", top: 0, bottom: 0, width: "2px" }}
          />
          {/* Inner edge of the hatch strip */}
          <span
            className="bp-v dl-1"
            style={{ right: "8.5%", top: 0, bottom: 0, width: "2px" }}
          />
        </div>

        {/* Heading row — its underline spans exactly between the verticals */}
        <div className="relative ml-[4.5%] mr-[8.5%]">
          <span
            aria-hidden
            className="bp-h dl-1"
            style={{ bottom: 0, left: 0, right: 0, height: "2px" }}
          />
          <h2 className="px-6 py-8 text-right font-serif text-4xl tracking-tight text-foreground sm:px-10 sm:py-10 sm:text-6xl">
            What I use
          </h2>
        </div>

        {/* Marquee band, inset to the compartment */}
        <div className="ml-[4.5%] mr-[8.5%] py-14 sm:py-16">
          <SkillMarquee />
        </div>
      </section>

      {/* Step between compartments */}
      <div aria-hidden className="h-16 sm:h-24" />

      {/* ===== Education ===== */}
      <section className="relative">
        {/* Tall hatch column in the left gutter, inset from the page edge */}
        <div
          aria-hidden
          className="hatch pointer-events-none absolute inset-y-0 left-[1.5%] hidden w-[6.5%] sm:block"
        />
        {/* Section lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span
            className="bp-h dl-0"
            style={{ top: 0, left: "8%", right: "4.5%", height: "2px" }}
          />
          <span
            className="bp-h dl-3"
            style={{ bottom: 0, left: "8%", right: "4.5%", height: "2px" }}
          />
          {/* Hatch column edges */}
          <span
            className="bp-v dl-2"
            style={{ left: "1.5%", top: 0, bottom: 0, width: "2px" }}
          />
          <span
            className="bp-v dl-1"
            style={{ left: "8%", top: 0, bottom: 0, width: "2px" }}
          />
          <span
            className="bp-v dl-2"
            style={{ right: "4.5%", top: 0, bottom: 0, width: "2px" }}
          />
        </div>

        {/* Heading row — underline between hatch column and right vertical */}
        <div className="relative ml-[8%] mr-[4.5%]">
          <span
            aria-hidden
            className="bp-h dl-1"
            style={{ bottom: 0, left: 0, right: 0, height: "2px" }}
          />
          <h2 className="px-6 py-8 font-serif text-4xl tracking-tight text-foreground sm:px-10 sm:py-10 sm:text-6xl">
            Education
          </h2>
        </div>

        {/* Entries */}
        <div className="ml-[8%] mr-[4.5%] px-6 py-4 sm:px-10">
          {education.map((item) => (
            <article
              key={item.school}
              className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wide text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {item.school}{" "}
                  <span className="text-subtle">| {item.detail}</span>
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
              <span className="order-first font-mono text-xs uppercase tracking-widest text-subtle md:order-0 md:text-right">
                {item.period}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Breathing room after the framed section */}
      <div aria-hidden className="h-16 sm:h-24" />
    </div>
  );
}
