import { MetadataRoute } from "next";
import { annonces } from "@/lib/annonces";
import { datePage } from "@/lib/dates-pages";

const BASE = "https://www.constructiondemaisons.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const annonceUrls = annonces.map((a) => ({
    url: `${BASE}/annonces/${a.slug}/`,
    lastModified: datePage("/annonces/:slug/"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${BASE}/`, lastModified: datePage("/"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/maison-ossature-bois/`, lastModified: datePage("/maison-ossature-bois/"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/extension-bois/`, lastModified: datePage("/extension-bois/"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/renovation-bois/`, lastModified: datePage("/renovation-bois/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/notre-methode/`, lastModified: datePage("/notre-methode/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/annonces/`, lastModified: datePage("/annonces/"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/guides/`, lastModified: datePage("/guides/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/maison-ossature-bois/`, lastModified: datePage("/guides/maison-ossature-bois/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/coordonner-chantier-bois/`, lastModified: datePage("/guides/coordonner-chantier-bois/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/moe-vs-ccmi/`, lastModified: datePage("/guides/moe-vs-ccmi/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/re2020-maison-bois/`, lastModified: datePage("/guides/re2020-maison-bois/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/extension-ossature-bois/`, lastModified: datePage("/guides/extension-ossature-bois/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/choisir-artisans-maison-bois/`, lastModified: datePage("/guides/choisir-artisans-maison-bois/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/permis-construire-genevois/`, lastModified: datePage("/guides/permis-construire-genevois/"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faire-construire-haute-savoie/`, lastModified: datePage("/faire-construire-haute-savoie/"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/maison-ossature-bois-annecy/`, lastModified: datePage("/maison-ossature-bois-annecy/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/maison-ossature-bois-annemasse/`, lastModified: datePage("/maison-ossature-bois-annemasse/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/maison-ossature-bois-saint-julien-en-genevois/`, lastModified: datePage("/maison-ossature-bois-saint-julien-en-genevois/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/maison-ossature-bois-gex/`, lastModified: datePage("/maison-ossature-bois-gex/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/maison-ossature-bois-thonon/`, lastModified: datePage("/maison-ossature-bois-thonon/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/prix-maison-ossature-bois-haute-savoie/`, lastModified: datePage("/guides/prix-maison-ossature-bois-haute-savoie/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/construction-chalet-ossature-bois-haute-savoie/`, lastModified: datePage("/guides/construction-chalet-ossature-bois-haute-savoie/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/garanties-assurance-maitre-oeuvre/`, lastModified: datePage("/guides/garanties-assurance-maitre-oeuvre/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/prix-maison-ossature-bois-100m2/`, lastModified: datePage("/guides/prix-maison-ossature-bois-100m2/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/prix-maison-ossature-bois-120m2/`, lastModified: datePage("/guides/prix-maison-ossature-bois-120m2/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/prix-maison-ossature-bois-150m2/`, lastModified: datePage("/guides/prix-maison-ossature-bois-150m2/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/catalogue/`, lastModified: datePage("/catalogue/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/temoignages/`, lastModified: datePage("/temoignages/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/a-propos/`, lastModified: datePage("/a-propos/"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/demande-etude/`, lastModified: datePage("/demande-etude/"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact/`, lastModified: datePage("/contact/"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/guides/prix-construction-maison/`, lastModified: datePage("/guides/prix-construction-maison/"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/mentions-legales/`, lastModified: datePage("/mentions-legales/"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/vie-privee/`, lastModified: datePage("/vie-privee/"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/politique-cookies/`, lastModified: datePage("/politique-cookies/"), changeFrequency: "yearly", priority: 0.1 },
    ...annonceUrls,
  ];
}
