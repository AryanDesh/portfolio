/*
 * Brand icons for the skills marquee, via react-icons (Simple Icons set, plus
 * a few generic glyphs for non-brand skills). Each entry pins its official
 * brand color; entries without a color inherit `currentColor` — used for
 * monochrome brands (Next.js, Express, Prisma) so they stay visible on both
 * themes, and for generic glyphs (SQL, REST, cloud).
 */
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiClickhouse,
  SiDrizzle,
  SiFirebase,
} from "react-icons/si";
import { FiDatabase, FiCloud } from "react-icons/fi";
import { TbApi, TbTopologyStar3, TbGitMerge } from "react-icons/tb";

type IconProps = { className?: string };

function make(Icon: IconType, color?: string) {
  return function TechBrandIcon({ className = "" }: IconProps) {
    return (
      <Icon
        aria-hidden
        className={`h-5 w-5 shrink-0 ${className}`}
        style={color ? { color } : undefined}
      />
    );
  };
}

export const techIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  typescript: make(SiTypescript, "#3178C6"),
  javascript: make(SiJavascript, "#F7DF1E"),
  python: make(SiPython, "#3776AB"),
  go: make(SiGo, "#00ADD8"),
  react: make(SiReact, "#61DAFB"),
  nextjs: make(SiNextdotjs),
  redux: make(SiRedux, "#764ABC"),
  tailwind: make(SiTailwindcss, "#06B6D4"),
  nodejs: make(SiNodedotjs, "#5FA04E"),
  nestjs: make(SiNestjs, "#E0234E"),
  express: make(SiExpress),
  postgresql: make(SiPostgresql, "#4169E1"),
  mysql: make(SiMysql, "#4479A1"),
  redis: make(SiRedis, "#FF4438"),
  prisma: make(SiPrisma),
  docker: make(SiDocker, "#2496ED"),
  kubernetes: make(SiKubernetes, "#326CE5"),
  githubactions: make(SiGithubactions, "#2088FF"),
  clickhouse: make(SiClickhouse, "#FFCC01"),
  drizzle: make(SiDrizzle, "#C5F74F"),
  firestore: make(SiFirebase, "#DD2C00"),
  restapi: make(TbApi),
  cicd: make(TbGitMerge),
  cloud: make(FiCloud),
  sql: make(FiDatabase),
  microservices: make(TbTopologyStar3),
};
