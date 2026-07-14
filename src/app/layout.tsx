import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "AI-n_sights Portal – Local AI Tests, Tools & Guides",
    template: "%s | AI-n_sights"
  },
  description: "Ehrliche Tests lokaler KI-Tools. AnythingLLM, Ollama, OpenCode & mehr. Wöchentliche YouTube-Videos + Schritt-für-Schritt-Guides.",
  keywords: ["AI Tools", "Local AI", "Open Source AI", "AnythingLLM", "Ollama", "AI News", "AI Videos", "YouTube AI"],
  authors: [{ name: "AI-n_sights", url: "https://youtube.com/@AI-n_sights" }],
  creator: "AI-n_sights",
  publisher: "AI-n_sights",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://ai-news-portal.netlify.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI-n_sights Portal – Local AI Tests, Tools & Guides",
    description: "Ehrliche Tests lokaler KI-Tools. AnythingLLM, Ollama, OpenCode & mehr.",
    type: "website",
    locale: "de_DE",
    siteName: "AI-n_sights Portal",
    url: "https://ai-news-portal.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-n_sights Portal – Local AI Tests, Tools & Guides",
    description: "Ehrliche Tests lokaler KI-Tools. AnythingLLM, Ollama, OpenCode & mehr.",
    site: "@Ai_Ne_ws",
    creator: "@Ai_Ne_ws",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI-n_sights Portal",
  url: "https://ai-news-portal.netlify.app",
  logo: "https://ai-news-portal.netlify.app/logo.png",
  sameAs: ["https://youtube.com/@AI-n_sights", "https://x.com/Ai_Ne_ws"],
  description: "Local AI Tests, Tools & Guides von AI-n_sights.",
  founder: { "@type": "Person", name: "AI-n_sights", url: "https://youtube.com/@AI-n_sights" }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI-n_sights Portal",
  url: "https://ai-news-portal.netlify.app",
  description: "Local AI Tests, Tools & Guides.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full antialiased bg-background">
      <head>
        <Script id="schema-organization" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script id="schema-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
