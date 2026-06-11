"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

/**
 * Infinite right-to-left project marquee, driven by requestAnimationFrame so it
 * can be dragged. The card list is rendered twice; the transform is wrapped
 * within one copy width so it loops seamlessly. Behaviour:
 *  - auto-scrolls left at `speed` px/s,
 *  - click/touch + drag anywhere grabs the whole line and scrolls it 1:1,
 *  - releasing throws it with momentum that eases back into the auto-scroll.
 */
export function ProjectMarquee({
  projects,
  speed = 120,
}: {
  projects: Project[];
  speed?: number;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Mutable animation state (kept in refs so the rAF loop never restarts).
  const offset = useRef(0);
  const copyWidth = useRef(0);
  const momentum = useRef(0); // px/s, added on top of auto-scroll, decays away
  const dragging = useRef(false);
  // Set when a drag happens so the click that fires on release doesn't
  // activate links (e.g. a card's GitHub icon). Reset on the next pointerdown.
  const suppressClick = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const autoSpeed = reduce ? 0 : speed;

    // One "copy" = distance from the first card to its duplicate.
    const measure = () => {
      const kids = track.children;
      if (kids.length >= projects.length + 1) {
        copyWidth.current =
          (kids[projects.length] as HTMLElement).offsetLeft -
          (kids[0] as HTMLElement).offsetLeft;
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const wrap = () => {
      const cw = copyWidth.current;
      if (cw <= 0) return;
      // keep offset within (-cw, 0] so content always fills the viewport
      while (offset.current <= -cw) offset.current += cw;
      while (offset.current > 0) offset.current -= cw;
    };

    let raf = 0;
    let prev = performance.now();
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      if (!dragging.current) {
        // momentum eases out, then plain auto-scroll remains
        momentum.current *= 0.94;
        if (Math.abs(momentum.current) < 2) momentum.current = 0;
        offset.current += (-autoSpeed + momentum.current) * dt;
      }
      wrap();
      track.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // ---- Drag (pointer) ----
    let pending = false;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastT = 0;

    const onDown = (e: PointerEvent) => {
      pending = true;
      dragging.current = false;
      suppressClick.current = false;
      startX = lastX = e.clientX;
      startY = e.clientY;
      lastT = performance.now();
      momentum.current = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) {
        if (!pending) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return; // below threshold
        if (Math.abs(dy) > Math.abs(dx)) {
          // vertical intent → let the page scroll, don't hijack
          pending = false;
          return;
        }
        // horizontal intent → start dragging
        dragging.current = true;
        suppressClick.current = true;
        pending = false;
        lastX = e.clientX;
        lastT = performance.now();
        viewport.setPointerCapture(e.pointerId);
      }
      const now = performance.now();
      const dt = Math.max(0.001, (now - lastT) / 1000);
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      lastT = now;
      momentum.current = dx / dt; // becomes the throw velocity on release
      offset.current += dx;
    };

    const onUp = (e: PointerEvent) => {
      pending = false;
      if (!dragging.current) return;
      dragging.current = false;
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch {
        // capture may already be released
      }
      // clamp the throw so a hard flick doesn't launch it across the page
      momentum.current = Math.max(-3500, Math.min(3500, momentum.current));
    };

    viewport.addEventListener("pointerdown", onDown);
    viewport.addEventListener("pointermove", onMove);
    viewport.addEventListener("pointerup", onUp);
    viewport.addEventListener("pointercancel", onUp);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      viewport.removeEventListener("pointerdown", onDown);
      viewport.removeEventListener("pointermove", onMove);
      viewport.removeEventListener("pointerup", onUp);
      viewport.removeEventListener("pointercancel", onUp);
    };
  }, [projects.length, speed]);

  const loop = [...projects, ...projects];

  return (
    <div
      ref={viewportRef}
      onClickCapture={(e) => {
        if (suppressClick.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      className="relative w-full cursor-grab touch-pan-y select-none overflow-hidden border-b border-border py-12 active:cursor-grabbing sm:py-16"
    >
      {/* Edge fades so cards dissolve into the background at both ends */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32"
      />

      <div
        ref={trackRef}
        className="flex w-max items-stretch will-change-transform"
      >
        {loop.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className="mr-6 shrink-0"
            aria-hidden={index >= projects.length ? true : undefined}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
