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

function injectGAScript(onLoad: () => void) {
  if (document.querySelector(`script[data-ga="${GA_ID}"]`)) {
    onLoad();
    return;
  }
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  script.setAttribute("data-ga", GA_ID);
  script.onload = onLoad;
  document.head.appendChild(script);
}

export function grantConsent() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }
  injectGAScript(() => {
    if (typeof window.gtag === "function") {
      window.gtag("js", new Date());
      window.gtag("config", GA_ID);
    }
  });
}

export function denyConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", { analytics_storage: "denied" });
}
