import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Alyssa AI Solutions | AI Chatbots & Lead Follow-Up for Local Businesses";
const siteDescription =
  "Alyssa AI Solutions in Owensboro, KY builds AI chatbots, instant lead follow-up, and automated booking for local service businesses. Get a free AI audit.";

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
      </body>
    </html>
  );
}
