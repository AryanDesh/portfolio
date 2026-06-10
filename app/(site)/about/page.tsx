import type { Metadata } from "next";
import { profile, skills, education } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { TechTag } from "@/components/tech-tag";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.role} based in ${profile.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="// about"
        title="A bit about me"
        description={`${profile.role} based in ${profile.location}.`}
      />

      {/* Bio */}
      <div className="mt-10 max-w-2xl space-y-5">
        {profile.summary.map((paragraph, index) => (
          <p key={index} className="text-base leading-7 text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h3 className="font-mono text-sm text-accent">// skills &amp; tools</h3>
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="bg-background p-6">
              <h4 className="text-sm font-semibold text-foreground">
                {group.category}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechTag key={item}>{item}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <h3 className="font-mono text-sm text-accent">// education</h3>
        <div className="mt-6 space-y-4">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex flex-col justify-between gap-1 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center"
            >
              <div>
                <h4 className="text-base font-semibold text-foreground">
                  {item.school}
                </h4>
                <p className="mt-1 text-sm text-muted">
                  {item.degree} · {item.detail}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs text-subtle">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
