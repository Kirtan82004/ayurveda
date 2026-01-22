'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
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
            <Button variant="default" size="sm" asChild>
              <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Shipping & Delivery Policy</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Delivery Timeline</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Standard Delivery:</strong> 3-7 business days from order confirmation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Express Delivery:</strong> 1-2 business days (available in selected cities)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Delivery tracking:</strong> You'll receive a tracking number via WhatsApp/SMS</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Shipping Coverage</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>We deliver across all of India</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Free shipping on orders above ₹499</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Shipping charges: ₹50 for orders below ₹499</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Payment Methods</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Cash on Delivery (COD):</strong> Available across India</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Online Payment:</strong> UPI, Card, Net Banking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Bank Transfer:</strong> Direct transfer available</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Courier Partners</h2>
              <p className="text-foreground/80 mb-3">We work with reliable courier services:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>DHL Express</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>FedEx</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Bluedart</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Important Notes</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Delivery times exclude weekends and public holidays</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>We are not responsible for delays caused by courier partners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Please ensure address details are correct at checkout</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>All products are packed securely to prevent damage</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Questions?</h2>
              <p className="text-foreground/80 mb-4">
                For shipping inquiries, contact us on WhatsApp or call us during business hours.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 mt-12">
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
              <p className="text-sm opacity-70 mb-2">+91 98765 43210</p>
              <p className="text-sm opacity-70">WhatsApp Support Available</p>
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
