'use client'

import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Videos', href: '/videos' },
    { label: 'News', href: '/news' },
    { label: 'Tools', href: '/tools' },
    { label: 'Guides', href: '/guides' },
    { label: 'Course', href: '/kurs' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight">AI-n_sights</span>
              <span className="text-[10px] text-muted-foreground -mt-0.5 tracking-widest uppercase">Local AI Portal</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all tracking-wide uppercase">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
               className="btn-neon blue text-xs px-4 py-1.5 rounded-lg">
              <Zap className="w-3 h-3" />
              YouTube
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all">
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-border space-y-2">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <a href="https://youtube.com/@AI-n_sights?sub_confirmation=1" target="_blank"
                   className="btn-neon blue w-full justify-center text-sm px-4 py-2.5 rounded-lg">
                  <Zap className="w-4 h-4" />
                  YouTube abonnieren
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
