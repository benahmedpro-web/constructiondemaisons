#!/usr/bin/env node
/**
 * GEO Audit — constructiondemaisons.com
 *
 * Mesure chaque semaine si M&M CONSTRUCTION est citée par Perplexity sur un jeu fixe
 * de 20 requêtes « benchmark » formulées comme un prospect les poserait.
 *
 * Protocole (audit GEO du 10/09/2026, section 11) :
 *  - deux passes par requête : « autorité » (sans filtre de récence, score principal)
 *    et « fraîcheur » (sources du dernier mois, score secondaire) ;
 *  - search_context_size "medium" (le défaut de sonar remonte trop peu de sources) ;
 *  - RUNS exécutions par requête et par passe (3 par défaut), résultat = majorité ;
 *  - par requête : cité, cité dans les 500 premiers caractères, position de la première
 *    URL du site parmi les citations, URL citées, domaines concurrents ;
 *  - un JSON par exécution dans data/geo/ pour suivre l'évolution semaine après semaine ;
 *  - l'email compare au dernier JSON disponible.
 *
 * Usage :
 *   node scripts/geo-audit.mjs                   # audit complet + email + JSON
 *   node scripts/geo-audit.mjs --dry             # pas d'email
 *   node scripts/geo-audit.mjs --runs=1          # une seule exécution par requête (test rapide)
 *   node scripts/geo-audit.mjs --html=out.html   # écrit aussi le rapport HTML sur disque
 *   GEO_MOCK=1 node scripts/geo-audit.mjs --dry  # réponses simulées, sans clé API, sans JSON
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "benahmed.pro@icloud.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "GEO Audit <audit@constructiondemaisons.com>";

const ARGS = new Map(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, "").split("=");
  return [k, v ?? "true"];
}));
const DRY = ARGS.get("dry") === "true";
const MOCK = process.env.GEO_MOCK === "1";
const RUNS = Number(ARGS.get("runs") ?? process.env.GEO_RUNS ?? 3);
const CONTEXT_SIZE = process.env.GEO_CONTEXT_SIZE ?? "medium";
const SLEEP_MS = Number(process.env.GEO_SLEEP_MS ?? 800);

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = join(ROOT, "data", "geo");
const SITE_HOST = "constructiondemaisons.com";

// « M&M Immobilier » retiré des signaux : entité distincte, ça faussait la mesure.
const SITE_SIGNALS = ["constructiondemaisons.com", "m&m construction", "mahmoud ben ahmed"];

// Passes : « authority » = score principal ; « freshness » = filtre du dernier mois.
const PASSES = [
  { id: "authority", label: "Autorité", recency: null },
  { id: "freshness", label: "Fraîcheur", recency: "month" },
];

// Jeu benchmark fixe. Ne pas modifier avant 12 semaines de mesure : chaque changement
// casse la comparabilité. Pour ajouter une requête, l'ajouter à la fin avec un nouvel id.
const QUERIES = [
  { id: "pro-annemasse", etape: "Professionnel", label: "Accompagnement maison bois Annemasse", query: "Qui peut m'accompagner pour construire une maison ossature bois à Annemasse ?" },
  { id: "pro-genevois", etape: "Professionnel", label: "Maître d'œuvre bois Genevois français", query: "Quel maître d'œuvre choisir pour une maison bois dans le Genevois français ?" },
  { id: "pro-saint-julien", etape: "Professionnel", label: "MOE bois Saint-Julien-en-Genevois", query: "Maître d'œuvre maison bois à Saint-Julien-en-Genevois : qui contacter ?" },
  { id: "pro-thonon", etape: "Professionnel", label: "Maison bois Thonon-les-Bains", query: "Qui construit des maisons ossature bois à Thonon-les-Bains ?" },
  { id: "comp-moe-ccmi", etape: "Comparaison", label: "MOE vs CCMI bois", query: "Maître d'œuvre ou constructeur CCMI pour une maison bois en Haute-Savoie ?" },
  { id: "comp-moe-archi", etape: "Comparaison", label: "MOE vs architecte 120 m²", query: "Maître d'œuvre ou architecte pour une maison de 120 m² en Haute-Savoie ?" },
  { id: "budget-120", etape: "Budget", label: "Prix maison bois 120 m² 74", query: "Combien coûte une maison ossature bois de 120 m² en Haute-Savoie en 2026 ?" },
  { id: "budget-m2", etape: "Budget", label: "Prix au m² bois 74", query: "Prix au m² d'une maison ossature bois en Haute-Savoie ?" },
  { id: "budget-honoraires", etape: "Budget", label: "Honoraires maître d'œuvre", query: "Combien coûtent les honoraires d'un maître d'œuvre pour une maison ?" },
  { id: "budget-total", etape: "Budget", label: "Budget total terrain + maison Genevois", query: "Quel budget total, terrain compris, pour construire dans le Genevois français ?" },
  { id: "terrain-constructible", etape: "Terrain", label: "Terrain constructible 74", query: "Comment savoir si un terrain est constructible en Haute-Savoie ?" },
  { id: "terrain-prix", etape: "Terrain", label: "Prix terrain Annemasse", query: "Combien coûte un terrain constructible près d'Annemasse ?" },
  { id: "decouverte-etapes", etape: "Découverte", label: "Étapes faire construire 74", query: "Quelles sont les étapes pour faire construire une maison en Haute-Savoie ?" },
  { id: "decouverte-faisabilite", etape: "Découverte", label: "Étude de faisabilité", query: "Qu'est-ce qu'une étude de faisabilité pour un projet de maison ?" },
  { id: "terrain-permis", etape: "Terrain", label: "Délai permis Genevois", query: "Combien de temps prend un permis de construire dans le Genevois français ?" },
  { id: "comp-bois-tradi", etape: "Comparaison", label: "Bois vs traditionnel 74", query: "Maison bois ou maison traditionnelle en Haute-Savoie : que choisir ?" },
  { id: "decouverte-extension", etape: "Découverte", label: "Extension bois 74", query: "Comment faire une extension ossature bois en Haute-Savoie ?" },
  { id: "decouverte-re2020", etape: "Découverte", label: "RE2020 maison bois 74", query: "La RE2020 change-t-elle quelque chose pour une maison bois en Haute-Savoie ?" },
  { id: "decision-verifier-moe", etape: "Décision", label: "Vérifier un maître d'œuvre", query: "Comment vérifier un maître d'œuvre avant de signer ?" },
  { id: "pro-grand-geneve", etape: "Professionnel", label: "Construire bois Grand Genève côté français", query: "Comment faire construire une maison ossature bois dans le Grand Genève côté français ?" },
];

// ─── Perplexity ──────────────────────────────────────────────────────────────

async function askPerplexity(query, recency) {
  if (MOCK) return mockAnswer(query, recency);

  const body = {
    model: "sonar",
    messages: [{ role: "user", content: query }],
    web_search_options: { search_context_size: CONTEXT_SIZE },
  };
  if (recency) body.search_recency_filter = recency;

  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${PERPLEXITY_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Perplexity ${res.status}: ${await res.text()}`);

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  // L'API renvoie soit `citations` (tableau d'URL), soit `search_results` (objets avec url).
  const citations = data.citations ?? (data.search_results ?? []).map((r) => r.url).filter(Boolean);
  return { content, citations };
}

// Réponses simulées pour tester la logique sans clé API (GEO_MOCK=1).
function mockAnswer(query, recency) {
  const seed = [...query].reduce((a, c) => a + c.charCodeAt(0), 0) + (recency ? 7 : 0);
  const cited = seed % 3 !== 0;
  const early = cited && seed % 2 === 0;
  const urls = ["https://www.progineer.fr/x", "https://entreprise-cartier.fr/blog/y", "https://www.kubus-house.com/projets"];
  if (cited) urls.splice(seed % 3, 0, "https://www.constructiondemaisons.com/maison-ossature-bois/");
  const content = early
    ? "M&M Construction (Mahmoud Ben Ahmed) est un maître d'œuvre… " + "x".repeat(600)
    : "x".repeat(600) + (cited ? " M&M Construction est aussi cité." : " Aucune mention.");
  return { content, citations: urls };
}

// ─── Détection ───────────────────────────────────────────────────────────────

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return null; }
}

function analyzeRun(content, citations) {
  const text = content.toLowerCase();
  const inText = SITE_SIGNALS.some((s) => text.includes(s));
  const mmUrls = citations.filter((u) => hostOf(u)?.endsWith(SITE_HOST));
  const cited = inText || mmUrls.length > 0;
  // Position 1-based de la première URL du site dans la liste des citations.
  const firstIdx = citations.findIndex((u) => hostOf(u)?.endsWith(SITE_HOST));
  const position = firstIdx === -1 ? null : firstIdx + 1;
  // « En tête » = signal présent dans les 500 premiers caractères de la RÉPONSE
  // (avant : texte + URL concaténés, une citation en tête de liste comptait à tort).
  const citedEarly = SITE_SIGNALS.some((s) => { const i = text.indexOf(s); return i !== -1 && i < 500; });
  const competitors = [...new Set(citations.map(hostOf).filter((h) => h && !h.endsWith(SITE_HOST)))];
  return { cited, citedEarly, position, mmUrls, competitors };
}

function majority(values) {
  const yes = values.filter(Boolean).length;
  return yes * 2 > values.length;
}

function median(nums) {
  const s = [...nums].sort((a, b) => a - b);
  if (!s.length) return null;
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

function aggregateRuns(runs) {
  const ok = runs.filter((r) => !r.error);
  if (!ok.length) {
    return { cited: false, citedEarly: false, position: null, citedRuns: 0, mmUrls: [], competitors: [], runs: runs.length, errors: runs.length, sample: "" };
  }
  const positions = ok.map((r) => r.position).filter((p) => p !== null);
  const compCount = {};
  for (const r of ok) for (const c of r.competitors) compCount[c] = (compCount[c] ?? 0) + 1;
  const competitors = Object.entries(compCount)
    .sort((a, b) => b[1] - a[1])
    .map(([domain, count]) => ({ domain, count }));
  return {
    cited: majority(ok.map((r) => r.cited)),
    citedEarly: majority(ok.map((r) => r.citedEarly)),
    position: positions.length ? median(positions) : null,
    citedRuns: ok.filter((r) => r.cited).length,
    mmUrls: [...new Set(ok.flatMap((r) => r.mmUrls))],
    competitors,
    runs: runs.length,
    errors: runs.length - ok.length,
    sample: ok[0]?.content?.slice(0, 400) ?? "",
  };
}

// ─── Audit ───────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runAudit() {
  if (!PERPLEXITY_API_KEY && !MOCK) throw new Error("PERPLEXITY_API_KEY manquante (ou GEO_MOCK=1 pour un test)");
  console.log(`🔍 Audit GEO — ${new Date().toLocaleDateString("fr-FR")} — ${QUERIES.length} requêtes × ${PASSES.length} passes × ${RUNS} exécution(s)${MOCK ? " (MOCK)" : ""}\n`);

  const results = [];
  for (const q of QUERIES) {
    const entry = { ...q, passes: {} };
    for (const pass of PASSES) {
      const runs = [];
      for (let i = 0; i < RUNS; i++) {
        try {
          const { content, citations } = await askPerplexity(q.query, pass.recency);
          runs.push({ ...analyzeRun(content, citations), content });
        } catch (err) {
          runs.push({ error: err.message, cited: false, citedEarly: false, position: null, mmUrls: [], competitors: [] });
        }
        if (!MOCK) await sleep(SLEEP_MS);
      }
      entry.passes[pass.id] = aggregateRuns(runs);
    }
    const a = entry.passes.authority;
    console.log(`  ${a.citedEarly ? "🥇" : a.cited ? "✅" : "❌"}  ${q.label}${a.position ? ` (pos. ${a.position})` : ""}${entry.passes.freshness.cited ? "  · fraîcheur ✅" : ""}`);
    results.push(entry);
  }

  const summary = {};
  for (const pass of PASSES) {
    const rs = results.map((r) => r.passes[pass.id]);
    const cited = rs.filter((r) => r.cited).length;
    const positions = rs.map((r) => r.position).filter((p) => p !== null);
    summary[pass.id] = {
      score: Math.round((cited / QUERIES.length) * 100),
      cited,
      urlCited: rs.filter((r) => r.mmUrls.length > 0).length,
      citedEarly: rs.filter((r) => r.citedEarly).length,
      avgPosition: positions.length ? Math.round((positions.reduce((a, b) => a + b, 0) / positions.length) * 10) / 10 : null,
    };
  }

  return { date: new Date().toISOString(), runs: RUNS, contextSize: CONTEXT_SIZE, model: "sonar", mock: MOCK, summary, results };
}

// ─── Historique ──────────────────────────────────────────────────────────────

function loadPrevious() {
  if (!existsSync(DATA_DIR)) return null;
  const files = readdirSync(DATA_DIR).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
  if (!files.length) return null;
  try { return JSON.parse(readFileSync(join(DATA_DIR, files[files.length - 1]), "utf8")); } catch { return null; }
}

function saveAudit(audit) {
  // Pas d'archive en mock ni en test rapide (--runs < 3) : un résultat hors protocole ne doit
  // jamais servir de référence à la comparaison de la semaine suivante.
  if (MOCK || RUNS < 3) return null;
  mkdirSync(DATA_DIR, { recursive: true });
  const name = `${audit.date.slice(0, 10)}.json`;
  const slim = {
    ...audit,
    results: audit.results.map((r) => ({
      ...r,
      passes: Object.fromEntries(Object.entries(r.passes).map(([k, v]) => [k, { ...v, sample: undefined }])),
    })),
  };
  writeFileSync(join(DATA_DIR, name), JSON.stringify(slim, null, 2));
  return name;
}

// ─── Email ───────────────────────────────────────────────────────────────────

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");

function delta(now, before) {
  if (before === null || before === undefined) return "";
  const d = now - before;
  if (d === 0) return `<span style="color:#9ca3af;font-size:13px"> = </span>`;
  return `<span style="color:${d > 0 ? "#16a34a" : "#dc2626"};font-size:13px"> ${d > 0 ? "+" : ""}${d}</span>`;
}

function buildHtml(audit, previous) {
  const A = audit.summary.authority;
  const F = audit.summary.freshness;
  const PA = previous?.summary?.authority;
  const dateStr = new Date(audit.date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const prevDate = previous ? new Date(previous.date).toLocaleDateString("fr-FR") : null;
  const prevById = new Map((previous?.results ?? []).map((r) => [r.id, r]));

  const statusCell = (p) => p.errors === p.runs
    ? `<span style="color:#f59e0b">⚠️ Erreur</span>`
    : p.citedEarly ? `<span style="color:#16a34a;font-weight:700">🥇 En tête</span>`
    : p.cited ? `<span style="color:#2563eb;font-weight:600">✅ Cité</span>`
    : `<span style="color:#dc2626">❌ Non</span>`;

  const rows = audit.results.map((r) => {
    const a = r.passes.authority, f = r.passes.freshness;
    const prev = prevById.get(r.id)?.passes?.authority;
    const change = !prev || prev.cited === a.cited ? "" : a.cited
      ? `<div style="color:#16a34a;font-size:11px;font-weight:700">▲ gagné</div>`
      : `<div style="color:#dc2626;font-size:11px;font-weight:700">▼ perdu</div>`;
    const urls = a.mmUrls.map((u) => `<a href="${u}" style="color:#BA7517;font-size:12px;display:block;word-break:break-all">${esc(u.replace("https://www.constructiondemaisons.com", ""))}</a>`).join("");
    const comps = a.competitors.slice(0, 3).map((c) => `${esc(c.domain)}${c.count > 1 ? ` ×${c.count}` : ""}`).join(", ");
    return `
      <tr>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;vertical-align:top">
          <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:.05em">${esc(r.etape)}</div>
          <div style="font-weight:600;color:#1f2937">${esc(r.label)}</div>
          <div style="font-size:12px;color:#6b7280;margin-top:2px">${esc(r.query)}</div>${change}
        </td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;vertical-align:top;white-space:nowrap">${statusCell(a)}<div style="font-size:11px;color:#9ca3af">${a.citedRuns}/${a.runs} exéc.</div></td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;vertical-align:top;text-align:center">${a.position ?? "—"}</td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;vertical-align:top;white-space:nowrap">${statusCell(f)}</td>
        <td style="padding:12px;border-bottom:1px solid #e5e7eb;vertical-align:top">${urls || `<span style="color:#9ca3af;font-size:12px">—</span>`}<div style="font-size:12px;color:#6b7280;margin-top:4px">${comps}</div></td>
      </tr>`;
  }).join("");

  const scoreColor = (s) => (s >= 70 ? "#16a34a" : s >= 40 ? "#d97706" : "#dc2626");
  const kpi = (value, label, color) => `
      <div style="flex:1;padding:18px 12px;border-right:1px solid #e5e7eb;text-align:center">
        <div style="font-size:30px;font-weight:900;color:${color}">${value}</div>
        <div style="font-size:12px;color:#6b7280;margin-top:2px">${label}</div>
      </div>`;

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:system-ui,sans-serif;background:#f9fafb;margin:0;padding:24px">
  <div style="max-width:860px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)">
    <div style="background:#2C2C2A;padding:28px 32px">
      <div style="color:#BA7517;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px">GEO AUDIT HEBDOMADAIRE</div>
      <div style="color:#fff;font-size:22px;font-weight:700">constructiondemaisons.com</div>
      <div style="color:rgba(255,255,255,.5);font-size:13px;margin-top:4px">${dateStr} · Perplexity ${esc(audit.model)} · contexte ${esc(audit.contextSize)} · ${audit.runs} exécution(s) par requête${prevDate ? ` · comparé au ${prevDate}` : ""}${audit.mock ? " · MOCK" : ""}</div>
    </div>
    <div style="display:flex;border-bottom:1px solid #e5e7eb">
      ${kpi(`${A.score}%${delta(A.score, PA?.score)}`, "Score autorité (sans filtre de date)", scoreColor(A.score))}
      ${kpi(`${A.urlCited}/${QUERIES.length}${delta(A.urlCited, PA?.urlCited)}`, "Requêtes avec une URL du site citée", "#2563eb")}
      ${kpi(`${A.citedEarly}${delta(A.citedEarly, PA?.citedEarly)}`, "Mentions dans les 500 premiers caractères", "#16a34a")}
      ${kpi(A.avgPosition ?? "—", "Position moyenne parmi les sources", "#1f2937")}
      ${kpi(`${F.score}%`, "Score fraîcheur (sources du mois)", "#6b7280")}
    </div>
    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="background:#f3f4f6">
          ${["Requête", "Autorité", "Pos.", "Fraîcheur", "URL citées · concurrents"].map((h) => `<th style="text-align:left;padding:10px 12px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #e5e7eb">${h}</th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6">
        Autorité : requête posée sans filtre de date, score principal. Fraîcheur : sources du dernier mois uniquement.
        Statut = majorité des ${audit.runs} exécution(s). 🥇 mention dans les 500 premiers caractères de la réponse · ✅ cité dans la réponse ou les sources · ❌ absent.
        Pos. = rang médian de la première URL du site parmi les sources. Signaux : constructiondemaisons.com, M&amp;M CONSTRUCTION, Mahmoud Ben Ahmed.
        Jeu de ${QUERIES.length} requêtes fixé le 10/09/2026.
      </p>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmail(html, audit) {
  if (DRY) { console.log("\n📧 --dry : email non envoyé."); return; }
  if (!RESEND_API_KEY) { console.log("\n📧 RESEND_API_KEY absente — email non envoyé."); return; }
  const A = audit.summary.authority;
  const subject = `GEO Audit — Autorité ${A.score}% · ${A.citedEarly} en tête · ${new Date(audit.date).toLocaleDateString("fr-FR")}`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], subject, html }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  console.log(`\n📧 Rapport envoyé à ${TO_EMAIL}`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

const previous = loadPrevious();
const audit = await runAudit();
const saved = saveAudit(audit);
const html = buildHtml(audit, previous);
if (ARGS.get("html")) writeFileSync(ARGS.get("html"), html);
await sendEmail(html, audit);

const A = audit.summary.authority, F = audit.summary.freshness;
console.log(`\n📊 Autorité : ${A.score}% (${A.cited}/${QUERIES.length} citées, ${A.urlCited} avec URL, ${A.citedEarly} en tête, position moyenne ${A.avgPosition ?? "—"})`);
console.log(`🗓  Fraîcheur : ${F.score}% (${F.cited}/${QUERIES.length})`);
if (previous?.summary?.authority) console.log(`↔  Précédent (${previous.date.slice(0, 10)}) : autorité ${previous.summary.authority.score}%`);
if (saved) console.log(`💾 data/geo/${saved}`);
