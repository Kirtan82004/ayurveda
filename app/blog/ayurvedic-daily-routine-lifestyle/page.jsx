// app/blog/ayurvedic-daily-routine-lifestyle/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Healthy digestion",
  "Stable energy levels",
  "Improved mental clarity",
  "Better sleep quality",
  "Stronger immunity",
];

const longTermBenefits = [
  "Improved digestion and metabolism",
  "Better energy levels and stamina",
  "Balanced mood and emotional stability",
  "Enhanced immunity",
  "Healthy skin and hair",
  "Overall physical and mental vitality",
];

const safetyTips = [
  "Follow recommended usage instructions for herbal supplements.",
  "Individuals with existing medical conditions should consult a healthcare professional before using new wellness products.",
  "Pregnant or breastfeeding women should seek medical advice before using herbal supplements.",
  "Maintain a balanced diet and active lifestyle for best results.",
  "Herbal products should complement, not replace, professional medical care when needed.",
];

export default function AyurvedicLifestylePage() {
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
            Ayurvedic Daily Routine & Lifestyle
          </h1>
            <p className="text-lg text-foreground/80 mt-6 leading-8">
            A Complete Guide to Living a Balanced and Healthy Life
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">
          <p className="text-foreground/80 leading-8">
            In today’s fast-paced world, people often struggle with fatigue, stress, digestive issues, poor sleep, and reduced immunity. Irregular eating habits, lack of proper rest, excessive screen time, and unhealthy lifestyle choices can gradually disturb the body’s natural balance.
          </p>

          <p className="text-foreground/80 leading-8">
           Ayurveda, the ancient Indian science of health and wellness, emphasizes that a disciplined daily routine is one of the most powerful ways to maintain physical, mental, and emotional balance. This concept is known as Dinacharya, which refers to a structured daily lifestyle designed to support the body’s natural rhythms.
          </p>

          <p className="text-foreground/80 leading-8">
           By following an Ayurvedic daily routine, individuals can strengthen digestion, improve energy levels, enhance mental clarity, and maintain overall well-being.
          </p>

        </div>

        {/* Dinacharya */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Concept of Dinacharya in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
           Dinacharya is based on the understanding that the body follows a natural biological clock influenced by the sun, seasons, and environmental rhythms. When daily activities such as waking up, eating, exercising, and sleeping are aligned with these natural cycles, the body functions more efficiently.
          </p>

          <p className="text-foreground/80 leading-8 mb-8">
           Ayurveda suggests that maintaining consistency in daily habits helps regulate the doshas (Vata, Pitta, and Kapha) and supports overall wellness.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">A balanced routine promotes:</p>
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

        {/* Morning Routine */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Morning Routine for Natural Energy
          </h2>
          <p className="text-foreground/80 leading-8 mb-5">The morning routine is considered one of the most important parts of Ayurvedic lifestyle practices.</p>

          <div className="space-y-6">

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                1️⃣ Waking Up Early (Brahma Muhurta)
              </h3>

              <p className="text-foreground/80 leading-8">
                Ayurveda recommends waking up during Brahma Muhurta, which is approximately 60–90 minutes before sunrise. This time of day is believed to be ideal for mental clarity, calmness, and spiritual awareness.
Early rising helps improve productivity, concentration, and overall vitality.

              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                2️⃣ Hydration and Cleansing
              </h3>

              <p className="text-foreground/80 leading-8">
               Drinking a glass of warm water in the morning may help support digestion and stimulate the body’s natural cleansing processes.
Traditional Ayurvedic practices such as tongue scraping and oil pulling are also commonly recommended for maintaining oral hygiene and detoxification.

              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                3️⃣ Physical Activity and Yoga
              </h3>

              <p className="text-foreground/80 leading-8">
                Gentle exercise, yoga, or stretching helps improve blood circulation, flexibility, and energy levels. Practices such as Surya Namaskar, breathing exercises (Pranayama), and meditation support both physical and mental wellness.
Regular physical activity also helps balance stress hormones and maintain metabolic health.
              </p>
            </Card>

          </div>

        </div>

        {/* Diet */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Balanced Ayurvedic Diet Throughout the Day
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda emphasizes that food plays a central role in maintaining health. A balanced diet supports digestion, nutrient absorption, and energy production.
          </p>
          <p className="text-foreground/80 leading-8 mb-5">
          Important dietary principles include:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              "Eating freshly prepared meals",
              "Including seasonal fruits and vegetables",
              "Avoiding excessive processed foods",
              "Maintaining regular meal timings",
              "Eating according to digestive capacity",
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>
          <p className="text-foreground/80 leading-8 mb-5">Strong digestion, known as Agni, is considered the foundation of good health in Ayurveda.</p>
        </div>

        {/* Herbal Support */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Herbal Support for Daily Wellness
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            In addition to lifestyle practices, Ayurvedic herbs and natural wellness products can help support daily health needs.
At Bamuso Ayurveda, herbal formulations are inspired by traditional Ayurvedic principles and designed to support modern lifestyles. These products may help complement healthy routines by supporting:

          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {[
              "Daily energy and vitality",
              "Digestive balance",
              "Stress management",
              "Immunity support",
              "Overall wellness maintenance",
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>
          <p className="text-foreground/80 leading-8 mb-5">Natural herbal supplements, herbal teas, and wellness formulations can be incorporated into daily routines to promote long-term health.</p>
          <p className="text-foreground/80 leading-8 mb-5">When combined with balanced diet and lifestyle practices, such herbal solutions can contribute to improved well-being.</p>

        </div>

        {/* Mental Wellness */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Mental Wellness and Stress Management
          </h2>
          <p className="text-foreground/80 leading-8 mb-5">Mental balance is an essential part of the Ayurvedic lifestyle. Stress and emotional imbalance can negatively affect digestion, sleep, and immunity.</p>
          <p className="text-foreground/80 leading-8 mb-5">Ayurveda recommends several practices to support mental wellness:</p>

          <div className="space-y-5">

            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                Meditation
              </h3>

              <p className="text-foreground/80 leading-8">
                Regular meditation helps calm the mind,
                improve focus.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                Deep Breathing
              </h3>

              <p className="text-foreground/80 leading-8">
                Pranayama breathing techniques help regulate
                the nervous system and reduce stress.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                Mindful Living
              </h3>

              <p className="text-foreground/80 leading-8">
                Spending time in nature, limiting excessive
                screen exposure, and maintaining social
                connections can positively influence mental health.
              </p>
            </Card>

          </div>

        </div>

        {/* Evening Routine */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Evening Routine for Better Sleep
          </h2>
          <p className="text-foreground/80 leading-8 mb-5">A proper evening routine prepares the body for restful sleep and recovery.</p>
          <p className="text-foreground/80 leading-8 mb-5">Recommended practices include:</p>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              "Eating light dinners",
              "Avoiding heavy meals late at night",
              "Reducing screen time before bedtime",
              "Practicing relaxation techniques such as meditation or reading",
            ].map((item, i) => (
              <Card key={i} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>
          <p className="text-foreground/80 leading-8 mb-5">Adequate sleep allows the body to repair tissues, restore energy levels, and maintain hormonal balance.</p>
        </div>

        {/* Long Term Benefits */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Long-Term Benefits of an Ayurvedic Lifestyle
          </h2>
          <p className="text-foreground/80 leading-8 mb-5">Following Ayurvedic daily routines consistently may support many aspects of health, including:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {longTermBenefits.map((item, i) => (
              <Card key={i} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>
          <p>
            The Ayurvedic approach focuses on prevention and long-term balance, rather than only addressing health issues after they appear.
          </p>
        </div>

        {/* Safety */}
        <div className="mt-14">

          <Card className="p-6 border border-border">

            <h2 className="text-3xl font-bold font-serif mb-6">
              Safety and Responsible Wellness Practices
            </h2>
            <p className="text-foreground/80 leading-8">While natural health practices and herbal products can support wellness, it is important to use them responsibly.</p>
            <h3 className="font-semibold text-lg">Please keep the following guidelines in mind:</h3>
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
            Ayurveda teaches that health is not achieved through a single remedy but through consistent daily habits that support the body’s natural rhythms.
          </p>

          <p className="text-foreground/80 leading-8">
          By following an Ayurvedic daily routine, maintaining balanced nutrition, practicing mindfulness, and incorporating natural herbal support from Bamuso Ayurveda, individuals can build a strong foundation for long-term health and vitality.
          </p>

           <p className="text-foreground/80 leading-8 mb-5">
           Living in harmony with natural rhythms allows the body and mind to function optimally, leading to improved energy, better resilience to stress, and a healthier, more balanced life.
          </p>
        </div>

      </section>
    </div>
  );
}