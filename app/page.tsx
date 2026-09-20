const services = [
  {
    title: "AI Chatbots",
    description:
      "Capture and qualify leads around the clock with an AI assistant that responds instantly and converts more visitors into booked calls.",
  },
  {
    title: "Lead Follow-Up",
    description:
      "Automatically follow up by email and SMS so prospects stay engaged and no valuable lead slips through the cracks.",
  },
  {
    title: "Appointment Booking",
    description:
      "Reduce friction with automated scheduling so customers can book without the back-and-forth of manual coordination.",
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline internal tasks, reduce admin work, and help your team focus on high-value work that grows revenue.",
  },
];

const steps = [
  {
    title: "1. Free AI Audit",
    description:
      "We review your website, lead process, and customer journey to uncover the biggest opportunities for automation.",
  },
  {
    title: "2. Growth Roadmap",
    description:
      "You get a clear action plan tailored to your business model, existing systems, and revenue goals.",
  },
  {
    title: "3. Implementation",
    description:
      "If it makes sense to move forward, we help you implement the highest-impact tools and workflows for growth.",
  },
];

const pricing = [
  {
    name: "Audit",
    price: "$0",
    description: "Find the lead leaks and automation opportunities costing your business time and revenue.",
    features: ["Website and funnel review", "Lead flow assessment", "Prioritized action plan"],
    highlighted: false,
  },
  {
    name: "Launch",
    price: "$499",
    description: "A focused setup for local service businesses ready to capture, follow up, and book more leads.",
    features: ["AI chatbot setup", "Lead response workflow", "Calendar booking integration"],
    highlighted: true,
  },
  {
    name: "Growth",
    price: "Custom",
    description: "A tailored system for businesses ready for deeper automation and ongoing optimization.",
    features: ["Custom workflow design", "Multi-step follow-up", "Monthly support and optimization"],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Realtors, home service companies, dentists, insurance agencies, and other local businesses that want more leads and less manual work.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most automation systems can be implemented within a few days depending on the level of customization needed.",
  },
  {
    question: "Do I need technical experience?",
    answer: "No. Everything is handled for you and designed to be simple, effective, and easy to manage.",
  },
];

const stats = [
  { value: "24/7", label: "Lead response" },
  { value: "Faster", label: "Follow-up" },
  { value: "More", label: "Qualified calls" },
];

const benefits = [
  {
    title: "Fewer missed opportunities",
    description: "Capture inquiries instantly and keep conversations moving even when your team is busy.",
  },
  {
    title: "More time back in your day",
    description: "Automate repetitive tasks so you can focus on sales, service, and growth instead of admin work.",
  },
  {
    title: "Better conversion flow",
    description: "Turn visitors into booked calls with smarter capture, follow-up, and scheduling systems.",
  },
  {
    title: "Built for real businesses",
    description: "Solutions designed around local service businesses that need results without complexity.",
  },
];

const testimonials = [
  {
    quote:
      "Alyssa helped us fix our lead flow and reply faster than ever. It felt like we finally had a system instead of chaos.",
    name: "Sarah M.",
    role: "Business Owner",
  },
  {
    quote:
      "The automation was simple to implement and immediately made our process more efficient. We stopped missing opportunities right away.",
    name: "Derek T.",
    role: "Service Company Founder",
  },
  {
    quote:
      "We were overwhelmed with leads and manual follow-up. Alyssa built a better process that helped us respond faster and book more calls.",
    name: "Angela R.",
    role: "Marketing Director",
  },
];

const clientLogos = ["Realtor Group", "BlueWave Homes", "Crest Dental", "Summit Services", "Clarity Insurance"];

const engagementSteps = [
  {
    title: "Start with a free audit",
    description: "Book a 30-minute call and we will identify where leads, follow-up, or booking are breaking down.",
  },
  {
    title: "Launch one high-impact fix",
    description: "Begin with a focused $499 setup that solves the most expensive bottleneck first.",
  },
  {
    title: "Keep improving monthly",
    description: "Add ongoing support as your business grows, with new workflows and optimization when you need them.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3 text-xl font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-slate-950">
              A
            </span>
            <span className="text-cyan-400">Alyssa AI Solutions</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="https://calendly.com/alyssaboehman098/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 sm:px-5"
          >
            Book a Call
          </a>
        </div>
      </nav>

      <section id="top" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              AI Automation for Local Service Businesses
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Stop Losing Leads to Slow Follow-Up
              <span className="block text-cyan-400">and Manual Work</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0 lg:text-lg">
              Get a free AI Business Audit and a practical roadmap to capture more inquiries,
              respond faster, and turn more conversations into booked appointments.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://calendly.com/alyssaboehman098/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
              >
                Claim My Free AI Audit
              </a>
              <a
                href="#services"
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 lg:justify-start">
              <span>✔ Free 30-minute audit</span>
              <span>✔ Built for local service businesses</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-950/40 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Business Snapshot</p>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                Live opportunities
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Response time</p>
                <p className="mt-2 text-3xl font-black text-cyan-400">Instant</p>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-950 p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Lead capture</span>
                  <span className="font-semibold text-white">94%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[94%] rounded-full bg-cyan-500" />
                </div>

                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Follow-up speed</span>
                  <span className="font-semibold text-white">2 min</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[85%] rounded-full bg-cyan-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm text-slate-200">
                “Most businesses lose leads because they respond too slowly or not at all.”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-8">
          <div className="grid gap-4 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card rounded-2xl bg-slate-950/60 p-5">
                <div className="text-3xl font-black text-cyan-400 tabular-nums">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Trusted by growing local brands
          </p>
          <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold text-slate-300 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.map((logo) => (
              <div key={logo} className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-4 tracking-wide">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why choose us</p>
          <h2 className="text-3xl font-black sm:text-4xl">A smart system built for growth, not guesswork</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-lg font-bold text-cyan-300">
                ✓
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Results</p>
          <h2 className="text-3xl font-black sm:text-4xl">What business owners are saying</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-5 flex gap-1 text-cyan-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`${testimonial.name}-${index}`}>★</span>
                ))}
              </div>
              <p className="mb-5 text-base leading-relaxed text-slate-200">“{testimonial.quote}”</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
          <h2 className="text-3xl font-black sm:text-4xl">Automation that saves time and converts more leads</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/30">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-300">
                ✦
              </div>
              <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Process</p>
          <h2 className="text-3xl font-black sm:text-4xl">A simple path from missed leads to more booked calls</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-3 text-2xl font-bold text-cyan-400">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How to get started</p>
          <h2 className="text-3xl font-black sm:text-4xl">A clear path to your first automation win</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            No long-term commitment is required to begin. We start with one measurable problem and build from there.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {engagementSteps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
          <h2 className="text-3xl font-black sm:text-4xl">Choose a path that fits your business</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 ${
                plan.highlighted
                  ? "border-cyan-400 bg-cyan-500/5 shadow-xl shadow-cyan-500/10"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.highlighted ? (
                  <span className="rounded-full bg-cyan-500 px-2.5 py-1 text-xs font-semibold text-slate-950">
                    Most Popular
                  </span>
                ) : null}
              </div>

              <div className="mb-4 text-4xl font-black text-white">{plan.price}</div>
              <p className="mb-5 text-slate-300">{plan.description}</p>

              <ul className="space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-cyan-300">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/alyssaboehman098/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-cyan-500 text-white hover:bg-cyan-600"
                    : "border border-slate-700 bg-slate-950 text-white hover:border-cyan-400 hover:text-cyan-300"
                }`}
              >
                {plan.name === "Audit" ? "Book My Audit" : "Talk to Alyssa"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
              <h2 className="text-3xl font-black sm:text-4xl">Let&apos;s build a smarter growth system for your business</h2>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                If you&apos;re tired of missed leads, manual follow-up, and repetitive admin work, let&apos;s find the first workflow worth fixing.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
                  <p className="mt-1 text-base text-white">Owensboro, Kentucky</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                  <a href="mailto:alyssaboehman098@gmail.com" className="mt-1 inline-block text-base text-cyan-300 hover:text-cyan-200">
                    alyssaboehman098@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Availability</p>
                  <p className="mt-1 text-base text-white">Book a quick 30-minute strategy call</p>
                </div>
              </div>

              <a
                href="https://calendly.com/alyssaboehman098/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-cyan-500 px-5 py-3.5 font-semibold text-white transition hover:bg-cyan-600"
              >
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-black sm:text-4xl">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="mb-2 text-lg font-bold">{item.question}</h3>
              <p className="text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-5 text-3xl font-black sm:text-5xl">
            Ready to stop losing leads?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Book your free AI Business Audit and leave with a clear next step for more leads, faster follow-up, and better booking.
          </p>
          <a
            href="https://calendly.com/alyssaboehman098/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-base font-bold text-white transition hover:bg-cyan-600"
          >
            Claim My Free AI Audit
          </a>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-700 bg-slate-950/95 p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md sm:hidden">
        <a
          href="https://calendly.com/alyssaboehman098/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 text-base font-bold text-white"
        >
          Claim My Free AI Audit
        </a>
      </div>

      <footer className="border-t border-slate-800 py-10 text-center">
        <h3 className="mb-2 text-xl font-bold text-cyan-400">Alyssa AI Solutions</h3>
        <p className="text-slate-400">Owensboro, Kentucky</p>
        <a href="mailto:alyssaboehman098@gmail.com" className="mt-2 inline-block text-slate-400 transition hover:text-cyan-300">
          alyssaboehman098@gmail.com
        </a>
      </footer>
    </main>
  );
}
