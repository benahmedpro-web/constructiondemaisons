// Dates de dernière modification réelle de chaque page du site.
// Source unique pour le lastmod du sitemap et les JSON-LD des guides.
//
// Généré depuis l'historique git par `npm run sync:dates` — ne pas éditer à la main.
// Dernière génération : 2026-09-14

export const DATES_PAGES: Record<string, string> = {
  "/": "2026-06-24",
  "/maison-ossature-bois/": "2026-09-10",
  "/extension-bois/": "2026-09-10",
  "/renovation-bois/": "2026-09-10",
  "/notre-methode/": "2026-09-10",
  "/annonces/": "2026-09-10",
  "/guides/": "2026-09-10",
  "/guides/maison-ossature-bois/": "2026-09-10",
  "/guides/coordonner-chantier-bois/": "2026-08-24",
  "/guides/moe-vs-ccmi/": "2026-09-10",
  "/guides/honoraires-maitre-oeuvre/": "2026-09-14",
  "/guides/re2020-maison-bois/": "2026-09-10",
  "/guides/extension-ossature-bois/": "2026-09-10",
  "/guides/choisir-artisans-maison-bois/": "2026-08-24",
  "/guides/permis-construire-genevois/": "2026-09-10",
  "/faire-construire-haute-savoie/": "2026-09-10",
  "/maison-ossature-bois-annecy/": "2026-08-20",
  "/maison-ossature-bois-annemasse/": "2026-09-10",
  "/maison-ossature-bois-saint-julien-en-genevois/": "2026-09-10",
  "/maison-ossature-bois-gex/": "2026-09-10",
  "/maison-ossature-bois-thonon/": "2026-09-10",
  "/guides/prix-maison-ossature-bois-haute-savoie/": "2026-09-10",
  "/guides/construction-chalet-ossature-bois-haute-savoie/": "2026-08-20",
  "/guides/garanties-assurance-maitre-oeuvre/": "2026-08-20",
  "/guides/prix-maison-ossature-bois-100m2/": "2026-09-10",
  "/guides/prix-maison-ossature-bois-120m2/": "2026-09-10",
  "/guides/prix-maison-ossature-bois-150m2/": "2026-09-10",
  "/catalogue/": "2026-09-10",
  "/temoignages/": "2026-09-10",
  "/a-propos/": "2026-09-10",
  "/demande-etude/": "2026-08-06",
  "/contact/": "2026-09-10",
  "/guides/prix-construction-maison/": "2026-09-10",
  "/mentions-legales/": "2026-08-13",
  "/vie-privee/": "2026-09-02",
  "/politique-cookies/": "2026-09-02",
  "/annonces/:slug/": "2026-09-10",
};

// Les pages piliers et locales n'exposaient aucune date en JSON-LD (seuls les guides en avaient) :
// les moteurs génératifs les lisaient donc comme non datées, d'où un score de fraîcheur nul dans
// l'audit GEO du 14/09/2026 alors que ces pages étaient à jour. La date vient du même référentiel
// git que le sitemap — jamais une date fabriquée.
export function jsonLdPageDatee(route: string, nom: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: nom,
    description,
    url: `https://www.constructiondemaisons.com${route}`,
    inLanguage: "fr-FR",
    dateModified: DATES_PAGES[route],
    publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: "https://www.constructiondemaisons.com" },
  };
}

/** Date de dernière modification d'une page, pour le lastmod du sitemap. */
export function datePage(route: string): Date {
  const iso = DATES_PAGES[route];
  if (!iso) {
    // Route absente du référentiel : on ne fabrique pas une fraîcheur qui n'existe pas.
    console.warn(`[dates-pages] route inconnue : ${route} — lancer \`npm run sync:dates\``);
    return new Date(0);
  }
  return new Date(`${iso}T00:00:00Z`);
}
