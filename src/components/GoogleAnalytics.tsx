"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, grantConsent } from "@/lib/ga";

export function GoogleAnalytics() {
  useEffect(() => {
    if (localStorage.getItem("mm_cookie_consent") === "granted") {
      grantConsent();
    }
  }, []);

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
  );
}
