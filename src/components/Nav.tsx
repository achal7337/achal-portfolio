"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <nav
          className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] text-sm font-bold text-white">
              A
            </span>
            <span className="text-sm font-medium tracking-tight">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-fg)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.company.url}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              AD Tech AI ↗
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg text-[var(--color-muted)] transition-colors hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open ? (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-fg)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.company.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 rounded-xl bg-white px-4 py-2.5 text-center text-sm font-medium text-black"
            >
              Visit AD Tech AI ↗
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
