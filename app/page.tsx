import Link from "next/link";
import { profile, socials } from "@/lib/data";
import { socialIcons, ArrowUpRightIcon } from "@/components/icons";
import { Nav } from "@/components/nav";

// 2×2 blueprint cell layout: LinkedIn / GitHub on top, an empty hatched cell
// and Email below — mirroring the reference's L-shaped icon cluster.
const social = (label: string) => socials.find((s) => s.label === label);
const socialCells = [
  social("LinkedIn"),
  social("GitHub"),
  null,
  social("Email"),
];

function SocialCells() {
  return (
    <div className="cell-grid relative grid w-max grid-cols-2">
      {socialCells.map((cell, index) => {
        const Icon = cell ? socialIcons[cell.label] : null;
        return (
          <div
            key={cell?.label ?? `empty-${index}`}
            className="cell hatch relative flex h-[68px] w-[100px] items-center justify-center"
          >
            {cell && Icon ? (
              <a
                href={cell.href}
                target={cell.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={cell.label}
                className="text-foreground transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const { lead, highlight, rest } = profile.heroIntro;

  return (
    // Exactly one screen tall, no footer, no scroll.
    <div className="flex h-dvh flex-col overflow-hidden">
      <Nav />

      <main className="relative min-h-0 flex-1 overflow-hidden">
        {/* ===================== Desktop blueprint (md+) ===================== */}
        <section className="relative hidden h-full md:block">
          {/* Bottom corner hatch frames (full-bleed) */}
          <div
            aria-hidden
            className="hatch pointer-events-none absolute bottom-0 left-0 h-[7%] w-[12%]"
          />
          <span
            aria-hidden
            className="bp-h dl-4"
            style={{ bottom: "7%", left: 0, width: "12%" }}
          />
          <div
            aria-hidden
            className="hatch pointer-events-none absolute bottom-0 right-0 h-[7%] w-[12%]"
          />
          <span
            aria-hidden
            className="bp-h from-right dl-4"
            style={{ bottom: "7%", right: 0, width: "12%" }}
          />

          {/* Shared coordinate space: lines + content both sit in this box, so
              their percentages line up. */}
          <div className="relative mx-auto h-full w-full max-w-[1760px]">
            {/* ---- Blueprint lines (gutters only — never under text) ---- */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {/* Horizontals */}
              <span className="bp-h dl-0" style={{ top: "9%", left: 0, right: 0 }} />
              <span className="bp-h dl-1" style={{ top: "35%", left: 0, right: 0 }} />
              <span className="bp-h dl-2" style={{ top: "42%", left: 0, width: "77%" }} />
              {/* Social-compartment top edge */}
              <span className="bp-h dl-3" style={{ top: "66%", left: 0, width: "16.5%" }} />

              {/* Vertical V1 — broken around the name (stub above, body below) */}
              <span className="bp-v dl-0" style={{ left: "16.5%", top: 0, height: "9%" }} />
              <span className="bp-v dl-2" style={{ left: "16.5%", top: "35%", height: "55%" }} />
              {/* Vertical V2 — stops above the paragraph */}
              <span className="bp-v dl-1" style={{ left: "77%", top: 0, height: "45%" }} />
            </div>

            {/* ---- Content (placed inside the compartments) ---- */}
            <h1
              className="absolute left-8 font-serif font-normal leading-[0.9] tracking-tight text-foreground"
              style={{ top: "14%", fontSize: "clamp(2.5rem, 8.5vw, 8rem)" }}
            >
              {profile.name}
            </h1>

            {/* Role + see-my-work, sitting in the band between the verticals */}
            <div
              className="absolute flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-subtle sm:text-sm"
              style={{ top: "37%", left: "18%", right: "23%" }}
            >
              <span>{profile.role}</span>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                See my work
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Paragraph, floating in the open lower-right compartment */}
            <p
              className="absolute text-2xl leading-snug text-muted lg:text-3xl"
              style={{ top: "52%", left: "34%", right: "13%" }}
            >
              {lead}
              <span className="text-accent">{highlight}</span>
              {rest}
            </p>

            {/* Social cluster, lower-left (right edge meets V1) */}
            <div className="absolute left-8" style={{ top: "66%" }}>
              <SocialCells />
            </div>

            {/* Résumé, just right of V1 */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute font-mono text-xs uppercase tracking-[0.15em] text-subtle transition-colors hover:text-accent"
              style={{ top: "89%", left: "18%" }}
            >
              Resume / CV ↗
            </a>
          </div>
        </section>

        {/* ===================== Mobile (stacked) ===================== */}
        <section className="flex h-full flex-col justify-center gap-6 px-6 md:hidden">
          <div>
            <h1 className="font-serif text-5xl font-normal leading-[0.95] tracking-tight text-foreground">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
              {profile.role}
            </p>
          </div>

          <SocialCells />

          <p className="text-lg leading-snug text-muted">
            {lead}
            <span className="text-accent">{highlight}</span>
            {rest}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-subtle">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              See my work
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Resume / CV ↗
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
