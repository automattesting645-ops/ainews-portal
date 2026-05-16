'use client'

import Link from 'next/link'
import { Sparkles, Globe, MessageCircle, Video, Camera, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'News', href: '/news' },
    { label: 'Tools', href: '/tools' },
    { label: 'Guides', href: '/guides' },
    { label: 'Videos', href: '/videos' },
    { label: 'Newsletter', href: '/newsletter' },
  ]

  const resources = [
    { label: 'KI-Glossar', href: '/glossar' },
    { label: 'Tool-Vergleich', href: '/tools' },
    { label: 'Kurs: KI Mastery', href: '/kurs' },
    { label: 'Blog', href: '/news' },
  ]

  const socials = [
    { icon: Video, href: 'https://youtube.com/@AI-n_sights', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://x.com/Ai_Ne_ws', label: 'X / Twitter' },
    { icon: Camera, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold gradient-text">AI News</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Tägliche KI-News, ehrliche Tool-Reviews und Guides. Kein Hype, nur Wert.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Schnellzugriff
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Ressourcen
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Mini */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Keine News verpassen
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Erhalte die besten KI-Tools direkt in deine Inbox.
            </p>
            <form
              action="#"
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Deine E-Mail"
                className="px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="btn-primary px-4 py-2.5 rounded-lg text-sm font-medium text-white"
              >
                Kostenlos abonnieren
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AI News. Kein Investment-, Steuer- oder Rechtsberatung.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-foreground transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
