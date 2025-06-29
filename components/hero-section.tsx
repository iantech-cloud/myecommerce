"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Premium Electronics",
    subtitle: "Latest Tech at Unbeatable Prices",
    description: "Discover cutting-edge gadgets and electronics with up to 50% off",
    image: "/placeholder.svg?height=600&width=800",
    cta: "Shop Electronics",
    link: "/products?category=electronics",
    badge: "50% OFF",
    gradient: "from-blue-600 to-purple-700",
  },
  {
    id: 2,
    title: "Fashion Forward",
    subtitle: "Style That Speaks Volumes",
    description: "Trendy clothing and accessories for every occasion",
    image: "/placeholder.svg?height=600&width=800",
    cta: "Explore Fashion",
    link: "/products?category=fashion",
    badge: "New Collection",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Transform Your Space",
    description: "Beautiful furniture and decor to make your house a home",
    image: "/placeholder.svg?height=600&width=800",
    cta: "Shop Home",
    link: "/products?category=home-garden",
    badge: "Free Shipping",
    gradient: "from-green-500 to-teal-600",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`bg-gradient-to-r ${slide.gradient} h-full flex items-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">{slide.badge}</Badge>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">{slide.title}</h1>
                  <h2 className="text-2xl md:text-3xl font-light opacity-90">{slide.subtitle}</h2>
                  <p className="text-lg opacity-80 max-w-md">{slide.description}</p>
                  <div className="flex gap-4">
                    <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Link href={slide.link}>
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        {slide.cta}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                    >
                      <Link href="/products">View All Products</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      4.9/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
