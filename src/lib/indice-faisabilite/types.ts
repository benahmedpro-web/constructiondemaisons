export type QuestionType =
  | "single-choice"
  | "multi-choice"
  | "number"
  | "text"
  | "city-autocomplete"
  | "info";

export type QuestionOption = {
  value: string;
  label: string;
  exclusive?: boolean;
};

export type QuestionCondition = {
  field: string;
  in: string[];
};

export type Question = {
  code: string;
  screen: string;
  section: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  placeholder?: string;
  required?: boolean;
  condition?: QuestionCondition;
  options?: QuestionOption[];
};

export type AnswerValue = string | number | string[] | undefined;
export type Answers = Record<string, AnswerValue>;

export type Domain = "budget" | "terrain" | "financement" | "calendrier" | "coherence";

export type ScoreDetail = Record<Domain, number>;

export type Zone = {
  nom: string;
  communes: string[];
  prix_moyen_eur_m2: number;
  nb_annonces: number;
};

export type ZonesData = {
  source: string;
  cout_construction_eur_m2: {
    valeur: number;
    exclut: string[];
    note: string;
  };
  zones: Zone[];
  notes: string[];
};

export type Estimate = {
  surfaceHabitable: number;
  surfaceTerrain: number;
  surfaceTerrainEstimee: boolean;
  budget: number;
  zone: Zone | null;
  coutConstruction: number;
  coutTerrain: number | null;
  coutTotal: number | null;
  ratio: number | null;
};

export type BudgetEtat = "confortable" | "faible" | "deficit" | null;
