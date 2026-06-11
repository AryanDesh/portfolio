import type { Tech } from "@/lib/data";
import { techStack } from "@/lib/data";
import { techIcons } from "@/components/tech-icons";

function chunk<T>(items: T[], rows: number): T[][] {
  const out: T[][] = Array.from({ length: rows }, () => []);
  const per = Math.ceil(items.length / rows);
  items.forEach((item, i) => out[Math.min(rows - 1, Math.floor(i / per))].push(item));
  return out;
}

function Chip({ tech }: { tech: Tech }) {
  const Icon = tech.icon ? techIcons[tech.icon] : null;
  return (
    <span className="mr-10 inline-flex shrink-0 items-center gap-2.5 font-mono text-lg uppercase tracking-wide text-muted sm:text-xl">
      {Icon ? <Icon /> : null}
      {tech.name}
    </span>
  );
}

function Dot() {
  return (
    <span aria-hidden className="mr-10 shrink-0 select-none text-subtle">
      •
    </span>
  );
}

function Row({
  items,
  reverse,
  duration,
}: {
  items: Tech[];
  reverse: boolean;
  duration: number;
}) {
  // Interleave chips with dot separators, then render the sequence twice so the
  // -50% translate loops seamlessly (every element carries an equal margin).
  const sequence = items.flatMap((tech, i) => [
    { kind: "chip" as const, tech, key: `c${i}` },
    { kind: "dot" as const, key: `d${i}` },
  ]);
  const loop = [...sequence, ...sequence];

  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-row flex w-max items-center ${reverse ? "marquee-row-reverse" : ""}`}
        style={{ ["--marquee-dur" as string]: `${duration}s` }}
      >
        {loop.map((el, i) =>
          el.kind === "chip" ? (
            <Chip key={`${el.key}-${i}`} tech={el.tech} />
          ) : (
            <Dot key={`${el.key}-${i}`} />
          ),
        )}
      </div>
    </div>
  );
}

export function SkillMarquee() {
  const rows = chunk(techStack, 3);
  return (
    <div className="skill-marquee flex flex-col gap-6 sm:gap-8">
      {rows.map((row, i) => (
        <Row key={i} items={row} reverse={i % 2 === 1} duration={38 + i * 7} />
      ))}
    </div>
  );
}
