'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Tag } from 'lucide-react'
import { samplePosts } from '@/data/sample'
import BlogCard from '@/components/BlogCard'
import Newsletter from '@/components/Newsletter'

const categories = ['All', 'Google', 'Open Source', 'Local AI', 'Agents', 'Coding', 'Hardware', 'Guide']

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    return samplePosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' ||
        post.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const featuredPosts = filteredPosts.filter(p => p.isFeatured)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI News</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {samplePosts.length} articles about local AI, open-source tools & more. Updated daily.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
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
              {cat !== 'All' && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({samplePosts.filter(p => p.tags.some(t => t.toLowerCase().includes(cat.toLowerCase()))).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No articles found for &quot;{searchQuery}&quot;</p>
          </div>
        ) : (
          <>
            {featuredPosts.length > 0 && (
              <div className="mb-10">
                {featuredPosts.slice(0, 1).map(post => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                All Articles <span className="text-muted-foreground text-sm font-normal">({filteredPosts.length})</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        <div className="mb-16">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
