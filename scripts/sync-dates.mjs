#!/usr/bin/env node
/**
 * Synchronise toutes les dates de mise à jour du site sur l'historique git.
 *
 * Pour chaque page, la date retenue est celle du dernier commit ayant réellement
 * modifié son fichier source. Rien n'est inventé ni arrondi.
 *
 * Met à jour :
 *   - src/lib/dates-pages.ts      → lastmod du sitemap
 *   - les guides (`dateModified` du JSON-LD + mention « Mis à jour le … » affichée)
 *
 * Usage :
 *   node scripts/sync-dates.mjs            vérifie et liste les écarts (aucune écriture)
 *   node scripts/sync-dates.mjs --write    applique les corrections
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";


const WRITE = process.argv.includes("--write");

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const enFrancais = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d === 1 ? "1er" : d} ${MOIS[m - 1]} ${y}`;
};

const dernierCommit = (fichier) =>
  execFileSync("git", ["log", "-1", "--format=%ad", "--date=short", "--", fichier], { encoding: "utf8" }).trim();

// ---------------------------------------------------------------- sitemap
const sitemapSrc = readFileSync("src/app/sitemap.ts", "utf8");
const routes = [...sitemapSrc.matchAll(/\$\{BASE\}(\/[^`$]*)`/g)].map((m) => m[1]);

const fichierDeRoute = (route) => {
  const seg = route.replace(/^\/|\/$/g, "");
  return seg ? `src/app/${seg}/page.tsx` : "src/app/page.tsx";
};

const dates = {};
for (const route of routes) {
  const f = fichierDeRoute(route);
  if (!existsSync(f)) {
    console.warn(`  ⚠  route sans fichier source, ignorée : ${route}`);
    continue;
  }
  dates[route] = dernierCommit(f);
}
dates["/annonces/:slug/"] = dernierCommit("src/lib/annonces.ts");

const moduleDates = `// Dates de dernière modification réelle de chaque page du site.
// Source unique pour le lastmod du sitemap et les JSON-LD des guides.
//
// Généré depuis l'historique git par \`npm run sync:dates\` — ne pas éditer à la main.
// Dernière génération : ${new Date().toISOString().slice(0, 10)}

export const DATES_PAGES: Record<string, string> = {
${Object.entries(dates).map(([r, d]) => `  ${JSON.stringify(r)}: ${JSON.stringify(d)},`).join("\n")}
};

/** Date de dernière modification d'une page, pour le lastmod du sitemap. */
export function datePage(route: string): Date {
  const iso = DATES_PAGES[route];
  if (!iso) {
    // Route absente du référentiel : on ne fabrique pas une fraîcheur qui n'existe pas.
    console.warn(\`[dates-pages] route inconnue : \${route} — lancer \\\`npm run sync:dates\\\`\`);
    return new Date(0);
  }
  return new Date(\`\${iso}T00:00:00Z\`);
}
`;

let modifies = 0;
const ecrire = (chemin, contenu) => {
  const avant = existsSync(chemin) ? readFileSync(chemin, "utf8") : null;
  if (avant === contenu) return false;
  modifies++;
  if (WRITE) writeFileSync(chemin, contenu, "utf8");
  console.log(`  ${WRITE ? "✔" : "→"} ${chemin}`);
  return true;
};

console.log("\nRéférentiel de dates :");
ecrire("src/lib/dates-pages.ts", moduleDates);

// ---------------------------------------------------------------- guides
console.log("\nGuides (JSON-LD + mention affichée) :");
const guides = execFileSync("grep", ["-rl", "dateModified", "src/app"], { encoding: "utf8" })
  .split("\n").filter(Boolean).sort();

for (const f of guides) {
  const date = dernierCommit(f);
  const avant = readFileSync(f, "utf8");
  const apres = avant
    .replace(/(dateModified:\s*")[0-9-]+(")/, `$1${date}$2`)
    .replace(/(Mis à jour le )[^<]*/, `$1${enFrancais(date)}`);
  if (apres !== avant) {
    modifies++;
    if (WRITE) writeFileSync(f, apres, "utf8");
    console.log(`  ${WRITE ? "✔" : "→"} ${f.replace("src/app/", "").replace("/page.tsx", "")} → ${date}`);
  }
}

console.log(
  modifies === 0
    ? "\nToutes les dates sont à jour.\n"
    : WRITE
      ? `\n${modifies} fichier(s) mis à jour.\n`
      : `\n${modifies} fichier(s) à mettre à jour — relancer avec --write.\n`
);
if (!WRITE && modifies > 0) process.exit(1);
