'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
import { NavBar } from './NavBar'

export function Hero() {
  const { t } = useI18n()

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-blue)) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-25 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)', animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-emerald)) 0%, transparent 70%)', animationDelay: '8s' }} />

      {/* Brand logo backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.28, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/webaria-hero-bg.png"
          alt=""
          aria-hidden="true"
          className="w-[min(1000px,85vw)] max-w-none object-contain select-none"
          style={{ filter: 'drop-shadow(0 0 80px hsl(var(--accent-purple) / 0.45))' }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />


      <NavBar />

      <div className="relative container mx-auto px-6 lg:px-12 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
            {t.hero.title1}<span className="gradient-text">{t.hero.titleAccent}</span>{t.hero.title2}
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact"
                className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-4 rounded-xl glow-purple">
                {t.hero.cta} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/work"
                className="inline-flex items-center gap-2 glass-effect text-foreground font-semibold px-7 py-4 rounded-xl hover:border-accent-blue/50">
                {t.hero.view}
              </Link>
            </motion.div>
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
