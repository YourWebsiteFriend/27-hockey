import { FadeIn } from "@/app/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "Coach Sam's ability to relate to our son's learning style has increased his development faster than at any time during his hockey career.",
    name: "Travis Moran",
    detail: "Hockey Parent",
  },
  {
    quote:
      "Coach Sam has shaped me as a player in a whole new way for the better. I look forward to every lesson. If you are a young player and want to improve, this is the coach for you.",
    name: "Program Player",
    detail: "U16 Player",
  },
  {
    quote:
      "I have been working with Sam for about 2 years and the amount of improvement that has taken place is beyond words. He pushes you and you see results.",
    name: "Program Player",
    detail: "High School Forward",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mb-16">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#41B3FF]">
            Player Feedback
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] text-white">
            WHAT PLAYERS
            <br />
            ARE SAYING.
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-lg border border-[#41B3FF]/10 bg-[#0F1C2E] p-8">
                <blockquote className="mb-6 flex-1 text-[0.95rem] leading-[1.85] text-[#8BA3C4]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-white/5 pt-5">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="mt-0.5 text-[0.78rem] uppercase tracking-[0.08em] text-[#41B3FF]/70">
                    {t.detail}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
