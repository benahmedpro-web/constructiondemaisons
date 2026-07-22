import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <main className="bg-[#F2EDE6] min-h-screen flex items-center justify-center px-5">
      <div className="max-w-[560px] text-center">
        <div className="w-16 h-16 bg-[#BA7517] flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h1 className="text-[32px] font-black text-[#2C2C2A] mb-4">
          Demande envoyée
        </h1>
        <p className="text-[17px] text-[#888780] leading-[1.7] mb-8">
          Mahmoud a bien reçu votre demande. Vous serez recontacté sous 48h pour un premier échange téléphonique.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#2C2C2A] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-black transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
