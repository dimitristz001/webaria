'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'en' | 'el'

type Dict = Record<string, string | string[] | any>

const translations: Record<Lang, Dict> = {
  en: {
    nav: { services: 'Services', work: 'Work', process: 'Process', contact: 'Contact', cta: 'Get Started' },
    hero: {
      badge: 'Digital Agency · Available for new projects',
      title1: 'We Build ',
      titleAccent: 'Digital Experiences',
      title2: '.',
      desc: 'We’re Webaria — a small team that builds beautiful, fast websites, eshops and booking systems for people who care about how their brand shows up online.',
      cta: 'Get Started',
      view: 'View Work',
      stats: [
        { n: '120+', l: 'Projects shipped' },
        { n: '8 yrs', l: 'Building the web' },
        { n: '40+', l: 'Happy clients' },
        { n: '99%', l: 'Lighthouse score' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title1: 'Everything you need to ',
      titleAccent: 'ship and scale',
      title2: '.',
      desc: 'One team for design, engineering and growth — covering the entire lifecycle of your digital product.',
      learn: 'Learn more',
      items: [
        { title: 'Website Development', desc: 'Fast, accessible, SEO-ready marketing sites built with modern stacks and pixel-perfect design.' },
        { title: 'Landing Pages', desc: 'High-converting campaign pages engineered around your funnel, copy, and analytics.' },
        { title: 'E-commerce (Eshop)', desc: 'Custom Shopify, WooCommerce and headless storefronts optimized for revenue and retention.' },
        { title: 'Online Booking Systems', desc: 'Branded scheduling flows with payments, reminders, and calendar sync for service businesses.' },
        { title: 'CRM Systems', desc: 'Internal tools and CRMs that fit how your team actually works — no more bloated SaaS.' },
        { title: 'Custom Digital Solutions', desc: 'AI-powered apps, dashboards, and integrations tailored to your operational reality.' },
      ],
    },
    portfolio: {
      eyebrow: 'Selected Work',
      title1: "Products we've shipped, ",
      titleAccent: 'recently',
      title2: '.',
      desc: 'A small slice of our portfolio — eshops, booking platforms, custom apps and brand websites.',
      keyFeatures: 'Key features',
      client: 'Client',
      timeline: 'Timeline',
      stack: 'Stack',
      categories: {
        Eshop: 'Eshop',
        'Booking System': 'Booking System',
        'Custom CRM': 'Custom CRM',
        Website: 'Website',
        'Landing Page': 'Landing Page',
        'Custom Solution': 'Custom Solution',
      },
    },
    about: {
      eyebrow: 'Process',
      title1: 'A ',
      titleAccent: 'battle-tested',
      title2: ' workflow.',
      desc: 'Five focused phases. Clear deliverables, transparent timelines, no surprises.',
      steps: [
        { title: 'Discovery', desc: 'Workshops, audits, and stakeholder interviews to uncover what really matters.' },
        { title: 'Strategy', desc: 'Information architecture, content plan, KPIs and a roadmap aligned to outcomes.' },
        { title: 'Design', desc: 'Wireframes, brand-aligned UI, prototypes and a system that scales.' },
        { title: 'Development', desc: 'Performant, accessible, future-proof code with smooth handoff and QA.' },
        { title: 'Launch', desc: 'Deploy, measure, iterate. Post-launch optimization and ongoing growth support.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title1: "Let's build something ",
      titleAccent: 'great',
      title2: '.',
      desc: "Tell us about your project — we'll reply within 24 hours with thoughts and next steps.",
      name: 'Name', email: 'Email', message: 'Message',
      namePh: 'Your name', emailPh: 'you@company.com', messagePh: 'What are you building?',
      sending: 'Sending…', send: 'Send Message',
      fillAll: 'Please fill in all fields',
      sent: 'Message sent', sentDesc: "We'll get back to you within 24 hours.",
      studio: 'Studio', studioVal: 'Remote-first · EU & US', studioDesc: 'Working with teams worldwide.',
      follow: 'Follow us',
    },
    footer: {
      desc: 'A digital agency crafting high-performance websites, eshops, booking systems and custom digital products that turn visitors into customers.',
      explore: 'Explore', services: 'Services',
      links: ['Services', 'Work', 'Process', 'Contact'],
      serviceLinks: ['Website Development', 'Landing Pages', 'E-commerce', 'Booking Systems', 'CRM Systems', 'Custom Solutions'],
      rights: 'All rights reserved.',
      tag: 'Crafted with intention · Built to convert',
    },
  },
  el: {
    nav: { services: 'Υπηρεσίες', work: 'Έργα', process: 'Διαδικασία', contact: 'Επικοινωνία', cta: 'Ξεκινήστε' },
    hero: {
      badge: 'Digital Agency · Διαθέσιμοι για νέα έργα',
      title1: 'Δημιουργούμε ',
      titleAccent: 'Ψηφιακές Εμπειρίες',
      title2: ' που Μετατρέπουν.',
      desc: 'Η Webistry είναι ένα design-first studio που φτιάχνει ταχύτατα websites, eshops, συστήματα κρατήσεων και custom ψηφιακά προϊόντα που μετατρέπουν επισκέπτες σε πελάτες.',
      cta: 'Ξεκινήστε',
      view: 'Δείτε τα Έργα',
      stats: [
        { n: '120+', l: 'Ολοκληρωμένα έργα' },
        { n: '8 χρ.', l: 'Στο web' },
        { n: '40+', l: 'Ικανοποιημένοι πελάτες' },
        { n: '99%', l: 'Lighthouse score' },
      ],
    },
    services: {
      eyebrow: 'Υπηρεσίες',
      title1: 'Όλα όσα χρειάζεστε για ',
      titleAccent: 'να ξεκινήσετε και να μεγαλώσετε',
      title2: '.',
      desc: 'Μία ομάδα για design, development και growth — καλύπτουμε όλο τον κύκλο ζωής του ψηφιακού σας προϊόντος.',
      learn: 'Μάθετε περισσότερα',
      items: [
        { title: 'Κατασκευή Ιστοσελίδων', desc: 'Γρήγορα, προσβάσιμα, SEO-ready websites με σύγχρονο stack και pixel-perfect σχεδιασμό.' },
        { title: 'Landing Pages', desc: 'Σελίδες υψηλής μετατροπής, σχεδιασμένες γύρω από το funnel, το copy και τα analytics σας.' },
        { title: 'E-commerce (Eshop)', desc: 'Custom Shopify, WooCommerce και headless eshops βελτιστοποιημένα για έσοδα και επαναληπτικές αγορές.' },
        { title: 'Συστήματα Online Κρατήσεων', desc: 'Branded ροές κρατήσεων με πληρωμές, υπενθυμίσεις και συγχρονισμό ημερολογίου.' },
        { title: 'Συστήματα CRM', desc: 'Εσωτερικά εργαλεία και CRMs φτιαγμένα στα μέτρα της ομάδας σας — τέλος στα φουσκωμένα SaaS.' },
        { title: 'Custom Ψηφιακές Λύσεις', desc: 'AI εφαρμογές, dashboards και integrations προσαρμοσμένα στην επιχειρησιακή σας πραγματικότητα.' },
      ],
    },
    portfolio: {
      eyebrow: 'Επιλεγμένα Έργα',
      title1: 'Έργα που έχουμε υλοποιήσει, ',
      titleAccent: 'πρόσφατα',
      title2: '.',
      desc: 'Ένα μικρό δείγμα του portfolio μας — eshops, πλατφόρμες κρατήσεων, custom apps και brand websites.',
      keyFeatures: 'Βασικά χαρακτηριστικά',
      client: 'Πελάτης',
      timeline: 'Χρονοδιάγραμμα',
      stack: 'Τεχνολογίες',
      categories: {
        Eshop: 'Eshop',
        'Booking System': 'Σύστημα Κρατήσεων',
        'Custom CRM': 'Custom CRM',
        Website: 'Ιστοσελίδα',
        'Landing Page': 'Landing Page',
        'Custom Solution': 'Custom Λύση',
      },
    },
    about: {
      eyebrow: 'Διαδικασία',
      title1: 'Μια ',
      titleAccent: 'δοκιμασμένη',
      title2: ' ροή εργασίας.',
      desc: 'Πέντε εστιασμένες φάσεις. Καθαρά παραδοτέα, διαφανή χρονοδιαγράμματα, καμία έκπληξη.',
      steps: [
        { title: 'Discovery', desc: 'Workshops, audits και συνεντεύξεις με stakeholders για να βρούμε τι έχει πραγματικά σημασία.' },
        { title: 'Στρατηγική', desc: 'Information architecture, πλάνο περιεχομένου, KPIs και roadmap ευθυγραμμισμένο με τους στόχους.' },
        { title: 'Σχεδιασμός', desc: 'Wireframes, UI ευθυγραμμισμένο με το brand, prototypes και ένα σύστημα που κλιμακώνεται.' },
        { title: 'Ανάπτυξη', desc: 'Γρήγορος, προσβάσιμος, μελλοντοβλέπων κώδικας με ομαλή παράδοση και QA.' },
        { title: 'Launch', desc: 'Deploy, μετράμε, βελτιώνουμε. Post-launch optimization και συνεχής υποστήριξη ανάπτυξης.' },
      ],
    },
    contact: {
      eyebrow: 'Επικοινωνία',
      title1: 'Ας φτιάξουμε κάτι ',
      titleAccent: 'σπουδαίο',
      title2: '.',
      desc: 'Πείτε μας για το έργο σας — θα σας απαντήσουμε εντός 24 ωρών με σκέψεις και επόμενα βήματα.',
      name: 'Όνομα', email: 'Email', message: 'Μήνυμα',
      namePh: 'Το όνομά σας', emailPh: 'you@company.com', messagePh: 'Τι φτιάχνετε;',
      sending: 'Αποστολή…', send: 'Αποστολή Μηνύματος',
      fillAll: 'Παρακαλώ συμπληρώστε όλα τα πεδία',
      sent: 'Το μήνυμα στάλθηκε', sentDesc: 'Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.',
      studio: 'Studio', studioVal: 'Remote-first · ΕΕ & ΗΠΑ', studioDesc: 'Συνεργαζόμαστε με ομάδες παγκοσμίως.',
      follow: 'Ακολουθήστε μας',
    },
    footer: {
      desc: 'Ένα digital agency που φτιάχνει ταχύτατα websites, eshops, συστήματα κρατήσεων και custom ψηφιακά προϊόντα που μετατρέπουν επισκέπτες σε πελάτες.',
      explore: 'Εξερευνήστε', services: 'Υπηρεσίες',
      links: ['Υπηρεσίες', 'Έργα', 'Διαδικασία', 'Επικοινωνία'],
      serviceLinks: ['Κατασκευή Ιστοσελίδων', 'Landing Pages', 'E-commerce', 'Συστήματα Κρατήσεων', 'Συστήματα CRM', 'Custom Λύσεις'],
      rights: 'Με την επιφύλαξη παντός δικαιώματος.',
      tag: 'Φτιαγμένο με μεράκι · Σχεδιασμένο για μετατροπές',
    },
  },
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: any }
const I18nContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: translations.en })

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    return (localStorage.getItem('lang') as Lang) || 'en'
  })
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  const setLang = (l: Lang) => setLangState(l)
  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
