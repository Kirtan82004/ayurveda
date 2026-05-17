// app/blog/natural-skin-hair-beauty-care/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const doshas = [
  {
    title: "Vata",
    description:
      "Responsible for dryness and aging of skin.",
  },
  {
    title: "Pitta",
    description:
      "Responsible for skin sensitivity, redness, and acne.",
  },
  {
    title: "Kapha",
    description:
      "Responsible for skin hydration, thickness, and glow.",
  },
];

const ingredients = [
  {
    name: "Kumkumadi Oil",
    description:
      "Kumkumadi Tailam is a well-known Ayurvedic formulation traditionally used to support glowing skin. It contains herbs like saffron, sandalwood, and other botanical extracts that help nourish the skin and improve overall complexion.",
  },
  {
    name: "Aloe Vera",
    description:
      "Aloe vera is widely used for its soothing and hydrating properties. It helps maintain skin moisture and supports healing of minor skin irritations.",
  },
  {
    name: "Neem",
    description:
      "Neem is valued in Ayurveda for its purifying and antibacterial properties. It is commonly used in skincare formulations designed to support clearer skin.",
  },
  {
    name: "Amla (Indian Gooseberry)",
    description:
      "Amla is rich in antioxidants and vitamin C, which support collagen production and help maintain healthy hair and skin.",
  },
  {
    name: "Bhringraj",
    description:
      "Bhringraj is traditionally used in hair oils to support scalp health and promote stronger hair roots.",
  },
];

const hairCareTips = [
  "Regular oil massage with herbal oils",
  "Using mild herbal shampoos instead of harsh chemicals",
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
      "Regular scalp massage improves blood circulation and supports hair growth.",
  },
  {
    title: "4️⃣ Healthy Diet",
    description:
      "Foods rich in vitamins, minerals, and antioxidants play a crucial role in maintaining healthy skin and hair.",
  },
  {
    title: "5️⃣ Hydration",
    description:
      "Adequate water intake helps maintain skin moisture and supports detoxification.",
  },
];

const safetyTips = [
  "Always perform a patch test before applying new skincare products.",
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
            The Ayurvedic Path to Healthy, Radiant Beauty
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            In the modern world, skin and hair problems such as acne, hair fall, premature aging, dryness, and dullness have become increasingly common. Pollution, stress, poor diet, lack of sleep, and excessive use of chemical-based cosmetic products often disturb the natural balance of the body.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda, the ancient science of natural wellness, takes a holistic approach to beauty. Instead of focusing only on external treatments, Ayurveda emphasizes that true beauty comes from internal balance, proper nutrition, and natural care routines.
          </p>

          <p className="text-foreground/80 leading-8">
            Healthy digestion, balanced hormones, proper sleep, and natural herbal care all contribute to glowing skin and strong, healthy hair.
          </p>

        </div>

        {/* Doshas */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Ayurvedic Concept of Natural Beauty
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In Ayurveda, beauty is closely connected with the balance of the three doshas:
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
            When these doshas remain balanced, the skin appears naturally radiant and the hair remains strong and healthy. However, imbalance in these energies can lead to common beauty concerns such as hair thinning, dull skin, pigmentation, and premature wrinkles.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            Ayurveda focuses on restoring internal harmony while also supporting the body with natural herbs and plant-based ingredients.
          </p>

        </div>

        {/* Ingredients */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Natural Ayurvedic Ingredients for Skin & Hair Wellness
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurvedic texts describe many herbs and botanical ingredients that have traditionally been used for beauty and personal care. These ingredients are valued for their natural nourishment, antioxidant properties, and gentle action on the body.
          </p>

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
            Hair health is influenced by several factors including nutrition, scalp circulation, stress levels, and hormonal balance. Excessive use of chemical shampoos, hair styling tools, and harsh treatments can weaken hair roots and damage the scalp.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurvedic hair care focuses on gentle nourishment and strengthening of the scalp.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Some important hair care habits include:
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

          <p className="text-foreground/80 leading-8 mt-8">
            When these habits are followed consistently, hair becomes stronger, shinier, and healthier over time.
          </p>

        </div>

        {/* Daily Routine */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Daily Ayurvedic Beauty Routine
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda recommends a simple but effective daily routine to maintain skin and hair health naturally.
          </p>

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
            Modern lifestyles often expose the body to environmental stress, pollution, and chemical products that can affect skin and hair health.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Natural Ayurvedic formulations can provide supportive care by combining traditional herbs with modern wellness approaches.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            At BAMUSO Ayurveda, the focus is on creating herbal wellness products inspired by Ayurvedic knowledge and natural ingredients. Carefully selected botanical extracts are used in formulations designed to support skin nourishment, scalp health, and overall beauty care.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Products such as herbal face washes, natural hair oils, skin care serums, and traditional Kumkumadi-based formulations can complement a healthy lifestyle and help maintain natural beauty.
          </p>

          <p className="text-foreground/80 leading-8">
            These products are designed to support the body gently while respecting the principles of natural wellness.
          </p>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety Considerations in Natural Beauty Care
            </h2>

            <p className="text-foreground/80 leading-8 mb-6">
              While natural and herbal products are generally considered gentle, it is important to use them responsibly.
            </p>

            <p className="text-foreground/80 leading-8 mb-6">
              Here are some safety recommendations:
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
              Natural care works best when used consistently and responsibly as part of a balanced lifestyle.
            </p>

          </Card>

        </div>

        {/* Benefits */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Benefits of an Ayurvedic Beauty Approach
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Adopting Ayurvedic beauty practices can offer long-term benefits:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {benefits.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Unlike temporary cosmetic solutions, Ayurvedic care focuses on long-term nourishment and internal balance, which leads to sustainable beauty and vitality.
          </p>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Final Thoughts
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Natural beauty is not only about external appearance—it reflects the overall health and harmony of the body.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda teaches that when digestion, nutrition, lifestyle, and natural care routines are balanced, the skin and hair naturally become healthier and more vibrant.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By choosing herbal ingredients, adopting mindful beauty routines, and supporting the body with natural wellness solutions, it is possible to maintain long-lasting beauty and confidence.
          </p>

          <p className="text-foreground/80 leading-8">
            At BAMUSO Ayurveda, the mission is to support this journey by offering nature-inspired products designed to complement healthy lifestyles and promote holistic well-being.
          </p>

        </div>

      </section>
    </div>
  );
}