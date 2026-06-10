"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "INDEX" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="hatch sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1760px] items-start justify-between gap-6 px-8 py-3">
        {/* Left: availability */}
        <div className="leading-tight">
          <p className="text-[11px] text-subtle">Availability</p>
          <p className="font-mono text-[11px] uppercase tracking-wide text-foreground sm:text-xs">
            {profile.availabilityLabel}
          </p>
        </div>

        {/* Right: sitemap + theme */}
        <div className="text-right leading-tight">
          <p className="text-[11px] text-subtle">Sitemap</p>
          <nav className="mt-0.5 flex flex-wrap items-center justify-end gap-x-1.5 font-mono text-[11px] uppercase tracking-wide sm:text-xs">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Fragment key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors ${
                      active ? "text-accent" : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <span aria-hidden className="text-subtle">
                    ,
                  </span>
                </Fragment>
              );
            })}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
