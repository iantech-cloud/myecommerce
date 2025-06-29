import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  category?: string
  tags?: string[]
  price?: number
  currency?: string
  availability?: string
  brand?: string
  productId?: string
}

export function SEO({
  title = "E-Shop - Premium Online Shopping Experience",
  description = "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods and more with fast shipping, secure payments, and exceptional customer service.",
  keywords = "online shopping, e-commerce, electronics, fashion, home goods, best prices, fast shipping, secure payment",
  image = "/og-image.jpg",
  url = "https://eshop.com",
  type = "website",
  author = "E-Shop Team",
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  price,
  currency = "USD",
  availability = "in stock",
  brand = "E-Shop",
  productId,
}: SEOProps) {
  const fullTitle = title.includes("E-Shop") ? title : `${title} | E-Shop`
  const fullUrl = url.startsWith("http") ? url : `https://eshop.com${url}`
  const fullImage = image.startsWith("http") ? image : `https://eshop.com${image}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "product" ? "Product" : "WebSite",
    name: fullTitle,
    description,
    url: fullUrl,
    image: fullImage,
    ...(type === "product" && {
      brand: {
        "@type": "Brand",
        name: brand,
      },
      offers: {
        "@type": "Offer",
        price: price,
        priceCurrency: currency,
        availability: `https://schema.org/${availability === "in stock" ? "InStock" : "OutOfStock"}`,
        url: fullUrl,
      },
      ...(productId && { productID: productId }),
      ...(category && { category }),
    }),
    ...(type === "website" && {
      "@type": "WebSite",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://eshop.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="E-Shop" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@eshop" />
      <meta name="twitter:creator" content="@eshop" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {category && <meta property="article:section" content={category} />}
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}
