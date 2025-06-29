import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  ShoppingBag,
  Search,
  User,
  ShoppingCart,
  Heart,
  Settings,
  HelpCircle,
  FileText,
  Truck,
  Mail,
  Info,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap - E-Shop",
  description:
    "Navigate E-Shop easily with our comprehensive sitemap. Find all pages and sections of our online store.",
}

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: Home,
      pages: [
        { name: "Home", url: "/", description: "Welcome page with featured products and categories" },
        { name: "Products", url: "/products", description: "Browse our complete product catalog" },
        { name: "Categories", url: "/categories", description: "Shop by product categories" },
        { name: "Search", url: "/search", description: "Search for specific products" },
        { name: "About Us", url: "/about", description: "Learn about our company and mission" },
        { name: "Contact", url: "/contact", description: "Get in touch with our support team" },
      ],
    },
    {
      category: "Shopping",
      icon: ShoppingBag,
      pages: [
        { name: "Shopping Cart", url: "/cart", description: "Review items before checkout" },
        { name: "Checkout", url: "/checkout", description: "Complete your purchase securely" },
        { name: "Wishlist", url: "/wishlist", description: "Save items for later" },
      ],
    },
    {
      category: "Account",
      icon: User,
      pages: [
        { name: "Sign In", url: "/login", description: "Access your account" },
        { name: "Register", url: "/register", description: "Create a new account" },
        { name: "My Orders", url: "/orders", description: "View and track your orders" },
        { name: "Forgot Password", url: "/auth/forgot-password", description: "Reset your password" },
      ],
    },
    {
      category: "Customer Service",
      icon: HelpCircle,
      pages: [
        { name: "FAQ", url: "/faq", description: "Frequently asked questions and answers" },
        { name: "Help Center", url: "/help", description: "Get help and support" },
        { name: "Shipping Information", url: "/shipping", description: "Shipping options and policies" },
        { name: "Returns & Exchanges", url: "/returns", description: "Return and exchange policies" },
      ],
    },
    {
      category: "Legal & Policies",
      icon: FileText,
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your personal information" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions of use" },
      ],
    },
    {
      category: "Admin",
      icon: Settings,
      pages: [{ name: "Admin Dashboard", url: "/admin", description: "Administrative panel (restricted access)" }],
    },
  ]

  const quickLinks = [
    { name: "New Arrivals", url: "/products?filter=new", icon: ShoppingBag },
    { name: "Best Sellers", url: "/products?filter=popular", icon: Heart },
    { name: "Sale Items", url: "/products?filter=sale", icon: ShoppingCart },
    { name: "Customer Reviews", url: "/products#reviews", icon: User },
    { name: "Size Guide", url: "/help#sizing", icon: Info },
    { name: "Track Order", url: "/orders#tracking", icon: Truck },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Site Navigation</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Site <span className="gradient-text">Map</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find everything you need quickly and easily. Browse our complete site structure and navigate to any page
              with just one click.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Popular <span className="gradient-text">Destinations</span>
            </h2>
            <p className="text-gray-600">Quick access to our most visited pages</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 text-center leading-tight">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete Site <span className="gradient-text">Structure</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all sections of our website organized by category. Click any link to navigate directly to that
              page.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteStructure.map(({ category, icon: CategoryIcon, pages }) => (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <CategoryIcon className="h-5 w-5 text-white" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pages.map(({ name, url, description }) => (
                      <div key={name} className="group">
                        <a
                          href={url}
                          className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1">{name}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                            </div>
                            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">→</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <CardContent className="p-12 text-center">
              <Search className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Use our search feature to find specific products, or contact our support team for personalized
                assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/search"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search Products
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            This sitemap is updated regularly to reflect our latest pages and features. Last updated:{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </div>
  )
}
