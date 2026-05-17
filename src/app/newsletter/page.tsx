import Newsletter from '@/components/Newsletter'
import { Mail, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Newsletter - Daily AI Updates | AI News',
  description: 'Subscribe to the AI News newsletter. Daily: the 3 most important AI news in 5 minutes.',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/20 items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Newsletter</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every morning: the 3 most important AI news + an exclusive tool review. 5 minutes, daily, free.
          </p>
        </div>

        <div className="mb-12">
          <Newsletter />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            'Daily AI news to the point',
            'Exclusive tool reviews',
            'No spam, unsubscribe anytime',
            '2,347+ subscribers already',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-card border border-border">
          <h2 className="text-xl font-bold mb-4">What you get:</h2>
          <ul className="space-y-4">
            {[
              { day: 'Mon', topic: 'AI News of the week + Tool of the day' },
              { day: 'Tue', topic: 'Deep Dive: One AI tool in detail' },
              { day: 'Wed', topic: 'AI Guide: Step-by-step tutorial' },
              { day: 'Thu', topic: 'News update + Comparing two tools' },
              { day: 'Fri', topic: 'Weekly recap + Community Q&A' },
              { day: 'Sat', topic: 'Weekend Read: In-depth article' },
              { day: 'Sun', topic: 'Preview: What\'s coming next week' },
            ].map((item) => (
              <li key={item.day} className="flex items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">{item.day}</span>
                <span className="text-sm text-muted-foreground">{item.topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
