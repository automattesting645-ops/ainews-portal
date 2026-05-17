'use client'

import { Sparkles, Zap, ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

interface NewsletterProps {
  compact?: boolean
}

export default function Newsletter({ compact = false }: NewsletterProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-border ${compact ? 'p-6' : 'p-8 md:p-12'}`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          
          <h2 className={`font-bold mb-4 ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
            <span className="gradient-text">AI News</span> Every Morning
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {compact
              ? 'The most important AI updates. 5 minutes, daily, free.'
              : 'No spam, no hype. Every morning the 3 most important AI news + an exclusive tool review straight to your inbox.'
            }
          </p>

          <form
            className={`flex flex-col sm:flex-row gap-3 ${compact ? 'max-w-md' : 'max-w-lg'} mx-auto`}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 glow-hover"
            >
              <Zap className="w-4 h-4" />
              Subscribe Free
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. 2,347+ subscribers already.
          </p>
        </div>
      </div>
    </div>
  )
}
