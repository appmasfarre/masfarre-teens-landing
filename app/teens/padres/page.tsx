import type { Metadata } from "next";
import { PadresLanding } from "../../components/teens/PadresLanding";

export const metadata: Metadata = {
  title: "Zona para padres — Masfarré Teens",
  description:
    "Todo lo que mamás, papás y tutores necesitan saber sobre Masfarré Teens — La Experiencia, y sobre cómo trabajamos en Masfarré.",
};

// URL permanente: masfarre.com/teens/padres
// Página exclusiva para las familias — no está en el menú principal.
// Se llega por el mensaje de WhatsApp de confirmación (Gise) y por la nota
// del formulario de inscripción.
export default function PadresPage() {
  return <PadresLanding />;
}
