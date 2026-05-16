import Link from 'next/link'
import { ArrowLeft, Star, ExternalLink, TrendingUp, Sparkles } from 'lucide-react'
import { sampleTools } from '@/data/sample'
import { notFound } from 'next/navigation'
import AffiliateNotice from '@/components/AffiliateNotice'

export function generateStaticParams() {
  return sampleTools.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const tool = sampleTools.find((t) => t.slug === slug)
  if (!tool) return { title: 'Nicht gefunden' }
  return { title: `${tool.name} - KI-Tool Review | AI News`, description: tool.tagline }
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const tool = sampleTools.find((t) => t.slug === slug)
  if (!tool) notFound()

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground mb-6 transition-all">
          <ArrowLeft className="w-4 h-4" /> Alle Tools
        </Link>

        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white">
                {tool.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold">{tool.name}</h1>
                  {tool.isNew && <span className="px-2 py-0.5 rounded-full text-xs font-semibold badge-new text-white">NEU</span>}
                </div>
                <p className="text-muted-foreground">{tool.tagline}</p>
              </div>
            </div>
            <span className={`text-sm px-3 py-1.5 rounded-lg font-medium ${
              tool.pricing === 'free' ? 'bg-success/20 text-success' :
              tool.pricing === 'freemium' ? 'bg-accent/20 text-accent' :
              'bg-muted text-muted-foreground'
            }`}>{tool.pricing === 'free' ? 'Kostenlos' : tool.pricing === 'freemium' ? 'Freemium' : tool.price}</span>
          </div>

          {/* Rating & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(tool.rating) ? 'text-warning fill-warning' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="font-bold text-lg">{tool.rating}</span>
                <span className="text-muted-foreground text-sm">({tool.reviewCount} Bewertungen)</span>
              </div>
              {tool.isTrending && (
                <span className="flex items-center gap-1 text-sm text-accent"><TrendingUp className="w-4 h-4" /> Trending</span>
              )}
            </div>
            <a href={tool.website} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium">
              <ExternalLink className="w-4 h-4" /> Website besuchen
            </a>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Beschreibung</h2>
            <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Features</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {tool.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-xl font-bold mb-3">Kategorien</h2>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-muted-foreground">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <AffiliateNotice />
          </div>
        </div>
      </div>
    </div>
  )
}
