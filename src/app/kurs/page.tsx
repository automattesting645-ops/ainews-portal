import Link from 'next/link'
import { Sparkles, ArrowRight, Zap, CheckCircle, Star, Users, Play, Clock, ChevronDown } from 'lucide-react'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'AI Mastery Course - Learn to Use AI Effectively | AI News',
  description: 'The ultimate AI course. Learn how to use AI tools productively and make money with them. 40+ Lessons, Live Support, Community.',
}

const modules = [
  { num: '01', title: 'Foundation', lessons: '5 Lessons', desc: 'What is AI? How do language models work? The most important terms explained clearly. No prior knowledge needed.', icon: Sparkles },
  { num: '02', title: 'Prompt Engineering', lessons: '8 Lessons', desc: 'Write prompts that work. From simple instructions to complex chain-of-thought techniques.', icon: Zap },
  { num: '03', title: 'Content Creation', lessons: '6 Lessons', desc: 'Blog, video, social media – everything automated with AI. Includes n8n workflows for content pipelines.', icon: Play },
  { num: '04', title: 'Tool Mastery', lessons: '10 Lessons', desc: 'The most important AI tools in detail: Ollama, AnythingLLM, ComfyUI, n8n, Open WebUI and more. With live demos.', icon: Sparkles },
  { num: '05', title: 'Automation', lessons: '7 Lessons', desc: 'Build your own AI pipeline. From idea to fully automated workflow – local and free.', icon: Zap },
  { num: '06', title: 'AI Business', lessons: '4 Lessons', desc: 'How to make money with AI. Strategies, case studies, and the roadmap to your first AI side job.', icon: Star },
]

const testimonials = [
  { name: 'Markus T.', role: 'Software Developer', text: 'Finally someone who shows how it\'s really done. Not just theory, but concrete setup guides. I got Ollama + AnythingLLM running in the first week.' },
  { name: 'Sarah K.', role: 'Content Creator', text: 'The n8n workflow saved me hours per week. Now all my content runs automatically – from YouTube video to blog post.' },
  { name: 'Lukas M.', role: 'Founder', text: 'I used to pay 60€/month for Midjourney. Now Flux runs locally and I have full control. The course paid for itself in the first week.' },
]

const faqs = [
  { q: 'Who is the course for?', a: 'For anyone who wants to use AI productively – beginners and advanced users. You don\'t need prior knowledge, but should be ready to get hands-on. The first modules start from scratch.' },
  { q: 'Do I need expensive hardware?', a: 'No. A regular PC is enough for the basics. Many tools also run on the Mac Mini M4 or a mid-range laptop. For image generation we recommend a GPU with 8GB+ VRAM, but that\'s optional.' },
  { q: 'Is the course really local & free?', a: 'Yes. All the tools we show are open source and run on your machine. You don\'t pay for any cloud subscription. The course itself is of course not free, but it saves you hundreds of euros per month on AI subscriptions.' },
  { q: 'How long do I have access?', a: 'You get lifetime access to all content including future updates. As long as the AI world keeps evolving, we keep evolving the course.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. 30-day money-back guarantee – no risk. If the course doesn\'t help you, you get your money back.' },
  { q: 'When does the course start?', a: 'The course is in production. The first modules are already finished. As Early Access you get access to all finished modules immediately – new modules are added regularly.' },
]

export default function KursPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HERO ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Early Access: <strong>50% off</strong> (first 50 only)
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI <span className="gradient-text">Mastery</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            The complete course that takes you from AI user to AI professional.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            <strong>40+ Lessons</strong> | 6 Modules | Live Support | Community | Lifetime Access
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/newsletter" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold glow-hover">
              <Zap className="w-5 h-5" />
              Secure Early Access – €97
              <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-sm text-muted-foreground">
              <span className="line-through">€197</span> • 30-Day Money-Back
            </span>
          </div>
        </div>

        {/* ===== SOCIAL PROOF ===== */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text">40+</div>
            <div className="text-sm text-muted-foreground">Lessons</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">6</div>
            <div className="text-sm text-muted-foreground">Module</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">20+</div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">4.9/5</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">∞</div>
            <div className="text-sm text-muted-foreground">Lifetime Access</div>
          </div>
        </div>

        {/* ===== MODULES ===== */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Curriculum</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            6 Modules, 40+ Lessons – from the foundations to your own AI business
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => {
              const Icon = mod.icon
              return (
                <div key={mod.num} className="p-6 rounded-2xl bg-card border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-mono">{mod.num}</span>
                    <span className="text-xs text-accent font-medium">{mod.lessons}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground">{mod.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ===== WHAT YOU LEARN ===== */}
        <div className="mb-16 bg-card/50 rounded-3xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl font-bold text-center mb-4">What You'll Learn</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            After the course you'll be able to not just operate AI tools – you'll build your own workflows and make money with them.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Set Up Local AI', desc: 'Ollama, AnythingLLM, Open WebUI – all local, all free' },
              { title: 'Build AI Agents', desc: 'Hermes, Space Agent & Lobster Father in real-world use' },
              { title: 'Automate Content', desc: 'n8n workflows from YouTube to blog to social media' },
              { title: 'Generate Images', desc: 'Stable Diffusion, Flux & ComfyUI for pro results' },
              { title: 'SEO with AI', desc: 'Keyword research, content optimization, GEO ranking' },
              { title: 'Build AI Business', desc: 'Your first AI side job: €500-2000/month' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-sm">{item.title}</span>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== TESTIMONIALS ===== */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">What Others Say</h2>
          <p className="text-center text-muted-foreground mb-10">Before the course is live – here's what test users are saying</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PRICING ===== */}
        <div className="mb-16 max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
          <div className="rounded-2xl bg-card border-2 border-primary/30 p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold">
              MOST POPULAR
            </div>
            <span className="text-sm text-accent font-medium mb-2 block">Early Access</span>
            <div className="flex items-end justify-center gap-2 mb-4">
              <span className="text-4xl font-bold gradient-text">97€</span>
              <span className="text-lg text-muted-foreground line-through mb-1">197€</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                '40+ Lessons in 6 Modules',
                'Lifetime Access + Updates',
                'Private Community (Discord)',
                'Live Support & Q&A',
                '30-Day Money-Back Guarantee',
                'All future modules included',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/newsletter" className="btn-primary w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold glow-hover">
              <Zap className="w-5 h-5" />
              Secure Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-muted-foreground mt-4">First 50 only at early bird price. €197 after.</p>
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

        {/* ===== FINAL CTA ===== */}
        <div className="text-center mb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Master</span> AI?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Start now with Early Access – 50% off, 30-day money-back, lifetime access.
          </p>
          <Link href="/newsletter" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold glow-hover">
            <Zap className="w-5 h-5" />
            Start for €97
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <Newsletter />
      </div>
    </div>
  )
}