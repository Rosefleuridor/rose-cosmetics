import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}
