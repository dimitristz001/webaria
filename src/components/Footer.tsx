'use client'

import { Sparkles, Twitter, Linkedin, Instagram, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-card/40 border-t border-border py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <a href="#hero" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl font-bold">Webistry</span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              A digital agency crafting high-performance websites, eshops, booking systems
              and custom digital products that turn visitors into customers.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#"
                   className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent-blue/50 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Services', 'Work', 'Process', 'Testimonials', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-foreground hover:gradient-text transition-all">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {['Website Development', 'Landing Pages', 'E-commerce', 'Booking Systems', 'CRM Systems', 'Custom Solutions'].map(l => (
                <li key={l}>
                  <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Webistry. All rights reserved.</div>
          <div>Crafted with intention · Built to convert</div>
        </div>
      </div>
    </footer>
  )
}
