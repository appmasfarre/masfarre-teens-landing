const ITEMS = [
  "Es cantar con tus amigas.",
  "Es bailar sin mirar la hora.",
  "Es que sea una noche completamente tuya, hecha a tu medida.",
];

export function Sensory() {
  return (
    <section className="py-[clamp(56px,9vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[62ch] mb-[clamp(32px,5vw,52px)]">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink-faint mb-[14px]">
            Ya sabés que no es sólo tu fiesta de 15
          </div>
          <h2 className="font-heading font-medium text-[clamp(27px,3.6vw,42px)] leading-[1.12]">
            Tu fiesta es mucho más que una noche.
          </h2>
          <p className="mt-[18px] text-[clamp(16px,1.9vw,19px)] text-ink-dim">
            Es todo eso que te hace feliz:
          </p>
        </div>

        <div className="hairline-grid grid-cols-1 md:grid-cols-3">
          {ITEMS.map((text) => (
            <div
              key={text}
              className="bg-bg-raised p-[34px_26px] min-h-[172px] flex flex-col justify-end font-heading italic font-medium text-[21px] leading-[1.32]"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
