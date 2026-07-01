'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'

export function HomeCTA() {
  const { t } = useI18n()
  const s = t.home.homeCta
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass-effect px-8 py-14 lg:px-16 lg:py-20"
        >
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
               style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
               style={{ background: 'radial-gradient(circle, hsl(var(--accent-blue)) 0%, transparent 70%)' }} />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4">{s.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-7 py-4 rounded-xl glow-purple whitespace-nowrap self-start lg:self-auto"
            >
              {s.button} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
