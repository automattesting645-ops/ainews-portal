'use client'

import { Video, ArrowRight, Zap, Clock } from 'lucide-react'
import Link from 'next/link'
import { sampleVideos } from '@/data/sample'
import { VideoEntry } from '@/types'

function generateVideoHook(v: VideoEntry) {
  const cat = (v.category || '').toLowerCase()
  if (cat === 'tool') return `In diesem Video teste ich ${v.title} und zeige dir, wie du es lokal einsetzen kannst. Schritt-für-Schritt- Setup inklusive.`
  if (cat === 'guide') return `Lerne in diesem Guide, wie du ${v.title.toLowerCase()}. Praktische Beispiele und klare Anleitungen für deine lokale KI-Umgebung.`
  if (cat === 'news') return `Die wichtigsten Neuigkeiten zu ${v.title.toLowerCase()}. Ich fasse zusammen, was du wissen musst – und was das für deine lokale KI bedeutet.`
  return `In diesem Video: ${v.title}. Jede Woche neue Tests und Einblicke in die Welt der lokalen, Open-Source-KI.`
}

function VideoShowcase({ video, index }: { video: VideoEntry; index: number }) {
  const isOdd = index % 2 === 1
  const tag = video.tags && video.tags.length ? video.tags : [video.category || 'Video']

  return (
    <section className={`showcase-section${isOdd ? ' showcase-alt' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="showcase-grid">
          <div className={`showcase-image${isOdd ? ' order-2' : ''}`}>
            <a href={`https://youtu.be/${video.youtubeId}`} target="_blank" className="showcase-image-inner" rel="noreferrer">
              <img
                src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                loading={index < 2 ? 'eager' : 'lazy'}
                onError={(e) => { (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` }}
              />
              <div className="showcase-overlay" />
              <div className="showcase-play">
                <div className="showcase-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.5rem', height: '1.5rem', color: 'white', marginLeft: '0.125rem' }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </a>
            <div className="showcase-label">{video.isNew ? 'NEW' : video.category}</div>
          </div>
          <div className={isOdd ? 'order-1' : ''}>
            <div className="showcase-tags">
              {tag.map((t, i) => <span key={i} className="showcase-tag">{t}</span>)}
            </div>
            <h2 className="showcase-title">{video.title}</h2>
            <p className="showcase-text">{generateVideoHook(video)}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                <Clock className="w-3 h-3 inline" /> {video.duration}
              </span>
            </div>
            <a href={`https://youtu.be/${video.youtubeId}`} target="_blank" className="btn-neon blue" rel="noreferrer">
              <Video className="w-4 h-4" />
              Video ansehen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function VideosPage() {
  const videos = sampleVideos || []

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="hero" style={{ padding: '5rem 0 3rem' }}>
        <div className="hero-bg-grid" />
        <div className="hero-blur-1" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot">
              <span className="badge-dot-inner" />
              <span className="badge-dot-ping" />
            </span>
            YouTube: @AI-n_sights · {videos.length} Videos
          </div>
          <h1 className="hero-title">
            <span className="metallic-text">Alle Videos</span>
            <span style={{ color: 'var(--muted-foreground)', fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
              Tests · Guides · News
            </span>
          </h1>
          <p className="hero-sub">
            Wöchentlich neue Videos zu lokalen KI-Tools, Open-Source-Modellen und praktischen Guides.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold metallic-text">17</div>
              <div className="text-xs text-muted-foreground">Abonnenten</div>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl font-bold metallic-text">30</div>
              <div className="text-xs text-muted-foreground">Videos</div>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl font-bold metallic-text">2.354</div>
              <div className="text-xs text-muted-foreground">Aufrufe</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
              className="btn-neon blue" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }} rel="noreferrer">
              <Video className="w-5 h-5" />
              YouTube abonnieren
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* VIDEO SHOWCASE */}
      {videos.map((v, i) => (
        <VideoShowcase key={v.id} video={v} index={i} />
      ))}

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="cta-title">
            Kein Video mehr <span className="metallic-text">verpassen</span>?
          </h2>
          <p className="cta-sub">
            Abonniere meinen YouTube-Kanal und bekomme jede Woche die neuesten lokalen AI-Tests direkt auf deine Startseite.
          </p>
          <div className="cta-actions">
            <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
              className="btn-neon blue" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }} rel="noreferrer">
              <Video className="w-5 h-5" />
              YouTube abonnieren
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
