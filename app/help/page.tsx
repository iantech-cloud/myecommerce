import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Search,
  ShoppingCart,
  Truck,
  RotateCcw,
  CreditCard,
  User,
  Shield,
  Clock,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Center - E-Shop",
  description:
    "Get help and support for your E-Shop experience. Find answers, contact support, and access helpful resources.",
}

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Orders & Shipping",
      icon: Truck,
      description: "Track orders, shipping info, and delivery questions",
      topics: [
        "How to track my order",
        "Shipping options and costs",
        "Delivery timeframes",
        "International shipping",
        "Order modifications",
      ],
      link: "/faq#orders",
    },
    {
      title: "Returns & Exchanges",
      icon: RotateCcw,
      description: "Return policies, exchange process, and refunds",
      topics: [
        "How to return an item",
        "Return policy details",
        "Exchange process",
        "Refund timeframes",
        "Return shipping",
      ],
      link: "/returns",
    },
    {
      title: "Payment & Billing",
      icon: CreditCard,
      description: "Payment methods, billing issues, and pricing",
      topics: [
        "Accepted payment methods",
        "Payment security",
        "Billing questions",
        "Promotional codes",
        "Price matching",
      ],
      link: "/faq#payments",
    },
    {
      title: "Account & Profile",
      icon: User,
      description: "Account management, login issues, and settings",
      topics: ["Creating an account", "Password reset", "Profile updates", "Email preferences", "Account security"],
      link: "/faq#account",
    },
    {
      title: "Products & Inventory",
      icon: ShoppingCart,
      description: "Product information, availability, and specifications",
      topics: [
        "Product availability",
        "Size guides",
        "Product specifications",
        "Stock notifications",
        "Product reviews",
      ],
      link: "/faq#products",
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      description: "Data protection, privacy policies, and security",
      topics: ["Privacy policy", "Data security", "Cookie policy", "Account protection", "Safe shopping"],
      link: "/privacy",
    },
  ]

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Mon-Fri: 9AM-8PM EST",
      icon: MessageCircle,
      action: "Start Chat",
      primary: true,
    },
    {
      title: "Phone Support",
      description: "Speak directly with a customer service representative",
      availability: "+1 (555) 123-4567",
      icon: Phone,
      action: "Call Now",
      primary: false,
    },
    {
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours",
      availability: "support@eshop.com",
      icon: Mail,
      action: "Send Email",
      primary: false,
    },
  ]

  const quickActions = [
    { title: "Track an Order", icon: Truck, link: "/orders" },
    { title: "Start a Return", icon: RotateCcw, link: "/returns" },
    { title: "View My Account", icon: User, link: "/login" },
    { title: "Browse FAQ", icon: HelpCircle, link: "/faq" },
    { title: "Contact Support", icon: MessageCircle, link: "/contact" },
    { title: "Search Products", icon: Search, link: "/search" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Support Center</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Can We <span className="gradient-text">Help You?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find answers to common questions, get support, and learn how to make the most of your E-Shop experience.
            </p>

            {/* Quick Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick <span className="gradient-text">Actions</span>
            </h2>
            <p className="text-gray-600">Common tasks you might want to do</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map(({ title, icon: Icon, link }) => (
              <a
                key={title}
                href={link}
                className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 text-center leading-tight">{title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Browse Help <span className="gradient-text">Topics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find detailed information organized by topic. Click on any category to explore related articles and
              guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map(({ title, icon: Icon, description, topics, link }) => (
              <Card key={title} className="shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{title}</CardTitle>
                  <p className="text-gray-600 text-sm">{description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 bg-transparent"
                  >
                    <a href={link}>Explore Topics</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Still Need <span className="gradient-text">Help?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our friendly customer support team is here to help. Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map(({ title, description, availability, icon: Icon, action, primary }) => (
              <Card
                key={title}
                className={`text-center shadow-lg hover:shadow-xl transition-shadow ${
                  primary ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                }`}
              >
                <CardContent className="pt-8 pb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      primary ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-100"
                    }`}
                  >
                    <Icon className={`h-8 w-8 ${primary ? "text-white" : "text-gray-600"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
                  <div className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    {availability}
                  </div>
                  <Button
                    className={
                      primary
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : ""
                    }
                    variant={primary ? "default" : "outline"}
                  >
                    {action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional <span className="gradient-text">Resources</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-sm text-gray-600 mb-4">Frequently asked questions and detailed answers</p>
                <Button asChild variant="outline" size="sm">
                  <a href="/faq">Browse FAQ</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Shipping Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Complete shipping information and policies</p>
                <Button asChild variant="outline" size="sm">
                  <a href="/shipping">View Guide</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <RotateCcw className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Return Policy</h3>
                <p className="text-sm text-gray-600 mb-4">Easy returns and exchange information</p>
                <Button asChild variant="outline" size="sm">
                  <a href="/returns">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Privacy & Security</h3>
                <p className="text-sm text-gray-600 mb-4">How we protect your information</p>
                <Button asChild variant="outline" size="sm">
                  <a href="/privacy">Read Policy</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Help Us Improve</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your feedback helps us create better support resources. Let us know how we can improve your experience.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a href="/contact">Send Feedback</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
