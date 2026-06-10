import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

// Layout for the inner pages: nav at the top, page content, footer at the
// bottom — these pages scroll normally. (The home page opts out of this group
// so it can be a single, footer-less, full-viewport screen.)
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
