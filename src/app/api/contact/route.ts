import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const body = await req.json();
    const { nom, prenom, email, telephone, typeProjet, zone, budget, message } = body;

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const cardName = `${prenom} ${nom} — ${typeProjet || "Demande d'étude"}`;
    const cardDesc = [
      `📧 ${email}`,
      telephone ? `📞 ${telephone}` : "",
      typeProjet ? `🏠 Projet : ${typeProjet}` : "",
      zone ? `📍 Zone : ${zone}` : "",
      budget ? `💶 Budget : ${budget}` : "",
      "",
      message,
    ].filter(Boolean).join("\n");

    await Promise.allSettled([
      createTrelloCard(cardName, cardDesc),
      resend.emails.send({
      from: "M&M CONSTRUCTION <onboarding@resend.dev>",
      to: "benahmed.pro@icloud.com",
      replyTo: email,
      subject: `Nouvelle demande d'étude — ${prenom} ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C2C2A;">
          <div style="background: #2C2C2A; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: -0.5px;">M&M CONSTRUCTION</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Nouvelle demande d'étude</p>
          </div>
          <div style="padding: 32px; background: #F2EDE6;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 160px; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Nom</td><td style="padding: 8px 0; font-size: 15px;">${prenom} ${nom}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #BA7517;">${email}</a></td></tr>
              ${telephone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Téléphone</td><td style="padding: 8px 0; font-size: 15px;">${telephone}</td></tr>` : ""}
              ${typeProjet ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Type de projet</td><td style="padding: 8px 0; font-size: 15px;">${typeProjet}</td></tr>` : ""}
              ${zone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Zone</td><td style="padding: 8px 0; font-size: 15px;">${zone}</td></tr>` : ""}
              ${budget ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Budget</td><td style="padding: 8px 0; font-size: 15px;">${budget}</td></tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 20px; background: white; border-left: 3px solid #BA7517;">
              <p style="font-weight: bold; color: #888780; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #2C2C2A; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">constructiondemaisons.com · NAF 71.12B · Maîtrise d'œuvre bois, Genevois français</p>
          </div>
        </div>
      `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
