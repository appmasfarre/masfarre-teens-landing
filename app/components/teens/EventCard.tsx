import { WhatsAppIcon } from "./WhatsAppIcon";
import { InscripcionForm } from "./InscripcionForm";
import { EVENT } from "./event-data";

function EventRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[14px] text-[15.5px] font-medium text-ink-dim">
      <span className="w-9 h-9 rounded flex items-center justify-center bg-white/[.05] flex-none">
        {icon}
      </span>
      {children}
    </div>
  );
}

export function EventCard() {
  return (
    <section id="inscripcion" className="py-[clamp(56px,9vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div
          className="rounded-md border border-line p-[clamp(32px,5vw,56px)] grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:items-start"
          style={{
            background:
              "radial-gradient(circle at 12% 15%, var(--accent-soft), transparent 45%), var(--bg-raised-2)",
          }}
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink-faint mb-[14px]">
              Los datos
            </div>
            <h2 className="font-heading font-medium text-[clamp(24px,3.4vw,34px)]">
              Nos vemos el 23 de octubre.
            </h2>
            <div className="grid gap-4 mt-[26px]">
              <EventRow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[17px] h-[17px]">
                    <rect x="3" y="5" width="18" height="16" rx="3" />
                    <path d="M8 3v4M16 3v4M3 10h18" />
                  </svg>
                }
              >
                <b className="font-bold text-ink">{EVENT.dateLabel}</b>
              </EventRow>
              <EventRow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[17px] h-[17px]">
                    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                }
              >
                {EVENT.venue}
              </EventRow>
              <EventRow
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-[17px] h-[17px]">
                    <path d="M12 2 2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                }
              >
                Gratuito, con cupo limitado
              </EventRow>
            </div>
            
               <a href={EVENT.whatsappHref}
              className="btn btn-ghost justify-center mt-[26px] w-fit"
            >
              <WhatsAppIcon className="w-[17px] h-[17px] opacity-85" />
              Tengo una duda — WhatsApp
            </a>
          </div>

          <InscripcionForm />
        </div>
      </div>
    </section>
  );
}
