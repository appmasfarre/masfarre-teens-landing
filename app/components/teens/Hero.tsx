import { WhatsAppIcon } from "./WhatsAppIcon";
import { EVENT } from "./event-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(72px,13vw,132px)] pb-[clamp(56px,9vw,96px)]">
      <div className="blob w-[620px] h-[620px] -top-[220px] -left-[180px]" />
      <div className="relative z-[2] max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="eyebrow mb-[22px]">Primera edición · Cupos limitados</div>

        <h1 className="font-heading font-medium text-[clamp(38px,6.2vw,74px)] leading-[1.06] max-w-[16ch]">
          La experiencia empieza{" "}
          <em className="italic font-semibold text-accent">mucho antes</em> de los 15.
        </h1>

        <p className="mt-6 max-w-[46ch] text-[clamp(16px,1.9vw,19px)] text-ink-dim">
          Un evento exclusivo de Masfarré para adolescentes de 12, 13 y 14 años que ya
          empiezan a imaginar su fiesta — junto a sus familias.
        </p>

        <div className="flex flex-wrap gap-[10px] mt-[30px] mb-9">
          <span className="chip">
            📅 <b className="text-ink font-bold">{EVENT.dateLabel}</b>
          </span>
          <span className="chip">📍 {EVENT.venue}</span>
          <span className="chip">{EVENT.priceLabel}</span>
        </div>

        <div className="flex flex-wrap gap-[14px]">
          <a href={EVENT.formHref} className="btn btn-primary">
            Inscribirme
          </a>
          <a href={EVENT.whatsappHref} className="btn btn-ghost">
            <WhatsAppIcon className="w-[17px] h-[17px] opacity-85" />
            ¿Dudas? Consultanos
          </a>
        </div>
      </div>
    </section>
  );
}
