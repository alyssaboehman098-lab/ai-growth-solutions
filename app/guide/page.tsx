import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Guide: 5 Automations Home Service Businesses Use to Stop Losing Leads | Alyssa AI Solutions",
  description:
    "The 5 automations HVAC, plumbing, roofing, and cleaning companies use to stop losing after-hours leads: missed-call text-back, instant website chat, speed-to-lead follow-up, review requests, and no-show-proof reminders.",
};

const CALENDLY = "https://calendly.com/alyssaboehman098/30min";

const automations = [
  {
    title: "1. Missed-call text-back",
    body: [
      "When a call comes in and nobody can grab it — because your techs are on a roof, under a house, or it's 8 PM — the caller almost never leaves a voicemail. They just dial the next company on Google.",
      "Missed-call text-back fixes that in seconds: every missed call instantly gets a friendly text like \"Sorry we missed you — how can we help?\" The conversation continues by text, where homeowners actually reply, and it can offer times and book the job right there. It's the single highest-return automation for most home service companies because it rescues leads you already paid to generate.",
    ],
  },
  {
    title: "2. Instant website chat that books",
    body: [
      "A contact form is a promise to get back to someone later. A website chat is a conversation right now — it answers the common questions (pricing ranges, service area, availability), qualifies the job, and books it straight onto your calendar.",
      "The difference matters most after hours and on weekends, which is exactly when a burst pipe or a dead AC sends homeowners searching. The chat works 24/7, responds in under a minute, and turns \"just looking\" visitors into booked appointments instead of bounces.",
    ],
  },
  {
    title: "3. Speed-to-lead follow-up sequence by text + email",
    body: [
      "However a lead reaches you — form, chat, referral — the first company to respond usually wins the job, and most leads need more than one touch before they reply. A speed-to-lead sequence responds within a minute, then follows up automatically by text and email over the next several days.",
      "Each message is short, helpful, and easy to answer, and the sequence stops the moment they book, reply, or opt out. No more sticky notes, no more \"I meant to call them back\" — every lead gets followed up like your best office manager would, every single time.",
    ],
  },
  {
    title: "4. Review requests after every job",
    body: [
      "Homeowners pick the company with the most recent, most convincing Google reviews — and happy customers will leave one if you ask at the right moment. An automated review request goes out by text shortly after every completed job, while the good experience is still fresh.",
      "It links straight to your Google review page, so leaving a review takes under a minute. Over a few months this compounds: more reviews, a higher local ranking, and more calls that were never going to find you any other way.",
    ],
  },
  {
    title: "5. Appointment reminders that cut no-shows",
    body: [
      "A booked job that no-shows costs you a tech's hour and a slot another customer would have taken. Automated reminders send a confirmation when the job is booked, a reminder the day before, and a short one the morning of — each with the arrival window and an easy way to reschedule.",
      "Customers who need to move their appointment do it with a tap instead of just not showing up, and your schedule stays full of people who are actually expecting you.",
    ],
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link href="/" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">
          ← Back to Alyssa AI Solutions
        </Link>

        <p className="mt-10 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Free guide</p>
        <h1 className="text-3xl font-black leading-tight sm:text-4xl">
          5 Automations Home Service Businesses Use to Stop Losing Leads
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-300">
          Most home service companies don&apos;t have a lead problem — they have a follow-up problem. The phone
          rings after hours, the website form waits until morning, the estimate never gets chased. These are the
          five automations that plug those leaks, in the order most companies should add them.
        </p>

        <div className="mt-10 space-y-10">
          {automations.map((item) => (
            <section key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <h2 className="mb-3 text-2xl font-bold text-amber-400">{item.title}</h2>
              {item.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mt-3 leading-relaxed text-slate-300 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 text-center sm:p-8">
          <h2 className="text-2xl font-black sm:text-3xl">Want to know which of these your business needs first?</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-300">
            Book a free 30-minute AI Business Audit. We&apos;ll review your website, lead flow, and after-hours
            coverage, show you exactly where jobs are leaking, and give you a roadmap you keep either way.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-amber-500 px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Claim My Free AI Audit
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Alyssa AI Solutions · Owensboro, Kentucky · alyssaautomation.com
        </p>
      </div>
    </main>
  );
}
