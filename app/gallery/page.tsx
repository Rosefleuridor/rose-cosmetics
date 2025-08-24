import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, Heart, Share2, Star } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Natural Glow Makeover",
    description: "Complete transformation with natural, dewy finish",
    category: "Makeup",
    rating: 4.9,
    likes: 234,
    image: "/placeholder.jpg",
    beforeAfter: true
  },
  {
    id: 2,
    title: "Bridal Beauty",
    description: "Timeless bridal look with soft, romantic tones",
    category: "Bridal",
    rating: 5.0,
    likes: 456,
    image: "/placeholder.jpg",
    beforeAfter: false
  },
  {
    id: 3,
    title: "Evening Glamour",
    description: "Dramatic evening look with bold lips and smoky eyes",
    category: "Evening",
    rating: 4.8,
    likes: 189,
    image: "/placeholder.jpg",
    beforeAfter: true
  },
  {
    id: 4,
    title: "Skincare Transformation",
    description: "3-month skincare journey with visible results",
    category: "Skincare",
    rating: 4.7,
    likes: 312,
    image: "/placeholder.jpg",
    beforeAfter: true
  },
  {
    id: 5,
    title: "Natural Hair Styling",
    description: "Beautiful natural hair styling and care",
    category: "Hair",
    rating: 4.9,
    likes: 278,
    image: "/placeholder.jpg",
    beforeAfter: false
  },
  {
    id: 6,
    title: "Professional Makeup",
    description: "Corporate-ready makeup for the modern professional",
    category: "Professional",
    rating: 4.6,
    likes: 145,
    image: "/placeholder.jpg",
    beforeAfter: true
  }
]

const categories = ["All", "Makeup", "Bridal", "Evening", "Skincare", "Hair", "Professional"]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beauty Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover stunning transformations and get inspired by our collection of beauty work. 
            Each image tells a story of confidence and empowerment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-rose-100 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-rose-400" />
                </div>
                {item.beforeAfter && (
                  <Badge className="absolute top-3 left-3 bg-rose-600 text-white">
                    Before/After
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Book a consultation with our expert beauty professionals and start your own transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
