"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { sendEmail } from "@/actions/send-email";
import { MotionSection } from "../ui/MotionSection";
import { SectionHeader } from "../ui/SectionHeader";
import SectionSubHeader from "../ui/SectionSubHeader";

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleAction(formData: FormData) {
    setStatus("loading");
    const result = await sendEmail(formData);

    if (result?.error) {
      setStatus("error");
    } else {
      setStatus("success");
    }
  }

  return (
    <MotionSection className="py-20 md:py-32 border-border" delay={0.2}>
      <div className="max-w-2xl mx-auto text-center mb-16">
        <SectionHeader title="Let's Talk" />
        <SectionSubHeader text="I love what I do, but I'm open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!" />
      </div>

      <div className="max-w-2xl mx-auto">
        {status === "success" ? (
          <div className="p-12 rounded-3xl border border-accent/20 bg-accent/5 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
            <CheckCircle className="w-12 h-12 text-[#f25060] mb-6" />
            <h3 className="text-2xl font-black tracking-tight text-foreground mb-2">
              Message Sent
            </h3>
            <p className="text-muted-foreground text-lg">
              Thanks for reaching out. I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form action={handleAction} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-widest text-foreground ml-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={status === "loading"}
                  className="w-full px-5 py-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted-foreground/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-[#f25060] transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-widest text-foreground ml-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "loading"}
                  className="w-full px-5 py-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted-foreground/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-[#f25060] transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-widest text-foreground ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={status === "loading"}
                rows={5}
                className="w-full px-5 py-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted-foreground/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-[#f25060] transition-colors resize-none disabled:opacity-50"
                placeholder="How can I help you?"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-[#f25060] text-sm font-medium ml-1">
                <AlertCircle className="w-4 h-4" />
                <span>
                  Something went wrong. Please try again or email me directly.
                </span>
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-10 py-5 bg-foreground text-background font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-foreground/90 transition-transform hover:scale-105 shadow-md disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        )}
      </div>
    </MotionSection>
  );
}
