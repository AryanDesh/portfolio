import type { Project } from "@/lib/data";
import { TechTag } from "@/components/tech-tag";
import { GitHubIcon } from "@/components/icons";

/**
 * Compact project card with a preview image on top — sized for the projects
 * marquee. Fixed width, fills the row height so cards line up.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group/card flex h-full w-[300px] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-subtle sm:w-[340px]">
      {/* Preview image (placeholder for now) */}
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <div
          role="img"
          aria-label={`${project.name} preview`}
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover/card:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-2 py-0.5 font-mono text-[11px] text-subtle backdrop-blur">
          {project.period}
        </span>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            title="View on GitHub"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="text-sm text-accent">{project.tagline}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-muted">
          {project.blurb}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>
    </article>
  );
}
