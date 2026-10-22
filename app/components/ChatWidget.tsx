"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY = "https://calendly.com/alyssaboehman098/30min";
const EMAIL = "alyssaboehman098@gmail.com";

type Msg = { from: "bot" | "user"; text: string };
type LeadStep = "idle" | "name" | "business" | "contact" | "done";

const QUICK = ["Pricing", "Services", "Book a free audit", "How long is setup?"];

function answerFor(input: string): string {
  const t = input.toLowerCase();
  if (t.includes("price") || t.includes("pricing") || t.includes("cost") || t.includes("how much")) {
    return "Here's our simple pricing:\n• Free AI Business Audit — $0 (website & lead-flow review + a prioritized action plan)\n• Launch — $499 (AI chatbot setup, lead response workflow, and calendar booking integration)\n• Growth — Custom (custom workflows, multi-step follow-up, and monthly optimization)\nMost clients start with the free audit. Want me to help you book one?";
  }
  if (t.includes("service") || t.includes("what do you do") || t.includes("offer")) {
    return "We help home service businesses stop losing leads with:\n• AI Chatbots — capture & qualify leads 24/7\n• Lead Follow-Up — automatic email & SMS follow-up\n• Appointment Booking — no more back-and-forth scheduling\n• Workflow Automation — less admin, more revenue work\nCheck out the Demo section on this page to see it in action!";
  }
  if (t.includes("how long") || t.includes("setup") || t.includes("set up") || t.includes("timeline")) {
    return "Most automation systems are set up within a few days, depending on how much customization you need. And no — you don't need any technical experience. Everything is handled for you.";
  }
  if (t.includes("who") || t.includes("hvac") || t.includes("plumb") || t.includes("roof") || t.includes("clean") || t.includes("realtor") || t.includes("dentist") || t.includes("insurance") || t.includes("business")) {
    return "We specialize in home service businesses — HVAC, plumbing, roofing, cleaning, and contractors — that want more booked jobs and less manual work. Run a real estate, dental, or insurance business? We build the same lead-response system for you too. Want a free audit for your business?";
  }
  if (t.includes("book") || t.includes("audit") || t.includes("call") || t.includes("appointment")) {
    return "Great choice! You can book your free 30-minute AI Business Audit here: " + CALENDLY + "\nOr tap 'Get my free audit' below and I'll collect a few details first so Alyssa is prepared for your call.";
  }
  if (t.includes("human") || t.includes("email") || t.includes("contact") || t.includes("phone")) {
    return "You can reach Alyssa directly at " + EMAIL + ", or book a quick 30-minute call here: " + CALENDLY;
  }
  if (t.includes("hi") || t.includes("hello") || t.includes("hey")) {
    return "Hi there! I can answer questions about our services and pricing, or help you book a free AI Business Audit. What would you like to know?";
  }
  return "I can help with that — I mostly answer questions about services, pricing, and setup, and I can help you book a free AI Business Audit. Try one of the quick options below, or type 'pricing' or 'services'.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Alyssa's AI assistant — we build chatbots and instant lead follow-up for home service businesses like HVAC, plumbing, roofing, cleaning, and contractors. This chat is a live example of what we build. Ask me about services or pricing, or tap 'Book a free audit' to get started." },
  ]);
  const [input, setInput] = useState("");
  const [leadStep, setLeadStep] = useState<LeadStep>("idle");
  const [lead, setLead] = useState({ name: "", business: "", contact: "" });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-alyssa-chat", handler);
    return () => window.removeEventListener("open-alyssa-chat", handler);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const push = (from: "bot" | "user", text: string) =>
    setMessages((m) => [...m, { from, text }]);

  const startLeadFlow = () => {
    setLeadStep("name");
    push("bot", "Love it — let's get your free audit started. First, what's your name?");
  };

  const handleLeadReply = (text: string) => {
    if (leadStep === "name") {
      setLead((l) => ({ ...l, name: text }));
      setLeadStep("business");
      push("bot", `Nice to meet you, ${text}! What type of business do you run? (e.g. HVAC, plumbing, roofing, cleaning, electrical)`);
    } else if (leadStep === "business") {
      setLead((l) => ({ ...l, business: text }));
      setLeadStep("contact");
      push("bot", "Perfect. What's the best email or phone number to reach you at?");
    } else if (leadStep === "contact") {
      const updated = { ...lead, contact: text };
      setLead(updated);
      setLeadStep("done");
      push(
        "bot",
        `Thanks, ${updated.name}! Here's the fastest next step: book your free 30-minute audit on Alyssa's calendar using the button below. I've also prepared an email with your details — tap 'Email Alyssa my details' to send it, so she's ready for you.`
      );
    }
  };

  const send = (textRaw: string) => {
    const text = textRaw.trim();
    if (!text) return;
    push("user", text);
    setInput("");
    if (leadStep !== "idle" && leadStep !== "done") {
      handleLeadReply(text);
      return;
    }
    if (text.toLowerCase().includes("get my free audit")) {
      startLeadFlow();
      return;
    }
    setTimeout(() => push("bot", answerFor(text)), 350);
  };

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Free AI Business Audit request — " + (lead.name || "Website visitor")
  )}&body=${encodeURIComponent(
    `Hi Alyssa,\n\nI'd like a free AI Business Audit.\n\nName: ${lead.name}\nBusiness type: ${lead.business}\nBest contact: ${lead.contact}\n\nThanks!`
  )}`;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Chat with Alyssa's AI assistant"
          className="fixed bottom-24 right-4 z-40 flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3.5 font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:bg-amber-400 sm:bottom-6 sm:right-6"
        >
          <span aria-hidden="true">💬</span> Chat with us
        </button>
      )}

      {open && (
        <div className="fixed bottom-24 right-4 z-40 flex h-[480px] max-h-[70vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl sm:bottom-6 sm:right-6">
          <div className="flex items-center justify-between bg-amber-500 px-5 py-4">
            <div>
              <p className="font-bold text-slate-950">Alyssa AI Assistant</p>
              <p className="text-xs text-slate-800">Typically replies instantly • 24/7</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full bg-slate-950/10 px-3 py-1 font-bold text-slate-950 hover:bg-slate-950/20">
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "bg-amber-500 font-medium text-slate-950" : "bg-slate-800 text-slate-100"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {leadStep === "done" && (
            <div className="flex gap-2 px-4 pb-2">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-amber-500 px-3 py-2.5 text-center text-sm font-bold text-slate-950 hover:bg-amber-400">
                Book on Calendly
              </a>
              <a href={mailtoHref} className="flex-1 rounded-xl border border-slate-600 px-3 py-2.5 text-center text-sm font-semibold text-white hover:border-amber-400">
                Email Alyssa my details
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q)} className="rounded-full border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-amber-400 hover:text-amber-300">
                {q}
              </button>
            ))}
            <button onClick={() => send("Get my free audit")} className="rounded-full bg-amber-500/15 px-3 py-1.5 text-xs font-bold text-amber-300 transition hover:bg-amber-500/25">
              Get my free audit
            </button>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex gap-2 border-t border-slate-800 px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
            />
            <button type="submit" className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-400">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
