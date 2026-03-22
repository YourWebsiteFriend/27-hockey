import { FadeIn } from "@/app/components/ui/FadeIn";
import { Zap, Eye, Target, ArrowRight, Repeat, Shield } from "lucide-react";

const skills = [
  {
    icon: Zap,
    title: "Edges & Edge Work",
    description:
      "Deep, confident edges that give you deception and control at full speed. The foundation of every elite skater.",
  },
  {
    icon: Eye,
    title: "Reading & Reacting",
    description:
      "Train your instincts to read pressure and react before the play develops — moving your feet out of turns with purpose.",
  },
  {
    icon: ArrowRight,
    title: "Crossovers & Speed",
    description:
      "Generate power through proper crossover mechanics. More speed, tighter turns, quicker separation from defenders.",
  },
  {
    icon: Target,
    title: "Shooting & Finishing",
    description:
      "Change angles, shoot through screens, off the rush, and in tight. Build a dangerous release that goalies can't read.",
  },
  {
    icon: Shield,
    title: "Puck Control & Deception",
    description:
      "Stick skills that hold up under pressure. Protect the puck, create space, and make plays in tight.",
  },
  {
    icon: Repeat,
    title: "Hockey IQ",
    description:
      "Understand why the best players make the plays they do. Sam coaches the mental side — not just the physical.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/5 bg-[#0F1C2E] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mb-16">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#41B3FF]">
            What You&apos;ll Train
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] text-white">
            REAL SKILLS.
            <br />
            REAL REPS.
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-[1.8] text-[#8BA3C4]">
            Every drill in a 27Hockey session is pulled directly from what Sam
            trained at Penn State, Boston College, and in professional hockey.
            Nothing theoretical. Everything tested.
          </p>
        </FadeIn>

        <div className="grid gap-px border border-[#41B3FF]/8 bg-[#41B3FF]/8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <FadeIn key={skill.title} delay={i * 0.07}>
              <div className="flex h-full flex-col gap-4 bg-[#0F1C2E] p-8 transition-colors hover:bg-[#162035]">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-[#41B3FF]/20 text-[#41B3FF]">
                  <skill.icon size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[1.2rem] text-white">
                    {skill.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.75] text-[#8BA3C4]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
