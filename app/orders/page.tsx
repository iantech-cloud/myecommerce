"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Truck, CheckCircle, Clock, Search, Eye, RotateCcw, Download, Star } from "lucide-react"

// Mock data for demonstration
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-12-10",
    status: "delivered",
    total: 129.99,
    items: [
      {
        name: "Wireless Bluetooth Headphones",
        quantity: 1,
        price: 79.99,
        image: "/placeholder.svg?height=80&width=80",
      },
      { name: "Phone Case - Clear", quantity: 2, price: 25.0, image: "/placeholder.svg?height=80&width=80" },
    ],
    tracking: "TRK123456789",
    shippingAddress: "123 Main St, Anytown, ST 12345",
  },
  {
    id: "ORD-2024-002",
    date: "2024-12-08",
    status: "shipped",
    total: 89.5,
    items: [
      { name: "Cotton T-Shirt - Blue", quantity: 1, price: 29.99, image: "/placeholder.svg?height=80&width=80" },
      { name: "Denim Jeans - Dark Wash", quantity: 1, price: 59.99, image: "/placeholder.svg?height=80&width=80" },
    ],
    tracking: "TRK987654321",
    shippingAddress: "456 Oak Ave, Another City, ST 67890",
  },
  {
    id: "ORD-2024-003",
    date: "2024-12-05",
    status: "processing",
    total: 199.99,
    items: [{ name: "Smart Watch - Black", quantity: 1, price: 199.99, image: "/placeholder.svg?height=80&width=80" }],
    tracking: null,
    shippingAddress: "789 Pine St, Third Town, ST 13579",
  },
]

const statusConfig = {
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-800", icon: Truck },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-800", icon: CheckCircle },
}

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTab = selectedTab === "all" || order.status === selectedTab
    return matchesSearch && matchesTab
  })

  const getStatusCounts = () => {
    return {
      all: orders.length,
      processing: orders.filter((o) => o.status === "processing").length,
      shipped: orders.filter((o) => o.status === "shipped").length,
      delivered: orders.filter((o) => o.status === "delivered").length,
    }
  }

  const statusCounts = getStatusCounts()

  if (isLoading) {
    return <div>Loading...</div> // This would be replaced by the loading component
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Order Management</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Orders</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Track your orders, view order history, and manage returns all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Orders Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Order Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="all" className="flex items-center gap-2">
                All Orders
                <Badge variant="secondary" className="ml-1">
                  {statusCounts.all}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="processing" className="flex items-center gap-2">
                Processing
                <Badge variant="secondary" className="ml-1">
                  {statusCounts.processing}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="shipped" className="flex items-center gap-2">
                Shipped
                <Badge variant="secondary" className="ml-1">
                  {statusCounts.shipped}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="delivered" className="flex items-center gap-2">
                Delivered
                <Badge variant="secondary" className="ml-1">
                  {statusCounts.delivered}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-8">
              {filteredOrders.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orders Found</h3>
                    <p className="text-gray-600 mb-6">
                      {searchQuery ? "No orders match your search criteria." : "You haven't placed any orders yet."}
                    </p>
                    <Button asChild>
                      <a href="/products">Start Shopping</a>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {filteredOrders.map((order) => {
                    const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon
                    return (
                      <Card key={order.id} className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <CardTitle className="text-lg mb-2">Order {order.id}</CardTitle>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>Placed on {new Date(order.date).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>${order.total.toFixed(2)}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge className={statusConfig[order.status as keyof typeof statusConfig].color}>
                                <StatusIcon className="h-4 w-4 mr-1" />
                                {statusConfig[order.status as keyof typeof statusConfig].label}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          {/* Order Items */}
                          <div className="space-y-4 mb-6">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Tracking Information */}
                          {order.tracking && (
                            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                              <div className="flex items-center gap-2 mb-2">
                                <Truck className="h-5 w-5 text-blue-600" />
                                <span className="font-medium text-blue-900">Tracking Information</span>
                              </div>
                              <p className="text-blue-800 text-sm">Tracking Number: {order.tracking}</p>
                              <p className="text-blue-700 text-sm">Shipping to: {order.shippingAddress}</p>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>

                            {order.tracking && (
                              <Button variant="outline" size="sm">
                                <Truck className="h-4 w-4 mr-2" />
                                Track Package
                              </Button>
                            )}

                            {order.status === "delivered" && (
                              <>
                                <Button variant="outline" size="sm">
                                  <RotateCcw className="h-4 w-4 mr-2" />
                                  Return Item
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Star className="h-4 w-4 mr-2" />
                                  Write Review
                                </Button>
                              </>
                            )}

                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download Invoice
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Need Help with Your <span className="gradient-text">Order?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help with any questions about your orders, shipping, or returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <a href="/contact">Contact Support</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/faq">View FAQ</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
