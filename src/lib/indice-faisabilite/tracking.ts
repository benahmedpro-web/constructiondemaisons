import { gtagEvent } from "@/lib/ga";

// Couche d'événements interne au tunnel indice-de-faisabilite, découplée de la plateforme
// publicitaire qui la consomme — cf. recommandations tracking OpenAI Ads du 22/08/2026, §16.
// Aujourd'hui, un seul connecteur existe (GA4, via gtagEvent, déjà soumis au consentement du
// bandeau cookies). Le jour où le Pixel OpenAI sera disponible, il se branchera ici sans toucher
// aux points d'appel dans le funnel. Noms d'événements = ceux du document (§2), internes au
// site : ne pas les confondre avec un futur nom d'événement standard OpenAI (§3, à déterminer
// uniquement à la lecture de la documentation développeur officielle).
export type FunnelEventName = "landing_view" | "diagnostic_start" | "diagnostic_step" | "diagnostic_complete" | "lead_submit";

export function trackFunnelEvent(name: FunnelEventName, params?: Record<string, string | number | boolean>) {
  gtagEvent(name, params);
}

// Identifiant unique par lead, généré côté client à la soumission et transmis au serveur — prépare
// la déduplication Pixel/Conversions API (§5) : le jour où l'API serveur sera ajoutée, elle
// réutilisera ce même event_id pour que l'événement ne compte qu'une fois côté OpenAI.
export function generateEventId(prefix: string): string {
  const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}_${id}`;
}
