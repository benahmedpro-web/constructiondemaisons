import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre méthode MOE — Maîtrise d'œuvre maison bois | M&M CONSTRUCTION",
  description: "La méthode M&M CONSTRUCTION : évaluation, conception, permis, sélection artisans, coordination chantier, réception. Un maître d'œuvre spécialisé bois en Haute-Savoie.",
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

      {/* CTA */}
      <section className="bg-[#F2EDE6] py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-3">Prêt à démarrer ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Le premier échange est gratuit et sans engagement. On analyse votre projet, on vous dit ce qui est faisable et dans quel délai.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
