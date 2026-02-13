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
      <section className="pt-10 pb-5 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Health Tips & Blog</h1>
          </div>
          <p className="text-lg text-foreground/70 ">
            Ayurveda is not just a treatment, it’s a lifestyle. Discover tips, remedies,
            and wellness guidance to stay healthy, energetic, and balanced.
          </p>
          <p className="text-lg text-foreground/70 ">
            Ayurveda is not just a treatment — it is a way of life. Our aim is to deliver safe, simple, and effective natural wellness knowledge to every individual.
          </p>
        </div>
      </section>

      <section className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center">
             What You’ll Find in Our Health Tips & Blog
          </h2>
          <span className="text-foreground/80 text-center mb-10 block">  In this blog section, we share carefully curated Ayurvedic knowledge and wellness insights to support your healthy lifestyle. We regularly bring you:</span>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_TIPS.map((tip, index) => (
              <Card
                key={index}
                className="p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-serif font-bold mb-2">
                  {tip.title}
                </h3>
                <p className="text-foreground/80 text-sm">
                  {tip.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
       <section className="max-w-6xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <Card className="p-6 border border-border bg-background">
          <h2 className="text-2xl font-serif font-bold">
            Disclaimer
          </h2>
          <p className="text-foreground/80 leading-relaxed">
        The information shared in this blog is for educational and general wellness purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment
        </p>
        </Card>
      </section>
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Guest Posts & Collaborations
          </h2>
          <p className="text-foreground/80 mb-6">
            Ayurveda, Yoga, Wellness, Nutrition या Healthy Lifestyle से जुड़े
            writers & creators हमारे साथ जुड़ सकते हैं।
          </p>

          <Card className="p-6 border border-border inline-block">
            <p className="text-sm text-foreground/70 mb-2">Contact us at:</p>
            <a
              href="mailto:support@bamuso.com"
              className="text-primary font-semibold"
            >
              support@bamuso.com
            </a>
          </Card>
        </div>
      </section>


      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">
            What Our Customers Say
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <Card
                key={index}
                className="p-6 border border-border bg-background"
              >
                <p className="text-foreground/80 mb-3 text-sm leading-relaxed">
                  “{t.review}”
                </p>
                <p className="text-primary font-semibold text-sm">
                  {t.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-10">
            Why Customers Love BAMUSO Ayurveda
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '100% Natural Ingredients',
              'Ayurveda + Modern Quality Standards',
              'Lab-Tested & Safe',
              'No Chemicals, No Side Effects',
              'Thousands of Happy Customers',
              'Fast Delivery Across India',
              'Dedicated Customer Support',
            ].map((point, i) => (
              <Card key={i} className="p-5 border border-border">
                <p className="text-foreground/80">✔ {point}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Join Our Wellness Community
          </h2>
          <p className="mb-8 text-accent-foreground/90">
            Get exclusive Ayurvedic tips, lifestyle guidance & special offers directly on WhatsApp.
          </p>

          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Subscribe on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
