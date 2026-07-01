'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
import { projects } from '@/data/projects'

export function WorkHighlights() {
  const { t, lang } = useI18n()
  const s = t.home.work
  const highlights = projects.slice(0, 3)

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{s.eyebrow}</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-4">{s.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
          </div>
          <Link
            to="/work"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gradient-text gentle-animation"
          >
            {s.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((p, i) => {
            const category = t.portfolio.categories[p.categoryKey] || p.categoryKey
            const desc = p[lang].description
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/work/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden glass-effect hover:border-accent-blue/40 gentle-animation h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={category}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-background/70 backdrop-blur border border-border">
                      {category}
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{desc}</p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 glass-effect text-foreground font-semibold px-6 py-3 rounded-xl hover:border-accent-blue/50 gentle-animation"
          >
            {s.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
