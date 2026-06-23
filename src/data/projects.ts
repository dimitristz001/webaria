export type ProjectLocale = {
  description: string
  challenge: string
  solution: string
  features: string[]
  results: { label: string; value: string }[]
  timeline: string
  client: string
}

export type Project = {
  slug: string
  title: string
  categoryKey: string
  tech: string[]
  gradient: string
  image: string
  gallery: string[]
  en: ProjectLocale
  el: ProjectLocale
}

export const projects: Project[] = [
  {
    slug: 'nordic-bloom',
    title: 'Nordic Bloom Eshop',
    categoryKey: 'Eshop',
    tech: ['Next.js', 'Shopify', 'GSAP'],
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1400&q=80&auto=format&fit=crop',
    ],
    en: {
      description: 'Headless Shopify store with custom checkout, AR product preview, and a 38% lift in conversion. Built for a Scandinavian floral brand expanding across the EU.',
      challenge: 'A growing Scandinavian floral brand was outgrowing its theme-based Shopify store. Conversion was flat, mobile felt slow, and the team couldn’t experiment without a developer.',
      solution: 'We rebuilt the storefront headlessly on Next.js with a tailored one-page checkout, Apple/Google Pay, and an AR preview that lets customers “place” bouquets in their space before buying.',
      features: ['Headless Shopify backend', 'One-page checkout with Apple/Google Pay', 'AR product preview on mobile', 'Multi-currency & multi-language'],
      results: [{ label: 'Conversion lift', value: '+38%' }, { label: 'Page speed', value: '98/100' }, { label: 'Avg. order value', value: '+22%' }],
      timeline: '10 weeks',
      client: 'Nordic Bloom (Sweden)',
    },
    el: {
      description: 'Headless Shopify κατάστημα με custom checkout, AR προεπισκόπηση προϊόντος και 38% αύξηση μετατροπών. Φτιαγμένο για ένα Σκανδιναβικό floral brand που επεκτείνεται στην ΕΕ.',
      challenge: 'Ένα ανερχόμενο Σκανδιναβικό floral brand είχε ξεπεράσει το theme-based Shopify του. Οι μετατροπές είχαν κολλήσει, το mobile ήταν αργό και η ομάδα δεν μπορούσε να πειραματιστεί χωρίς developer.',
      solution: 'Φτιάξαμε το storefront από την αρχή headless πάνω σε Next.js, με προσαρμοσμένο one-page checkout, Apple/Google Pay και AR προεπισκόπηση που επιτρέπει στους πελάτες να «τοποθετούν» μπουκέτα στον χώρο τους.',
      features: ['Headless Shopify backend', 'One-page checkout με Apple/Google Pay', 'AR προεπισκόπηση προϊόντος σε mobile', 'Πολλαπλά νομίσματα & γλώσσες'],
      results: [{ label: 'Αύξηση μετατροπών', value: '+38%' }, { label: 'Ταχύτητα σελίδας', value: '98/100' }, { label: 'Μέση αξία παραγγελίας', value: '+22%' }],
      timeline: '10 εβδομάδες',
      client: 'Nordic Bloom (Σουηδία)',
    },
  },
  {
    slug: 'lumen-wellness',
    title: 'Lumen Wellness Booking',
    categoryKey: 'Booking System',
    tech: ['React', 'Supabase', 'Stripe'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80&auto=format&fit=crop',
    ],
    en: {
      description: 'Multi-location appointment platform with Stripe payments, SMS reminders and clinician dashboards. Replaced 3 disconnected SaaS tools.',
      challenge: 'A wellness group with five locations was juggling three booking tools, manual reminders, and a 19% no-show rate that was costing real money every week.',
      solution: 'We shipped a unified booking platform with real-time availability per clinician, Stripe deposits, automated reminders and a clean admin dashboard the team actually likes to open.',
      features: ['Real-time availability per clinician', 'Stripe deposits & cancellation policy', 'Automated SMS + email reminders', 'Admin dashboard with reports'],
      results: [{ label: 'No-show rate', value: '−61%' }, { label: 'Bookings/month', value: '4,200+' }, { label: 'Setup time', value: '6 weeks' }],
      timeline: '6 weeks',
      client: 'Lumen Wellness Group',
    },
    el: {
      description: 'Πλατφόρμα ραντεβού πολλαπλών τοποθεσιών με πληρωμές Stripe, SMS υπενθυμίσεις και dashboards για το προσωπικό. Αντικατέστησε 3 ασύνδετα SaaS εργαλεία.',
      challenge: 'Ένας όμιλος wellness με πέντε σημεία ταλαιπωρούνταν με τρία διαφορετικά εργαλεία κρατήσεων, χειροκίνητες υπενθυμίσεις και 19% ποσοστό no-show που του κόστιζε κάθε εβδομάδα.',
      solution: 'Φτιάξαμε ενιαία πλατφόρμα με διαθεσιμότητα σε πραγματικό χρόνο ανά επαγγελματία, προκαταβολές Stripe, αυτόματες υπενθυμίσεις και ένα admin που η ομάδα ανοίγει με ευχαρίστηση.',
      features: ['Διαθεσιμότητα σε πραγματικό χρόνο ανά επαγγελματία', 'Stripe προκαταβολές & πολιτική ακύρωσης', 'Αυτοματοποιημένες υπενθυμίσεις SMS + email', 'Admin dashboard με αναφορές'],
      results: [{ label: 'Ποσοστό no-show', value: '−61%' }, { label: 'Κρατήσεις/μήνα', value: '4.200+' }, { label: 'Χρόνος setup', value: '6 εβδομάδες' }],
      timeline: '6 εβδομάδες',
      client: 'Lumen Wellness Group',
    },
  },
  {
    slug: 'helix-crm',
    title: 'Helix CRM',
    categoryKey: 'Custom CRM',
    tech: ['Next.js', 'PostgreSQL', 'tRPC'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1400&q=80&auto=format&fit=crop',
    ],
    en: {
      description: 'Internal CRM replacing four SaaS tools for a 60-person agency — saved €38k/year in subscriptions and unified pipeline, billing and reporting.',
      challenge: 'A 60-person agency was paying for four SaaS tools that almost talked to each other. Numbers never matched, reporting took days, and nobody trusted the pipeline.',
      solution: 'We built a focused internal CRM that fits how the team actually works — kanban pipeline, automated invoicing, role-based permissions, and integrations with Slack & Gmail.',
      features: ['Kanban deal pipeline', 'Automated invoicing & reminders', 'Role-based permissions', 'Slack & Gmail integrations'],
      results: [{ label: 'Saved /year', value: '€38k' }, { label: 'Tools replaced', value: '4' }, { label: 'Active users', value: '60' }],
      timeline: '14 weeks',
      client: 'Helix Agency',
    },
    el: {
      description: 'Εσωτερικό CRM που αντικατέστησε τέσσερα SaaS εργαλεία για agency 60 ατόμων — εξοικονόμηση €38χιλ/έτος και ενοποίηση pipeline, τιμολόγησης και αναφορών.',
      challenge: 'Ένα agency 60 ατόμων πλήρωνε τέσσερα SaaS που δεν συνεννοούνταν μεταξύ τους. Τα νούμερα δεν ταίριαζαν ποτέ, το reporting έπαιρνε μέρες και κανείς δεν εμπιστευόταν το pipeline.',
      solution: 'Φτιάξαμε ένα εστιασμένο εσωτερικό CRM στα μέτρα της ομάδας — kanban pipeline, αυτόματη τιμολόγηση, δικαιώματα ανά ρόλο και integrations με Slack & Gmail.',
      features: ['Kanban pipeline συμφωνιών', 'Αυτοματοποιημένη τιμολόγηση & υπενθυμίσεις', 'Δικαιώματα βάσει ρόλου', 'Slack & Gmail integrations'],
      results: [{ label: 'Εξοικονόμηση/έτος', value: '€38χιλ' }, { label: 'Εργαλεία που αντικαταστάθηκαν', value: '4' }, { label: 'Ενεργοί χρήστες', value: '60' }],
      timeline: '14 εβδομάδες',
      client: 'Helix Agency',
    },
  },
  {
    slug: 'aether-studios',
    title: 'Aether Studios Website',
    categoryKey: 'Website',
    tech: ['Astro', 'Sanity', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=1400&q=80&auto=format&fit=crop',
    ],
    en: {
      description: 'Editorial brand site for a film studio with cinematic transitions and a custom CMS so the team can publish projects without engineering help.',
      challenge: 'A film studio with a beautiful body of work had a tired website that didn’t do their reels justice — and every update had to go through their developer.',
      solution: 'We designed an editorial, cinematic brand site on Astro with a tailored Sanity CMS, so the team ships new projects in minutes instead of days.',
      features: ['Custom Sanity CMS', 'Cinematic page transitions', 'Optimized video streaming', 'Editorial case studies layout'],
      results: [{ label: 'Lighthouse score', value: '99' }, { label: 'Inbound leads', value: '+140%' }, { label: 'Time on site', value: '3:42' }],
      timeline: '8 weeks',
      client: 'Aether Studios',
    },
    el: {
      description: 'Editorial brand site για ένα film studio με cinematic transitions και custom CMS ώστε η ομάδα να δημοσιεύει έργα χωρίς βοήθεια από developer.',
      challenge: 'Ένα film studio με υπέροχη δουλειά είχε ένα κουρασμένο site που δεν τίμαγε τα έργα του — και κάθε ενημέρωση περνούσε υποχρεωτικά από τον developer τους.',
      solution: 'Σχεδιάσαμε ένα editorial, cinematic brand site σε Astro με custom Sanity CMS, ώστε η ομάδα να ανεβάζει νέα projects σε λεπτά αντί για μέρες.',
      features: ['Custom Sanity CMS', 'Cinematic μεταβάσεις σελίδων', 'Βελτιστοποιημένο video streaming', 'Editorial layout για case studies'],
      results: [{ label: 'Lighthouse score', value: '99' }, { label: 'Inbound leads', value: '+140%' }, { label: 'Χρόνος παραμονής', value: '3:42' }],
      timeline: '8 εβδομάδες',
      client: 'Aether Studios',
    },
  },
  {
    slug: 'orbit-launch',
    title: 'Orbit Launch Page',
    categoryKey: 'Landing Page',
    tech: ['Vite', 'Resend', 'Cloud'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop',
    ],
    en: {
      description: 'Pre-launch waitlist page that captured 12,400 signups in the first week through tight copy, social proof and a referral loop.',
      challenge: 'A YC-backed startup had two weeks to build a waitlist before press hit. They needed something fast, sharp, and built to spread on its own.',
      solution: 'We shipped a tightly-crafted single page with viral referral mechanics, A/B tested hero variants and clean analytics — and watched signups compound day after day.',
      features: ['Viral referral mechanic', 'Email capture with Resend', 'A/B tested hero variants', 'Analytics & funnel tracking'],
      results: [{ label: 'Signups (week 1)', value: '12,400' }, { label: 'Conversion', value: '21%' }, { label: 'CAC', value: '€0.12' }],
      timeline: '2 weeks',
      client: 'Orbit (YC S24)',
    },
    el: {
      description: 'Σελίδα waitlist πριν το launch που συγκέντρωσε 12.400 εγγραφές την πρώτη εβδομάδα μέσω δυνατού copy, social proof και referral μηχανισμού.',
      challenge: 'Μια YC-backed startup είχε δύο εβδομάδες να φτιάξει waitlist πριν βγει στον Τύπο. Χρειαζόταν κάτι γρήγορο, δυνατό και φτιαγμένο για να εξαπλώνεται μόνο του.',
      solution: 'Φτιάξαμε μια προσεγμένη single page με viral referral, A/B testing στα hero variants και καθαρά analytics — και τα signups μεγάλωναν μέρα με τη μέρα.',
      features: ['Viral referral μηχανισμός', 'Email capture με Resend', 'A/B testing hero variants', 'Analytics & funnel tracking'],
      results: [{ label: 'Εγγραφές (εβδ. 1)', value: '12.400' }, { label: 'Μετατροπή', value: '21%' }, { label: 'CAC', value: '€0,12' }],
      timeline: '2 εβδομάδες',
      client: 'Orbit (YC S24)',
    },
  },
  {
    slug: 'pulse-analytics',
    title: 'Pulse Analytics Dashboard',
    categoryKey: 'Custom Solution',
    tech: ['React', 'D3', 'OpenAI'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop&sat=-20',
    gallery: [
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&auto=format&fit=crop',
    ],
    en: {
      description: 'Realtime analytics dashboard with AI insights for a logistics SaaS used by 300+ teams. Surfaces anomalies in fleet performance automatically.',
      challenge: 'A logistics SaaS had rich data but no clear story — customer success teams spent hours stitching together CSVs every week just to find what mattered.',
      solution: 'We built a realtime dashboard with custom D3 visualizations and daily AI-generated summaries that surface anomalies in fleet performance automatically.',
      features: ['Realtime data via websockets', 'AI-generated daily summaries', 'Custom D3 visualizations', 'CSV / API exports'],
      results: [{ label: 'Active teams', value: '300+' }, { label: 'Queries/day', value: '1.2M' }, { label: 'Insight accuracy', value: '94%' }],
      timeline: '12 weeks',
      client: 'Pulse Logistics',
    },
    el: {
      description: 'Realtime analytics dashboard με AI insights για ένα logistics SaaS που χρησιμοποιείται από 300+ ομάδες. Εντοπίζει αυτόματα ανωμαλίες στην απόδοση στόλου.',
      challenge: 'Ένα logistics SaaS είχε πλούσια δεδομένα αλλά κανένα ξεκάθαρο νόημα — οι ομάδες customer success ξόδευαν ώρες ενώνοντας CSVs κάθε εβδομάδα για να βρουν τι έχει σημασία.',
      solution: 'Φτιάξαμε ένα realtime dashboard με custom D3 visualizations και καθημερινές συνόψεις με AI που εντοπίζουν αυτόματα ανωμαλίες στην απόδοση του στόλου.',
      features: ['Δεδομένα σε πραγματικό χρόνο μέσω websockets', 'Καθημερινές συνόψεις με AI', 'Custom D3 visualizations', 'Εξαγωγές CSV / API'],
      results: [{ label: 'Ενεργές ομάδες', value: '300+' }, { label: 'Queries/ημέρα', value: '1,2M' }, { label: 'Ακρίβεια insights', value: '94%' }],
      timeline: '12 εβδομάδες',
      client: 'Pulse Logistics',
    },
  },
]

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug)
