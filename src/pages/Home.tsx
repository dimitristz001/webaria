import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { WhyWebaria } from '@/components/home/WhyWebaria'
import { WorkHighlights } from '@/components/home/WorkHighlights'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero"><Hero /></section>
        <ServicesPreview />
        <WhyWebaria />
        <WorkHighlights />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  )
}
