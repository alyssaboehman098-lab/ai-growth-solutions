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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
