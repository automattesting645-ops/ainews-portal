import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold gradient-text mb-4">🚧</div>
        <h1 className="text-2xl font-bold mb-2">Diese Seite ist noch in Arbeit...</h1>
        <p className="text-muted-foreground mb-8">
          Diese Seite wird gerade erstellt. Schau bald wieder vorbei – in der Zwischenzeit findest du 
          auf der Startseite alle aktuellen Inhalte.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
          >
            <Home className="w-4 h-4" /> Zur Startseite
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card/80 transition-all font-medium"
          >
            <Search className="w-4 h-4" /> Neueste Artikel
          </Link>
        </div>
      </div>
    </div>
  )
}