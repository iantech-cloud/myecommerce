"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, ShoppingCart, Truck, CreditCard, RotateCcw, Shield, User, MessageCircle } from "lucide-react"

const faqCategories = [
  { id: "all", label: "All Questions", icon: MessageCircle },
  { id: "orders", label: "Orders & Shipping", icon: Truck },
  { id: "payments", label: "Payments & Billing", icon: CreditCard },
  { id: "returns", label: "Returns & Exchanges", icon: RotateCcw },
  { id: "account", label: "Account & Profile", icon: User },
  { id: "security", label: "Security & Privacy", icon: Shield },
  { id: "products", label: "Products & Inventory", icon: ShoppingCart },
]

const faqs = [
  {
    category: "orders",
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the US. Express shipping (1-2 business days) and overnight shipping are also available. International shipping times vary by destination, usually 7-14 business days.",
  },
  {
    category: "orders",
    question: "Can I track my order?",
    answer:
      'Yes! Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "My Orders" section.',
  },
  {
    category: "orders",
    question: "Do you offer free shipping?",
    answer:
      "We offer free standard shipping on orders over $50 within the US. For orders under $50, standard shipping is $5.99. Free shipping promotions are regularly available - check our homepage for current offers.",
  },
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely with 256-bit SSL encryption.",
  },
  {
    category: "payments",
    question: "When will I be charged for my order?",
    answer:
      "Your payment method will be charged when your order is processed and ships. For pre-orders, you'll be charged when the item becomes available and ships.",
  },
  {
    category: "payments",
    question: "Can I use multiple payment methods for one order?",
    answer:
      "Currently, we only support one payment method per order. However, you can use gift cards in combination with another payment method to cover the remaining balance.",
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some restrictions apply to certain categories like electronics, intimate apparel, and personalized items.",
  },
  {
    category: "returns",
    question: "How do I return an item?",
    answer:
      'To return an item, log into your account, go to "My Orders," and select "Return Item" next to the product you want to return. Print the prepaid return label and drop off at any authorized shipping location.',
  },
  {
    category: "returns",
    question: "How long do refunds take?",
    answer:
      "Once we receive your returned item, refunds are processed within 3-5 business days. The refund will appear on your original payment method within 5-10 business days, depending on your bank or card issuer.",
  },
  {
    category: "account",
    question: "How do I create an account?",
    answer:
      'Click "Sign Up" in the top right corner of any page. You\'ll need to provide your email address, create a password, and verify your email. Creating an account allows you to track orders, save favorites, and checkout faster.',
  },
  {
    category: "account",
    question: "I forgot my password. How do I reset it?",
    answer:
      'Click "Forgot Password" on the sign-in page, enter your email address, and we\'ll send you a secure link to reset your password. The link expires after 24 hours for security.',
  },
  {
    category: "account",
    question: "How do I update my account information?",
    answer:
      'Log into your account and click on "Profile" or "Account Settings." You can update your personal information, shipping addresses, payment methods, and communication preferences.',
  },
  {
    category: "security",
    question: "Is my personal information secure?",
    answer:
      "Yes, we take security seriously. We use 256-bit SSL encryption for all data transmission, comply with PCI DSS standards for payment processing, and never store your full credit card information on our servers.",
  },
  {
    category: "security",
    question: "Do you share my information with third parties?",
    answer:
      "We do not sell or rent your personal information to third parties. We only share information with trusted partners who help us operate our business (like shipping companies) and only as necessary to fulfill your orders.",
  },
  {
    category: "products",
    question: "How do I know if an item is in stock?",
    answer:
      "Stock status is displayed on each product page. If an item is out of stock, you can sign up for restock notifications. We update inventory in real-time, so availability is always current.",
  },
  {
    category: "products",
    question: "Can I reserve an item?",
    answer:
      "Items are not reserved until you complete your purchase. We recommend adding items to your cart and checking out promptly for popular products. Items in your cart are held for 30 minutes.",
  },
  {
    category: "products",
    question: "Do you offer price matching?",
    answer:
      "We strive to offer competitive prices and regularly monitor the market. While we don't have a formal price matching policy, we do run frequent sales and promotions. Sign up for our newsletter to stay informed about deals.",
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Help Center</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find quick answers to common questions about shopping, orders, returns, and more. Can't find what you're
              looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Filter */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setSelectedCategory(id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        selectedCategory === id
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{label}</span>
                      {id !== "all" && (
                        <Badge variant="secondary" className="ml-auto">
                          {faqs.filter((faq) => faq.category === id).length}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {filteredFAQs.length} {filteredFAQs.length === 1 ? "Question" : "Questions"} Found
                </h3>
                {searchQuery && (
                  <Button variant="outline" size="sm" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                )}
              </div>

              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Questions Found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any questions matching your search. Try different keywords or browse by category.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("all")
                      }}
                    >
                      Show All Questions
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our customer support team is here to help you 24/7.
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
              <a href="mailto:support@eshop.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
