'use client'

import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { projects, getProjectBySlug } from '@/data/projects'
import { Footer } from '@/components/Footer'

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const { t, lang } = useI18n()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  const locale = lang === 'el' ? project.el : project.en
  const category = t.portfolio.categories[project.categoryKey] || project.categoryKey

  const idx = projects.findIndex(p => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]
  const nextLocale = lang === 'el' ? next.el : next.en
  const nextCategory = t.portfolio.categories[next.categoryKey] || next.categoryKey

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-40 py-6">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center glow-blue">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white drop-shadow">Webaria</span>
          </Link>
          <Link to="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white px-4 py-2 rounded-lg bg-black/30 backdrop-blur border border-white/15">
            <ArrowLeft className="w-4 h-4" /> {t.caseStudy.back}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={project.image} alt={category} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: project.gradient }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-blue mb-3">
            <span className="w-8 h-px bg-accent-blue" /> {category}
          </div>
          <h1 className="font-display text-4xl lg:text-7xl font-bold leading-[1.05] text-white max-w-4xl">
            {project.title}
          </h1>
        </motion.div>
      </section>

      {/* Overview + Meta */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="text-xs uppercase tracking-widest text-accent-purple">{t.caseStudy.overview}</div>
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed font-display">
              {locale.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 p-6 rounded-2xl bg-card border border-border h-fit"
          >
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{t.portfolio.client}</div>
              <div className="text-sm font-medium">{locale.client}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{t.portfolio.timeline}</div>
              <div className="text-sm font-medium">{locale.timeline}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">{t.portfolio.stack}</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary border border-border">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: t.caseStudy.challenge, body: locale.challenge, color: 'accent-blue' },
            { title: t.caseStudy.solution, body: locale.solution, color: 'accent-purple' },
          ].map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border"
            >
              <div className={`text-xs uppercase tracking-widest mb-3 text-${block.color}`}>{block.title}</div>
              <p className="text-base lg:text-lg text-foreground/90 leading-relaxed">{block.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-xs uppercase tracking-widest text-accent-emerald mb-6">{t.caseStudy.results}</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {locale.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold gradient-text mb-2">{r.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-xs uppercase tracking-widest text-accent-purple mb-6">{t.portfolio.keyFeatures}</div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {locale.features.map((f) => (
              <li key={f} className="flex gap-3 p-5 rounded-xl bg-card/60 border border-border text-sm text-foreground/90">
                <span className="text-accent-blue mt-0.5">▹</span>{f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-xs uppercase tracking-widest text-accent-blue mb-6">{t.caseStudy.gallery}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-border aspect-video"
                >
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA + Next project */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">{t.caseStudy.ctaTitle}</h3>
            <p className="text-muted-foreground mb-6">{t.caseStudy.ctaDesc}</p>
            <Link to="/#contact"
              className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl glow-purple">
              {t.caseStudy.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Link to={`/work/${next.slug}`}
            className="group relative rounded-2xl overflow-hidden border border-border min-h-[220px] block">
            <img src={next.image} alt={nextCategory} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: next.gradient }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div className="text-xs uppercase tracking-widest opacity-80">{t.caseStudy.next}</div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1">{nextCategory}</div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  {next.title} <ArrowRight className="w-5 h-5" />
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
