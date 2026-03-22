import { FadeIn } from "@/app/components/ui/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left */}
          <FadeIn>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#41B3FF]">
              About the Coach
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.6rem,5vw,4.2rem)] leading-[0.95] tracking-tight text-white">
              HE&apos;S BEEN
              <br />
              WHERE YOU
              <br />
              WANT TO GO.
            </h2>

            <div className="space-y-5 text-[0.95rem] leading-[1.85] text-[#8BA3C4]">
              <p>
                Sam Sternschein grew up in Syosset, New York and played his way
                from the USHL all the way to professional hockey. He wore #27
                his entire career — it&apos;s the number on his jersey, and
                it&apos;s the name on his business.
              </p>
              <p>
                At Penn State he played 112 games and scored 52 points,
                including 12 goals in a single season as part of a Big Ten
                Championship team. He finished his college career at Boston
                College before signing his first professional contract in 2022.
              </p>
              <p>
                Over 4 years in the ECHL he competed against the best players
                below the NHL. That experience — knowing what separates good
                players from professional ones — is what he brings to every
                session.
              </p>
              <p className="font-semibold text-white">
                His coaching is direct, specific, and built on what actually
                works at the highest levels.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded bg-[#41B3FF] px-7 py-3.5 font-[family-name:var(--font-display)] text-[0.9rem] font-bold uppercase tracking-[0.1em] text-[#08101E] transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Train with Sam
              </a>
              <a
                href="https://www.instagram.com/27hockey_/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/15 px-7 py-3.5 font-[family-name:var(--font-display)] text-[0.9rem] uppercase tracking-[0.1em] text-[#8BA3C4] transition-all hover:border-[#41B3FF]/40 hover:text-white"
              >
                @27hockey_
              </a>
            </div>
          </FadeIn>

          {/* Right — stat cards */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "4", label: "Years Professional\n(ECHL)" },
                { number: "136", label: "NCAA\nGames Played" },
                { number: "2", label: "College Programs\n(PSU + BC)" },
                { number: "#27", label: "His Number.\nHis Brand." },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[#41B3FF]/10 bg-[#0F1C2E] p-7 transition-colors hover:border-[#41B3FF]/25"
                >
                  <div className="mb-1 font-[family-name:var(--font-display)] text-[2.8rem] leading-none text-[#41B3FF]">
                    {stat.number}
                  </div>
                  <div className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] whitespace-pre-line text-[#8BA3C4]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-[#41B3FF]/10 bg-[#0F1C2E] p-7">
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#41B3FF]">
                Sam on his approach
              </p>
              <blockquote className="mt-3 text-[1rem] leading-[1.75] italic text-[#8BA3C4]">
                &ldquo;When he defines his game well — a very simplistic
                definition of what he does — he seems to just be really, really
                good.&rdquo;
              </blockquote>
              <p className="mt-3 text-[0.75rem] text-[#8BA3C4]/60">
                — Penn State Head Coach Guy Gadowsky on Sam&apos;s development
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
