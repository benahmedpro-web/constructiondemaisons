"use client";

import { useEffect } from "react";
import { grantConsent } from "@/lib/ga";

export function GoogleAnalytics() {
  useEffect(() => {
    if (localStorage.getItem("mm_cookie_consent") === "granted") {
      grantConsent();
    }
  }, []);

  return null;
}
