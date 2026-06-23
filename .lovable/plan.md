## Στόχος
Να κάνουμε το Webaria πιο "ζωντανό" και έτοιμο να μετατρέπει επισκέπτες σε πελάτες, με τρεις προσθήκες:

1. **Λειτουργική φόρμα επικοινωνίας** (στέλνει email στ' αλήθεια)
2. **Pricing / Packages section** (Website, Eshop, Booking, CRM)
3. **Case study σελίδες** ανά project στο Portfolio

---

## 1. Φόρμα Επικοινωνίας

- Ενεργοποίηση **Lovable Cloud** (απαραίτητο για αποστολή email)
- Ρύθμιση email domain & app-email infrastructure
- Δημιουργία template "contact-notification" (πάει σε σένα) + "contact-confirmation" (αυτόματη απάντηση στον πελάτη), και στις 2 γλώσσες (EN/EL)
- Edge function trigger από τη φόρμα στο `Contact.tsx`
- Client-side validation με `zod` (όνομα, email, μήνυμα, length limits)
- States: loading / success / error με toast feedback
- Θα χρειαστώ από εσένα: **το email σου** όπου θες να φτάνουν τα μηνύματα

## 2. Pricing Section

Νέο component `Pricing.tsx`, μπαίνει μεταξύ Services και Portfolio στο navigation.

Τέσσερα πακέτα-κάρτες (μεταφρασμένα EN/EL μέσω `i18n.tsx`):

```text
┌─ Website ──┐ ┌─ Eshop ────┐ ┌─ Booking ──┐ ┌─ CRM ──────┐
│ από 590€   │ │ από 1.200€ │ │ από 890€   │ │ Custom     │
│ • feature  │ │ • feature  │ │ • feature  │ │ • feature  │
│ • feature  │ │ • feature  │ │ • feature  │ │ • feature  │
│ [Ζήτα      │ │ [Ζήτα      │ │ [Ζήτα      │ │ [Μίλα μαζί │
│  προσφορά] │ │  προσφορά] │ │  προσφορά] │ │  μας]      │
└────────────┘ └────────────┘ └────────────┘ └────────────┘
```

- Highlight σε ένα "Most popular" πακέτο
- Κάθε CTA σκρολάρει στη φόρμα επικοινωνίας με pre-selected service
- Τιμές: **placeholder** — θα τις προσαρμόσεις εσύ μετά
- Animations: stagger reveal με Framer Motion, ίδιο στυλ με Services

## 3. Case Study σελίδες

- React Router routes: `/work/nordic-bloom`, `/work/lumen-wellness`, κ.λπ.
- Κάθε project click στο Portfolio → navigate σε δική του σελίδα (αντί / επιπλέον του modal)
- Layout ανά case study:
  - Hero με banner image + κατηγορία
  - Challenge / Solution / Result sections
  - Gallery 2–3 εικόνων
  - Tech stack badges
  - "Επόμενο project →" navigation
- Όλο το περιεχόμενο localized (EN/EL)
- Reusable `<CaseStudyLayout>` component, data-driven από ένα κεντρικό `projects.ts`

---

## Τεχνικές λεπτομέρειες

- **Stack προσθήκες:** `zod` για validation, `react-router-dom` (αν δεν υπάρχει ήδη) για case study routes, Lovable Cloud + built-in email infra για αποστολή
- **Αρχεία που θα αλλάξουν:**
  - `src/components/Contact.tsx` (functional form)
  - `src/components/Pricing.tsx` (νέο)
  - `src/components/Portfolio.tsx` (link σε case study αντί modal)
  - `src/pages/CaseStudy.tsx` (νέο)
  - `src/data/projects.ts` (νέο, κεντρικά project data)
  - `src/lib/i18n.tsx` (νέα translation keys)
  - `src/App.tsx` + router setup
  - `supabase/functions/_shared/transactional-email-templates/` (2 templates)
- **Order of work:** Cloud + email infra → φόρμα → Pricing → Case studies

---

## Τι χρειάζομαι από εσένα πριν ξεκινήσω

1. **Email** όπου θες να φτάνουν τα μηνύματα της φόρμας
2. Αν έχεις προτίμηση για **σειρά στο navigation**: τώρα είναι Services → Work → Process → Contact. Προτείνω: Services → **Pricing** → Work → Process → Contact
3. Αν είναι ΟΚ να βάλω **placeholder τιμές** στο Pricing που θα αλλάξεις μετά