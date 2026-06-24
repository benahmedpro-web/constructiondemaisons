import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois neuve — Maître d'œuvre Haute-Savoie | M&M CONSTRUCTION",
  description: "M&M CONSTRUCTION coordonne votre projet de maison ossature bois neuve en Genevois français, Haute-Savoie et Ain. Conception, permis, artisans vérifiés, suivi de chantier.",
};

const points = [
  {
    title: "Conception adaptée à votre terrain",
    body: "Plans ossature bois sur mesure, pensés pour votre programme, votre orientation et les contraintes PLU locales. Nous travaillons avec des architectes et bureaux d'études spécialisés bois.",
  },
  {
    title: "Dépôt et suivi du permis de construire",
    body: "Constitution du dossier, dépôt en mairie, échanges avec l'instructeur et gestion des demandes de pièces complémentaires. Vous ne gérez rien.",
  },
  {
    title: "Sélection des artisans bois locaux",
    body: "Chaque artisan est choisi pour sa décennale, ses qualifications bois (Qualibat, ECOBOIS) et ses références locales en Haute-Savoie et Ain.",
  },
  {
    title: "Coordination de chantier",
    body: "Planning par corps de métier, visites régulières, suivi des délais. Un seul interlocuteur pour tous les corps de métier — vous ne gérez pas 8 numéros de téléphone.",
  },
  {
    title: "Réception et garanties",
    body: "Visite de réception avec grille de contrôle qualité, levée des réserves avant remise des clés, activation des garanties décennale et parfait achèvement.",
  },
];

export default function MaisonOssatureBoisPage() {
  return (
    <main>
      {/* Hero */}
      <div
        className="relative bg-[#2C2C2A] py-20 px-5 overflow-hidden"
        style={{ backgroundImage: "url(/images/hero-maison-bois-montagne-1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#2C2C2A]/70" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <p className="text-[#BA7517] text-[12px] font-bold uppercase tracking-widest mt-4 mb-3">Maîtrise d&apos;œuvre · Construction neuve</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-tight mb-4">
            Maison ossature bois neuve
          </h1>
          <p className="text-white/75 text-[18px] leading-[1.7] max-w-[640px]">
            De la conception à la réception des travaux — un seul interlocuteur pour coordonner votre projet bois en Genevois français, Haute-Savoie et Ain.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
              Demande d&apos;étude gratuite
            </Link>
            <Link href="/notre-methode/" className="inline-block border-2 border-white text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-white hover:text-[#2C2C2A] transition-colors">
              Notre méthode MOE
            </Link>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-start">
            <div>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-4">
                Pourquoi choisir la maîtrise d&apos;œuvre pour votre maison bois ?
              </h2>
              <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
                Un constructeur vous vend une maison catalogue avec des marges intégrées sur les matériaux et les artisans. Un maître d&apos;œuvre travaille pour vous : il sélectionne les meilleurs artisans locaux, négocie en votre nom, et assure un suivi indépendant du chantier.
              </p>
              <p className="text-[16px] text-[#888780] leading-[1.8]">
                M&M CONSTRUCTION est spécialisé maison ossature bois. Ce n&apos;est pas un service parmi d&apos;autres — c&apos;est notre seul métier. Nous connaissons les spécificités structurelles du bois, les DTU applicables, les artisans compétents sur notre zone et les délais réels en Haute-Savoie.
              </p>
            </div>
            <div className="bg-[#F2EDE6] p-6 flex flex-col gap-3">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517]">Ce que vous évitez</div>
              {["Catalogue imposé", "Marge cachée sur artisans", "Interlocuteur unique → vendeur", "Pas de suivi de chantier indépendant", "CCMI rigide"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] text-[#2C2C2A]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] text-center mb-10">
            Ce qu&apos;on prend en charge, de A à Z
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-[#D9D4CC]">
            {points.map((p, i) => (
              <div key={i} className="flex gap-6 py-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#BA7517] flex items-center justify-center text-white font-black text-[14px]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-1">{p.title}</h3>
                  <p className="text-[15px] text-[#888780] leading-[1.7]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + stats */}
      <section className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "20 ans", label: "d'expérience terrain" },
            { stat: "74 · 01", label: "Haute-Savoie & Ain" },
            { stat: "100 %", label: "Artisans vérifiés bois" },
            { stat: "RE 2020", label: "Conforme, décennale à jour" },
          ].map((s) => (
            <div key={s.stat}>
              <div className="text-[28px] font-black text-[#BA7517]">{s.stat}</div>
              <div className="text-[13px] text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white py-0">
        <div className="max-w-[900px] mx-auto">
          <Image
            src="/images/hero-maison-bois-alpine.jpg"
            alt="Maison ossature bois neuve en Haute-Savoie — M&M CONSTRUCTION"
            width={900}
            height={500}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EDE6] py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-3">Votre projet maison bois commence ici</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Premier échange gratuit, sans engagement. Mahmoud analyse votre terrain, votre programme et votre budget, et vous dit si votre projet est faisable — avant toute contractualisation.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
