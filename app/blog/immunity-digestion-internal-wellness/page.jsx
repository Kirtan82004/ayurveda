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
      "Amla is rich in natural antioxidants and vitamin C. It is widely used in Ayurvedic formulations to support immunity, digestion, and overall vitality.",
  },
  {
    name: "Ginger",
    description:
      "Ginger has long been valued in Ayurveda for its ability to stimulate digestion and support metabolism. It is commonly used to help improve digestive comfort.",
  },
  {
    name: "Turmeric",
    description:
      "Turmeric contains natural compounds that are known for their antioxidant and supportive wellness properties. It is often used to support immunity and internal balance.",
  },
  {
    name: "Triphala",
    description:
      "Triphala is a traditional herbal blend that supports digestion, gentle detoxification, and overall gut health.",
  },
  {
    name: "Giloy",
    description:
      "Giloy is a well-known herb traditionally used in Ayurveda for supporting immunity and maintaining overall wellness.",
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
      "Exercise helps improve circulation, metabolism, and digestive efficiency.",
  },
  {
    title: "Stress Management",
    description:
      "Chronic stress can weaken digestion and immunity. Practices such as meditation and breathing exercises may help support emotional balance.",
  },
  {
    title: "Adequate Sleep",
    description:
      "Sleep allows the body to repair tissues, restore energy levels, and strengthen immune function.",
  },
  {
    title: "Proper Hydration",
    description:
      "Drinking sufficient water throughout the day supports digestion and detoxification processes.",
  },
];

const safetyTips = [
  "Follow recommended dosage instructions for herbal supplements.",
  "Individuals with existing medical conditions should consult a healthcare professional before using new herbal products.",
  "Pregnant or breastfeeding women should seek medical advice before using herbal supplements.",
  "Herbal products should be used as part of a balanced lifestyle and not as a substitute for professional medical treatment.",
  "Maintain proper nutrition and lifestyle habits for best results.",
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

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold font-serif">
            An Ayurvedic Guide to Strengthening Health from Within
          </h2>

          <p className="text-foreground/80 leading-8">
            In modern lifestyles, many people experience health concerns such as weak immunity, digestive discomfort, fatigue, and reduced energy levels. Irregular eating habits, processed foods, stress, lack of sleep, and environmental pollution can gradually weaken the body's internal systems.
          </p>

          <p className="text-foreground/80 leading-8">
            According to Ayurveda, true health begins from within. The strength of digestion and the body's natural immunity play a fundamental role in maintaining long-term wellness. When digestion functions efficiently and the body produces strong immunity factors, individuals are better able to maintain energy, resist illness, and support overall vitality.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda emphasizes the importance of maintaining internal balance through proper nutrition, herbal support, and mindful lifestyle habits.
          </p>

        </div>

        {/* Agni */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Role of Digestion (Agni) in Ayurvedic Health
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In Ayurveda, digestion is governed by Agni, often referred to as the digestive fire. Agni is responsible for breaking down food, absorbing nutrients, and converting them into energy that supports all bodily functions.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            When Agni is strong and balanced, the body experiences:
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
            However, when digestion becomes weak or irregular, toxins known as Ama may accumulate in the body. This can contribute to symptoms such as bloating, fatigue, low immunity, and digestive discomfort.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            Maintaining a healthy digestive system is therefore considered one of the most important foundations of Ayurvedic wellness.
          </p>

        </div>

        {/* Ojas */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Understanding Immunity in Ayurveda (Ojas)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda describes immunity through the concept of Ojas, which represents the body's vital energy and resistance to illness. Ojas is produced when digestion is strong and nutrients are properly absorbed.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Healthy Ojas contributes to:
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

          <p className="text-foreground/80 leading-8 mt-8">
            When lifestyle habits weaken digestion and nutrition, Ojas may also become depleted, leading to reduced resilience and fatigue.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            Supporting digestion and maintaining a balanced lifestyle are therefore essential steps for building strong immunity.
          </p>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Important Ayurvedic Herbs for Digestive and Immune Health
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurvedic tradition includes many herbs that have historically been used to support digestive balance and immune function.
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

          <p className="text-foreground/80 leading-8 mt-6">
            These herbs are often combined in Ayurvedic formulations designed to promote digestive balance and immune support.
          </p>

        </div>

        {/* Diet */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Ayurvedic Dietary Principles for Internal Wellness
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Diet plays a major role in maintaining digestion and immunity. Ayurveda recommends eating foods that are fresh, balanced, and suited to individual digestive capacity.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Important dietary habits include:
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

          <p className="text-foreground/80 leading-8 mt-6">
            Warm, nourishing foods and herbal ingredients can help support digestive strength and nutrient absorption.
          </p>

        </div>

        {/* Bamuso Ayurveda */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Supporting Wellness with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Along with proper diet and lifestyle habits, herbal wellness formulations can support the body's natural balance.
          </p>

          <p className="text-foreground/80 leading-8">
            At Bamuso Ayurveda, herbal products are inspired by traditional Ayurvedic knowledge and carefully selected natural ingredients. These formulations are designed to support various aspects of internal wellness, including:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

            {bamusoSupport.map((item, index) => (
              <Card key={index} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            When combined with healthy daily routines, Bamuso Ayurveda products may help complement the body's natural processes and support long-term wellness.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            Herbal supplements, digestive formulations, and immunity support products can become valuable additions to a balanced wellness routine.
          </p>

        </div>

        {/* Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Practices That Support Digestion and Immunity
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda emphasizes that lifestyle habits strongly influence digestive strength and immune health.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Some beneficial daily practices include:
          </p>

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

          <p className="text-foreground/80 leading-8 mt-8">
            These habits work together to maintain internal balance and long-term wellness.
          </p>

        </div>

        {/* Preventive Health */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Preventive Health
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda focuses strongly on prevention. Instead of waiting for illness to occur, the system encourages individuals to maintain strong digestion, balanced nutrition, and healthy lifestyle habits.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            When the body functions in harmony with natural rhythms, it becomes more resilient to stress, environmental challenges, and seasonal changes.
          </p>

          <p className="text-foreground/80 leading-8">
            Preventive care through proper diet, herbal support, and mindful living can significantly contribute to overall health and vitality.
          </p>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety and Responsible Use
            </h2>

            <p className="text-foreground/80 leading-8 mb-6">
              While herbal products and natural remedies are generally gentle, responsible use is important.
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
              Responsible wellness practices ensure long-term safety and effectiveness.
            </p>

          </Card>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Conclusion
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Immunity, digestion, and internal wellness are deeply interconnected. When digestion is strong and the body produces healthy Ojas, individuals experience better energy, stronger immunity, and improved overall health.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda offers a holistic approach that combines balanced nutrition, herbal ingredients, healthy lifestyle practices, and natural wellness support.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By incorporating Ayurvedic principles and herbal solutions from Bamuso Ayurveda, individuals can take meaningful steps toward maintaining internal balance and long-term well-being.
          </p>

          <p className="text-foreground/80 leading-8">
            True wellness begins from within, and strengthening the body's internal systems is the key to living a healthy and energetic life.
          </p>

        </div>

      </section>
    </div>
  );
}