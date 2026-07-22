import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies | M&M CONSTRUCTION",
  description: "Politique de cookies du site constructiondemaisons.com — M&M CONSTRUCTION. Ce site n'utilise pas de cookies de traçage ou publicitaires.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/politique-cookies/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Politique de cookies — M&M CONSTRUCTION",
    description: "Ce site n'utilise pas de cookies de traçage ou publicitaires.",
    url: "https://www.constructiondemaisons.com/politique-cookies/",
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PolitiqueCookiesPage() {
  return (
    <main>
      <div className="bg-[#2C2C2A] py-12 px-5">
        <div className="max-w-[780px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[32px] md:text-[42px] font-black mt-4 mb-2 leading-tight">Politique de cookies</h1>
          <p className="text-white/50 text-[14px]">Dernière mise à jour : juin 2026</p>
        </div>
      </div>

      <section className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col gap-10">

          {/* Introduction */}
          <div>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              La présente politique de cookies explique ce que sont les cookies, lesquels ce site utilise, et pourquoi aucun bandeau de consentement n&apos;est affiché.
            </p>
          </div>

          {/* Qu'est-ce qu'un cookie */}
          <div>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8]">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d&apos;un site web. Il est stocké par votre navigateur et permet au site de vous reconnaître lors d&apos;une visite ultérieure ou de mémoriser certaines de vos préférences.
            </p>
          </div>

          {/* Ce site n'utilise pas de cookies de traçage */}
          <div>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">2. Cookies utilisés sur ce site</h2>
            <div className="bg-[#F2EDE6] p-5 mb-5">
              <p className="text-[15px] font-bold text-[#2C2C2A] mb-2">Aucun cookie de traçage ou publicitaire</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                Ce site n&apos;installe aucun cookie d&apos;analyse de comportement (Google Analytics, Matomo, Hotjar…), aucun cookie publicitaire (Google Ads, Meta Pixel…), aucun cookie de réseau social, aucun cookie de personnalisation. Aucune donnée de navigation n&apos;est transmise à des tiers à des fins commerciales.
              </p>
            </div>
            <p className="text-[15px] text-[#888780] leading-[1.8] mb-4">
              Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés, dans les cas suivants :
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
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-[#888780] mt-4 leading-[1.6]">
              Ces cookies sont dits « strictement nécessaires » au sens de la directive ePrivacy et des lignes directrices de la CNIL. Ils ne nécessitent pas de consentement préalable de votre part, et ne peuvent pas être désactivés sans compromettre le fonctionnement du site.
            </p>
          </div>

          {/* Pas de bandeau */}
          <div>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">3. Pourquoi n&apos;y a-t-il pas de bandeau de cookies ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8]">
              Conformément aux lignes directrices de la CNIL (délibération n° 2020-091 du 17 septembre 2020) et au règlement européen ePrivacy, un bandeau de consentement aux cookies n&apos;est obligatoire que lorsque des cookies non essentiels sont déposés — cookies analytiques, publicitaires ou de personnalisation. Ce site n&apos;en dépose aucun. L&apos;absence de bandeau est donc légalement conforme et délibérée.
            </p>
          </div>

          {/* Gestion */}
          <div>
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
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-4 pb-2 border-b border-[#D9D4CC]">5. Contact</h2>
            <p className="text-[15px] text-[#888780] leading-[1.8]">
              Pour toute question relative à cette politique de cookies, vous pouvez contacter M&amp;M CONSTRUCTION à l&apos;adresse : <span className="text-[#2C2C2A] font-medium">benahmed.pro@icloud.com</span>
            </p>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-[#D9D4CC] text-[13px]">
            <Link href="/mentions-legales/" className="text-[#BA7517] no-underline hover:underline">Mentions légales</Link>
            <Link href="/vie-privee/" className="text-[#BA7517] no-underline hover:underline">Politique de confidentialité</Link>
            <Link href="/" className="text-[#888780] no-underline hover:text-[#2C2C2A]">← Accueil</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
