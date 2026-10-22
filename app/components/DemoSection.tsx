"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY = "https://calendly.com/alyssaboehman098/30min";

type DemoMsg = { from: "lead" | "ai" | "system"; text: string };
type Demo = {
  id: string;
  label: string;
  scenario: string;
  messages: DemoMsg[];
  outcomeTitle: string;
  outcomeText: string;
};

const DEMOS: Demo[] = [
  {
    id: "realtor",
    label: "Realtor — new lead follow-up",
    scenario: "A new buyer lead comes in from your website at 8:42 PM — after office hours.",
    messages: [
      { from: "system", text: "8:42 PM — New website lead: Sarah, interested in a 3-bed home in Owensboro" },
      { from: "ai", text: "Hi Sarah! Thanks for reaching out. I'd love to help you find the right home. Are you buying in the next 30–60 days, or just starting to look?" },
      { from: "lead", text: "Buying soon — we are pre-approved and want to see homes this week." },
      { from: "ai", text: "Perfect, and congratulations on the pre-approval! I can set you up for a showing tour on Thursday or Friday. Which works better?" },
      { from: "lead", text: "Thursday afternoon would be great." },
      { from: "ai", text: "Done — you're booked for Thursday at 2:00 PM. I've sent a confirmation to your phone, and your agent has all your details." },
    ],
    outcomeTitle: "Result: Showing booked",
    outcomeText: "Lead answered in under 1 minute, qualified, and booked — without the agent lifting a finger after hours.",
  },
  {
    id: "home",
    label: "Home services — missed-call text-back",
    scenario: "Your crew is on a job and misses a call from a homeowner with a burst pipe.",
    messages: [
      { from: "system", text: "10:15 AM — Missed call from a new number while the team is on a job" },
      { from: "ai", text: "Hi, this is BlueWave Homes — sorry we missed your call! How can we help you today?" },
      { from: "lead", text: "We have a burst pipe and water everywhere. Can someone come today?" },
      { from: "ai", text: "I'm so sorry — that sounds stressful. I can get a technician out today between 1–3 PM. Is the water shut off at the main valve?" },
      { from: "lead", text: "Yes, we shut it off. 1–3 works, please send someone." },
      { from: "ai", text: "You're booked for today, 1–3 PM. A technician will text you when he's on the way. Anything else you need in the meantime?" },
    ],
    outcomeTitle: "Result: Callback saved, job booked",
    outcomeText: "Instead of that caller ringing the next plumber on Google, the missed call turned into a same-day booking.",
  },
  {
    id: "dentist",
    label: "Dentist — appointment booking",
    scenario: "A patient finds your practice on a Sunday evening and visits your website.",
    messages: [
      { from: "system", text: "Sunday 7:03 PM — Website visitor opens the chat on Crest Dental" },
      { from: "lead", text: "Hi, do you have any cleaning appointments this week?" },
      { from: "ai", text: "Hi! We do — I have Wednesday at 9:00 AM or Friday at 11:30 AM open for a cleaning. Would either of those work for you?" },
      { from: "lead", text: "Wednesday at 9 works for me." },
      { from: "ai", text: "Great! I just need your name and best phone number for the reminder text." },
      { from: "lead", text: "It's Angela — 270-555-0148" },
      { from: "ai", text: "You're all set for Wednesday at 9:00 AM, Angela. We'll text you a reminder the day before. See you soon!" },
    ],
    outcomeTitle: "Result: Appointment booked",
    outcomeText: "A Sunday-evening visitor became a booked patient — no Monday-morning phone tag, no lost patient.",
  },
];

export default function DemoSection() {
  const [activeId, setActiveId] = useState(DEMOS[0].id);
  const [visible, setVisible] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const active = DEMOS.find((d) => d.id === activeId) ?? DEMOS[0];

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    timers.current.push(setTimeout(() => setVisible(0), 0));
    active.messages.forEach((_, i) => {
      const t = setTimeout(() => setVisible(i + 1), 700 + i * 1100);
      timers.current.push(t);
    });
    return () => { timers.current.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, runKey]);

  const openChat = () => {
    window.dispatchEvent(new CustomEvent("open-alyssa-chat"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const done = visible >= active.messages.length;

  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Demo</p>
        <h2 className="text-3xl font-black sm:text-4xl">See it in action</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          This is what happens, automatically, when a lead reaches out to a business using Alyssa AI Solutions. Pick a scenario and watch it play out.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {DEMOS.map((d) => (
          <button
            key={d.id}
            onClick={() => setActiveId(d.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${d.id === activeId ? "bg-amber-500 text-slate-950" : "border border-slate-700 bg-slate-900 text-slate-200 hover:border-amber-400 hover:text-amber-300"}`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
        <p className="mb-5 text-center text-sm text-slate-400">{active.scenario}</p>

        <div className="space-y-3">
          {active.messages.slice(0, visible).map((m, i) =>
            m.from === "system" ? (
              <p key={i} className="text-center text-xs font-medium uppercase tracking-wide text-slate-500">{m.text}</p>
            ) : (
              <div key={i} className={`flex ${m.from === "ai" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.from === "ai" ? "bg-amber-500 font-medium text-slate-950" : "bg-slate-800 text-slate-100"}`}>
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide opacity-75">
                    {m.from === "ai" ? "AI Assistant" : "Customer"}
                  </span>
                  {m.text}
                </div>
              </div>
            )
          )}
          {!done && <p className="text-center text-xs text-slate-500">Playing demo…</p>}
        </div>

        {done && (
          <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5 text-center">
            <p className="font-bold text-amber-300">{active.outcomeTitle}</p>
            <p className="mt-2 text-sm text-slate-300">{active.outcomeText}</p>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button onClick={() => setRunKey((k) => k + 1)} className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300">
            ↻ Replay demo
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-amber-500 px-7 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400">
          Want this for your business? Book a free audit
        </a>
        <button onClick={openChat} className="rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-base font-semibold text-white transition hover:border-amber-400 hover:text-amber-300">
          Try the live assistant
        </button>
      </div>
    </section>
  );
}
