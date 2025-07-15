import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Star } from "lucide-react"
import Link from "next/link"

const stylists = [
  {
    name: "Rose Fleuridor",
    specialty: "Hair Styling & Color",
    experience: "8+ years",
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=100",
    bio: "Specializing in natural hair care and protective styles",
  },
  {
    name: "Rose Defendre",
    specialty: "Braids & Extensions",
    experience: "6+ years",
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=100",
    bio: "Expert in intricate braiding patterns and hair extensions",
  },
  {
    name: "Marie A. Cadet",
    specialty: "Master Stylist",
    experience: "15+ years",
    rating: 5.0,
    image: "/placeholder.svg?height=100&width=100",
    bio: "Master stylist and mentor, specializing in all hair types",
  },
]

export default function Services() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Stylists</h2>
          <p className="text-xl text-gray-600">Book your appointment with our talented family team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stylists.map((stylist, index) => (
            <Card key={index} className="glass border-0 text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={stylist.image || "/placeholder.svg"} alt={stylist.name} />
                  <AvatarFallback>
                    {stylist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{stylist.name}</CardTitle>
                <p className="text-rose-600 font-semibold">{stylist.specialty}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold">{stylist.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{stylist.experience} experience</p>
                <p className="text-sm text-gray-700 mb-4">{stylist.bio}</p>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book with {stylist.name.split(" ")[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Look?</h3>
          <p className="text-gray-600 mb-6">
            Schedule your appointment today and experience the Rose Cosmetics difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/booking">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
