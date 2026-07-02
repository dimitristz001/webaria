'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'en' | 'el'

type Dict = Record<string, string | string[] | any>

const translations: Record<Lang, Dict> = {
  en: {
    nav: { services: 'Services', pricing: 'Pricing', work: 'Work', process: 'Process', contact: 'Contact', cta: 'Get Started' },
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
    pricing: {
      eyebrow: 'Pricing',
      title1: 'Simple, transparent ',
      titleAccent: 'packages',
      title2: '.',
      desc: 'Pick the package closest to what you need — we’ll send a clear, custom quote within 24 hours.',
      popular: 'Most popular',
      cta: 'Request a quote',
      ctaCustom: 'Talk to us',
      items: [
        {
          name: 'Starter Site',
          tagline: 'Simple 1–3 page site to get you online',
          features: ['1 to 3 custom-designed pages', 'Fully responsive on mobile & desktop', 'Basic SEO & contact form', 'Fast launch (about 1–2 weeks)'],
        },
        {
          name: 'Business Website',
          tagline: 'Complete website for growing businesses',
          features: ['3 to 8 custom-designed pages', 'Easy-to-use CMS for updates', 'SEO foundations & analytics', 'Mobile-first & accessible'],
        },
        {
          name: 'Eshop',
          tagline: 'Full online store built to sell',
          features: ['Products, cart & secure checkout', 'Card payments (Stripe / local gateways)', 'Order & inventory management', 'Easy product uploads & edits'],
        },
        {
          name: 'Booking System',
          tagline: 'Online bookings for salons, barbers, nails & spa',
          features: ['24/7 online appointments', 'Calendar & staff management', 'Automatic reminders for clients', 'Full booking dashboard'],
          popular: true,
        },
        {
          name: 'Digital Menu',
          tagline: 'QR menu for cafés, restaurants & bars',
          features: ['QR codes for every table', 'Categories, photos & allergens', 'Multi-language support', 'Update prices & items in seconds'],
        },
        {
          name: 'Dynamic QR Management',
          tagline: 'Manage dynamic QR codes with analytics',
          features: ['Create & edit QR destinations anytime', 'Scan analytics per campaign', 'Perfect for Airbnb & accommodations', 'Property info, guides & directions'],
        },
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
      viewCase: 'View case study',
      categories: {
        Eshop: 'Eshop',
        'Booking System': 'Booking System',
        'Custom CRM': 'Custom CRM',
        Website: 'Website',
        'Landing Page': 'Landing Page',
        'Custom Solution': 'Custom Solution',
      },
    },
    caseStudy: {
      back: 'Back to all work',
      overview: 'Overview',
      challenge: 'The challenge',
      solution: 'Our solution',
      results: 'Results',
      gallery: 'Gallery',
      next: 'Next project',
      ctaTitle: 'Have a similar project in mind?',
      ctaDesc: 'Tell us what you’re building — we’ll reply within 24 hours.',
      ctaButton: 'Start a project',
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
      name: 'Name', email: 'Email', message: 'Message', service: 'Interested in',
      servicePh: 'Pick a service (optional)',
      namePh: 'Your name', emailPh: 'you@company.com', messagePh: 'What are you building?',
      sending: 'Sending…', send: 'Send Message',
      fillAll: 'Please fill in all fields correctly',
      sent: 'Message sent', sentDesc: "We'll get back to you within 24 hours.",
      errorTitle: 'Something went wrong', errorDesc: 'Please try again in a moment.',
      studio: 'Studio', studioVal: 'Remote-first · EU & US', studioDesc: 'Working with teams worldwide.',
      follow: 'Follow us',
    },
    home: {
      services: {
        eyebrow: 'What we do',
        title: 'Simple services, done right.',
        desc: 'From marketing sites to full custom platforms — one team, clear scope, honest timelines.',
        cta: 'See all services',
        items: [
          { title: 'Websites', desc: 'Fast, clean sites that make your brand look serious.' },
          { title: 'E-shops', desc: 'Online stores built to sell — from checkout to shipping.' },
          { title: 'Booking Systems', desc: 'Automated bookings with payments and reminders.' },
          { title: 'Custom Solutions', desc: 'CRMs, dashboards and internal tools tailored to your team.' },
        ],
      },
      why: {
        eyebrow: 'Why Webaria',
        title: 'A team that actually cares.',
        desc: 'We are small on purpose — so every project gets full attention.',
        items: [
          { title: 'Fast delivery', desc: 'Most projects ship in 2 to 8 weeks, not months.' },
          { title: 'Clean design', desc: 'Modern, timeless interfaces that age well.' },
          { title: 'Honest communication', desc: 'Clear updates, no jargon, no surprises on the invoice.' },
          { title: 'Support after launch', desc: 'We stay around after go-live to help you grow.' },
        ],
      },
      work: {
        eyebrow: 'Selected work',
        title: 'A few things we recently shipped.',
        desc: 'Real projects, real clients — from eshops to custom platforms.',
        cta: 'See all work',
      },
      homeCta: {
        title: 'Have an idea? Let’s talk.',
        desc: 'Tell us about your project and we’ll get back to you within 24 hours.',
        button: 'Start a project',
      },
    },
    footer: {
      desc: 'A small digital studio building websites, eshops and booking systems that feel as good as they perform.',
      explore: 'Explore', services: 'Services',
      links: ['Services', 'Pricing', 'Work', 'Contact'],
      serviceLinks: ['Website Development', 'Landing Pages', 'E-commerce', 'Booking Systems', 'CRM Systems', 'Custom Solutions'],
      rights: 'All rights reserved.',
      tag: 'Crafted with care · Made in-house',
    },
  },
  el: {
    nav: { services: 'Υπηρεσίες', pricing: 'Πακέτα', work: 'Έργα', process: 'Διαδικασία', contact: 'Επικοινωνία', cta: 'Ξεκινήστε' },
    hero: {
      badge: 'Digital Agency · Διαθέσιμοι για νέα έργα',
      title1: 'Δημιουργούμε ',
      titleAccent: 'Ψηφιακές Εμπειρίες',
      title2: '.',
      desc: 'Είμαστε η Webaria — μια μικρή ομάδα που φτιάχνει όμορφα και γρήγορα websites, eshops και συστήματα κρατήσεων για ανθρώπους που νοιάζονται για το brand τους.',
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
    pricing: {
      eyebrow: 'Πακέτα',
      title1: 'Απλά, ξεκάθαρα ',
      titleAccent: 'πακέτα',
      title2: '.',
      desc: 'Διαλέξτε το πακέτο που σας ταιριάζει — θα σας στείλουμε καθαρή, εξατομικευμένη προσφορά εντός 24 ωρών. Καμία έκπληξη, καμία φουσκωμένη συνδρομή.',
      popular: 'Πιο δημοφιλές',
      cta: 'Ζητήστε προσφορά',
      ctaCustom: 'Μιλήστε μας',
      items: [
        {
          name: 'Απλή Ιστοσελίδα',
          tagline: 'Ιστοσελίδα 1–3 σελίδων για γρήγορη online παρουσία',
          features: ['1 έως 3 σχεδιασμένες σελίδες', 'Πλήρως responsive σε κινητό & desktop', 'Βασικό SEO & φόρμα επικοινωνίας', 'Γρήγορη παράδοση (περίπου 1–2 εβδομάδες)'],
        },
        {
          name: 'Business Website',
          tagline: 'Ολοκληρωμένο website για επιχειρήσεις',
          features: ['3 έως 8 σχεδιασμένες σελίδες', 'Εύχρηστο CMS για ενημερώσεις', 'Βάσεις SEO & analytics', 'Mobile-first & προσβάσιμο'],
        },
        {
          name: 'Eshop',
          tagline: 'Πλήρες online κατάστημα φτιαγμένο για να πουλάει',
          features: ['Προϊόντα, καλάθι & ασφαλές checkout', 'Πληρωμές με κάρτα (Stripe / τοπικά gateways)', 'Διαχείριση παραγγελιών & αποθέματος', 'Εύκολη ανάρτηση & επεξεργασία προϊόντων'],
        },
        {
          name: 'Σύστημα Κρατήσεων',
          tagline: 'Online ραντεβού για κομμωτήρια, barber, nails & spa',
          features: ['24/7 online ραντεβού', 'Ημερολόγιο & διαχείριση προσωπικού', 'Αυτόματες υπενθυμίσεις πελατών', 'Πλήρες dashboard κρατήσεων'],
          popular: true,
        },
        {
          name: 'Ψηφιακό Μενού',
          tagline: 'QR μενού για café, εστιατόρια & bars',
          features: ['QR codes σε κάθε τραπέζι', 'Κατηγορίες, φωτογραφίες & αλλεργιογόνα', 'Υποστήριξη πολλών γλωσσών', 'Ενημέρωση τιμών & προϊόντων σε δευτερόλεπτα'],
        },
        {
          name: 'Dynamic QR Management',
          tagline: 'Διαχείριση δυναμικών QR codes με analytics',
          features: ['Δημιουργία & αλλαγή προορισμού QR ανά πάσα στιγμή', 'Analytics σκαναρισμάτων ανά campaign', 'Ιδανικό για Airbnb & καταλύματα', 'Πληροφορίες σπιτιού, οδηγοί & προορισμοί'],
        },
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
      viewCase: 'Δείτε το case study',
      categories: {
        Eshop: 'Eshop',
        'Booking System': 'Σύστημα Κρατήσεων',
        'Custom CRM': 'Custom CRM',
        Website: 'Ιστοσελίδα',
        'Landing Page': 'Landing Page',
        'Custom Solution': 'Custom Λύση',
      },
    },
    caseStudy: {
      back: 'Πίσω στα έργα',
      overview: 'Επισκόπηση',
      challenge: 'Η πρόκληση',
      solution: 'Η λύση μας',
      results: 'Αποτελέσματα',
      gallery: 'Gallery',
      next: 'Επόμενο έργο',
      ctaTitle: 'Έχετε παρόμοιο έργο στο μυαλό σας;',
      ctaDesc: 'Πείτε μας τι φτιάχνετε — θα σας απαντήσουμε εντός 24 ωρών.',
      ctaButton: 'Ξεκινήστε ένα έργο',
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
      name: 'Όνομα', email: 'Email', message: 'Μήνυμα', service: 'Ενδιαφέρομαι για',
      servicePh: 'Διαλέξτε υπηρεσία (προαιρετικό)',
      namePh: 'Το όνομά σας', emailPh: 'you@company.com', messagePh: 'Τι φτιάχνετε;',
      sending: 'Αποστολή…', send: 'Αποστολή Μηνύματος',
      fillAll: 'Παρακαλώ συμπληρώστε σωστά όλα τα πεδία',
      sent: 'Το μήνυμα στάλθηκε', sentDesc: 'Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.',
      errorTitle: 'Κάτι πήγε στραβά', errorDesc: 'Παρακαλώ δοκιμάστε ξανά σε λίγο.',
      studio: 'Studio', studioVal: 'Remote-first · ΕΕ & ΗΠΑ', studioDesc: 'Συνεργαζόμαστε με ομάδες παγκοσμίως.',
      follow: 'Ακολουθήστε μας',
    },
    home: {
      services: {
        eyebrow: 'Τι κάνουμε',
        title: 'Απλές υπηρεσίες, φτιαγμένες σωστά.',
        desc: 'Από απλά websites μέχρι custom πλατφόρμες — μία ομάδα, ξεκάθαρο scope, ειλικρινή χρονοδιαγράμματα.',
        cta: 'Δείτε όλες τις υπηρεσίες',
        items: [
          { title: 'Ιστοσελίδες', desc: 'Γρήγορες, καθαρές σελίδες που κάνουν το brand σας να δείχνει σοβαρό.' },
          { title: 'E-shops', desc: 'Ηλεκτρονικά καταστήματα φτιαγμένα για να πουλάνε — από το checkout μέχρι την αποστολή.' },
          { title: 'Συστήματα Κρατήσεων', desc: 'Αυτοματοποιημένες κρατήσεις με πληρωμές και υπενθυμίσεις.' },
          { title: 'Custom Λύσεις', desc: 'CRMs, dashboards και εσωτερικά εργαλεία στα μέτρα της ομάδας σας.' },
        ],
      },
      why: {
        eyebrow: 'Γιατί Webaria',
        title: 'Μια ομάδα που πραγματικά νοιάζεται.',
        desc: 'Είμαστε μικροί επίτηδες — για να δίνουμε πλήρη προσοχή σε κάθε έργο.',
        items: [
          { title: 'Γρήγορη παράδοση', desc: 'Τα περισσότερα έργα παραδίδονται σε 2 έως 8 εβδομάδες, όχι μήνες.' },
          { title: 'Καθαρός σχεδιασμός', desc: 'Μοντέρνα, διαχρονικά interfaces που δεν παλιώνουν.' },
          { title: 'Ειλικρινής επικοινωνία', desc: 'Ξεκάθαρα updates, χωρίς jargon και εκπλήξεις στο τιμολόγιο.' },
          { title: 'Υποστήριξη μετά το launch', desc: 'Μένουμε δίπλα σας για να σας βοηθήσουμε να μεγαλώσετε.' },
        ],
      },
      work: {
        eyebrow: 'Επιλεγμένα έργα',
        title: 'Μερικά πράγματα που φτιάξαμε πρόσφατα.',
        desc: 'Πραγματικά έργα, πραγματικοί πελάτες — από eshops μέχρι custom πλατφόρμες.',
        cta: 'Δείτε όλα τα έργα',
      },
      homeCta: {
        title: 'Έχετε μια ιδέα; Ας μιλήσουμε.',
        desc: 'Πείτε μας για το έργο σας και θα σας απαντήσουμε εντός 24 ωρών.',
        button: 'Ξεκινήστε ένα έργο',
      },
    },
    footer: {
      desc: 'Ένα μικρό ψηφιακό studio που φτιάχνει websites, eshops και συστήματα κρατήσεων με μεράκι και προσοχή στη λεπτομέρεια.',
      explore: 'Εξερευνήστε', services: 'Υπηρεσίες',
      links: ['Υπηρεσίες', 'Πακέτα', 'Έργα', 'Επικοινωνία'],
      serviceLinks: ['Κατασκευή Ιστοσελίδων', 'Landing Pages', 'E-commerce', 'Συστήματα Κρατήσεων', 'Συστήματα CRM', 'Custom Λύσεις'],
      rights: 'Με την επιφύλαξη παντός δικαιώματος.',
      tag: 'Φτιαγμένο με μεράκι · Από τη δική μας ομάδα',
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
