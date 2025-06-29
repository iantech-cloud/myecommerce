import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - E-Shop",
  description:
    "Read E-Shop's terms of service, including user responsibilities, prohibited activities, and legal agreements.",
}

export default function TermsOfServicePage() {
  const lastUpdated = "December 15, 2024"

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using E-Shop, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our website or services",
        "These terms apply to all visitors, users, and customers of our website",
        "We reserve the right to update these terms at any time without prior notice",
        "Continued use of our services after changes constitutes acceptance of new terms",
      ],
    },
    {
      icon: FileText,
      title: "Use of Our Website",
      content: [
        "You must be at least 18 years old to make purchases on our website",
        "You are responsible for maintaining the confidentiality of your account information",
        "You agree to provide accurate, current, and complete information during registration",
        "You may not use our website for any unlawful or prohibited activities",
        "We reserve the right to refuse service or terminate accounts at our discretion",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Attempting to gain unauthorized access to our systems or other users' accounts",
        "Using our website to transmit viruses, malware, or other harmful code",
        "Engaging in any activity that disrupts or interferes with our services",
        "Violating any applicable laws or regulations while using our website",
        "Impersonating another person or entity, or providing false information",
        "Using automated systems or bots to access our website without permission",
      ],
    },
    {
      icon: Scale,
      title: "Orders and Payments",
      content: [
        "All orders are subject to acceptance and availability of products",
        "We reserve the right to refuse or cancel orders at our discretion",
        "Prices are subject to change without notice until payment is processed",
        "You agree to pay all charges incurred by your account, including taxes and shipping",
        "Payment must be received before products are shipped",
        "We are not responsible for delays caused by payment processing issues",
      ],
    },
    {
      icon: Shield,
      title: "Product Information and Availability",
      content: [
        "We strive to provide accurate product descriptions and pricing information",
        "Product colors may vary slightly due to monitor settings and photography",
        "We do not guarantee that all products will be available at all times",
        "We reserve the right to discontinue products without notice",
        "Product specifications and features are subject to change by manufacturers",
        "We are not responsible for typographical errors in product listings",
      ],
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by law",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for the specific product or service",
        "We do not warrant that our website will be uninterrupted or error-free",
        "You use our website at your own risk and discretion",
        "We are not responsible for damages resulting from use of our website or products",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Legal</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Please read these terms carefully before using our website and services. By using E-Shop, you agree to be
              bound by these terms and conditions.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block shadow-md">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to E-Shop. These Terms of Service ("Terms") govern your use of our website, products, and
                services. By accessing or using E-Shop, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms constitute a legally binding agreement between you and E-Shop. If you do not agree with any
                part of these Terms, you must not use our website or services.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map(({ icon: Icon, title, content }) => (
              <Card key={title} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="mt-12 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of
                  E-Shop or its licensors and is protected by copyright, trademark, and other intellectual property
                  laws.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">You May Not:</h4>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Reproduce, distribute, or display our content without permission</li>
                    <li>• Use our trademarks or logos without written consent</li>
                    <li>• Create derivative works based on our content</li>
                    <li>• Remove or alter copyright notices or proprietary markings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Return and Refund Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our return and refund policy is governed by separate terms outlined on our Returns page. By making a
                  purchase, you agree to our return policy terms and conditions.
                </p>
                <a href="/returns" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  View Return Policy →
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  personal information when you use our services.
                </p>
                <a href="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  View Privacy Policy →
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of the State of New York, without regard to conflict of law
                  principles. Any disputes arising from these Terms or your use of our services will be resolved through
                  binding arbitration.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Important Notice:</h4>
                  <p className="text-red-800 text-sm">
                    By agreeing to these Terms, you waive your right to participate in class action lawsuits or
                    class-wide arbitration against E-Shop.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Severability and Entire Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue
                  in full force and effect. These Terms, together with our Privacy Policy and any other legal notices
                  published on our website, constitute the entire agreement between you and E-Shop.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Questions About These Terms?</h2>
          <p className="text-xl text-blue-100 mb-8">
            If you have any questions about these Terms of Service, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@eshop.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Email Legal Team
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
