import type { Project } from "@/lib/data";
import { TechTag } from "@/components/tech-tag";
import { ArrowUpRightIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-subtle">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="text-sm text-accent">{project.tagline}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-subtle">
          {project.period}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{project.blurb}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm leading-6 text-muted">
            <span
              aria-hidden
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          View project
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
}
