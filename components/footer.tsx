import Link from "next/link";
import { profile } from "@/lib/data";
import { SocialIconRow } from "@/components/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <Link
            href="/"
            className="font-mono text-sm font-semibold text-foreground"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-sm text-subtle">
            © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
        <SocialIconRow />
      </div>
    </footer>
  );
}
