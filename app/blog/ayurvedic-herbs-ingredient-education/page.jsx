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
    name: "Ashwagandha (Withania Somnifera)",
    description:
      "Ashwagandha is widely known as a powerful adaptogenic herb. Traditionally, it has been used to help the body manage stress, support energy levels, and promote overall vitality. It is also commonly used in wellness formulations aimed at improving physical strength and endurance.",
  },
  {
    name: "Shilajit",
    description:
      "Shilajit is a mineral-rich substance found in the Himalayan mountains. It has been traditionally used in Ayurveda to support stamina, vitality, and energy metabolism. Shilajit is valued for its natural trace minerals and bioactive compounds.",
  },
  {
    name: "Triphala",
    description:
      "Triphala is a classical Ayurvedic herbal blend made from three fruits: Amalaki, Bibhitaki, and Haritaki. It is widely used to support digestive health, detoxification, and gentle internal cleansing.",
  },
  {
    name: "Brahmi",
    description:
      "Brahmi is well known for supporting cognitive health, focus, and mental clarity. It is often used in Ayurvedic formulations designed to support memory and mental relaxation.",
  },
  {
    name: "Neem",
    description:
      "Neem has strong purifying properties and has been traditionally used in skin care formulations and herbal wellness products.",
  },
  {
    name: "Shatavari",
    description:
      "Shatavari is widely recognized in Ayurveda for supporting women’s wellness and hormonal balance. It is considered a nourishing herb for reproductive health.",
  },
];

const formulationBenefits = [
  "Balanced effects on the body",
  "Reduced risk of excessive potency from a single herb",
  "Support for multiple body systems at the same time",
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
            Understanding the Power of Natural Ingredients in Ayurveda
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            For thousands of years, Ayurveda has relied on the healing power
            of herbs, roots, minerals, and plant-based ingredients
            to support human health.
          </p>

          <p className="text-foreground/80 leading-8">
            These natural ingredients are carefully selected
            based on their unique properties
            and their ability to balance the body's internal systems.
          </p>

          <p className="text-foreground/80 leading-8">
            Unlike many modern synthetic products,
            Ayurvedic formulations focus on natural harmony between ingredients,
            allowing the body to benefit from the combined effects
            of multiple herbs working together.
          </p>

          <p className="text-foreground/80 leading-8">
            Understanding Ayurvedic herbs and their properties
            helps individuals make informed choices
            about their wellness routines
            and appreciate the value of traditional herbal knowledge.
          </p>

        </div>

        {/* Philosophy */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Philosophy Behind Ayurvedic Ingredients
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda explains that every natural ingredient
            has specific characteristics
            that influence the body’s balance.
          </p>
           <p className="text-foreground/80 leading-8 mb-6">
      Herbs are categorized based on their:
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

          <p className="text-foreground/80 leading-8 mt-8">
            By understanding these properties,
            Ayurvedic practitioners combine herbs
            in ways that support specific health goals
            such as digestion, immunity,
            mental clarity, skin health,
            or physical vitality.
          </p>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-3">
            Important Ayurvedic Herbs and Their Traditional Uses
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Many herbs used in Ayurvedic formulations
            have been respected for centuries
            for their natural wellness benefits.
          </p>

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

          <p className="text-foreground/80 leading-8 mb-5">
            One of the most unique aspects of Ayurveda
            is the concept of herbal synergy.
          </p>

          <p className="text-foreground/80 leading-8 mb-8">
            Instead of using a single ingredient alone,
            Ayurvedic formulations often combine multiple herbs
            that complement each other.
          </p>

          <p className="text-foreground/80 leading-8 mb-8">
            This approach offers several advantages:
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

          <p className="text-foreground/80 leading-8 mt-8">
            For example, a wellness formulation may combine
            adaptogenic herbs for stress support,
            digestive herbs for better nutrient absorption,
            and mineral-rich ingredients for energy and vitality.
          </p>

        </div>

        {/* Bamuso Ayurveda */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-6">
            Natural Wellness Support with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            At Bamuso Ayurveda,
            herbal ingredients inspired by traditional Ayurvedic wisdom
            are carefully selected
            to create natural wellness formulations.
          </p>

          <p className="text-foreground/80 leading-8 mb-8">
            These products are designed
            to support different aspects of health such as:
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

          <p className="text-foreground/80 leading-8 mt-8">
            By combining traditional herbs
            with modern quality standards,
            Bamuso Ayurveda aims to offer natural wellness solutions
            that align with Ayurvedic principles.
          </p>

          <p className="text-foreground/80 leading-8 mt-5">
            Herbal supplements, oils,
            and wellness products
            can complement healthy lifestyle practices
            and help individuals maintain balance
            in their daily routines.
          </p>

        </div>

        {/* Ingredient Transparency */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-6">
            Importance of Ingredient Transparency
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            In modern times,
            many people are becoming more conscious
            about the ingredients used
            in their wellness and personal care products.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Understanding herbal ingredients
            allows consumers to make better decisions
            and choose products
            that align with natural health practices.
          </p>

          <p className="text-foreground/80 leading-8 mb-8">
            Quality Ayurvedic products should ideally focus on:
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

          <p className="text-foreground/80 leading-8 mt-8">
            Education about herbal ingredients
            helps build trust
            and encourages responsible use
            of natural wellness products.
          </p>

        </div>

        {/* Daily Life */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Integrating Ayurvedic Herbs into Daily Life
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Ayurvedic herbs can be incorporated
            into daily wellness routines in several ways:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {integrationMethods.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            When combined with proper diet,
            exercise, and stress management practices,
            herbal ingredients can support long-term wellness.
          </p>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety and Responsible Use
            </h2>

            <p className="text-foreground/80 leading-8 mb-6">
              Although Ayurvedic herbs are natural,
              it is important to use them responsibly.
            </p>

            <p className="text-foreground/80 leading-8 mb-6">
              Please consider the following safety guidelines:
            </p>

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

            <p className="text-foreground/80 leading-8 mt-8">
              Responsible usage ensures
              that the benefits of Ayurvedic herbs
              are experienced safely and effectively.
            </p>

          </Card>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Conclusion
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurvedic herbs and natural ingredients
            represent a rich tradition of wellness knowledge
            developed over thousands of years.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By understanding the properties of these herbs
            and how they work together,
            individuals can better appreciate
            the value of natural health practices.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Through herbal education,
            balanced lifestyle habits,
            and natural wellness support,
            it is possible to maintain
            long-term health and vitality.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            At Bamuso Ayurveda,
            the goal is to promote awareness
            about traditional Ayurvedic ingredients
            while offering herbal wellness products
            designed to support modern lifestyles.
          </p>

          <p className="text-foreground/80 leading-8">
            When natural ingredients are used wisely and responsibly,
            they can become a powerful part
            of a holistic approach to health and well-being.
          </p>

        </div>

      </section>
    </div>
  );
}