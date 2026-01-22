'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/cart-context';

export function Header() {
  const { cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-serif font-bold text-primary">
            Pure Ayurveda
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">Home</Link>
            <Link href="/products" className="text-foreground hover:text-primary transition">Products</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="outline" size="sm" className="bg-transparent relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
