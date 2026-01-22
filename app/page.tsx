'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Package, Leaf, Award } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/cart-context';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Ashwagandha Powder',
    category: 'Immunity',
    price: '₹499',
    description: 'Premium adaptogenic blend',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23D4B5A0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2224%22 fill=%22%239B7C66%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EAshwagandha%3C/text%3E%3C/svg%3E',
  },
  {
    id: 2,
    name: 'Turmeric Golden Milk',
    category: 'Immunity',
    price: '₹399',
    description: 'Anti-inflammatory blend',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8C4A0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2224%22 fill=%22%23B8860B%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ETurmeric%3C/text%3E%3C/svg%3E',
  },
  {
    id: 3,
    name: 'Neem Face Mask',
    category: 'Skin',
    price: '₹599',
    description: 'Natural skin purifier',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23C8E6C9%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2224%22 fill=%22%23558B2F%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ENeem Mask%3C/text%3E%3C/svg%3E',
  },
  {
    id: 4,
    name: 'Brahmi Hair Oil',
    category: 'Hair',
    price: '₹349',
    description: 'Strengthening and cooling',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23A1887F%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2224%22 fill=%22%23FFFFFF%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EBrahmi Oil%3C/text%3E%3C/svg%3E',
  },
];

const BENEFITS = [
  {
    icon: Leaf,
    title: '100% Herbal',
    description: 'Pure botanical ingredients without chemicals',
  },
  {
    icon: Award,
    title: 'GMP Certified',
    description: 'Quality assured and safety tested',
  },
  {
    icon: Package,
    title: 'Fast Delivery',
    description: 'COD available across India',
  },
];

export default function Home() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground mb-6">
                Ancient Wisdom for Modern Wellness
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Discover the healing power of Ayurveda. Our products are crafted with the finest herbal ingredients, GMP certified and trusted by thousands.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-96 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-6xl">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Why Choose Pure Ayurveda?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-8 text-center border border-border hover:border-primary/50 transition">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-foreground/70 mb-12">Curated blends for your wellness journey</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {FEATURED_PRODUCTS.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-primary font-semibold mb-1">{product.category}</p>
                  <h3 className="font-serif font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link href={`/products/${product.id}`}>View</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={`https://wa.me/918377997202?text=I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer">
                        Order
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Ready to Transform Your Wellness?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Chat with our wellness experts on WhatsApp for personalized recommendations
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold mb-4">Pure Ayurveda</h3>
              <p className="text-sm opacity-70">Authentic Ayurvedic products for wellness</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="opacity-70 hover:opacity-100">Products</Link></li>
                <li><Link href="/about" className="opacity-70 hover:opacity-100">About Us</Link></li>
                <li><Link href="/contact" className="opacity-70 hover:opacity-100">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shipping" className="opacity-70 hover:opacity-100">Shipping & Delivery</Link></li>
                <li><Link href="/returns" className="opacity-70 hover:opacity-100">Returns & Refunds</Link></li>
                <li><Link href="/privacy" className="opacity-70 hover:opacity-100">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm opacity-70 mb-2">📞 +91 98765 43210</p>
              <p className="text-sm opacity-70">💬 WhatsApp Support Available</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2024 Pure Ayurveda. All rights reserved. Consult a qualified Ayurvedic practitioner before use.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
