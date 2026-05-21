'use client'

import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#about', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated background blobs */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-blue)) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-25 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)', animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-emerald)) 0%, transparent 70%)', animationDelay: '8s' }} />

      {/* Navbar */}
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
            <span className="font-display text-xl font-bold tracking-tight">Webistry</span>
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
            <a href="#contact"
               className="hidden sm:inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:scale-105 transition-transform glow-purple">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg glass-effect">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
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
            <a href="#contact" onClick={() => setOpen(false)}
               className="gradient-bg text-white font-semibold px-5 py-3 rounded-lg text-center">
              Get Started
            </a>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero content */}
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
              Digital Agency · Available for new projects
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
            We Build <span className="gradient-text">Digital Experiences</span> That Convert.
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Webistry is a design-led studio crafting high-performance websites, eshops,
            booking systems and custom digital products that turn visitors into customers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-4 rounded-xl glow-purple"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 glass-effect text-foreground font-semibold px-7 py-4 rounded-xl hover:border-accent-blue/50"
            >
              View Work
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-3xl">
            {[
              { n: '120+', l: 'Projects shipped' },
              { n: '8 yrs', l: 'Building the web' },
              { n: '40+', l: 'Happy clients' },
              { n: '99%', l: 'Lighthouse score' },
            ].map((s, i) => (
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
