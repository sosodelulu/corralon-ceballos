import ScrollProgress from '@/components/landing/ScrollProgress'
import TopBar from '@/components/landing/TopBar'
import Header from '@/components/landing/Header'
import HeroSection from '@/components/landing/HeroSection'
import ServiceCards from '@/components/landing/ServiceCards'
import FeaturedProducts from '@/components/landing/FeaturedProducts'
import BrandsSection from '@/components/landing/BrandsSection'
import ReviewsSection from '@/components/landing/ReviewsSection'
import PaymentMethods from '@/components/landing/PaymentMethods'
import ContactSection from '@/components/landing/ContactSection'
import Footer from '@/components/landing/Footer'
import WhatsAppButton from '@/components/landing/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollProgress />
      <TopBar />
      <Header />
      <HeroSection />
      <ServiceCards />
      <FeaturedProducts />
      <BrandsSection />
      <ReviewsSection />
      <PaymentMethods />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
