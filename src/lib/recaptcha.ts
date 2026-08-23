export async function verifyRecaptcha(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // non configuré → on laisse passer
  if (!token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    });
    const data = await res.json() as { success: boolean; score: number };
    return data.success && data.score >= 0.5;
  } catch {
    return true; // fail open — ne pas bloquer les vrais utilisateurs si reCAPTCHA est indisponible
  }
}

export async function getRecaptchaToken(action: string): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === "undefined" || !window.grecaptcha) return null;
  // Repéré le 22/08/2026 : grecaptcha.execute() peut rester en attente indéfiniment sans jamais
  // résoudre ni rejeter (config reCAPTCHA à vérifier côté Google — clé/domaine). Sans timeout, un
  // formulaire reste bloqué sur "Envoi en cours…" pour toujours au lieu d'échouer proprement.
  return new Promise((resolve) => {
    let settled = false;
    const timeout = setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve(null);
      }
    }, 8000);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action })
        .then((token) => {
          if (!settled) {
            settled = true;
            clearTimeout(timeout);
            resolve(token);
          }
        })
        .catch(() => {
          if (!settled) {
            settled = true;
            clearTimeout(timeout);
            resolve(null);
          }
        });
    });
  });
}
