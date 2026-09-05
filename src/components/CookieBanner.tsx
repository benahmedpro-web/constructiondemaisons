"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { grantConsent, denyConsent } from "@/lib/ga";
import { setOpenAIAdsConsent } from "@/components/OpenAIAdsPixel";

const STORAGE_KEY = "mm_cookie_consent";
const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;

type ConsentRecord = { value: "granted" | "denied"; expires: number };

function readConsent(): "granted" | "denied" | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    // Legacy plain strings
    if (raw === "granted" || raw === "denied") return raw;
    const rec = JSON.parse(raw) as ConsentRecord;
    if (Date.now() > rec.expires) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return rec.value;
  } catch {
    return null;
  }
}

function writeConsent(value: "granted" | "denied") {
  const rec: ConsentRecord = { value, expires: Date.now() + SIX_MONTHS_MS };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rec));
}

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(readConsent() === null);
    // Allow footer "Gérer les cookies" to reopen the banner
    const handler = () => setShow(true);
    window.addEventListener("mm:open-cookie-banner", handler);
    return () => window.removeEventListener("mm:open-cookie-banner", handler);
  }, []);

  function accept() {
    writeConsent("granted");
    grantConsent();
    setOpenAIAdsConsent(true);
    setShow(false);
  }

  function refuse() {
    writeConsent("denied");
    denyConsent();
    setOpenAIAdsConsent(false);
    setShow(false);
  }

  if (!show) return null;

  return (
    <>
      {/* Mobile : overlay sombre */}
      <div className="fixed inset-0 z-40 bg-black/50 sm:hidden" aria-hidden="true" />

      {/* Bannière / modale */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Gestion des cookies"
        className={[
          // Mobile : carte centrée (modale)
          "fixed z-50 bg-[#2C2C2A] border-2 border-[#BA7517] shadow-2xl",
          "inset-x-4 top-1/2 -translate-y-1/2 p-6 rounded-none",
          // Desktop : bande en bas
          "sm:inset-x-0 sm:bottom-0 sm:top-auto sm:translate-y-0 sm:rounded-none sm:border-t-2 sm:border-l-0 sm:border-r-0 sm:border-b-0 sm:px-5 sm:py-4",
        ].join(" ")}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/75 leading-[1.6] flex-1">
            Ce site utilise Google Analytics pour mesurer son audience et le pixel OpenAI Ads
            pour savoir si nos campagnes génèrent des demandes. Aucune donnée n&apos;est
            revendue. Vous pouvez changer d&apos;avis à tout moment.{" "}
            <Link href="/politique-cookies/" className="text-[#BA7517] hover:underline">
              En savoir plus
            </Link>
            .
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={refuse}
              className="flex-1 sm:flex-none border border-white/30 text-white text-[13px] font-bold px-5 py-2.5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Tout refuser
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none bg-[#BA7517] text-white text-[13px] font-bold px-5 py-2.5 hover:bg-[#9E6312] transition-colors cursor-pointer"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Hook utilisé par GoogleAnalytics pour lire le consentement au montage
export function getStoredConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  return readConsent();
}
