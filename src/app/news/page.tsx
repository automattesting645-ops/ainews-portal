'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Tag, Zap, ArrowRight, TrendingUp, Globe, Wrench, Eye, Clock, FileText } from 'lucide-react'
import { samplePosts, localAIModels, aiNewsUpdates } from '@/data/sample'
import BlogCard from '@/components/BlogCard'
import Newsletter from '@/components/Newsletter'
import { LocalAIModel, AINewsUpdate } from '@/types'

const categories = ['All', 'Google', 'Open Source', 'Local AI', 'Agents', 'Coding', 'Hardware', 'Guide']

function ModelCard({ model, index }: { model: LocalAIModel; index: number }) {
  const isOdd = index % 2 === 1
  return (
    <div className={`model-card${isOdd ? ' model-card-alt' : ''}`}>
      <div className="model-card-header">
        <div className="model-card-icon">{model.name.charAt(0)}</div>
        <div>
          <div className="model-card-name">{model.name}</div>
          <div className="model-card-provider">{model.provider} · {model.size}</div>
        </div>
        {model.topPick && <span className="model-card-badge">Top Pick</span>}
      </div>
      <div className="model-card-strength">
        <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
        <span>{model.strength}</span>
      </div>
      <div className="model-card-use">
        <ArrowRight className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
        <span>{model.useCases}</span>
      </div>
    </div>
  )
}

function NewsBlogItem({ update }: { update: AINewsUpdate }) {
  return (
    <div className="news-blog-item">
      <div className="news-blog-date">{new Date(update.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
      <div className="news-blog-content">
        <h3 className="news-blog-title">{update.title}</h3>
        <p className="news-blog-summary">{update.summary}</p>
      </div>
    </div>
  )
}

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

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="hero" style={{ padding: '5rem 0 3rem' }}>
        <div className="hero-bg-grid" />
        <div className="hero-content" style={{ maxWidth: '80rem' }}>
          <h1 className="hero-title">
            <span className="metallic-text">AI News</span>
            <span style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem', color: 'var(--muted-foreground)' }}>
              Live-Blog · Modelle · Analysen
            </span>
          </h1>
          <p className="hero-sub">
            Die wichtigsten KI-Ereignisse weltweit. Von mir kuratiert, kommentiert und mit YouTube-Videos ergänzt.
          </p>
        </div>
      </section>

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* LIVE BLOG */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-heading"><span className="neon-blue">Live</span> AI News</h2>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
              <span className="badge-dot" style={{ transform: 'scale(0.7)' }}>
                <span className="badge-dot-inner" />
                <span className="badge-dot-ping" />
              </span>
              Live aktualisiert
            </span>
          </div>
          <div className="news-blog">
            {aiNewsUpdates.map((u) => (
              <NewsBlogItem key={u.date + u.title} update={u} />
            ))}
          </div>
        </div>
      </section>

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* BEST LOCAL AI MODELS */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-heading"><span className="neon-green">Beste lokale</span> KI-Modelle</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Von Ollama & Hugging Face</span>
          </div>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
            Die leistungsstärksten Open-Source-KI-Modelle, die du lokal ausführen kannst. Mit Stärken und Top-Einsatzbereichen.
          </p>
          <div className="model-grid">
            {localAIModels.map((m, i) => (
              <ModelCard key={m.name} model={m} index={i} />
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/tools" className="btn-neon green" style={{ display: 'inline-flex' }}>
              <Zap className="w-4 h-4" />
              Alle Tools ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* AI FOR GOOD */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="showcase-grid" style={{ alignItems: 'start' }}>
            <div>
              <div className="showcase-tags"><span className="showcase-tag">Impact</span><span className="showcase-tag">Future</span></div>
              <h2 className="showcase-title" style={{ fontSize: '2rem' }}>Wie KI die <span className="neon-blue">Welt verbessert</span></h2>
              <p className="showcase-text">
                Künstliche Intelligenz ist mehr als nur ein Werkzeug für Effizienzsteigerung. Sie hat das Potenzial, einige der drängendsten Probleme der Menschheit zu lösen – und tut es bereits.
              </p>
            </div>
            <div>
              <div className="news-impact-list">
                {[
                  { icon: <Zap className="w-4.5 h-4.5" />, color: 'rgba(0,255,136,0.15)', iconColor: 'var(--accent)', title: 'Medizin & Gesundheitswesen', desc: 'KI erkennt Krebs früher als jeder Arzt, entdeckt neue Antibiotika in Tagen statt Jahren und personalisiert Behandlungen für jeden Patienten. Lokale KI schützt dabei die sensiblen Patientendaten.' },
                  { icon: <TrendingUp className="w-4.5 h-4.5" />, color: 'rgba(0,212,255,0.15)', iconColor: 'var(--primary)', title: 'Klima & Umwelt', desc: 'KI optimiert Energieverbräuche von Rechenzentren (Google senkte Kühlkosten um 40%), prognostiziert Wetterextreme präziser und hilft bei der Entwicklung neuer Batteriematerialien.' },
                  { icon: <Globe className="w-4.5 h-4.5" />, color: 'rgba(168,85,247,0.15)', iconColor: 'var(--secondary)', title: 'Bildung & Zugang', desc: 'Lokale KI bringt Bildung in Regionen ohne Internetzugang. Personalisierte Nachhilfe für jeden Schüler, Übersetzung von Lehrinhalten in jede Sprache – alles offline und kostenlos.' },
                  { icon: <Wrench className="w-4.5 h-4.5" />, color: 'rgba(255,255,255,0.08)', iconColor: 'var(--foreground)', title: 'Barrierefreiheit', desc: 'KI gibt Blinden ihre Sehkraft zurück (Bildbeschreibung), Tauben Gehör (Echtzeit-Übersetzung von Gebärdensprache) und Gelähmten ihre Stimme (Brain-Computer-Interfaces).' },
                ].map((item, i) => (
                  <div key={i} className="news-impact-item">
                    <div className="news-impact-icon" style={{ background: item.color, color: item.iconColor }}>{item.icon}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <br />
                      <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* AI RISKS */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="showcase-grid" style={{ alignItems: 'start' }}>
            <div>
              <div className="news-impact-list">
                {[
                  { icon: <Eye className="w-4.5 h-4.5" />, title: 'Überwachung & Kontrolle', desc: 'Automatische Gesichtserkennung und Verhaltensanalyse ermöglichen eine Überwachungsdichte, die an Orwells 1984 erinnert. Ohne Regulierung droht der gläserne Mensch.' },
                  { icon: <FileText className="w-4.5 h-4.5" />, title: 'Desinformation & Manipulation', desc: 'KI-generierte Deepfakes sind kaum noch von echten Aufnahmen zu unterscheiden. Ganze Wahlen könnten durch gezielte Desinformationskampagnen beeinflusst werden.' },
                  { icon: <Clock className="w-4.5 h-4.5" />, title: 'Arbeitsplatzverlust', desc: 'Studien prognostizieren, dass bis zu 300 Millionen Arbeitsplätze weltweit durch KI betroffen sein könnten. Besonders betroffen: Übersetzer, Grafiker, Texter und Programmierer.' },
                  { icon: <Wrench className="w-4.5 h-4.5" />, title: 'Alignment & Kontrollverlust', desc: 'Was passiert, wenn eine KI Ziele verfolgt, die nicht mit menschlichen Werten übereinstimmen? Das Alignment-Problem ist die vielleicht größte Herausforderung der KI-Forschung – und ungelöst.' },
                ].map((item, i) => (
                  <div key={i} className="news-impact-item">
                    <div className="news-impact-icon" style={{ background: 'rgba(239,68,68,0.15)', color: 'rgb(239,68,68)' }}>{item.icon}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <br />
                      <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="showcase-tags">
                <span className="showcase-tag" style={{ borderColor: 'rgba(239,68,68,0.3)', color: 'rgb(239,68,68)' }}>Risiko</span>
                <span className="showcase-tag" style={{ borderColor: 'rgba(239,68,68,0.3)', color: 'rgb(239,68,68)' }}>Warnung</span>
              </div>
              <h2 className="showcase-title" style={{ fontSize: '2rem' }}>
                Wohin <span style={{ color: 'rgb(239,68,68)' }}>unkontrollierte KI</span> führen kann
              </h2>
              <p className="showcase-text">
                KI ist nicht per se gut oder böse – sie ist ein Werkzeug. Aber ein Werkzeug dieser Macht verdient höchste Aufmerksamkeit. Wer die Risiken nicht kennt, kann sie nicht minimieren.
              </p>
              <p className="showcase-text" style={{ marginTop: '1rem' }}>
                Meine Überzeugung: Der Schlüssel liegt in <strong style={{ color: 'var(--foreground)' }}>lokaler, Open-Source-KI</strong>. Wenn die Kontrolle bei dir bleibt, deine Daten nicht in fremden Rechenzentren landen und der Code transparent ist, sind viele dieser Risiken deutlich kleiner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="neon-divider" style={{ maxWidth: '80rem', margin: '0 auto' }} />

      {/* ARTICLES */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-heading">Alle <span className="neon-purple">Artikel</span></h2>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Artikel durchsuchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
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
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Keine Artikel gefunden für &quot;{searchQuery}&quot;</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div className="mb-16">
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  )
}
