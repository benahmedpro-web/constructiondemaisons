import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Mahmoud Ben Ahmed, maître d'œuvre bois | M&M CONSTRUCTION",
  description: "M&M CONSTRUCTION, maîtrise d'œuvre spécialisée maison ossature bois en Genevois français, Haute-Savoie et Ain. Fondateur : Mahmoud Ben Ahmed, 20 ans d'expérience terrain.",
};

const valeurs = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titre: "Indépendance totale",
    corps: "M&M CONSTRUCTION ne revend pas de maisons, ne perçoit pas de commission sur les artisans et ne travaille pas pour des promoteurs. Notre seule rémunération : vos honoraires. Notre seul objectif : votre projet.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    titre: "Engagement sur le résultat",
    corps: "Planning, budget, qualité — les trois engagements sont écrits dans le contrat et suivis à chaque étape. Pas de promesse orale, pas de surprise en cours de chantier.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    titre: "Ancrage local",
    corps: "On ne travaille que sur notre zone : Haute-Savoie, Ain, Genevois français. On connaît les PLU, les délais d'instruction, les aléas climatiques et les artisans qui tiennent leurs engagements.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    titre: "Spécialisation bois",
    corps: "La maison ossature bois n'est pas un service parmi d'autres chez nous — c'est notre seul métier. DTU bois, gestion de la vapeur d'eau, sismique alpin, RE2020 : on maîtrise les spécificités techniques que les généralistes ne connaissent pas.",
  },
];

const parcours = [
  { annee: "2004", evenement: "Débuts dans le bâtiment — conduite de chantier en région lyonnaise" },
  { annee: "2010", evenement: "Spécialisation progressive dans la construction ossature bois" },
  { annee: "2015", evenement: "Installation en Haute-Savoie — projets bois en zone alpine et Genevois" },
  { annee: "2020", evenement: "Création de M&M CONSTRUCTION, maîtrise d'œuvre spécialisée bois (NAF 71.12B)" },
  { annee: "2022", evenement: "Premiers projets RE2020 coordonnés en Genevois français et Ain" },
  { annee: "2025", evenement: "Réseau de 30+ artisans vérifiés bois en Haute-Savoie et Ain" },
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
            Maîtrise d&apos;œuvre spécialisée maison ossature bois en Genevois français, Haute-Savoie et Ain. Fondée par Mahmoud Ben Ahmed.
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
              <div className="text-[13px] text-[#BA7517] font-bold uppercase tracking-wide mt-0.5">Maître d&apos;œuvre fondateur</div>
              <div className="text-[13px] text-[#888780] mt-2">NAF 71.12B — M&amp;M CONSTRUCTION</div>
              <div className="flex gap-3 mt-4">
                <div className="text-center">
                  <div className="text-[22px] font-black text-[#BA7517]">20</div>
                  <div className="text-[11px] text-[#888780]">ans terrain</div>
                </div>
                <div className="w-px bg-[#D9D4CC]" />
                <div className="text-center">
                  <div className="text-[22px] font-black text-[#BA7517]">74·01</div>
                  <div className="text-[11px] text-[#888780]">zone exclusive</div>
                </div>
                <div className="w-px bg-[#D9D4CC]" />
                <div className="text-center">
                  <div className="text-[22px] font-black text-[#BA7517]">30+</div>
                  <div className="text-[11px] text-[#888780]">artisans vérifiés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-5 leading-tight">
              20 ans de terrain avant de créer M&amp;M CONSTRUCTION
            </h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Mahmoud Ben Ahmed a commencé sa carrière dans la conduite de chantier en 2004, d&apos;abord en région lyonnaise sur des projets de construction traditionnelle. Sa spécialisation progressive dans l&apos;ossature bois l&apos;amène en Haute-Savoie à partir de 2015, où il coordonne ses premiers projets en zone alpine et Genevois français.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En 2020, il crée M&amp;M CONSTRUCTION avec un positionnement clair : maîtrise d&apos;œuvre exclusivement spécialisée en maison ossature bois, sur une zone géographique délimitée. Pas de catalogue, pas de sous-traitance opaque, pas de marges cachées sur les artisans.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Aujourd&apos;hui, M&amp;M CONSTRUCTION coordonne des projets de construction neuve, d&apos;extension et de rénovation bois en Haute-Savoie (74), dans l&apos;Ain (01) et dans le Genevois français. Chaque chantier est suivi personnellement par Mahmoud — pas délégué à un commercial ou à un chef de chantier interchangeable.
            </p>
            <div className="bg-[#F2EDE6] p-5 mt-6">
              <p className="text-[15px] text-[#2C2C2A] leading-[1.7] italic">
                &quot;Je n&apos;ai jamais vendu de maisons catalogue et je n&apos;en vendrai jamais. Mon métier, c&apos;est de coordonner votre projet avec les meilleurs artisans locaux — et de vous garantir que ce qu&apos;on vous a promis à la signature correspond à ce que vous recevez à la réception.&quot;
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
                {/* Ligne verticale */}
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

      {/* Mentions légales / structure */}
      <section className="bg-[#2C2C2A] py-10 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Forme juridique", value: "Entreprise individuelle" },
            { label: "Code NAF", value: "71.12B — Ingénierie, études techniques" },
            { label: "Zone d'intervention", value: "Haute-Savoie · Ain · Genevois français" },
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
          <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-3">Travaillons ensemble</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Premier échange gratuit avec Mahmoud — analyse de votre projet, faisabilité, budget estimatif. Réponse sous 48h.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
