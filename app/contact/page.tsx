'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl">We'd love to hear from you. Get in touch with our wellness team</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Direct Contact Card */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-3 text-foreground">WhatsApp Chat</h3>
              <p className="text-foreground/70 mb-6">Fastest way to reach us. Chat with our wellness experts anytime.</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </a>
              </Button>
            </Card>

            {/* Phone Card */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Phone</h3>
              <p className="text-foreground/70 mb-6">Call us during business hours for immediate assistance.</p>
              <a href="tel:+918377997202" className="text-2xl font-serif font-bold text-primary block mb-4">
                +91 98765 43210
              </a>
              <p className="text-sm text-foreground/60">Mon - Fri, 9 AM - 6 PM IST</p>
            </Card>

            {/* Email Card */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Email</h3>
              <p className="text-foreground/70 mb-6">Send us an email and we'll respond within 24 hours.</p>
              <a href="mailto:support@pureayurveda.com" className="text-lg font-serif font-bold text-primary block break-all">
                support@pureayurveda.com
              </a>
            </Card>
          </div>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours & Location */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 text-foreground">Hours & Location</h2>
              
              <Card className="p-6 border border-border mb-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Business Hours</h3>
                    <p className="text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-foreground/70">Saturday: 10:00 AM - 4:00 PM IST</p>
                    <p className="text-foreground/70">Sunday: Closed</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Address</h3>
                    <p className="text-foreground/70">
                      Pure Ayurveda Wellness Center<br/>
                      123 Herbal Lane<br/>
                      Wellness District<br/>
                      New Delhi 110001<br/>
                      India
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* FAQ & Support */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">How do I order?</h3>
                  <p className="text-foreground/70">You can order through WhatsApp, email, or by calling us. Our team will guide you through the process and process your order quickly.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">What's your delivery time?</h3>
                  <p className="text-foreground/70">We deliver within 3-7 business days across India. COD (Cash on Delivery) is available for most locations.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Can I return products?</h3>
                  <p className="text-foreground/70">Yes, we offer 30 days return policy. Check our Returns & Refunds policy for complete details.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Are products organic?</h3>
                  <p className="text-foreground/70">Our products are 100% herbal and sourced from trusted suppliers. They're GMP certified and free from synthetic additives.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 border border-border text-center">
            <h2 className="text-2xl font-serif font-bold mb-3 text-foreground">
              Stay Updated with Wellness Tips
            </h2>
            <p className="text-foreground/70 mb-8">
              Subscribe to our WhatsApp channel for wellness tips, product updates, and special offers
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Subscribe on WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-foreground/70">5/5</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "Pure Ayurveda products are amazing! I noticed a significant improvement in my health within weeks. Highly recommended!"
              </p>
              <p className="font-semibold text-foreground">- Priya Sharma</p>
            </Card>

            <Card className="p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-foreground/70">5/5</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "The customer service is exceptional. They provided personalized recommendations and the products work as promised."
              </p>
              <p className="font-semibold text-foreground">- Rajesh Kumar</p>
            </Card>

            <Card className="p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-foreground/70">5/5</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "Finally found authentic Ayurvedic products at reasonable prices. The quality is consistent and delivery is fast."
              </p>
              <p className="font-semibold text-foreground">- Anjali Singh</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Have More Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our wellness experts are ready to help guide you on your Ayurvedic wellness journey
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Our Experts
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
