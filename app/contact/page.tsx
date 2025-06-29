"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setMessage({
      type: "success",
      text: "Thank you for your message! We'll get back to you within 24 hours.",
    })
    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["123 Commerce Street", "Shopping District, NY 10001", "United States"],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri: 9AM-8PM EST", "Sat-Sun: 10AM-6PM EST"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@eshop.com", "Response within 24 hours", "Available 24/7"],
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: ["Instant support available", "Mon-Fri: 9AM-8PM EST", "Average wait: 2 minutes"],
      action: "Start Chat",
    },
  ]

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "orders", label: "Order Support" },
    { value: "returns", label: "Returns & Exchanges" },
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "partnerships", label: "Business Partnerships" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Get in Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              We're Here to <span className="gradient-text">Help</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question, need support, or want to share feedback? Our friendly team is ready to assist you. Choose
              the best way to reach us below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map(({ icon: Icon, title, details, action }) => (
              <Card key={title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                  <div className="space-y-2 mb-6">
                    {details.map((detail, index) => (
                      <p key={index} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    {action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">Send us a Message</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form and we'll get back to you as soon as possible. For urgent matters, please call us
                directly or use our live chat feature.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                    <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Headphones className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                    <p className="text-gray-600 text-sm">Our team has years of experience helping customers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Extended Hours</h4>
                    <p className="text-gray-600 text-sm">Available 7 days a week to assist you</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {message && (
                  <Alert
                    className={`mb-6 ${message.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                  >
                    {message.type === "success" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={message.type === "success" ? "text-green-800" : "text-red-800"}>
                      {message.text}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" required placeholder="John" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" disabled={isSubmitting} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" disabled={isSubmitting} />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="How can we help you?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please provide as much detail as possible..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">Quick Answers</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for quick answers? Check out our comprehensive FAQ section for instant help.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <a href="/faq">Browse FAQ</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
