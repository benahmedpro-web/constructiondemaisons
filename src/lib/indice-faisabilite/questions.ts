import questionsData from "./data/questions.json";
import type { Question, Answers } from "./types";

export const QUESTIONS = questionsData.questions as Question[];

export function isVisible(question: Question, answers: Answers): boolean {
  if (!question.condition) return true;
  const val = answers[question.condition.field];
  return typeof val === "string" && question.condition.in.includes(val);
}

export function getVisibleQuestions(answers: Answers): Question[] {
  return QUESTIONS.filter((q) => isVisible(q, answers));
}

export function findNextIndex(answers: Answers, fromIndex: number, direction: 1 | -1): number {
  let i = fromIndex;
  while (i >= 0 && i < QUESTIONS.length) {
    if (isVisible(QUESTIONS[i], answers)) return i;
    i += direction;
  }
  return i;
}

// Regroupement en 4 sections pour l'affichage de progression ("Section 2/4" plutôt qu'"Étape
// 7/18") — recommandation UX du 08/08/2026. Distinct du champ `section` par question (utilisé
// pour l'eyebrow fin au-dessus de chaque titre) : ici on veut 4 blocs stables, qui ne dépendent
// pas du nombre variable de questions visibles selon les branchements conditionnels.
export const SECTION_GROUPS: { label: string; codes: string[] }[] = [
  { label: "Votre projet", codes: ["project_stage", "motivation_projet", "echeance_emmenagement", "regarde_ancien"] },
  {
    label: "Votre maison",
    codes: ["surface_habitable", "nombre_chambres", "pieces_complementaires", "type_maison", "style_maison", "location"],
  },
  { label: "Votre terrain", codes: ["terrain_status", "terrain_viabilise", "etude_sol", "surface_terrain", "surface_terrain_souhaitee"] },
  {
    label: "Financement & budget",
    codes: ["mode_financement", "budget_global", "budget_valide_professionnel", "vente_bien_pour_projet", "apport", "financement_statut", "calendrier_demarrage"],
  },
];

export function getSectionProgress(code: string): { index: number; total: number; label: string } {
  const total = SECTION_GROUPS.length;
  const index = SECTION_GROUPS.findIndex((g) => g.codes.includes(code));
  return { index: index === -1 ? 0 : index, total, label: index === -1 ? "" : SECTION_GROUPS[index].label };
}
