import { Info } from 'lucide-react'

export default function AffiliateNotice() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 text-sm">
      <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
      <div className="text-muted-foreground">
        <strong className="text-foreground">Transparency Notice:</strong>{' '}
        Some of the tools linked here are open source or contain affiliate links.{' '}
        I only recommend tools I have tested myself. No additional cost to you.
      </div>
    </div>
  )
}