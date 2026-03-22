import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F1C2E] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-white"
            >
              27<span className="text-[#41B3FF]">HOCKEY</span>
            </Link>
            <p className="mt-3 max-w-xs text-[0.85rem] leading-relaxed text-[#8BA3C4]">
              Skills coaching from Sam Sternschein — Penn State, Boston College, and 4 years of professional hockey.
            </p>
            <a
              href="https://www.instagram.com/27hockey_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[0.8rem] text-[#8BA3C4] transition-colors hover:text-[#41B3FF]"
            >
              <Instagram size={15} />
              @27hockey_
            </a>
          </div>

          <div>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#41B3FF]">
              Navigate
            </p>
            {[
              { label: "About Sam", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Programs", href: "#programs" },
              { label: "Results", href: "#results" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mt-2 block text-[0.85rem] text-[#8BA3C4] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#41B3FF]">
              Get Started
            </p>
            <a
              href="#contact"
              className="mt-2 block text-[0.85rem] text-[#8BA3C4] transition-colors hover:text-white"
            >
              Book a Session
            </a>
            <a
              href="https://www.instagram.com/27hockey_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[0.85rem] text-[#8BA3C4] transition-colors hover:text-white"
            >
              Message on Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center">
          <span className="text-[0.75rem] text-[#8BA3C4]/60">
            &copy; {new Date().getFullYear()} 27Hockey Training and Development. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
