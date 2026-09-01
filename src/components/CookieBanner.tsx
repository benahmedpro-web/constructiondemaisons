"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { grantConsent, denyConsent } from "@/lib/ga";

export function CookieBanner() {
  // false au premier rendu (identique au serveur) pour éviter un mismatch d'hydratation
  // (React #418) — la lecture de localStorage ne peut se faire qu'après montage côté client.
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!localStorage.getItem("mm_cookie_consent"));
  }, []);

  function accept() {
    localStorage.setItem("mm_cookie_consent", "granted");
    grantConsent();
    window.dispatchEvent(new CustomEvent("mm-cookie-consent", { detail: { status: "granted" } }));
    setShow(false);
  }

  function refuse() {
    localStorage.setItem("mm_cookie_consent", "denied");
    denyConsent();
    window.dispatchEvent(new CustomEvent("mm-cookie-consent", { detail: { status: "denied" } }));
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C2C2A] border-t-2 border-[#BA7517] px-5 py-4 shadow-2xl">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[13px] text-white/75 leading-[1.6] flex-1">
          Ce site utilise des outils de mesure d&apos;audience et, avec votre accord, des outils de mesure publicitaire afin d&apos;évaluer les conversions.
          Vous pouvez accepter ou refuser ces traceurs.{" "}
          <Link href="/politique-cookies/" className="text-[#BA7517] hover:underline">
            En savoir plus
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="text-[13px] text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="bg-[#BA7517] text-white text-[13px] font-bold px-5 py-2.5 hover:bg-[#9E6312] transition-colors cursor-pointer"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
