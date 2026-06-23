'use client'

import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles, Languages } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useI18n()

  const NAV = [
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.work },
    { href: '#about', label: t.nav.process },
    { href: '#contact', label: t.nav.contact },
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
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-blue)) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-25 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)', animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-emerald)) 0%, transparent 70%)', animationDelay: '8s' }} />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar py-3' : 'py-5'}`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center glow-blue group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">Webaria</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map(n => (
              <a key={n.href} href={n.href}
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px gradient-bg group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LangSwitch className="hidden sm:inline-flex" />
            <a href="#contact"
               className="hidden sm:inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:scale-105 transition-transform glow-purple">
              {t.nav.cta} <ArrowRight className="w-4 h-4" />
            </a>
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
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                 className="text-foreground/80 hover:text-foreground font-medium">{n.label}</a>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-2">
                <Languages className="w-4 h-4" /> Language
              </span>
              <LangSwitch />
            </div>
            <a href="#contact" onClick={() => setOpen(false)}
               className="gradient-bg text-white font-semibold px-5 py-3 rounded-lg text-center">
              {t.nav.cta}
            </a>
          </motion.div>
        )}
      </motion.nav>

      <div className="relative container mx-auto px-6 lg:px-12 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
            {t.hero.title1}<span className="gradient-text">{t.hero.titleAccent}</span>{t.hero.title2}
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-4 rounded-xl glow-purple"
            >
              {t.hero.cta} <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 glass-effect text-foreground font-semibold px-7 py-4 rounded-xl hover:border-accent-blue/50"
            >
              {t.hero.view}
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-3xl">
            {t.hero.stats.map((s: any, i: number) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="font-display text-3xl lg:text-4xl font-bold gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
