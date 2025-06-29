export interface User {
  id: string
  email: string
  full_name: string
  role: "customer" | "admin"
  created_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  category_id?: string
  stock_quantity: number
  featured: boolean
  rating: number
  review_count: number
  created_at: string
  updated_at: string
  variants?: ProductVariant[]
  reviews?: ProductReview[]
}

export interface CartItem {
  id: string
  user_id: string
  product_id: string
  quantity: number
  product?: Product
}

export interface Order {
  id: string
  user_id: string
  total_amount: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shipping_address: string
  created_at: string
  order_items: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  product?: Product
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image_url?: string
  parent_id?: string
  created_at: string
}

export interface ProductReview {
  id: string
  product_id: string
  user_id: string
  rating: number
  comment?: string
  created_at: string
  user_profile?: {
    full_name: string
  }
}

export interface WishlistItem {
  id: string
  user_id: string
  product_id: string
  created_at: string
  product?: Product
}

export interface ProductVariant {
  id: string
  product_id: string
  name: string
  value: string
  price_modifier: number
  stock_quantity: number
}

export interface Coupon {
  id: string
  code: string
  discount_type: "percentage" | "fixed"
  discount_value: number
  min_order_amount: number
  max_uses?: number
  current_uses: number
  expires_at?: string
  is_active: boolean
}
