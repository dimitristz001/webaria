## Πρόβλημα

Τα logos (`webaria-mark.png`, `webaria-full.png`) είναι αποθηκευμένα στο Lovable CDN και αναφέρονται μέσω URL τύπου `/__l5e/assets-v1/...`. Αυτό το path υπάρχει μόνο στο Lovable hosting. Στο Vercel δεν υπάρχει κανένα route που να το σερβίρει, οπότε ο browser εμφανίζει σπασμένη εικόνα.

## Λύση

Μεταφορά των logos μέσα στο project (`public/`) ώστε να γίνονται bundle/deploy μαζί με τον υπόλοιπο κώδικα — οπουδήποτε κι αν φιλοξενηθεί (Vercel, Netlify, Lovable, παντού).

## Βήματα

1. **Κατέβασμα των δύο logos** από το Lovable CDN στο `public/`:
   - `public/webaria-mark.png`
   - `public/webaria-full.png`

2. **Ενημέρωση references** ώστε αντί για το `.asset.json` pointer να χρησιμοποιούν απλό path:
   - `src/components/NavBar.tsx` → `src="/webaria-mark.png"`
   - `src/components/Footer.tsx` → `src="/webaria-mark.png"`
   - Έλεγχος για τυχόν χρήση του `webaria-full.png` και ενημέρωση.

3. **Διαγραφή των `.asset.json` pointers** που δεν χρειάζονται πλέον:
   - `src/assets/webaria-mark.png.asset.json`
   - `src/assets/webaria-full.png.asset.json`

4. **Επαλήθευση** ότι το build περνάει και ότι σε νέο deploy στο Vercel τα logos εμφανίζονται κανονικά.

## Σημείωση

Το `public/favicon.png` είναι ήδη σωστά τοποθετημένο, δεν χρειάζεται αλλαγή. Μετά από αυτή την αλλαγή, ο επόμενος push στο Vercel θα δείξει τα logos σωστά.
