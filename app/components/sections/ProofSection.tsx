import { FadeIn } from "@/app/components/ui/FadeIn";

export function ProofSection() {
  return (
    <section id="results" className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mb-4">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#41B3FF]">
            Who He&apos;s Worked With
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] text-white">
            THE PROOF IS
            <br />
            ON THE ICE.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Marc Gatcomb feature card */}
          <FadeIn>
            <div className="relative overflow-hidden rounded-lg border border-[#41B3FF]/15 bg-[#0F1C2E]">
              <div
                className="h-64 w-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80&auto=format')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="h-full w-full bg-[#08101E]/60" />
              </div>

              <div className="p-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded border border-[#41B3FF]/20 bg-[#41B3FF]/8 px-3 py-1">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#41B3FF]">
                    Notable Client
                  </span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[2rem] leading-none text-white">
                  MARC GATCOMB
                </h3>
                <p className="mt-1 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-[#41B3FF]">
                  New York Islanders — NHL
                </p>
                <p className="mt-4 text-[0.9rem] leading-[1.75] text-[#8BA3C4]">
                  Marc Gatcomb trained with Sam and went on to reach the NHL
                  with the New York Islanders. The kind of result that speaks
                  for itself.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right column — what makes Sam different */}
          <FadeIn delay={0.15}>
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="rounded-lg border border-[#41B3FF]/10 bg-[#0F1C2E] p-7">
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#41B3FF]">
                  What Sets Sam Apart
                </p>
                <ul className="mt-5 space-y-4">
                  {[
                    "Competed at the highest levels — USHL, Big Ten, ECHL",
                    "Coached at player development programs across the NYC metro area",
                    "Works with players from youth through college and beyond",
                    "Teaches real game situations, not just practice-only drills",
                    "Every session is individualized — no cookie-cutter workouts",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#41B3FF]" />
                      <span className="text-[0.9rem] leading-[1.7] text-[#8BA3C4]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#41B3FF]/15 bg-[#0F1C2E] p-7">
                <p className="font-[family-name:var(--font-display)] text-[1.6rem] leading-tight text-white">
                  &ldquo;SAM KNOWS WHAT SEPARATES GOOD PLAYERS FROM GREAT
                  ONES. HE&apos;S BEEN THERE.&rdquo;
                </p>
                <p className="mt-4 text-[0.75rem] uppercase tracking-[0.1em] text-[#8BA3C4]/60">
                  — 27Hockey Player
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
