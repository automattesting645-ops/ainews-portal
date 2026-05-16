import Link from 'next/link'
import { Sparkles, ArrowRight, Zap, CheckCircle, Star, Users, Play, Clock, ChevronDown } from 'lucide-react'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'KI Mastery Kurs - Lerne KI richtig einzusetzen | AI News',
  description: 'Der ultimative KI-Kurs. Lerne, wie du KI-Tools produktiv einsetzt und damit Geld verdienst. 40+ Lektionen, Live-Support, Community.',
}

const modules = [
  { num: '01', title: 'Grundlagen', lessons: '5 Lektionen', desc: 'Was ist KI? Wie funktionieren Sprachmodelle? Die wichtigsten Begriffe verständlich erklärt. Kein Vorwissen nötig.', icon: Sparkles },
  { num: '02', title: 'Prompt Engineering', lessons: '8 Lektionen', desc: 'Schreibe Prompts die funktionieren. Von einfachen Anweisungen bis zu komplexen Chain-of-Thought-Techniken.', icon: Zap },
  { num: '03', title: 'Content Creation', lessons: '6 Lektionen', desc: 'Blog, Video, Social Media – alles mit KI automatisiert. Inklusive n8n-Workflows für Content-Pipelines.', icon: Play },
  { num: '04', title: 'Tool Mastery', lessons: '10 Lektionen', desc: 'Die wichtigsten KI-Tools im Detail: Ollama, AnythingLLM, ComfyUI, n8n, Open WebUI und mehr. Mit Live-Demos.', icon: Sparkles },
  { num: '05', title: 'Automatisierung', lessons: '7 Lektionen', desc: 'Baue deine eigene KI-Pipeline. Von der Idee zum vollautomatischen Workflow – lokal und kostenlos.', icon: Zap },
  { num: '06', title: 'KI Business', lessons: '4 Lektionen', desc: 'Wie du mit KI Geld verdienst. Strategien, Case Studies und der Fahrplan zu deinem ersten KI-Nebenjob.', icon: Star },
]

const testimonials = [
  { name: 'Markus T.', role: 'Software-Entwickler', text: 'Endlich einer der zeigt wie mans wirklich macht. Nicht nur Theorie, sondern konkrete Setup-Anleitungen. Hab in der ersten Woche Ollama + AnythingLLM zum Laufen gebracht.' },
  { name: 'Sarah K.', role: 'Content-Creatorin', text: 'Der n8n-Workflow hat mir Stunden pro Woche gespart. Jetzt läuft mein ganzer Content automatisch – vom YouTube-Video zum Blog-Post.' },
  { name: 'Lukas M.', role: 'Gründer', text: 'Habe vorher 60€/Monat für Midjourney gezahlt. Jetzt läuft Flux lokal und ich hab volle Kontrolle. Der Kurs hat sich in der ersten Woche bezahlt gemacht.' },
]

const faqs = [
  { q: 'Für wen ist der Kurs geeignet?', a: 'Für alle die KI produktiv nutzen wollen – Anfänger und Fortgeschrittene. Du brauchst keine Vorkenntnisse, aber solltest bereit sein, selbst Hand anzulegen. Die ersten Module starten bei null.' },
  { q: 'Brauche ich teure Hardware?', a: 'Nein. Für die Grundlagen reicht ein normaler PC. Viele Tools laufen auch auf dem Mac Mini M4 oder einem Mittelklasse-Laptop. Für Bildgenerierung empfehlen wir eine GPU mit 8GB+ VRAM, aber das ist optional.' },
  { q: 'Ist der Kurs wirklich lokal & kostenlos?', a: 'Ja. Alle Tools die wir zeigen sind Open Source und laufen auf deinem Rechner. Du zahlst kein Cloud-Abo. Der Kurs selbst ist natürlich nicht kostenlos, aber er spart dir monatlich hunderte Euro an KI-Abos.' },
  { q: 'Wie lange habe ich Zugriff?', a: 'Du bekommst lebenslangen Zugriff auf alle Inhalte inklusive zukünftiger Updates. Solange sich die KI-Welt weiterentwickelt, entwickeln wir den Kurs weiter.' },
  { q: 'Gibt es eine Geld-zurück-Garantie?', a: 'Ja. 30 Tage Geld-zurück-Garantie – kein Risiko. Wenn dir der Kurs nicht hilft, bekommst du dein Geld zurück.' },
  { q: 'Wann startet der Kurs?', a: 'Der Kurs ist in Produktion. Die ersten Module sind bereits fertig. Als Early Access bekommst du Zugang zu allen fertigen Modulen sofort – neue Module kommen regelmäßig dazu.' },
]

export default function KursPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HERO ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Early Access: <strong>50% Rabatt</strong> (nur die ersten 50)
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KI <span className="gradient-text">Mastery</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Der komplette Kurs, der dich vom KI-Anwender zum KI-Profi macht.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            <strong>40+ Lektionen</strong> | 6 Module | Live-Support | Community | Lebenslanger Zugriff
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/newsletter" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold glow-hover">
              <Zap className="w-5 h-5" />
              Early Access sichern – 97€
              <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-sm text-muted-foreground">
              <span className="line-through">197€</span> • 30 Tage Geld-zurück
            </span>
          </div>
        </div>

        {/* ===== SOCIAL PROOF ===== */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text">40+</div>
            <div className="text-sm text-muted-foreground">Lektionen</div>
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
            <div className="text-sm text-muted-foreground">Bewertung</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">∞</div>
            <div className="text-sm text-muted-foreground">Lebenslanger Zugriff</div>
          </div>
        </div>

        {/* ===== MODULES ===== */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Curriculum</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            6 Module, 40+ Lektionen – von den Grundlagen bis zum eigenen KI-Business
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
          <h2 className="text-3xl font-bold text-center mb-4">Was du lernst</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nach dem Kurs kannst du KI-Tools nicht nur bedienen – du baust eigene Workflows und verdienst damit Geld.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Lokale KI einrichten', desc: 'Ollama, AnythingLLM, Open WebUI – alles lokal, alles kostenlos' },
              { title: 'KI-Agenten bauen', desc: 'Hermes, Space Agent & Lobster Father im Praxiseinsatz' },
              { title: 'Content automatisieren', desc: 'n8n-Workflows von YouTube zu Blog zu Social Media' },
              { title: 'Bilder generieren', desc: 'Stable Diffusion, Flux & ComfyUI für Profi-Ergebnisse' },
              { title: 'SEO mit KI', desc: 'Keyword-Recherche, Content-Optimierung, GEO-Ranking' },
              { title: 'KI-Business aufbauen', desc: 'Dein erster KI-Nebenjob: 500-2000€/Monat' },
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
          <h2 className="text-3xl font-bold text-center mb-4">Was andere sagen</h2>
          <p className="text-center text-muted-foreground mb-10">Bevor der Kurs live ist – hier Stimmen von Testnutzern</p>
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
          <h2 className="text-3xl font-bold text-center mb-8">Wähle deinen Plan</h2>
          <div className="rounded-2xl bg-card border-2 border-primary/30 p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold">
              BELIEBTEST
            </div>
            <span className="text-sm text-accent font-medium mb-2 block">Early Access</span>
            <div className="flex items-end justify-center gap-2 mb-4">
              <span className="text-4xl font-bold gradient-text">97€</span>
              <span className="text-lg text-muted-foreground line-through mb-1">197€</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                '40+ Lektionen in 6 Modulen',
                'Lebenslanger Zugriff + Updates',
                'Private Community (Discord)',
                'Live-Support & Q&A',
                '30 Tage Geld-zurück-Garantie',
                'Alle zukünftigen Module inklusive',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/newsletter" className="btn-primary w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold glow-hover">
              <Zap className="w-5 h-5" />
              Early Access sichern
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-muted-foreground mt-4">Nur die ersten 50 zum Frühbucherpreis. Danach 197€.</p>
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Häufige Fragen</h2>
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
            Bereit, KI zu <span className="gradient-text">meistern</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Starte jetzt mit dem Early Access – 50% Rabatt, 30 Tage Geld-zurück, lebenslanger Zugriff.
          </p>
          <Link href="/newsletter" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold glow-hover">
            <Zap className="w-5 h-5" />
            Für 97€ starten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <Newsletter />
      </div>
    </div>
  )
}