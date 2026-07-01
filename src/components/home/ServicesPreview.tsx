'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, ShoppingBag, CalendarCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'

const icons = [Globe, ShoppingBag, CalendarCheck, Sparkles]
const accents = ['text-accent-blue', 'text-accent-purple', 'text-accent-emerald', 'text-accent-blue']

export function ServicesPreview() {
  const { t } = useI18n()
  const s = t.home.services
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{s.eyebrow}</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-4">{s.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((item: any, i: number) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass-effect rounded-2xl p-6 hover:border-accent-blue/40 gentle-animation"
              >
                <div className={`w-11 h-11 rounded-xl bg-background/60 border border-border flex items-center justify-center mb-5 ${accents[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 glass-effect text-foreground font-semibold px-6 py-3 rounded-xl hover:border-accent-blue/50 gentle-animation"
          >
            {s.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
