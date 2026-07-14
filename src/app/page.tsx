import Link from 'next/link'
import { ArrowRight, Play, ChevronRight, Zap, TrendingUp, Globe, Wrench, Eye, Clock, FileText } from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import { samplePosts, sampleTools, localAIModels, aiNewsUpdates } from '@/data/sample'

const showcaseVideos = [
  {
    id: '2',
    title: 'Million Dollar Business with Google Agents',
    youtubeId: '0d3LT3JoylM',
    hook: 'Ein Entrepreneur baute ein Millionen-Business – nur mit Google AI Agents. Kein eigenes Produkt, keine Entwickler. Ich zeige dir, wie er es gemacht hat und wie auch du starten kannst.',
    label: 'Business Case',
    tags: ['Google', 'Agents', 'Business']
  },
  {
    id: '3',
    title: 'Open Source vs. Claude Code',
    youtubeId: 'ltlrmagjq8M',
    hook: 'Ein Open-Source-Tool fordert Claude Code heraus – und ist komplett kostenlos. Ich habe beide getestet und zeige dir, ob die freie Alternative wirklich mithalten kann.',
    label: 'Tool Test',
    tags: ['Coding', 'Open Source', 'Vergleich']
  },
  {
    id: '4',
    title: 'This Secret AI Just Quietly Dropped',
    youtubeId: 'jppY5pJix2w',
    hook: 'Ein neues AI-Modell wurde released, das alles verändert. Die wenigsten haben es bisher bemerkt. Ich erkläre dir, warum dieses Modell ein Game-Changer ist.',
    label: 'Breaking News',
    tags: ['AI', 'News', 'Neues Modell']
  },
  {
    id: '7',
    title: 'I Replaced CHATGPT with 100% Private AI',
    youtubeId: 'ioC6cNjYS90',
    hook: 'Ollama vs. LM Studio – welches lokale AI-Tool ist besser? Ich habe beide getestet. Setup, Performance, Modellvielfalt – hier kommt mein ehrliches Fazit.',
    label: 'Vergleich',
    tags: ['Ollama', 'LM Studio', 'Local AI']
  },
  {
    id: '10',
    title: 'Mastering Local AI 2026',
    youtubeId: 'sxm6RcxaWUI',
    hook: 'Fine-Tuning, Quantisierung, optimale Performance – ich zeige dir, wie du das Maximum aus deiner lokalen KI herausholst. Vom Einsteiger-Setup bis zum Pro-Workflow.',
    label: 'Tutorial',
    tags: ['Local AI', 'Guide', 'Optimierung']
  },
  {
    id: '6',
    title: 'Local vs. Worldclass AI Challenge',
    youtubeId: 'Pig0_q-3wIw',
    hook: 'Kann eine lokale KI gegen die Weltklasse-Modelle aus der Cloud bestehen? Ich habe die ultimative CodiHerausforderung gestartet. Das Ergebnis überrascht.',
    label: 'Challenge',
    tags: ['Coding', 'Vergleich', 'Test']
  }
]

export default function Home() {
  const featuredPost = samplePosts.find(p => p.isFeatured) || samplePosts[0]

  return (
    <main className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            YouTube: @AI-n_sights &middot; Wöchentliche Tests
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
            <span className="metallic-text">Local AI</span>
            <br />
            <span className="text-foreground">entfesseln.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Ich teste die neuesten <span className="text-primary neon-blue">Open-Source AI-Tools</span> jede Woche auf YouTube. 
            Von AnythingLLM bis OpenCode – <span className="text-foreground">keine Cloud, kein Hype, nur Ergebnisse.</span>
            <br />Die besten Tools, Schritt-für-Schritt-Guides und alles, was du für lokale KI brauchst.
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
               className="btn-neon blue text-base px-8 py-4 rounded-xl">
              <Play className="w-5 h-5" />
              YouTube abonnieren
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/videos"
               className="btn-neon green text-base px-8 py-4 rounded-xl">
              <Zap className="w-5 h-5" />
              Alle Videos ansehen
            </Link>
          </div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ===== YOUTUBE SHOWCASE: Alternating Videos ===== */}
      {showcaseVideos.map((video, index) => (
        <section key={video.id} className={`py-16 md:py-20 ${index % 2 === 0 ? '' : 'bg-card/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Image side */}
              <div className={`relative group cursor-pointer ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <a href={`https://youtube.com/watch?v=${video.youtubeId}`} target="_blank"
                   className="block relative rounded-2xl overflow-hidden card-glow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-0.5" />
                    </div>
                  </div>
                </a>
                <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-background border border-primary/20 text-xs text-primary font-medium">
                  {video.label}
                </div>
              </div>

              {/* Text side */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-muted/50 border border-border text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                  {video.title}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {video.hook}
                </p>
                <a href={`https://youtube.com/watch?v=${video.youtubeId}`} target="_blank"
                   className="btn-neon blue inline-flex rounded-xl">
                  <Play className="w-4 h-4" />
                  Video ansehen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <hr className="neon-divider" />

      {/* ===== CHANNEL TRUST ===== */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Täglich neue <span className="neon-blue">AI-Tests</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Jede Woche ein neues Video mit Tests, Guides und News aus der lokalen KI-Welt. 
            Kein Bullshit, keine Affiliate-Hype – nur ehrliche, praxisnahe Inhalte.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'YouTube Videos', color: 'neon-blue' },
              { number: '24', label: 'Tools getestet', color: 'neon-green' },
              { number: '10+', label: 'Stunden Content', color: 'neon-purple' },
              { number: '100%', label: 'Open Source', color: 'neon-blue' },
            ].map(stat => (
              <div key={stat.label} className="p-6 rounded-2xl card-glow bg-card/50">
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
               className="btn-neon blue text-lg px-10 py-4 rounded-xl">
              <Play className="w-5 h-5" />
              Jetzt abonnieren & kein Video verpassen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ===== LATEST ARTICLES (secondary) ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                Neueste <span className="neon-purple">Artikel</span>
              </h2>
              <p className="text-muted-foreground text-sm">Tests & Guides aus der Redaktion</p>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
              Alle Artikel <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {samplePosts.slice(0, 4).map(post => (
              <Link key={post.id} href={`/post/${post.slug}`}
                 className="group block rounded-2xl overflow-hidden card-glow bg-card/50 hover:bg-card/80 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={post.coverImage || ''} alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{post.readTime} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRENDING TOOLS (secondary) ===== */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                <span className="neon-green">Trending</span> Tools
              </h2>
              <p className="text-muted-foreground text-sm">Die beliebtesten Open-Source-Tools</p>
            </div>
            <Link href="/tools" className="hidden sm:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
              Alle Tools <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sampleTools.filter(t => t.isTrending).slice(0, 5).map(tool => (
              <Link key={tool.id} href={`/tools/${tool.slug}`}
                 className="group p-4 rounded-xl card-glow bg-card/50 text-center hover:bg-card/80 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg font-bold mx-auto mb-3"
                     style={{ color: 'var(--primary)' }}>
                  {tool.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{tool.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ===== AI NEWS BLOG ===== */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold"><span className="neon-blue">Live</span> AI News</h2>
            <Link href="/news" className="hidden sm:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
              Alle News <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="news-blog">
            {aiNewsUpdates.slice(0, 5).map((u) => (
              <div key={u.date + u.title} className="news-blog-item">
                <div className="news-blog-date">{new Date(u.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
                <div className="news-blog-content">
                  <h3 className="news-blog-title">{u.title}</h3>
                  <p className="news-blog-summary">{u.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ===== BEST LOCAL AI MODELS ===== */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold"><span className="neon-green">Beste lokale</span> KI-Modelle</h2>
            <Link href="/news" className="hidden sm:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
              Alle Modelle <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="model-grid">
            {localAIModels.filter(m => m.topPick).map((m, i) => (
              <div key={m.name} className={`model-card${i % 2 === 1 ? ' model-card-alt' : ''}`}>
                <div className="model-card-header">
                  <div className="model-card-icon">{m.name.charAt(0)}</div>
                  <div>
                    <div className="model-card-name">{m.name}</div>
                    <div className="model-card-provider">{m.provider} · {m.size}</div>
                  </div>
                </div>
                <div className="model-card-strength">
                  <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{m.strength}</span>
                </div>
                <div className="model-card-use">
                  <ArrowRight className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{m.useCases}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ===== AI FOR GOOD + RISKS ===== */}
      <section style={{ padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16" style={{ alignItems: 'start' }}>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="showcase-tag">Impact</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">KI <span className="neon-blue">verbessert</span> die Welt</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Von Medizin über Klima bis Bildung – KI löst Probleme, die lange als unerreichbar galten. Und das immer öfter lokal und Open Source.
              </p>
              <Link href="/news" className="btn-neon blue inline-flex rounded-xl">
                <Zap className="w-4 h-4" />
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="showcase-tag" style={{ borderColor: 'rgba(239,68,68,0.3)', color: 'rgb(239,68,68)' }}>Risiko</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-5"><span style={{ color: 'rgb(239,68,68)' }}>Risiken</span> unkontrollierter KI</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Überwachung, Desinformation, Arbeitsplatzverlust – die Schattenseiten der KI. Lokale, transparente KI ist ein Teil der Lösung.
              </p>
              <Link href="/news" className="btn-neon green inline-flex rounded-xl">
                <Zap className="w-4 h-4" />
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="neon-divider" />

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Bereit für die <span className="metallic-text">Zukunft</span> der KI?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Abonniere meinen YouTube-Kanal und verpasse keinen Test. 
            Jede Woche ein neues Video – lokal, open-source, zukunftsorientiert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
               className="btn-neon blue text-lg px-10 py-4 rounded-xl">
              <Play className="w-5 h-5" />
              YouTube abonnieren
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/newsletter"
               className="btn-neon green text-lg px-10 py-4 rounded-xl">
              <Zap className="w-5 h-5" />
              Newsletter abonnieren
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </main>
  )
}
