import { NavBar } from '@/components/NavBar'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative pt-24" role="main">
        <About />
      </main>
      <Footer />
    </div>
  )
}
