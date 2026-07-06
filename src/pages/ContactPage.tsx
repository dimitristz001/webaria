import { NavBar } from '@/components/NavBar'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="relative pt-24" role="main">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
