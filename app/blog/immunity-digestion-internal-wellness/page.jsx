// app/blog/immunity-digestion-internal-wellness/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const agniBenefits = [
  "Efficient digestion",
  "Better nutrient absorption",
  "Higher energy levels",
  "Strong immunity",
  "Healthy metabolism",
];

const ojasBenefits = [
  "Strong immunity",
  "Physical strength and stamina",
  "Mental clarity and emotional stability",
  "Healthy skin and overall vitality",
];

const herbs = [
  {
    name: "Amla (Indian Gooseberry)",
    description:
      "Rich in antioxidants and vitamin C, traditionally used to support immunity, digestion, and vitality.",
  },
  {
    name: "Ginger",
    description:
      "Traditionally valued in Ayurveda for supporting digestion and metabolic balance.",
  },
  {
    name: "Turmeric",
    description:
      "Known for its antioxidant properties and support for immunity and internal balance.",
  },
  {
    name: "Triphala",
    description:
      "A traditional herbal blend that supports digestion and gut wellness.",
  },
  {
    name: "Giloy",
    description:
      "Traditionally used in Ayurveda to support immunity and overall wellness.",
  },
];

const dietTips = [
  "Eating freshly prepared meals",
  "Including seasonal fruits and vegetables",
  "Avoiding excessive processed and fried foods",
  "Maintaining regular meal timings",
  "Eating slowly and mindfully",
];

const bamusoSupport = [
  "Digestive balance",
  "Natural detoxification",
  "Immune system support",
  "Energy and vitality",
  "Overall body balance",
];

const lifestylePractices = [
  {
    title: "Regular Physical Activity",
    description:
      "Exercise supports circulation, metabolism, and digestive efficiency.",
  },
  {
    title: "Stress Management",
    description:
      "Meditation and breathing exercises may help support emotional balance and reduce stress.",
  },
  {
    title: "Adequate Sleep",
    description:
      "Sleep allows the body to recover, restore energy, and strengthen immune function.",
  },
  {
    title: "Proper Hydration",
    description:
      "Drinking enough water supports digestion and natural detoxification processes.",
  },
];

const safetyTips = [
  "Follow recommended dosage instructions for herbal supplements.",
  "Individuals with existing medical conditions should consult a healthcare professional before using herbal products.",
  "Pregnant or breastfeeding women should seek medical advice before using herbal supplements.",
  "Herbal products should complement a balanced lifestyle, not replace professional medical care.",
  "Maintain proper nutrition and healthy lifestyle habits for best results.",
];

export default function ImmunityDigestionPage() {
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
            Immunity, Digestion & Internal Wellness
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            An Ayurvedic guide to strengthening health from within
            through digestion, immunity, herbal support,
            and mindful lifestyle habits.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Modern lifestyles often contribute to weak immunity,
            digestive discomfort, fatigue, and reduced energy levels.
          </p>

          <p className="text-foreground/80 leading-8">
            According to Ayurveda, true wellness begins from within.
            Strong digestion and natural immunity are considered
            essential for maintaining long-term health and vitality.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda emphasizes maintaining internal balance
            through proper nutrition, herbal support,
            and mindful lifestyle habits.
          </p>

        </div>

        {/* Agni */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Role of Digestion (Agni) in Ayurvedic Health
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In Ayurveda, digestion is governed by Agni,
            often referred to as the digestive fire.
            Agni helps break down food, absorb nutrients,
            and convert them into energy.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {agniBenefits.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            When digestion becomes weak or irregular,
            toxins known as Ama may accumulate in the body,
            contributing to bloating, fatigue,
            digestive discomfort, and low immunity.
          </p>

        </div>

        {/* Ojas */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Understanding Immunity in Ayurveda (Ojas)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda describes immunity through the concept of Ojas,
            which represents vitality, resilience,
            and resistance to illness.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">

            {ojasBenefits.map((item, index) => (
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
            Important Ayurvedic Herbs for Digestive and Immune Health
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

        {/* Diet */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Ayurvedic Dietary Principles for Internal Wellness
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Diet plays a major role in supporting digestion,
            nutrient absorption, and immunity.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {dietTips.map((tip, index) => (
              <Card key={index} className="p-4">
                <p className="text-foreground/80">
                  ✔ {tip}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Bamuso Ayurveda */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Supporting Wellness with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Bamuso Ayurveda formulations are inspired by
            traditional Ayurvedic knowledge and natural ingredients
            designed to support internal wellness.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {bamusoSupport.map((item, index) => (
              <Card key={index} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Practices That Support Digestion and Immunity
          </h2>

          <div className="space-y-5">

            {lifestylePractices.map((item, index) => (
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

        {/* Preventive Health */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Preventive Health
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda strongly focuses on prevention and maintaining
            balance before health concerns arise.
          </p>

          <p className="text-foreground/80 leading-8">
            Proper diet, herbal support, and mindful living
            can help improve resilience to stress,
            environmental challenges, and seasonal changes.
          </p>

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
            Immunity, digestion, and internal wellness
            are deeply interconnected in Ayurveda.
          </p>

          <p className="text-foreground/80 leading-8">
            By incorporating balanced nutrition,
            herbal support, mindful lifestyle habits,
            and Ayurvedic principles,
            individuals can take meaningful steps
            toward long-term wellness and vitality.
          </p>

        </div>

      </section>
    </div>
  );
}