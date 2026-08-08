import { computeEstimate } from "./estimate";
import type { Answers, Estimate, ScoreDetail } from "./types";

// Barème calibré avec Mahmoud le 08/08/2026 (atelier de calibrage). Répartition 100 pts :
// Budget 25 (dont ratio Budget/Coût 15 + apport 10) · Terrain 25 · Financement 20 ·
// Calendrier 10 · Cohérence 20.

export const DOMAIN_MAX: ScoreDetail = { budget: 25, terrain: 25, financement: 20, calendrier: 10, coherence: 20 };

function scoreBudget(answers: Answers, estimate: Estimate | null): number {
  let pts = 0;
  if (estimate && estimate.ratio !== null) {
    const r = estimate.ratio;
    if (r >= 0.95) pts += 15;
    else if (r >= 0.8) pts += 10;
    else if (r >= 0.6) pts += 5;
  }
  const budget = Number(answers.budget_global) || 0;
  const apport = Number(answers.apport) || 0;
  if (budget > 0) {
    const ratioApport = apport / budget;
    if (ratioApport >= 0.3) pts += 10;
    else if (ratioApport >= 0.15) pts += 5;
  }
  return pts;
}

const TERRAIN_STATUS_POINTS: Record<string, number> = { acquis: 10, compromis: 9, identifie: 6, recherche: 3, aucun: 0 };
const TERRAIN_VIABILISE_POINTS: Record<string, number> = { oui: 8, ne_sait_pas: 4, non: 0 };
const ETUDE_SOL_POINTS: Record<string, number> = { oui: 7, non: 3 };

function scoreTerrain(answers: Answers): number {
  const terrainStatus = answers.terrain_status as string | undefined;
  const terrainViabilise = answers.terrain_viabilise as string | undefined;
  const etudeSol = answers.etude_sol as string | undefined;
  let pts = (terrainStatus && TERRAIN_STATUS_POINTS[terrainStatus]) || 0;
  if (terrainViabilise) pts += TERRAIN_VIABILISE_POINTS[terrainViabilise] || 0;
  if (etudeSol) pts += ETUDE_SOL_POINTS[etudeSol] || 0;
  return pts;
}

const FINANCEMENT_POINTS: Record<string, number> = { accord: 20, fonds_propres: 20, simulation: 12, pas_commence: 5 };

function scoreFinancement(answers: Answers): number {
  const v = answers.financement_statut as string | undefined;
  return (v && FINANCEMENT_POINTS[v]) || 0;
}

const CALENDRIER_POINTS: Record<string, number> = { "6mois": 10, "6-12mois": 8, "12-24mois": 5, flou: 2 };

function scoreCalendrier(answers: Answers): number {
  const v = answers.calendrier_demarrage as string | undefined;
  return (v && CALENDRIER_POINTS[v]) || 0;
}

const COHERENCE_POINTS = [20, 12, 5, 0];
const STAGE_RANK: Record<string, number> = { decouverte: 1, preparation: 2, comparaison: 3, pret: 4 };
const CALENDRIER_RANK: Record<string, number> = { flou: 1, "12-24mois": 2, "6-12mois": 3, "6mois": 4 };

function scoreCoherence(answers: Answers, estimate: Estimate | null): number {
  let incoherences = 0;

  // 1. Budget/surface : ratio Budget/Coût dans le palier "incohérent"
  if (estimate && estimate.ratio !== null && estimate.ratio < 0.6) incoherences++;

  // 2. Calendrier/avancement : veut démarrer vite mais projet peu avancé (écart de rang >= 2).
  const sr = STAGE_RANK[(answers.project_stage as string) ?? ""] || 0;
  const cr = CALENDRIER_RANK[(answers.calendrier_demarrage as string) ?? ""] || 0;
  if (cr - sr >= 2) incoherences++;

  // 3. Définition du projet : se dit "prêt à lancer" sans aucun terrain.
  if (answers.project_stage === "pret" && answers.terrain_status === "aucun") incoherences++;

  return COHERENCE_POINTS[Math.min(incoherences, 3)];
}

export function prioriteFromScore(total: number): { priorite: "A" | "B" | "C" | "D"; delai: string } {
  if (total >= 80) return { priorite: "A", delai: "< 2h" };
  if (total >= 60) return { priorite: "B", delai: "sous 24h" };
  if (total >= 50) return { priorite: "C", delai: "sous 48h" };
  return { priorite: "D", delai: "nurturing email" };
}

export type Score = {
  estimate: Estimate | null;
  detail: ScoreDetail;
  total: number;
  priorite: "A" | "B" | "C" | "D";
  delai: string;
};

export function computeScore(answers: Answers): Score {
  const estimate = computeEstimate(answers);
  const detail: ScoreDetail = {
    budget: scoreBudget(answers, estimate),
    terrain: scoreTerrain(answers),
    financement: scoreFinancement(answers),
    calendrier: scoreCalendrier(answers),
    coherence: scoreCoherence(answers, estimate),
  };
  const total = detail.budget + detail.terrain + detail.financement + detail.calendrier + detail.coherence;
  return { estimate, detail, total, ...prioriteFromScore(total) };
}
