'use client'

import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export default function LanguageSwitcher() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (document.getElementById('google-translate-script')) {
      setReady(true)
      return
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'de',
          includedLanguages: 'de,en,fr,es,it,pt,ru,ja,ko,zh-CN,ar,tr,pl,nl,sv,da,fi,cs,ro,hu',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    const check = setInterval(() => {
      if (document.querySelector('.goog-te-combo')) {
        setReady(true)
        clearInterval(check)
      }
    }, 500)

    return () => clearInterval(check)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      <div
        id="google_translate_element"
        className="language-switcher"
        style={{ display: ready ? 'block' : 'none' }}
      />
      {!ready && (
        <span className="text-xs text-muted-foreground">Sprache</span>
      )}
    </div>
  )
}