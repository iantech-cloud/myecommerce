"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, ShoppingCart, Star, Heart } from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { WishlistItem, Product } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

interface WishlistItemWithProduct extends WishlistItem {
  product: Product
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItemWithProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    const getWishlistItems = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (!user) {
        setIsLoading(false)
        return
      }

      const { data: items } = await supabase
        .from("wishlist_items")
        .select(`
          *,
          product:products(*)
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      setWishlistItems(items || [])
      setIsLoading(false)
    }

    getWishlistItems()
  }, [])

  const removeFromWishlist = async (itemId: string) => {
    const { error } = await supabase.from("wishlist_items").delete().eq("id", itemId)

    if (error) {
      toast({
        title: "Error",
        description: "Failed to remove item from wishlist.",
        variant: "destructive",
      })
      return
    }

    setWishlistItems((items) => items.filter((item) => item.id !== itemId))
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    })
  }

  const addToCart = async (productId: string) => {
    if (!user) return

    try {
      // Check if item already exists in cart
      const { data: existingItem } = await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", user.id)
        .eq("product_id", productId)
        .single()

      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from("cart_items")
          .update({ quantity: existingItem.quantity + 1 })
          .eq("id", existingItem.id)

        if (error) throw error
      } else {
        // Add new item
        const { error } = await supabase.from("cart_items").insert({
          user_id: user.id,
          product_id: productId,
          quantity: 1,
        })

        if (error) throw error
      }

      toast({
        title: "Added to cart",
        description: "Item has been added to your cart.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Please sign in to view your wishlist</h1>
        <Button asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    )
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-gray-600 mb-6">Save items you love for later!</p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
        <p className="text-gray-600">
          {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <Card
            key={item.id}
            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <Image
                  src={item.product.image_url || "/placeholder.svg?height=300&width=300"}
                  alt={item.product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full p-2 bg-white/90 hover:bg-white"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
                {item.product.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">Featured</Badge>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(item.product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-1">({item.product.review_count})</span>
                </div>
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.product.name}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-blue-600">${item.product.price}</span>
                  <span className="text-xs text-gray-500">
                    {item.product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => addToCart(item.product.id)}
                    disabled={item.product.stock_quantity === 0}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/products/${item.product.id}`}>View</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
