export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string | null
  category: 'news' | 'tool' | 'guide' | 'opinion'
  tags: string[]
  author: string
  publishedAt: string
  updatedAt: string
  isFeatured: boolean
  isNew: boolean
  readTime: number
  views: number
  seoTitle: string | null
  seoDescription: string | null
}

export interface AITool {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  logo: string | null
  category: string
  website: string
  pricing: 'free' | 'freemium' | 'paid' | 'enterprise'
  price: string | null
  features: string[]
  tags: string[]
  rating: number
  reviewCount: number
  isNew: boolean
  isTrending: boolean
  publishedAt: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  name: string | null
  interests: string[] | null
  subscribedAt: string
  isActive: boolean
}

export interface ContentWorkflow {
  id: string
  title: string
  platform: 'youtube' | 'tiktok' | 'instagram' | 'blog'
  status: 'draft' | 'scheduled' | 'published' | 'failed'
  scheduledAt: string | null
  publishedAt: string | null
  content: any
  metrics: {
    views?: number
    likes?: number
    comments?: number
    shares?: number
  } | null
  createdAt: string
}

export interface VideoEntry {
  id: string
  title: string
  youtubeId: string
  duration: string
  category: string
  tags: string[]
  isNew: boolean
  publishedAt: string
}

export interface GuideEntry {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  readTime: number
  publishedAt: string
  isNew: boolean
  coverImage: string | null
  videoId?: string | null
}

export interface LocalAIModel {
  name: string
  provider: string
  size: string
  strength: string
  useCases: string
  topPick: boolean
  source: string
}

export interface AINewsUpdate {
  date: string
  title: string
  summary: string
}
