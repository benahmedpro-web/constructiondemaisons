export type LeadRow = {
  source: string;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  typeProjet?: string;
  zone?: string;
  budget?: string;
  message?: string;
  answers?: unknown;
  attribution?: unknown;
  eventId?: string;
};

// No-op silencieux si non configuré — même pattern que archiveLead (src/lib/supabase.ts) :
// l'export Sheet est un plus, jamais une raison de faire échouer l'envoi d'un lead.
export async function appendLeadToSheet(row: LeadRow): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  const secret = process.env.GOOGLE_SHEETS_SECRET;
  if (!url || !secret) return;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, ...row }),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || data?.error) {
    throw new Error(data?.error || `Google Sheet: HTTP ${res.status}`);
  }
}
