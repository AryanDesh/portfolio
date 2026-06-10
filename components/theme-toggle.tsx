"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

type Theme = "light" | "dark";

/**
 * Inline "THEME (icon)" control that lives in the sitemap row of the nav.
 * Initial theme is applied before paint by the inline script in the root
 * layout; this just flips the `.dark` class on <html> and persists the choice.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore unavailable storage (e.g. private mode)
    }
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
    >
      THEME
      <span aria-hidden className="inline-flex h-3.5 w-3.5 items-center justify-center">
        {/* Empty until mounted so SSR and first client render match. */}
        {theme === null ? null : isDark ? (
          <SunIcon className="h-3.5 w-3.5" />
        ) : (
          <MoonIcon className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}
