"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { grantConsent, denyConsent } from "@/lib/ga";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("mm_cookie_consent")) setShow(true);
  }, []);

  function accept() {
    localStorage.setItem("mm_cookie_consent", "granted");
    grantConsent();
    setShow(false);
  }

  function refuse() {
    localStorage.setItem("mm_cookie_consent", "denied");
    denyConsent();
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C2C2A] border-t-2 border-[#BA7517] px-5 py-4 shadow-2xl">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[13px] text-white/75 leading-[1.6] flex-1">
          Ce site utilise Google Analytics pour mesurer son audience (pages vues, formulaires).
          Aucune donnée n&apos;est transmise à des fins publicitaires.{" "}
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
