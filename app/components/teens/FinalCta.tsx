import { EVENT } from "./event-data";

export function FinalCta() {
  return (
    <section className="text-center py-[clamp(72px,11vw,120px)] pb-[clamp(52px,8vw,76px)] relative">
      <div className="blob w-[480px] h-[480px] -bottom-[200px] -left-[160px]" />
      <div className="relative z-[2] max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink-faint mb-[14px]">
          Nosotros también imaginamos esto
        </div>
        <h2 className="font-heading font-medium text-[clamp(30px,4.6vw,50px)] max-w-[17ch] mx-auto">
          Masfarré Teens: <em className="italic text-accent">la experiencia.</em>
        </h2>
        <div className="flex justify-center mt-9">
          <a href={EVENT.formHref} className="btn btn-primary">
            Agendá la fecha
          </a>
        </div>
      </div>
    </section>
  );
}
