import { BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AI Glossary - Technical terms explained simply | AI News',
  description: 'AI technical terms explained simply. From A for Agent to Z for Zero-Shot Learning.',
}

const terms = [
  { term: 'Agent', definition: 'An AI agent is an autonomous system that can execute tasks independently, e.g., retrieve data, make API calls, or make decisions.' },
  { term: 'API', definition: 'An interface that allows programs to communicate with each other. Via AI API you can integrate language models into your own applications.' },
  { term: 'ChatGPT', definition: 'AI chatbot from OpenAI. The most well-known language model that understands and generates text. Foundation for many AI applications.' },
  { term: 'Claude', definition: 'AI assistant from Anthropic. Known for long contexts (200k tokens) and high reliability on complex tasks.' },
  { term: 'Embeddings', definition: 'Vector representations of text that machines can understand. Foundation for semantic search and RAG systems.' },
  { term: 'Fine-Tuning', definition: 'Subsequent training of an AI model with custom data to optimize it for specific tasks.' },
  { term: 'GPT', definition: '"Generative Pre-trained Transformer" - The model family from OpenAI. Latest version: GPT-4 and GPT-4o.' },
  { term: 'Hallucination', definition: 'When an AI outputs seemingly plausible but factually incorrect information. The biggest problem of current AI models.' },
  { term: 'LLM', definition: 'Large Language Model. An AI model trained on massive amounts of text that can generate human-like text.' },
  { term: 'Prompt', definition: 'The input you give to an AI. A good prompt is the key to good AI results.' },
  { term: 'RAG', definition: 'Retrieval-Augmented Generation - A technique where the AI retrieves additional knowledge from a database to provide better answers.' },
  { term: 'Token', definition: 'The smallest unit that a language model processes. 1 token ~= 0.75 words. Determines the cost and length of AI requests.' },
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
            AI-<span className="gradient-text">Glossary</span>
          </h1>
          <p className="text-lg text-muted-foreground">Technical terms explained simply. From A to Z.</p>
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
          <p className="text-muted-foreground mb-4">Missing a term? Suggest it to us.</p>
          <Link href="/newsletter" className="text-primary hover:text-accent text-sm font-medium inline-flex items-center gap-1">
            Subscribe to Newsletter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
