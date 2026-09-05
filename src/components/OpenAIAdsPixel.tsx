"use client";

import { useEffect } from "react";
import { getStoredConsent } from "@/components/CookieBanner";

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
    if (getStoredConsent() === "granted") {
      setOpenAIAdsConsent(true);
    }
  }, []);

  return null;
}
