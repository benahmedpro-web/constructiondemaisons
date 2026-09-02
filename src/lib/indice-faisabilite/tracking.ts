import { gtagEvent } from "@/lib/ga";

// Couche d'événements interne au tunnel indice-de-faisabilite, découplée de la plateforme
// publicitaire qui la consomme — cf. recommandations tracking OpenAI Ads du 22/08/2026, §16.
// GA4 et le Pixel OpenAI Ads sont tous deux soumis au choix du bandeau cookies.
export type FunnelEventName = "landing_view" | "diagnostic_start" | "diagnostic_step" | "diagnostic_complete" | "lead_submit";

export function trackFunnelEvent(name: FunnelEventName, params?: Record<string, string | number | boolean>) {
  gtagEvent(name, params);
}

export function trackOpenAILead(eventId: string) {
  try {
    window.oaiq?.(
      "measure",
      "lead_created",
      { type: "customer_action" },
      { event_id: eventId }
    );
  } catch {
    // La mesure publicitaire ne doit jamais interrompre le parcours principal.
  }
}

// Identifiant unique par lead, généré côté client à la soumission et transmis au serveur — prépare
// la déduplication Pixel/Conversions API (§5) : le jour où l'API serveur sera ajoutée, elle
// réutilisera ce même event_id pour que l'événement ne compte qu'une fois côté OpenAI.
export function generateEventId(prefix: string): string {
  const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}_${id}`;
}
