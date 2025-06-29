"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Star, X } from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { Product, Category } from "@/lib/types"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "all",
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: Number(searchParams.get("maxPrice")) || 1000,
    rating: Number(searchParams.get("rating")) || 0,
    sort: searchParams.get("sort") || "relevance",
  })

  useEffect(() => {
    fetchCategories()
    if (searchQuery) {
      performSearch()
    }
  }, [])

  useEffect(() => {
    if (searchQuery) {
      performSearch()
    }
  }, [filters])

  const fetchCategories = async () => {
    const { data } = await supabase.from("categories").select("*").order("name")
    setCategories(data || [])
  }

  const performSearch = async () => {
    setIsLoading(true)

    let query = supabase.from("products").select("*")

    // Apply search query
    if (searchQuery) {
      query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
    }

    // Apply filters
    if (filters.category) {
      const category = categories.find((c) => c.slug === filters.category)
      if (category) {
        query = query.eq("category_id", category.id)
      }
    }

    if (filters.minPrice > 0) {
      query = query.gte("price", filters.minPrice)
    }

    if (filters.maxPrice < 1000) {
      query = query.lte("price", filters.maxPrice)
    }

    if (filters.rating > 0) {
      query = query.gte("rating", filters.rating)
    }

    // Apply sorting
    switch (filters.sort) {
      case "price-asc":
        query = query.order("price", { ascending: true })
        break
      case "price-desc":
        query = query.order("price", { ascending: false })
        break
      case "rating":
        query = query.order("rating", { ascending: false })
        break
      case "newest":
        query = query.order("created_at", { ascending: false })
        break
      default:
        query = query.order("name", { ascending: true })
    }

    const { data } = await query
    setProducts(data || [])
    setIsLoading(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch()
    updateURL()
  }

  const updateURL = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    if (filters.category) params.set("category", filters.category)
    if (filters.minPrice > 0) params.set("minPrice", filters.minPrice.toString())
    if (filters.maxPrice < 1000) params.set("maxPrice", filters.maxPrice.toString())
    if (filters.rating > 0) params.set("rating", filters.rating.toString())
    if (filters.sort !== "relevance") params.set("sort", filters.sort)

    router.push(`/search?${params.toString()}`)
  }

  const clearFilters = () => {
    setFilters({
      category: "all",
      minPrice: 0,
      maxPrice: 1000,
      rating: 0,
      sort: "relevance",
    })
    setSearchQuery("")
    setProducts([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-responsive py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Advanced Search</h1>
          <p className="text-gray-600">Find exactly what you're looking for with our powerful search filters.</p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select
                    value={filters.category}
                    onValueChange={(value) => setFilters({ ...filters, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.slug}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <Select value={filters.sort} onValueChange={(value) => setFilters({ ...filters, sort: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ${filters.minPrice} - ${filters.maxPrice}
                  </label>
                  <div className="space-y-2">
                    <Slider
                      value={[filters.minPrice]}
                      onValueChange={(value) => setFilters({ ...filters, minPrice: value[0] })}
                      max={1000}
                      step={10}
                      className="w-full"
                    />
                    <Slider
                      value={[filters.maxPrice]}
                      onValueChange={(value) => setFilters({ ...filters, maxPrice: value[0] })}
                      max={1000}
                      step={10}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                  <Select
                    value={filters.rating.toString()}
                    onValueChange={(value) => setFilters({ ...filters, rating: Number(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any Rating</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                      <SelectItem value="2">2+ Stars</SelectItem>
                      <SelectItem value="1">1+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1 sm:flex-none" disabled={isLoading}>
                  <Search className="mr-2 h-4 w-4" />
                  {isLoading ? "Searching..." : "Search"}
                </Button>
                <Button type="button" variant="outline" onClick={clearFilters}>
                  <X className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {isLoading ? "Searching..." : `${products.length} results for "${searchQuery}"`}
            </h2>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image_url || "/placeholder.svg?height=300&width=300"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-yellow-500 text-white">Featured</Badge>
                      </div>
                    )}
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
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">${product.price}</span>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/products/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : searchQuery && !isLoading ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
