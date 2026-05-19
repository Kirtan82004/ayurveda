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
      "Triphala is a well-known Ayurvedic herbal combination made from three fruits: Amalaki, Bibhitaki, and Haritaki. It is traditionally used to support digestion, detoxification, and gut health.",
  },
  {
    name: "Brahmi",
    description:
      "Brahmi is valued in Ayurveda for supporting memory, focus, and mental clarity. It is often used to help maintain cognitive wellness and relaxation.",
  },
  {
    name: "Ashwagandha",
    description:
      "Ashwagandha is widely known as an adaptogenic herb that helps the body adapt to stress and supports overall vitality and mental balance.",
  },
  {
    name: "Tulsi (Holy Basil)",
    description:
      "Tulsi is considered a powerful natural herb that helps support immunity, respiratory health, and emotional well-being.",
  },
  {
    name: "Shankhpushpi",
    description:
      "Shankhpushpi is traditionally used in Ayurveda to support memory, concentration, and calmness of the mind.",
  },
];

const stressReliefPractices = [
  {
    title: "Meditation",
    description:
      "Daily meditation helps calm the mind, reduce anxiety, and improve emotional stability.",
  },
  {
    title: "Yoga",
    description:
      "Yoga supports both physical flexibility and mental relaxation. Certain breathing exercises (Pranayama) are especially effective for stress management.",
  },
  {
    title: "Digital Detox",
    description:
      "Reducing excessive screen time helps relax the nervous system and improve sleep quality.",
  },
  {
    title: "Quality Sleep",
    description:
      "Sleep plays a crucial role in mental recovery and emotional balance. Ayurveda emphasizes maintaining a consistent sleep schedule.",
  },
  {
    title: "Healthy Diet",
    description:
      "A diet rich in fresh fruits, vegetables, whole grains, and herbal ingredients supports both physical and mental wellness.",
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
  "Herbal products should not be used as a substitute for professional medical treatment.",
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
            An Ayurvedic Guide to Cleansing the Body and Calming the Mind
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            Modern lifestyles have significantly increased stress levels and exposure to environmental toxins. Long working hours, irregular sleep patterns, unhealthy diets, pollution, and excessive digital screen usage can overload the body and mind. Over time, this may lead to fatigue, digestive disturbances, mental exhaustion, poor concentration, and emotional imbalance.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda, the ancient science of natural health and wellness, emphasizes that true well-being comes from maintaining balance within the body and mind. When toxins accumulate and mental stress increases, the body’s natural harmony is disturbed. Detoxification and mental relaxation practices play an essential role in restoring this balance.
          </p>

          <p className="text-foreground/80 leading-8">
            Through natural herbs, proper diet, and mindful lifestyle practices, Ayurveda offers effective ways to support detoxification, reduce stress, and promote mental clarity.
          </p>

        </div>

        {/* Stress & Mental Wellness */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Understanding Stress and Mental Wellness in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In Ayurveda, mental health is closely connected with the balance of Vata, Pitta, and Kapha doshas, as well as the stability of the mind (Manas).
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Stress often increases Vata imbalance, which can lead to symptoms such as:
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
            When stress continues for long periods, it may also affect digestion, immunity, and hormonal balance. Ayurveda addresses these issues by strengthening the nervous system and supporting the body’s natural adaptability to stress.
          </p>

        </div>

        {/* Detoxification */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Importance of Detoxification (Shodhana) in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda teaches that toxins, known as Ama, accumulate in the body due to improper digestion, unhealthy food habits, and environmental exposure.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            When Ama builds up in the body, it may contribute to:
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

          <p className="text-foreground/80 leading-8 mb-6">
            Detoxification helps remove these accumulated toxins and restore the natural balance of bodily systems.
          </p>

          <h3 className="text-foreground/80 mb-5">
            Ayurvedic Detox Practices include:
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

          <p className="text-foreground/80 leading-8 mt-8">
            These methods gently support the body’s natural cleansing processes.
          </p>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Ayurvedic Herbs for Detox and Mental Wellness
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda offers a variety of natural herbs that have been traditionally used to support detoxification and mental balance.
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
            These herbs have been part of Ayurvedic wellness practices for centuries and continue to be valued for their natural benefits.
          </p>

        </div>

        {/* Stress Relief Practices */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Natural Practices for Stress Relief
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda recommends several lifestyle practices that help maintain mental balance and reduce stress.
          </p>

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
            At Bamuso Ayurveda, the aim is to combine traditional Ayurvedic knowledge with modern wellness needs. Natural herbal formulations inspired by Ayurvedic principles are designed to support overall health and daily well-being.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Products such as herbal detox supplements, stress support capsules, digestive formulations, and herbal teas may help support the body’s natural cleansing process and promote relaxation.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            These herbal wellness solutions are designed to complement healthy lifestyle habits and encourage long-term balance in the body and mind.
          </p>

          <p className="text-foreground/80 leading-8">
            By incorporating natural herbs, mindful routines, and proper nutrition, individuals can take meaningful steps toward maintaining mental clarity, reducing stress, and supporting overall wellness.
          </p>

        </div>

        {/* Mind Body Connection */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Mind–Body Connection
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda emphasizes that the mind and body are deeply interconnected. Emotional stress can affect digestion, sleep, and immunity, while physical imbalances may influence mood and mental clarity.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Maintaining a balanced lifestyle that includes proper nutrition, herbal support, relaxation techniques, and regular physical activity helps nurture both mental and physical health.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            When the body is detoxified and the mind is calm, individuals often experience:
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
            <p className="text-foreground/80 leading-8">
            While herbal wellness practices are generally gentle and natural, it is important to use them responsibly.</p>

            <p className="text-foreground/80 leading-8">
            Please keep the following safety guidelines in mind:
            
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

            <p className="text-foreground/80 leading-8 mt-6">
              Responsible use of natural wellness products ensures long-term benefits and safety.
            </p>

          </Card>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Conclusion
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Detoxification, stress management, and mental wellness are essential components of a healthy and balanced life. In today’s demanding world, taking time to support the body and mind through natural methods has become more important than ever.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda offers a time-tested approach that focuses on cleansing the body, calming the mind, and restoring internal harmony.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By combining natural herbs, mindful daily routines, and supportive wellness products from Bamuso Ayurveda, individuals can take meaningful steps toward improving their overall health, vitality, and mental clarity.
          </p>

          <p className="text-foreground/80 leading-8">
            True wellness begins when the body is balanced, the mind is calm, and lifestyle habits support long-term health.
          </p>

        </div>

      </section>
    </div>
  );
}