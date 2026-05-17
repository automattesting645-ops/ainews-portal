import Link from 'next/link'
import { ArrowRight, TrendingUp, Zap, Sparkles, Video, ChevronRight, Play, Users, ExternalLink, Star, ChevronDown } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import Newsletter from '@/components/Newsletter'
import LatestVideo from '@/components/LatestVideo'
import { samplePosts, sampleTools } from '@/data/sample'

export default function Home() {
  const featuredPost = samplePosts.find(p => p.isFeatured) || samplePosts[0]

  return (
    <main className="min-h-screen">
      {/* ===== HERO ===== */}
      {/* Authority + Social Proof + Reciprocity */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Authority Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                By <strong className="text-foreground">AI-n_sights</strong> — 50+ YouTube Videos
              </span>
            </div>

            {/* Main Headline – question-based für GEO */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Which AI tools <span className="gradient-text">are really worth it?</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I test the newest <strong>open-source AI tools</strong> every week – from AnythingLLM to Space Agent. 
              <strong> No cloud, no hype, just results.</strong> The best tools, step-by-step guides, 
              and everything you need to get started locally and for free.
            </p>

            {/* Primary CTAs – Commitment & Consistency (erst kostenlos, dann Kurs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/newsletter"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-white flex items-center gap-2 glow-hover group"
              >
                <Zap className="w-5 h-5" />
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://youtube.com/@AI-n_sights?sub_confirmation=1"
                target="_blank"
                className="px-8 py-4 rounded-xl text-lg font-medium border border-border bg-card hover:bg-card/80 transition-all flex items-center gap-2 group"
              >
                <Play className="w-5 h-5 text-red-500" />
                Subscribe on YouTube
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Proof – Anchoring (hohe Zahlen machen Eindruck) */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-[10px] font-bold text-white">
                      {['A', 'K', 'M', 'S'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">24+ Tools</strong> tested
                </span>
              </div>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">+234%</strong> Growth
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Newsletter: <strong className="text-foreground">Free</strong>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED POST ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <Sparkles className="w-6 h-6 inline text-primary mr-2" />
                <span className="gradient-text">Currently</span> Testing
              </h2>
              <p className="text-muted-foreground">The most important first</p>
            </div>
            <Link
              href="/news"
              className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-medium"
            >
              All News <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <BlogCard post={featuredPost} featured />
        </div>
      </section>

      {/* ===== ALLE ARTIKEL ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">New tests & guides every week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePosts.slice(0, 6).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card/80 transition-all font-medium"
            >
              Show all {samplePosts.length} articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE CTA ===== */}
      {/* Loss Aversion + Social Proof + Authority */}
      <section className="py-16 bg-gradient-to-br from-red-500/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-4">
                <TrendingUp className="w-3 h-3" /> +234% Growth in 2026
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                New <span className="text-red-500">AI tools tested on video</span> every week
              </h2>
              <p className="text-muted-foreground mb-6">
                On YouTube, I walk you through every step: installation, configuration, and real tests. 
                <strong> Don't miss the next upload</strong> – subscribe for free now.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Get AnythingLLM, Ollama, Space Agent & more running locally',
                  'No cloud, no subscription – your data stays with you',
                  'Step-by-step for beginners & pros',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Play className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://youtube.com/@AI-n_sights?sub_confirmation=1"
                target="_blank"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold glow-hover"
              >
                <Video className="w-5 h-5" />
                Subscribe on YouTube (free)
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <LatestVideo />
          </div>
        </div>
      </section>

      {/* ===== TRENDING TOOLS ===== */}
      {/* Bandwagon Effect + Scarcity */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <TrendingUp className="w-6 h-6 inline text-accent mr-2" />
                Trending <span className="text-accent">Now</span>
              </h2>
              <p className="text-muted-foreground">20+ Tools tested & reviewed</p>
            </div>
            <Link
              href="/tools"
              className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-medium"
            >
              All Tools <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTools.filter((t) => t.isTrending).slice(0, 6).map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="group block p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                    {tool.name.charAt(0)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {tool.isNew && (
                      <span className="px-2 py-1 rounded-full text-xs font-semibold badge-new text-white">NEW</span>
                    )}
                    {tool.isTrending && (
                      <span className="flex items-center gap-1 text-xs text-accent">
                        <TrendingUp className="w-3 h-3" />Trending
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.tagline}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(tool.rating) ? 'text-warning' : 'text-muted'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({tool.reviewCount})</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    tool.pricing === 'free' ? 'bg-success/20 text-success' :
                    tool.pricing === 'freemium' ? 'bg-accent/20 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {tool.pricing === 'free' ? 'Free' : tool.pricing === 'freemium' ? 'Freemium' : tool.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-card/80 transition-all font-medium"
            >
              Compare all 20 Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== KURS FUNNEL ===== */}
      {/* Decoy Effect + Anchoring + Scarcity + Zero-Price */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                <Sparkles className="w-3 h-3" /> Early Bird: <strong>50% off</strong> (first 50 only!)
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn to <span className="gradient-text">make money with AI</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Midjourney costs <strong className="line-through">€60/month</strong>, ChatGPT <strong className="line-through">€20/month</strong>.
                I'll show you how to run everything locally for free – and even make money with it.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Local AI workflows: AnythingLLM, Ollama, Open WebUI – all local, all free',
                  'Build AI agents: Hermes, Space Agent & Lobster Father in practice',
                  'Automated content production with n8n + AI (YouTube, Blog, Social Media)',
                  'Your first AI side hustle: €500-2000/month with the right tools',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kurs"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold glow-hover"
                >
                  <Zap className="w-5 h-5" />
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-card/80 transition-all text-sm"
                >
                  Subscribe to free newsletter
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-accent mx-auto mb-4 animate-float" />
                    <h3 className="text-2xl font-bold mb-2 gradient-text">KI Mastery</h3>
                    <p className="text-muted-foreground mb-4">The Complete Course</p>
                    {/* Anchoring: Zeig hohen Preis, dann reduzierten */}
                    <div className="space-y-2">
                      <div className="text-lg text-muted-foreground line-through">197€</div>
                      <div className="text-4xl font-bold gradient-text">97€</div>
                      <div className="text-xs text-muted-foreground">Early bird price – only the first 50</div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <span className="text-muted-foreground text-xs ml-2">4.9/5 (24 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ für GEO ===== */}
      {/* AI Engines lieben FAQ-Schema – holt Zitate für Antworten */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions about <span className="gradient-text">Local AI</span>
            </h2>
            <p className="text-muted-foreground">The most important answers – short & clear</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What do I need for local AI?',
                a: 'A PC with at least 8GB RAM (16-32GB recommended). A Mac Mini M4 or a mid-range PC is sufficient for most models. Everything is free and open source.'
              },
              {
                q: 'Is local AI really free?',
                a: 'Yes. Tools like Ollama, AnythingLLM, and LM Studio are completely free. You only pay for the electricity for your PC – no cloud subscription.'
              },
              {
                q: 'Which AI can I use locally?',
                a: 'Hermes, Deepseek, Llama, Mistral, and many more. 200+ models run via Ollama. For images: Stable Diffusion, Flux. For code: Continue.dev.'
              },
              {
                q: 'Is an AI course worth it?',
                a: 'Yes – if it is practical. Our course shows you step by step how to set everything up, build workflows, and make money with it. Includes setup videos and live support.'
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-2xl bg-card border border-border overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-card/80 transition-colors">
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      {/* Reciprocity + Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </main>
  )
}
