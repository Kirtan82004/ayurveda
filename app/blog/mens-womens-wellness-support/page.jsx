// app/blog/mens-womens-wellness-support/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const wellnessFactors = [
  "Balanced doshas (Vata, Pitta, Kapha)",
  "Strong digestive fire (Agni)",
  "Proper hormonal balance",
  "Healthy reproductive tissues (Shukra & Artava dhatu)",
  "Stable mental and emotional health",
];

const menChallenges = [
  "Low stamina and energy levels",
  "Stress and mental fatigue",
  "Reduced physical performance",
  "Poor recovery after long work hours",
  "Hormonal imbalance due to lifestyle stress",
];

const womenChallenges = [
  "Hormonal fluctuations",
  "Low energy and fatigue",
  "Stress and mood imbalance",
  "Nutritional deficiencies",
  "Lifestyle-related hormonal irregularities",
];

const herbs = [
  {
    name: "Ashwagandha",
    description:
      "Traditionally used as an Ayurvedic adaptogen to support stress management, strength, and stamina.",
  },
  {
    name: "Shilajit",
    description:
      "A mineral-rich natural substance traditionally used to support energy, endurance, and vitality.",
  },
  {
    name: "Safed Musli",
    description:
      "Traditionally valued for supporting stamina, physical performance, and reproductive wellness.",
  },
  {
    name: "Gokshura",
    description:
      "Traditionally used to support urinary health and reproductive wellness.",
  },
  {
    name: "Shatavari",
    description:
      "Known in Ayurveda for supporting women’s hormonal balance and reproductive health.",
  },
];

const bmsBenefits = [
  "Natural stamina and vitality",
  "Energy levels during daily activities",
  "Physical endurance and strength",
  "Overall reproductive wellness",
  "Stress management and body balance",
];

const lifestyleHabits = [
  {
    title: "Balanced Nutrition",
    description:
      "A diet rich in whole foods, fruits, vegetables, healthy fats, and herbs supports long-term wellness.",
  },
  {
    title: "Regular Physical Activity",
    description:
      "Exercise improves circulation, energy levels, and hormonal balance.",
  },
  {
    title: "Stress Management",
    description:
      "Meditation, yoga, and breathing exercises help support mental calmness and emotional balance.",
  },
  {
    title: "Proper Sleep",
    description:
      "Adequate sleep supports tissue repair, hormonal balance, and energy restoration.",
  },
  {
    title: "Hydration",
    description:
      "Maintaining hydration helps support metabolic processes and overall vitality.",
  },
];

const safetyTips = [
  "Always follow the recommended dosage instructions.",
  "Consult a healthcare professional if you have existing medical conditions.",
  "Pregnant or breastfeeding women should consult a doctor before using herbal supplements.",
  "Individuals under 18 years should avoid adult wellness supplements unless advised by a healthcare professional.",
  "Herbal supplements should complement a healthy lifestyle and not replace professional medical care.",
];

export default function MensWomenWellnessPage() {
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
            Men’s & Women’s Wellness Support
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            A holistic Ayurvedic approach to energy,
            vitality, hormonal balance,
            and long-term wellness support.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Modern lifestyles often contribute to fatigue,
            stress, hormonal imbalance,
            reduced stamina, and low vitality
            in both men and women.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda explains that true wellness depends
            on maintaining balance between the body,
            mind, and energy systems.
          </p>

          <p className="text-foreground/80 leading-8">
            A balanced lifestyle supported by nutrition,
            herbal wellness practices,
            and healthy daily habits
            can help maintain long-term vitality and well-being.
          </p>

        </div>

        {/* Wellness Factors */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Understanding Wellness in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            According to Ayurveda,
            overall wellness is influenced
            by several important internal factors.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {wellnessFactors.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Challenges */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Common Wellness Challenges in Modern Lifestyle
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">

            <Card className="p-6">

              <h3 className="text-2xl font-semibold mb-5">
                In Men
              </h3>

              <div className="space-y-3">

                {menChallenges.map((item, index) => (
                  <p
                    key={index}
                    className="text-foreground/80"
                  >
                    ✔ {item}
                  </p>
                ))}

              </div>

            </Card>

            <Card className="p-6">

              <h3 className="text-2xl font-semibold mb-5">
                In Women
              </h3>

              <div className="space-y-3">

                {womenChallenges.map((item, index) => (
                  <p
                    key={index}
                    className="text-foreground/80"
                  >
                    ✔ {item}
                  </p>
                ))}

              </div>

            </Card>

          </div>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Ayurvedic Herbs Traditionally Used for Wellness Support
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

        {/* BMS Super X */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Natural Wellness Support with BMS Super X
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            BMS Super X is formulated as an Ayurvedic wellness supplement
            inspired by traditional herbal combinations
            designed to support energy and vitality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {bmsBenefits.map((item, index) => (
              <Card key={index} className="p-5">
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
            Lifestyle Habits That Support Natural Vitality
          </h2>

          <div className="space-y-5">

            {lifestyleHabits.map((item, index) => (
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

        {/* Holistic Wellness */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Holistic Wellness
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda views wellness as a combination
            of physical, mental,
            and emotional balance.
          </p>

          <p className="text-foreground/80 leading-8">
            Supporting the body with natural herbs,
            balanced nutrition,
            and mindful daily routines
            can help maintain energy,
            confidence, and long-term wellness.
          </p>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety & Responsible Usage
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
            Final Thoughts
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Modern lifestyle challenges can affect energy,
            stamina, and overall vitality
            in both men and women.
          </p>

          <p className="text-foreground/80 leading-8">
            By combining Ayurvedic knowledge,
            natural herbs,
            balanced nutrition,
            and healthy lifestyle habits,
            individuals can support long-term wellness,
            vitality, and body balance naturally.
          </p>

        </div>

      </section>
    </div>
  );
}