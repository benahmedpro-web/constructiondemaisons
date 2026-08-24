import Link from "next/link";
import type { Metadata } from "next";

const BASE = "https://www.constructiondemaisons.com";

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maîtrise d'œuvre maison ossature bois — M&M CONSTRUCTION",
  serviceType: "Maîtrise d'œuvre",
  description: "Accompagnement complet de votre projet de maison bois : évaluation, conception, permis de construire, sélection artisans, coordination de chantier, réception. Zone Haute-Savoie, Ain, Genevois français.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Ain" },
    { "@type": "AdministrativeArea", name: "Genevois français" },
  ],
  offers: {
    "@type": "Offer",
    description: "Honoraires de maîtrise d'œuvre : 8 à 12 % du coût des travaux HT, définis contractuellement avant toute intervention.",
  },
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment réaliser un projet de maison ossature bois avec un maître d'œuvre en Haute-Savoie",
  description: "5 phases pour construire votre maison bois avec M&M CONSTRUCTION, du premier échange à la remise des clés. Haute-Savoie, Ain, Genevois français.",
  totalTime: "P14M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "8 à 12 % du coût travaux HT" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Évaluation du projet",
      text: "Premier échange gratuit par téléphone ou sur site. Analyse du terrain : PLU, accès, orientation, contraintes. Évaluation du programme (surfaces, nombre de pièces, budget). Identification des risques et des marges de manœuvre. Durée : semaines 1 à 2.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Conception et dépôt du permis de construire",
      text: "Coordination avec l'architecte ou le dessinateur spécialisé bois. Plans d'avant-projet soumis à validation. Constitution et dépôt du dossier de permis de construire en mairie. Suivi de l'instruction — délais de 2 à 6 mois selon les communes du Genevois. Durée : mois 2 à 5.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Sélection des artisans et budget définitif",
      text: "Appel d'offres auprès des artisans bois vérifiés locaux. Vérification des décennales et qualifications (Qualibat, ECOBOIS, RGE). Analyse comparative des devis. Présentation du budget définitif avant signature. Contrats directs entre le maître d'ouvrage et chaque artisan. Durée : mois 4 à 6.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Coordination de chantier",
      text: "Planning général établi par corps de métier avant démarrage. Réunions de chantier hebdomadaires ou bimensuelles. Suivi des approvisionnements critiques (ossature, menuiseries, isolation). Gestion des aléas : retards, modifications techniques. Comptes-rendus réguliers transmis par email. Durée : toute la durée du chantier (6 à 10 mois).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Réception et activation des garanties",
      text: "Visite de pré-réception avec grille de contrôle qualité. Levée des réserves avant remise officielle des clés. Procès-verbal de réception signé avec les artisans. Accompagnement dans l'activation des garanties légales (décennale, parfait achèvement, biennale). Disponibilité 30 jours après réception. Durée : J-7 à J+30.",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un maître d'œuvre pour une maison ossature bois ?",
      acceptedAnswer: { "@type": "Answer", text: "Le maître d'œuvre est un professionnel indépendant qui coordonne l'ensemble des intervenants d'un chantier — architecte, bureaux d'études, artisans — pour le compte du maître d'ouvrage (le propriétaire). Contrairement au constructeur CCMI, il ne réalise pas les travaux lui-même : il les pilote, les contrôle et en rend compte. Son objectif est défendre vos intérêts, pas ceux d'un catalogue de modèles ou d'artisans intégrés." },
    },
    {
      "@type": "Question",
      name: "Combien coûte la maîtrise d'œuvre pour une maison bois en Haute-Savoie ?",
      acceptedAnswer: { "@type": "Answer", text: "Les honoraires de maîtrise d'œuvre représentent généralement 8 à 12 % du coût des travaux HT selon la complexité du projet et l'étendue des missions (de la conception seule à la réception complète). Pour une maison de 120 m² à 240 000 € HT de travaux, cela représente 19 200 à 28 800 €. Ces honoraires sont souvent compensés par les économies réalisées lors de la mise en concurrence des artisans." },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence concrète entre un maître d'œuvre et un constructeur CCMI ?",
      acceptedAnswer: { "@type": "Answer", text: "En CCMI, vous signez avec un seul interlocuteur commercial qui sous-traite à des artisans — sa marge (15 à 25 %) est incluse dans le prix global. En maîtrise d'œuvre, vous avez des contrats directs avec chaque artisan : vous voyez chaque devis, chaque facture. Le maître d'œuvre est rémunéré par honoraires fixes, pas par une marge sur les travaux." },
    },
    {
      "@type": "Question",
      name: "Quel est le délai total d'un projet de maison bois avec un maître d'œuvre ?",
      acceptedAnswer: { "@type": "Answer", text: "De la première réunion aux clés, il faut compter 14 à 20 mois en Haute-Savoie et Genevois : 1 à 2 mois d'études, 3 à 6 mois de permis de construire (selon la commune), 1 mois de préparation chantier, et 8 à 12 mois de chantier. La phase permis est souvent la plus longue dans les communes frontalières comme Annemasse, Saint-Julien-en-Genevois ou Gex." },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Notre méthode MOE", item: BASE + "/notre-methode/" },
  ],
};

export const metadata: Metadata = {
  title: "Notre méthode MOE — maison bois",
  description: "Évaluation, conception, permis, sélection artisans, coordination de chantier, réception. La méthode d'un maître d'œuvre spécialisé bois en Haute-Savoie.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/notre-methode/",
  },
};

const phases = [
  {
    num: "01",
    title: "Évaluation du projet",
    duration: "Semaine 1–2",
    detail: [
      "Premier échange gratuit par téléphone ou sur site",
      "Analyse du terrain : PLU, accès, orientation, contraintes",
      "Évaluation du programme (surfaces, nombre de pièces, budget)",
      "Identification des risques et des marges de manœuvre",
      "Conclusion : le projet est faisable, ou on vous dit pourquoi pas",
    ],
    note: "C'est à ce stade qu'on vérifie si votre projet tient — pas après signature d'un contrat.",
  },
  {
    num: "02",
    title: "Conception & dépôt du permis",
    duration: "Mois 2–5",
    detail: [
      "Coordination avec l'architecte ou le dessinateur spécialisé bois",
      "Plans d'avant-projet (APD) soumis à votre validation",
      "Notice descriptive et dossier de permis de construire complet",
      "Dépôt en mairie, suivi de l'instruction, réponse aux demandes de pièces",
      "Gestion des modifications éventuelles demandées par l'instructeur",
    ],
    note: "En Genevois français, les délais d'instruction peuvent aller de 2 à 6 mois selon les communes. On vous prépare à ça.",
  },
  {
    num: "03",
    title: "Sélection des artisans & budget",
    duration: "Mois 4–6",
    detail: [
      "Appel d'offres auprès de nos artisans vérifiés locaux",
      "Vérification des décennales et qualifications bois (Qualibat, ECOBOIS, RGE)",
      "Analyse comparative des devis",
      "Présentation du budget définitif avant toute signature",
      "Contrats directs entre vous et chaque artisan — pas de marge cachée",
    ],
    note: "Nos honoraires sont définis à la signature. Ils ne changent pas en cours de projet.",
  },
  {
    num: "04",
    title: "Coordination de chantier",
    duration: "Durée du chantier",
    detail: [
      "Planning général par corps de métier établi avant démarrage",
      "Réunions de chantier hebdomadaires ou bimensuelles",
      "Suivi des approvisionnements critiques (ossature, menuiseries, isolation)",
      "Gestion des aléas : retards, modifications techniques, réserves",
      "Comptes-rendus réguliers transmis par email",
    ],
    note: "Vous avez un seul numéro à appeler. Pas 8.",
  },
  {
    num: "05",
    title: "Réception & garanties",
    duration: "J-7 à J+30",
    detail: [
      "Visite de pré-réception avec grille de contrôle qualité",
      "Levée des réserves avant remise officielle des clés",
      "Procès-verbal de réception signé avec les artisans",
      "Accompagnement dans l'activation des garanties (décennale, parfait achèvement, biennale)",
      "Disponibilité 30 jours après réception pour les questions",
    ],
    note: "Les réserves non levées avant réception = levier juridique. On les documente systématiquement.",
  },
];

export default function NotreMethodePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      {/* Hero */}
      <div className="bg-[#2C2C2A] py-20 px-5">
        <div className="max-w-[800px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <p className="text-[#BA7517] text-[12px] font-bold uppercase tracking-widest mt-4 mb-3">Maîtrise d&apos;œuvre · Méthode</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-tight mb-4">
            Notre méthode MOE
          </h1>
          <p className="text-white/75 text-[18px] leading-[1.7] max-w-[640px]">
            5 phases, un interlocuteur, zéro approximation. Voilà ce que signifie concrètement confier votre projet bois à un maître d&apos;œuvre spécialisé.
          </p>
        </div>
      </div>

      {/* Différence MOE / Constructeur */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2C2C2A] text-center mb-10">
            Maître d&apos;œuvre vs Constructeur : ce qui change vraiment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#D9D4CC]">
            <div className="p-6 border-b md:border-b-0 md:border-r border-[#D9D4CC]">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#888780] mb-4">Constructeur (CCMI)</div>
              {[
                "Catalogue de modèles imposé",
                "Marge intégrée sur matériaux et artisans",
                "Interlocuteur commercial, pas technique",
                "Sous-traitance souvent opaque",
                "Prix fixe apparent, options chiffrées a posteriori",
                "Garantie maison entière mais suivi limité",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[14px] text-[#888780] py-2 border-b border-[#F2EDE6] last:border-0">
                  <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9D4CC" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {item}
                </div>
              ))}
            </div>
            <div className="p-6 bg-[#F2EDE6]">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">M&M CONSTRUCTION (MOE)</div>
              {[
                "Conception sur mesure, adapté à votre terrain",
                "Honoraires forfaitaires, pas de marge cachée",
                "Mahmoud Ben Ahmed, maître d'œuvre spécialisé bois",
                "Artisans sélectionnés, contrats directs avec vous",
                "Budget chiffré avec précision avant démarrage",
                "Suivi de chantier à chaque étape clé",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] py-2 border-b border-[#D9D4CC] last:border-0">
                  <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Les 5 phases */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2C2C2A] text-center mb-12">
            Les 5 phases de votre projet
          </h2>
          <div className="flex flex-col gap-8">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-white p-8 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-[48px] font-black text-[#BA7517] leading-none">{phase.num}</div>
                  <div className="text-[11px] text-[#888780] uppercase tracking-widest mt-1">{phase.duration}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-[#2C2C2A] mb-4">{phase.title}</h3>
                  <ul className="flex flex-col gap-2 mb-4">
                    {phase.detail.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[14px] text-[#888780]">
                        <svg className="flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="border-l-3 border-[#BA7517] pl-4 border-l-[3px] text-[13px] text-[#888780] italic">
                    {phase.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honoraires */}
      <section className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[26px] font-bold text-white mb-4">Nos honoraires</h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-6">
            Les honoraires de maîtrise d&apos;œuvre représentent généralement <strong className="text-white">8 à 12 % du coût des travaux</strong>, selon la complexité du projet et les missions confiées. Ils sont définis contractuellement avant toute intervention.
          </p>
          <p className="text-[14px] text-white/40">
            Ce pourcentage est souvent compensé par les économies réalisées grâce à la mise en concurrence des artisans et à la maîtrise du budget chantier.
          </p>
        </div>
      </section>

      {/* FAQ GEO-ready */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-10">
            Questions fréquentes sur la maîtrise d&apos;œuvre bois
          </h2>
          <div className="flex flex-col divide-y divide-[#E8E2DA]">
            {[
              {
                q: "Qu'est-ce qu'un maître d'œuvre pour une maison ossature bois ?",
                a: "Le maître d'œuvre est un professionnel indépendant qui coordonne l'ensemble des intervenants d'un chantier — architecte, bureaux d'études, artisans — pour le compte du maître d'ouvrage (le propriétaire). Contrairement au constructeur CCMI, il ne réalise pas les travaux lui-même : il les pilote, les contrôle et en rend compte. Son objectif est défendre vos intérêts, pas ceux d'un catalogue de modèles ou d'artisans intégrés.",
              },
              {
                q: "Combien coûte la maîtrise d'œuvre pour une maison bois en Haute-Savoie ?",
                a: "Les honoraires de maîtrise d'œuvre représentent généralement 8 à 12 % du coût des travaux HT selon la complexité du projet et l'étendue des missions. Pour une maison de 120 m² à 240 000 € HT de travaux, cela représente 19 200 à 28 800 €. Ces honoraires sont souvent compensés par les économies réalisées lors de la mise en concurrence des artisans.",
              },
              {
                q: "Quelle est la différence concrète entre un maître d'œuvre et un constructeur CCMI ?",
                a: "En CCMI, vous signez avec un seul interlocuteur commercial qui sous-traite à des artisans — sa marge (15 à 25 %) est incluse dans le prix global. En maîtrise d'œuvre, vous avez des contrats directs avec chaque artisan : vous voyez chaque devis, chaque facture. Le maître d'œuvre est rémunéré par honoraires fixes, pas par une marge sur les travaux.",
              },
              {
                q: "Quel est le délai total d'un projet de maison bois avec un maître d'œuvre ?",
                a: "De la première réunion aux clés, il faut compter 14 à 20 mois en Haute-Savoie et Genevois : 1 à 2 mois d'études, 3 à 6 mois de permis de construire (selon la commune), 1 mois de préparation chantier, et 8 à 12 mois de chantier. La phase permis est souvent la plus longue dans les communes frontalières comme Annemasse, Saint-Julien-en-Genevois ou Gex.",
              },
            ].map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-3">{item.q}</h3>
                <p className="text-[15px] text-[#888780] leading-[1.8]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EDE6] py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-3">Prêt à démarrer ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Le premier échange est gratuit et sans engagement. On analyse votre projet, on vous dit ce qui est faisable et dans quel délai.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Démarrer avec nous →
          </Link>
          <p className="mt-5 text-[13px] text-[#888780]">
            <Link href="/a-propos/" className="text-[#BA7517] no-underline hover:underline">→ À propos de Mahmoud Ben Ahmed</Link>
            {" · "}
            <Link href="/contact/" className="text-[#888780] no-underline hover:text-[#2C2C2A]">Nous contacter</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
