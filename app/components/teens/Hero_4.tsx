import Image from "next/image";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { EVENT } from "./event-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(72px,13vw,132px)] pb-[clamp(56px,9vw,96px)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Grupo de amigas en una fiesta de Masfarré, luces de neón."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/55" />
      </div>
      <div className="blob w-[620px] h-[620px] -top-[220px] -left-[180px]" />
      <div className="relative z-[2] max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="eyebrow mb-[22px]">Primera edición · Cupos limitados</div>

        <h1 className="font-heading font-medium text-[clamp(38px,6.2vw,74px)] leading-[1.06] max-w-[16ch] [text-shadow:0_2px_28px_rgba(0,0,0,0.6)]">
          La experiencia empieza{" "}
          <em className="italic font-semibold text-accent">mucho antes</em> de los 15.
        </h1>

        <p className="mt-6 max-w-[46ch] text-[clamp(16px,1.9vw,19px)] text-ink-dim [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
          Un evento exclusivo de Masfarré para las próximas quinceañeras que ya saben
          cómo quieren vivir la noche de su fiesta.
        </p>

        <div className="flex flex-wrap gap-[10px] mt-[30px] mb-9">
          <span className="chip">
            📅 <b className="text-ink font-bold">{EVENT.dateLabel}</b>
          </span>
          <span className="chip">📍 {EVENT.venue}</span>
          <span className="chip">{EVENT.priceLabel}</span>
        </div>

        <div id="hero-cta" className="flex flex-wrap gap-[14px]">
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
