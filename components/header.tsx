'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ShoppingCart,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { useCart } from '@/app/cart-context';
import { useState } from 'react';

export default function Header() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-serif font-bold text-primary">
            BAMUSO Ayurveda
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/products" className="hover:text-primary transition">Products</Link>
            <Link href="/about" className="hover:text-primary transition">About</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 hover:text-primary transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* WhatsApp (Desktop) */}
            <div className="hidden md:block">
              <Button size="sm" asChild>
                <a
                  href="https://wa.me/918377997202"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col gap-4 px-4 py-4">

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            {/* WhatsApp Mobile */}
            <Button size="sm" asChild className="w-full">
              <a
                href="https://wa.me/918377997202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>

          </div>
        </div>
      )}
    </nav>
  );
}
