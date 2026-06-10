import { socials } from "@/lib/data";
import { socialIcons, ArrowUpRightIcon } from "@/components/icons";

/** Compact icon-only row of social links. */
export function SocialIconRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((social) => {
        const Icon = socialIcons[social.label];
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {Icon ? <Icon /> : social.label}
          </a>
        );
      })}
    </div>
  );
}

/** Full-width list of social links with handle + hover arrow. */
export function SocialLinkList() {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {socials.map((social) => {
        const Icon = socialIcons[social.label];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-4 text-muted transition-colors hover:text-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                {Icon ? <Icon /> : null}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {social.label}
                </span>
                <span className="font-mono text-xs text-subtle">
                  {social.handle}
                </span>
              </span>
              <ArrowUpRightIcon className="ml-auto text-subtle transition-colors group-hover:text-accent" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
