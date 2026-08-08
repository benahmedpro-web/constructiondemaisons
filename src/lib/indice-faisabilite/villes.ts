import villesData from "./data/villes.json";

type Ville = { nom: string; cp: string; pop: number };

const VILLES = villesData.villes as Ville[];

// Liste locale (Haute-Savoie + Ain, source geo.api.gouv.fr) plutôt qu'un appel à l'API Adresse
// gouv.fr à chaque frappe : cette dernière classe mal les requêtes courtes ("Ann" -> Sainte-Anne
// en Guadeloupe avant Annemasse). Une liste bornée à la zone d'activité est fiable dès 3
// caractères. Couverture actuelle : 74 + 01 uniquement — à étendre si besoin.
export function normalizeCity(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export type CitySuggestion = { label: string; postcode: string };

export function searchCities(query: string, limit = 6): CitySuggestion[] {
  const q = normalizeCity(query);
  const starts: Ville[] = [];
  const includes: Ville[] = [];
  for (const v of VILLES) {
    const n = normalizeCity(v.nom);
    if (n.startsWith(q)) starts.push(v);
    else if (n.includes(q)) includes.push(v);
  }
  return starts
    .concat(includes)
    .slice(0, limit)
    .map((v) => ({ label: v.nom, postcode: v.cp }));
}
