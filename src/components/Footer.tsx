'use client'

import { Twitter, Linkedin, Instagram, Github } from 'lucide-react'

const SOCIALS: { Icon: typeof Twitter; href: string; label: string }[] = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/webariagr?igsh=ZDlsdXp1c2FyZjV4&utm_source=qr', label: 'Instagram' },
  { Icon: Github, href: '#', label: 'GitHub' },
]
import { Link } from 'react-router-dom'
const logoMark = { url: '/favicon.png' }
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()
  const hrefs = ['/services', '/pricing', '/work', '/contact']
  return (
    <footer className="relative bg-card/40 border-t border-border py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <a href="/" className="flex items-center gap-2 mb-5">
              <img src={logoMark.url} alt="Webaria" className="w-9 h-9 object-contain" />
              <span className="font-display text-xl font-bold">Webaria</span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={label}
                   className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent-blue/50 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">{t.footer.explore}</h4>
            <ul className="space-y-2">
              {t.footer.links.map((l: string, i: number) => (
                <li key={l}>
                  <Link to={hrefs[i]} className="text-foreground/80 hover:text-foreground hover:gradient-text transition-all">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.footer.serviceLinks.map((l: string) => (
                <li key={l}>
                  <Link to="/services" className="text-foreground/80 hover:text-foreground transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Webaria. {t.footer.rights}</div>
          <div>{t.footer.tag}</div>
        </div>
      </div>
    </footer>
  )
}
