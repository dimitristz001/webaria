'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Send, Twitter, Linkedin, Instagram, Github } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useI18n } from '@/lib/i18n'

export function Contact() {
  const { toast } = useToast()
  const { t } = useI18n()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: t.contact.fillAll, variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      toast({ title: t.contact.sent, description: t.contact.sentDesc })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 900)
  }

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-blue)) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 blob"
           style={{ background: 'radial-gradient(circle, hsl(var(--accent-purple)) 0%, transparent 70%)', animationDelay: '4s' }} />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-purple mb-4">
            <span className="w-8 h-px bg-accent-purple" /> {t.contact.eyebrow}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            {t.contact.title1}<span className="gradient-text">{t.contact.titleAccent}</span>{t.contact.title2}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.contact.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-card border border-border space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{t.contact.name}</label>
                <input
                  id="name" type="text" maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder={t.contact.namePh}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{t.contact.email}</label>
                <input
                  id="email" type="email" maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-blue transition-colors"
                  placeholder={t.contact.emailPh}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{t.contact.message}</label>
              <textarea
                id="message" rows={6} maxLength={1500}
                value={formData.message}
                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-blue transition-colors resize-none"
                placeholder={t.contact.messagePh}
              />
            </div>
            <motion.button
              type="submit" disabled={isSubmitting}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl gradient-bg text-white font-semibold glow-purple disabled:opacity-60"
            >
              {isSubmitting ? t.contact.sending : (<>{t.contact.send} <Send className="w-4 h-4" /></>)}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a href="mailto:hello@webistry.io"
               className="block p-6 rounded-2xl bg-card border border-border hover:border-accent-blue/50 transition-colors group">
              <div className="flex items-center gap-3 mb-2 text-accent-blue">
                <Mail className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest">{t.contact.email}</span>
              </div>
              <div className="font-display text-xl font-semibold group-hover:gradient-text transition-all">hello@webistry.io</div>
            </a>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-2 text-accent-purple">
                <MapPin className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest">{t.contact.studio}</span>
              </div>
              <div className="font-display text-xl font-semibold">{t.contact.studioVal}</div>
              <p className="text-sm text-muted-foreground mt-1">{t.contact.studioDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{t.contact.follow}</div>
              <div className="flex items-center gap-3">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#"
                     className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent-blue/50 hover:-translate-y-0.5 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
