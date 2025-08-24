import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  BookOpen, 
  Video, 
  Star, 
  Clock, 
  Users, 
  Play, 
  Mail, 
  CheckCircle,
  Sparkles,
  Heart
} from "lucide-react"

const beautyTips = [
  {
    id: 1,
    title: "Perfect Foundation Application",
    description: "Learn the secrets to flawless foundation that lasts all day",
    duration: "8 min",
    difficulty: "Beginner",
    category: "Makeup",
    featured: true
  },
  {
    id: 2,
    title: "Skincare Routine for Glowing Skin",
    description: "Build a morning and evening routine for radiant skin",
    duration: "12 min",
    difficulty: "Intermediate",
    category: "Skincare",
    featured: false
  },
  {
    id: 3,
    title: "Natural Hair Care Tips",
    description: "Essential tips for maintaining healthy, beautiful natural hair",
    duration: "15 min",
    difficulty: "Beginner",
    category: "Hair",
    featured: true
  },
  {
    id: 4,
    title: "Bridal Makeup Prep",
    description: "Complete guide to preparing your skin for the big day",
    duration: "20 min",
    difficulty: "Advanced",
    category: "Bridal",
    featured: false
  },
  {
    id: 5,
    title: "Evening Glamour Look",
    description: "Step-by-step guide to creating a stunning evening look",
    duration: "18 min",
    difficulty: "Intermediate",
    category: "Makeup",
    featured: false
  },
  {
    id: 6,
    title: "Anti-Aging Skincare Secrets",
    description: "Proven techniques for maintaining youthful, radiant skin",
    duration: "25 min",
    difficulty: "Advanced",
    category: "Skincare",
    featured: true
  }
]

const benefits = [
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Tutorials",
    description: "Step-by-step video guides from our expert beauty professionals"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Expert Tips",
    description: "Insider knowledge and professional techniques you won't find elsewhere"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Access",
    description: "Connect with fellow beauty enthusiasts and share your journey"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Exclusive Content",
    description: "Premium tutorials and tips available only to our subscribers"
  }
]

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-rose-600 mr-2" />
            <Badge variant="secondary" className="text-sm">
              Beauty Education
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Beauty Secrets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unlock the secrets to radiant beauty with our expert-led tutorials, 
            tips, and techniques. From skincare fundamentals to advanced makeup artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Play className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline">
              View All Tutorials
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-rose-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tutorials */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Tutorials</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyTips.filter(tip => tip.featured).map((tip) => (
              <Card key={tip.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <Play className="h-12 w-12 text-rose-600 group-hover:scale-110 transition-transform" />
                  {tip.featured && (
                    <Badge className="absolute top-3 left-3 bg-rose-600 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {tip.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{tip.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {tip.difficulty}
                    </Badge>
                    <Button size="sm" variant="ghost">
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <Card className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 mr-2" />
              <h2 className="text-2xl font-bold">Stay Updated</h2>
            </div>
            <p className="text-rose-100 mb-6 max-w-md mx-auto">
              Get the latest beauty tips, tutorials, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-rose-200"
              />
              <Button variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* All Tutorials Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyTips.map((tip) => (
              <Card key={tip.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <Play className="h-8 w-8 text-rose-600 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {tip.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{tip.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-base mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-xs mb-3">{tip.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {tip.difficulty}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-xs">
                      <Play className="h-3 w-3 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
