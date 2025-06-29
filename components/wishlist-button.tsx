"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

interface WishlistButtonProps {
  productId: string
}

export function WishlistButton({ productId }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    const checkWishlistStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (!user) return

      const { data } = await supabase
        .from("wishlist_items")
        .select("id")
        .eq("user_id", user.id)
        .eq("product_id", productId)
        .single()

      setIsInWishlist(!!data)
    }

    checkWishlistStatus()
  }, [productId])

  const toggleWishlist = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to add items to your wishlist.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      if (isInWishlist) {
        // Remove from wishlist
        const { error } = await supabase
          .from("wishlist_items")
          .delete()
          .eq("user_id", user.id)
          .eq("product_id", productId)

        if (error) throw error

        setIsInWishlist(false)
        toast({
          title: "Removed from wishlist",
          description: "Item has been removed from your wishlist.",
        })
      } else {
        // Add to wishlist
        const { error } = await supabase.from("wishlist_items").insert({
          user_id: user.id,
          product_id: productId,
        })

        if (error) throw error

        setIsInWishlist(true)
        toast({
          title: "Added to wishlist",
          description: "Item has been added to your wishlist.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={toggleWishlist}
      disabled={isLoading}
      className={`${
        isInWishlist ? "border-red-500 text-red-500 hover:bg-red-50" : "border-gray-300 text-gray-700 hover:bg-gray-50"
      } transition-colors`}
    >
      <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
    </Button>
  )
}
