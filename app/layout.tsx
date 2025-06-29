import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "E-Shop - Premium Online Shopping Experience",
    template: "%s | E-Shop",
  },
  description:
    "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods and more with fast shipping, secure payments, and exceptional customer service.",
  keywords: ["online shopping", "e-commerce", "electronics", "fashion", "home goods", "best prices", "fast shipping"],
  authors: [{ name: "E-Shop Team" }],
  creator: "E-Shop",
  publisher: "E-Shop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eshop.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eshop.com",
    title: "E-Shop - Premium Online Shopping Experience",
    description:
      "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods and more with fast shipping, secure payments, and exceptional customer service.",
    siteName: "E-Shop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-Shop - Premium Online Shopping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Shop - Premium Online Shopping Experience",
    description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods and more.",
    images: ["/og-image.jpg"],
    creator: "@eshop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "E-Shop",
              url: "https://eshop.com",
              logo: "https://eshop.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://facebook.com/eshop", "https://twitter.com/eshop", "https://instagram.com/eshop"],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
