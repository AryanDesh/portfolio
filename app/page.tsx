import Link from "next/link";
import { profile, stats, projects } from "@/lib/data";
import { SocialIconRow } from "@/components/social-links";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ArrowRightIcon, DownloadIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
          {profile.available ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>
          ) : null}

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl text-accent sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-subtle hover:bg-surface"
            >
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <DownloadIcon className="h-4 w-4" />
              Résumé
            </a>
          </div>

          <SocialIconRow className="mt-8" />
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6">
              <dt className="text-2xl font-semibold text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm leading-5 text-subtle">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="// selected work" title="Things I've built" />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            All projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted">
            I&apos;m always open to interesting backend, full-stack, or
            AI-tooling problems. Have a role or an idea in mind?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
