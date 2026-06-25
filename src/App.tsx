import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from './lib/i18n'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </I18nProvider>
  )
}
