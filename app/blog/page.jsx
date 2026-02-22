'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const BLOG_TIPS = [
  {
    title: 'Customer Reviews, Experiences & Testimonials',
    description:
      'Real customer experiences, authentic testimonials, and honest feedback about BAMUSO Ayurveda products to help you understand real user insights and wellness journeys.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhcXwvq9f8BiBepTfa5FxP3n',
  },
  {
    title: 'Ayurvedic Daily Routine & Lifestyle',
    description:
      'Discover traditional Ayurvedic daily routines, morning rituals, and healthy lifestyle practices that help support natural balance, energy, and overall wellness.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhcexR8s1XPu371dZzB07m89',
  },
  {
    title: 'Immunity, Digestion & Internal Wellness',
    description:
      'Learn Ayurvedic approaches that support natural immunity, healthy digestion, gut balance, and internal body wellness through herbs, diet, and lifestyle guidance.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhcquOrdVW-aVfKpjNW5_eGy',
  },
  {
    title: 'Healthy Weight Management & Body Balance',
    description:
      'Explore natural Ayurvedic guidance for maintaining healthy weight, improving metabolism, and supporting overall body balance through sustainable wellness practices.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhcmYWNoMKYE0fs_vCH-JxQ5',
  },
  {
    title: 'Natural Skin, Hair & Beauty Care',
    description:
      'Discover Ayurvedic skin care, hair care, and natural beauty solutions using herbs and traditional methods to support healthy skin and hair naturally.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhdqIYaFSrYqvOL1jACwqJL4',
  },
  {
    title: 'Men’s & Women’s Wellness Support',
    description:
      'Learn Ayurvedic wellness guidance designed to support men’s and women’s health, vitality, energy, and overall well-being naturally.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhfZybkpzJxq1yQ2fngcxtl4',
  },
  {
    title: 'Detox, Stress Relief & Mental Wellness',
    description:
      'Explore Ayurvedic detox practices, stress management techniques, and natural ways to support mental calmness and overall wellness balance.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkheffsP9gl22OiLr_7l7mm7c',
  },
  {
    title: 'Seasonal Ayurveda & Home Remedies',
    description:
      'Get Ayurvedic seasonal health guidance and traditional herbal home remedies to support wellness throughout changing weather and seasonal transitions.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhcCLs7pp9yH7HpIxATyxWc2',
  },
  {
    title: 'Ayurvedic Herbs & Ingredient Education',
    description:
      'Learn about powerful Ayurvedic herbs, their traditional uses, and how they support natural health and wellness.',
    link: 'https://www.youtube.com/playlist?list=PL8ONJ3g-KkhdCv7TnjviCtBzkDO1KaRtB',
  },
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

      <section className="pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center">
            What You’ll Find in Our Health Tips & Blog
          </h2>
          <span className="text-foreground/80 text-center mb-10 block">  In this blog section, we share carefully curated Ayurvedic knowledge and wellness insights to support your healthy lifestyle. We regularly bring you:</span>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_TIPS.map((tip, index) => (
              <Link
                key={index}
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card
                  className="p-6 border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full"
                >
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>

                  <p className="text-foreground/80 text-sm mb-4">
                    {tip.description}
                  </p>

                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Watch Playlist →
                  </span>
                </Card>
              </Link>
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


      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-secondary">
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
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-secondary">
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
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
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
