'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function ReturnsPage() {
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
            <h1 className="text-4xl font-serif font-bold">Returns & Refunds Policy</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Return Window</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>30-day return policy:</strong> From the date of delivery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Unopened products:</strong> Full refund eligible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Opened products:</strong> Case-by-case evaluation for quality issues</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Eligibility for Return</h2>
              <p className="text-foreground/80 mb-3">Your product is eligible for return if:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Product is defective or damaged</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Wrong product was delivered</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Product is unopened and in original packaging</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Product hasn't exceeded the return window</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Non-Returnable Items</h2>
              <p className="text-foreground/80 mb-3">The following items cannot be returned:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Products opened and used</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Products with expired shelf life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Products damaged due to customer mishandling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Orders beyond the 30-day return window</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">How to Return</h2>
              <ol className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>Contact us on WhatsApp with your order details and return reason</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>We'll provide you with a return authorization and shipping label</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Ship the product back using the provided label</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span>We'll inspect and process your refund within 5-7 business days</span>
                </li>
              </ol>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Refund Process</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Refund timeline:</strong> 5-7 business days after inspection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Refund method:</strong> Original payment method</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Shipping costs:</strong> Non-refundable unless product is defective</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Return shipping:</strong> Customer bears cost unless item is defective</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Damaged or Defective Products</h2>
              <p className="text-foreground/80 mb-3">
                If you receive a damaged or defective product, contact us immediately:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Report within 2 days of delivery with photos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Free return and replacement or full refund</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>We cover return shipping costs</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Need Help?</h2>
              <p className="text-foreground/80 mb-4">
                For any return or refund queries, reach out to our customer support team on WhatsApp.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
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
