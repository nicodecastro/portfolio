"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = ["About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        const sections = links.map(label => document.getElementById(label.toLowerCase())).filter((section): section is HTMLElement => section !== null);
        const reached = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * 0.35);
        setActive(reached.at(-1)?.id ?? "about");
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 },
    );
    links.forEach((label) => {
      const section = document.getElementById(label.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="navigation">
      <nav aria-label="Main navigation">
        {links.map((label) => {
          const id = label.toLowerCase();
          return (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setActive(id)}>
              <span className="nav-line" aria-hidden="true" />
              {label}
            </a>
          );
        })}
      </nav>
      <button className="theme-toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
        <span className="theme-symbol" aria-hidden="true" />
        <span>Appearance</span>
      </button>
    </div>
  );
}
