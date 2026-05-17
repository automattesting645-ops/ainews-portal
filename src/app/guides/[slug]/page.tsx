import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, Tag, Sparkles, ExternalLink, Video } from 'lucide-react'
import { sampleGuides } from '@/data/sample'
import { notFound } from 'next/navigation'
import Newsletter from '@/components/Newsletter'
import AffiliateNotice from '@/components/AffiliateNotice'

export function generateStaticParams() {
  return sampleGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const guide = sampleGuides.find((g) => g.slug === slug)
  if (!guide) return { title: 'Not Found' }
  return { title: `${guide.title} | AI News`, description: guide.excerpt }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const guide = sampleGuides.find((g) => g.slug === slug)
  if (!guide) notFound()

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/guides" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground mb-6 transition-all">
          <ArrowLeft className="w-4 h-4" /> All Guides
        </Link>

        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              guide.level === 'Beginner' ? 'bg-success/20 text-success' :
              guide.level === 'Intermediate' ? 'bg-accent/20 text-accent' :
              'bg-secondary/20 text-secondary'
            }`}>{guide.level}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {guide.readTime} min
            </span>
            {guide.isNew && (
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold badge-new text-white">NEW</span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{guide.excerpt}</p>

          <div dangerouslySetInnerHTML={{ __html: guide.content }} className="guide-content prose-custom" />

          {guide.videoId && (
            <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Matching YouTube Video</h3>
                  <p className="text-sm text-muted-foreground mb-3">Check out the video version of this guide:</p>
                  <a
                    href={`https://youtu.be/${guide.videoId}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> Watch Video
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {guide.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-background border border-border text-muted-foreground">{tag}</span>
            ))}
          </div>

          <div className="mt-10">
            <AffiliateNotice />
          </div>
        </div>

        <div className="mt-12">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}