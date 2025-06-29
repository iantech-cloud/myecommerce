import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, Globe, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - E-Shop",
  description:
    "Learn how E-Shop collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 15, 2024"

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Payment information processed securely through our payment partners",
        "Shipping and billing addresses for order fulfillment",
        "Purchase history and preferences to improve your shopping experience",
        "Device and browser information for security and optimization",
        "Cookies and similar technologies for website functionality",
      ],
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders and transactions",
        "Communicate with you about your orders and account",
        "Provide customer support and respond to your inquiries",
        "Send promotional emails and marketing communications (with your consent)",
        "Improve our website, products, and services",
        "Prevent fraud and ensure the security of our platform",
        "Comply with legal obligations and enforce our terms of service",
      ],
    },
    {
      icon: Globe,
      title: "Information Sharing",
      content: [
        "We do not sell, rent, or trade your personal information to third parties",
        "We share information with trusted service providers who help us operate our business",
        "Shipping companies receive necessary information to deliver your orders",
        "Payment processors handle transaction data securely",
        "We may disclose information when required by law or to protect our rights",
        "In the event of a business transfer, customer information may be transferred",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We use industry-standard 256-bit SSL encryption for all data transmission",
        "Payment information is processed by PCI DSS compliant payment processors",
        "We do not store complete credit card information on our servers",
        "Regular security audits and monitoring to protect against threats",
        "Access to personal information is restricted to authorized personnel only",
        "We maintain physical, electronic, and procedural safeguards",
      ],
    },
    {
      icon: Shield,
      title: "Your Rights and Choices",
      content: [
        "Access and update your personal information through your account settings",
        "Request deletion of your account and associated data",
        "Opt out of marketing communications at any time",
        "Control cookie preferences through your browser settings",
        "Request a copy of the personal information we have about you",
        "Contact us to correct any inaccurate information",
      ],
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: [
        "If you have questions about this privacy policy, please contact us:",
        "Email: privacy@eshop.com",
        "Phone: +1 (555) 123-4567",
        "Mail: E-Shop Privacy Team, 123 Commerce Street, NY 10001",
        "We will respond to your privacy-related inquiries within 30 days",
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use our services.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block shadow-md">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Commitment to Your Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                At E-Shop, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information
                when you visit our website, make a purchase, or interact with our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website and services, you consent to the collection and use of your information as
                described in this policy. We encourage you to read this policy carefully and contact us if you have any
                questions.
              </p>
            </CardContent>
          </Card>

          {/* Policy Sections */}
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

          {/* Additional Information */}
          <div className="mt-12 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                  traffic, and personalize content. Cookies are small data files stored on your device that help us
                  remember your preferences and improve our services.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Types of Cookies We Use:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>
                      • <strong>Essential Cookies:</strong> Required for basic website functionality
                    </li>
                    <li>
                      • <strong>Performance Cookies:</strong> Help us understand how visitors use our site
                    </li>
                    <li>
                      • <strong>Functional Cookies:</strong> Remember your preferences and settings
                    </li>
                    <li>
                      • <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected personal information
                  from a child under 13, we will take steps to delete such information promptly.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that
                  such transfers comply with applicable data protection laws and that appropriate safeguards are in
                  place to protect your personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of any material changes by posting the updated policy on our website and
                  updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're here to help. Contact our privacy team if you have any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@eshop.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Email Privacy Team
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
