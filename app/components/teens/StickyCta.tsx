import { EVENT } from "./event-data";

export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a href={EVENT.formHref} className="btn btn-primary">
        Inscribirme
      </a>
      <a href={EVENT.whatsappHref} className="btn btn-ghost">
        Consultas
      </a>
    </div>
  );
}
