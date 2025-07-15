import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jasmine Williams",
    rating: 5,
    text: "Rose Cosmetics transformed my hair! The sisters are so talented and made me feel beautiful. The educational content helped me learn to care for my natural hair.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Keisha Johnson",
    rating: 5,
    text: "Marie is a master at her craft. I've been coming here for years and always leave feeling confident. The family atmosphere makes every visit special.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Aaliyah Brown",
    rating: 5,
    text: "The subscription service is amazing! I'm learning so much about cosmetology. Rose F. and Rose D. are incredible teachers and stylists.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Destiny Davis",
    rating: 5,
    text: "Best hair products I've ever used! The bundles are high quality and the lip gloss collection is my favorite. Highly recommend!",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real stories from our beautiful community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">Verified Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
