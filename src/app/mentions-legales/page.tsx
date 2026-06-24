import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | M&M CONSTRUCTION",
  description: "Mentions légales du site constructiondemaisons.com — M&M CONSTRUCTION, Annemasse (74100).",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <div className="bg-[#2C2C2A] py-12 px-5">
        <div className="max-w-[780px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[32px] md:text-[42px] font-black mt-4 mb-2 leading-tight">Mentions légales</h1>
          <p className="text-white/50 text-[14px]">Dernière mise à jour : juin 2026</p>
        </div>
      </div>

      <article className="bg-white py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col gap-10">

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">1. Éditeur du site</h2>
            <div className="flex flex-col gap-2 text-[15px] text-[#888780] leading-[1.7]">
              <p><strong className="text-[#2C2C2A]">Raison sociale :</strong> M&amp;M CONSTRUCTION</p>
              <p><strong className="text-[#2C2C2A]">Forme juridique :</strong> Entreprise individuelle</p>
              <p><strong className="text-[#2C2C2A]">Responsable :</strong> Mahmoud Ben Ahmed</p>
              <p><strong className="text-[#2C2C2A]">Adresse :</strong> Annemasse (74100), Haute-Savoie</p>
              <p><strong className="text-[#2C2C2A]">Téléphone :</strong> <a href="tel:+33625590926" className="text-[#BA7517] no-underline hover:underline">+33 6 25 59 09 26</a></p>
              <p><strong className="text-[#2C2C2A]">Email :</strong> <a href="mailto:benahmed.pro@icloud.com" className="text-[#BA7517] no-underline hover:underline">benahmed.pro@icloud.com</a></p>
              <p><strong className="text-[#2C2C2A]">Code NAF :</strong> 71.12B — Ingénierie, études techniques</p>
              <p><strong className="text-[#2C2C2A]">Directeur de la publication :</strong> Mahmoud Ben Ahmed</p>
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">2. Hébergement</h2>
            <div className="flex flex-col gap-2 text-[15px] text-[#888780] leading-[1.7]">
              <p><strong className="text-[#2C2C2A]">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-[#2C2C2A]">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><strong className="text-[#2C2C2A]">Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#BA7517] no-underline hover:underline">vercel.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">3. Propriété intellectuelle</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              L&apos;ensemble du contenu de ce site — textes, images, graphismes, logo, icônes — est la propriété exclusive de M&amp;M CONSTRUCTION, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces éléments est interdite sans l&apos;autorisation écrite préalable de M&amp;M CONSTRUCTION.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">4. Responsabilité</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7] mb-3">
              M&amp;M CONSTRUCTION s&apos;efforce de maintenir les informations de ce site à jour et exactes. Toutefois, nous ne pouvons garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité des informations diffusées. Les informations présentées — notamment les budgets estimatifs — ont une valeur indicative et ne constituent pas un engagement contractuel.
            </p>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              M&amp;M CONSTRUCTION ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation de ce site ou de l&apos;impossibilité d&apos;y accéder.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">5. Liens hypertextes</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              Ce site peut contenir des liens vers des sites tiers. M&amp;M CONSTRUCTION n&apos;est pas responsable du contenu de ces sites et ne peut être tenu pour responsable des dommages résultant de leur utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">6. Droit applicable</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront compétents.
            </p>
          </section>

          <div className="bg-[#F2EDE6] p-5 text-[14px] text-[#888780]">
            Pour toute question relative aux mentions légales, contactez-nous à <a href="mailto:benahmed.pro@icloud.com" className="text-[#BA7517] no-underline hover:underline">benahmed.pro@icloud.com</a> ou via la <Link href="/contact/" className="text-[#BA7517] no-underline hover:underline">page de contact</Link>.
          </div>
        </div>
      </article>
    </main>
  );
}
