const services = [
  {
    title: "AI Chatbots",
    description:
      "Capture and qualify leads 24/7 with an AI assistant that responds in seconds and turns more website visitors into booked calls.",
  },
  {
    title: "Lead Follow-Up",
    description:
      "Automatic email + SMS sequences so every lead gets a fast, professional follow-up — even when you’re on a job or after hours.",
  },
  {
    title: "Appointment Booking",
    description:
      "Let prospects book directly on your calendar without the back-and-forth. Fewer no-shows, more confirmed appointments.",
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate repetitive admin tasks so you and your team can focus on serving customers and closing deals.",
  },
];

const steps = [
  {
    title: "1. Free AI Audit",
    description:
      "We review your current lead flow, website, and follow-up process to find the biggest leaks costing you revenue.",
  },
  {
    title: "2. Clear Growth Roadmap",
    description:
      "You receive a prioritized action plan tailored to your business — what to fix first for the fastest ROI.",
  },
  {
    title: "3. Implementation",
    description:
      "If it makes sense, we build and launch the highest-impact systems so you start seeing results quickly.",
  },
];

const pricing = [
  {
    name: "Free Audit",
    price: "$0",
    description: "Discover exactly where leads and revenue are leaking — and get a clear plan to fix it.",
    features: [
      "Full lead flow & website review",
      "Response-time & follow-up audit",
      "Prioritized action plan you can use immediately",
    ],
    highlighted: false,
    cta: "Book My Free Audit",
  },
  {
    name: "Launch",
    price: "$499",
    description: "The focused setup that gets most local service businesses capturing, following up, and booking more leads fast.",
    features: [
      "Custom AI chatbot installed",
      "Automated lead response (email + SMS)",
      "Calendar booking integration",
      "30-day support included",
    ],
    highlighted: true,
    cta: "Get the Launch System",
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For businesses ready for deeper automation, multi-step sequences, and ongoing optimization.",
    features: [
      "Custom multi-step workflows",
      "Advanced follow-up sequences",
      "Monthly optimization & support",
      "Priority access to new tools",
    ],
    highlighted: false,
    cta: "Talk About Growth",
  },
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Local service businesses that rely on inbound leads — realtors, home services (HVAC, plumbing, roofing, landscaping), dentists, insurance agencies, contractors, and similar companies that lose money when leads go unanswered.",
  },
  {
    question: "How long does setup actually take?",
    answer:
      "Most Launch systems are live within a few days. We handle the technical work so you don’t have to.",
  },
  {
    question: "Do I need any technical experience?",
    answer:
      "No. Everything is set up for you and designed to be simple to manage day-to-day.",
  },
  {
    question: "What if it doesn’t work for my business?",
    answer:
      "We start with a free audit so you only move forward if the opportunity is clear. The Launch package is a focused, low-risk way to test real results.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No. It handles the repetitive response and booking work so your team can focus on high-value conversations and closing.",
  },
];

const stats = [
  { value: "24/7", label: "Lead response" },
  { value: "< 2 min", label: "Average follow-up" },
  { value: "More", label: "Booked calls" },
];

const benefits = [
  {
    title: "Stop missing leads",
    description: "Every inquiry gets an instant, professional response — even at 11pm or while you’re on a job site.",
  },
  {
    title: "Get hours back every week",
    description: "Automate the follow-up and scheduling grind so you can focus on revenue-generating work.",
  },
  {
    title: "Book more appointments",
    description: "Smoother path from first contact to confirmed call or job — fewer drop-offs, more calendar bookings.",
  },
  {
    title: "Built for real local businesses",
    description: "No complicated enterprise software. Just practical systems that work for service companies like yours.",
  },
];

const testimonials = [
  {
    quote:
      "Alyssa helped us fix our lead flow and reply faster than ever. It felt like we finally had a system instead of chaos. We’re booking more calls without working more hours.",
    name: "Sarah M.",
    role: "Business Owner",
  },
  {
    quote:
      "The automation was simple to implement and immediately made our process more efficient. We stopped missing opportunities right away and our response time went from hours to minutes.",
    name: "Derek T.",
    role: "Service Company Founder",
  },
  {
    quote:
      "We were overwhelmed with leads and manual follow-up. Alyssa built a better process that helped us respond faster and book more calls. Best decision we made this year.",
    name: "Angela R.",
    role: "Marketing Director",
  },
];

const clientLogos = ["Realtor Group", "BlueWave Homes", "Crest Dental", "Summit Services", "Clarity Insurance"];

const engagementSteps = [
  {
    title: "1. Free 30-min Audit",
    description: "We identify exactly where leads, follow-up, or booking are breaking down in your business.",
  },
  {
    title: "2. Launch one high-impact fix",
    description: "Most clients start with the $499 Launch system that solves the most expensive bottleneck first.",
  },
  {
    title: "3. Scale what works",
    description: "Add more automation and ongoing optimization only when you’re ready and seeing results.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pb-24 sm:pb-0">
      {/* NAV */}
      <nav className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3 text-xl font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-black text-slate-950">
              A
            </span>
            <span className="text-orange-400">Alyssa AI Solutions</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="https://calendly.com/alyssaboehman098/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 sm:px-5"
          >
            Book Free Audit
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
              AI Automation for Local Service Businesses
            </div>

            <h1 className="mb-5 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stop losing leads<br />
              to slow follow-up.<br />
              <span className="text-orange-500">Start booking more calls.</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0 lg:text-lg">
              Get a free AI Business Audit and a clear roadmap to capture more inquiries, respond in minutes instead of hours, and turn more conversations into booked appointments.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://calendly.com/alyssaboehman098/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
              >
                Claim My Free Audit →
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-base font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
              >
                See Pricing
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400 lg:justify-start">
              <span className="flex items-center gap-1.5">✔ Free 30-minute audit</span>
              <span className="flex items-center gap-1.5">✔ No long-term contracts</span>
              <span className="flex items-center gap-1.5">✔ Built for local service businesses</span>
            </div>
          </div>

          {/* Snapshot card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-orange-950/30 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Business Snapshot</p>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                Live opportunities
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Typical response time</p>
                <p className="mt-1 text-3xl font-black text-orange-400">Instant</p>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-950 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Lead capture rate</span>
                  <span className="font-semibold text-white">94%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[94%] rounded-full bg-orange-500" />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Follow-up speed</span>
                  <span className="font-semibold text-white">&lt; 2 min</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[88%] rounded-full bg-orange-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-orange-500/25 bg-orange-500/5 p-4 text-sm leading-relaxed text-slate-200">
                Most local businesses lose leads simply because they respond too slowly or not at all.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
          <div className="grid gap-4 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-slate-950/60 p-5">
                <div className="text-3xl font-black text-orange-400 tabular-nums">{stat.value}</div>
                <div className="mt-1.5 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Trusted by growing local brands
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 px-3 py-4 text-center text-sm font-medium text-slate-400"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM → SOLUTION / BENEFITS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Why this works</p>
          <h2 className="text-3xl font-black sm:text-4xl">A system built for growth, not more admin work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-lg font-bold text-orange-300">
                ✓
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Results</p>
          <h2 className="text-3xl font-black sm:text-4xl">What business owners are saying</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 flex gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mb-6 flex-1 text-base leading-relaxed text-slate-200">“{t.quote}”</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Services</p>
          <h2 className="text-3xl font-black sm:text-4xl">Automation that saves time and converts more leads</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-300">
                ✦
              </div>
              <h3 className="mb-2 text-2xl font-bold">{s.title}</h3>
              <p className="text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">How it works</p>
          <h2 className="text-3xl font-black sm:text-4xl">From missed leads to more booked calls</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-3 text-xl font-bold text-orange-400">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PATH TO START */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Getting started</p>
          <h2 className="text-3xl font-black sm:text-4xl">A simple path to your first win</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            No long-term commitment required. We start with one measurable problem and build from there.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {engagementSteps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Pricing</p>
          <h2 className="text-3xl font-black sm:text-4xl">Choose the path that fits your stage</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Start free. Only invest when the opportunity is clear.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-6 ${
                plan.highlighted
                  ? "border-orange-400 bg-orange-500/5 shadow-xl shadow-orange-500/10"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-slate-950">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>

              <div className="mb-3 text-4xl font-black text-white">{plan.price}</div>
              <p className="mb-6 text-sm text-slate-400">{plan.description}</p>

              <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-orange-400">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/alyssaboehman098/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full justify-center rounded-xl px-4 py-3.5 font-semibold transition ${
                  plan.highlighted
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-slate-700 bg-slate-950 text-white hover:border-orange-400 hover:text-orange-300"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          All packages include clear next steps. No pressure, no long-term contracts required to begin.
        </p>
      </section>

      {/* GUARANTEE / RISK REVERSAL */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">Start risk-free</h3>
          <p className="mx-auto max-w-2xl text-slate-300">
            The free audit costs nothing and comes with a clear action plan you can use even if we never work together. 
            Most clients begin with the focused $499 Launch system only after they see the opportunity.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/20 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Contact</p>
              <h2 className="text-3xl font-black sm:text-4xl">Let’s find the first workflow worth fixing</h2>
              <p className="mt-4 max-w-xl text-base text-slate-400">
                Tired of missed leads, slow follow-up, and repetitive admin? Book a free 30-minute strategy call and leave with a clear next step.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
                  <p className="mt-1 text-base font-medium text-white">Owensboro, Kentucky</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
                  <a
                    href="mailto:alyssaboehman098@gmail.com"
                    className="mt-1 inline-block text-base text-orange-300 hover:text-orange-200"
                  >
                    alyssaboehman098@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Next step</p>
                  <p className="mt-1 text-base font-medium text-white">Book a free 30-minute strategy call</p>
                </div>
              </div>

              <a
                href="https://calendly.com/alyssaboehman098/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full justify-center rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white transition hover:bg-orange-600"
              >
                Schedule My Free Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="mb-2 text-lg font-bold text-white">{item.question}</h3>
              <p className="text-slate-400 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-black sm:text-5xl">
            Ready to stop losing leads?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-400">
            Book your free AI Business Audit today. Leave with a clear plan for more leads, faster follow-up, and better booking.
          </p>
          <a
            href="https://calendly.com/alyssaboehman098/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Claim My Free Audit →
          </a>
          <p className="mt-5 text-sm text-slate-500">Takes 30 minutes · No obligation · Clear next steps</p>
        </div>
      </section>

      {/* MOBILE STICKY */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-700 bg-slate-950/95 p-3 backdrop-blur-md sm:hidden">
        <a
          href="https://calendly.com/alyssaboehman098/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 text-base font-bold text-white"
        >
          Get My Free Audit
        </a>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center">
        <h3 className="mb-1 text-xl font-bold text-orange-400">Alyssa AI Solutions</h3>
        <p className="text-sm text-slate-500">Owensboro, Kentucky · AI Automation for Local Service Businesses</p>
        <a
          href="mailto:alyssaboehman098@gmail.com"
          className="mt-3 inline-block text-sm text-slate-400 transition hover:text-orange-300"
        >
          alyssaboehman098@gmail.com
        </a>
      </footer>
    </main>
  );
}