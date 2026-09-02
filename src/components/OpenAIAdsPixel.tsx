"use client";

import { useEffect } from "react";

export const OPENAI_ADS_PIXEL_ID = "Lv6Ep5Q2Lt1n63MFnmUjxD";

type Oaiq = (...args: unknown[]) => void;

declare global {
  interface Window {
    oaiq?: Oaiq & { q?: unknown[][] };
  }
}

export function setOpenAIAdsConsent(granted: boolean) {
  window.oaiq?.("consent", granted);
}

export function OpenAIAdsPixel() {
  useEffect(() => {
    if (localStorage.getItem("mm_cookie_consent") === "granted") {
      setOpenAIAdsConsent(true);
    }
  }, []);

  return null;
}
