'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  gradient: string
  image: string
  features: string[]
  results: { label: string; value: string }[]
  timeline: string
  client: string
}

const projects: Project[] = [
  {
    title: 'Nordic Bloom Eshop',
    category: 'Eshop',
    description: 'Headless Shopify store with custom checkout, AR product preview, and a 38% lift in conversion. Built for a Scandinavian floral brand expanding across the EU.',
    tech: ['Next.js', 'Shopify', 'GSAP'],
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80&auto=format&fit=crop',
    features: ['Headless Shopify backend', 'One-page checkout with Apple/Google Pay', 'AR product preview on mobile', 'Multi-currency & multi-language'],
    results: [{ label: 'Conversion lift', value: '+38%' }, { label: 'Page speed', value: '98/100' }, { label: 'Avg. order value', value: '+22%' }],
    timeline: '10 weeks',
    client: 'Nordic Bloom (Sweden)',
  },
  {
    title: 'Lumen Wellness Booking',
    category: 'Booking System',
    description: 'Multi-location appointment platform with Stripe payments, SMS reminders and clinician dashboards. Replaced 3 disconnected SaaS tools.',
    tech: ['React', 'Supabase', 'Stripe'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop',
    features: ['Real-time availability per clinician', 'Stripe deposits & cancellation policy', 'Automated SMS + email reminders', 'Admin dashboard with reports'],
    results: [{ label: 'No-show rate', value: '−61%' }, { label: 'Bookings/month', value: '4,200+' }, { label: 'Setup time', value: '6 weeks' }],
    timeline: '6 weeks',
    client: 'Lumen Wellness Group',
  },
  {
    title: 'Helix CRM',
    category: 'Custom CRM',
    description: 'Internal CRM replacing four SaaS tools for a 60-person agency — saved €38k/year in subscriptions and unified pipeline, billing and reporting.',
    tech: ['Next.js', 'PostgreSQL', 'tRPC'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    features: ['Kanban deal pipeline', 'Automated invoicing & reminders', 'Role-based permissions', 'Slack & Gmail integrations'],
    results: [{ label: 'Saved /year', value: '€38k' }, { label: 'Tools replaced', value: '4' }, { label: 'Active users', value: '60' }],
    timeline: '14 weeks',
    client: 'Helix Agency',
  },
  {
    title: 'Aether Studios Website',
    category: 'Website',
    description: 'Editorial brand site for a film studio with cinematic transitions and a custom CMS so the team can publish projects without engineering help.',
    tech: ['Astro', 'Sanity', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop',
    features: ['Custom Sanity CMS', 'Cinematic page transitions', 'Optimized video streaming', 'Editorial case studies layout'],
    results: [{ label: 'Lighthouse score', value: '99' }, { label: 'Inbound leads', value: '+140%' }, { label: 'Time on site', value: '3:42' }],
    timeline: '8 weeks',
    client: 'Aether Studios',
  },
  {
    title: 'Orbit Launch Page',
    category: 'Landing Page',
    description: 'Pre-launch waitlist page that captured 12,400 signups in the first week through tight copy, social proof and a referral loop.',
    tech: ['Vite', 'Resend', 'Cloud'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    features: ['Viral referral mechanic', 'Email capture with Resend', 'A/B tested hero variants', 'Analytics & funnel tracking'],
    results: [{ label: 'Signups (week 1)', value: '12,400' }, { label: 'Conversion', value: '21%' }, { label: 'CAC', value: '€0.12' }],
    timeline: '2 weeks',
    client: 'Orbit (YC S24)',
  },
  {
    title: 'Pulse Analytics Dashboard',
    category: 'Custom Solution',
    description: 'Realtime analytics dashboard with AI insights for a logistics SaaS used by 300+ teams. Surfaces anomalies in fleet performance automatically.',
    tech: ['React', 'D3', 'OpenAI'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop&sat=-20',
    features: ['Realtime data via websockets', 'AI-generated daily summaries', 'Custom D3 visualizations', 'CSV / API exports'],
    results: [{ label: 'Active teams', value: '300+' }, { label: 'Queries/day', value: '1.2M' }, { label: 'Insight accuracy', value: '94%' }],
    timeline: '12 weeks',
    client: 'Pulse Logistics',
  },
]

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null)

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
              <span className="w-8 h-px bg-accent-purple" /> Selected Work
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">
              Products we've shipped, <span className="gradient-text">recently</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A small slice of our portfolio — eshops, booking platforms, custom apps and brand websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group text-left relative aspect-[4/5] rounded-2xl overflow-hidden border border-border gentle-animation"
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Color tint */}
              <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: p.gradient }} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs uppercase tracking-wider text-white/70 mb-2">{p.category}</div>
                <div className="flex items-end justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
                <p className="mt-3 text-xs text-white/0 group-hover:text-white/80 transition-colors line-clamp-2">
                  {p.description}
                </p>
              </div>
            </motion.button>

          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-3xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={active.image} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 mix-blend-overlay opacity-50" style={{ background: active.gradient }} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <button onClick={() => setActive(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60">
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-xs uppercase tracking-wider text-accent-blue mb-1">{active.category}</div>
                  <h3 className="font-display text-3xl font-bold text-white">{active.title}</h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">{active.description}</p>

                <div className="grid grid-cols-3 gap-3">
                  {active.results.map(r => (
                    <div key={r.label} className="rounded-xl border border-border bg-secondary/40 p-4 text-center">
                      <div className="font-display text-2xl font-bold gradient-text">{r.value}</div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-accent-purple mb-3">Key features</div>
                    <ul className="space-y-2">
                      {active.features.map(f => (
                        <li key={f} className="flex gap-2 text-sm text-foreground/90">
                          <span className="text-accent-blue mt-1">▹</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-accent-purple mb-1">Client</div>
                      <div className="text-sm">{active.client}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-accent-purple mb-1">Timeline</div>
                      <div className="text-sm">{active.timeline}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-accent-purple mb-2">Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {active.tech.map(t => (
                          <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground border border-border">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
