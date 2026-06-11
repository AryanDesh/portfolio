import type { Metadata } from "next";
import { profile, socials } from "@/lib/data";
import { ArrowUpRightIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

// Email gets the hero treatment, so the "elsewhere" list skips it.
const elsewhere = socials.filter((social) => social.label !== "Email");

export default function ContactPage() {
  const year = new Date().getFullYear();

  return (
    // Fills the viewport below the nav; grows (and scrolls) if content needs it.
    <div className="relative flex min-h-full flex-col">
      {/* Page verticals framing the gutters, same system as home/about */}
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

      {/* ===== Hero: heading + big email ===== */}
      <section className="flex flex-1 flex-col justify-center">
        <div className="mx-[4.5%] px-6 py-14 sm:px-10 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            // contact
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-7xl">
            Let&apos;s build something{" "}
            <span className="text-accent">together.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Have a role, a project, or just want to say hi? My inbox is always
            open — I&apos;ll do my best to get back to you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex flex-wrap items-center gap-3 font-mono text-xl tracking-tight text-foreground transition-colors hover:text-accent sm:text-3xl"
          >
            <MailIcon className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
            <span className="break-all">{profile.email}</span>
            <ArrowUpRightIcon className="h-6 w-6 text-subtle transition-colors group-hover:text-accent" />
          </a>
        </div>
      </section>

      {/* ===== Info band: location / availability / elsewhere ===== */}
      <section className="relative">
        <span
          aria-hidden
          className="bp-h dl-2"
          style={{ top: 0, left: 0, right: 0, height: "2px" }}
        />
        {/* Column separators (desktop only), aligned to the grid thirds */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
          <span
            className="bp-v dl-3"
            style={{ left: "36.33%", top: 0, bottom: 0, width: "2px" }}
          />
          <span
            className="bp-v dl-3"
            style={{ left: "68.16%", top: 0, bottom: 0, width: "2px" }}
          />
        </div>

        <div className="mx-[4.5%] grid gap-8 px-6 py-10 sm:grid-cols-3 sm:gap-6 sm:px-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
              Location
            </p>
            <p className="mt-2 text-sm text-foreground">{profile.location}</p>
            <p className="mt-1 text-sm text-muted">Open to remote, worldwide</p>
          </div>

          <div className="sm:pl-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
              Availability
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availabilityLabel}
            </p>
          </div>

          <div className="sm:pl-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
              Elsewhere
            </p>
            <ul className="mt-2 space-y-1.5">
              {elsewhere.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wide text-foreground transition-colors hover:text-accent"
                  >
                    {social.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 text-subtle transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Footer strip (absorbs the old footer) ===== */}
      <section className="relative">
        <span
          aria-hidden
          className="bp-h dl-3"
          style={{ top: 0, left: 0, right: 0, height: "2px" }}
        />
        {/* Hatched gutters outside the page verticals */}
        <div
          aria-hidden
          className="hatch dh-2 pointer-events-none absolute inset-y-0 left-0 hidden w-[4.5%] sm:block"
        />
        <div
          aria-hidden
          className="hatch dh-2 pointer-events-none absolute inset-y-0 right-0 hidden w-[4.5%] sm:block"
        />

        <div className="mx-[4.5%] flex flex-col justify-between gap-1 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle sm:flex-row sm:items-center sm:px-10">
          <span>
            © {year} {profile.name}
          </span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </section>
    </div>
  );
}
