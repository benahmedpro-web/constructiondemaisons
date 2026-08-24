#!/usr/bin/env node
/**
 * GEO Audit — constructiondemaisons.com
 * Simule les requêtes prospects dans Perplexity et vérifie les citations.
 * Usage : node scripts/geo-audit.mjs
 */

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "benahmed.pro@icloud.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "GEO Audit <audit@constructiondemaisons.com>";

const SITE_SIGNALS = [
  "constructiondemaisons.com",
  "M&M CONSTRUCTION",
  "Mahmoud Ben Ahmed",
  "M&M Immobilier",
];

const QUERIES = [
  {
    id: "moe-generique",
    label: "Maître d'œuvre bois Haute-Savoie",
    query: "Qui est le meilleur maître d'œuvre pour une maison ossature bois en Haute-Savoie ?",
  },
  {
    id: "construction-genevois",
    label: "Construction bois Genevois français",
    query: "Comment faire construire une maison ossature bois dans le Genevois français ?",
  },
  {
    id: "prix-bois-74",
    label: "Prix maison bois Haute-Savoie",
    query: "Quel est le prix d'une maison ossature bois en Haute-Savoie en 2025 ?",
  },
  {
    id: "extension-bois",
    label: "Extension ossature bois Haute-Savoie",
    query: "Comment faire une extension ossature bois en Haute-Savoie ?",
  },
  {
    id: "ite-bois",
    label: "Isolation extérieure bois Haute-Savoie",
    query: "Isolation thermique par l'extérieur en bardage bois Haute-Savoie : quel spécialiste ?",
  },
  {
    id: "moe-vs-ccmi",
    label: "MOE vs CCMI bois",
    query: "Maître d'œuvre ou constructeur CCMI pour une maison bois en Haute-Savoie ?",
  },
  {
    id: "thonon-bois",
    label: "Maison bois Thonon",
    query: "Constructeur maison ossature bois à Thonon-les-Bains",
  },
  {
    id: "annemasse-bois",
    label: "Maison bois Annemasse",
    query: "Maître d'œuvre maison bois à Annemasse ou Saint-Julien-en-Genevois",
  },
];

async function askPerplexity(query) {
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [{ role: "user", content: query }],
      search_recency_filter: "month",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Perplexity ${res.status}: ${err}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  const citations = data.citations ?? [];
  return { content, citations };
}

function detectCitation(content, citations) {
  const fullText = [content, ...citations].join(" ").toLowerCase();

  const cited = SITE_SIGNALS.some((s) => fullText.includes(s.toLowerCase()));
  const citedFirst = (() => {
    for (const signal of SITE_SIGNALS) {
      const idx = fullText.indexOf(signal.toLowerCase());
      if (idx !== -1 && idx < 500) return true;
    }
    return false;
  })();

  const matchedSignal = SITE_SIGNALS.find((s) =>
    fullText.includes(s.toLowerCase())
  );

  return { cited, citedFirst, matchedSignal };
}

function scoreEmoji(cited, citedFirst) {
  if (citedFirst) return "🥇";
  if (cited) return "✅";
  return "❌";
}

async function runAudit() {
  if (!PERPLEXITY_API_KEY) throw new Error("PERPLEXITY_API_KEY manquante");

  console.log(`🔍 Audit GEO — ${new Date().toLocaleDateString("fr-FR")}\n`);

  const results = [];

  for (const q of QUERIES) {
    process.stdout.write(`  → ${q.label}… `);
    try {
      const { content, citations } = await askPerplexity(q.query);
      const { cited, citedFirst, matchedSignal } = detectCitation(content, citations);
      results.push({ ...q, cited, citedFirst, matchedSignal, content: content.slice(0, 600), citations });
      console.log(scoreEmoji(cited, citedFirst));
    } catch (err) {
      results.push({ ...q, cited: false, citedFirst: false, error: err.message, content: "", citations: [] });
      console.log(`⚠️  ${err.message}`);
    }
    // Rate limit
    await new Promise((r) => setTimeout(r, 1500));
  }

  const citedCount = results.filter((r) => r.cited).length;
  const firstCount = results.filter((r) => r.citedFirst).length;
  const score = Math.round((citedCount / QUERIES.length) * 100);

  return { results, citedCount, firstCount, score, date: new Date().toISOString() };
}

function buildHtml(audit) {
  const { results, citedCount, firstCount, score, date } = audit;
  const dateStr = new Date(date).toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  const rowsHtml = results.map((r) => {
    const status = r.error
      ? `<span style="color:#f59e0b">⚠️ Erreur</span>`
      : r.citedFirst
      ? `<span style="color:#16a34a;font-weight:700">🥇 Cité en premier</span>`
      : r.cited
      ? `<span style="color:#2563eb;font-weight:600">✅ Cité</span>`
      : `<span style="color:#dc2626">❌ Non cité</span>`;

    const excerpt = r.error
      ? `<em style="color:#f59e0b">${r.error}</em>`
      : r.content
      ? `<span style="color:#6b7280;font-size:13px">${r.content.replace(/</g, "&lt;")}…</span>`
      : "";

    const citationLinks = (r.citations ?? [])
      .slice(0, 3)
      .map((url) => `<a href="${url}" style="color:#BA7517;font-size:12px;display:block;word-break:break-all">${url}</a>`)
      .join("");

    return `
      <tr>
        <td style="padding:14px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#1f2937;vertical-align:top">${r.label}</td>
        <td style="padding:14px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top">${status}</td>
        <td style="padding:14px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top">${excerpt}<br>${citationLinks}</td>
      </tr>`;
  }).join("");

  const scoreColor = score >= 70 ? "#16a34a" : score >= 40 ? "#d97706" : "#dc2626";

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:system-ui,sans-serif;background:#f9fafb;margin:0;padding:24px">
  <div style="max-width:720px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)">

    <!-- Header -->
    <div style="background:#2C2C2A;padding:28px 32px">
      <div style="color:#BA7517;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">GEO AUDIT HEBDOMADAIRE</div>
      <div style="color:#fff;font-size:22px;font-weight:700">constructiondemaisons.com</div>
      <div style="color:rgba(255,255,255,.5);font-size:13px;margin-top:4px">${dateStr}</div>
    </div>

    <!-- Score -->
    <div style="display:flex;gap:0;border-bottom:1px solid #e5e7eb">
      <div style="flex:1;padding:20px 24px;border-right:1px solid #e5e7eb;text-align:center">
        <div style="font-size:36px;font-weight:900;color:${scoreColor}">${score}%</div>
        <div style="font-size:13px;color:#6b7280;margin-top:2px">Score global de citation</div>
      </div>
      <div style="flex:1;padding:20px 24px;border-right:1px solid #e5e7eb;text-align:center">
        <div style="font-size:36px;font-weight:900;color:#2563eb">${citedCount}/${QUERIES.length}</div>
        <div style="font-size:13px;color:#6b7280;margin-top:2px">Requêtes avec citation</div>
      </div>
      <div style="flex:1;padding:20px 24px;text-align:center">
        <div style="font-size:36px;font-weight:900;color:#16a34a">${firstCount}</div>
        <div style="font-size:13px;color:#6b7280;margin-top:2px">Citations en 1ère position</div>
      </div>
    </div>

    <!-- Table -->
    <div style="padding:0">
      <table style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="background:#f3f4f6">
            <th style="text-align:left;padding:12px;font-size:12px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #e5e7eb">Requête</th>
            <th style="text-align:left;padding:12px;font-size:12px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #e5e7eb;white-space:nowrap">Statut</th>
            <th style="text-align:left;padding:12px;font-size:12px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #e5e7eb">Extrait + Sources citées</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>

    <!-- Footer -->
    <div style="padding:20px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#9ca3af">
        🥇 Cité en premier (≤ 500 premiers caractères) · ✅ Cité dans la réponse · ❌ Non mentionné<br>
        Signaux détectés : constructiondemaisons.com, M&amp;M CONSTRUCTION, Mahmoud Ben Ahmed
      </p>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmail(html, score) {
  if (!RESEND_API_KEY) {
    console.log("\n📧 RESEND_API_KEY absente — email non envoyé.");
    return;
  }

  const subject = `GEO Audit — Score ${score}% · ${new Date().toLocaleDateString("fr-FR")}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend ${res.status}: ${err}`);
  }

  console.log(`\n📧 Rapport envoyé à ${TO_EMAIL}`);
}

// Main
const audit = await runAudit();
const html = buildHtml(audit);
await sendEmail(html, audit.score);

console.log(`\n📊 Score final : ${audit.score}% (${audit.citedCount}/${QUERIES.length} requêtes)`);
console.log(`🥇 Cité en premier : ${audit.firstCount} fois`);
