// Single viewport — no vertical scroll. Other (site) pages scroll inside
// <main> via the parent layout's overflow-y-auto.
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden">{children}</div>
  );
}
