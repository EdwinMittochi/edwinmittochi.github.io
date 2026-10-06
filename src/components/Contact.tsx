"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
import { Card, SectionHeading } from "@/components/ui";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M4 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-card-2 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-accent";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const body = `From: ${name} <${from}>\n\n${String(data.get("message") ?? "")}`;
    const subject = String(data.get("subject") ?? `Message from ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact">
      <Card className="h-full px-6 py-8 sm:px-8">
        <SectionHeading icon={<MailIcon />} title="CONTACT ME" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Name</span>
              <input name="name" required placeholder="Your Name" className={inputClass} />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input name="email" type="email" required placeholder="Your Email" className={inputClass} />
            </label>
          </div>

          <label className="block">
            <span className="sr-only">Subject</span>
            <input name="subject" placeholder="Subject" className={inputClass} />
          </label>

          <label className="block">
            <span className="sr-only">Message</span>
            <textarea name="message" required rows={5} placeholder="Your Message" className={`${inputClass} resize-y`} />
          </label>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-7 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-white"
          >
            Send Message <SendIcon />
          </button>

          {sent && (
            <p className="text-xs text-muted">
              Your email app should have opened with the message — if not, email me directly at{" "}
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>
              .
            </p>
          )}
        </form>
      </Card>
    </section>
  );
}
