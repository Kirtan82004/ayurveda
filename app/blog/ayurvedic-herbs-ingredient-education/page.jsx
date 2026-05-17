// app/blog/ayurvedic-herbs-ingredient-education/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const ayurvedicPrinciples = [
  "Rasa (Taste) – sweet, sour, salty, bitter, pungent, astringent",
  "Virya (Potency) – heating or cooling effect",
  "Vipaka (Post-digestive effect) – long-term metabolic influence",
  "Guna (Qualities) – heavy, light, dry, oily, etc.",
];

const herbs = [
  {
    name: "Ashwagandha",
    description:
      "Traditionally used as an adaptogenic herb to support stress management, energy levels, vitality, and physical endurance.",
  },
  {
    name: "Shilajit",
    description:
      "A mineral-rich Ayurvedic ingredient traditionally valued for supporting stamina, vitality, and energy metabolism.",
  },
  {
    name: "Triphala",
    description:
      "A classical Ayurvedic blend made from three fruits, traditionally used to support digestion, detoxification, and gut health.",
  },
  {
    name: "Brahmi",
    description:
      "Traditionally known for supporting cognitive wellness, memory, focus, and mental relaxation.",
  },
  {
    name: "Neem",
    description:
      "Traditionally valued for its purifying properties and commonly used in skin care and wellness formulations.",
  },
  {
    name: "Shatavari",
    description:
      "Widely recognized in Ayurveda for supporting women’s wellness and hormonal balance.",
  },
];

const formulationBenefits = [
  "Balanced effects on the body",
  "Reduced risk of excessive potency from a single herb",
  "Support for multiple body systems simultaneously",
  "Improved absorption and effectiveness",
];

const bamusoBenefits = [
  "Daily energy and vitality",
  "Digestive balance",
  "Immunity support",
  "Skin and hair care",
  "Mental wellness and relaxation",
];

const transparencyPoints = [
  "Natural plant-based ingredients",
  "Traditional herbal combinations",
  "Proper processing methods",
  "Responsible sourcing of herbs",
];

const integrationMethods = [
  "Herbal supplements",
  "Herbal teas and infusions",
  "Natural oils for massage",
  "Herbal powders and tonics",
  "Skin and hair care products",
];

const safetyTips = [
  "Always follow recommended dosage instructions.",
  "Individuals with medical conditions should consult a healthcare professional before using herbal supplements.",
  "Pregnant or breastfeeding women should seek medical advice before starting herbal products.",
  "Herbal supplements should not replace prescribed medical treatment.",
  "Use products from trusted sources that maintain proper quality standards.",
];

export default function AyurvedicHerbsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
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
            Ayurvedic Herbs & Ingredient Education
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            Understanding the power of natural ingredients,
            traditional herbal wisdom,
            and the role of Ayurvedic herbs in holistic wellness.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Ayurveda has relied on herbs,
            roots,
            minerals,
            and plant-based ingredients
            for thousands of years to support human health and wellness.
          </p>

          <p className="text-foreground/80 leading-8">
            Unlike many synthetic products,
            Ayurvedic formulations focus on natural harmony between ingredients,
            allowing multiple herbs to work together in balance.
          </p>

          <p className="text-foreground/80 leading-8">
            Understanding Ayurvedic herbs and their traditional uses
            helps individuals make more informed choices
            about their wellness routines and lifestyle habits.
          </p>

        </div>

        {/* Philosophy */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Philosophy Behind Ayurvedic Ingredients
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda explains that every natural ingredient
            has unique characteristics that influence the body’s balance.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {ayurvedicPrinciples.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Important Ayurvedic Herbs and Their Traditional Uses
          </h2>

          <div className="space-y-5">

            {herbs.map((herb, index) => (
              <Card key={index} className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {herb.name}
                </h3>

                <p className="text-foreground/80 leading-8">
                  {herb.description}
                </p>

              </Card>
            ))}

          </div>

        </div>

        {/* Herbal Synergy */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Why Ayurvedic Formulations Combine Multiple Herbs
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            One of the most important Ayurvedic concepts
            is herbal synergy,
            where multiple herbs are combined
            to complement and balance each other.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {formulationBenefits.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Bamuso Ayurveda */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-6">
            Natural Wellness Support with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Bamuso Ayurveda combines traditional Ayurvedic wisdom
            with carefully selected natural ingredients
            to create wellness formulations
            designed for modern lifestyles.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {bamusoBenefits.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Ingredient Transparency */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-6">
            Importance of Ingredient Transparency
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Understanding herbal ingredients helps consumers
            make informed wellness decisions
            and choose products aligned with natural health practices.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {transparencyPoints.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Daily Life */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Integrating Ayurvedic Herbs into Daily Life
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {integrationMethods.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety and Responsible Use
            </h2>

            <div className="space-y-4">

              {safetyTips.map((tip, index) => (
                <p
                  key={index}
                  className="text-foreground/80 leading-8"
                >
                  ✔ {tip}
                </p>
              ))}

            </div>

          </Card>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Conclusion
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurvedic herbs and natural ingredients
            represent a rich wellness tradition
            developed over thousands of years.
          </p>

          <p className="text-foreground/80 leading-8">
            By understanding these herbs,
            practicing balanced lifestyle habits,
            and choosing natural wellness support responsibly,
            individuals can build a strong foundation
            for long-term health and vitality.
          </p>

        </div>

      </section>
    </div>
  );
}