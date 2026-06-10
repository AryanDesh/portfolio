import type { Metadata } from "next";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { TechTag } from "@/components/tech-tag";
import { MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, responsibilities, and the systems I've shipped.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="// experience"
        title="Where I've worked"
        description="The teams I've built with and the systems I've shipped along the way."
      />

      <div className="mt-12 space-y-12">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="relative border-l border-border pl-6 sm:pl-8"
          >
            <span
              aria-hidden
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"
            />

            <header className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                {exp.current ? (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="text-sm font-medium text-accent">{exp.company}</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-subtle">
                <span>{exp.period}</span>
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </div>
            </header>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              {exp.summary}
            </p>

            <ul className="mt-4 space-y-2.5">
              {exp.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-6 text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
