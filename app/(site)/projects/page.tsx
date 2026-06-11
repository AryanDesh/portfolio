import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { ProjectMarquee } from "@/components/project-marquee";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed and built, 2021–2026.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ===== Draggable right-to-left infinite marquee ===== */}
      <ProjectMarquee projects={projects} speed={120} />

      {/* ===== Highlighted heading ===== */}
      <section className="max-w-[1760px] px-20 py-12 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
          // my work
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          Projects from <span className="text-accent">2021&ndash;2026</span>
        </h1>
      </section>
    </>
  );
}
