'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, X, ArrowRight, ExternalLink, FileText, Wrench, Video, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { samplePosts, sampleTools, sampleGuides, sampleVideos } from '@/data/sample'

interface SearchResult {
  title: string
  href: string
  type: 'post' | 'tool' | 'guide' | 'video'
  excerpt?: string
}

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const q = query.toLowerCase()

    const all: SearchResult[] = [
      ...samplePosts.map(p => ({ title: p.title, href: `/post/${p.slug}`, type: 'post' as const, excerpt: p.excerpt })),
      ...sampleTools.map(t => ({ title: t.name, href: `/tools/${t.slug}`, type: 'tool' as const, excerpt: t.tagline })),
      ...(sampleGuides || []).map(g => ({ title: g.title, href: `/guides/${g.slug}`, type: 'guide' as const, excerpt: g.excerpt })),
      ...sampleVideos.map(v => ({ title: v.title, href: `/videos`, type: 'video' as const })),
    ]

    setResults(
      all
        .filter(item => item.title.toLowerCase().includes(q) || (item.excerpt && item.excerpt.toLowerCase().includes(q)))
        .slice(0, 12)
    )
  }, [query])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  const iconMap = {
    post: FileText,
    tool: Wrench,
    guide: BookOpen,
    video: Video,
  }

  const typeLabel = {
    post: 'Article',
    tool: 'Tool',
    guide: 'Guide',
    video: 'Video',
  }

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={onClose} />
      <div className="relative max-w-2xl mx-auto px-4 pt-24">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, tools, guides & videos..."
            className="w-full pl-14 pr-14 py-5 text-lg bg-card border-2 border-primary/30 rounded-2xl focus:border-primary outline-none transition-colors"
          />
          <button
            onClick={onClose}
            className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-background transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-4 bg-card border border-border rounded-2xl overflow-hidden max-h-[60vh] overflow-y-auto">
            {results.map((result, i) => {
              const Icon = iconMap[result.type]
              return (
                <Link
                  key={`${result.type}-${i}`}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-start gap-4 p-4 hover:bg-background/50 transition-colors border-b border-border last:border-0 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-card border border-border text-muted-foreground">
                        {typeLabel[result.type]}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">{result.title}</h4>
                    {result.excerpt && (
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{result.excerpt}</p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )
            })}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
          </div>
        )}
      </div>
    </div>
  )
}