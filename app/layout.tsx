import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Alyssa AI Solutions | AI Chat & Lead Follow-Up for Home Service Businesses";
const siteDescription =
  "AI chat, missed-call text-back & instant lead follow-up for HVAC, plumbing, roofing & cleaning companies in the Owensboro, KY area. Free AI audit.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.alyssaautomation.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.alyssaautomation.com",
    siteName: "Alyssa AI Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alyssa AI Solutions",
  url: "https://www.alyssaautomation.com",
  email: "alyssaboehman098@gmail.com",
  description: siteDescription,
  serviceType: "AI chatbot and lead follow-up automation for home service businesses",
  priceRange: "$0 - $499+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Owensboro",
    addressRegion: "KY",
    addressCountry: "US",
  },
  areaServed: "US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of businesses do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in home service businesses — HVAC, plumbing, roofing, cleaning, and contractors — that want more booked jobs and less manual work. We also build the same systems for realtors, dental practices, and insurance agencies.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most automation systems can be implemented within a few days depending on the level of customization needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything is handled for you and designed to be simple, effective, and easy to manage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI Business Audit is free. Launch setup is $499 one time — that covers your AI chatbot, lead response workflow, and calendar booking integration. Growth is a custom monthly plan for deeper automation, quoted on your audit call. No surprises, and you see the full price before you commit to anything.",
      },
    },
    {
      "@type": "Question",
      name: "What happens on the free AI Business Audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's a 30-minute call where we review your website, your lead flow, and your after-hours coverage, and show you exactly where jobs are leaking. You get a practical roadmap either way — if we're a fit, we'll talk about building it; if we're not, the roadmap is yours to keep.",
      },
    },
    {
      "@type": "Question",
      name: "Will this work with my current website and tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The chat and follow-up system bolt onto your existing website and calendar — nothing to rebuild and no platforms to switch. If your customers can find you today, this makes sure none of them slip away.",
      },
    },
    {
      "@type": "Question",
      name: "I already have someone answering calls / a chat on my site. Is this still useful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If it's only staffed during business hours, yes. Most missed jobs happen after hours and on weekends, when homeowners with a burst pipe or a dead AC won't wait until morning. This system answers in under a minute, 24/7, and keeps following up until they book.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a long-term contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Start with the free audit and the one-time Launch setup. If you want ongoing help, Growth support is month-to-month — you stay because it's working, not because a contract says you have to.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from me to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One 30-minute call and access to your website and calendar. Alyssa handles the setup from there, and most systems are live within a few days.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns my leads and customer data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do, always. The system runs on your accounts, your leads and customer data stay yours, and they're never sold or shared.",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
