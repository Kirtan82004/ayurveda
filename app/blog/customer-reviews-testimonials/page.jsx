// app/blog/customer-reviews-testimonials/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar – Delhi",
    review:
      "I started using BMS Super X along with improving my daily routine and diet. Within a few weeks, I started feeling more energetic and active throughout the day. I really like that Bamuso Ayurveda focuses on natural herbal ingredients instead of chemical products.",
  },
  {
    name: "Ankit Sharma – Jaipur",
    review:
      "I was looking for a natural wellness supplement to support stamina and overall vitality. After trying BMS Super X, I noticed improvement in my daily energy levels. The product feels gentle and easy to include in my routine.",
  },
  {
    name: "Meena Patel – Ahmedabad",
    review:
      "I have been using Bamuso Ayurveda products for general wellness and I appreciate the natural approach they follow. The herbal ingredients make me feel more comfortable compared to synthetic supplements.",
  },
  {
    name: "Rohit Verma – Chandigarh",
    review:
      "What I like about Bamuso Ayurveda is their focus on traditional Ayurvedic knowledge. BMS Super X helped me maintain better stamina during my busy work schedule. I also like their packaging and quality.",
  },
  {
    name: "Sunita Reddy – Hyderabad",
    review:
      "I prefer natural health products and Bamuso Ayurveda offers herbal formulations that align with that philosophy. The products are easy to use and fit well into a balanced lifestyle.",
  },
];

export default function CustomerReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="border-b bg-secondary">
        <div className="max-w-5xl mx-auto px-4 py-10">

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
            Customer Reviews, Experiences & Testimonials
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <h2 className="text-3xl font-bold font-serif mb-4">
            Real Experiences from Our Valued Customers
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            At Bamuso Ayurveda, our mission is to bring the power of
            traditional Ayurvedic wellness to modern lifestyles.
            Every product we develop is inspired by natural herbs
            and ancient Ayurvedic knowledge, carefully designed
            to support daily health and vitality.
          </p>

          <p className="text-foreground/80 leading-8 mb-10">
            Over time, many customers have shared their experiences
            after incorporating Bamuso Ayurveda products into their
            wellness routines. These testimonials reflect how
            individuals are focusing on improving their lifestyle,
            energy, and overall well-being through natural Ayurvedic support.
          </p>

          <p>Below are some experiences shared by our valued customers.</p>
          <br />
          <h2 className="text-3xl font-bold font-serif mb-8">
            Customer Experiences with Bamuso Ayurveda
          </h2>

        </div>

        {/* Testimonials */}
        <div className="grid gap-6">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="p-6 border border-border"
            >
              <h3 className="font-semibold text-lg mb-3">
                ⭐⭐⭐⭐⭐ {item.name}
              </h3>

              <p className="text-foreground/80 leading-7">
                “{item.review}”
              </p>
            </Card>
          ))}
        </div>

        {/* Why Trust */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold font-serif mb-5">
            Why Customers Trust Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8">
            Many customers choose Bamuso Ayurveda because the brand
            focuses on combining traditional herbal wisdom with
            modern quality standards.
          </p>
          <p className="text-foreground/80 leading-8 mb-3">Some reasons customers appreciate Bamuso Ayurveda products include:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Natural herbal ingredients inspired by Ayurveda",
              "Formulations designed for modern lifestyle needs",
              "Focus on overall wellness and vitality",
              "Easy integration into daily health routines",
              "Commitment to natural wellness principles",
            ].map((point, i) => (
              <Card key={i} className="p-4">
                <p className="text-foreground/80">
                  ✔ {point}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-foreground/80 leading-8 mt-6">
            When combined with healthy lifestyle habits such as
            balanced diet, exercise, and proper sleep,
            Ayurvedic products can support long-term wellness.
          </p>
        </div>

        {/* Wellness Journey */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold font-serif mb-5">
            Real Wellness Journeys
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Every individual’s health journey is unique.
            Some customers focus on improving their energy levels,
            while others are looking for natural ways to support
            their daily wellness routine.
          </p>

          <p className="text-foreground/80 leading-8">
            Bamuso Ayurveda products are designed to complement
            these lifestyle choices by offering herbal formulations
            that align with Ayurvedic principles.
          </p>
          <p className="text-foreground/80 leading-8">By focusing on natural ingredients and balanced wellness approaches, Bamuso Ayurveda aims to support individuals who want to maintain better health through traditional herbal practices.</p>
        </div>

        {/* Share Experience */}
        <div className="mt-14">
          <Card className="p-6 bg-secondary border border-border">
            <h2 className="text-2xl font-bold font-serif mb-4">
              Share Your Experience
            </h2>

            <p className="text-foreground/80 leading-8">
              We love hearing from our customers. If you have used
              any Bamuso Ayurveda products, we encourage you to
              share your experience with us.
            </p>
            <p className="text-foreground/80 leading-8">
              Your feedback helps other individuals learn about natural wellness options and inspires us to continue improving our products and services.
            </p>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-10">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold font-serif mb-4">
              ⚠ Important Note
            </h2>

            <p className="text-foreground/80 leading-8">
              Individual results may vary depending on lifestyle, diet, and body constitution. Bamuso Ayurveda products are intended to support general wellness and should be used as part of a healthy lifestyle.
            </p>

            <p className="text-foreground/80 leading-8">
              Individuals with medical conditions, pregnant or
              breastfeeding women, or those taking medications
              should consult a healthcare professional before using
              herbal supplements.
            </p>
          </Card>
        </div>

        {/* Commitment */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold font-serif mb-5">
            Our Commitment
          </h2>

          <p className="text-foreground/80 leading-8">
            At Bamuso Ayurveda, we remain committed to promoting
            natural wellness through carefully selected herbal
            ingredients and Ayurvedic knowledge.
          </p>

          <p className="text-foreground/80 leading-8 mt-4">
            Customer trust and satisfaction remain at the heart
            of everything we do.
          </p>
        </div>

      </section>
    </div>
  );
}