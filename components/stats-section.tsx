"use client"

import { useEffect, useState } from "react"
import { Users, ShoppingBag, Star, Truck } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 50000,
    label: "Happy Customers",
    suffix: "+",
  },
  {
    icon: ShoppingBag,
    value: 10000,
    label: "Products Sold",
    suffix: "+",
  },
  {
    icon: Star,
    value: 4.9,
    label: "Average Rating",
    suffix: "/5",
  },
  {
    icon: Truck,
    value: 99,
    label: "On-Time Delivery",
    suffix: "%",
  },
]

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, suffix }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="text-gray-300 text-sm lg:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
