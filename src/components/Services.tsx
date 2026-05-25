'use client'

import { motion } from 'framer-motion'
import {
  Globe, Rocket, ShoppingBag, CalendarCheck, Users, Wand2, ArrowUpRight,
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const icons = [Globe, Rocket, ShoppingBag, CalendarCheck, Users, Wand2]
const accents = ['blue', 'purple', 'emerald', 'blue', 'purple', 'emerald']
const accentMap: Record<string, string> = {
  blue: 'hsl(var(--accent-blue))',
  purple: 'hsl(var(--accent-purple))',
  emerald: 'hsl(var(--accent-emerald))',
}

export function Services() {
  const { t } = useI18n()
  const services = t.services.items.map((it: any, i: number) => ({
    ...it, icon: icons[i], accent: accents[i],
  }))

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-blue mb-4">
            <span className="w-8 h-px bg-accent-blue" /> {t.services.eyebrow}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            {t.services.title1}<span className="gradient-text">{t.services.titleAccent}</span>{t.services.title2}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s: any, i: number) => {
            const Icon = s.icon
            const color = accentMap[s.accent]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden gentle-animation hover:border-transparent"
                style={{ ['--c' as any]: color }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: `linear-gradient(135deg, ${color}22, transparent 50%)` }} />
                <div className="pointer-events-none absolute -top-px -left-px -right-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                       style={{ background: `${color}1a`, color }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {t.services.learn}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
