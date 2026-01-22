'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Award, Users, Leaf, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">About Pure Ayurveda</h1>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl">Bringing the wisdom of ancient Ayurveda to modern wellness</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Pure Ayurveda was founded with a simple mission: to make authentic, high-quality Ayurvedic products accessible to everyone seeking natural wellness solutions.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Our journey began with a deep respect for ancient Ayurvedic knowledge and a commitment to quality. Each product is crafted with the finest herbal ingredients, sourced from trusted partners who share our values of sustainability and purity.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Today, we proudly serve thousands of customers who have embraced Ayurveda as part of their wellness journey, trusting us with their health and wellbeing.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-96 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-6xl">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Understanding Ayurveda
          </h2>
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Ayurveda, meaning "the science of life" in Sanskrit, is an ancient Indian system of medicine dating back over 5,000 years. It emphasizes balance and harmony between the mind, body, and spirit through natural remedies and lifestyle practices.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Ayurveda recognizes three fundamental energies or "Doshas" - Vata, Pitta, and Kapha - that govern all physiological processes. Understanding your unique Dosha constitution helps in choosing the right herbs and practices for optimal wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Holistic Approach</h3>
              <p className="text-foreground/70">
                Ayurveda treats the whole person, not just symptoms, addressing the root cause of imbalances for lasting wellness.
              </p>
            </Card>
            <Card className="p-8 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Natural Remedies</h3>
              <p className="text-foreground/70">
                All treatments are based on natural herbs and ingredients, working in harmony with your body's natural processes.
              </p>
            </Card>
            <Card className="p-8 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Preventive Care</h3>
              <p className="text-foreground/70">
                Ayurveda emphasizes maintaining good health and preventing diseases through proper diet, lifestyle, and daily practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 border border-border text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">100% Natural</h3>
              <p className="text-foreground/70">Pure botanical ingredients without chemicals, additives, or preservatives</p>
            </Card>
            <Card className="p-8 border border-border text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Quality Assured</h3>
              <p className="text-foreground/70">GMP certified and tested for safety and efficacy in every batch</p>
            </Card>
            <Card className="p-8 border border-border text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Customer First</h3>
              <p className="text-foreground/70">Dedicated support and genuine care for your wellness journey</p>
            </Card>
            <Card className="p-8 border border-border text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Sustainable</h3>
              <p className="text-foreground/70">Ethical sourcing and commitment to environmental responsibility</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Trust & Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-4 text-primary">GMP</h3>
              <p className="text-foreground/70 mb-2">Good Manufacturing Practices Certified</p>
              <p className="text-sm text-foreground/60">Ensuring quality and safety standards</p>
            </Card>
            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-4 text-primary">Herbal</h3>
              <p className="text-foreground/70 mb-2">100% Herbal Formulations</p>
              <p className="text-sm text-foreground/60">No synthetic additives or chemicals</p>
            </Card>
            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-4 text-primary">FSSAI</h3>
              <p className="text-foreground/70 mb-2">Food Safety Compliance</p>
              <p className="text-sm text-foreground/60">Meeting regulatory standards</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Why Choose Pure Ayurveda?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">Authentic Formulations</h3>
                  <p className="text-foreground/70">Based on classical Ayurvedic texts and traditional knowledge</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">Expert Support</h3>
                  <p className="text-foreground/70">Chat with our wellness experts for personalized guidance</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">Fast Delivery</h3>
                  <p className="text-foreground/70">Quick shipping with COD available across India</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">Affordable Pricing</h3>
                  <p className="text-foreground/70">Premium quality products at reasonable prices</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">Satisfaction Guarantee</h3>
                  <p className="text-foreground/70">Happy with our products or your money back</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">Community Focus</h3>
                  <p className="text-foreground/70">Join thousands on their wellness journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Discover products that align with your unique wellness needs
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent" asChild>
              <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Us
              </a>
            </Button>
          </div>
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
