import { NavBar } from '@/components/NavBar'
import { Services } from '@/components/Services'
import { Footer } from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative pt-24" role="main">
        <Services />
      </main>
      <Footer />
    </div>
  )
}
