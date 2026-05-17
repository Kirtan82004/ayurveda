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
      "A traditional herbal blend that supports digestion, gut health, and gentle detoxification.",
  },
  {
    name: "Garcinia (Vrikshamla)",
    description:
      "Traditionally used to help regulate appetite and support healthy metabolism.",
  },
  {
    name: "Fenugreek (Methi)",
    description:
      "Known for supporting digestion and blood sugar balance.",
  },
  {
    name: "Ginger",
    description:
      "Helps stimulate digestion and improve metabolic function.",
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
      "Eating meals at consistent times supports digestion and helps prevent overeating.",
  },
  {
    title: "Eat Mindfully",
    description:
      "Avoid distractions while eating to improve digestion and reduce excess calorie intake.",
  },
  {
    title: "Stay Physically Active",
    description:
      "Regular walking, yoga, or light exercise supports metabolism and circulation.",
  },
  {
    title: "Prioritize Quality Sleep",
    description:
      "Proper sleep supports hormonal balance and healthy metabolism.",
  },
  {
    title: "Manage Stress",
    description:
      "Stress management helps prevent unhealthy eating habits and hormonal imbalance.",
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
            An Ayurvedic perspective on sustainable wellness,
            balanced metabolism, digestion, and healthy lifestyle habits.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="space-y-6">

          <p className="text-foreground/80 leading-8">
            In today’s modern world, many individuals struggle with
            weight gain, low energy, slow metabolism,
            and digestive imbalance due to unhealthy lifestyle habits.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda emphasizes a sustainable and balanced approach
            to weight management rather than quick-fix solutions.
          </p>

          <p className="text-foreground/80 leading-8">
            According to Ayurvedic philosophy,
            maintaining healthy body weight involves balancing digestion,
            metabolism, energy, and daily habits.
          </p>

        </div>

        {/* Doshas */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Understanding Body Balance in Ayurveda
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda explains body balance through
            three biological energies known as Doshas.
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
            Weight imbalance often occurs when Kapha dosha becomes excessive,
            leading to slow metabolism, lethargy,
            fat accumulation, and water retention.
          </p>

        </div>

        {/* Agni */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            The Role of Metabolism (Agni) in Weight Management
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            According to Ayurveda, Agni (digestive fire)
            is one of the most important factors
            in maintaining healthy body balance.
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

          <h3 className="text-2xl font-semibold mt-10 mb-5">
            Common Signs of Weak Digestion
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

        </div>

        {/* Herbs */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Ayurvedic Herbs that Support Healthy Weight Balance
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

        {/* Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            Lifestyle Habits for Natural Weight Balance
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

        {/* Modern Lifestyle */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Ayurvedic Support for Modern Lifestyle
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Modern routines often make it difficult to maintain
            ideal eating and exercise habits every day.
          </p>

          <p className="text-foreground/80 leading-8 mb-5">
            Carefully formulated Ayurvedic wellness products
            may help support digestion, metabolism,
            and natural detoxification processes.
          </p>

          <p className="text-foreground/80 leading-8">
            At BAMUSO Ayurveda, herbal wellness formulations
            are inspired by traditional Ayurvedic wisdom
            and designed to support modern lifestyle needs.
          </p>

        </div>

        {/* Sustainable Weight */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-8">
            The Importance of Sustainable Weight Management
          </h2>

          <p className="text-foreground/80 leading-8 mb-6">
            Ayurveda discourages extreme dieting
            and rapid weight loss methods
            that may negatively affect overall health.
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

        </div>

        {/* Conclusion */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold font-serif mb-5">
            Final Thoughts
          </h2>

          <p className="text-foreground/80 leading-8 mb-5">
            Healthy weight management is not about quick fixes
            or temporary dieting strategies.
          </p>

          <p className="text-foreground/80 leading-8">
            Ayurveda offers a holistic framework that combines
            mindful eating, herbal support,
            regular activity, stress management,
            and balanced lifestyle habits
            to support sustainable wellness and vitality.
          </p>

        </div>

      </section>
    </div>
  );
}