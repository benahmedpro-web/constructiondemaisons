export const GA_ID = "G-0L3GXJCJJ1";

// Remplace par l'ID de conversion Google Ads — format AW-XXXXXXXXX/YYYYYYYYYYYY
// Récupérer dans Google Ads > Objectifs > Conversions > (ta conversion) > Balise > Installer manuellement
export const GADS_CONVERSION_ID = "AW-REMPLACER/REMPLACER";

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

async function sha256Hex(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Conversions améliorées : email + téléphone hashés SHA-256, transmis à Google pour
// dédupliquer et enrichir les conversions même sans cookies (Consent Mode v2).
export async function trackGoogleAdsConversion(params: {
  email?: string;
  phone?: string;
  value?: number;
  currency?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (GADS_CONVERSION_ID.includes("REMPLACER")) return;

  const enhanced: Record<string, string | number | undefined> = {};
  if (params.email) enhanced.email = await sha256Hex(params.email);
  if (params.phone) enhanced.phone_number = await sha256Hex(params.phone);

  window.gtag("event", "conversion", {
    send_to: GADS_CONVERSION_ID,
    value: params.value ?? 0,
    currency: params.currency ?? "EUR",
    ...enhanced,
  });
}
