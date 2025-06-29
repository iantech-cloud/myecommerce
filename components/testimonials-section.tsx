"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Absolutely love shopping here! The quality is outstanding and the customer service is top-notch. My orders always arrive quickly and perfectly packaged.",
    product: "Wireless Headphones",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Professional",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Best online shopping experience I've ever had. The product descriptions are accurate, prices are competitive, and the checkout process is seamless.",
    product: "Smart Watch",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Home Decorator",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "I've been a customer for over a year now and they never disappoint. Great selection, fast shipping, and excellent return policy. Highly recommended!",
    product: "Coffee Maker",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Fitness Enthusiast",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The quality of products is exceptional and the prices are unbeatable. Customer support is always helpful and responsive. Will definitely shop here again!",
    product: "Running Shoes",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Customer Reviews</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-8 lg:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            Purchased: {testimonial.product}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
