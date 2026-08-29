// Datos del evento — un solo lugar para actualizar fecha/lugar/estado.

export const EVENT = {
  name: "Masfarré Teens — La Experiencia",
  edition: "Primera edición",
  dateLabel: "Viernes 23 de octubre",
  venue: "Rosaura Eventos",
  priceLabel: "Gratuito · cupo limitado",
  whatsappHref: "https://wa.me/5493482610982", // WhatsApp real de consultas (nunca vía de inscripción)
  formHref: "#inscripcion",
  // Edge Function en Supabase que recibe el formulario — guarda la inscripción,
  // crea el lead en Kommo y dispara el mail de recepción.
  submitEndpoint: "https://mdonggyjkadnfkbicotp.supabase.co/functions/v1/submit-inscripcion",
};
