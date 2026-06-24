import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permis de construire en Genevois français : les pièges à éviter | M&M CONSTRUCTION",
  description: "Délais d'instruction, PLU locaux, recours voisins, zones sismiques — ce que les services d'urbanisme ne vous diront pas. Guide par M&M CONSTRUCTION, maître d'œuvre.",
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Permis de construire en Genevois français : les pièges à éviter",
  description: "Délais d'instruction, PLU locaux, recours voisins, zones sismiques — ce que les services d'urbanisme ne vous diront pas.",
  url: BASE + "/guides/permis-construire-genevois/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  dateModified: "2025-06-01",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Permis de construire Genevois", item: BASE + "/guides/permis-construire-genevois/" },
  ],
};

export default function GuidePermisGenevoisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
    <main>
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[780px] mx-auto">
          <div className="flex gap-2 text-[13px] text-white/40 mb-4">
            <Link href="/" className="text-white/40 no-underline hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/guides/" className="text-white/40 no-underline hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white/70">Permis de construire Genevois</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Urbanisme</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            Permis de construire en Genevois français : les pièges à éviter
          </h1>
          <p className="text-white/60 text-[16px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Maître d&apos;œuvre Haute-Savoie</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            Le Genevois français (Haute-Savoie, Ain, communes frontalières) est l&apos;une des zones de France où les procédures d&apos;urbanisme sont les plus complexes. Pression foncière, SCOT Grand Genève, zones sismiques, PLU restrictifs, recours fréquents — voici ce qu&apos;il faut anticiper avant de déposer votre demande.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Délais d&apos;instruction : la réalité sur le terrain</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Le délai légal d&apos;instruction d&apos;un permis de construire de maison individuelle est de 2 mois. Dans le Genevois français, en pratique, comptez :
          </p>
          <div className="border border-[#D9D4CC] overflow-hidden mb-4">
            {[
              { commune: "Communes de moins de 2 000 hab. (Ain, zone rurale 74)", delai: "2–3 mois" },
              { commune: "Communes périurbaines (Gex, Annemasse, Thonon)", delai: "3–5 mois" },
              { commune: "Communes sous pression foncière forte (Archamps, Collonges)", delai: "4–6 mois" },
              { commune: "Si consultation ABF (Architecte des Bâtiments de France)", delai: "+2 mois supplémentaires" },
              { commune: "Si demande de pièces complémentaires (PC majeur)", delai: "Délai repart à zéro" },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between items-center p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                <span className="text-[#2C2C2A]">{row.commune}</span>
                <span className="text-[#BA7517] font-bold flex-shrink-0 ml-4">{row.delai}</span>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#888780] italic mb-6">La demande de pièces complémentaires est le piège numéro 1. Si l&apos;instructeur demande un document manquant, le délai d&apos;instruction repart intégralement à zéro à la réception du document.</p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les spécificités PLU du Genevois français</h2>
          <div className="flex flex-col gap-4 mb-6">
            {[
              {
                titre: "Zones agricoles et naturelles protégées",
                corps: "Une partie significative du territoire Genevois est classée en zone A (agricole) ou N (naturelle) dans les PLU. En zone A ou N, la construction de maisons individuelles est en principe interdite, sauf pour les agriculteurs. Vérifiez le zonage PLU avant d'acheter un terrain.",
              },
              {
                titre: "Coefficient d'emprise au sol (CES)",
                corps: "De nombreux PLU du Genevois imposent un CES entre 0,15 et 0,25 — ce qui limite la surface couvrable. Pour une parcelle de 1 000 m², un CES de 0,20 signifie que vous ne pouvez couvrir que 200 m². L'extension ou le garage sont à intégrer dans ce calcul.",
              },
              {
                titre: "SCOT du Grand Genève",
                corps: "Le Schéma de Cohérence Territoriale du Grand Genève encadre les communes frontalières. Il impose des densités minimales en zones urbaines et des protections renforcées en zones agricoles. Certains PLU sont en cours de révision pour se mettre en conformité.",
              },
              {
                titre: "Prescriptions architecturales",
                corps: "Dans les communes savoyardes, les PLU imposent souvent des prescriptions sur le toit (pente > 35°, tuiles traditionnelles) ou les matériaux (bardage bois exigé ou interdit selon les zones). Le bois n'est pas toujours autorisé — vérifiez avant de finaliser votre projet architectural.",
              },
            ].map((item) => (
              <div key={item.titre} className="border-l-[3px] border-[#BA7517] pl-5 py-2">
                <div className="font-bold text-[#2C2C2A] text-[15px] mb-1">{item.titre}</div>
                <div className="text-[14px] text-[#888780] leading-[1.7]">{item.corps}</div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Zone sismique : ce que ça impose pour une maison bois</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            La quasi-totalité du Genevois français est en zone de sismicité modérée (zone 3) à moyenne (zone 4 pour certaines communes de l&apos;Ain). Conséquences concrètes pour votre permis et votre construction :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { item: "Étude structure antisismique obligatoire", detail: "Un bureau d'études structure doit intervenir et signer les plans de structure. Cette mission est à budgéter (2 000–5 000 €)." },
              { item: "Renforts sur l'ossature bois", detail: "Des contreventements supplémentaires, des ancres boulonnées sur les semelles et des liaisons renforcées sont imposés selon l'Eurocode 8." },
              { item: "Fondations adaptées", detail: "En zone sismique, les fondations doivent être coulées en béton armé avec armatures spécifiques. Pas de pose sur plots en zones 3/4." },
              { item: "Dossier technique à fournir", detail: "Le dossier de permis en zone sismique doit inclure une note de calcul ou une attestation du bureau d'études structure." },
            ].map((item) => (
              <div key={item.item} className="bg-[#F2EDE6] p-4">
                <div className="font-bold text-[#2C2C2A] text-[14px] mb-1">{item.item}</div>
                <div className="text-[13px] text-[#888780] leading-[1.6]">{item.detail}</div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Recours des tiers : le risque sous-estimé</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            En Genevois français, la pression foncière et la densité des projets rendent les recours de voisinage plus fréquents qu&apos;ailleurs. Un voisin peut contester votre permis jusqu&apos;à 2 mois après son affichage sur le terrain — ce qui peut bloquer votre chantier pendant 12 à 18 mois si un recours aboutit.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            Se protéger : afficher le permis correctement et immédiatement (panneau réglementaire), conserver les photos d&apos;affichage datées, maintenir de bonnes relations avec les voisins avant les travaux. Un maître d&apos;œuvre expérimenté sur la zone connaît ces risques et peut anticiper les situations problématiques lors de la conception du projet.
          </p>
        </div>
      </article>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">On connaît les PLU du Genevois</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">M&M CONSTRUCTION gère les permis de construire dans toute la zone depuis des années. On vérifie la faisabilité avant que vous engagiez le moindre euro.</p>
          </div>
          <Link href="/demande-etude/" className="flex-shrink-0 inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors self-center">
            Demande d&apos;étude →
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
