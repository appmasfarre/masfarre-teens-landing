import { EVENT } from "./event-data";

// Copy aprobado — no parafrasear sin volver a pasar por aprobación.
export function ParentsSection() {
  return (
    <section className="py-[clamp(56px,9vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div
          className="rounded-md border border-line p-[clamp(32px,5vw,56px)] max-w-[760px] mx-auto text-center"
          style={{
            background:
              "radial-gradient(circle at 88% 12%, var(--accent-soft), transparent 45%), var(--bg-raised-2)",
          }}
        >
          <span className="inline-block font-bold text-xs tracking-[0.14em] text-accent uppercase mb-[14px]">
            Para las familias
          </span>
          <h2 className="font-heading font-medium text-[clamp(24px,3.4vw,32px)] leading-[1.22] max-w-[24ch] mx-auto">
            Para las mamás, los papás y los tutores
          </h2>
          <p className="hook mt-3 text-accent text-[clamp(17px,2.1vw,21px)] max-w-[36ch] mx-auto">
            Mientras ellas viven la experiencia, ustedes también tienen la suya.
          </p>
          <p className="mt-6 text-[clamp(15px,1.7vw,17px)] text-ink-dim max-w-[52ch] mx-auto">
            No hace falta que esperen en el auto. Les armamos un espacio propio —
            mesas, sillas, brindis y picada sin cargo — para que conozcan de cerca
            cómo trabajamos: la calidad, la seguridad, el equipo detrás de cada
            producción. Sin compromiso, les contamos los planes de pago y
            resolvemos las dudas que tengan antes de contratar.
          </p>
          <p className="mt-4 text-[13.5px] text-ink-faint max-w-[52ch] mx-auto">
            No es obligatorio. Pero los invitamos con todas las ganas — contanos
            en el formulario si nos acompañan.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px] mt-7">
            <a href={EVENT.formHref} className="btn btn-ghost">
              Ir al formulario
            </a>
            <a href="/teens/padres" className="btn btn-ghost">
              Conocé más para familias
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
