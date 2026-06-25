import Image from "next/image";
import Link from "next/link";

const sidebarPosts = [
  { title: "Maison ossature bois : avantages, coûts et délais en 2025", image: "/images/maisons_pierre_Saturnia_3_102_nord_biton_noir_avant.jpg", href: "/guides/maison-ossature-bois/" },
  { title: "RE2020 : ce que ça change pour une maison bois en Haute-Savoie", image: "/images/maisons_pierre_Cadence_4_132_gi_nord_noir_detail4.jpg", href: "/guides/re2020-maison-bois/" },
  { title: "Maîtrise d'œuvre vs CCMI : quelles différences concrètes ?", image: "/images/1200x742_Bretagne.jpg", href: "/guides/moe-vs-ccmi/" },
  { title: "Extension ossature bois : permis, coût, délais", image: "/images/1200x742_Azur.jpg", href: "/guides/extension-ossature-bois/" },
  { title: "Comment choisir ses artisans pour une maison bois ?", image: "/images/1200x742-maisons-pierre-corail-1.jpg", href: "/guides/choisir-artisans-maison-bois/" },
  { title: "Permis de construire en zone Genevois français : les pièges à éviter", image: "/images/maisons_pierre_Vision_4_136_nord_biton_noir_avant.jpg", href: "/guides/permis-construire-genevois/" },
  { title: "Prix maison ossature bois en Haute-Savoie : estimation au m²", image: "/images/hero-maison-bois-montagne-1.jpg", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
  { title: "Construction chalet ossature bois en Haute-Savoie", image: "/images/hero-maison-bois-alpine.jpg", href: "/guides/construction-chalet-ossature-bois-haute-savoie/" },
  { title: "Garantie décennale et assurance dommage ouvrage en maîtrise d'œuvre", image: "/images/hero-maison-bois-montagne-2.jpg", href: "/guides/garanties-assurance-maitre-oeuvre/" },
];

export function BlogSection() {
  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[30px] md:text-[35px] font-bold text-[#2C2C2A] text-center mb-10">
          Guides techniques bois
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Featured guide */}
          <div>
            <Link href="/guides/coordonner-chantier-bois/" className="no-underline block group">
              <div className="overflow-hidden mb-4">
                <Image
                  src="/images/Fotolia_58453596_XL-scaled.jpg"
                  alt="Comment coordonner un chantier maison bois ?"
                  width={540}
                  height={304}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[22px] font-bold text-[#2C2C2A] mb-3 group-hover:text-[#BA7517] transition-colors">
                Comment coordonner un chantier maison bois sans perdre le contrôle ?
              </h3>
            </Link>
            <p className="text-[15px] text-[#888780] leading-[1.7]">
              La coordination de chantier bois est souvent sous-estimée par les particuliers.
              Voici les étapes clés, les pièges courants et pourquoi un maître d&apos;œuvre spécialisé
              fait la différence entre un chantier qui tient ses délais et un qui dérive.
            </p>
            <Link href="/guides/coordonner-chantier-bois/" className="inline-block mt-4 text-[#BA7517] font-bold text-[14px] no-underline hover:underline">
              Lire le guide →
            </Link>
          </div>

          {/* Sidebar posts */}
          <div className="flex flex-col gap-0 divide-y divide-[#D9D4CC]">
            {sidebarPosts.map((post, i) => (
              <Link key={i} href={post.href} className="flex gap-4 py-4 no-underline group">
                <div className="flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={100}
                    height={75}
                    className="w-[100px] h-[70px] object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <h4 className="text-[14px] font-bold text-[#2C2C2A] leading-[1.4] group-hover:text-[#BA7517] transition-colors">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
