"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "@/app/components/ui/FadeIn";
import { Instagram } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-[#0F1C2E] py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          {/* Left */}
          <FadeIn>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#41B3FF]">
              Get Started
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] text-white">
              READY TO
              <br />
              TRAIN?
            </h2>

            <div className="space-y-8 text-[0.9rem] leading-[1.8] text-[#8BA3C4]">
              <div>
                <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white">
                  Hours
                </p>
                <p>
                  Mon–Fri: 9am – 5pm
                  <br />
                  Saturday: 9am – 2pm
                  <br />
                  Sunday: By appointment
                </p>
              </div>

              <div>
                <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/27hockey_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#41B3FF] transition-colors hover:text-white"
                >
                  <Instagram size={16} />
                  @27hockey_
                </a>
                <p className="mt-2 text-[0.85rem]">
                  DM Sam directly on Instagram for the fastest response.
                </p>
              </div>

              <div className="rounded-lg border border-[#41B3FF]/10 bg-[#162035] p-6">
                <p className="font-[family-name:var(--font-display)] text-[1.1rem] text-white">
                  Not sure which program is right for your player?
                </p>
                <p className="mt-2 text-[0.85rem]">
                  Message Sam directly on Instagram and he&apos;ll point you in
                  the right direction. No pressure, no sales pitch.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.12}>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-lg border border-[#41B3FF]/15 bg-[#162035] p-16 text-center">
                <div>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#41B3FF]/30 bg-[#41B3FF]/10 text-[#41B3FF]">
                    ✓
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[2rem] text-white">
                    MESSAGE SENT.
                  </h3>
                  <p className="mt-2 text-[0.9rem] text-[#8BA3C4]">
                    Sam will be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-[#41B3FF]/10 bg-[#162035] p-8 lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Player's first name"
                      className="w-full rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white placeholder-[#8BA3C4]/50 outline-none transition-colors focus:border-[#41B3FF]/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Player's last name"
                      className="w-full rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white placeholder-[#8BA3C4]/50 outline-none transition-colors focus:border-[#41B3FF]/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      Age / Birth Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15 / 2009"
                      className="w-full rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white placeholder-[#8BA3C4]/50 outline-none transition-colors focus:border-[#41B3FF]/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      Current Team / Level
                    </label>
                    <input
                      type="text"
                      placeholder="Team name or level"
                      className="w-full rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white placeholder-[#8BA3C4]/50 outline-none transition-colors focus:border-[#41B3FF]/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      Parent / Guardian Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white placeholder-[#8BA3C4]/50 outline-none transition-colors focus:border-[#41B3FF]/50"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      Training Interest
                    </label>
                    <select className="w-full rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white outline-none transition-colors focus:border-[#41B3FF]/50">
                      <option value="">Select a program</option>
                      <option>Private Training (1-on-1)</option>
                      <option>Small Group Sessions</option>
                      <option>Shooting Development</option>
                      <option>Not sure — want a recommendation</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#8BA3C4]">
                      Anything Else
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell Sam about the player — goals, position, what you want to improve"
                      className="w-full resize-none rounded border border-white/8 bg-[#0F1C2E] px-4 py-3 text-[0.9rem] text-white placeholder-[#8BA3C4]/50 outline-none transition-colors focus:border-[#41B3FF]/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded bg-[#41B3FF] py-4 font-[family-name:var(--font-display)] text-[1rem] font-bold uppercase tracking-[0.1em] text-[#08101E] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_24px_rgba(65,179,255,0.3)] active:scale-[0.99]"
                >
                  Send Inquiry
                </button>

                <p className="mt-4 text-center text-[0.78rem] text-[#8BA3C4]/60">
                  Or DM directly on Instagram{" "}
                  <a
                    href="https://www.instagram.com/27hockey_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#41B3FF]/80 hover:text-[#41B3FF]"
                  >
                    @27hockey_
                  </a>
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
