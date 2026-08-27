const STEPS = [
  { label: "Cuando lo imaginas", quote: "Quiero festejar mis 15.", opacity: "opacity-[.72]" },
  { label: "Cuando ya lo deseas", quote: "Quiero una fiesta así.", opacity: "opacity-[.87]" },
  {
    label: "Cuando la magia sucede",
    quote: "Quiero que ya sea mi noche.",
    opacity: "opacity-100",
    accent: true,
  },
];

export function Funnel() {
  return (
    <section className="py-[clamp(56px,9vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[62ch] mb-[clamp(32px,5vw,52px)]">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink-faint mb-[14px]">
            Cómo se siente
          </div>
          <h2 className="font-heading font-medium text-[clamp(27px,3.6vw,42px)] leading-[1.12]">
            Primero las ganas de festejar. Después, todo lo demás.
          </h2>
        </div>

        <div className="hairline-grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.label} className={`bg-bg-raised p-7 md:p-[30px_26px] ${step.opacity}`}>
              <div
                className={`text-[11.5px] font-bold uppercase tracking-[0.12em] mb-4 ${
                  step.accent ? "text-accent" : "text-ink-faint"
                }`}
              >
                {step.label}
              </div>
              <div className="font-heading italic font-medium text-[22px] leading-[1.32]">
                &quot;{step.quote}&quot;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
