import { NavBar } from '@/components/NavBar'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative pt-24" role="main">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
