"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button className="theme-toggle" type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
      <span className="theme-symbol" aria-hidden="true" />
      <span>Appearance</span>
    </button>
  );
}
