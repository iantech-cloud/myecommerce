-- Add product reviews table
CREATE TABLE IF NOT EXISTS product_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(product_id, user_id)
);

-- Add wishlist table
CREATE TABLE IF NOT EXISTS wishlist_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Add product variants table
CREATE TABLE IF NOT EXISTS product_variants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  value VARCHAR(100) NOT NULL,
  price_modifier DECIMAL(10,2) DEFAULT 0,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add coupons table
CREATE TABLE IF NOT EXISTS coupons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  discount_type VARCHAR(20) CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10,2) NOT NULL,
  min_order_amount DECIMAL(10,2) DEFAULT 0,
  max_uses INTEGER,
  current_uses INTEGER DEFAULT 0,
  expires_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add product categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Update products table to reference categories
ALTER TABLE products ADD COLUMN IF NOT EXISTS category_id UUID REFERENCES categories(id);
ALTER TABLE products ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;
ALTER TABLE products ADD COLUMN IF NOT EXISTS rating DECIMAL(3,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS review_count INTEGER DEFAULT 0;

-- Insert sample categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Electronics', 'electronics', 'Latest gadgets and electronic devices', '/placeholder.svg?height=200&width=200'),
('Fashion', 'fashion', 'Trendy clothing and accessories', '/placeholder.svg?height=200&width=200'),
('Home & Garden', 'home-garden', 'Everything for your home and garden', '/placeholder.svg?height=200&width=200'),
('Sports & Fitness', 'sports-fitness', 'Sports equipment and fitness gear', '/placeholder.svg?height=200&width=200'),
('Books & Media', 'books-media', 'Books, movies, and digital media', '/placeholder.svg?height=200&width=200')
ON CONFLICT (slug) DO NOTHING;

-- Update existing products with category references
UPDATE products SET 
  category_id = (SELECT id FROM categories WHERE slug = 'electronics'),
  featured = true,
  rating = 4.5,
  review_count = 23
WHERE category = 'Electronics';

UPDATE products SET 
  category_id = (SELECT id FROM categories WHERE slug = 'sports-fitness'),
  rating = 4.2,
  review_count = 15
WHERE category = 'Sports';

UPDATE products SET 
  category_id = (SELECT id FROM categories WHERE slug = 'home-garden'),
  rating = 4.7,
  review_count = 31
WHERE category = 'Home';

-- Add more sample products
INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, featured, rating, review_count) VALUES
('Premium Wireless Earbuds', 'High-quality wireless earbuds with active noise cancellation and premium sound quality', 149.99, '/placeholder.svg?height=300&width=300', (SELECT id FROM categories WHERE slug = 'electronics'), 75, true, 4.6, 89),
('Smart Fitness Tracker', 'Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking', 199.99, '/placeholder.svg?height=300&width=300', (SELECT id FROM categories WHERE slug = 'sports-fitness'), 45, true, 4.4, 67),
('Ergonomic Office Chair', 'Premium ergonomic office chair with lumbar support and adjustable height', 299.99, '/placeholder.svg?height=300&width=300', (SELECT id FROM categories WHERE slug = 'home-garden'), 20, false, 4.8, 124),
('Wireless Gaming Mouse', 'High-precision wireless gaming mouse with RGB lighting and customizable buttons', 79.99, '/placeholder.svg?height=300&width=300', (SELECT id FROM categories WHERE slug = 'electronics'), 60, false, 4.3, 45),
('Yoga Mat Pro', 'Professional-grade yoga mat with superior grip and cushioning', 49.99, '/placeholder.svg?height=300&width=300', (SELECT id FROM categories WHERE slug = 'sports-fitness'), 100, false, 4.5, 78);

-- Add sample reviews
INSERT INTO product_reviews (product_id, user_id, rating, comment) VALUES
((SELECT id FROM products WHERE name = 'Wireless Headphones' LIMIT 1), (SELECT id FROM auth.users LIMIT 1), 5, 'Amazing sound quality and comfortable to wear for hours!'),
((SELECT id FROM products WHERE name = 'Smart Watch' LIMIT 1), (SELECT id FROM auth.users LIMIT 1), 4, 'Great features but battery life could be better.');

-- RLS Policies for new tables
CREATE POLICY "Users can view all reviews" ON product_reviews FOR SELECT USING (true);
CREATE POLICY "Users can create their own reviews" ON product_reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own reviews" ON product_reviews FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own wishlist" ON wishlist_items FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Everyone can view categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Only admins can modify categories" ON categories FOR ALL USING (
  EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE user_profiles.id = auth.uid() 
    AND user_profiles.role = 'admin'
  )
);

-- Function to update product rating
CREATE OR REPLACE FUNCTION update_product_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE products SET 
    rating = (
      SELECT COALESCE(AVG(rating), 0) 
      FROM product_reviews 
      WHERE product_id = COALESCE(NEW.product_id, OLD.product_id)
    ),
    review_count = (
      SELECT COUNT(*) 
      FROM product_reviews 
      WHERE product_id = COALESCE(NEW.product_id, OLD.product_id)
    )
  WHERE id = COALESCE(NEW.product_id, OLD.product_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Trigger to update product rating when reviews change
CREATE OR REPLACE TRIGGER update_product_rating_trigger
  AFTER INSERT OR UPDATE OR DELETE ON product_reviews
  FOR EACH ROW EXECUTE FUNCTION update_product_rating();
