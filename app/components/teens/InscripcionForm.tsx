"use client";

import { useState, type FormEvent } from "react";
import { EVENT } from "./event-data";

type Status = "idle" | "submitting" | "success" | "error";

export function InscripcionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

    const params = new URLSearchParams(window.location.search);

    const payload = {
      nombre_adolescente: data.get("nombre_adolescente"),
      edad_rango: data.get("edad_rango"),
      nombre_tutor: data.get("nombre_tutor"),
      email: data.get("email"),
      whatsapp_tutor: data.get("whatsapp_tutor"),
      amigas_acompanantes: data.get("amigas_acompanantes")
        ? Number(data.get("amigas_acompanantes"))
        : null,
      como_se_entero: data.get("como_se_entero") || null,
      padres_asisten: data.get("padres_asisten") || null,
      opt_in_comunicaciones: data.get("opt_in_comunicaciones") === "on",
      honeypot: data.get("empresa"),
      utm_source: params.get("utm_source"),
      utm_campaign: params.get("utm_campaign"),
    };

    try {
      const res = await fetch(EVENT.submitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submit_failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "No pudimos enviar el formulario. Probá de nuevo en un minuto, o escribinos directamente por WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="text-[26px]">🎉</span>
        <p className="font-heading font-medium text-[22px] mt-3">
          ¡Listo, ya te registramos!
        </p>
        <p className="text-ink-dim text-[14.5px] mt-2 max-w-[38ch] mx-auto">
          Te mandamos un mail de confirmación. En los próximos días te
          contactamos por WhatsApp para coordinar los últimos detalles.
        </p>
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
        <label htmlFor="nombre_adolescente">Nombre de la adolescente *</label>
        <input
          type="text"
          id="nombre_adolescente"
          name="nombre_adolescente"
          required
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label htmlFor="edad_rango">Edad *</label>
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
          <label htmlFor="nombre_tutor">Tu nombre (mamá / papá / tutor) *</label>
          <input type="text" id="nombre_tutor" name="nombre_tutor" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="whatsapp_tutor">Tu WhatsApp *</label>
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
        <label htmlFor="email">Tu email *</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="amigas_acompanantes">¿Cuántas amigas la acompañan? (opcional)</label>
          <input type="number" id="amigas_acompanantes" name="amigas_acompanantes" min={0} max={20} />
        </div>
        <div className="field">
          <label htmlFor="como_se_entero">¿Cómo te enteraste? (opcional)</label>
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
        <legend>¿Los papás / mamás / tutores también asisten? *</legend>
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

      {status === "error" && <p className="form-error">{errorMsg}</p>}

      <button
        type="submit"
        className="btn btn-primary justify-center w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando..." : "Inscribirme a Masfarré Teens"}
      </button>

      <p className="text-[11px] text-ink-faint mt-1">
        El WhatsApp es solo para coordinar tu lugar — nunca lo usamos para mandar mensajes masivos.
      </p>
    </form>
  );
}
