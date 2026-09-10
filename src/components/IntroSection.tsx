import Link from "next/link";

export function IntroSection() {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-[18px] text-[#888780] leading-[1.7] mb-6">
          Après 20 ans à accompagner des projets de construction, Mahmoud Ben Ahmed a créé{" "}
          <strong className="text-[#2C2C2A]">M&amp;M CONSTRUCTION</strong> : maîtrise d&apos;œuvre spécialisée
          maison bois, ossature bois et rénovation en Haute-Savoie, Genevois français, Grand Genève et Ain.
          Concrètement, un seul interlocuteur qui coordonne chaque corps de métier — du permis de construire
          à la réception des travaux — avec des artisans vérifiés locaux et une assurance décennale à jour.
        </p>
        <Link
          href="/demande-etude/"
          className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-7 py-3 no-underline hover:bg-[#9E6312] transition-colors"
        >
          Configurer mon projet
        </Link>
      </div>
    </section>
  );
}
