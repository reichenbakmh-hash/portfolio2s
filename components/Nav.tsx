"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 transition-all duration-500 ${
          scrolled ? "bg-white/70 shadow-[0_10px_30px_-15px_rgba(184,169,201,0.5)] backdrop-blur-md" : ""
        } py-2`}
      >
        <a href="#accueil" className="font-display text-lg text-ink">
          Stéphie<span className="text-mauveblush">.</span>
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm transition-colors hover:text-mauveblush ${
                active === l.href ? "text-mauveblush" : "text-inkfade"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span
            className={`h-[2px] w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-[2px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="mx-4 mt-2 flex flex-col gap-1 rounded-3xl bg-white/90 p-4 shadow-lg backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 font-body text-sm hover:bg-cream hover:text-mauveblush ${
                active === l.href ? "bg-cream text-mauveblush" : "text-inkfade"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
