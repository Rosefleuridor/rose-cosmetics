import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Premium Hair Bundle",
    price: 299.99,
    category: "Hair",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
  },
  {
    id: 2,
    name: "Luxury Eyelash Set",
    price: 49.99,
    category: "Lashes",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
  },
  {
    id: 3,
    name: "Rose Lip Gloss Collection",
    price: 79.99,
    category: "Lips",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
  },
  {
    id: 4,
    name: "Professional Nail Kit",
    price: 129.99,
    category: "Nails",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover our premium beauty collection</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="glass border-0 overflow-hidden hover:scale-105 transition-transform">
              <CardHeader className="p-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-rose-100 text-rose-800">{product.category}</Badge>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-2xl font-bold text-rose-600">${product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
