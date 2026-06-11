/*
 * A small hand-built set of brand logos for the skills marquee. (react-icons
 * would be the usual choice, but it isn't installable offline.) Lettered marks
 * are HTML badges; shape marks are inline SVG. Each renders at ~20px.
 */

type IconProps = { className?: string };

const badge =
  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] text-[10px] font-bold leading-none";

export function TypeScriptIcon({ className = "" }: IconProps) {
  return (
    <span className={`${badge} bg-[#3178C6] text-white ${className}`}>TS</span>
  );
}

export function JavaScriptIcon({ className = "" }: IconProps) {
  return (
    <span className={`${badge} bg-[#F7DF1E] text-black ${className}`}>JS</span>
  );
}

export function NextIcon({ className = "" }: IconProps) {
  // Brand is monochrome — use the theme foreground so it reads on either theme.
  return (
    <span
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground font-serif text-[12px] font-bold leading-none text-background ${className}`}
    >
      N
    </span>
  );
}

export function ReactIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} aria-hidden>
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function TailwindIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} aria-hidden>
      <path
        fill="#38BDF8"
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.92 1.36C13.42 10.87 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.92-1.36C15.58 7.13 14.5 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.92 1.36C8.42 16.87 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.92-1.36C10.58 13.13 9.5 12 7 12Z"
      />
    </svg>
  );
}

export function NodeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} aria-hidden>
      <path
        fill="#5FA04E"
        d="M12 1.8a1 1 0 0 1 .5.13l8 4.62a1 1 0 0 1 .5.87v9.16a1 1 0 0 1-.5.87l-8 4.62a1 1 0 0 1-1 0l-8-4.62a1 1 0 0 1-.5-.87V7.42a1 1 0 0 1 .5-.87l8-4.62A1 1 0 0 1 12 1.8Z"
      />
    </svg>
  );
}

export const techIcons: Record<string, (props: IconProps) => React.JSX.Element> =
  {
    typescript: TypeScriptIcon,
    javascript: JavaScriptIcon,
    nextjs: NextIcon,
    react: ReactIcon,
    tailwind: TailwindIcon,
    nodejs: NodeIcon,
  };
