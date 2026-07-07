## Στόχος

Προσθήκη SEO στη σελίδα `/faq` (meta title, description, canonical, Open Graph, Twitter, FAQPage JSON-LD) με υποστήριξη EN/EL, και οδηγός για καλύτερη κατάταξη σε Google + AI search (ChatGPT, Perplexity, Gemini, Claude).

## Τι θα φτιάξω

### 1. Per-route head tags με `react-helmet-async`
- Εγκατάσταση `react-helmet-async`.
- Wrap του app με `<HelmetProvider>` στο `src/main.tsx`.
- Αφαίρεση του `<link rel="canonical">` από το `index.html` (θα το ορίζει κάθε route).
- Τα sitewide `og:*` παραμένουν στο `index.html` ως fallback για social crawlers που δεν εκτελούν JS.

### 2. `src/pages/FaqPage.tsx` — SEO tags
Προσθήκη `<Helmet>` που διαβάζει από `useI18n()` και ρυθμίζει:
- `<title>` (διαφορετικός EN/EL)
- `<meta name="description">`
- `<link rel="canonical" href="https://webaria.lovable.app/faq">`
- `og:title`, `og:description`, `og:url`, `og:type=website`, `og:locale`
- `twitter:card`, `twitter:title`, `twitter:description`
- `<html lang="en|el">` δυναμικά μέσω Helmet
- **FAQPage JSON-LD** με όλα τα Q&A από `t.faq.items` (πολύ ισχυρό για rich results και για AI answer engines)

### 3. `src/lib/i18n.tsx` — νέο `seo.faq` block
```
seo: {
  faq: {
    title: 'FAQ — Συχνές ερωτήσεις για ιστοσελίδες | Webaria'
    description: 'Απαντήσεις σε συχνές ερωτήσεις για κόστος, χρόνο κατασκευής, hosting, υποστήριξη και SEO ιστοσελίδων.'
  }
}
```
Αντίστοιχα σε EN.

### 4. `public/sitemap.xml` (νέο)
Ελάχιστο sitemap με `/`, `/services`, `/work`, `/pricing`, `/contact`, `/faq` — για να το βρίσκει η Google.

### 5. `public/robots.txt`
Προσθήκη γραμμής `Sitemap: https://webaria.lovable.app/sitemap.xml`.

## Οδηγός βελτίωσης κατάταξης (Google + AI)

**Google SEO**
1. **Publish + Google Search Console**: υποβολή sitemap, request indexing για κάθε νέα σελίδα.
2. **Per-page meta**: κάθε route (services, pricing, work, contact) να έχει δικό του `<Helmet>` με title/description — όχι μόνο το FAQ. Θα το προτείνω ως επόμενο βήμα.
3. **Semantic HTML**: ένα `<h1>` ανά σελίδα, `<h2>`/`<h3>` ιεραρχία, `alt` σε όλες τις εικόνες.
4. **Core Web Vitals**: lazy loading εικόνων (`loading="lazy"`), preloading fonts (ήδη υπάρχει), αποφυγή layout shift.
5. **Structured data**: `Organization` (υπάρχει), `LocalBusiness` (αν στοχεύεις Ελλάδα), `Service` schema στη σελίδα Services, `Product`/`Offer` στο Pricing, `BreadcrumbList` σε όλες.
6. **Εσωτερικά links**: από blog/case studies προς services/pricing.
7. **Backlinks**: εγγραφή σε Greek business directories, guest posts, καταχώρηση σε Clutch/GoodFirms.
8. **Local SEO**: Google Business Profile με NAP (Name/Address/Phone) συνεπές παντού.
9. **Blog/Case studies** με keywords που ψάχνει το κοινό σου (π.χ. "κατασκευή eshop τιμές", "σύστημα κρατήσεων κομμωτήριο").

**AI Search Optimization (GEO — Generative Engine Optimization)**
1. **FAQPage JSON-LD** (μπαίνει τώρα) — τα LLMs το διαβάζουν άμεσα.
2. **Ξεκάθαρες, αυτόνομες απαντήσεις** σε κάθε FAQ item (2-4 προτάσεις, self-contained — έτσι citάρονται ως snippet).
3. **Στατιστικά + αριθμοί** στο κείμενο (π.χ. "παραδίδουμε σε 2-4 εβδομάδες") — AI models προτιμούν quantifiable claims.
4. **Author/Organization schema** με πραγματικά στοιχεία (email, τηλέφωνο, διεύθυνση) — αυξάνει το E-E-A-T.
5. **llms.txt** στο root: σύντομη περιγραφή του site + links στις σημαντικές σελίδες (νέο πρότυπο που ακολουθούν Anthropic/Perplexity).
6. **Παρουσία σε 3rd-party sources** που τα LLMs εμπιστεύονται: Reddit, Quora, GitHub, Wikipedia references, δημοσιεύσεις σε γνωστά ελληνικά blogs.
7. **Consistent brand mentions** — όσο περισσότερα sites αναφέρουν "Webaria" σε συνάφεια με "digital agency Greece", τόσο πιο εύκολα το associate το LLM.
8. **Conversational content**: γράψε σαν να απαντάς σε ερώτηση ("Πόσο κοστίζει μια ιστοσελίδα;" → άμεση απάντηση με αριθμό).

## Αρχεία που αλλάζουν

- `package.json` — add `react-helmet-async`
- `src/main.tsx` — wrap με `HelmetProvider`
- `index.html` — αφαίρεση canonical
- `src/pages/FaqPage.tsx` — Helmet + JSON-LD
- `src/lib/i18n.tsx` — `seo.faq` strings (EN + EL)
- `public/sitemap.xml` — νέο
- `public/robots.txt` — Sitemap directive

## Εκτός σκοπού (θα τα κάνω σε επόμενο γύρο αν θες)

- Per-page SEO για τις άλλες σελίδες (Services, Pricing, Work, Contact, Home).
- `llms.txt`.
- Schema για Services/Pricing/Portfolio.
- Blog module για long-tail keywords.

Πες μου αν θες να προχωρήσω μόνο με το FAQ ή να συμπεριλάβω και τις υπόλοιπες σελίδες σε αυτό το γύρο.