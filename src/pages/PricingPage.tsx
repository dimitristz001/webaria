import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero.Nav />
      <main className="relative pt-24" role="main">
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
