// app/blog/healthy-weight-management-body-balance/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const doshas = [
  {
    title: "Vata",
    description:
      "Responsible for movement and nervous system function.",
  },
  {
    title: "Pitta",
    description:
      "Responsible for metabolism and digestion.",
  },
  {
    title: "Kapha",
    description:
      "Responsible for structure, stability, and body mass.",
  },
];

const agniBenefits = [
  "Food is properly digested",
  "Nutrients are efficiently absorbed",
  "Toxins are eliminated",
  "Energy levels remain stable",
];

const weakDigestionSigns = [
  "Bloating and gas",
  "Sluggish metabolism",
  "Fatigue after meals",
  "Weight gain despite eating small portions",
  "Sugar cravings and irregular hunger patterns",
];

const herbs = [
  {
    name: "Triphala",
    description:
      "A traditional herbal blend made from three fruits that helps support digestion, gut health, and gentle detoxification.",
  },
  {
    name: "Garcinia (Vrikshamla)",
    description:
      "Often used in Ayurveda to help regulate appetite and support healthy metabolism.",
  },
  {
    name: "Fenugreek (Methi)",
    description:
      "Known for supporting blood sugar balance and digestion.",
  },
  {
    name: "Ginger",
    description:
      "Helps stimulate digestive enzymes and improve metabolism.",
  },
  {
    name: "Cinnamon",
    description:
      "Supports healthy blood sugar levels and metabolic balance.",
  },
];

const lifestyleHabits = [
  {
    title: "Maintain Regular Meal Timing",
    description:
      "Eating meals at consistent times helps regulate digestion and prevents overeating.",
  },
  {
    title: "Eat Mindfully",
    description:
      "Avoid eating while watching screens or multitasking. Mindful eating improves digestion and prevents excess calorie consumption.",
  },
  {
    title: "Stay Physically Active",
    description:
      "Regular movement such as walking, yoga, or light exercise supports metabolism and improves circulation.",
  },
  {
    title: "Prioritize Quality Sleep",
    description:
      "Lack of sleep can disrupt hormones that regulate hunger and metabolism.",
  },
  {
    title: "Manage Stress",
    description:
      "Chronic stress can increase cortisol levels, leading to weight gain and unhealthy eating habits.",
  },
];

const healthyWeightGoals = [
  "Improving digestion",
  "Enhancing metabolic efficiency",
  "Supporting detoxification",
  "Maintaining hormonal balance",
  "Developing consistent healthy habits",
];

export default function HealthyWeightPage() {
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
            Healthy Weight Management & Body Balance
          </h1>

          <p className="text-lg text-foreground/80 mt-6 leading-8">
            An Ayurvedic Perspective on Sustainable Wellness
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            In the modern world, weight management has become one of the most common health concerns. Many people struggle with weight gain, slow metabolism, low energy, and digestive imbalance due to sedentary lifestyles, processed foods, stress, and irregular eating habits.
          </p>

          <p className="text-foreground/80 leading-8">
            While modern approaches often focus on quick weight loss solutions, Ayurveda emphasizes a balanced and sustainable approach to weight management. According to Ayurvedic philosophy, maintaining a healthy weight is not just about reducing body fat but about achieving internal balance between digestion, metabolism, energy, and lifestyle habits.
          </p>

          <p className="text-foreground/80 leading-8">
            This holistic perspective allows the body to naturally maintain a healthy weight while improving overall vitality and long-term wellness.
          </p>

        </div>

        {/* Doshas */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Understanding Body Balance in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            In Ayurveda, body balance is governed by three fundamental energies known as Doshas:
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
            Weight imbalance often occurs when Kapha dosha becomes excessive, leading to slow metabolism, fat accumulation, lethargy, and water retention.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            At the same time, weak digestive fire known as Agni can prevent the body from properly processing food. This results in the formation of toxins called Ama, which can further slow metabolism and contribute to weight gain.
          </p>

          <p className="text-foreground/80 leading-8 mt-6">
            Ayurveda focuses on restoring the balance of doshas, strengthening digestive fire, and supporting natural detoxification processes.
          </p>

        </div>

        {/* Agni */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Role of Metabolism (Agni) in Weight Management
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            According to Ayurvedic science, Agni—the digestive fire—is the most important factor in maintaining a healthy weight.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            When Agni is strong:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">

            {agniBenefits.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            However, when digestion becomes weak due to unhealthy habits, the body starts accumulating toxins and excess fat.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-5">
            Some common signs of weak digestion include:
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">

            {weakDigestionSigns.map((item, index) => (
              <Card key={index} className="p-4">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            Strengthening digestive fire through proper diet, herbal support, and lifestyle practices is therefore essential for healthy weight management.
          </p>

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Ayurvedic Herbs that Support Healthy Weight Balance
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda offers a variety of natural herbs that help support metabolism, digestion, and internal detoxification. These herbs have traditionally been used to promote natural body balance rather than extreme weight loss.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Some well-known Ayurvedic herbs include:
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
            These herbs are commonly included in Ayurvedic formulations designed to support metabolism and digestive health.
          </p>

        </div>

        {/* Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Habits for Natural Weight Balance
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda strongly emphasizes that lifestyle habits play a major role in maintaining healthy body weight. Simple daily practices can significantly improve metabolic function and overall well-being.
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

        {/* Modern Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Ayurvedic Support for Modern Lifestyle
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Modern lifestyles often make it difficult to maintain perfect diet and exercise habits every day. This is where carefully formulated Ayurvedic wellness products can play a supportive role.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Natural herbal formulations can help support metabolism, digestion, and internal detoxification processes while working in harmony with the body’s natural systems.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            At BAMUSO Ayurveda, the focus is on combining traditional Ayurvedic wisdom with modern wellness needs. Carefully selected herbal ingredients are used to create formulations designed to support overall vitality and healthy body balance.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Products such as herbal metabolism-support capsules, digestive wellness blends, and detox formulations can complement a balanced lifestyle and help individuals stay consistent on their wellness journey.
          </p>

          <p className="text-foreground/80 leading-8">
            These natural solutions are designed not as quick fixes but as long-term wellness support for modern individuals seeking sustainable health improvements.
          </p>

        </div>

        {/* Sustainable Weight */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Importance of Sustainable Weight Management
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            One of the most important principles in Ayurveda is that extreme dieting and rapid weight loss can harm the body.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Instead, Ayurveda encourages gradual and sustainable lifestyle improvements that support long-term health.
          </p>

          <p className="text-foreground/80 leading-8 mb-6">
            Healthy weight management should focus on:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {healthyWeightGoals.map((item, index) => (
              <Card key={index} className="p-5">
                <p className="text-foreground/80">
                  ✔ {item}
                </p>
              </Card>
            ))}

          </div>

          <p className="text-foreground/80 leading-8 mt-8">
            This approach ensures that weight balance is achieved naturally without compromising energy levels or overall health.
          </p>

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Final Thoughts
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Healthy weight management is not about quick fixes or temporary diets. It is about creating a balanced relationship between the body, food, lifestyle, and natural biological rhythms.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Ayurveda offers a holistic framework that helps restore this balance through mindful eating, herbal support, regular activity, and stress management.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            By strengthening digestion, supporting metabolism, and maintaining a balanced lifestyle, individuals can achieve sustainable body balance and long-term wellness.
          </p>

          <p className="text-foreground/80 leading-8">
            Natural Ayurvedic wellness solutions, combined with healthy habits, can provide valuable support in maintaining vitality, energy, and overall well-being.
          </p>

        </div>

      </section>
    </div>
  );
}