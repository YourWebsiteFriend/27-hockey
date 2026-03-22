export function CredentialBar() {
  const credentials = [
    "Penn State Hockey",
    "Boston College Hockey",
    "4 Years Professional (ECHL)",
    "Big Ten Champion 2019–20",
    "136 NCAA Games",
  ];

  return (
    <div className="border-y border-[#41B3FF]/10 bg-[#0F1C2E] py-4">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5">
        {credentials.map((cred, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <span className="hidden h-1 w-1 rounded-full bg-[#41B3FF]/40 sm:block" />
            )}
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#8BA3C4]">
              {cred}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
