import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="// projects"
        title="Selected work"
        description="Side projects and platforms I've built end to end — from real-time systems to multi-tenant SaaS."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
