import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | M&M CONSTRUCTION",
  description: "Politique de confidentialité et protection des données personnelles — M&M CONSTRUCTION, Annemasse (74100).",
};

export default function ViePriveePage() {
  return (
    <main>
      <div className="bg-[#2C2C2A] py-12 px-5">
        <div className="max-w-[780px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[32px] md:text-[42px] font-black mt-4 mb-2 leading-tight">Politique de confidentialité</h1>
          <p className="text-white/50 text-[14px]">Dernière mise à jour : juin 2026</p>
        </div>
      </div>

      <article className="bg-white py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col gap-10">

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">1. Responsable du traitement</h2>
            <div className="flex flex-col gap-2 text-[15px] text-[#888780] leading-[1.7]">
              <p><strong className="text-[#2C2C2A]">Responsable :</strong> Mahmoud Ben Ahmed — M&amp;M CONSTRUCTION</p>
              <p><strong className="text-[#2C2C2A]">Adresse :</strong> Annemasse (74100), Haute-Savoie</p>
              <p><strong className="text-[#2C2C2A]">Email :</strong> <a href="mailto:benahmed.pro@icloud.com" className="text-[#BA7517] no-underline hover:underline">benahmed.pro@icloud.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">2. Données collectées</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7] mb-4">
              Les seules données personnelles collectées sur ce site le sont via les formulaires de contact et de demande d&apos;étude. Ces données sont :
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden">
              {[
                { donnee: "Prénom et nom", finalite: "Identification de votre demande", duree: "3 ans" },
                { donnee: "Adresse email", finalite: "Réponse à votre demande", duree: "3 ans" },
                { donnee: "Numéro de téléphone", finalite: "Prise de contact (si fourni)", duree: "3 ans" },
                { donnee: "Contenu du message", finalite: "Traitement de votre demande", duree: "3 ans" },
                { donnee: "Type et zone de projet", finalite: "Analyse de faisabilité", duree: "3 ans" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-[13px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="p-3 font-medium text-[#2C2C2A]">{row.donnee}</div>
                  <div className="p-3 text-[#888780] border-x border-[#D9D4CC]">{row.finalite}</div>
                  <div className="p-3 text-[#888780]">{row.duree}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#888780] mt-3 italic">
              Aucun cookie de traçage, aucune publicité ciblée, aucune revente de données à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">3. Base légale du traitement</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              Les données sont traitées sur la base de votre consentement explicite lors de l&apos;envoi du formulaire (article 6.1.a du RGPD) et dans l&apos;intérêt légitime de M&amp;M CONSTRUCTION à répondre aux demandes de renseignements (article 6.1.f du RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">4. Destinataires des données</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7] mb-3">
              Vos données sont transmises uniquement à Mahmoud Ben Ahmed (M&amp;M CONSTRUCTION) pour le traitement de votre demande. Elles ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
            </p>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              Le service d&apos;envoi d&apos;emails utilisé est <strong className="text-[#2C2C2A]">Resend</strong> (Resend Inc., San Francisco, CA, USA), conforme au RGPD via des clauses contractuelles types. Les emails sont acheminés vers benahmed.pro@icloud.com et ne sont pas stockés par Resend au-delà de la transmission.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">5. Vos droits</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7] mb-4">
              Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <div className="flex flex-col gap-3">
              {[
                { droit: "Droit d'accès", desc: "Obtenir une copie des données personnelles vous concernant." },
                { droit: "Droit de rectification", desc: "Corriger des données inexactes ou incomplètes." },
                { droit: "Droit à l'effacement", desc: "Demander la suppression de vos données (sous réserve d'obligations légales)." },
                { droit: "Droit à la limitation", desc: "Suspendre le traitement de vos données dans certains cas." },
                { droit: "Droit d'opposition", desc: "Vous opposer au traitement de vos données pour motif légitime." },
                { droit: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et lisible." },
              ].map((item) => (
                <div key={item.droit} className="flex gap-3 p-4 bg-[#F2EDE6]">
                  <span className="text-[#BA7517] flex-shrink-0">◆</span>
                  <div>
                    <span className="font-bold text-[#2C2C2A] text-[14px]">{item.droit} — </span>
                    <span className="text-[14px] text-[#888780]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-[#888780] mt-4 leading-[1.7]">
              Pour exercer ces droits, contactez-nous à <a href="mailto:benahmed.pro@icloud.com" className="text-[#BA7517] no-underline hover:underline">benahmed.pro@icloud.com</a>. Réponse sous 30 jours. En cas de litige, vous pouvez saisir la <strong className="text-[#2C2C2A]">CNIL</strong> sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#BA7517] no-underline hover:underline">cnil.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">6. Cookies</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              Ce site n&apos;utilise pas de cookies de traçage publicitaire, ni de cookies d&apos;analyse de comportement (Google Analytics, Hotjar, etc.). Aucun bandeau de consentement aux cookies n&apos;est nécessaire. Les seuls cookies susceptibles d&apos;être déposés sont des cookies techniques strictement nécessaires au fonctionnement du site (session, sécurité), qui ne nécessitent pas de consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">7. Sécurité</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              Le site est servi exclusivement en HTTPS (TLS). Les formulaires sont transmis de manière chiffrée. M&amp;M CONSTRUCTION prend toutes les mesures raisonnables pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
            </p>
          </section>

          <div className="bg-[#F2EDE6] p-5 text-[14px] text-[#888780]">
            Pour toute question relative à vos données personnelles : <a href="mailto:benahmed.pro@icloud.com" className="text-[#BA7517] no-underline hover:underline">benahmed.pro@icloud.com</a> — voir aussi les <Link href="/mentions-legales/" className="text-[#BA7517] no-underline hover:underline">mentions légales</Link>.
          </div>

        </div>
      </article>
    </main>
  );
}
