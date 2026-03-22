"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08101E]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(65,179,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-white"
        >
          27<span className="text-[#41B3FF]">HOCKEY</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#8BA3C4] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.instagram.com/27hockey_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8BA3C4] transition-colors hover:text-[#41B3FF]"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#contact"
            className="rounded bg-[#41B3FF] px-5 py-2 font-[family-name:var(--font-display)] text-[0.8rem] font-bold uppercase tracking-[0.08em] text-[#08101E] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_4px_16px_rgba(65,179,255,0.35)]"
          >
            Book a Session
          </a>
        </div>

        <button
          className="p-1 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#08101E] md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-[#8BA3C4] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded bg-[#41B3FF] px-3 py-3 text-center font-[family-name:var(--font-display)] text-[0.85rem] font-bold uppercase tracking-[0.08em] text-[#08101E]"
              >
                Book a Session
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
