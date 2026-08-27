import type { Metadata } from "next";
import { rbno31, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masfarré Teens — La Experiencia",
  description:
    "Masfarré Teens — La Experiencia, primera edición. Viernes 23 de octubre en Rosaura Eventos. Gratuito, cupo limitado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${rbno31.variable} ${dmSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
