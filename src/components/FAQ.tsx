'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const { t } = useI18n()
  const s = t.faq
  const items: { q: string; a: string }[] = s.items

  return (
    <section id="faq" aria-label="FAQ" className="relative py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, hsl(var(--accent-purple) / 0.12), transparent 60%)',
        }}
      />
      <div className="container relative mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {s.eyebrow}
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4">
            {s.title1}
            <span className="gradient-text">{s.titleAccent}</span>
            {s.title2}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-effect rounded-2xl border-white/10 px-5 lg:px-6"
              >
                <AccordionTrigger className="text-left font-display text-base lg:text-lg font-semibold hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
