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
      "Ginger is widely used in Ayurveda to support digestion and metabolism. A small amount of ginger with honey before meals may help stimulate digestive fire.",
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
            Aligning Your Lifestyle with Nature for Better Health
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Nature constantly changes through different seasons,
            and according to Ayurveda,
            the human body is deeply connected
            with these natural cycles.
          </p>

          <p className="text-foreground/80 leading-8">
            Each season affects the balance
            of the body’s internal energies,
            known as Vata, Pitta,
            and Kapha doshas.
            When these energies remain balanced,
            the body stays healthy,
            energetic, and resilient.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda provides a detailed concept
            known as Ritucharya (Seasonal Routine),
            which explains how individuals can adjust
            their diet, lifestyle,
            and daily habits according to seasonal changes.
          </p>

          <p className="text-foreground/80 leading-8">
            By following these natural guidelines
            and incorporating simple home remedies,
            it becomes easier to maintain strong immunity,
            healthy digestion,
            and overall wellness throughout the year.
          </p>

          <p className="text-foreground/80 leading-8">
            Seasonal Ayurvedic practices focus on prevention
            rather than treatment,
            helping the body adapt naturally
            to environmental changes.
          </p>

        </div>

        {/* Seasonal Cycle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Understanding the Ayurvedic Seasonal Cycle (Ritucharya)
          </h2>

          <p className="text-foreground/80 leading-8">
            According to Ayurveda,
            the year is divided into different seasons,
            and each season influences
            specific doshas within the body.
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
            allowing the body to digest heavier foods.
            However, cold weather can also lead to dryness,
            joint stiffness,
            and reduced circulation.
          </p>

          <h3 className="text-2xl font-semibold mb-5">
            Recommended practices include:
          </h3>

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
            Home remedies such as ginger tea,
            turmeric milk,
            and herbal decoctions
            may help support immunity
            and warmth during cold months.
          </p>

        </div>

        {/* Summer */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Summer Season (Grishma)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In summer,
            Pitta dosha tends to increase
            due to heat and dehydration.
            Excessive heat may lead to fatigue,
            irritability,
            dehydration,
            and skin sensitivity.
          </p>

          <h3 className="text-2xl font-semibold mb-5">
            Helpful practices include:
          </h3>

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
            Natural ingredients such as aloe vera,
            rose water,
            and cooling herbs
            are often recommended in Ayurveda
            during the summer season.
          </p>

        </div>

        {/* Rainy */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Rainy Season (Varsha)
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            During the rainy season,
            digestion often becomes weaker,
            and Vata imbalance may increase.
            This can lead to digestive discomfort,
            bloating,
            and reduced immunity.
          </p>

          <h3 className="text-2xl font-semibold mb-5">
            Ayurveda suggests:
          </h3>

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
            Traditional remedies like ginger,
            cumin,
            and herbal digestive preparations
            are commonly used
            to support gut health during this time.
          </p>

        </div>

        {/* Home Remedies */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Traditional Ayurvedic Home Remedies
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Ayurvedic home remedies have been passed down
            through generations
            and are valued for their simplicity
            and natural effectiveness.
            Many of these remedies use herbs
            and ingredients commonly found in the kitchen.
          </p>

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

          <p className="text-foreground/80 leading-8 mt-8">
            While these remedies are simple,
            they should always be used in moderation
            and as part of a balanced lifestyle.
          </p>

        </div>

        {/* Bamuso Ayurveda */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-6">
            Supporting Seasonal Wellness with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            In addition to traditional home remedies,
            herbal wellness products inspired
            by Ayurvedic principles
            can support the body
            during seasonal changes.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            At Bamuso Ayurveda,
            natural formulations are designed
            with the goal of supporting daily health
            and adapting to modern lifestyle challenges.
          </p>

          <p className="text-foreground/80 leading-8 mb-8">
            Products such as:
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

          <p className="text-foreground/80 leading-8 mt-8">
            When combined with proper diet,
            hydration,
            and lifestyle habits,
            these herbal solutions
            can help maintain internal balance
            throughout the year.
          </p>

        </div>

        {/* Lifestyle Tips */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Tips for Seasonal Health
          </h2>

          <p className="text-foreground/80 leading-8 mb-8">
            Ayurveda emphasizes that wellness depends
            not only on remedies
            but also on daily lifestyle practices.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {lifestyleTips.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Following these practices
            helps the body adapt more effectively
            to seasonal changes.
          </p>

        </div>

        {/* Preventive Healthcare */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Preventive Healthcare
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            One of the most valuable teachings of Ayurveda
            is prevention.
            Instead of waiting for illness to occur,
            Ayurveda encourages individuals
            to maintain balance through seasonal routines,
            mindful eating,
            and natural remedies.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By respecting the body’s natural rhythms
            and making small lifestyle adjustments
            throughout the year,
            it is possible to maintain strong immunity,
            healthy digestion,
            and stable mental well-being.
          </p>

          <p className="text-foreground/80 leading-8">
            Seasonal awareness allows individuals
            to work with nature rather than against it,
            leading to better long-term health outcomes.
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

            <p className="text-foreground/80 leading-8 mt-8">
              Responsible use ensures
              that natural remedies remain safe and beneficial.
            </p>

          </Card>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Conclusion
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Seasonal changes are a natural part of life,
            and the body constantly adapts
            to these environmental shifts.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda provides a comprehensive system
            that helps individuals maintain health
            and balance throughout the year
            by aligning daily routines with nature.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Through seasonal diets,
            simple home remedies,
            herbal wellness support,
            and mindful lifestyle habits,
            it is possible to maintain strong immunity,
            stable digestion,
            and overall vitality.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By integrating the wisdom of Ayurveda
            with modern wellness practices,
            Bamuso Ayurveda aims to support individuals
            in maintaining a balanced
            and healthy lifestyle in every season.
          </p>

          <p className="text-foreground/80 leading-8">
            True wellness begins
            when we understand the rhythms of nature
            and learn to live in harmony with them.
          </p>

        </div>

      </section>
    </div>
  );
}