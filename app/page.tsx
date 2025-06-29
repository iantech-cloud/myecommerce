import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createServerClient } from "@/lib/supabase"
import type { Product, Category } from "@/lib/types"
import { Star, Truck, Shield, Headphones, ArrowRight, Zap, Award, TrendingUp } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ProductCarousel } from "@/components/product-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Shop - Premium Online Shopping Experience",
  description:
    "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods and more with fast shipping, secure payments, and exceptional customer service.",
  openGraph: {
    title: "E-Shop - Premium Online Shopping Experience",
    description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods and more.",
    images: ["/og-home.jpg"],
  },
}

async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = createServerClient()
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .limit(8)
    .order("rating", { ascending: false })

  return products || []
}

async function getCategories(): Promise<Category[]> {
  const supabase = createServerClient()
  const { data: categories } = await supabase.from("categories").select("*").limit(6).order("name")

  return categories || []
}

async function getNewArrivals(): Promise<Product[]> {
  const supabase = createServerClient()
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .limit(6)
    .order("created_at", { ascending: false })

  return products || []
}

async function getBestSellers(): Promise<Product[]> {
  const supabase = createServerClient()
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .limit(4)
    .order("review_count", { ascending: false })

  return products || []
}

export default async function HomePage() {
  const [featuredProducts, categories, newArrivals, bestSellers] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
    getNewArrivals(),
    getBestSellers(),
  ])

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Shop by Category</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="gradient-text">Premium Collections</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated categories featuring the latest trends and timeless classics
            </p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16 gap-4">
            <div className="flex-1">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                <Award className="h-3 w-3 mr-1" />
                Featured Products
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hand-picked <span className="gradient-text">Favorites</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Our team of experts has selected these premium products just for you
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="shrink-0 bg-transparent">
              <Link href="/products?featured=true">
                View All Featured <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ProductCarousel products={featuredProducts} />
        </div>
      </section>

      {/* Best Sellers & New Arrivals */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
            {/* Best Sellers */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Best Sellers
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Customer <span className="gradient-text">Favorites</span>
                </h3>
                <p className="text-gray-600">Most loved products by our community</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bestSellers.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image_url || "/placeholder.svg?height=300&width=300"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            #{index + 1} Best Seller
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 ml-1">({product.review_count})</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h4>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-purple-600">${product.price}</span>
                          <Button asChild size="sm" variant="outline">
                            <Link href={`/products/${product.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* New Arrivals */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                  <Zap className="h-3 w-3 mr-1" />
                  New Arrivals
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Latest <span className="gradient-text">Additions</span>
                </h3>
                <p className="text-gray-600">Fresh products just added to our collection</p>
              </div>

              <div className="space-y-4">
                {newArrivals.slice(0, 4).map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative overflow-hidden rounded-lg shrink-0">
                          <Image
                            src={product.image_url || "/placeholder.svg?height=64&width=64"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-green-500 text-white text-xs">New</Badge>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <h4 className="font-semibold text-sm mb-1 line-clamp-1">{product.name}</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-green-600">${product.price}</span>
                            <Button asChild size="sm" variant="ghost">
                              <Link href={`/products/${product.id}`}>View →</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Why Choose Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Experience the <span className="gradient-text">E-Shop Difference</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Lightning Fast Delivery",
                description:
                  "Free shipping on orders over $50. Get your items delivered in 2-3 days with our express shipping.",
                gradient: "from-blue-500 to-purple-600",
                delay: "0ms",
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your data is protected with 256-bit SSL encryption and secure payment processing.",
                gradient: "from-green-500 to-teal-600",
                delay: "100ms",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description:
                  "All products are carefully selected and quality tested by our expert team before shipping.",
                gradient: "from-purple-500 to-pink-600",
                delay: "200ms",
              },
              {
                icon: Headphones,
                title: "24/7 Expert Support",
                description: "Our dedicated customer support team is always ready to help you with any questions.",
                gradient: "from-orange-500 to-red-600",
                delay: "300ms",
              },
            ].map(({ icon: Icon, title, description, gradient, delay }) => (
              <div key={title} className="text-center group animate-fade-in-up" style={{ animationDelay: delay }}>
                <div
                  className={`bg-gradient-to-br ${gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">Stay Connected</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Never Miss a <span className="text-yellow-300">Deal</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get exclusive deals, new product launches, and insider tips delivered straight to your inbox. Join over
              50,000 happy customers!
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-white/30 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-blue-100 mt-4 opacity-80">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
