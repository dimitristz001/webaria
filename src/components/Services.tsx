'use client'

import { motion } from 'framer-motion'
import {
  Globe, Rocket, ShoppingBag, CalendarCheck, Users, Wand2, ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Fast, accessible, SEO-ready marketing sites built with modern stacks and pixel-perfect design.',
    accent: 'blue',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    desc: 'High-converting campaign pages engineered around your funnel, copy, and analytics.',
    accent: 'purple',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce (Eshop)',
    desc: 'Custom Shopify, WooCommerce and headless storefronts optimized for revenue and retention.',
    accent: 'emerald',
  },
  {
    icon: CalendarCheck,
    title: 'Online Booking Systems',
    desc: 'Branded scheduling flows with payments, reminders, and calendar sync for service businesses.',
    accent: 'blue',
  },
  {
    icon: Users,
    title: 'CRM Systems',
    desc: 'Internal tools and CRMs that fit how your team actually works — no more bloated SaaS.',
    accent: 'purple',
  },
  {
    icon: Wand2,
    title: 'Custom Digital Solutions',
    desc: 'AI-powered apps, dashboards, and integrations tailored to your operational reality.',
    accent: 'emerald',
  },
]

const accentMap: Record<string, string> = {
  blue: 'hsl(var(--accent-blue))',
  purple: 'hsl(var(--accent-purple))',
  emerald: 'hsl(var(--accent-emerald))',
}

export function Services() {
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
            <span className="w-8 h-px bg-accent-blue" /> Services
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Everything you need to <span className="gradient-text">ship and scale</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            One team for design, engineering and growth — covering the entire lifecycle of your digital product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
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
                {/* hover gradient border */}
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
                    Learn more
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
