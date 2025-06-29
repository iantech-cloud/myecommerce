import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Shield,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive deals, new product launches, and insider tips delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">Subscribe</Button>
            </div>
            <p className="text-xs text-blue-100 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  E-Shop
                </h3>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Your premier destination for quality products at unbeatable prices. We're committed to delivering
                  exceptional shopping experiences with fast shipping and outstanding customer service.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>123 Commerce Street, Shopping District, NY 10001</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>support@eshop.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Youtube, href: "#", label: "YouTube" },
                  ].map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "All Products", href: "/products" },
                  { label: "Categories", href: "/categories" },
                  { label: "Best Sellers", href: "/products?sort=popular" },
                  { label: "New Arrivals", href: "/products?sort=newest" },
                  { label: "Sale Items", href: "/products?sale=true" },
                  { label: "Gift Cards", href: "/gift-cards" },
                  { label: "Wishlist", href: "/wishlist" },
                  { label: "Compare", href: "/compare" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Customer Service</h4>
              <ul className="space-y-3">
                {[
                  { label: "Contact Us", href: "/contact" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Shipping Info", href: "/shipping" },
                  { label: "Returns & Exchanges", href: "/returns" },
                  { label: "Size Guide", href: "/size-guide" },
                  { label: "Track Your Order", href: "/track-order" },
                  { label: "Customer Reviews", href: "/reviews" },
                  { label: "Help Center", href: "/help" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Careers", href: "/careers" },
                  { label: "Press", href: "/press" },
                  { label: "Blog", href: "/blog" },
                  { label: "Affiliate Program", href: "/affiliate" },
                  { label: "Wholesale", href: "/wholesale" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Trust Badges */}
              <div>
                <h5 className="font-semibold mb-4">We Accept</h5>
                <div className="grid grid-cols-2 gap-2">
                  {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((payment) => (
                    <div key={payment} className="bg-gray-800 rounded p-2 text-center text-xs">
                      {payment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Security Section */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "On orders over $50",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                description: "30-day return policy",
              },
              {
                icon: Shield,
                title: "Secure Payment",
                description: "SSL encrypted checkout",
              },
              {
                icon: Star,
                title: "Quality Guarantee",
                description: "Premium products only",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-semibold mb-1">{title}</h5>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} E-Shop. All rights reserved. | Designed with ❤️ for amazing shopping experiences.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
