"use client";

export function GererCookiesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("mm:open-cookie-banner"))}
      className="text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-[13px] font-[inherit]"
    >
      Gérer les cookies
    </button>
  );
}
