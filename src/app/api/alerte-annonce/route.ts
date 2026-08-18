import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escHtml(s: unknown): string {
  if (typeof s !== "string") return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const CHECKLIST_ITEMS = [
  "RDV découverte fixé",
  "RDV découverte effectué",
  "Besoin qualifié (budget, secteur, planning)",
  "Recherche terrain lancée",
  "Terrain identifié",
  "Faisabilité terrain validée (PLU, accès, viabilisation)",
  "Plans validés client",
  "Chiffrage présenté",
  "Promesse ou compromis de vente terrain signé",
  "CCMI signé",
  "Dossier financement déposé",
  "Offre de prêt obtenue",
  "Permis de construire déposé",
  "Permis accordé",
  "Démarrage chantier",
  "Réception chantier",
];

async function createTrelloCard(name: string, desc: string) {
  const key = process.env.TRELLO_API_KEY;
  const token = process.env.TRELLO_TOKEN;
  const listId = process.env.TRELLO_LIST_NOUVEAUX;
  if (!key || !token || !listId) {
    console.error("[Trello] Env vars manquantes", { key: !!key, token: !!token, listId: !!listId });
    return;
  }
  try {
    const cardRes = await fetch(`https://api.trello.com/1/cards?key=${key}&token=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idList: listId, name, desc }),
    });
    if (!cardRes.ok) {
      const text = await cardRes.text();
      console.error("[Trello] Erreur création carte:", cardRes.status, text);
      return;
    }
    const card = await cardRes.json();
    console.log("[Trello] Carte créée:", name);

    const clRes = await fetch(`https://api.trello.com/1/checklists?key=${key}&token=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idCard: card.id, name: "Suivi projet" }),
    });
    if (!clRes.ok) {
      console.error("[Trello] Erreur création checklist:", clRes.status);
      return;
    }
    const checklist = await clRes.json();

    for (const item of CHECKLIST_ITEMS) {
      await fetch(`https://api.trello.com/1/checklists/${checklist.id}/checkItems?key=${key}&token=${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: item }),
      });
    }
    console.log("[Trello] Checklist ajoutée:", card.id);
  } catch (e) {
    console.error("[Trello] Fetch échoué:", e);
  }
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "M&M CONSTRUCTION <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  const TO_EMAIL = process.env.RESEND_TO_EMAIL;
  if (!TO_EMAIL) {
    console.error("[AlerteAnnonce] RESEND_TO_EMAIL manquant");
    return NextResponse.json({ error: "Configuration serveur incorrecte." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const body = await req.json();
    const { email, prenom, telephone, statut, communes } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email requis." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Format d'email invalide." }, { status: 400 });
    }

    if (telephone) {
      const cleaned = String(telephone).replace(/[\s.\-()]/g, "");
      if (!/^(?:(?:\+33|0033|0)[6-9]\d{8}|(?:\+41|0041)[1-9]\d{8})$/.test(cleaned)) {
        return NextResponse.json({ error: "Numéro de téléphone invalide. Saisissez un numéro français (06/07/08/09) ou suisse (+41)." }, { status: 400 });
      }
    }

    const communesSafe = Array.isArray(communes) ? communes.slice(0, 50) : [];
    const communesLabel =
      communesSafe.length > 0 ? communesSafe.map((c: unknown) => escHtml(String(c))).join(", ") : "Toutes les communes (74 + 01)";
    const statutLabel = statut && statut !== "Tous" ? escHtml(statut) : "Tous statuts";

    const sEmail = escHtml(email);
    const sPrenom = escHtml(prenom);
    const sTelephone = escHtml(telephone);

    const cardName = `${prenom || email} — Alerte annonce`;
    const cardDesc = [
      `📧 ${email}`,
      telephone ? `📞 ${telephone}` : "",
      `🔔 Alerte annonce`,
      `📍 Communes : ${communesSafe.join(", ") || "Toutes"}`,
      `📋 Statut recherché : ${statut || "Tous"}`,
    ].filter(Boolean).join("\n");

    const tasks: { label: string; promise: Promise<unknown> }[] = [
      { label: "Trello", promise: createTrelloCard(cardName, cardDesc) },
      {
        label: "Email interne (notification)",
        promise: resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nouvelle alerte annonce — ${prenom || email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C2C2A;">
          <div style="background: #2C2C2A; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: -0.5px;">M&amp;M CONSTRUCTION</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Nouvelle alerte — Annonces</p>
          </div>
          <div style="padding: 32px; background: #F2EDE6;">
            <p style="font-size: 15px; color: #888780; margin: 0 0 24px;">Un internaute souhaite être alerté pour les annonces suivantes :</p>
            <div style="background: white; border-left: 3px solid #BA7517; padding: 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; font-size: 13px; font-weight: bold; color: #888780; text-transform: uppercase; letter-spacing: 1px;">Critères de recherche</p>
              <p style="margin: 4px 0; font-size: 15px;"><strong>Statut :</strong> ${statutLabel}</p>
              <p style="margin: 4px 0; font-size: 15px;"><strong>Communes :</strong> ${communesLabel}</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              ${sPrenom ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 160px; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Prénom</td><td style="padding: 8px 0; font-size: 15px;">${sPrenom}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${sEmail}" style="color: #BA7517;">${sEmail}</a></td></tr>
              ${sTelephone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Téléphone</td><td style="padding: 8px 0; font-size: 15px;">${sTelephone}</td></tr>` : ""}
            </table>
          </div>
          <div style="padding: 16px 32px; background: #2C2C2A; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">constructiondemaisons.com · Alerte annonce automatique</p>
          </div>
        </div>
      `,
        }),
      },
    ];

    const results = await Promise.allSettled(tasks.map((t) => t.promise));
    results.forEach((result, i) => {
      const label = tasks[i].label;
      if (result.status === "rejected") {
        console.error(`[AlerteAnnonce] ${label} — échec :`, result.reason);
        return;
      }
      const value = result.value as { error?: unknown } | undefined;
      if (value && typeof value === "object" && value.error) {
        console.error(`[AlerteAnnonce] ${label} — erreur Resend :`, value.error);
      }
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
