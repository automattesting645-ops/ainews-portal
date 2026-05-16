'use client'

import Link from 'next/link'
import { Menu, X, Sparkles, Search, Bell } from 'lucide-react'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import SearchOverlay from './SearchOverlay'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navItems = [
    { label: 'News', href: '/news' },
    { label: 'Tools', href: '/tools' },
    { label: 'Guides', href: '/guides' },
    { label: 'Videos', href: '/videos' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">AI News</span>
              <span className="text-xs text-muted-foreground -mt-1">Daily KI-Updates</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <Link
              href="/newsletter"
              className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-white"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-center">
                  <LanguageSwitcher />
                </div>
                <Link
                  href="/newsletter"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full text-center px-4 py-3 rounded-lg text-sm font-medium text-white"
                >
                  Newsletter abonnieren
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
      <SearchOverlay open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
