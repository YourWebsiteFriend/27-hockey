export function MarqueeSection() {
  const text =
    "EDGES. SPEED. DECEPTION. SHOOTING. HOCKEY IQ. TRAIN WITH A PRO. \u00a0\u00a0\u00a0 ";

  return (
    <div className="overflow-hidden border-y border-[#41B3FF]/10 bg-[#08101E] py-4">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="mx-2 font-[family-name:var(--font-display)] text-[1.3rem] uppercase tracking-[0.12em] text-[#41B3FF]/40"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
