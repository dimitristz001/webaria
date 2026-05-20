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
}

const projects: Project[] = [
  {
    title: 'Nordic Bloom Eshop',
    category: 'Eshop',
    description: 'Headless Shopify store with custom checkout, AR product preview, and a 38% lift in conversion.',
    tech: ['Next.js', 'Shopify', 'GSAP'],
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  },
  {
    title: 'Lumen Wellness Booking',
    category: 'Booking System',
    description: 'Multi-location appointment platform with Stripe payments, SMS reminders and clinician dashboards.',
    tech: ['React', 'Supabase', 'Stripe'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  },
  {
    title: 'Helix CRM',
    category: 'Custom CRM',
    description: 'Internal CRM replacing four SaaS tools for a 60-person agency — saved €38k/year in subscriptions.',
    tech: ['Next.js', 'PostgreSQL', 'tRPC'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  },
  {
    title: 'Aether Studios Website',
    category: 'Website',
    description: 'Editorial brand site for a film studio with cinematic transitions and a custom CMS.',
    tech: ['Astro', 'Sanity', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  },
  {
    title: 'Orbit Launch Page',
    category: 'Landing Page',
    description: 'Pre-launch waitlist page that captured 12,400 signups in the first week.',
    tech: ['Vite', 'Resend', 'Cloud'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)',
  },
  {
    title: 'Pulse Analytics Dashboard',
    category: 'Custom Solution',
    description: 'Realtime analytics dashboard with AI insights for a logistics SaaS used by 300+ teams.',
    tech: ['React', 'D3', 'OpenAI'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
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
              {/* Visual */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                   style={{ background: p.gradient }} />
              <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                   style={{
                     backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,.5), transparent 40%),
                                       radial-gradient(circle at 70% 80%, rgba(0,0,0,.5), transparent 40%)`,
                   }} />
              {/* Mock browser chrome */}
              <div className="absolute inset-x-6 top-6 bottom-32 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-400/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <span className="w-2 h-2 rounded-full bg-green-400/70" />
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-2 w-2/3 rounded bg-white/30" />
                  <div className="h-2 w-1/2 rounded bg-white/20" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-8 rounded bg-white/15" />
                    <div className="h-8 rounded bg-white/10" />
                    <div className="h-8 rounded bg-white/15" />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs uppercase tracking-wider text-white/70 mb-2">{p.category}</div>
                <div className="flex items-end justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
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
              className="bg-card border border-border rounded-3xl max-w-2xl w-full overflow-hidden"
            >
              <div className="h-56 relative" style={{ background: active.gradient }}>
                <button onClick={() => setActive(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur text-white flex items-center justify-center hover:bg-black/50">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-wider text-accent-blue mb-2">{active.category}</div>
                <h3 className="font-display text-3xl font-bold mb-4">{active.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground border border-border">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
