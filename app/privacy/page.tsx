'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
          </div>

          <p className="text-foreground/70 mb-8">Last Updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-foreground/80">
                Pure Ayurveda ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Information We Collect</h2>
              <p className="text-foreground/80 mb-3">We may collect information about you in a variety of ways:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Personal Data:</strong> Name, email address, phone number, mailing address</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Order Information:</strong> Order history, payment details, delivery preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Health Information:</strong> Product preferences for health conditions (voluntarily provided)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Process and fulfill your orders</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Send order updates and shipping notifications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Provide customer support and respond to inquiries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Send wellness tips and product recommendations (with your consent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Improve our website and services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Prevent fraudulent activities and ensure security</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Data Security</h2>
              <p className="text-foreground/80 mb-3">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Encrypted communication for sensitive data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Secure payment gateways</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Information Sharing</h2>
              <p className="text-foreground/80 mb-3">We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Courier Partners:</strong> Delivery address for order fulfillment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Payment Processors:</strong> Payment information for transaction processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Legal Authorities:</strong> If required by law</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Your Rights</h2>
              <p className="text-foreground/80 mb-3">You have the right to:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Request deletion of your data (subject to legal obligations)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Cookies</h2>
              <p className="text-foreground/80">
                We may use cookies to enhance your experience on our website. You can manage cookie preferences through your browser settings.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Third-Party Links</h2>
              <p className="text-foreground/80">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of other websites. Please review their privacy policies before providing personal information.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Changes to This Policy</h2>
              <p className="text-foreground/80">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about this Privacy Policy or how we handle your personal data, please contact us:
              </p>
              <div className="space-y-2 text-foreground/80">
                <p><strong>Email:</strong> privacy@pureayurveda.com</p>
                <p><strong>WhatsApp:</strong> +91 98765 43210</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Us
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
