import { Info } from 'lucide-react'

export default function AffiliateNotice() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 text-sm">
      <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
      <div className="text-muted-foreground">
        <strong className="text-foreground">Transparenz-Hinweis:</strong>{' '}
        Einige der hier verlinkten Tools sind Open Source oder enthalten Affiliate-Links.{' '}
        Ich empfehle nur Tools, die ich selbst getestet habe. Für dich entstehen keine zusätzlichen Kosten.
      </div>
    </div>
  )
}