import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="aspect-square relative overflow-hidden rounded-t-lg">
              <Image
                src={product.image_url || "/placeholder.svg?height=300&width=300"}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg mb-2 line-clamp-1">{product.name}</CardTitle>
            <CardDescription className="mb-3 line-clamp-2">{product.description}</CardDescription>
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-bold text-blue-600">${product.price}</span>
              <span className="text-sm text-gray-500">{product.stock_quantity} in stock</span>
            </div>
            <Button asChild className="w-full">
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
