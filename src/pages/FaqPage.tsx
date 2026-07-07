import { Helmet } from 'react-helmet-async'
import { NavBar } from '@/components/NavBar'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { useI18n } from '@/lib/i18n'

const SITE_URL = 'https://webaria.lovable.app'

export default function FaqPage() {
  const { t, lang } = useI18n()
  const seo = t.seo.faq
  const items: { q: string; a: string }[] = t.faq.items
  const url = `${SITE_URL}/faq`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang === 'el' ? 'el-GR' : 'en-US',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <html lang={lang === 'el' ? 'el' : 'en'} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={lang === 'el' ? 'el_GR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <NavBar />
      <main className="relative pt-24" role="main">
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
