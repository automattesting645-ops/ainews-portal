'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

const LANGUAGES = [
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'en', label: 'EN', name: 'English' },
]

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('de')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'de') setLang(saved)
  }, [])

  function switchLanguage(code: string) {
    setLang(code)
    setOpen(false)
    localStorage.setItem('lang', code)
    document.documentElement.lang = code === 'en' ? 'en' : 'de'
  }

  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0]

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 transition-all border border-transparent hover:border-border"
      >
        <Globe className="w-3.5 h-3.5" />
        {current.label}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full right-0 mt-1 z-50 min-w-[120px] rounded-xl border border-border bg-card backdrop-blur-xl shadow-2xl overflow-hidden">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => switchLanguage(l.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left transition-colors hover:bg-card/80 ${
                  lang === l.code ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${lang === l.code ? 'bg-primary' : 'bg-border'}`} />
                {l.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
