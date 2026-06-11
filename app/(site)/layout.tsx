import { Nav } from "@/components/nav";

// Layout for the inner pages: nav at the top, page content below. The shell is
// viewport-locked; <main> scrolls for long pages. /projects opts out via its
// own layout (single-screen, no scroll).
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Nav />
      <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
