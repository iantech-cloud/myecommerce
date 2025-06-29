import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { createServerClient } from "@/lib/supabase"
import type { Product } from "@/lib/types"

interface SearchParams {
  search?: string
  category?: string
  minPrice?: string
  maxPrice?: string
  sort?: string
}

async function getProducts(searchParams: SearchParams): Promise<Product[]> {
  const supabase = createServerClient()
  let query = supabase.from("products").select("*")

  // Apply search filter
  if (searchParams.search) {
    query = query.or(`name.ilike.%${searchParams.search}%,description.ilike.%${searchParams.search}%`)
  }

  // Apply category filter
  if (searchParams.category) {
    query = query.eq("category", searchParams.category)
  }

  // Apply price filters
  if (searchParams.minPrice) {
    query = query.gte("price", Number.parseFloat(searchParams.minPrice))
  }
  if (searchParams.maxPrice) {
    query = query.lte("price", Number.parseFloat(searchParams.maxPrice))
  }

  // Apply sorting
  switch (searchParams.sort) {
    case "price-asc":
      query = query.order("price", { ascending: true })
      break
    case "price-desc":
      query = query.order("price", { ascending: false })
      break
    case "name":
      query = query.order("name", { ascending: true })
      break
    default:
      query = query.order("created_at", { ascending: false })
  }

  const { data: products } = await query
  return products || []
}

async function getCategories(): Promise<string[]> {
  const supabase = createServerClient()
  const { data } = await supabase.from("products").select("category").not("category", "is", null)

  const categories = [...new Set(data?.map((item) => item.category) || [])]
  return categories
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const [products, categories] = await Promise.all([getProducts(searchParams), getCategories()])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <ProductFilters categories={categories} />
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
            <p className="text-gray-600">
              {searchParams.search && `Search results for "${searchParams.search}" - `}
              {products.length} product{products.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
