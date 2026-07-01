# Plan: Νέα Homepage για Webaria

Θα κρατήσω το υπάρχον Hero και θα προσθέσω 3 νέες ενότητες κάτω από αυτό, ώστε η αρχική να είναι πλήρης, απλή και κατανοητή — χωρίς να αλλάξω τις υπόλοιπες σελίδες.

## Δομή της νέας Homepage

1. **Hero** (όπως είναι σήμερα — logo, τίτλος, CTAs)
2. **Σύντομες Υπηρεσίες** — 4 cards (Websites, E-shops, Booking, Custom Solutions) με icon, τίτλο, 1 γραμμή περιγραφή. Κουμπί "Δες όλες τις υπηρεσίες" → `/services`.
3. **Γιατί Webaria** — 4 benefits (π.χ. Ταχύτητα παράδοσης, Καθαρός σχεδιασμός, Διαφανής επικοινωνία, Υποστήριξη μετά την παράδοση) σε απλό grid με εικονίδια.
4. **Highlights από Work** — 3 επιλεγμένα projects από το `src/data/projects.ts` σε cards με εικόνα και κατηγορία. Κουμπί "Δες όλα τα έργα" → `/work`.
5. **CTA λωρίδα** — μικρή γραμμή με "Έτοιμοι να ξεκινήσουμε;" και κουμπί → `/contact` (πριν το footer, για φυσική ροή).
6. **Footer** (όπως είναι)

## Στυλ

- Ισορροπημένο: αρκετό περιεχόμενο αλλά με άνετο whitespace ανάμεσα στις ενότητες (py-24).
- Χρήση των υπαρχόντων design tokens (`gradient-text`, `gradient-bg`, `glass-effect`, accent-blue/purple/emerald).
- Space Grotesk για τίτλους, Inter για body — ήδη στο project.
- Framer Motion fade/slide-in στις ενότητες όταν εμφανίζονται στο viewport.
- Πλήρως δίγλωσσο (EN/EL) μέσω του υπάρχοντος `useI18n`.

## Τεχνικές αλλαγές

- **`src/pages/Home.tsx`**: προσθήκη 3 νέων section components κάτω από το `<Hero />` και πάνω από το `<Footer />`.
- **Νέα components** (μικρά, focused):
  - `src/components/home/ServicesPreview.tsx`
  - `src/components/home/WhyWebaria.tsx`
  - `src/components/home/WorkHighlights.tsx` (χρησιμοποιεί τα πρώτα 3 από `src/data/projects.ts`)
  - `src/components/home/HomeCTA.tsx`
- **`src/lib/i18n.tsx`**: προσθήκη νέων μεταφράσεων EN/EL για τις 4 ενότητες (κρατάω το υπόλοιπο άθικτο).
- Καμία αλλαγή σε NavBar, Footer, ή τις σελίδες `/services`, `/pricing`, `/work`, `/contact`.

Θες να προχωρήσω έτσι;
