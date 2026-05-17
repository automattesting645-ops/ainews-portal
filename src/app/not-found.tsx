import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold gradient-text mb-4">🚧</div>
        <h1 className="text-2xl font-bold mb-2">This page is still being worked on...</h1>
        <p className="text-muted-foreground mb-8">
          This page is currently being created. Check back soon - in the meantime, find all current content on the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card/80 transition-all font-medium"
          >
            <Search className="w-4 h-4" /> Latest Articles
          </Link>
        </div>
      </div>
    </div>
  )
}