import Link from 'next/link'
import { BookOpen, ArrowRight, Sparkles, Clock } from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import { sampleGuides } from '@/data/sample'

export const metadata = {
  title: 'AI Guides & Tutorials | AI News',
  description: 'Learn how to use AI tools properly. Step-by-step guides from AI-n_sights.',
}

const levelColors = {
  'Beginner': 'bg-success/20 text-success',
  'Intermediate': 'bg-accent/20 text-accent',
  'Advanced': 'bg-secondary/20 text-secondary',
}

export default function GuidesPage() {
  const categories = [...new Set(sampleGuides.map(g => g.category))]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/20 items-center justify-center mb-4">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-<span className="gradient-text">Guides</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sampleGuides.length} detailed step-by-step guides. From beginner to pro.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs text-muted-foreground mr-2">Categories:</span>
          {categories.map((cat) => (
            <span key={cat} className="text-xs px-3 py-1.5 rounded-full bg-card border border-border">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sampleGuides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="group p-6 rounded-2xl bg-card border border-border card-hover flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColors[guide.level]}`}>
                  {guide.level}
                </span>
                <div className="flex items-center gap-2">
                  {guide.isNew && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold badge-new text-white">NEW</span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {guide.readTime} Min
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex-1">{guide.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{guide.excerpt}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{guide.category}</span>
                <span className="flex items-center gap-1 text-sm text-primary font-medium">
                  Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Newsletter />
      </div>
    </div>
  )
}