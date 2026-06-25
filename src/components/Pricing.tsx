'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'

export function Pricing() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const items = t.pricing.items as Array<{ name: string; tagline: string; features: string[]; popular?: boolean }>

  const goToContact = (serviceName: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('webaria:preselectService', serviceName)
    }
    navigate('/contact')
  }

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-emerald mb-4">
            <span className="w-8 h-px bg-accent-emerald" /> {t.pricing.eyebrow}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            {t.pricing.title1}<span className="gradient-text">{t.pricing.titleAccent}</span>{t.pricing.title2}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.pricing.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((pkg, i) => {
            const isPopular = !!pkg.popular
            const isCustom = i === items.length - 1
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative p-7 rounded-2xl border gentle-animation flex flex-col ${
                  isPopular
                    ? 'bg-card border-transparent elevated-shadow'
                    : 'bg-card/60 border-border hover:border-accent-blue/40'
                }`}
                style={isPopular ? { boxShadow: '0 0 0 1px hsl(var(--accent-purple) / 0.4), 0 20px 60px -20px hsl(var(--accent-purple) / 0.35)' } : undefined}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold gradient-bg text-white uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" /> {t.pricing.popular}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/90">
                      <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isPopular ? 'gradient-bg text-white' : 'bg-secondary text-accent-blue'}`}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => goToContact(pkg.name)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isPopular
                      ? 'gradient-bg text-white hover:scale-[1.02] glow-purple'
                      : 'bg-background border border-border text-foreground hover:border-accent-blue/50 hover:text-foreground'
                  }`}
                >
                  {isCustom ? t.pricing.ctaCustom : t.pricing.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
