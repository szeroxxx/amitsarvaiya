import { NextRequest, NextResponse } from "next/server";

const PHONE_REGEX = /^[+]?[0-9\s-]{7,15}$/;

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SHEETS_WEBHOOK_URL is not set — see .env.local.example");
    return NextResponse.json(
      { error: "Server is not configured to accept registrations yet." },
      { status: 500 }
    );
  }

  let body: { name?: string; phone?: string; age?: string; gender?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const age = body.age?.trim();
  const gender = body.gender?.trim();
  const source = body.source?.trim() || "weight-loss-webinar";

  if (!name || !phone || !PHONE_REGEX.test(phone) || !age || !gender) {
    return NextResponse.json({ error: "Please fill in your name, mobile number, age, and gender." }, { status: 400 });
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        age,
        gender,
        source,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!sheetResponse.ok) {
      console.error("Google Sheets webhook responded with", sheetResponse.status, await sheetResponse.text());
      return NextResponse.json({ error: "Could not save your registration. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("Failed to reach Google Sheets webhook:", err);
    return NextResponse.json({ error: "Could not save your registration. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
