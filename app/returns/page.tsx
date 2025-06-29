import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw, Clock, Package, CreditCard, AlertTriangle, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Returns & Exchanges - E-Shop",
  description: "Learn about E-Shop's return policy, exchange process, and how to return or exchange your items.",
}

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Log into your account and select the item you want to return from your order history.",
      icon: Package,
    },
    {
      step: 2,
      title: "Print Label",
      description: "Print the prepaid return shipping label that will be emailed to you.",
      icon: RotateCcw,
    },
    {
      step: 3,
      title: "Pack & Ship",
      description: "Pack the item securely in its original packaging and attach the return label.",
      icon: Package,
    },
    {
      step: 4,
      title: "Get Refund",
      description: "Once we receive and process your return, your refund will be issued within 3-5 business days.",
      icon: CreditCard,
    },
  ]

  const returnableItems = [
    { category: "Clothing & Accessories", eligible: true, notes: "Must have tags attached and be unworn" },
    { category: "Electronics", eligible: true, notes: "30-day return window, original packaging required" },
    { category: "Home & Garden", eligible: true, notes: "Must be in original condition" },
    { category: "Books & Media", eligible: true, notes: "Must be in sellable condition" },
    { category: "Health & Beauty", eligible: false, notes: "Due to hygiene reasons, most items are final sale" },
    { category: "Personalized Items", eligible: false, notes: "Custom items cannot be returned unless defective" },
    { category: "Gift Cards", eligible: false, notes: "Gift cards are non-refundable" },
    { category: "Digital Products", eligible: false, notes: "Downloads and digital content are final sale" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Returns & Exchanges</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Easy Returns & <span className="gradient-text">Exchanges</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Not completely satisfied with your purchase? No problem! We offer a hassle-free 30-day return policy to
              ensure you're happy with every order.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">30-Day Window</h3>
                <p className="text-gray-600 leading-relaxed">
                  You have 30 days from the delivery date to return most items for a full refund or exchange.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RotateCcw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Returns</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide prepaid return shipping labels for all eligible returns within the United States.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Refunds</h3>
                <p className="text-gray-600 leading-relaxed">
                  Refunds are processed within 3-5 business days after we receive your returned item.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Return Process */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How to <span className="gradient-text">Return an Item</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Our return process is simple and straightforward. Follow these four easy steps to return your item.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {returnSteps.map(({ step, title, description, icon: Icon }) => (
                <div key={step} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                      {step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                  </div>
                  {step < 4 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a href="/orders">Start a Return</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Return Eligibility */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Return <span className="gradient-text">Eligibility</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most items can be returned within 30 days, but some restrictions apply. Check the eligibility of your
              items below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {returnableItems.map(({ category, eligible, notes }) => (
              <Card key={category} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        eligible ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {eligible ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                      <p className={`text-sm font-medium mb-2 ${eligible ? "text-green-600" : "text-red-600"}`}>
                        {eligible ? "Returnable" : "Not Returnable"}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">{notes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Policy */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">Exchanges</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Need a Different <span className="gradient-text">Size or Color?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Exchanges are easy! Simply return your original item and place a new order for the item you want. This
                ensures you get the fastest service and the exact item you're looking for.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Same Return Policy</h4>
                    <p className="text-gray-600 text-sm">
                      Exchanges follow the same 30-day return window and eligibility rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Price Protection</h4>
                    <p className="text-gray-600 text-sm">
                      If the new item costs less, we'll refund the difference. If it costs more, you'll pay the
                      difference.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Processing</h4>
                    <p className="text-gray-600 text-sm">
                      We'll process your new order as soon as we receive your return.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Exchange Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="text-gray-700">Return your original item using our return process</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="text-gray-700">Place a new order for the item you want</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="text-gray-700">We'll process both transactions once we receive your return</span>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Start Exchange Process
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Important <span className="gradient-text">Information</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  Return Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li>• Items must be in original condition with all tags attached</li>
                  <li>• Original packaging and accessories must be included</li>
                  <li>• Items showing signs of wear or damage may not be accepted</li>
                  <li>• Returns must be initiated within 30 days of delivery</li>
                  <li>• Some items may have different return windows (check product page)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  Refund Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li>• Refunds are issued to the original payment method</li>
                  <li>• Processing takes 3-5 business days after we receive your return</li>
                  <li>• Bank processing may take additional 5-10 business days</li>
                  <li>• Original shipping costs are non-refundable (unless item was defective)</li>
                  <li>• Gift card purchases are refunded as store credit</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Help with Your Return?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help make your return process as smooth as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contact">Contact Support</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a href="/orders">View My Orders</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
