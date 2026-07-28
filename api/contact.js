import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, phone, service, market, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    const { data, error } = await resend.emails.send({
      // Works immediately with no setup. Once you verify your own domain in Resend
      // (step below), change this to something like:
      // "Prolance Resume <noreply@prolanceresume.com>"
      from: "Prolance Resume Website <onboarding@resend.dev>",
      to: ["hello@prolanceresume.com"],
      reply_to: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px;">
          <h2 style="color:#2547d2;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service Interested In:</strong> ${service || "Not specified"}</p>
          <p><strong>Target Job Market:</strong> ${market || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
}