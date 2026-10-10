"use client";

import { useState, type FormEvent } from "react";
import { EVENT } from "./event-data";
import { readUtm } from "../tracking/utm";

type Status = "idle" | "submitting" | "success" | "error";

// El mismo formulario se muestra a la chica (landing /teens) y a mamá, papá o
// tutor (landing /teens/padres). Solo cambia cómo se le habla a quien lo llena;
// los campos que se envían son siempre los mismos.
type Audience = "teen" | "padres";

const COPY = {
  teen: {
    nombre: "Tu nombre *",
    edad: "Tu edad *",
    nombreTutor: "Nombre de mamá, papá o tutor *",
    whatsapp: "Su WhatsApp *",
    email: "Su email *",
    fechaNacimiento: "Tu fecha de nacimiento (opcional)",
    escuela: "¿A qué escuela vas? (opcional)",
    amigas: "¿Cuántas amigas te acompañan? (opcional)",
    comoSeEntero: "¿Cómo te enteraste? (opcional)",
    padresAsisten: "¿Tus papás, mamás o tutores también asisten? *",
    aviso:
      "Antes de anotarte: le vamos a escribir a mamá, papá o tu tutor por WhatsApp para confirmar tu lugar — contale así lo espera.",
    submit: "Inscribirme a Masfarré Teens",
    nota: "El WhatsApp es solo para coordinar tu lugar — nunca lo usamos para mandar mensajes masivos.",
  },
  padres: {
    nombre: "Nombre de tu hija *",
    edad: "Su edad *",
    nombreTutor: "Tu nombre *",
    whatsapp: "Tu WhatsApp *",
    email: "Tu email *",
    fechaNacimiento: "Su fecha de nacimiento (opcional)",
    escuela: "¿A qué escuela va? (opcional)",
    amigas: "¿Cuántas amigas la acompañan? (opcional)",
    comoSeEntero: "¿Cómo se enteraron? (opcional)",
    padresAsisten: "¿Ustedes también vienen esa noche? *",
    aviso: "Después de inscribirla te escribimos por WhatsApp para confirmar su lugar.",
    submit: "Inscribir a mi hija",
    nota: "El WhatsApp es solo para coordinar su lugar — nunca lo usamos para mandar mensajes masivos.",
  },
} as const;

export function InscripcionForm({ audience = "teen" }: { audience?: Audience }) {
  const copy = COPY[audience];
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // Guardamos el WhatsApp del tutor antes de resetear el form, para armar el
  // botón "avisale a mamá/papá" de la pantalla de éxito.
  const [tutorWhatsapp, setTutorWhatsapp] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: si un bot completó este campo oculto, respondemos
    // éxito igual (para no delatarlo) pero no seguimos.
    if ((data.get("empresa") as string)?.trim()) {
      setStatus("success");
      return;
    }

    const utm = readUtm();

    const payload = {
      nombre_adolescente: data.get("nombre_adolescente"),
      edad_rango: data.get("edad_rango"),
      nombre_tutor: data.get("nombre_tutor"),
      email: data.get("email"),
      whatsapp_tutor: data.get("whatsapp_tutor"),
      amigas_acompanantes: data.get("amigas_acompanantes")
        ? Number(data.get("amigas_acompanantes"))
        : null,
      escuela: data.get("escuela") || null,
      fecha_nacimiento: data.get("fecha_nacimiento") || null,
      como_se_entero: data.get("como_se_entero") || null,
      padres_asisten: data.get("padres_asisten") || null,
      opt_in_comunicaciones: data.get("opt_in_comunicaciones") === "on",
      honeypot: data.get("empresa"),
      utm_source: utm.utm_source,
      utm_campaign: utm.utm_campaign,
    };

    try {
      const res = await fetch(EVENT.submitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submit_failed");

      setTutorWhatsapp(String(data.get("whatsapp_tutor") || ""));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "No pudimos enviar el formulario. Probá de nuevo en un minuto, o escribinos directamente por WhatsApp."
      );
    }
  }

  if (status === "success" && audience === "padres") {
    return (
      <div className="form-success" role="status">
        <span className="text-[26px]">🎉</span>
        <p className="font-heading font-medium text-[22px] mt-3">
          ¡Listo, ya la inscribimos!
        </p>
        <p className="text-ink-dim text-[14.5px] mt-2 max-w-[38ch] mx-auto">
          Te mandamos un mail con los datos y en los próximos días te
          escribimos por WhatsApp para confirmar su lugar.
        </p>
      </div>
    );
  }

  if (status === "success") {
    // wa.me necesita el número en formato internacional, sin +, espacios ni guiones.
    const whatsappDigits = tutorWhatsapp.replace(/\D/g, "");
    const avisoMsg = encodeURIComponent(
      "Hola! Me acabo de anotar a Masfarré Teens — La Experiencia (23/10). En un rato te va a llegar un mensaje nuestro pidiendo tu autorización, ¿lo revisás? Si querés info antes: masfarre.com/teens/padres 💛"
    );

    return (
      <div className="form-success" role="status">
        <span className="text-[26px]">🎉</span>
        <p className="font-heading font-medium text-[22px] mt-3">
          ¡Listo, ya te registramos!
        </p>
        <p className="text-ink-dim text-[14.5px] mt-2 max-w-[38ch] mx-auto">
          Ya le mandamos un mail a mamá, papá o tu tutor, y en los próximos
          días también le vamos a escribir por WhatsApp para confirmar tu
          lugar.
        </p>
        {whatsappDigits && (
          <a
            href={`https://wa.me/${whatsappDigits}?text=${avisoMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary justify-center mt-5 w-fit mx-auto"
          >
            Avisarle a mamá/papá ahora
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="inscripcion-form" noValidate>
      {/* Honeypot anti-spam: invisible para personas, tentador para bots. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="empresa">No completar este campo</label>
        <input type="text" id="empresa" name="empresa" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="nombre_adolescente">{copy.nombre}</label>
        <input
          type="text"
          id="nombre_adolescente"
          name="nombre_adolescente"
          required
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label htmlFor="edad_rango">{copy.edad}</label>
        <select id="edad_rango" name="edad_rango" required defaultValue="">
          <option value="" disabled>
            Elegí una opción
          </option>
          <option value="12">12 años</option>
          <option value="13">13 años</option>
          <option value="14">14 años</option>
        </select>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="nombre_tutor">{copy.nombreTutor}</label>
          <input type="text" id="nombre_tutor" name="nombre_tutor" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="whatsapp_tutor">{copy.whatsapp}</label>
          <input
            type="tel"
            id="whatsapp_tutor"
            name="whatsapp_tutor"
            required
            placeholder="+54 9 ..."
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">{copy.email}</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="fecha_nacimiento">{copy.fechaNacimiento}</label>
          <input
            type="date"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            autoComplete="bday"
          />
        </div>
        <div className="field">
          <label htmlFor="escuela">{copy.escuela}</label>
          <input type="text" id="escuela" name="escuela" autoComplete="off" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="amigas_acompanantes">{copy.amigas}</label>
          <input type="number" id="amigas_acompanantes" name="amigas_acompanantes" min={0} max={20} />
        </div>
        <div className="field">
          <label htmlFor="como_se_entero">{copy.comoSeEntero}</label>
          <select id="como_se_entero" name="como_se_entero" defaultValue="">
            <option value="">Elegí una opción</option>
            <option value="instagram">Instagram</option>
            <option value="recomendacion">Recomendación de una amiga</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <fieldset className="field">
        <legend>{copy.padresAsisten}</legend>
        <div className="radio-group">
          <label className="radio-option">
            <input type="radio" name="padres_asisten" value="si" required /> Sí, seguro
          </label>
          <label className="radio-option">
            <input type="radio" name="padres_asisten" value="probablemente" /> Probablemente
          </label>
          <label className="radio-option">
            <input type="radio" name="padres_asisten" value="no" /> No
          </label>
        </div>
      </fieldset>

      <label className="checkbox-row">
        <input type="checkbox" name="opt_in_comunicaciones" required />
        <span>Quiero recibir novedades del evento por mail y WhatsApp. *</span>
      </label>

      <p className="text-[12px] text-ink-dim">
        {copy.aviso}
      </p>

      {status === "error" && <p className="form-error">{errorMsg}</p>}

      <button
        type="submit"
        className="btn btn-primary justify-center w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando..." : copy.submit}
      </button>

      <p className="text-[11px] text-ink-faint mt-1">
        {copy.nota}
      </p>
    </form>
  );
}
