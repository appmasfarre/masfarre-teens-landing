# Masfarré Teens — Landing

Landing de marketing para **Masfarré Teens — La Experiencia**, primera edición
(viernes 23 de octubre, Rosaura Eventos). Proyecto **separado** de `app-masfarre`
(la app operativa) — no comparten repo ni deploy.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Tipografías propias con licencia comercial: **RBNo3.1** (títulos) y **DM Sans** (texto),
  cargadas localmente vía `next/font/local` — no dependen de Google Fonts.

## Estructura

```
app/
  layout.tsx          # fuentes + metadata global
  globals.css          # tokens de diseño (color, glow, botones, etc.)
  fonts.ts              # carga de RBNo3.1 y DM Sans
  page.tsx              # home (masfarre.com) — TEMPORAL, ver nota abajo
  teens/
    page.tsx             # masfarre.com/teens — URL permanente
  components/teens/
    TeensLanding.tsx      # arma todas las secciones
    Hero.tsx, Hook.tsx, Funnel.tsx, StoryStrip.tsx, Sensory.tsx,
    Referral.tsx, EventCard.tsx, FinalCta.tsx, Nav.tsx, Footer.tsx,
    StickyCta.tsx, WhatsAppIcon.tsx
    event-data.ts          # fecha, lugar, links — un solo lugar para actualizar
public/images/            # logo + fotos (placeholders reales, ver TODOs)
```

## Por qué la home es temporal

`app/page.tsx` (la home, `masfarre.com`) hoy muestra la landing de Masfarré Teens.
Es intencional: hasta el evento (23/10) esta es la puerta de entrada al sitio.
Después, la idea es reemplazar `app/page.tsx` por la landing institucional —
la de Teens sigue viva sin tocarla en `masfarre.com/teens`, así no se pierden
los links que ya circulan en redes.

**Para hacer el cambio el día que corresponda:** reemplazar el contenido de
`app/page.tsx` por la nueva landing institucional. No hace falta tocar
`app/teens/page.tsx` ni ningún componente de `components/teens/`.

## Pendiente antes de producción

Buscar `TODO` en el código (sobre todo en `event-data.ts`):

- **Link de WhatsApp real** (`wa.me/549...`) para el botón de consultas.
- **Destino del formulario de inscripción** — hoy es un ancla a `#inscripcion`
  sin backend. Falta definir dónde llegan los datos (planilla, CRM, email) y
  conectar el formulario real.
- **Fotos:** las de `public/images/story-*.jpg` y `referral.jpg` son las que ya
  existían (historias de Instagram + fotos de producciones anteriores). Si
  llegan las fotos nuevas pedidas para hero/editorial (ver `pedido-fotos-landing.pdf`),
  reemplazar/sumar ahí.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir http://localhost:3000 (home) o http://localhost:3000/teens.

## Deploy

Proyecto en Vercel, team `masfarre`, separado de `app-masfarre`. Para conectarlo
a un repo de GitHub y tener auto-deploy en cada push, ver las instrucciones que
Eduardo recibió aparte.
