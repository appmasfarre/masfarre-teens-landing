import Image from "next/image";
import { EVENT } from "./event-data";

export function Referral() {
  return (
    <section className="py-[clamp(56px,9vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[clamp(28px,5vw,56px)] items-center">
          <div>
            <span className="inline-block font-bold text-xs tracking-[0.14em] text-accent uppercase mb-[18px]">
              Spoiler
            </span>
            <h2 className="font-heading font-medium text-[clamp(26px,3.6vw,38px)] leading-[1.18]">
              Las dos van a querer venir a Masfarré Teens.
            </h2>
            <p className="mt-[18px] max-w-[46ch] text-[clamp(16px,1.9vw,19px)] text-ink-dim">
              Seguro tenés una amiga que ya tiene toda su fiesta pensada. Invitala — esto
              se vive mejor de a dos.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[26px]">
              <a href={EVENT.formHref} className="btn btn-primary">
                Anotarnos las dos
              </a>
            </div>
          </div>
          <div className="relative rounded-md overflow-hidden border border-line aspect-[4/3] grayscale-[0.15]">
            <Image
              src="/images/referral.jpg"
              alt="DJ set de Masfarré en una fiesta de 15, luces rosas."
              fill
              sizes="(min-width: 820px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
