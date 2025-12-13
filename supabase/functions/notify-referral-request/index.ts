import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  try {
    const payload = await req.json();

    const {
      brand,
      email,
      created_at,
    } = payload.record ?? {};

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const TO_EMAIL = "foxevanna@gmail.com";

    if (!RESEND_API_KEY) {
      return new Response("Missing RESEND_API_KEY", { status: 500 });
    }

    const emailBody = `
New referral request

Brand: ${brand}
Requester email: ${email || "Not provided"}
Submitted at: ${created_at}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Referral Hub <foxevanna@gmail.com>",
        to: TO_EMAIL,
        subject: "New Referral Request",
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response("Failed to send email", { status: 500 });
    }

    return new Response("Email sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Server error", { status: 500 });
  }
});