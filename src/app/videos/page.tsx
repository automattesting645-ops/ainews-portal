'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Video, Clock, ExternalLink, Search, ChevronDown, ArrowRight, Zap, TrendingUp } from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import { sampleVideos } from '@/data/sample'

const categories = ['All', 'Tool', 'Guide', 'News', 'Test']
const INITIAL_SHOW = 3
const LOAD_MORE = 6

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW)

  const filteredVideos = useMemo(() => {
    return sampleVideos.filter((video) => {
      const matchesCategory = activeCategory === 'All' || video.category === activeCategory
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const displayedVideos = useMemo(() => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      result.push(filteredVideos[i % filteredVideos.length])
    }
    return result
  }, [filteredVideos, visibleCount])

  const handleShowMore = () => {
    setVisibleCount(prev => prev + LOAD_MORE)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-red-500/20 items-center justify-center mb-4">
            <Video className="w-7 h-7 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Videos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Weekly videos about local AI, open-source tools & more.<br />
            <Link href="https://youtube.com/@AI-n_sights" className="text-primary hover:text-accent">@AI-n_sights</Link>
          </p>
        </div>

        {/* Social Proof + Funnel */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-sm hover:bg-red-500/20 transition-all">
            <TrendingUp className="w-4 h-4 text-red-500" />
            <span className="text-red-400 font-semibold">Subscribe on YouTube</span>
            <span className="text-xs text-muted-foreground">+ new weekly</span>
          </a>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setVisibleCount(INITIAL_SHOW)
            }}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(INITIAL_SHOW) }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedVideos.map((video, index) => (
            <a
              key={`${video.id}-${index}`}
              href={`https://youtu.be/${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-card border border-border overflow-hidden card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/sddefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-xs backdrop-blur-sm">
                  {video.duration}
                </span>
                {video.isNew && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold badge-new text-white">
                    NEW
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur-sm">
                  {video.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{video.duration}</span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <ExternalLink className="w-3 h-3" />Watch
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No videos found for &quot;{searchQuery}&quot;</p>
          </div>
        ) : (
          <div className="text-center mb-12">
            <button
              onClick={handleShowMore}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-all font-medium text-sm"
            >
              Load More Videos
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* YouTube CTA - Scarcity + Social Proof */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-primary/10 border border-red-500/20 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold mb-4">
            <TrendingUp className="w-3 h-3" /> +120% Growth this month
          </div>
          <h2 className="text-2xl font-bold mb-2">Don't miss any more videos</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            New tests, tools and tutorials every week. <span className="text-foreground font-semibold">Subscribe now and never miss an upload.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://youtube.com/@AI-n_sights?sub_confirmation=1"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold glow-hover"
            >
              <Video className="w-5 h-5" />
              Subscribe on YouTube
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-card/80 transition-all text-sm"
            >
              <Zap className="w-4 h-4 text-accent" />
              Newsletter + exclusive tips
            </Link>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  )
}
