import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'

import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero"><Hero /></section>
        <section id="services" aria-label="Services"><Services /></section>
        <section id="portfolio" aria-label="Work"><Portfolio /></section>
        <section id="about" aria-label="Process"><About /></section>
        
        <section id="contact" aria-label="Contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
