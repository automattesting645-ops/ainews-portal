import Link from 'next/link'
import { Zap, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-bold">AI-n_sights</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Local AI Tests, Tools & Guides. Wöchentlich neue YouTube-Videos.
              Kein Cloud-Hype, nur echte Open-Source-Ergebnisse.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href="https://youtube.com/@AI-n_sights" target="_blank"
                 className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://x.com/Ai_Ne_ws" target="_blank"
                 className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Seiten</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Videos', href: '/videos' },
                { label: 'News', href: '/news' },
                { label: 'Tools', href: '/tools' },
                { label: 'Guides', href: '/guides' },
              ].map(link => (
                <Link key={link.href} href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Ressourcen</h4>
            <div className="flex flex-col gap-2">
              <a href="https://youtube.com/@AI-n_sights" target="_blank"
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors">YouTube Kanal</a>
              <Link href="/kurs"
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kurs</Link>
              <Link href="/newsletter"
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors">Newsletter</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Rechtliches</h4>
            <div className="flex flex-col gap-2">
              <Link href="/impressum"
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impressum</Link>
              <Link href="/datenschutz"
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors">Datenschutz</Link>
              <Link href="/agb"
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors">AGB</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} AI-n_sights. Keine Anlage-, Steuer- oder Rechtsberatung.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ❤️ for the open-source AI community
          </p>
        </div>
      </div>
    </footer>
  )
}
