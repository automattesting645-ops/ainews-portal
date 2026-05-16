'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, TrendingUp, Star, ArrowRight, Zap, Search } from 'lucide-react'
import { sampleTools } from '@/data/sample'

const categories = ['Alle', 'LLM', 'Suche', 'Video', 'Audio', 'Bild', 'Code', 'Automatisierung', 'Marketing']

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = sampleTools.filter((tool) => {
    const matchesCategory = activeCategory === 'Alle' || tool.category === activeCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 mb-4">
            <Sparkles className="w-7 h-7 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">KI-Tools</span> 2026
          </h1>
          <p className="text-lg text-muted-foreground">
            Getestet, bewertet, verglichen. {filteredTools.length} Tools gefunden.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Tool suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Keine Tools gefunden für &quot;{searchQuery}&quot;</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="group block p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                    {tool.name.charAt(0)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {tool.isNew && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold badge-new text-white">NEU</span>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="text-xs px-2 py-1 rounded bg-background border border-border text-muted-foreground">{feature}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(tool.rating) ? 'text-warning fill-warning' : 'text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({tool.reviewCount})</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded font-medium ${
                    tool.pricing === 'free' ? 'bg-success/20 text-success' :
                    tool.pricing === 'freemium' ? 'bg-accent/20 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {tool.pricing === 'free' ? 'Kostenlos' : tool.pricing === 'freemium' ? 'Freemium' : tool.price}
                  </span>
                </div>
                {tool.isTrending && (
                  <div className="mt-3 flex items-center gap-1 text-xs text-accent">
                    <TrendingUp className="w-3 h-3" /> Gerade im Trend
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-border">
          <h2 className="text-2xl font-bold mb-3">Kennst du ein Tool, das hier fehlt?</h2>
          <p className="text-muted-foreground mb-6">Schlag uns ein KI-Tool vor.</p>
          <Link href="/newsletter" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium">
            <Zap className="w-4 h-4" /> Newsletter abonnieren <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
