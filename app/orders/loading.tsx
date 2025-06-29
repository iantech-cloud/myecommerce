import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrdersLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800">Order Management</Badge>
            <div className="h-16 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-200 rounded-md w-80 animate-pulse"></div>
          </div>

          {/* Tabs Skeleton */}
          <div className="mb-8">
            <div className="flex gap-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded-md w-32 animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Orders Skeleton */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-60 animate-pulse"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Items Skeleton */}
                  <div className="space-y-4 mb-6">
                    {[...Array(2)].map((_, j) => (
                      <div key={j} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-16 h-16 bg-gray-200 rounded-md animate-pulse"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  {/* Buttons Skeleton */}
                  <div className="flex gap-3">
                    {[...Array(4)].map((_, k) => (
                      <div key={k} className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
