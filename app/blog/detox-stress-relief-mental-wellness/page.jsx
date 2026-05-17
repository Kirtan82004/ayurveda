// app/blog/detox-stress-relief-mental-wellness/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const stressSymptoms = [
  "Anxiety and restlessness",
  "Difficulty concentrating",
  "Insomnia or disturbed sleep",
  "Mental fatigue",
  "Nervousness and irritability",
];

const amaEffects = [
  "Low energy levels",
  "Digestive discomfort",
  "Brain fog",
  "Weak immunity",
  "Skin problems",
  "Emotional imbalance",
];

const detoxPractices = [
  "Herbal detox support",
  "Light and balanced diet",
  "Adequate hydration",
  "Regular physical activity",
  "Proper sleep cycles",
];

const herbs = [
  {
    name: "Triphala",
    description:
      "A traditional Ayurvedic herbal blend used to support digestion, detoxification, and gut wellness.",
  },
  {
    name: "Brahmi",
    description:
      "Traditionally valued for supporting memory, focus, mental clarity, and relaxation.",
  },
  {
    name: "Ashwagandha",
    description:
      "An adaptogenic herb traditionally used to help the body adapt to stress and support vitality.",
  },
  {
    name: "Tulsi (Holy Basil)",
    description:
      "Traditionally used to support immunity, respiratory wellness, and emotional balance.",
  },
  {
    name: "Shankhpushpi",
    description:
      "Traditionally valued for supporting concentration, calmness, and cognitive wellness.",
  },
];

const stressReliefPractices = [
  {
    title: "Meditation",
    description:
      "Daily meditation helps calm the mind, improve emotional stability, and reduce stress.",
  },
  {
    title: "Yoga",
    description:
      "Yoga and breathing exercises (Pranayama) support both physical flexibility and mental relaxation.",
  },
  {
    title: "Digital Detox",
    description:
      "Reducing excessive screen time helps relax the nervous system and improve sleep quality.",
  },
  {
    title: "Quality Sleep",
    description:
      "Consistent and proper sleep supports emotional balance and mental recovery.",
  },
  {
    title: "Healthy Diet",
    description:
      "Fresh fruits, vegetables, whole grains, and herbal ingredients support physical and mental wellness.",
  },
];

const mindBodyBenefits = [
  "Improved concentration",
  "Better sleep quality",
  "Greater emotional stability",
  "Enhanced energy levels",
  "Stronger immune response",
];

const safetyTips = [
  "Always follow recommended dosage instructions for herbal supplements.",
  "Individuals with existing medical conditions should consult a healthcare professional before starting new herbal products.",
  "Pregnant or breastfeeding women should seek medical advice before using detox or herbal supplements.",
  "Herbal products should not replace professional medical treatment.",
  "Maintain a balanced diet and healthy lifestyle for best results.",
];

export default function DetoxMentalWellnessPage() {
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
            Detox, Stress Relief & Mental Wellness
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            An Ayurvedic guide to cleansing the body,
            calming the mind,
            and supporting long-term mental and physical balance.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Modern lifestyles often expose the body and mind
            to high stress levels,
            unhealthy routines,
            environmental toxins,
            and mental exhaustion.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda explains that true wellness comes from
            maintaining balance within both the body and mind.
          </p>

          <p className="text-foreground/80 leading-8">
            Through detoxification, herbal wellness support,
            proper nutrition, and mindful lifestyle habits,
            Ayurveda offers natural ways
            to restore internal harmony and mental clarity.
          </p>

        </div>

        {/* Stress & Mental Wellness */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Understanding Stress and Mental Wellness in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda associates stress and mental imbalance
            with disturbances in the doshas,
            especially increased Vata imbalance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {stressSymptoms.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Long-term stress may also negatively affect digestion,
            immunity, sleep quality,
            and hormonal balance.
          </p>

        </div>

        {/* Detoxification */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Detoxification (Shodhana) in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda explains that toxins,
            known as Ama,
            may accumulate in the body due to poor digestion,
            unhealthy diet,
            and environmental exposure.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

            {amaEffects.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <h3 className="text-2xl font-semibold mb-5">
            Ayurvedic Detox Practices
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">

            {detoxPractices.map((item, index) => (
              <Card key={index} className="p-4">
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
            Ayurvedic Herbs for Detox and Mental Wellness
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

        {/* Stress Relief Practices */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Natural Practices for Stress Relief
          </h2>

          <div className="space-y-5">

            {stressReliefPractices.map((item, index) => (
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

          <h2 className="text-3xl font-bold font-serif mb-5">
            Supporting Wellness with Bamuso Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Bamuso Ayurveda combines traditional Ayurvedic wisdom
            with modern wellness needs
            through carefully selected herbal formulations.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Herbal detox supplements,
            stress support capsules,
            digestive wellness products,
            and herbal teas
            may help support the body’s natural balance
            and relaxation processes.
          </p>

          <p className="text-foreground/80 leading-8">
            These wellness solutions are designed
            to complement healthy lifestyle habits
            and support long-term physical and mental well-being.
          </p>

        </div>

        {/* Mind Body Connection */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Mind–Body Connection
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda emphasizes that emotional and physical health
            are deeply interconnected.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {mindBodyBenefits.map((item, index) => (
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
            Detoxification, stress management,
            and mental wellness
            are essential for maintaining
            a balanced and healthy lifestyle.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda offers a natural,
            time-tested approach
            that supports cleansing the body,
            calming the mind,
            and restoring long-term internal harmony.
          </p>

        </div>

      </section>
    </div>
  );
}