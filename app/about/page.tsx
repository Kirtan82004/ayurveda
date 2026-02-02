'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Award, Users, Leaf, Heart } from 'lucide-react';
const img = {
  src: '/images/about.png',
  alt: 'Our Story Image',
};

export default function AboutPage() {
  const whyChooseBamuso = [
    '100% Ayurvedic & Natural',
    'Lab-Tested Safety',
    'No Chemicals, Parabens, Sulfates',
    'GMP, AYUSH, ISO & FSSAI Certified',
    'Fast Delivery Across India',
    'Easy 15-Day Returns on Damaged/Wrong Product',
    'Trusted by Thousands of Customers',
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">About BAMUSO Ayurveda</h1>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl">Inspired by Nature, Powered by Trust</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                BAMUSO Ayurveda is not just a brand — it is a legacy.
                The blessings, experience, and trust of three generations form the foundation of BAMUSO.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Building on this legacy, BAMUSO Ayurveda was established with a clear purpose:
                to bring pure, safe, and effective Ayurvedic wellness solutions to every home.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Today, BAMUSO Ayurveda has earned the trust of thousands of customers
                who seek natural and scientifically validated health solutions.
              </p>


            </div>
            <div className="flex justify-center">
              <div className="w-full h-96 bg-accent rounded-lg flex items-center justify-center">
                <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-xl"
                  />
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
            Trust, Safety & Certifications
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-3 text-primary">GMP</h3>
              <p className="text-foreground/70">Good Manufacturing Practices</p>
              <p className="text-sm text-foreground/60 mt-2">
                Ensures strict quality & hygiene standards
              </p>
            </Card>

            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-3 text-primary">AYUSH</h3>
              <p className="text-foreground/70">AYUSH Approved</p>
              <p className="text-sm text-foreground/60 mt-2">
                Certified by Govt. of India for Ayurveda
              </p>
            </Card>

            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-3 text-primary">ISO</h3>
              <p className="text-foreground/70">ISO Certified Facility</p>
              <p className="text-sm text-foreground/60 mt-2">
                International quality management standards
              </p>
            </Card>

            <Card className="p-8 border border-border text-center">
              <h3 className="font-serif font-bold text-2xl mb-3 text-primary">FSSAI</h3>
              <p className="text-foreground/70">FSSAI Registered</p>
              <p className="text-sm text-foreground/60 mt-2">
                Food & safety compliance assured
              </p>
            </Card>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Why Choose BAMUSO Ayurveda?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseBamuso.map((point, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <p className="text-lg text-foreground/80">{point}</p>
              </div>
            ))}
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
            Discover authentic Ayurvedic solutions for your daily health needs with BAMUSO Ayurveda.
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
    </div>
  );
}
