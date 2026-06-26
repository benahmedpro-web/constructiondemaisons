import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.constructiondemaisons.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Rénovation & isolation bois", item: BASE + "/renovation-bois/" },
  ],
};

export const metadata: Metadata = {
  title: "Rénovation & isolation bois — Maître d'œuvre Haute-Savoie | M&M CONSTRUCTION",
  description: "M&M CONSTRUCTION coordonne votre rénovation thermique par l'extérieur et isolation biosourcée en Genevois français, Haute-Savoie et Ain.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/renovation-bois/",
  },
};

const prestations = [
  {
    title: "Isolation thermique par l'extérieur (ITE)",
    body: "L'ITE en bardage bois améliore l'enveloppe thermique sans réduire la surface habitable. Nous coordonnons la dépose de l'ancien bardage, la mise en œuvre de l'isolation et la pose du nouveau bardage bois ventilé.",
  },
  {
    title: "Réhabilitation ossature bois existante",
    body: "Votre maison bois montre des signes de vieillissement ? Humidité, pont thermique, bardage dégradé : nous diagnostiquons, proposons un plan d'intervention et coordonnons les artisans qualifiés pour la reprise.",
  },
  {
    title: "Changement de menuiseries & étanchéité",
    body: "Remplacement des fenêtres et portes, traitement des jonctions bois/menuiserie, étanchéité à l'air. Des interventions simples qui ont un impact majeur sur le confort et la facture énergétique.",
  },
  {
    title: "Rénovation intérieure après travaux structurels",
    body: "Nous coordonnons la suite : plomberie, électricité, cloisons, finitions. Un seul interlocuteur, un seul planning, une seule référence en cas de problème.",
  },
];

export default function RenovationBoisPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* Hero */}
      <div className="bg-[#2C2C2A] py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <p className="text-[#BA7517] text-[12px] font-bold uppercase tracking-widest mt-4 mb-3">Maîtrise d&apos;œuvre · Rénovation</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-tight mb-4">
            Rénovation &amp; isolation bois
          </h1>
          <p className="text-white/75 text-[18px] leading-[1.7] max-w-[640px]">
            Améliorer la performance thermique de votre maison ou réhabiliter une ossature bois existante — avec les bons artisans et un suivi de chantier rigoureux.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
              Configurer mon projet
            </Link>
          </div>
        </div>
      </div>

      {/* Contexte */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
            <div>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-4">
                La rénovation bois, c&apos;est un métier à part
              </h2>
              <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
                La rénovation d&apos;une maison bois ou l&apos;isolation par bardage bois ne s&apos;improvise pas. Les jonctions entre ancien et neuf, les risques de pont thermique, l&apos;étanchéité à l&apos;air et la gestion de la vapeur d&apos;eau demandent des artisans qui connaissent le bois — pas des généralistes.
              </p>
              <p className="text-[16px] text-[#888780] leading-[1.8]">
                En Haute-Savoie et Ain, les conditions climatiques (enneigement, gel, humidité) renforcent ces exigences. M&M CONSTRUCTION sélectionne uniquement des artisans avec références bois locales, qualifications Qualibat et décennale à jour — avant tout démarrage de chantier. Chaque rénovation thermique cible un gain d&apos;au moins deux classes énergétiques au DPE, conformément aux exigences RE2020.
              </p>
            </div>
            <div className="bg-[#F2EDE6] p-6 flex flex-col gap-3">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517] mb-1">Ce qu&apos;on garantit</div>
              {[
                "Artisans qualifiés bois (Qualibat)",
                "Décennales vérifiées avant démarrage",
                "Devis comparatifs transparents",
                "Suivi de chantier à chaque phase",
                "Réception avec grille de contrôle",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] text-[#2C2C2A]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] text-center mb-10">
            Nos interventions en rénovation bois
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prestations.map((p, i) => (
              <div key={i} className="bg-white p-6 border-t-4 border-[#BA7517]">
                <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-3">{p.title}</h3>
                <p className="text-[14px] text-[#888780] leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[26px] font-bold text-white mb-3">Zone d&apos;intervention</h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-6">
            Nous travaillons en Haute-Savoie (74), Ain (01) et Genevois français. Nous ne nous déployons pas hors de notre zone pour garder le contrôle des délais et la qualité du réseau artisans.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Annecy", "Thonon-les-Bains", "Annemasse", "Gex", "Bellegarde", "Bourg-en-Bresse"].map((ville) => (
              <span key={ville} className="bg-white/10 text-white/80 text-[14px] px-4 py-2">{ville}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EDE6] py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-3">Vous avez un projet de rénovation ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Décrivez votre projet, on vous rappelle pour un premier échange gratuit. Analyse de faisabilité, budget estimatif, délais — avant toute contractualisation.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Configurer mon projet →
          </Link>
          <p className="mt-5 text-[13px] text-[#888780]">
            <Link href="/a-propos/" className="text-[#BA7517] no-underline hover:underline">→ En savoir plus sur Mahmoud Ben Ahmed</Link>
            {" · "}
            <Link href="/contact/" className="text-[#888780] no-underline hover:text-[#2C2C2A]">Nous contacter</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
