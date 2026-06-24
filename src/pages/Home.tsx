import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
  }, [hash])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero"><Hero /></section>
        <section id="services" aria-label="Services"><Services /></section>
        <section id="contact" aria-label="Contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
