"use client";

import { useState } from "react";

const EMAIL = "alyssaboehman098@gmail.com";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    setSent(true);
    const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "New guide lead"
    )}&body=${encodeURIComponent(
      `Hi Alyssa,\n\nA website visitor just requested the free guide "5 Automations Home Service Businesses Use to Stop Losing Leads".\n\nVisitor email: ${value}\n\nThanks!`
    )}`;
    window.location.href = mailtoHref;
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 text-center sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Free guide</p>
        <h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-4xl">
          5 Automations Home Service Businesses Use to Stop Losing Leads
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          Most home service companies lose jobs after hours — a missed call, a website form nobody sees until
          morning, a quote that never gets followed up. This free one-page guide shows the 5 fixes that plug
          those leaks, in plain English.
        </p>

        {sent ? (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-amber-500/30 bg-slate-950/60 p-6">
            <p className="text-lg font-bold text-white">You&apos;re in — your guide is ready.</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              We&apos;ve also opened an email to Alyssa with your address so she can follow up with more
              resources for home service businesses.
            </p>
            <a
              href="/guide"
              className="mt-5 inline-flex rounded-xl bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Read the guide now
            </a>
          </div>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your business email"
              aria-label="Your business email"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-amber-500 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Send me the free guide
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-slate-400">Free, no spam — just the guide and the occasional useful tip.</p>
      </div>
    </section>
  );
}
