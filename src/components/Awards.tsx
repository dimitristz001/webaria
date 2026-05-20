'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Webistry rebuilt our entire eshop in six weeks. Conversion jumped 38% in the first month and the team finally enjoys using the admin.",
    author: 'Elena Marinos',
    role: 'CEO, Nordic Bloom',
    accent: 'blue',
  },
  {
    quote: "The custom CRM they delivered replaced four SaaS tools and saved us nearly €40k a year. Best agency decision we've made.",
    author: 'Dimitris Papadakis',
    role: 'COO, Helix Agency',
    accent: 'purple',
  },
  {
    quote: "They don't just design pretty pages — they think about funnel, copy, and analytics from day one. Real partners.",
    author: 'Sarah Chen',
    role: 'Founder, Orbit',
    accent: 'emerald',
  },
  {
    quote: "Our new booking platform handles 4× the traffic with zero issues. The UX is genuinely a competitive advantage now.",
    author: 'Marco Bianchi',
    role: 'Director, Lumen Wellness',
    accent: 'blue',
  },
  {
    quote: "Beautiful design, clean code, on-time delivery. They communicated better than any internal team I've worked with.",
    author: 'Jana Kowalska',
    role: 'Head of Product, Aether',
    accent: 'purple',
  },
  {
    quote: "From discovery to launch in 9 weeks. The Lighthouse scores alone made our marketing team cry happy tears.",
    author: 'Tom Reilly',
    role: 'CMO, Pulse Analytics',
    accent: 'emerald',
  },
]

const accentMap: Record<string, string> = {
  blue: 'hsl(var(--accent-blue))',
  purple: 'hsl(var(--accent-purple))',
  emerald: 'hsl(var(--accent-emerald))',
}

export function Awards() {
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
            <span className="w-8 h-px bg-accent-blue" /> Testimonials
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Trusted by teams who <span className="gradient-text">ship</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founders, marketers and product leaders on what it's like to work with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const color = accentMap[t.accent]
            return (
              <motion.figure
                key={t.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden gentle-animation hover:border-accent-blue/40"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 opacity-10" style={{ color }} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" style={{ color }} />
                  ))}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                  "{t.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white"
                       style={{ background: color }}>
                    {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
