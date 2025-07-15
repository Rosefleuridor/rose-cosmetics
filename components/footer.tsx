import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass mt-16 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-600 mb-4">Rose Cosmetics</h3>
            <p className="text-gray-600 mb-4">
              Empowering young Black women through beauty and education. A family business built on love and expertise.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-rose-600 cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-rose-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-rose-600 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-rose-600 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/booking" className="hover:text-rose-600">
                  Hair Styling
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-rose-600">
                  Braids & Extensions
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-rose-600">
                  Color Services
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="hover:text-rose-600">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/products" className="hover:text-rose-600">
                  Hair Bundles
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-600">
                  Eyelashes
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-600">
                  Lip Gloss
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rose-600">
                  Nail Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-rose-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-rose-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/social" className="hover:text-rose-600">
                  Social Feed
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Rose Cosmetics. All rights reserved. Made with ❤️ by the Rose family.</p>
        </div>
      </div>
    </footer>
  )
}
