"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background rink image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/marc_gatcomb_27_hockey.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Deep dark overlay */}
      <div className="absolute inset-0 bg-[#08101E]/80" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(8,16,30,0.7) 100%)",
        }}
      />
      {/* Bottom bleed into page */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, #08101E 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-32 pb-44 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-[#41B3FF]"
        >
          27Hockey Training &amp; Development
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.01em] text-white"
        >
          FASTER.
          <br />
          <span
            className="text-[#41B3FF]"
            style={{ textShadow: "0 0 40px rgba(65,179,255,0.4)" }}
          >
            SHARPER.
          </span>
          <br />
          NEXT LEVEL.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-[520px] text-[1.05rem] leading-[1.75] text-[#8BA3C4]"
        >
          Sam Sternschein — Penn State, Boston College, and 4 years of
          professional hockey — coaches players who are serious about getting
          better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded bg-[#41B3FF] px-9 py-4 font-[family-name:var(--font-display)] text-[1rem] font-bold uppercase tracking-[0.1em] text-[#08101E] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_30px_rgba(65,179,255,0.4)]"
          >
            Book a Session
          </a>
          <a
            href="#about"
            className="rounded border border-white/20 px-9 py-4 font-[family-name:var(--font-display)] text-[1rem] uppercase tracking-[0.1em] text-white transition-all hover:border-[#41B3FF]/50 hover:bg-white/5"
          >
            About Sam
          </a>
        </motion.div>
      </div>
    </section>
  );
}
