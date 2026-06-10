import type { Metadata } from "next";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinkList } from "@/components/social-links";
import { MailIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="// contact"
        title="Get in touch"
        description="Have a role, a project, or just want to say hi? My inbox is always open — I'll do my best to get back to you."
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {/* Left: primary CTA + details */}
        <div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            Email me
          </a>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-muted">
              <MailIcon className="h-4 w-4 text-subtle" />
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted">
              <MapPinIcon className="h-4 w-4 text-subtle" />
              <span>{profile.location}</span>
            </div>
          </dl>
        </div>

        {/* Right: social links */}
        <div>
          <p className="mb-2 font-mono text-sm text-accent">// find me online</p>
          <SocialLinkList />
        </div>
      </div>
    </div>
  );
}
