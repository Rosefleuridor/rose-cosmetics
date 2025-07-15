import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ShoppingBag, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="glass rounded-3xl p-12 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Rose <span className="text-rose-600">Cosmetics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering young Black women through premium beauty services and cosmetology education. A family-run
            business dedicated to excellence and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/booking">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Products
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/subscription">
                <Play className="mr-2 h-5 w-5" />
                Learn Cosmetology
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Premium Products</h3>
            <p className="text-gray-600">Hair bundles, nails, eyelashes, lip gloss, and more</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Expert Stylists</h3>
            <p className="text-gray-600">Book with Rose F., Rose D., or Marie A. Cadet</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Education First</h3>
            <p className="text-gray-600">Learn cosmetology through our curated video content</p>
          </div>
        </div>
      </div>
    </section>
  )
}
