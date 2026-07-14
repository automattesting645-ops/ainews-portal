import type { MetadataRoute } from 'next'
import { samplePosts, sampleTools, sampleVideos } from '@/data/sample'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: 'https://ai-news-portal.netlify.app', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: 'https://ai-news-portal.netlify.app/news', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: 'https://ai-news-portal.netlify.app/tools', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://ai-news-portal.netlify.app/videos', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://ai-news-portal.netlify.app/guides', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: 'https://ai-news-portal.netlify.app/newsletter', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },

    { url: 'https://ai-news-portal.netlify.app/kurs', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://ai-news-portal.netlify.app/impressum', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.1 },
    { url: 'https://ai-news-portal.netlify.app/datenschutz', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.1 },
    { url: 'https://ai-news-portal.netlify.app/agb', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.1 },
  ]

  const postPages = samplePosts.map((post) => ({
    url: `https://ai-news-portal.netlify.app/post/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const toolPages = sampleTools.map((tool) => ({
    url: `https://ai-news-portal.netlify.app/tools/${tool.slug}`,
    lastModified: new Date(tool.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...postPages, ...toolPages]
}