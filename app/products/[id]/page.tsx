import { notFound } from "next/navigation"
import Image from "next/image"
import { createServerClient } from "@/lib/supabase"
import type { Product, ProductReview } from "@/lib/types"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { WishlistButton } from "@/components/wishlist-button"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Truck, Shield, RotateCcw, Award, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

async function getProduct(id: string): Promise<Product | null> {
  const supabase = createServerClient()
  const { data: product } = await supabase.from("products").select("*").eq("id", id).single()
  return product
}

async function getProductReviews(productId: string): Promise<ProductReview[]> {
  const supabase = createServerClient()
  const { data: reviews } = await supabase
    .from("product_reviews")
    .select(`
      *,
      user_profile:user_profiles(full_name)
    `)
    .eq("product_id", productId)
    .order("created_at", { ascending: false })

  return reviews || []
}

async function getRelatedProducts(categoryId: string, currentProductId: string): Promise<Product[]> {
  const supabase = createServerClient()
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId)
    .neq("id", currentProductId)
    .limit(4)

  return products || []
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | E-Shop`,
    description: product.description,
    keywords: [product.name, product.category, "online shopping", "e-commerce"].join(", "),
    openGraph: {
      title: `${product.name} | E-Shop`,
      description: product.description,
      images: [
        {
          url: product.image_url || "/placeholder.svg",
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | E-Shop`,
      description: product.description,
      images: [product.image_url || "/placeholder.svg"],
    },
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const [reviews, relatedProducts] = await Promise.all([
    getProductReviews(product.id),
    getRelatedProducts(product.category_id || "", product.id),
  ])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image_url,
    brand: {
      "@type": "Brand",
      name: "E-Shop",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.stock_quantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `https://eshop.com/products/${product.id}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.review_count,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-responsive py-responsive">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/products" className="hover:text-blue-600">
                Products
              </a>
            </li>
            <li>/</li>
            <li>
              <a href={`/products?category=${product.category}`} className="hover:text-blue-600">
                {product.category}
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-premium-lg bg-gray-100">
              <Image
                src={product.image_url || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                    <Award className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <Button size="sm" variant="secondary" className="rounded-full bg-white/90 backdrop-blur-sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-responsive-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)} ({product.review_count} reviews)
                  </span>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {product.category}
                </Badge>
              </div>
            </div>

            <div className="text-responsive-3xl font-bold text-blue-600 mb-6">${product.price}</div>

            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <Card className="border-2 border-gray-100 shadow-premium">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium">Availability:</span>
                  <span
                    className={`text-sm font-semibold ${
                      product.stock_quantity > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : "Out of stock"}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <div className="flex-1">
                    <AddToCartButton productId={product.id} disabled={product.stock_quantity === 0} />
                  </div>
                  <WishlistButton productId={product.id} />
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Truck className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Free shipping over $50</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600 shrink-0" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <RotateCcw className="h-5 w-5 text-purple-600 shrink-0" />
                    <span>30-day returns</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-600 shrink-0" />
                    <span>Quality guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Reviews */}
        <ProductReviews productId={product.id} reviews={reviews} />

        {/* Related Products */}
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>
    </>
  )
}
