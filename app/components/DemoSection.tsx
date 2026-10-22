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
    id: "hvac",
    label: "HVAC — missed-call text-back",
    scenario: "Your techs are out on a job on the hottest day of the year, and a call comes in.",
    messages: [
      { from: "system", text: "1:47 PM — Missed call from a new number while the crew is on a job" },
      { from: "ai", text: "Hi, this is CoolAir Heating & Air — sorry we missed your call! How can we help you today?" },
      { from: "lead", text: "Our AC stopped cooling and the house is already at 84 degrees." },
      { from: "ai", text: "I'm sorry — let's get that fixed today. I have a technician open for a same-day diagnostic visit between 4–6 PM. Would that work?" },
      { from: "lead", text: "Yes, please — 4–6 works." },
      { from: "ai", text: "You're booked for today, 4–6 PM. Your tech will text you when he's on the way. Stay cool in the meantime!" },
    ],
    outcomeTitle: "Result: Same-day visit booked",
    outcomeText: "Booked: same-day diagnostic visit — a job that would have gone to the next company on Google.",
  },
  {
    id: "plumbing",
    label: "Plumbing — instant web lead",
    scenario: "A homeowner submits your website form at 9:40 PM — your office has been closed for hours.",
    messages: [
      { from: "system", text: "9:40 PM — New website form lead: Marcus, water heater leaking in his basement" },
      { from: "ai", text: "Hi Marcus, this is Rapid Flow Plumbing — thanks for reaching out! Is the leaking getting worse, or is it a slow drip for now?" },
      { from: "lead", text: "It's pooling on the floor. We shut the water off to it." },
      { from: "ai", text: "Good call shutting it off. Which part of town are you in, and could you send a quick photo of the label on the unit? That helps us bring the right replacement." },
      { from: "lead", text: "East side of Owensboro. Just sent the photo." },
      { from: "ai", text: "Got it — thanks! I booked you an emergency visit tomorrow between 8–10 AM. Your plumber will text before he heads over." },
    ],
    outcomeTitle: "Result: Emergency visit booked",
    outcomeText: "Lead answered in under a minute while the office was closed — qualified and booked for first thing in the morning.",
  },
  {
    id: "cleaning",
    label: "Home cleaning — booking & reminders",
    scenario: "A busy homeowner lands on a cleaning company's website on her lunch break.",
    messages: [
      { from: "system", text: "12:18 PM — Website visitor opens the chat on BrightNest Cleaning" },
      { from: "lead", text: "Hi, how much for a recurring house cleaning? 3-bed home." },
      { from: "ai", text: "Hi! For a 3-bedroom home, recurring cleans start with a first deep clean, then regular visits every 2 weeks. Want me to book your first clean?" },
      { from: "lead", text: "Yes — is Saturday morning open?" },
      { from: "ai", text: "It is — you're booked for Saturday at 9:00 AM. I'll send a confirmation now and a reminder the day before." },
      { from: "lead", text: "Actually, can we move it to next Saturday instead?" },
      { from: "ai", text: "Of course — moved to next Saturday at 9:00 AM, and your reminder will update automatically. Anything else?" },
    ],
    outcomeTitle: "Result: Recurring client booked",
    outcomeText: "Booked recurring client, rescheduled by one simple text — zero phone tag.",
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
          This is what happens, automatically, when a lead reaches out to a home service business using Alyssa AI Solutions. Pick a scenario and watch it play out.
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
