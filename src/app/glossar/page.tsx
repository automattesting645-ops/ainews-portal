import { BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'KI-Glossar - Fachbegriffe einfach erklärt | AI News',
  description: 'KI-Fachbegriffe einfach erklärt. Von A wie Agent bis Z wie Zero-Shot Learning.',
}

const terms = [
  { term: 'Agent', definition: 'Ein KI-Agent ist ein autonomes System, das eigenständig Aufgaben ausführen kann, z.B. Daten abrufen, API-Aufrufe tätigen oder Entscheidungen treffen.' },
  { term: 'API', definition: 'Schnittstelle, die es Programmen erlaubt, miteinander zu kommunizieren. Per KI-API kannst du Sprachmodelle in eigene Anwendungen einbauen.' },
  { term: 'ChatGPT', definition: 'KI-Chatbot von OpenAI. Das bekannteste Sprachmodell, das Texte versteht und generiert. Basis für viele KI-Anwendungen.' },
  { term: 'Claude', definition: 'KI-Assistent von Anthropic. Bekannt für lange Kontexte (200k Token) und hohe Verlässlichkeit bei komplexen Aufgaben.' },
  { term: 'Embeddings', definition: 'Vektordarstellungen von Text, die Maschinen verstehen können. Grundlage für semantische Suche und RAG-Systeme.' },
  { term: 'Fine-Tuning', definition: 'Nachträgliches Training eines KI-Modells mit eigenen Daten, um es für spezifische Aufgaben zu optimieren.' },
  { term: 'GPT', definition: '"Generative Pre-trained Transformer" - Die Modellfamilie von OpenAI. Aktuellste Version: GPT-4 und GPT-4o.' },
  { term: 'Halluzination', definition: 'Wenn eine KI scheinbar plausible, aber faktisch falsche Informationen ausgibt. Das größte Problem aktueller KI-Modelle.' },
  { term: 'LLM', definition: 'Large Language Model - Großes Sprachmodell. Ein KI-Modell, das auf riesigen Textmengen trainiert wurde und menschenähnliche Texte generieren kann.' },
  { term: 'Prompt', definition: 'Die Eingabe, die du einer KI gibst. Ein guter Prompt ist der Schlüssel zu guten KI-Ergebnissen.' },
  { term: 'RAG', definition: 'Retrieval-Augmented Generation - Eine Technik, bei der die KI zusätzliches Wissen aus einer Datenbank abruft, um bessere Antworten zu geben.' },
  { term: 'Token', definition: 'Die kleinste Einheit, die ein Sprachmodell verarbeitet. 1 Token ~= 0.75 Wörter. Bestimmt die Kosten und Länge von KI-Anfragen.' },
]

export default function GlossarPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-accent/20 items-center justify-center mb-4">
            <BookOpen className="w-7 h-7 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            KI-<span className="gradient-text">Glossar</span>
          </h1>
          <p className="text-lg text-muted-foreground">Fachbegriffe einfach erklärt. Von A bis Z.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {terms.map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-card border border-border card-hover">
              <h3 className="text-primary font-bold mb-2">{item.term}</h3>
              <p className="text-sm text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border">
          <p className="text-muted-foreground mb-4">Fehlt ein Begriff? Schlag ihn uns vor.</p>
          <Link href="/newsletter" className="text-primary hover:text-accent text-sm font-medium inline-flex items-center gap-1">
            Newsletter abonnieren <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
