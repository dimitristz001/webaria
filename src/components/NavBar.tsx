'use client'

import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Languages } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
const logoMark = { url: '/favicon.png' }


export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useI18n()
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  const NAV = [
    { to: '/services', label: t.nav.services },
    { to: '/pricing', label: t.nav.pricing },
    { to: '/work', label: t.nav.work },
    { to: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LangSwitch = ({ className = '' }: { className?: string }) => (
    <div className={`inline-flex items-center rounded-lg border border-border bg-background/40 backdrop-blur p-0.5 text-xs font-semibold ${className}`}>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-md transition-all ${lang === 'en' ? 'gradient-bg text-white' : 'text-muted-foreground hover:text-foreground'}`}
        aria-label="English"
      >EN</button>
      <button
        onClick={() => setLang('el')}
        className={`px-2.5 py-1 rounded-md transition-all ${lang === 'el' ? 'gradient-bg text-white' : 'text-muted-foreground hover:text-foreground'}`}
        aria-label="Ελληνικά"
      >EL</button>
    </div>
  )

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar py-3' : 'py-5'}`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoMark.url} alt="Webaria" className="w-9 h-9 object-contain group-hover:scale-110 transition-transform" />
          <span className="font-display text-xl font-bold tracking-tight">Webaria</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <Link key={n.to} to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px gradient-bg group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden sm:inline-flex" />
          <Link to="/contact"
            className="hidden sm:inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:scale-105 transition-transform glow-purple">
            {t.nav.cta} <ArrowRight className="w-4 h-4" />
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg glass-effect">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-navbar mt-3 mx-6 rounded-xl p-6 flex flex-col gap-4"
        >
          {NAV.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-foreground font-medium">{n.label}</Link>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-2">
              <Languages className="w-4 h-4" /> Language
            </span>
            <LangSwitch />
          </div>
          <Link to="/contact" onClick={() => setOpen(false)}
            className="gradient-bg text-white font-semibold px-5 py-3 rounded-lg text-center">
            {t.nav.cta}
          </Link>
        </motion.div>
      )}
    </motion.nav>
  )
}
