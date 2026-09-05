"use client";

import { useEffect } from "react";
import { grantConsent } from "@/lib/ga";
import { getStoredConsent } from "@/components/CookieBanner";

export function GoogleAnalytics() {
  useEffect(() => {
    if (getStoredConsent() === "granted") {
      grantConsent();
    }
  }, []);

  return null;
}
