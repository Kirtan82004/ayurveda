// app/blog/seasonal-ayurveda-home-remedies/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const winterTips = [
  "Consuming warm and nourishing foods",
  "Drinking herbal teas",
  "Regular oil massage (Abhyanga)",
  "Maintaining physical activity to improve circulation",
];

const summerTips = [
  "Drinking cooling beverages like coconut water and herbal drinks",
  "Eating light, hydrating foods such as fruits and vegetables",
  "Avoiding excessive sun exposure",
  "Practicing calming activities like meditation",
];

const rainyTips = [
  "Eating freshly prepared warm meals",
  "Avoiding excessive oily or heavy foods",
  "Drinking warm herbal water",
  "Supporting digestion with natural herbs",
];

const homeRemedies = [
  {
    title: "Ginger and Honey for Digestion",
    description:
      "Ginger is traditionally used in Ayurveda to support digestion and metabolism. Ginger with honey before meals may help stimulate digestive fire.",
  },
  {
    title: "Turmeric Milk for Immunity",
    description:
      "Turmeric milk, also known as golden milk, is traditionally used to support immunity and overall wellness.",
  },
  {
    title: "Triphala for Gentle Detox",
    description:
      "Triphala is a classical Ayurvedic formulation known for supporting digestion and natural detoxification.",
  },
  {
    title: "Herbal Teas for Relaxation",
    description:
      "Herbal teas made from tulsi, fennel, or mint are often used to support digestion and promote relaxation.",
  },
];

const bamusoProducts = [
  "Herbal digestive formulations",
  "Natural immunity support supplements",
  "Herbal detox blends",
  "Stress support formulations",
];

const lifestyleTips = [
  "Adjust diet according to weather conditions",
  "Maintain regular sleep schedules",
  "Practice yoga or light physical exercise",
  "Stay hydrated throughout the day",
  "Reduce stress through meditation or breathing exercises",
  "Choose natural, herbal wellness products when needed",
];

const safetyTips = [
  "Consult a healthcare professional if you have chronic medical conditions.",
  "Pregnant or breastfeeding women should seek medical advice before using herbal supplements.",
  "Follow recommended dosage instructions for herbal products.",
  "Avoid combining multiple herbal remedies without proper guidance.",
  "Home remedies should not replace professional medical treatment when necessary.",
];

export default function SeasonalAyurvedaPage() {
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
            Seasonal Ayurveda & Home Remedies
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            Aligning your lifestyle with nature
            to maintain balance, immunity,
            digestion, and long-term wellness throughout every season.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Ayurveda explains that the human body
            is deeply connected with natural seasonal cycles.
            Changes in weather influence the balance of
            Vata, Pitta, and Kapha doshas.
          </p>

          <p className="text-foreground/80 leading-8">
            Through the concept of Ritucharya
            (seasonal routine),
            Ayurveda teaches how diet,
            lifestyle, and daily habits
            can be adjusted according to seasonal changes.
          </p>

          <p className="text-foreground/80 leading-8">
            Seasonal Ayurvedic practices focus on prevention,
            helping the body naturally adapt to environmental changes
            while maintaining strong immunity,
            healthy digestion,
            and overall wellness.
          </p>

        </div>

        {/* Winter */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Winter Season (Hemant & Shishir)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            During winter,
            Vata and Kapha doshas tend to increase.
            The digestive fire becomes stronger,
            but cold weather may also lead to dryness,
            stiffness, and reduced circulation.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {winterTips.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Ginger tea, turmeric milk,
            and herbal decoctions
            are traditionally used during winter
            to support warmth and immunity.
          </p>

        </div>

        {/* Summer */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Summer Season (Grishma)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In summer,
            Pitta dosha tends to increase due to heat and dehydration.
            Excessive heat may contribute to fatigue,
            skin sensitivity,
            and irritability.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {summerTips.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Cooling ingredients such as aloe vera,
            rose water,
            and herbal drinks
            are commonly recommended during summer.
          </p>

        </div>

        {/* Rainy */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Rainy Season (Varsha)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            During the rainy season,
            digestion often becomes weaker
            and Vata imbalance may increase.
            This can lead to bloating,
            digestive discomfort,
            and reduced immunity.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {rainyTips.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Ginger, cumin,
            and herbal digestive preparations
            are traditionally used
            to support gut health during monsoon months.
          </p>

        </div>

        {/* Home Remedies */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Traditional Ayurvedic Home Remedies
          </h2>

          <div className="space-y-5">

            {homeRemedies.map((item, index) => (
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

        {/* Bamuso Ayurveda */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-6">
            Supporting Seasonal Wellness with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Bamuso Ayurveda combines traditional Ayurvedic wisdom
            with modern wellness needs
            through natural herbal formulations
            designed to support seasonal health and body balance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {bamusoProducts.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Lifestyle Tips */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Tips for Seasonal Health
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {lifestyleTips.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

        </div>

        {/* Preventive Healthcare */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Preventive Healthcare
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda strongly emphasizes prevention
            rather than waiting for illness to occur.
          </p>

          <p className="text-foreground/80 leading-8">
            By maintaining seasonal routines,
            mindful eating habits,
            and natural wellness practices,
            individuals can support long-term immunity,
            digestion,
            and emotional balance.
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
            Seasonal changes are a natural part of life,
            and Ayurveda provides practical ways
            to help the body adapt to these environmental shifts.
          </p>

          <p className="text-foreground/80 leading-8">
            Through seasonal diets,
            herbal wellness support,
            mindful routines,
            and traditional home remedies,
            individuals can maintain balance,
            vitality,
            and long-term wellness throughout the year.
          </p>

        </div>

      </section>
    </div>
  );
}