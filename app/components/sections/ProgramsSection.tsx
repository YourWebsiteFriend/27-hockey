import { FadeIn } from "@/app/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    tag: "Most Popular",
    title: "Private Training",
    subtitle: "1-on-1 with Sam",
    price: "Inquire for Rates",
    description:
      "One session, full attention. Sam works with you specifically — identifying your gaps, building your strengths, and giving you the reps that move the needle.",
    includes: [
      "Full session on the ice with Sam",
      "Video review available",
      "Individualized drill plan",
      "Focused on YOUR game",
    ],
  },
  {
    tag: "Small Group",
    title: "Group Sessions",
    subtitle: "2–4 Players",
    price: "Inquire for Rates",
    description:
      "Low player-to-coach ratio. Competitive environment. Every rep has a purpose and every drill connects to what happens in real games.",
    includes: [
      "High-intensity competitive drills",
      "Low ratio — max 4 players",
      "All skill levels welcome",
      "Game-situation focused",
    ],
  },
  {
    tag: "Specialty",
    title: "Shooting Development",
    subtitle: "Dedicated Session",
    price: "Inquire for Rates",
    description:
      "Build a release goalies can't read. Sessions cover changing angles, shooting through screens, off the rush, and in-tight finishing.",
    includes: [
      "Changing angles & shot release",
      "Screen shots & deflections",
      "Off-the-rush finishing",
      "Puck placement & accuracy",
    ],
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="border-t border-white/5 bg-[#0F1C2E] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#41B3FF]">
              Training Programs
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] text-white">
              PICK YOUR
              <br />
              PROGRAM.
            </h2>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-[0.85rem] font-semibold text-[#41B3FF] transition-colors hover:text-white"
          >
            Not sure? Message Sam <ArrowRight size={15} />
          </a>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program, i) => (
            <FadeIn key={program.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-lg border border-[#41B3FF]/10 bg-[#162035] transition-colors hover:border-[#41B3FF]/25">
                {/* Header */}
                <div className="border-b border-[#41B3FF]/10 p-7">
                  <div className="mb-4 inline-block rounded border border-[#41B3FF]/20 bg-[#41B3FF]/8 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#41B3FF]">
                    {program.tag}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.9rem] leading-none text-white">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-[0.8rem] uppercase tracking-[0.08em] text-[#8BA3C4]">
                    {program.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-6 text-[0.9rem] leading-[1.75] text-[#8BA3C4]">
                    {program.description}
                  </p>

                  <ul className="mb-8 flex-1 space-y-3">
                    {program.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#41B3FF]" />
                        <span className="text-[0.85rem] text-[#8BA3C4]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="block w-full rounded border border-[#41B3FF]/30 py-3.5 text-center font-[family-name:var(--font-display)] text-[0.9rem] uppercase tracking-[0.08em] text-[#41B3FF] transition-all hover:bg-[#41B3FF] hover:text-[#08101E]"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
