export const GA_ID = "G-0L3GXJCJJ1";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function gtagEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

// ad_storage/ad_user_data/ad_personalization : signaux du Consent Mode v2, exigés par Google pour
// tout compte Google Ads avec du trafic UE (obligatoire depuis mars 2024). Mis à jour ici même si
// aucun tag Google Ads n'est encore posé — le jour où il le sera, le consentement est déjà en
// place, rien à reprendre côté bandeau cookies.
// gtag.js est chargé statiquement dans layout.tsx (Consent Mode avancé) — on n'injecte plus rien.
export function grantConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  window.gtag("config", GA_ID);
}

export function denyConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
