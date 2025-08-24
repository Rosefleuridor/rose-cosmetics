import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Users, Award, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A family-run business dedicated to empowering young Black women through beauty and education
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="glass border-0 mb-16">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Rose Cosmetics, we believe every young Black woman deserves to feel beautiful and confident. 
                We started this business not just to provide premium beauty services and products, but to educate 
                and inspire the next generation of cosmetologists. Our family's passion for beauty and education 
                drives everything we do.
              </p>
            </CardContent>
          </Card>

          {/* Family Members */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Family</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Marie A. Cadet */}
              <Card className="glass border-0 text-center">
                <CardContent className="p-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Marie A. Cadet" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Marie A. Cadet</h3>
                  <p className="text-rose-600 font-semibold mb-3">Founder & Master Stylist</p>
                  <p className="text-gray-700 leading-relaxed">
                    The matriarch of our family business, Marie has over 15 years of experience in cosmetology. 
                    She founded Rose Cosmetics with a vision to create a space where young Black women could 
                    learn, grow, and feel beautiful. Her expertise and nurturing spirit guide our entire operation.
                  </p>
                </CardContent>
              </Card>

              {/* Rose Fleuridor */}
              <Card className="glass border-0 text-center">
                <CardContent className="p-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Rose Fleuridor" />
                    <AvatarFallback>RF</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Rose Fleuridor</h3>
                  <p className="text-rose-600 font-semibold mb-3">Hair Styling & Color Specialist</p>
                  <p className="text-gray-700 leading-relaxed">
                    Rose F. brings creativity and innovation to every style. With 8+ years of experience, 
                    she specializes in natural hair care and color treatments. Her artistic vision and 
                    gentle approach make every client feel like royalty.
                  </p>
                </CardContent>
              </Card>

              {/* Rose Defendre */}
              <Card className="glass border-0 text-center">
                <CardContent className="p-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Rose Defendre" />
                    <AvatarFallback>RD</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Rose Defendre</h3>
                  <p className="text-rose-600 font-semibold mb-3">Braids & Extensions Expert</p>
                  <p className="text-gray-700 leading-relaxed">
                    Rose D. is a master of intricate braiding patterns and extension techniques. 
                    With 6+ years of experience, she creates stunning protective styles that celebrate 
                    natural beauty while promoting healthy hair growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <BookOpen className="w-10 h-10 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Education First</h3>
                  <p className="text-gray-700">
                    We believe knowledge is power. Through our subscription service, we provide 
                    curated educational content to help young women learn cosmetology skills and 
                    build confidence in their abilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-0">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Community Support</h3>
                  <p className="text-gray-700">
                    We're more than a business - we're a community. We support each other, 
                    celebrate successes, and create a safe space where every woman can express 
                    her unique beauty.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-0">
                <CardContent className="p-6">
                  <Award className="w-10 h-10 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    We never compromise on quality. From our premium products to our expert 
                    services, we maintain the highest standards to ensure every client receives 
                    the best experience possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-0">
                <CardContent className="p-6">
                  <Heart className="w-10 h-10 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Family Love</h3>
                  <p className="text-gray-700">
                    As a family business, love is at the heart of everything we do. We treat 
                    every client like family and create lasting relationships built on trust 
                    and care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Journey */}
          <Card className="glass border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Journey</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">The Dream Begins</h4>
                    <p className="text-gray-700">
                      Marie A. Cadet envisioned a space where young Black women could learn cosmetology 
                      and feel empowered through beauty education.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Sisters Join Forces</h4>
                    <p className="text-gray-700">
                      Rose Fleuridor and Rose Defendre brought their unique skills and passion 
                      to help build the family business.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Going Digital</h4>
                    <p className="text-gray-700">
                      We launched our online platform to offer educational content and premium 
                      products to a wider audience, empowering more women through beauty.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
