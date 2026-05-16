'use client'

import { useEffect, useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

const CHANNEL_ID = 'UCejmFGPNX4T6tGV-0tf2xIw'
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

interface LatestVideoData {
  title: string
  videoId: string
  thumbnail: string
}

export default function LatestVideo() {
  const [video, setVideo] = useState<LatestVideoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false

    async function fetchLatest() {
      try {
        const res = await fetch(RSS_URL, { signal: controller.signal })
        const xml = await res.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(xml, 'text/xml')
        const entry = doc.querySelector('entry')
        if (!entry) { setLoading(false); return }

        const title = entry.querySelector('title')?.textContent || ''
        const videoId = entry.querySelector('yt\\:videoId')?.textContent
          || entry.querySelector('videoId')?.textContent || ''
        const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

        if (!cancelled) {
          setVideo({ title, videoId, thumbnail })
          setLoading(false)
        }
      } catch {
        if (!cancelled) setLoading(false)
      }
    }

    fetchLatest()
    return () => { cancelled = true; controller.abort() }
  }, [])

  if (loading) {
    return (
      <div className="aspect-video rounded-2xl bg-card border border-border animate-pulse flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Lade neustes Video...</div>
      </div>
    )
  }

  if (!video) return null

  return (
    <a
      href={`https://youtu.be/${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-card border border-border overflow-hidden card-hover"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-red-600/30">
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
          <div className="inline-block px-2 py-1 rounded bg-red-600 text-white text-xs font-semibold mb-2">
            NEUESTES VIDEO
          </div>
          <h3 className="text-white font-bold text-lg line-clamp-2">{video.title}</h3>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Jetzt ansehen auf YouTube</span>
        <span className="flex items-center gap-1 text-primary font-medium">
          <ExternalLink className="w-4 h-4" /> Ansehen
        </span>
      </div>
    </a>
  )
}