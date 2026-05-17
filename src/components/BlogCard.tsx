import Link from 'next/link'
import { Clock, Eye, TrendingUp, Tag } from 'lucide-react'
import type { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
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

  if (featured) {
    return (
      <Link
        href={`/post/${post.slug}`}
        className="group block relative overflow-hidden rounded-2xl bg-card border border-border card-hover"
      >
        {/* Image */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </span>
            {post.isFeatured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold badge-new text-white flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()} Views
              </span>
            </div>
            <span className="text-xs">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/post/${post.slug}`}
      className="group block overflow-hidden rounded-xl bg-card border border-border card-hover"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80" />
        )}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
        </div>
        {post.isNew && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold badge-new text-white">
              NEU
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {post.views.toLocaleString()}
            </span>
          </div>
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
    </Link>
  )
}
