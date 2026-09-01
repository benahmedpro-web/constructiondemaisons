import { gtagEvent } from "@/lib/ga";

// Couche d'événements interne au tunnel indice-de-faisabilite.
// GA4 conserve les noms internes du funnel. La soumission réussie d'un lead est également
// traduite vers l'événement standard OpenAI Ads `lead_created`, uniquement après consentement.
export type FunnelEventName = "landing_view" | "diagnostic_start" | "diagnostic_step" | "diagnostic_complete" | "lead_submit";

declare global {
  interface Window {
    oaiq?: ((...args: unknown[]) => void) & { queue?: unknown[][] };
  }
}

function trackOpenAILead(params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  if (localStorage.getItem("mm_cookie_consent") !== "granted") return;
  if (typeof window.oaiq !== "function") return;

  const eventId = typeof params?.event_id === "string" ? params.event_id : undefined;
  window.oaiq("measure", "lead_created", {
    type: "customer_action",
    ...(eventId ? { event_id: eventId } : {}),
  });
}

export function trackFunnelEvent(name: FunnelEventName, params?: Record<string, string | number | boolean>) {
  gtagEvent(name, params);

  // Ce point d'appel n'arrive qu'après réponse HTTP réussie de /api/contact dans le funnel.
  // Aucune donnée personnelle (nom, e-mail, téléphone) n'est transmise au Pixel OpenAI.
  if (name === "lead_submit") trackOpenAILead(params);
}

// Identifiant unique par lead, généré côté client à la soumission et transmis au serveur.
// Le même event_id pourra être réutilisé plus tard côté Conversions API pour la déduplication.
export function generateEventId(prefix: string): string {
  const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}_${id}`;
}
