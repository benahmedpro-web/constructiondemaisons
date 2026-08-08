import { computeScore, coherenceReasons, DOMAIN_MAX, type CoherenceReason, type Score } from "./scoring";
import { budgetEtat, deficitSignificatif, formatEur } from "./estimate";
import type { Answers, Domain, Estimate } from "./types";

// Diagnostic pédagogique — recommandations UX du 08/08/2026 appliquées au prototype puis
// portées ici telles quelles (textes, seuils, hiérarchie de gravité).

export type Niveau = { label: string; couleur: "vert" | "orange" | "rouge" };

const NIVEAU_BANDS: Array<{ min: number } & Niveau> = [
  { min: 80, label: "Projet bien engagé", couleur: "vert" },
  { min: 60, label: "Projet prometteur", couleur: "vert" },
  { min: 40, label: "Projet à préciser", couleur: "orange" },
  { min: 0, label: "Projet à construire", couleur: "rouge" },
];

function niveauFromScore(total: number): Niveau {
  return NIVEAU_BANDS.find((n) => total >= n.min)!;
}

// Un déficit budgétaire significatif (>= 10% du budget) surclasse le statut global, quel que
// soit le score total par ailleurs — jamais "Projet bien engagé/prometteur" dans ce cas.
function statutGlobalLabel(total: number, estimate: Estimate | null): Niveau {
  if (deficitSignificatif(estimate)) return { label: "Projet à ajuster", couleur: "orange" };
  return niveauFromScore(total);
}

export const DOMAIN_LABELS: Record<Domain, string> = {
  budget: "Budget",
  terrain: "Terrain",
  financement: "Financement",
  calendrier: "Calendrier",
  coherence: "Cohérence",
};

type Tier = "fort" | "moyen" | "faible";

const DOMAIN_TEXTS: Record<Domain, Record<Tier, string>> = {
  budget: {
    fort: "Budget global compatible avec votre projet.",
    moyen: "Budget globalement compatible, mais certaines dépenses restent à préciser.",
    faible: "Le budget annoncé semble en tension avec le projet envisagé — un ajustement (surface, secteur, prestations) sera probablement nécessaire.",
  },
  terrain: {
    fort: "Votre terrain est sécurisé et bien avancé.",
    moyen: "Un terrain a été identifié, certains points restent à confirmer (viabilisation, étude de sol).",
    faible: "Vous n'avez pas encore sécurisé de terrain correspondant à vos critères.",
  },
  financement: {
    fort: "Votre financement est validé ou assuré sur fonds propres.",
    moyen: "Le financement devra encore être confirmé ou consolidé.",
    faible: "La démarche de financement n'a pas encore été engagée.",
  },
  calendrier: {
    fort: "Votre calendrier semble compatible avec votre projet.",
    moyen: "Votre calendrier est cohérent, à affiner selon l'avancement du projet.",
    faible: "Le calendrier envisagé mérite d'être reconsidéré au regard de l'avancement actuel du projet.",
  },
  coherence: {
    fort: "Votre projet est cohérent d'ensemble.",
    moyen: "Votre projet est globalement cohérent, avec quelques paramètres à préciser.",
    faible: "Plusieurs éléments de votre projet mériteraient d'être clarifiés pour en assurer la cohérence.",
  },
};

// Commentaire Budget dynamique — cite le vrai écart en euros plutôt qu'une formule générique,
// force l'icône ⚠️ même si le score Budget (qui inclut l'apport) n'est pas au plancher.
export function budgetDiagText(estimate: Estimate | null): string | null {
  const etat = budgetEtat(estimate);
  if (etat === "deficit" && estimate?.coutTotal) {
    const ecart = Math.abs(estimate.budget - estimate.coutTotal);
    return `Le budget annoncé est inférieur d'environ ${formatEur(ecart)} à l'estimation actuelle, avant prise en compte de certains frais complémentaires.`;
  }
  if (etat === "faible") {
    return "Votre budget est proche de l'estimation actuelle du projet — une marge de sécurité supplémentaire serait utile.";
  }
  return null;
}

export function tierFor(domain: Domain, points: number): Tier {
  const ratio = points / DOMAIN_MAX[domain];
  if (ratio >= 0.8) return "fort";
  if (ratio >= 0.4) return "moyen";
  return "faible";
}

const COHERENCE_REASON_TEXT: Record<CoherenceReason, string> = {
  budget_ratio: "l'écart entre le budget annoncé et l'estimation du projet",
  calendrier_avancement: "le calendrier envisagé, rapide au regard de l'avancement actuel du projet",
  definition_projet: "l'absence de terrain alors que le projet est annoncé prêt à lancer",
};

// Texte Cohérence dynamique — cite la ou les vraies raisons détectées plutôt qu'une formule
// générique par palier de points. Sans ça, un déficit budgétaire sévère (déjà annoncé en toutes
// lettres dans le domaine Budget juste au-dessus) pouvait cohabiter avec un texte Cohérence
// disant "globalement cohérent", contradiction relevée par Mahmoud sur la page en production.
export function coherenceDiagText(answers: Answers, estimate: Estimate | null): string {
  const reasons = coherenceReasons(answers, estimate);
  if (reasons.length === 0) return DOMAIN_TEXTS.coherence.fort;
  const liste = reasons.map((r) => COHERENCE_REASON_TEXT[r]).join(", ");
  return reasons.length === 1
    ? `Un point mérite d'être vérifié pour la cohérence d'ensemble du projet : ${liste}.`
    : `Plusieurs points méritent d'être vérifiés pour la cohérence d'ensemble du projet : ${liste}.`;
}

export function domainText(domain: Domain, points: number, estimate: Estimate | null, answers: Answers): { tier: Tier; texte: string } {
  let tier = tierFor(domain, points);
  let texte = DOMAIN_TEXTS[domain][tier];
  if (domain === "budget") {
    const dynamique = budgetDiagText(estimate);
    if (dynamique) {
      texte = dynamique;
      if (budgetEtat(estimate) === "deficit") tier = "faible";
    }
  }
  if (domain === "coherence") {
    texte = coherenceDiagText(answers, estimate);
  }
  return { tier, texte };
}

function weakestDomain(detail: Record<Domain, number>): Domain {
  let weakest: Domain = "budget";
  let weakestRatio = Infinity;
  (Object.keys(detail) as Domain[]).forEach((d) => {
    const ratio = detail[d] / DOMAIN_MAX[d];
    if (ratio < weakestRatio) {
      weakestRatio = ratio;
      weakest = d;
    }
  });
  return weakest;
}

// Le point le plus faible EN SCORE n'est pas toujours le plus critique en réalité (ex. Terrain
// 3/25 "pas encore sécurisé" est moins grave qu'un déficit budgétaire de 60 000 €). Hiérarchie
// de gravité métier avant le simple classement par score.
function principalPoint(answers: Answers, detail: Record<Domain, number>, estimate: Estimate | null): Domain {
  if (deficitSignificatif(estimate)) return "budget";
  if (answers.financement_statut === "pas_commence") return "financement";
  return weakestDomain(detail);
}

const POINT_FAIBLE_SYNTHESE: Record<Domain, string> = {
  terrain: "Votre projet paraît financièrement envisageable. La principale étape à sécuriser concerne la recherche ou la validation de votre terrain.",
  financement: "Votre projet est cohérent, mais sa faisabilité dépend encore de la validation de votre financement.",
  budget: "Votre projet nécessite probablement un ajustement du budget, du terrain ou des caractéristiques de la maison.",
  calendrier: "Votre projet semble cohérent ; le calendrier envisagé mérite d'être vérifié avec un conseiller.",
  coherence: "Certains éléments de votre projet gagneraient à être précisés pour en assurer la cohérence d'ensemble.",
};

const BUDGET_SYNTHESE_PAR_ETAT: Record<string, string> = {
  confortable: "Votre budget semble compatible avec l'estimation actuelle de votre projet.",
  faible: "Votre projet semble proche de votre budget maximum. Certains coûts restent encore à préciser.",
  deficit: "Votre budget actuel semble inférieur à l'estimation de votre projet. Un ajustement sera probablement nécessaire.",
  deficit_significatif:
    "Votre budget actuel est inférieur à l'estimation de votre projet. Un ajustement du terrain, de la construction ou du budget global semble nécessaire avant de pouvoir considérer le projet comme financièrement cohérent.",
};

const MATURITE_LABELS: Record<string, string> = {
  decouverte: "Projet initial",
  preparation: "Projet à préciser",
  comparaison: "Projet avancé",
  pret: "Projet prêt à être étudié",
};

export type Faisabilite = "Financièrement envisageable" | "À ajuster" | "Difficile dans les conditions actuelles";

function faisabiliteLabel(budgetPoints: number, estimate: Estimate | null): Faisabilite {
  if (budgetEtat(estimate) === "deficit") {
    return deficitSignificatif(estimate) ? "Difficile dans les conditions actuelles" : "À ajuster";
  }
  const ratio = budgetPoints / DOMAIN_MAX.budget;
  if (ratio >= 0.8) return "Financièrement envisageable";
  if (ratio >= 0.4) return "À ajuster";
  return "Difficile dans les conditions actuelles";
}

export const CONCLUSION_TITRES: Record<Faisabilite, string> = {
  "Financièrement envisageable": "Votre projet semble financièrement envisageable.",
  "À ajuster": "Votre projet nécessite quelques ajustements.",
  "Difficile dans les conditions actuelles": "Votre projet demande à être retravaillé avant d'avancer.",
};

export type Diagnostic = Score & {
  niveau: Niveau;
  pointFaible: Domain;
  synthese: string;
  maturite: string;
  faisabilite: Faisabilite;
};

export function computeDiagnostic(answers: Answers): Diagnostic {
  const score = computeScore(answers);
  const pointFaible = principalPoint(answers, score.detail, score.estimate);
  const etatBudget = budgetEtat(score.estimate);
  const etatBudgetSynthese = deficitSignificatif(score.estimate) ? "deficit_significatif" : etatBudget;
  const synthese =
    pointFaible === "budget" && etatBudgetSynthese
      ? BUDGET_SYNTHESE_PAR_ETAT[etatBudgetSynthese]
      : POINT_FAIBLE_SYNTHESE[pointFaible];

  return {
    ...score,
    niveau: statutGlobalLabel(score.total, score.estimate),
    pointFaible,
    synthese,
    maturite: MATURITE_LABELS[(answers.project_stage as string) ?? ""] || "Projet à préciser",
    faisabilite: faisabiliteLabel(score.detail.budget, score.estimate),
  };
}
