import { NextResponse } from "next/server";

type LeadPayload = {
  businessNameOrIndustry?: string;
  email?: string;
  fullName?: string;
  message?: string;
  websiteOrFacebook?: string;
  whatsapp?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nepalWhatsAppPattern = /^\+977\d{10}$/;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(payload: LeadPayload) {
  const errors: Partial<Record<keyof LeadPayload, string>> = {};

  if (!cleanText(payload.fullName)) {
    errors.fullName = "Please enter your full name.";
  }

  const email = cleanText(payload.email);
  if (!email) {
    errors.email = "Please enter your active email.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const whatsapp = cleanText(payload.whatsapp);
  if (!whatsapp) {
    errors.whatsapp = "Please enter your WhatsApp number.";
  } else if (!nepalWhatsAppPattern.test(whatsapp)) {
    errors.whatsapp = "Please enter a valid Nepal WhatsApp number.";
  }

  return errors;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 },
    );
  }

  const errors = validateLead(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        error:
          "Lead capture is not configured yet. Please add LEAD_WEBHOOK_URL.",
      },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toISOString();
  const lead = {
    submittedAt,
    fullName: cleanText(payload.fullName),
    email: cleanText(payload.email),
    whatsapp: cleanText(payload.whatsapp),
    businessNameOrIndustry: cleanText(payload.businessNameOrIndustry),
    websiteOrFacebook: cleanText(payload.websiteOrFacebook),
    message: cleanText(payload.message),
    notificationEmail: "digitalbykristina@gmail.com",
    emailSubject: "New Consultation Lead - Digital Kristina",
    webhookSecret: process.env.LEAD_WEBHOOK_SECRET ?? "",
  };

  try {
    const response = await fetch(webhookUrl, {
      body: JSON.stringify(lead),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Lead submission failed. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Lead submission failed. Please try again." },
      { status: 502 },
    );
  }
}
