import Link from 'next/link'
import { Sparkles, ArrowRight, Zap, CheckCircle, Play, Clock, ChevronDown } from 'lucide-react'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'AI Kurs - Lerne lokale KI-Werkzeuge effektiv einzusetzen | AI News',
  description: 'Kostenloser Kurs: Lokale KI einrichten, RAG-Workflows bauen, n8n-Automatisierung & mehr. Von Grundlagen bis zum Produktivbetrieb.',
}

const modules = [
  {
    num: '01', title: 'Grundlagen', lessons: '5 Lektionen',
    desc: 'Was ist KI? Wie funktionieren Sprachmodelle? Die wichtigsten Begriffe einfach erklärt. Kein Vorwissen nötig.',
    topics: ['Wie LLMs funktionieren', 'Token, Kontext, Temperatur', 'Open-Source vs. Cloud-Modelle', 'Hardware-Anforderungen', 'Sicherheit & Privatsphäre'],
    icon: Sparkles
  },
  {
    num: '02', title: 'Lokale KI einrichten', lessons: '6 Lektionen',
    desc: 'Ollama, LM Studio & Open WebUI installieren und konfigurieren. Deine erste lokale KI in 15 Minuten.',
    topics: ['Ollama Installation & erste Schritte', 'Modelle herunterladen & vergleichen', 'LM Studio für Einsteiger', 'Open WebUI mit Docker', 'REST-API für eigene Anwendungen', 'Multi-Modell-Betrieb'],
    icon: Zap
  },
  {
    num: '03', title: 'RAG & Wissensdatenbanken', lessons: '4 Lektionen',
    desc: 'AnythingLLM als KI-Zentrale. Eigene Dokumente als Wissensbasis nutzen – lokal und privat.',
    topics: ['AnythingLLM einrichten', 'Dokumente hochladen & chunken', 'Embeddings & Vektorsuche', 'Multi-Workspace-Strategie'],
    icon: Play
  },
  {
    num: '04', title: 'KI Coding-Assistenten', lessons: '4 Lektionen',
    desc: 'Claude Code, OpenCode & Continue.dev im Vergleich. KI-gestützte Entwicklung lokal und kostenlos.',
    topics: ['Claude Code für Profis', 'OpenCode als Open-Source-Alternative', 'Continue.dev mit VS Code & JetBrains', 'Lokale Coding-Workflows'],
    icon: Sparkles
  },
  {
    num: '05', title: 'Automatisierung mit n8n', lessons: '5 Lektionen',
    desc: 'Workflows bauen: Von YouTube zu Blog zu Social Media. Content-Pipelines, die Zeit sparen.',
    topics: ['n8n Installation & Überblick', 'YouTube-API-Integration', 'Content-Pipeline: Video → Transkript → Blog', 'KI-Knoten in n8n', 'Fehlerbehandlung & Monitoring'],
    icon: Zap
  },
  {
    num: '06', title: 'Bildgenerierung lokal', lessons: '4 Lektionen',
    desc: 'Stable Diffusion & ComfyUI. Profi-Bilder auf eigener GPU – ohne Abo, ohne Limits.',
    topics: ['Automatic1111 WebUI Setup', 'Modelle von CivitAI', 'ComfyUI Node-Workflows', 'ControlNet & Inpainting'],
    icon: Play
  },
  {
    num: '07', title: 'Fortgeschrittene Themen', lessons: '5 Lektionen',
    desc: 'Fine-Tuning, Quantisierung, Multi-Agent-Systeme. Für alle, die tiefer einsteigen wollen.',
    topics: ['Modelle quantisieren mit llama.cpp', 'LoRA-Fine-Tuning', 'Multi-Agent-Workflows', 'Batch-Verarbeitung & APIs', 'Performance-Optimierung'],
    icon: Sparkles
  },
]

const faqs = [
  { q: 'Für wen ist der Kurs?', a: 'Für alle, die lokale KI-Werkzeuge produktiv einsetzen wollen – vom Einsteiger bis zum Fortgeschrittenen. Die ersten Module starten bei null.' },
  { q: 'Brauche ich teure Hardware?', a: 'Nein. Ein normaler PC reicht für die Grundlagen. Viele Tools laufen auch auf dem Mac Mini M4. Für Bildgenerierung empfehlen wir eine GPU mit 8GB+ VRAM, das ist aber optional.' },
  { q: 'Ist der Kurs wirklich kostenlos?', a: 'Ja. Alle Materialien sind kostenlos. Die gezeigten Tools sind Open Source und laufen lokal – keine Cloud-Abos nötig.' },
  { q: 'Wann startet der Kurs?', a: 'Der Kurs ist in Produktion. Die ersten Module sind bereits fertig und werden nach und nach veröffentlicht.' },
]

export default function KursPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Kostenlos • Open Source • Lokal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KI-Werkzeuge <span className="gradient-text">lokal meistern</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Lerne Ollama, AnythingLLM, n8n, ComfyUI & mehr – alles auf deinem eigenen Rechner.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            <strong>33+ Lektionen</strong> | 7 Module | Praxisorientiert | Schritt-für-Schritt
          </p>
        </div>

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text">33+</div>
            <div className="text-sm text-muted-foreground">Lektionen</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">7</div>
            <div className="text-sm text-muted-foreground">Module</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">15+</div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">€0</div>
            <div className="text-sm text-muted-foreground">Kostenlos</div>
          </div>
        </div>

        {/* CURRICULUM */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Curriculum</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            7 Module, 33+ Lektionen – von den Grundlagen bis zum Produktivbetrieb
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
                  <p className="text-sm text-muted-foreground mb-4">{mod.desc}</p>
                  <ul className="space-y-1.5">
                    {mod.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* WHAT YOU LEARN */}
        <div className="mb-16 bg-card/50 rounded-3xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl font-bold text-center mb-4">Was du lernst</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nach dem Kurs kannst du KI-Werkzeuge nicht nur bedienen – du baust eigene Workflows und Automatisierungen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Lokale KI einrichten', desc: 'Ollama, AnythingLLM, Open WebUI – alles lokal, alles kostenlos' },
              { title: 'RAG-Workflows bauen', desc: 'Eigene Dokumente als Wissensbasis für deine KI' },
              { title: 'Inhalte automatisieren', desc: 'n8n-Workflows von YouTube zu Blog zu Social Media' },
              { title: 'Bilder generieren', desc: 'Stable Diffusion & ComfyUI für professionelle Ergebnisse' },
              { title: 'KI beim Coding nutzen', desc: 'Claude Code, OpenCode & Continue.dev im Einsatz' },
              { title: 'Model optimieren', desc: 'Quantisierung, Fine-Tuning & Performance-Tuning' },
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

        {/* FAQ */}
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

        {/* CTA */}
        <div className="text-center mb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit loszulegen?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Alle Module sind kostenlos. Keine Anmeldung nötig – starte einfach mit Modul 1.
          </p>
          <Link href="/guides" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold glow-hover">
            <Zap className="w-5 h-5" />
            Zu den Guides
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <Newsletter />
      </div>
    </div>
  )
}
