"use client";

import { useEffect } from "react";

const PIXEL_ID = "Lv6Ep5Q2Lt1n63MFnmUjxD";
const SDK_URL = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

declare global {
  interface Window {
    oaiq?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

function loadOpenAIAdsPixel() {
  if (typeof window === "undefined" || window.oaiq) return;

  const q = ((...args: unknown[]) => {
    q.q = q.q || [];
    q.q.push(args);
  }) as NonNullable<Window["oaiq"]>;
  q.q = [];
  window.oaiq = q;

  const script = document.createElement("script");
  script.async = true;
  script.src = SDK_URL;
  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
  else document.head.appendChild(script);

  window.oaiq("init", { pixelId: PIXEL_ID, debug: process.env.NODE_ENV !== "production" });
}

export function OpenAIAdsPixel() {
  useEffect(() => {
    // Le pixel publicitaire n'est chargé qu'après consentement explicite.
    if (localStorage.getItem("mm_cookie_consent") === "granted") loadOpenAIAdsPixel();

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ status?: string }>).detail;
      if (detail?.status === "granted") loadOpenAIAdsPixel();
    };

    window.addEventListener("mm-cookie-consent", onConsent);
    return () => window.removeEventListener("mm-cookie-consent", onConsent);
  }, []);

  return null;
}
