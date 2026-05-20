'use client'

import { motion } from 'framer-motion'
import { Search, Compass, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
  { n: '01', icon: Search, title: 'Discovery', desc: 'Workshops, audits, and stakeholder interviews to uncover what really matters.' },
  { n: '02', icon: Compass, title: 'Strategy', desc: 'Information architecture, content plan, KPIs and a roadmap aligned to outcomes.' },
  { n: '03', icon: Palette, title: 'Design', desc: 'Wireframes, brand-aligned UI, prototypes and a system that scales.' },
  { n: '04', icon: Code2, title: 'Development', desc: 'Performant, accessible, future-proof code with smooth handoff and QA.' },
  { n: '05', icon: Rocket, title: 'Launch', desc: 'Deploy, measure, iterate. Post-launch optimization and ongoing growth support.' },
]

export function About() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-15"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-emerald mb-4">
            <span className="w-8 h-px bg-accent-emerald" /> Process
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            A <span className="gradient-text">battle-tested</span> workflow.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Five focused phases. Clear deliverables, transparent timelines, no surprises.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const Icon = s.icon
              const left = i % 2 === 0
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 items-center ${left ? '' : 'md:[&>*:first-child]:order-2'}`}
                >
                  {/* Card */}
                  <div className={`relative ${left ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="inline-flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border hover:border-accent-blue/40 transition-colors max-w-md">
                      <div className={`flex items-center gap-4 ${left ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="font-display text-5xl font-bold gradient-text">{s.n}</div>
                      </div>
                      <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full gradient-bg glow-purple items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Spacer column */}
                  <div className="hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
