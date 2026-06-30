import ScrollProgress from '@/components/landing/ScrollProgress'
import TopBar from '@/components/landing/TopBar'
import Header from '@/components/landing/Header'
import HeroSection from '@/components/landing/HeroSection'
import ServiceCards from '@/components/landing/ServiceCards'
import FeaturedProducts from '@/components/landing/FeaturedProducts'
import ReviewsSection from '@/components/landing/ReviewsSection'
import BrandsSection from '@/components/landing/BrandsSection'
import PaymentMethods from '@/components/landing/PaymentMethods'
import FAQSection from '@/components/landing/FAQSection'
import ContactSection from '@/components/landing/ContactSection'
import Footer from '@/components/landing/Footer'
import WhatsAppButton from '@/components/landing/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollProgress />
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ServiceCards />
        <FeaturedProducts />
        <ReviewsSection />
        <BrandsSection />
        <PaymentMethods />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
