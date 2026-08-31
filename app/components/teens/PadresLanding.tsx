import Image from "next/image";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Footer } from "./Footer";
import { EVENT } from "./event-data";

// Copy aprobado — no parafrasear sin volver a pasar por aprobación.
// Página exclusiva para las familias. No está en el menú principal: se llega
// acá por el mensaje de WhatsApp de confirmación (lo manda Gise) y por la
// nota del formulario de inscripción.
export function PadresLanding() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="blob w-[520px] h-[520px] top-[900px] -right-[220px]" />

      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/[.78] border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Image
            src="/images/logo-white.png"
            alt="Masfarré Teens"
            width={900}
            height={90}
            className="h-5 w-auto"
            priority
          />
          
            href="/teens"
            className="text-[13px] font-bold px-[18px] py-[9px] rounded border border-line whitespace-nowrap"
          >
            Volver a la experiencia
          </a>
        </div>
      </header>

      <main>
        <section className="relative pt-[clamp(56px,9vw,96px)] pb-[clamp(40px,6vw,64px)]">
          <div className="max-w-[820px] mx-auto px-5 sm:px-8 text-center">
            <div className="eyebrow mb-[22px] justify-center">
              Para mamás, papás y tutores
            </div>
            <h1 className="font-heading font-medium text-[clamp(32px,5vw,52px)] leading-[1.1]">
              ¿Qué es Masfarré Teens — La Experiencia?
            </h1>
            <p className="mt-6 text-[clamp(16px,1.9vw,19px)] text-ink-dim max-w-[54ch] mx-auto">
              El {EVENT.dateLabel.toLowerCase()} tu hija vive por una noche cómo
              es una fiesta Masfarré: la música, la producción, el clima. Es
              nuestra forma de mostrarle a ella — y de mostrarles a ustedes —
              lo que hacemos, sin que todavía haya nada que decidir.
            </p>
          </div>
        </section>

        <section className="py-[clamp(32px,5vw,56px)]">
          <div className="max-w-[820px] mx-auto px-5 sm:px-8">
            <div className="hairline-grid grid-cols-1">
              <div className="bg-bg-raised p-[clamp(28px,4vw,44px)]">
                <h2 className="font-heading font-medium text-[clamp(21px,2.6vw,26px)]">
                  Y para ustedes, ¿qué es?
                </h2>
                <p className="mt-4 text-[15.5px] text-ink-dim max-w-[58ch]">
                  Esa noche va a estar todo nuestro equipo ahí, para charlar y
                  responder lo que quieran preguntar. La idea es que se vayan
                  tranquilos sabiendo con quién va a estar su hija esa noche.
                </p>
              </div>
              <div className="bg-bg-raised p-[clamp(28px,4vw,44px)]">
                <h2 className="font-heading font-medium text-[clamp(21px,2.6vw,26px)]">
                  Un espacio para ustedes también
                </h2>
                <p className="mt-4 text-[15.5px] text-ink-dim max-w-[58ch]">
                  No hace falta que esperen afuera. Les armamos un sector
                  propio, separado del de las chicas — mesas, sillas, algo
                  para picar y para brindar — para que se relajen mientras
                  ellas disfrutan. Ahí van a poder conocer de cerca cómo
                  trabajamos: la calidad, el orden, el equipo detrás de cada
                  producción. Queremos mostrarles el ecosistema completo — no
                  solo cómo se ve una fiesta Masfarré, sino todo lo que hay
                  atrás para que salga así de bien.
                </p>
              </div>
              <div className="bg-bg-raised p-[clamp(28px,4vw,44px)]">
                <h2 className="font-heading font-medium text-[clamp(21px,2.6vw,26px)]">
                  Sin compromiso
                </h2>
                <p className="mt-4 text-[15.5px] text-ink-dim max-w-[58ch]">
                  La entrada es gratuita y no hay ningún costo ni obligación
                  de contratar nada. Es una invitación abierta a conocernos,
                  nada más.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[clamp(56px,9vw,96px)]">
          <div className="max-w-[720px] mx-auto px-5 sm:px-8">
            <div
              className="rounded-md border border-line p-[clamp(32px,5vw,56px)] text-center"
              style={{
                background:
                  "radial-gradient(circle at 88% 12%, var(--accent-soft), transparent 45%), var(--bg-raised-2)",
              }}
            >
              <p className="hook text-accent text-[clamp(18px,2.2vw,22px)] max-w-[40ch] mx-auto">
                Si les copa la idea, avísenle a cualquiera de nuestro equipo
                esa noche.
              </p>
              <p className="mt-4 text-[15px] text-ink-dim max-w-[46ch] mx-auto">
                Coordinamos un café en la oficina para mostrarles todo con
                calma. Sin ningún apuro.
              </p>
              <div className="flex flex-wrap justify-center gap-[14px] mt-7">
                <a href={EVENT.whatsappHref} className="btn btn-primary">
                  <WhatsAppIcon className="w-[17px] h-[17px] opacity-85" />
                  Escribinos por WhatsApp
                </a>
                <a href="/teens#inscripcion" className="btn btn-ghost">
                  Inscribir a mi hija
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
