import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Heart, 
  MessageCircle, 
  Share2, 
  Star,
  Users,
  TrendingUp,
  Award,
  Calendar
} from "lucide-react"

const socialPosts = [
  {
    id: 1,
    platform: "Instagram",
    username: "@rosecosmetics",
    avatar: "/placeholder-user.jpg",
    content: "✨ Today's bridal transformation was absolutely magical! ✨ The bride wanted a natural, romantic look and we delivered exactly that. Swipe to see the before and after! #BridalBeauty #NaturalMakeup #RoseCosmetics",
    image: "/placeholder.jpg",
    likes: 1247,
    comments: 89,
    shares: 23,
    timeAgo: "2 hours ago",
    verified: true
  },
  {
    id: 2,
    platform: "Facebook",
    username: "Rose Cosmetics",
    avatar: "/placeholder-user.jpg",
    content: "Our skincare consultation sessions are now booking up fast! 🧴✨ Learn about your skin type and get personalized recommendations from our expert estheticians. Book your session today!",
    image: "/placeholder.jpg",
    likes: 892,
    comments: 156,
    shares: 67,
    timeAgo: "1 day ago",
    verified: true
  },
  {
    id: 3,
    platform: "Instagram",
    username: "@rosecosmetics",
    avatar: "/placeholder-user.jpg",
    content: "💄 Pro tip: Always start with a clean, moisturized base! Here's our favorite primer that keeps makeup looking fresh all day. What's your go-to primer? #MakeupTips #BeautyHacks",
    image: "/placeholder.jpg",
    likes: 2156,
    comments: 234,
    shares: 89,
    timeAgo: "3 days ago",
    verified: true
  },
  {
    id: 4,
    platform: "Twitter",
    username: "@RoseCosmetics",
    avatar: "/placeholder-user.jpg",
    content: "Just finished an amazing photoshoot with @beautymagazine! Can't wait to share the results with you all. The team worked magic today ✨ #BeautyPhotography #BehindTheScenes",
    image: "/placeholder.jpg",
    likes: 567,
    comments: 45,
    shares: 12,
    timeAgo: "1 week ago",
    verified: true
  }
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "The bridal makeup service was absolutely perfect! I felt like a princess on my wedding day. The team was professional and made me feel so comfortable.",
    date: "2 weeks ago",
    service: "Bridal Makeup"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "I've been coming here for my skincare consultations for 6 months and my skin has never looked better. The personalized approach really makes a difference.",
    date: "1 month ago",
    service: "Skincare Consultation"
  },
  {
    id: 3,
    name: "Emily Chen",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "Amazing experience! The makeup artist listened to exactly what I wanted and delivered beyond my expectations. Highly recommend!",
    date: "3 weeks ago",
    service: "Evening Makeup"
  }
]

const stats = [
  { icon: <Users className="h-6 w-6" />, label: "Happy Clients", value: "2,500+" },
  { icon: <TrendingUp className="h-6 w-6" />, label: "Social Followers", value: "15K+" },
  { icon: <Award className="h-6 w-6" />, label: "Awards Won", value: "12" },
  { icon: <Calendar className="h-6 w-6" />, label: "Years Experience", value: "8+" }
]

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Beauty Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with us on social media for daily beauty inspiration, behind-the-scenes content, 
            and exclusive tips from our expert team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Instagram className="h-5 w-5 mr-2" />
              Follow on Instagram
            </Button>
            <Button size="lg" variant="outline">
              <Facebook className="h-5 w-5 mr-2" />
              Like on Facebook
            </Button>
            <Button size="lg" variant="outline">
              <Twitter className="h-5 w-5 mr-2" />
              Follow on Twitter
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-rose-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Feed */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest from Social Media</h2>
            <Button variant="outline">View All Posts</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="font-semibold">{post.username}</span>
                        {post.verified && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{post.platform}</span>
                        <span className="mx-2">•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
                  
                  <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-rose-600 text-sm mb-2">{post.platform}</div>
                      <div className="text-gray-500 text-xs">Social Media Post</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">{post.shares}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      View Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <Badge variant="outline">{testimonial.service}</Badge>
                    <span>{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-rose-600 to-pink-600 text-white text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-rose-100 mb-6 max-w-md mx-auto">
              Follow us on social media for daily beauty inspiration, exclusive tips, and behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                <Instagram className="h-5 w-5 mr-2" />
                Follow on Instagram
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                Book Appointment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
