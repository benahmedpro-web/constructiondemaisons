"use client";

import { useEffect } from "react";

const PIXEL_ID = "Lv6Ep5Q2Lt1n63MFnmUjxD";
const SDK_URL = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

type Oaiq = ((...args: unknown[]) => void) & { queue?: unknown[][] };

declare global {
  interface Window {
    oaiq?: Oaiq;
  }
}

function loadOpenAIAdsPixel() {
  if (typeof window === "undefined") return;

  // L'implémentation officielle GTM utilise une file `oaiq.queue` avant le
  // chargement du SDK. On reproduit ce comportement pour Next.js.
  if (!window.oaiq) {
    const oaiq = ((...args: unknown[]) => {
      oaiq.queue = oaiq.queue || [];
      oaiq.queue.push(args);
    }) as Oaiq;
    oaiq.queue = [];
    window.oaiq = oaiq;
  }

  window.oaiq("init", {
    pixelId: PIXEL_ID,
    debug: process.env.NODE_ENV !== "production",
  });

  // Ne pas injecter le SDK une seconde fois lors des navigations React.
  if (document.querySelector(`script[src="${SDK_URL}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = SDK_URL;
  script.dataset.openaiAdsPixel = "true";
  script.onerror = () => {
    console.error("[OpenAI Ads Pixel] Échec du chargement du SDK", SDK_URL);
  };
  document.head.appendChild(script);
}

export function OpenAIAdsPixel() {
  useEffect(() => {
    // Aucun SDK publicitaire n'est chargé avant consentement explicite.
    if (localStorage.getItem("mm_cookie_consent") === "granted") {
      loadOpenAIAdsPixel();
    }

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ status?: string }>).detail;
      if (detail?.status === "granted") loadOpenAIAdsPixel();
    };

    window.addEventListener("mm-cookie-consent", onConsent);
    return () => window.removeEventListener("mm-cookie-consent", onConsent);
  }, []);

  return null;
}
