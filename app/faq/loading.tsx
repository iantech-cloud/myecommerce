import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800">Help Center</Badge>
            <div className="h-16 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>

            {/* Search Bar Skeleton */}
            <div className="relative max-w-2xl mx-auto">
              <div className="h-14 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* FAQ List Skeleton */}
            <div className="lg:col-span-3">
              <div className="h-6 bg-gray-200 rounded mb-6 w-48 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <Card key={i} className="border border-gray-200 rounded-lg">
                    <CardContent className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
