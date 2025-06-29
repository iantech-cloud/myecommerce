import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart, Target, Zap, Shield, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - E-Shop",
  description: "Learn about E-Shop's mission, values, and the team behind your favorite online shopping destination.",
}

export default function AboutPage() {
  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Products Sold", value: "1M+", icon: Award },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Years of Excellence", value: "8+", icon: Heart },
  ]

  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make starts with our customers. Your satisfaction is our top priority.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly evolve and improve our platform to provide the best shopping experience.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and transactions are protected with bank-level security measures.",
    },
    {
      icon: Truck,
      title: "Reliability",
      description: "Fast shipping, quality products, and dependable service you can count on.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with 15+ years in e-commerce, passionate about creating exceptional shopping experiences.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Tech innovator focused on building scalable, secure platforms that delight customers.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Customer advocate ensuring every interaction exceeds expectations and builds lasting relationships.",
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations expert streamlining processes to deliver products faster and more efficiently.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Story</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Redefining Online <span className="gradient-text">Shopping</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Since 2016, E-Shop has been on a mission to make online shopping more personal, convenient, and enjoyable.
              We believe that great products and exceptional service should be accessible to everyone, everywhere.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">Our Mission</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Connecting People with Products They <span className="gradient-text">Love</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started E-Shop with a simple belief: shopping should be effortless, enjoyable, and inspiring. Our
                platform brings together carefully curated products from trusted brands and emerging creators, all
                backed by our commitment to quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve customers across 25+ countries, offering everything from everyday essentials
                to unique finds that spark joy and enhance lives.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="E-Shop team working together"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">Our Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Drives <span className="gradient-text">Everything We Do</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision, from product selection to customer service, ensuring we always
              deliver on our promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Meet the Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The People Behind <span className="gradient-text">E-Shop</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of passionate professionals works tirelessly to bring you the best online shopping
              experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust E-Shop for their online shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
