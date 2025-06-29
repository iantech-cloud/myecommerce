import Image from "next/image"
import Link from "next/link"
import { createServerClient } from "@/lib/supabase"
import type { Category, Product } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop by Category | E-Shop",
  description:
    "Browse our extensive collection of product categories. Find electronics, fashion, home goods, sports equipment and more at unbeatable prices.",
  keywords: [
    "product categories",
    "shop by category",
    "electronics",
    "fashion",
    "home goods",
    "sports",
    "online shopping",
  ],
  openGraph: {
    title: "Shop by Category | E-Shop",
    description:
      "Browse our extensive collection of product categories. Find electronics, fashion, home goods, sports equipment and more.",
    images: ["/og-categories.jpg"],
  },
}

interface CategoryWithStats extends Category {
  product_count: number
  featured_products: Product[]
  avg_rating: number
}

async function getCategories(): Promise<CategoryWithStats[]> {
  const supabase = createServerClient()

  // Get categories with product counts
  const { data: categories } = await supabase.from("categories").select("*").order("name")

  if (!categories) return []

  // Get stats for each category
  const categoriesWithStats = await Promise.all(
    categories.map(async (category) => {
      // Get product count
      const { count: productCount } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("category_id", category.id)

      // Get featured products for this category
      const { data: featuredProducts } = await supabase
        .from("products")
        .select("*")
        .eq("category_id", category.id)
        .order("rating", { ascending: false })
        .limit(3)

      // Get average rating for category
      const { data: ratingData } = await supabase.from("products").select("rating").eq("category_id", category.id)

      const avgRating =
        ratingData && ratingData.length > 0
          ? ratingData.reduce((sum, product) => sum + product.rating, 0) / ratingData.length
          : 0

      return {
        ...category,
        product_count: productCount || 0,
        featured_products: featuredProducts || [],
        avg_rating: avgRating,
      }
    }),
  )

  return categoriesWithStats
}

async function getFeaturedCategory(): Promise<CategoryWithStats | null> {
  const categories = await getCategories()
  // Return category with most products as featured
  return categories.sort((a, b) => b.product_count - a.product_count)[0] || null
}

export default async function CategoriesPage() {
  const [categories, featuredCategory] = await Promise.all([getCategories(), getFeaturedCategory()])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Product Categories",
    description: "Browse our extensive collection of product categories",
    url: "https://eshop.com/categories",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ProductGroup",
          name: category.name,
          description: category.description,
          url: `https://eshop.com/products?category=${category.slug}`,
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-responsive text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Package className="h-3 w-3 mr-1" />
              Shop by Category
            </Badge>
            <h1 className="text-responsive-4xl font-bold mb-6">
              Discover Your Perfect <span className="text-yellow-300">Category</span>
            </h1>
            <p className="text-responsive-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated collection of premium products across multiple categories. From cutting-edge
              electronics to stylish fashion, we have everything you need.
            </p>
          </div>
        </section>

        {/* Featured Category */}
        {featuredCategory && (
          <section className="py-16 lg:py-20">
            <div className="container-responsive">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
                <h2 className="text-responsive-3xl font-bold text-gray-900 mb-4">
                  Featured Category: <span className="gradient-text">{featuredCategory.name}</span>
                </h2>
                <p className="text-responsive-base text-gray-600 max-w-2xl mx-auto">{featuredCategory.description}</p>
              </div>

              <Card className="overflow-hidden shadow-premium-lg bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Category Info */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4" />
                            <span>{featuredCategory.product_count} Products</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{featuredCategory.avg_rating.toFixed(1)} Average Rating</span>
                          </div>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{featuredCategory.name}</h3>

                        <p className="text-gray-700 leading-relaxed">{featuredCategory.description}</p>

                        {/* Featured Products Preview */}
                        {featuredCategory.featured_products.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Popular Products:</h4>
                            <div className="space-y-2">
                              {featuredCategory.featured_products.slice(0, 3).map((product) => (
                                <div key={product.id} className="flex items-center gap-3 text-sm">
                                  <div className="w-8 h-8 relative overflow-hidden rounded bg-gray-100">
                                    <Image
                                      src={product.image_url || "/placeholder.svg?height=32&width=32"}
                                      alt={product.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="text-gray-700">{product.name}</span>
                                  <span className="text-blue-600 font-semibold ml-auto">${product.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <Button asChild size="lg" className="w-fit btn-premium">
                          <Link href={`/products?category=${featuredCategory.slug}`}>
                            Explore {featuredCategory.name}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Category Image */}
                    <div className="relative h-64 lg:h-full min-h-[300px]">
                      <Image
                        src={featuredCategory.image_url || "/placeholder.svg?height=400&width=600"}
                        alt={featuredCategory.name}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* All Categories Grid */}
        <section className="py-16 lg:py-20">
          <div className="container-responsive">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-responsive-3xl font-bold text-gray-900 mb-4">
                All <span className="gradient-text">Categories</span>
              </h2>
              <p className="text-responsive-base text-gray-600 max-w-2xl mx-auto">
                Browse through our complete collection of product categories and find exactly what you're looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categories.map((category, index) => (
                <Card
                  key={category.id}
                  className="group hover:shadow-premium-lg transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Category Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={category.image_url || "/placeholder.svg?height=300&width=400"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Category Stats Overlay */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
                          {category.product_count} Products
                        </Badge>
                        {category.avg_rating > 0 && (
                          <Badge className="bg-yellow-400/90 text-yellow-900 backdrop-blur-sm">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {category.avg_rating.toFixed(1)}
                          </Badge>
                        )}
                      </div>

                      {/* Category Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{category.name}</h3>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {category.description ||
                          `Discover amazing ${category.name.toLowerCase()} products at unbeatable prices.`}
                      </p>

                      {/* Featured Products Preview */}
                      {category.featured_products.length > 0 && (
                        <div className="mb-4">
                          <div className="flex -space-x-2 mb-2">
                            {category.featured_products.slice(0, 3).map((product, idx) => (
                              <div
                                key={product.id}
                                className="w-8 h-8 relative overflow-hidden rounded-full border-2 border-white bg-gray-100"
                                style={{ zIndex: 3 - idx }}
                              >
                                <Image
                                  src={product.image_url || "/placeholder.svg?height=32&width=32"}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500">
                            Popular:{" "}
                            {category.featured_products
                              .slice(0, 2)
                              .map((p) => p.name)
                              .join(", ")}
                            {category.featured_products.length > 2 && "..."}
                          </p>
                        </div>
                      )}

                      <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                        <Link href={`/products?category=${category.slug}`}>
                          Shop {category.name}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container-responsive text-center">
            <h2 className="text-responsive-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-responsive-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse all our products or use our advanced search to find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/products">
                  Browse All Products
                  <Package className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/search">
                  Advanced Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
