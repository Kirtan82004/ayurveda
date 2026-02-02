'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const BLOG_TIPS = [
  { title: 'Morning Rituals', description: 'Dinacharya routines for a balanced start.' },
  { title: 'Immunity Boosters', description: 'Powerful herbs & practices to strengthen immunity.' },
  { title: 'Natural Detox Tips', description: 'Ayurvedic ways to cleanse your body naturally.' },
  { title: 'Weight Loss Ayurveda', description: 'Holistic methods for healthy weight management.' },
  { title: 'Mind & Mental Wellness', description: 'Stress-free mind & better sleep practices.' },
  { title: 'Skin & Hair Ayurvedic Care', description: 'Natural remedies for glow & hair strength.' },
  { title: 'Food & Diet Recommendations', description: 'Seasonal Ayurvedic diet guidance.' },
];

const TESTIMONIALS = [
  { name: 'Rahul S.', review: 'Bamuso Ayurveda products boosted my energy and improved my health. Highly recommended!' },
  { name: 'Neha K.', review: 'Trusted brand with authentic Ayurvedic quality.' },
  { name: 'Amit K.', review: 'Best for natural remedies. Excellent service too!' },
  { name: 'Ramesh Kumar, Delhi', review: 'Bamuso Ayurveda products have completely changed my lifestyle. Natural, safe, and highly effective!' },
  { name: 'Sneha Sharma, Mumbai', review: 'The quality is unmatched. I feel more energetic and healthier after using their products.' },
  { name: 'Ankit Verma, Jaipur', review: 'Fast delivery, excellent customer support, and genuine Ayurvedic products. Highly recommended.' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Health Tips & Blog</h1>
          </div>

          <p className="text-foreground/70 mb-8">
            Ayurveda is not just a treatment, it’s a lifestyle. Discover tips, remedies, and wellness guidance to stay healthy, energetic, and balanced.
          </p>

          {/* Daily Health Tips */}
          <h2 className="text-3xl font-serif font-bold mb-6">Daily Ayurvedic Health Tips</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {BLOG_TIPS.map((tip, index) => (
              <Card key={index} className="p-6 border border-border hover:shadow-lg transition">
                <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{tip.title}</h3>
                <p className="text-foreground/80">{tip.description}</p>
              </Card>
            ))}
          </div>

          {/* Subscribe Section */}
          <section className="py-12 px-6 bg-primary rounded-lg text-accent-foreground mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-center">Join Our Wellness Community</h2>
            <p className="text-center mb-6">
              Subscribe to receive exclusive Ayurvedic health tips, special offers, and wellness guides.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Subscribe Now
                </a>
              </Button>
            </div>
          </section>

          {/* Testimonials */}
          <h2 className="text-3xl font-serif font-bold mb-6">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <Card key={index} className="p-6 border border-border hover:shadow-lg transition">
                <p className="text-foreground/80 mb-2">“{t.review}”</p>
                <p className="text-primary font-semibold">{t.name}</p>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
