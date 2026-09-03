/**
 * Envoi d'un lead vers le CRM Commercial M&M (Cloud Run).
 *
 * Variables d'environnement (Vercel) :
 *  - CRM_WEBHOOK_URL         : origine du CRM, ex. https://crm-commercial-mm-721927525719.europe-west1.run.app
 *  - CRM_WEBHOOK_KEY_INDICE  : clé du webhook « Indice de faisabilité »
 *  - CRM_WEBHOOK_KEY_SITE    : clé du webhook « Site constructiondemaisons.com » (contact, demande d'étude, landing page)
 *
 * Sans ces variables, la fonction ne fait rien et le lead continue de partir vers les autres destinations.
 */

type LeadInput = {
  source?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  typeProjet?: string;
  zone?: string;
  budget?: string;
  message?: string;
  answers?: Record<string, unknown> | null;
  attribution?: Record<string, string | undefined> | null;
  eventId?: string;
};

// Réponses du questionnaire Indice de faisabilité → statuts CRM
const LAND_STATUS: Record<string, string> = {
  acquis: "detenu",
  compromis: "sous_compromis",
  identifie: "identifie",
  recherche: "recherche",
  aucun: "recherche",
};
const FINANCING_STATUS: Record<string, string> = {
  accord: "accord_principe",
  fonds_propres: "comptant",
  simulation: "simule",
  pas_commence: "non_qualifie",
};
const TIME_HORIZON: Record<string, string> = {
  "6mois": "3_6_mois",
  "6-12mois": "6_12_mois",
  "12-24mois": "12_24_mois",
};

function str(v: unknown): string | undefined {
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

function num(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const digits = v.replace(/[^\d]/g, "");
    if (digits) return Number(digits);
  }
  return undefined;
}

// Les formulaires contact, demande d'étude et indice imposent une case de consentement ;
// la landing page n'en a pas.
const SOURCES_WITH_CONSENT = new Set(["contact", "demande_etude", "indice_faisabilite"]);

export async function sendLeadToCrm(lead: LeadInput): Promise<void> {
  const base = process.env.CRM_WEBHOOK_URL?.replace(/\/$/, "");
  const source = lead.source || "contact";
  const key = source === "indice_faisabilite" ? process.env.CRM_WEBHOOK_KEY_INDICE : process.env.CRM_WEBHOOK_KEY_SITE;
  if (!base || !key) {
    console.warn("[CRM] Variables CRM_WEBHOOK_URL / CRM_WEBHOOK_KEY_* manquantes, lead non transmis au CRM.");
    return;
  }

  const answers = (lead.answers ?? {}) as Record<string, unknown>;
  const attr = (lead.attribution ?? {}) as Record<string, string | undefined>;
  const consent = SOURCES_WITH_CONSENT.has(source);

  const payload = {
    firstName: str(lead.prenom) || str(lead.nom) || "Prospect",
    lastName: str(lead.nom) || "Inconnu",
    email: str(lead.email),
    phone: str(lead.telephone),
    city: str(lead.zone),
    projectTitle: str(lead.typeProjet) ? `${lead.typeProjet} — ${lead.prenom ?? ""} ${lead.nom ?? ""}`.trim() : undefined,
    projectType: str(lead.typeProjet),
    projectDescription: str(lead.message),
    budget: num(answers.budget_global) ?? num(lead.budget),
    desiredSurface: num(answers.surface_habitable),
    landStatus: LAND_STATUS[String(answers.terrain_status ?? "")],
    financingStatus: FINANCING_STATUS[String(answers.financement_statut ?? "")],
    timeHorizon: TIME_HORIZON[String(answers.calendrier_demarrage ?? "")],
    utmSource: str(attr.utm_source) || source,
    utmMedium: str(attr.utm_medium),
    utmCampaign: str(attr.utm_campaign),
    consent,
    consentProof: consent
      ? `Case « J'accepte » cochée sur le formulaire ${source} de constructiondemaisons.com le ${new Date().toISOString()}`
      : undefined,
    formData: {
      source,
      eventId: lead.eventId,
      answers: lead.answers ?? null,
      attribution: lead.attribution ?? null,
    },
  };

  const res = await fetch(`${base}/api/webhook/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CRM ${res.status} : ${text.slice(0, 200)}`);
  }
  const data = (await res.json().catch(() => null)) as { code?: string; isNewContact?: boolean } | null;
  console.log("[CRM] Lead transmis :", data?.code, data?.isNewContact ? "(nouveau contact)" : "(contact existant)");
}
