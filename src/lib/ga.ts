export const GA_ID = "G-J63BH8ZCMX";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function gtagEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

export function grantConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export function denyConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", { analytics_storage: "denied" });
}
