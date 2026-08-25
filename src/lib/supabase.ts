import { createClient } from "@supabase/supabase-js";

// Client serveur uniquement — clé secrète, jamais exposée au navigateur (pas de préfixe
// NEXT_PUBLIC_). Utilisé pour archiver chaque soumission de formulaire dans la table `leads`,
// en plus de Trello/email qui restent inchangés. Retourne null si les variables ne sont pas
// configurées, pour ne jamais bloquer un envoi de lead à cause de ça (cf. pattern déjà en place
// pour RESEND_TO_EMAIL/RECAPTCHA_SECRET_KEY).
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export type LeadRow = {
  source: string;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  type_projet?: string;
  zone?: string;
  budget?: string;
  message?: string;
  answers?: unknown;
  attribution?: unknown;
  event_id?: string;
};

// No-op silencieux si Supabase n'est pas configuré — l'archivage est un plus, jamais une raison
// de faire échouer l'envoi d'un lead (Trello/email restent la voie principale).
export async function archiveLead(row: LeadRow): Promise<void> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;
  const { error } = await supabase.from("leads").insert(row);
  if (error) throw error;
}
