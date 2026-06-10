import type { Metadata } from "next";
import { Geist, Geist_Mono, Tinos } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Serif display face for the hero name — Tinos is metric-compatible with Times.
const tinos = Tinos({
  variable: "--font-tinos",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: set this to your real domain once deployed (used for OG/Twitter image URLs).
  metadataBase: new URL("https://aryandeshmukh.dev"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

// Runs before paint to apply the saved (or system) theme with no flash of the
// wrong colors. Honors an explicit choice in localStorage, else system setting.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${tinos.variable} h-full antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
