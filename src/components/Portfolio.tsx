'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
import { projects } from '@/data/projects'

export function Portfolio() {
  const { t, lang } = useI18n()

  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-purple mb-4">
              <span className="w-8 h-px bg-accent-purple" /> {t.portfolio.eyebrow}
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">
              {t.portfolio.title1}<span className="gradient-text">{t.portfolio.titleAccent}</span>{t.portfolio.title2}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t.portfolio.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const locale = lang === 'el' ? p.el : p.en
            const category = t.portfolio.categories[p.categoryKey] || p.categoryKey
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={`/work/${p.slug}`}
                  className="group block text-left relative aspect-[4/5] rounded-2xl overflow-hidden border border-border gentle-animation"
                >
                  <img
                    src={p.image}
                    alt={category}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: p.gradient }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="font-display text-xl font-bold">{category}</h3>
                      <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-white/0 group-hover:text-white/80 transition-colors line-clamp-2">
                      {locale.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
