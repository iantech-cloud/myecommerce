import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, Globe, Package, MapPin, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Information - E-Shop",
  description: "Learn about E-Shop's shipping options, delivery times, costs, and international shipping policies.",
}

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "$5.99",
      time: "3-5 Business Days",
      description: "Reliable delivery for most orders within the continental US",
      icon: Truck,
      features: ["Tracking included", "Signature not required", "Free on orders $50+"],
    },
    {
      name: "Express Shipping",
      price: "$12.99",
      time: "1-2 Business Days",
      description: "Fast delivery when you need it quickly",
      icon: Clock,
      features: ["Priority handling", "Tracking included", "Signature required"],
    },
    {
      name: "Overnight Shipping",
      price: "$24.99",
      time: "Next Business Day",
      description: "Get your order the next business day",
      icon: Package,
      features: ["Guaranteed delivery", "Tracking included", "Signature required"],
    },
    {
      name: "International Shipping",
      price: "Varies",
      time: "7-14 Business Days",
      description: "We ship to over 25 countries worldwide",
      icon: Globe,
      features: ["Customs handling", "Tracking included", "Duties may apply"],
    },
  ]

  const internationalCountries = [
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Australia",
    "Japan",
    "South Korea",
    "Singapore",
    "Hong Kong",
    "Taiwan",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Ireland",
    "Portugal",
    "New Zealand",
    "Mexico",
    "Brazil",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Shipping Info</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fast & Reliable <span className="gradient-text">Shipping</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer multiple shipping options to get your orders to you quickly and safely. Choose the option that
              best fits your needs and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="gradient-text">Shipping Speed</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All shipping options include tracking and insurance. Delivery times are estimates and may vary during peak
              seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingOptions.map(({ name, price, time, description, icon: Icon, features }) => (
              <Card key={name} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
                  <div className="text-sm font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-block">
                    {time}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Policies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Shipping <span className="gradient-text">Policies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important information about our shipping process, restrictions, and what to expect with your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <CardTitle>Shipping Addresses</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Domestic Shipping</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We ship to all 50 US states, including Alaska and Hawaii. PO Boxes are accepted for most items, but
                    some large items may require a physical address.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address Requirements</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Complete street address with apartment/unit number if applicable</li>
                    <li>• Valid city, state, and ZIP code</li>
                    <li>• Phone number for delivery coordination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-blue-600" />
                  <CardTitle>Order Processing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Processing Time</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Most orders are processed within 1-2 business days. During peak seasons or sales events, processing
                    may take up to 3 business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Order Cutoff Times</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Standard shipping: 3:00 PM EST</li>
                    <li>• Express shipping: 1:00 PM EST</li>
                    <li>• Overnight shipping: 12:00 PM EST</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <CardTitle>Package Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Insurance & Tracking</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    All shipments include insurance and tracking at no extra cost. You'll receive tracking information
                    via email once your order ships.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delivery Issues</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If your package is lost or damaged during shipping, we'll work with the carrier to resolve the issue
                    and ensure you receive your order.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <CardTitle>Delivery Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delivery Attempts</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Carriers typically make 3 delivery attempts. If no one is available to receive the package, it will
                    be held at the local facility for pickup.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Special Instructions</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You can add delivery instructions during checkout, such as "Leave at front door" or "Ring doorbell
                    twice."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              International <span className="gradient-text">Shipping</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to serve customers around the world. Here's what you need to know about international orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Countries We Ship To</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {internationalCountries.map((country) => (
                      <div key={country} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {country}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    Don't see your country?{" "}
                    <a href="/contact" className="text-blue-600 hover:text-blue-700">
                      Contact us
                    </a>{" "}
                    to inquire about shipping options.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">International Shipping Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Delivery Time</h4>
                    <p className="text-gray-600 text-sm">
                      7-14 business days depending on destination and customs processing
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shipping Costs</h4>
                    <p className="text-gray-600 text-sm">
                      Calculated at checkout based on destination and package weight
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customs & Duties</h4>
                    <p className="text-gray-600 text-sm">
                      Additional fees may apply and are the responsibility of the recipient
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-800">Important Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    International customers are responsible for any customs duties, taxes, or fees imposed by their
                    country. These charges are not included in our shipping costs and must be paid upon delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Shipping <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Need more information about shipping? Check our FAQ or contact our customer service team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              View Shipping FAQ
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
