'use client'

import { motion } from 'framer-motion'
import { Zap, Palette, MessageCircle, LifeBuoy } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const icons = [Zap, Palette, MessageCircle, LifeBuoy]

export function WhyWebaria() {
  const { t } = useI18n()
  const s = t.home.why
  return (
    <section className="relative py-24 lg:py-32 bg-card/30 border-y border-border">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {s.items.map((item: any, i: number) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 text-white glow-purple">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
