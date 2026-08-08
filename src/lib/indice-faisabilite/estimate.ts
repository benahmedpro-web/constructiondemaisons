import zonesData from "./data/zones.json";
import { normalizeCity } from "./villes";
import type { Answers, Estimate, Zone, ZonesData, BudgetEtat } from "./types";

const ZONES = zonesData as ZonesData;

// Valeur représentative (milieu de fourchette) pour les prospects qui n'ont pas encore de
// terrain précis — choix éditorial, pas une donnée sourcée. À ajuster si besoin.
const SURFACE_TERRAIN_FOURCHETTES: Record<string, number> = {
  lt500: 400,
  "500-800": 650,
  "800-1200": 1000,
  gt1200: 1500,
};

// Fourchette d'affichage autour du prix terrain retenu — évite la fausse précision d'un
// chiffre unique. La valeur retenue pour le calcul du total reste affichée explicitement.
export const FOURCHETTE_TERRAIN_MARGE = 0.15;

export function findZoneForCity(cityName: string | undefined): Zone | null {
  if (!cityName) return null;
  const norm = normalizeCity(cityName);
  return ZONES.zones.find((z) => z.communes.some((c) => normalizeCity(c) === norm)) ?? null;
}

export function formatEur(n: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function computeEstimate(answers: Answers): Estimate | null {
  const surfaceHabitable = Number(answers.surface_habitable) || 0;
  const budget = Number(answers.budget_global) || 0;
  const zone = findZoneForCity(answers.location as string | undefined);

  let surfaceTerrain = Number(answers.surface_terrain) || 0;
  let surfaceTerrainEstimee = false;
  const fourchette = answers.surface_terrain_souhaitee as string | undefined;
  if (!surfaceTerrain && fourchette) {
    const midpoint = SURFACE_TERRAIN_FOURCHETTES[fourchette];
    if (midpoint) {
      surfaceTerrain = midpoint;
      surfaceTerrainEstimee = true;
    }
  }

  if (!surfaceHabitable) return null;

  const coutConstruction = surfaceHabitable * ZONES.cout_construction_eur_m2.valeur;
  const coutTerrain = zone && surfaceTerrain ? surfaceTerrain * zone.prix_moyen_eur_m2 : null;
  const coutTotal = coutTerrain !== null ? coutConstruction + coutTerrain : null;
  const ratio = coutTotal && budget ? budget / coutTotal : null;

  return { surfaceHabitable, surfaceTerrain, surfaceTerrainEstimee, budget, zone, coutConstruction, coutTerrain, coutTotal, ratio };
}

// Seuil de marge faible (option B, proportionnelle) : 5% du budget annoncé — régit uniquement
// le libellé du bloc "Votre estimation". Distinct du seuil "déficit significatif" (10%) plus
// bas, qui régit le statut global et le principal point à sécuriser.
const SEUIL_MARGE_FAIBLE = 0.05;

export function budgetEtat(estimate: Estimate | null): BudgetEtat {
  if (!estimate || !estimate.budget || !estimate.coutTotal) return null;
  const ecart = estimate.budget - estimate.coutTotal;
  if (ecart < 0) return "deficit";
  if (ecart / estimate.budget < SEUIL_MARGE_FAIBLE) return "faible";
  return "confortable";
}

export const SEUIL_ECART_SIGNIFICATIF = 0.1;

export function pourcentageEcart(estimate: Estimate | null): number {
  if (!estimate || !estimate.budget || !estimate.coutTotal) return 0;
  return Math.abs(estimate.budget - estimate.coutTotal) / estimate.budget;
}

export function deficitSignificatif(estimate: Estimate | null): boolean {
  return budgetEtat(estimate) === "deficit" && pourcentageEcart(estimate) >= SEUIL_ECART_SIGNIFICATIF;
}
