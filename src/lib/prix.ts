// Grille de prix unique du site — harmonisée le 10/09/2026 (audit GEO, section 1.3).
// Toute fourchette publiée sur une page doit venir d'ici ou lui être strictement identique.
// Périmètre : coût de construction HT au m² de surface habitable, hors foncier, hors VRD et
// raccordements, hors adaptation au sol, hors honoraires de maîtrise d'œuvre, hors études.
// Le point de référence 1 800 €/m² (hors adaptation au sol et branchements) est celui validé
// pour l'indice de faisabilité le 08/08/2026 (src/lib/indice-faisabilite/data/zones.json).
// Les fourchettes par secteur restent des ordres de grandeur indicatifs, pas des prix engagés.

export const PRIX_MAJ = "septembre 2026";

export const PRIX_CONSTRUCTION = { min: 1700, max: 2800, libelle: "1 700 – 2 800 € HT/m²" };
export const PRIX_EXTENSION = { min: 1600, max: 2400, libelle: "1 600 – 2 400 € HT/m²" };
export const PRIX_CHALET = { min: 2000, max: 3200, libelle: "2 000 – 3 200 € HT/m²" };
export const HONORAIRES_MOE = "8 – 12 % du coût des travaux";

export const PRIX_ZONES = [
  { zone: "Annemasse / Genevois nord", fourchette: "1 900 – 2 600 €/m²", foncier: "300 – 700 €/m²" },
  { zone: "Saint-Julien / Genevois sud", fourchette: "2 000 – 2 700 €/m²", foncier: "400 – 800 €/m²" },
  { zone: "Gex / Pays de Gex (01)", fourchette: "2 100 – 2 800 €/m²", foncier: "500 – 1 000 €/m²" },
  { zone: "Annecy / bassin annécien", fourchette: "1 900 – 2 700 €/m²", foncier: "400 – 900 €/m²" },
  { zone: "Thonon / Chablais", fourchette: "1 800 – 2 800 €/m²", foncier: "200 – 700 €/m²" },
  { zone: "Zone rurale 74 (hors frontalier)", fourchette: "1 700 – 2 300 €/m²", foncier: "100 – 300 €/m²" },
] as const;

export const PRIX_PERIMETRE =
  "Prix indicatifs HT au m² habitable, hors foncier, hors VRD et raccordements, hors adaptation au sol, hors honoraires de maîtrise d'œuvre, hors études.";
