"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart, Search } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Premium Brazilian Hair Bundle",
    price: 299.99,
    category: "Hair",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Luxury Mink Eyelashes - Dramatic",
    price: 49.99,
    category: "Lashes",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Rose Lip Gloss - Honey Glow",
    price: 24.99,
    category: "Lips",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Professional Nail Art Kit",
    price: 129.99,
    category: "Nails",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 67,
    inStock: false,
  },
  {
    id: 5,
    name: "Peruvian Curly Hair Bundle",
    price: 349.99,
    category: "Hair",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5.0,
    reviews: 203,
    inStock: true,
  },
  {
    id: 6,
    name: "Natural Wispy Lashes",
    price: 39.99,
    category: "Lashes",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 91,
    inStock: true,
  },
  {
    id: 7,
    name: "Rose Lip Gloss Set - 3 Pack",
    price: 69.99,
    category: "Lips",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 134,
    inStock: true,
  },
  {
    id: 8,
    name: "Gel Nail Polish Collection",
    price: 89.99,
    category: "Nails",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 78,
    inStock: true,
  },
]

const categories = ["All", "Hair", "Lashes", "Lips", "Nails"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600">Premium beauty products for every need</p>
          </div>

          {/* Filters */}
          <div className="glass rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="glass border-0 overflow-hidden hover:scale-105 transition-transform group"
              >
                <CardHeader className="p-0 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {!product.inStock && <Badge className="absolute top-2 left-2 bg-red-500">Out of Stock</Badge>}
                </CardHeader>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-rose-100 text-rose-800">{product.category}</Badge>
                  <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">{"★".repeat(Math.floor(product.rating))}</div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-rose-600">${product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700" disabled={!product.inStock}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
