import { Card, CardContent } from "@/components/ui/card"

export default function CategoriesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container-responsive text-center text-white">
          <div className="animate-pulse">
            <div className="h-6 w-32 bg-white/20 rounded-full mx-auto mb-6"></div>
            <div className="h-12 w-96 bg-white/20 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-full max-w-3xl bg-white/20 rounded mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Featured Category Skeleton */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12 animate-pulse">
            <div className="h-6 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>

          <Card className="overflow-hidden shadow-premium-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 animate-pulse space-y-6">
                  <div className="flex gap-4">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-8 w-48 bg-gray-200 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-12 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="h-64 lg:h-full bg-gray-200 animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Grid Skeleton */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16 animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="overflow-hidden animate-pulse">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
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
