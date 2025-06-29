import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Category } from "@/lib/types"

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/products?category=${category.slug}`}>
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-4 text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={category.image_url || "/placeholder.svg?height=150&width=150"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
