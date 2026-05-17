import Link from 'next/link'
import { ArrowLeft, Clock, Eye, Tag, Share2, TrendingUp } from 'lucide-react'
import { samplePosts } from '@/data/sample'
import Newsletter from '@/components/Newsletter'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return samplePosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = samplePosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = samplePosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = samplePosts.filter((p) => p.slug !== slug).slice(0, 2)

  const categoryColors: Record<string, string> = {
    news: 'bg-accent text-black',
    tool: 'bg-secondary text-white',
    guide: 'bg-primary text-white',
    opinion: 'bg-accent-2 text-white',
  }

  const categoryLabels: Record<string, string> = {
    news: 'News',
    tool: 'Tool',
    guide: 'Guide',
    opinion: 'Opinion',
  }

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        {post.coverImage ? (
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-sm text-muted-foreground hover:text-foreground mb-6 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Overview
        </Link>

        {/* Header */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </span>
            {post.isFeatured && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                <TrendingUp className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span>By {post.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()} Views
            </span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <button className="ml-auto flex items-center gap-1 px-3 py-1.5 rounded-lg bg-card border border-border hover:bg-background transition-all">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-full border border-border"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-foreground prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
              prose-strong:text-foreground
              prose-ul:my-6 prose-li:text-muted-foreground
              prose-hr:border-border
              [&_p]:mb-6 [&_ul]:space-y-2 [&_li]:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-bold mb-6 gradient-text">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/post/${related.slug}`}
                  className="group p-6 rounded-xl bg-card border border-border card-hover"
                >
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter */}
        <div className="mb-16">
          <Newsletter compact />
        </div>
      </div>
    </article>
  )
}
