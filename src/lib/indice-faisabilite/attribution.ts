// Capture et persistance de l'origine marketing d'un visiteur du tunnel indice-de-faisabilite —
// cf. recommandations tracking OpenAI Ads du 22/08/2026, §6-8. First-touch : une fois capturée,
// l'attribution n'est jamais réécrite par une visite ultérieure (même avec des paramètres
// différents), pour garder la source qui a réellement amené le prospect.

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  oppref?: string;
  landing_page: string;
  referrer: string;
  first_touch_at: string;
};

const STORAGE_KEY = "mm_attribution";

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {
    utm_source: params.get("utm_source") ?? undefined,
    utm_medium: params.get("utm_medium") ?? undefined,
    utm_campaign: params.get("utm_campaign") ?? undefined,
    utm_content: params.get("utm_content") ?? undefined,
    utm_term: params.get("utm_term") ?? undefined,
    oppref: params.get("oppref") ?? undefined,
    landing_page: window.location.pathname,
    referrer: document.referrer || "",
    first_touch_at: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}
