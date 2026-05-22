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
      "Ashwagandha is one of the most respected Ayurvedic adaptogens. It is traditionally used to help the body adapt to stress and support physical strength and stamina.",
  },
  {
    name: "Shilajit",
    description:
      "Shilajit is a mineral-rich natural substance found in Himalayan regions and has historically been used to support energy levels, endurance, and overall vitality.",
  },
  {
    name: "Safed Musli",
    description:
      "Safed Musli is known in Ayurveda for supporting stamina, reproductive health, and physical performance.",
  },
  {
    name: "Gokshura",
    description:
      "Gokshura has been used traditionally to support urinary health and reproductive wellness.",
  },
  {
    name: "Shatavari",
    description:
      "Shatavari is particularly valued for supporting women’s hormonal balance and reproductive health.",
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
      "Consuming a balanced diet rich in whole foods, fruits, vegetables, healthy fats, and natural herbs supports overall wellness.",
  },
  {
    title: "Regular Physical Activity",
    description:
      "Exercise improves blood circulation, energy levels, and hormonal balance.",
  },
  {
    title: "Stress Management",
    description:
      "Meditation, breathing exercises, and yoga can help reduce stress and support mental well-being.",
  },
  {
    title: "Proper Sleep",
    description:
      "Adequate sleep allows the body to recover, repair tissues, and maintain hormonal balance.",
  },
  {
    title: "Hydration",
    description:
      "Drinking sufficient water helps maintain energy levels and supports metabolic processes.",
  },
];

const safetyTips = [
  "Always follow the recommended dosage instructions.",
  "Consult a healthcare professional if you have existing medical conditions.",
  "Pregnant or breastfeeding women should consult a doctor before using herbal supplements.",
  "Individuals under 18 years should avoid using adult wellness supplements unless advised by a healthcare professional.",
  "Herbal supplements should be used as part of a balanced diet and healthy lifestyle, not as a replacement for medical treatment.",
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
            A Holistic Ayurvedic Approach to Energy, Vitality & Hormonal Balance
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            In today’s fast-paced lifestyle, both men and women face increasing health challenges such as fatigue, hormonal imbalance, low stamina, stress, reduced immunity, and lack of physical vitality. Long working hours, mental pressure, unhealthy diet, poor sleep, and lack of physical activity gradually disturb the body’s natural balance.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda, the ancient Indian system of natural wellness, explains that true health depends on the balance of body, mind, and energy systems. When these systems remain balanced, individuals experience better stamina, improved mood, stronger immunity, and enhanced overall wellness.
          </p>

          <p className="text-foreground/80 leading-8">
            The concept of wellness in Ayurveda goes beyond treating symptoms. It focuses on strengthening the body internally so that both men and women can maintain long-term vitality and well-being.
          </p>

        </div>

        {/* Wellness Factors */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Understanding Wellness in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            According to Ayurvedic science, overall wellness is influenced by several key factors:
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

          <p className="text-foreground/80 leading-8 mt-8">
            When these systems function properly, the body naturally maintains strength, reproductive health, stamina, and mental clarity.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            However, when lifestyle habits become irregular, these systems may become imbalanced, leading to issues like low energy, stress, fatigue, and hormonal fluctuations.
          </p>

        </div>

        {/* Challenges */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Common Wellness Challenges in Modern Lifestyle
          </h2>
          <p className="text-foreground/80 leading-8 mb-6">Both men and women commonly experience health concerns due to modern lifestyle factors.</p>
          <div className="grid lg:grid-cols-2 gap-6">

            <Card className="p-6">

              <h3 className="text-2xl font-semibold mb-5">
                In Men
              </h3>
              <p className="text-foreground/80 leading-8 mb-5">Men may experience issues such as:</p>
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
              <p className="text-foreground/80 leading-8 mb-5">Women may experience challenges such as:</p>
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

          <p className="text-foreground/80 leading-8 mt-8">
            Ayurveda recommends strengthening the body naturally through proper nutrition, herbal support, and balanced daily routines.
          </p>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Ayurvedic Herbs Traditionally Used for Wellness Support
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Many Ayurvedic herbs have been traditionally used to support energy, vitality, and reproductive wellness.
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
            These herbs are often combined in balanced formulations designed to support overall wellness.
          </p>

        </div>

        {/* BMS Super X */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Natural Wellness Support with BMS Super X
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            At Bamuso Ayurveda, the goal is to combine traditional Ayurvedic wisdom with modern wellness needs.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            BMS Super X is formulated as an Ayurvedic wellness supplement designed to support:
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

          <p className="text-foreground/80 leading-8 mt-8">
            The formulation is inspired by traditional herbal combinations that have been used for centuries in Ayurvedic wellness practices.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            When used alongside a balanced lifestyle, herbal formulations like BMS Super X may help support the body’s natural strength and vitality.
          </p>

        </div>

        {/* Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Habits That Support Natural Vitality
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda emphasizes that herbal supplements work best when combined with healthy lifestyle habits.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Some important daily practices include:
          </p>

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
            Ayurveda views wellness as a combination of physical, mental, and emotional health. When these elements remain balanced, individuals naturally experience better energy, improved confidence, and a higher quality of life.
          </p>

          <p className="text-foreground/80 leading-8">
            Supporting the body through natural herbs, balanced nutrition, and mindful daily routines can help maintain vitality and wellness in both men and women.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            Herbal wellness supplements such as BMS Super X can be used as part of a broader lifestyle approach focused on strengthening the body naturally.
          </p>

        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety & Responsible Usage
            </h2>
            <p className="text-foreground/80 leading-8 ">While Ayurvedic products are based on natural ingredients, responsible usage is always important.</p>
            <p className="text-foreground/80 leading-8 ">Please keep the following safety recommendations in mind:</p>

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
            Modern lifestyle challenges often affect energy, stamina, and overall wellness. By combining traditional Ayurvedic knowledge, natural herbs, and healthy lifestyle habits, it is possible to support long-term vitality and well-being.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Both men and women can benefit from adopting natural wellness practices that strengthen the body internally and help maintain balance in daily life.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            At Bamuso Ayurveda, the focus is on providing herbal wellness solutions inspired by ancient Ayurvedic wisdom. Products like BMS Super X are designed to support natural vitality and help individuals maintain an active, balanced lifestyle.
          </p>

          <p className="text-foreground/80 leading-8">
            True wellness begins from within—and Ayurveda provides a natural path to achieving it.
          </p>

        </div>

      </section>
    </div>
  );
}