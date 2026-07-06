import { NavBar } from '@/components/NavBar'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative pt-24" role="main">
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
