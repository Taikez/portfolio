"use server";

import { SITE_CONFIG } from "@/lib/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: SITE_CONFIG.email,
      subject: `New Portfolio Inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}
