import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Mahmoud Ben Ahmed | M&M CONSTRUCTION",
  description: "20 ans de BTP, 200+ projets accompagnés, expert des deux côtés du marché. Mahmoud Ben Ahmed fonde M&M CONSTRUCTION à Annemasse pour accompagner les particuliers sans intermédiaire.",
};

const valeurs = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titre: "Il connaît les deux côtés",
    corps: "Mahmoud a passé 17 ans chez les grands groupes CMI (Maisons Pierre, Geoxia, Demeures Traditionnelles). Il sait exactement comment ils travaillent, ce qu'ils promettent et ce qu'ils livrent réellement. Cette connaissance de l'intérieur est au service de ses clients depuis 2020.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    titre: "200+ projets de construction",
    corps: "Des premiers projets en 2003 à aujourd'hui, Mahmoud a accompagné plus de 200 projets de construction de maisons individuelles. Faisabilité, coordination technique, suivi client — il connaît chaque étape par cœur.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    titre: "Ancrage Haute-Savoie",
    corps: "Installé à Annemasse, Mahmoud travaille exclusivement en Haute-Savoie, Ain et Genevois français. Il connaît les PLU locaux, les contraintes alpines, les délais d'instruction réels et les bons interlocuteurs techniques sur la zone.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    titre: "Réseau de prescripteurs",
    corps: "Architectes, maîtres d'œuvre, géomètres, notaires, bureaux d'études — Mahmoud a construit son réseau de prescripteurs sur deux décennies. Chaque projet bénéficie de ce maillage pour accélérer les validations et coordonner les bons intervenants.",
  },
];

const parcours = [
  { annee: "2003", evenement: "Débuts en CMI chez Maisons Pierre en Île-de-France — 47 projets commercialisés" },
  { annee: "2006", evenement: "Commercial chez Geoxia — 17 projets accompagnés en Île-de-France" },
  { annee: "2014", evenement: "Retour chez Maisons Pierre — triple progression en 3 ans : commercial, ingénieur commercial, responsable d'agence. 92 projets commercialisés" },
  { annee: "2017", evenement: "Responsable d'agence chez Les Demeures Traditionnelles (Groupe Lesterlin), Beauvais — 41 projets réalisés" },
  { annee: "2020", evenement: "Création de M&M CONSTRUCTION — indépendant, projets de construction individuelle en Haute-Savoie. 24 projets conduits à ce jour" },
];

export default function AProposPage() {
  return (
    <main>
      {/* Hero */}
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[900px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[36px] md:text-[48px] font-black mt-4 mb-3 leading-tight">
            M&amp;M CONSTRUCTION
          </h1>
          <p className="text-white/60 text-[18px] leading-[1.6] max-w-[620px]">
            Responsable de projets de construction individuelle en Haute-Savoie, Ain et Genevois français. Fondé par Mahmoud Ben Ahmed — 20 ans de BTP.
          </p>
        </div>
      </div>

      {/* Portrait + bio */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Photo */}
          <div>
            <div className="relative bg-[#2C2C2A] aspect-[3/4] overflow-hidden">
              <Image
                src="/images/mahmoud-ben-ahmed.jpg"
                alt="Mahmoud Ben Ahmed — M&M CONSTRUCTION"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="text-[18px] font-black text-[#2C2C2A]">Mahmoud Ben Ahmed</div>
              <div className="text-[13px] text-[#BA7517] font-bold uppercase tracking-wide mt-0.5">Responsable de projets — Fondateur</div>
              <div className="text-[13px] text-[#888780] mt-2">Annemasse (74100) — M&amp;M CONSTRUCTION</div>
              <div className="flex gap-3 mt-4">
                <div className="text-center">
                  <div className="text-[22px] font-black text-[#BA7517]">20+</div>
                  <div className="text-[11px] text-[#888780]">ans BTP</div>
                </div>
                <div className="w-px bg-[#D9D4CC]" />
                <div className="text-center">
                  <div className="text-[22px] font-black text-[#BA7517]">200+</div>
                  <div className="text-[11px] text-[#888780]">projets</div>
                </div>
                <div className="w-px bg-[#D9D4CC]" />
                <div className="text-center">
                  <div className="text-[22px] font-black text-[#BA7517]">74·01</div>
                  <div className="text-[11px] text-[#888780]">zone exclusive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-5 leading-tight">
              20 ans dans les grands groupes CMI — puis indépendant pour ses clients
            </h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Mahmoud Ben Ahmed commence en 2003 chez Maisons Pierre en Île-de-France, l&apos;un des premiers constructeurs CMI de France. Il y apprend le métier de A à Z : prospection, analyse de faisabilité, coordination technique, suivi de chantier. Il enchaîne ensuite chez Geoxia, crée une entreprise en Tunisie, puis revient chez Maisons Pierre en 2014 — où il progresse en trois ans de commercial à responsable d&apos;agence, avec 92 projets à son actif.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En 2017, il prend la direction d&apos;agence des Demeures Traditionnelles (Groupe Lesterlin) à Beauvais — 41 projets supplémentaires sur des clients particuliers premium. En 2020, il s&apos;installe en Haute-Savoie et fonde M&amp;M CONSTRUCTION : accompagnement de projets de construction individuelle en totale autonomie, sans structure intermédiaire ni catalogue imposé.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Aujourd&apos;hui basé à Annemasse, il intervient sur la Haute-Savoie, l&apos;Ain et le Genevois français. Son réseau — architectes, maîtres d&apos;œuvre, bureaux d&apos;études, géomètres, notaires — s&apos;est construit sur deux décennies de terrain.
            </p>
            <div className="bg-[#F2EDE6] p-5 mt-6">
              <p className="text-[15px] text-[#2C2C2A] leading-[1.7] italic">
                &quot;J&apos;ai vendu des centaines de maisons pour des grands groupes. Je sais exactement comment ces structures fonctionnent, ce qu&apos;elles promettent et ce qu&apos;elles livrent. Aujourd&apos;hui, je travaille pour mes clients — pas pour une enseigne nationale.&quot;
              </p>
              <p className="text-[13px] text-[#BA7517] font-bold mt-3">— Mahmoud Ben Ahmed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-10">Parcours</h2>
          <div className="flex flex-col gap-0">
            {parcours.map((item, i) => (
              <div key={i} className="flex gap-6 items-start pb-8 relative">
                {i < parcours.length - 1 && (
                  <div className="absolute left-[39px] top-8 bottom-0 w-px bg-[#D9D4CC]" />
                )}
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-[#BA7517] font-black text-[16px]">{item.annee}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-[#BA7517] rounded-full mt-1.5" />
                <p className="text-[16px] text-[#2C2C2A] leading-[1.6]">{item.evenement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] text-center mb-10">Ce qui nous différencie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valeurs.map((v, i) => (
              <div key={i} className="flex gap-5 p-6 bg-[#F2EDE6]">
                <div className="flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-2">{v.titre}</h3>
                  <p className="text-[14px] text-[#888780] leading-[1.7]">{v.corps}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-6 text-center">Compétences terrain</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Analyse de faisabilité",
              "Coordination technique",
              "Développement commercial BTP",
              "Études de budget et devis",
              "Suivi de chantier",
              "Réseau de prescripteurs",
              "Accompagnement particuliers",
              "Valorisation foncière",
              "Zone Genevois français",
            ].map((c) => (
              <div key={c} className="flex items-center gap-2 p-3 bg-white">
                <span className="text-[#BA7517] text-[10px]">◆</span>
                <span className="text-[13px] text-[#2C2C2A] font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentions légales / structure */}
      <section className="bg-[#2C2C2A] py-10 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Localisation", value: "Annemasse (74100)" },
            { label: "Zone d'intervention", value: "Haute-Savoie · Ain · Genevois français" },
            { label: "Langues", value: "Français · Allemand · Anglais" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
              <div className="text-[15px] text-white font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EDE6] py-14 px-5 text-center">
        <div className="max-w-[580px] mx-auto">
          <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-3">Parlons de votre projet</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Premier échange gratuit avec Mahmoud — analyse de faisabilité, budget estimatif, zone d&apos;intervention. Réponse sous 48h.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
