## FAQ Section

Add a new FAQ section to the site with expandable questions/answers, bilingual (EN/EL), matching the existing dark premium aesthetic.

### Where it appears
- On the **Home page** (`src/pages/Home.tsx`), inserted between `WorkHighlights` and `HomeCTA`.
- Also on the **Contact page** (`src/pages/ContactPage.tsx`), above the contact form — since users often look for answers before reaching out.

### Content (6 Q&A, bilingual)

Included from your list + extras:

1. **Πόσο κοστίζει μια ιστοσελίδα;** — Depends on scope; starter sites from a low fixed price, business/eshop/booking scale with features. We send a clear custom quote within 24h.
2. **Πόσο χρόνο χρειάζεται για την κατασκευή;** — Starter 1–2 εβδομάδες, Business 2–4, Eshop/Booking 3–8 εβδομάδες.
3. **Παρέχεται Domain / Hosting;** — Ναι, αναλαμβάνουμε αγορά & setup domain και fast hosting, ή δουλεύουμε με ό,τι ήδη έχετε.
4. **Μπορώ να κάνω αλλαγές μόνος μου;** — Ναι, παραδίδουμε εύχρηστο CMS/dashboard + σύντομο training video.
5. **Υπάρχει τεχνική υποστήριξη;** — Ναι, μηνιαία πακέτα υποστήριξης & maintenance μετά το launch.
6. **Τι γίνεται με το SEO;** — Κάθε site παραδίδεται με βασικό on-page SEO, sitemap, meta tags, performance & schema.
7. **Δέχεστε πληρωμές με δόσεις;** — Ναι, 40% προκαταβολή / 30% στο midway / 30% στην παράδοση.

(You can trim to your 5 if preferred — just say the word.)

### Design
- Dark section with subtle gradient background matching the rest of the site.
- Eyebrow "FAQ" + display heading "Συχνές ερωτήσεις" / "Frequently asked questions".
- shadcn `Accordion` (already in the project) — single-open, chevron indicator, smooth expand.
- Framer Motion fade/rise on section entrance.
- Max width ~800px, centered.

### Technical details
- New file: `src/components/FAQ.tsx` — reads strings from `useI18n()`.
- Extend `src/lib/i18n.tsx` translations with a `faq` block (`eyebrow`, `title1`, `titleAccent`, `title2`, `desc`, `items[{q,a}]`) for both `en` and `el`.
- Mount `<FAQ />` in `src/pages/Home.tsx` (before `HomeCTA`) and `src/pages/ContactPage.tsx` (above the form).
- No backend, no routes, no new dependencies.
