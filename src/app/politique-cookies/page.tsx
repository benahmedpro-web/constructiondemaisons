import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique de cookies du site constructiondemaisons.com — M&M CONSTRUCTION. Cookies techniques et cookies de mesure d'audience (Google Analytics), soumis à votre consentement.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/politique-cookies/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Politique de cookies",
    description: "Cookies techniques et cookies de mesure d'audience (Google Analytics), soumis à votre consentement.",
    url: "https://www.constructiondemaisons.com/politique-cookies/",
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PolitiqueCookiesPage() {
  return (
    <main>
      <header className="bg-[#2C2C2A] py-12 px-5">
        <div className="max-w-[780px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[32px] md:text-[42px] font-black mt-4 mb-2 leading-tight">Politique de cookies</h1>
          <p className="text-white/50 text-[14px]">Dernière mise à jour : <time dateTime="2026-08">août 2026</time></p>
        </div>
      </header>

      <section className="bg-white py-14 px-5">
        <article className="max-w-[780px] mx-auto flex flex-col gap-10">

          {/* Introduction */}
          <section>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              La présente politique de cookies explique ce que sont les cookies, lesquels ce site utilise, et comment gérer votre consentement.
            </p>
          </section>

          {/* Qu'est-ce qu'un cookie */}
          <section>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8]">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d&apos;un site web. Il est stocké par votre navigateur et permet au site de vous reconnaître lors d&apos;une visite ultérieure ou de mémoriser certaines de vos préférences.
            </p>
          </section>

          {/* Cookies utilisés sur ce site */}
          <section>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">2. Cookies utilisés sur ce site</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8] mb-4">
              Ce site utilise deux catégories de cookies :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="bg-[#2C2C2A] text-white">
                    <th className="text-left p-3 font-bold">Cookie</th>
                    <th className="text-left p-3 font-bold">Finalité</th>
                    <th className="text-left p-3 font-bold">Durée</th>
                    <th className="text-left p-3 font-bold">Consentement requis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#D9D4CC]">
                    <td className="p-3 text-[#2C2C2A] font-medium">Cookies de session Vercel</td>
                    <td className="p-3 text-[#888780]">Infrastructure d&apos;hébergement — sécurité et routage réseau</td>
                    <td className="p-3 text-[#888780]">Session</td>
                    <td className="p-3"><span className="text-emerald-700 font-bold">Non</span></td>
                  </tr>
                  <tr className="border-b border-[#D9D4CC]">
                    <td className="p-3 text-[#2C2C2A] font-medium">Cookies de formulaire</td>
                    <td className="p-3 text-[#888780]">Protection anti-spam des formulaires de contact</td>
                    <td className="p-3 text-[#888780]">Session</td>
                    <td className="p-3"><span className="text-emerald-700 font-bold">Non</span></td>
                  </tr>
                  <tr className="border-b border-[#D9D4CC]">
                    <td className="p-3 text-[#2C2C2A] font-medium">_ga</td>
                    <td className="p-3 text-[#888780]">Google Analytics — identifiant de visiteur unique, mesure d&apos;audience anonymisée</td>
                    <td className="p-3 text-[#888780]">2 ans</td>
                    <td className="p-3"><span className="text-amber-600 font-bold">Oui</span></td>
                  </tr>
                  <tr className="border-b border-[#D9D4CC]">
                    <td className="p-3 text-[#2C2C2A] font-medium">_ga_G-0L3GXJCJJ1</td>
                    <td className="p-3 text-[#888780]">Google Analytics — maintien de l&apos;état de session pour cette propriété</td>
                    <td className="p-3 text-[#888780]">2 ans</td>
                    <td className="p-3"><span className="text-amber-600 font-bold">Oui</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-[#888780] mt-4 leading-[1.6]">
              Les cookies Google Analytics ne sont déposés qu&apos;après votre consentement explicite. Aucune donnée n&apos;est transmise à des fins publicitaires. Les données sont anonymisées et hébergées par Google LLC (États-Unis) dans le cadre du Data Privacy Framework UE–États-Unis.
            </p>
          </section>

          {/* Pas de bandeau */}
          <section>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">3. Le bandeau de consentement</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8] mb-3">
              Depuis août 2026, ce site utilise Google Analytics 4 pour mesurer son audience (pages visitées, formulaires remplis, clics). Ces cookies d&apos;analyse requièrent votre consentement préalable, conformément aux lignes directrices de la CNIL (délibération n° 2020-091) et au règlement ePrivacy.
            </p>
            <p className="text-[15px] text-[#888780] leading-[1.8]">
              Un bandeau s&apos;affiche à votre première visite. Vous pouvez accepter ou refuser en un clic. Votre choix est mémorisé dans votre navigateur (<code className="text-[13px] bg-[#F2EDE6] px-1.5 py-0.5">mm_cookie_consent</code>) et reste valable jusqu&apos;à effacement de vos données de navigation. Vous pouvez modifier votre choix à tout moment en effaçant les données de site dans votre navigateur.
            </p>
          </section>

          {/* Gestion */}
          <section>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">4. Gérer les cookies via votre navigateur</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8] mb-4">
              Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies, ou être alerté avant qu&apos;un cookie ne soit déposé. Notez que désactiver les cookies techniques peut affecter le fonctionnement de certaines fonctionnalités du site.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { nav: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                { nav: "Firefox", url: "https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" },
                { nav: "Safari", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
                { nav: "Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
              ].map((item) => (
                <li key={item.nav} className="flex items-center gap-2 text-[14px] text-[#888780]">
                  <span className="text-[#BA7517] text-[10px]">◆</span>
                  <span className="font-medium text-[#2C2C2A]">{item.nav} :</span>
                  <span>{item.url}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">5. Contact</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8]">
              Pour toute question relative à cette politique de cookies, vous pouvez contacter M&amp;M CONSTRUCTION à l&apos;adresse :
            </p>
            <address className="not-italic mt-2 text-[15px] text-[#2C2C2A] font-medium">contact@constructiondemaisons.com</address>
          </section>

          {/* Liens */}
          <footer className="flex flex-wrap gap-4 pt-4 border-t border-[#D9D4CC] text-[13px]">
            <Link href="/mentions-legales/" className="text-[#BA7517] no-underline hover:underline">Mentions légales</Link>
            <Link href="/vie-privee/" className="text-[#BA7517] no-underline hover:underline">Politique de confidentialité</Link>
            <Link href="/" className="text-[#888780] no-underline hover:text-[#2C2C2A]">← Accueil</Link>
          </footer>

        </article>
      </section>
    </main>
  );
}
