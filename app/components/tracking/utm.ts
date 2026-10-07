// Guarda el utm_source / utm_campaign con el que la persona llegó por primera
// vez, para no perderlo si navega a /teens/padres y vuelve, o si se va y se
// inscribe más tarde desde la misma pantalla. La URL actual siempre gana.

const STORAGE_KEY = "masfarre_utm";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

type Utm = { utm_source: string | null; utm_campaign: string | null };

export function captureUtm() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source");
    const utm_campaign = params.get("utm_campaign");
    if (!utm_source && !utm_campaign) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ utm_source, utm_campaign, ts: Date.now() })
    );
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }
}

export function readUtm(): Utm {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = {
    utm_source: params.get("utm_source"),
    utm_campaign: params.get("utm_campaign"),
  };
  if (fromUrl.utm_source || fromUrl.utm_campaign) return fromUrl;

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (stored && Date.now() - stored.ts < MAX_AGE_MS) {
      return { utm_source: stored.utm_source, utm_campaign: stored.utm_campaign };
    }
  } catch {
    // ignoramos datos corruptos o storage bloqueado
  }
  return fromUrl;
}
