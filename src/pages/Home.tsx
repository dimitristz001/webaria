import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero"><Hero /></section>
      </main>
      <Footer />
    </div>
  )
}
