import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI News - Local AI Tools, Guides & News 2026",
    template: "%s | AI News"
  },
  description: "Honest tests of local AI tools. AnythingLLM, Ollama, OpenCode & more. No cloud, no hype. Weekly YouTube videos + step-by-step guides.",
  keywords: ["AI Tools", "Local AI", "Open Source AI", "AnythingLLM", "Ollama", "AI News", "AI Courses", "AI Agents"],
  authors: [{ name: "AI-n_sights", url: "https://youtube.com/@AI-n_sights" }],
  creator: "AI-n_sights",
  publisher: "AI-n_sights",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://ai-news-portal.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI News - Local AI Tools, Guides & News 2026",
    description: "Honest tests of local AI tools. AnythingLLM, Ollama, OpenCode & more. No cloud, no hype.",
    type: "website",
    locale: "en_US",
    siteName: "AI News",
    url: "https://ai-news-portal.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News - Local AI Tools, Guides & News 2026",
    description: "Honest tests of local AI tools. AnythingLLM, Ollama, OpenCode & more.",
    site: "@Ai_Ne_ws",
    creator: "@Ai_Ne_ws",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI News by AI-n_sights",
  url: "https://ai-news-portal.netlify.app",
  logo: "https://ai-news-portal.netlify.app/logo.png",
  sameAs: [
    "https://youtube.com/@AI-n_sights",
    "https://x.com/Ai_Ne_ws",
  ],
  description: "AI News, tool reviews and guides for local open-source AI.",
  founder: {
    "@type": "Person",
    name: "AI-n_sights",
    url: "https://youtube.com/@AI-n_sights"
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI News",
  url: "https://ai-news-portal.netlify.app",
  description: "AI News, tool reviews and guides for local open-source AI.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ai-news-portal.netlify.app/suche?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
