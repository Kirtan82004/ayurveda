// app/blog/natural-skin-hair-beauty-care/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const doshas = [
  {
    title: "Vata",
    description:
      "Responsible for dryness and aging of the skin.",
  },
  {
    title: "Pitta",
    description:
      "Responsible for skin sensitivity, redness, and acne.",
  },
  {
    title: "Kapha",
    description:
      "Responsible for hydration, thickness, and natural glow.",
  },
];

const ingredients = [
  {
    name: "Kumkumadi Oil",
    description:
      "A traditional Ayurvedic formulation made with saffron and botanical extracts to support glowing and nourished skin.",
  },
  {
    name: "Aloe Vera",
    description:
      "Known for its soothing and hydrating properties that help maintain healthy skin moisture.",
  },
  {
    name: "Neem",
    description:
      "Traditionally valued for its purifying and antibacterial properties in skincare.",
  },
  {
    name: "Amla (Indian Gooseberry)",
    description:
      "Rich in antioxidants and vitamin C that support healthy skin and hair wellness.",
  },
  {
    name: "Bhringraj",
    description:
      "Traditionally used in Ayurvedic hair oils to support scalp health and stronger hair roots.",
  },
];

const hairCareTips = [
  "Regular oil massage with herbal oils",
  "Using mild herbal shampoos",
  "Maintaining balanced nutrition",
  "Reducing excessive heat styling",
  "Managing stress and improving sleep quality",
];

const beautyRoutine = [
  {
    title: "1️⃣ Cleansing",
    description:
      "Use gentle herbal cleansers that remove impurities without stripping natural oils.",
  },
  {
    title: "2️⃣ Nourishing the Skin",
    description:
      "Applying herbal oils or natural moisturizers helps maintain skin hydration and elasticity.",
  },
  {
    title: "3️⃣ Scalp Care",
    description:
      "Regular scalp massage improves circulation and supports healthy hair growth.",
  },
  {
    title: "4️⃣ Healthy Diet",
    description:
      "Foods rich in vitamins, minerals, and antioxidants help support healthy skin and hair.",
  },
  {
    title: "5️⃣ Hydration",
    description:
      "Adequate water intake helps maintain skin moisture and supports detoxification.",
  },
];

const safetyTips = [
  "Always perform a patch test before using new skincare products.",
  "Avoid using multiple strong products at the same time.",
  "Follow recommended usage instructions.",
  "Individuals with sensitive skin should consult a healthcare professional before using new products.",
  "Maintain proper hygiene and storage of personal care products.",
];

const benefits = [
  "Healthier and naturally glowing skin",
  "Stronger hair roots and reduced breakage",
  "Balanced skin hydration",
  "Reduced exposure to harsh chemicals",
  "Improved overall wellness",
];

export default function NaturalBeautyPage() {
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
            Natural Skin, Hair & Beauty Care
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            The Ayurvedic path to healthy, radiant beauty through
            natural ingredients, balanced lifestyle habits,
            and holistic wellness.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Modern lifestyles, pollution, stress,
            and excessive use of chemical-based products
            can negatively affect skin and hair health.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda takes a holistic approach to beauty,
            emphasizing that true beauty comes from internal balance,
            proper nutrition, and natural care routines.
          </p>

          <p className="text-foreground/80 leading-8">
            Healthy digestion, balanced hormones,
            proper sleep, and herbal nourishment
            all contribute to glowing skin
            and stronger, healthier hair.
          </p>

        </div>

        {/* Doshas */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Ayurvedic Concept of Natural Beauty
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda connects beauty with the balance
            of the three doshas in the body.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {doshas.map((item, index) => (
              <Card key={index} className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-foreground/80 leading-7">
                  {item.description}
                </p>

              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            When these doshas remain balanced,
            the skin appears naturally radiant
            and the hair remains healthy and strong.
          </p>

        </div>

        {/* Ingredients */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Natural Ayurvedic Ingredients for Skin & Hair Wellness
          </h2>

          <div className="space-y-5">

            {ingredients.map((item, index) => (
              <Card key={index} className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {item.name}
                </h3>

                <p className="text-foreground/80 leading-8">
                  {item.description}
                </p>

              </Card>
            ))}

          </div>

        </div>

        {/* Hair Care */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Importance of Natural Hair Care
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Hair health is influenced by nutrition,
            scalp circulation, stress levels,
            and overall lifestyle habits.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {hairCareTips.map((tip, index) => (
              <Card key={index} className="p-4">
                <p className="text-foreground/80">
                  ✔ {tip}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Daily Routine */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Daily Ayurvedic Beauty Routine
          </h2>

          <div className="space-y-5">

            {beautyRoutine.map((item, index) => (
              <Card key={index} className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-foreground/80 leading-8">
                  {item.description}
                </p>

              </Card>
            ))}

          </div>

        </div>

        {/* Modern Beauty */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Ayurvedic Support for Modern Beauty Needs
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Environmental stress, pollution,
            and excessive use of chemical products
            can affect natural skin and hair balance.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurvedic formulations can provide supportive care
            by combining traditional herbs
            with modern wellness approaches.
          </p>

          <p className="text-foreground/80 leading-8">
            At BAMUSO Ayurveda, herbal products are designed
            using carefully selected botanical ingredients
            inspired by Ayurvedic wellness principles.
          </p>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety Considerations in Natural Beauty Care
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

        {/* Benefits */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Benefits of an Ayurvedic Beauty Approach
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {benefits.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Final Thoughts
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Natural beauty reflects the overall health
            and harmony of the body.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda teaches that balanced nutrition,
            mindful routines, herbal care,
            and healthy lifestyle habits
            can help maintain naturally glowing skin,
            healthy hair, and long-term wellness.
          </p>

        </div>

      </section>
    </div>
  );
}