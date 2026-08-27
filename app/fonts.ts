import localFont from "next/font/local";

// RBNo3.1 — títulos. Licencia comercial de Eduardo (Masfarré).
// Solo se cargan los pesos que la landing usa hoy (Medium normal + italic).
// Si se suma un título en Book o Bold, agregar el archivo correspondiente acá.
export const rbno31 = localFont({
  src: [
    { path: "./fonts/RBNo31-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/RBNo31-MediumItalic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-rbno31",
  display: "swap",
});

// DM Sans — texto. Licencia comercial de Eduardo (Masfarré).
export const dmSans = localFont({
  src: [
    { path: "./fonts/DMSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DMSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/DMSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/DMSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dmsans",
  display: "swap",
});
