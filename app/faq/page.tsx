'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Mail, Phone } from 'lucide-react';

const FAQS = [
  {
    question: "What is BAMUSO Ayurveda?",
    answer: `BAMUSO Ayurveda is a trusted Ayurvedic brand that makes natural, herbal, and chemical-free wellness products. We bring ancient Ayurvedic wisdom to modern lifestyles safely and effectively.`,
  },
  {
    question: "Are BAMUSO products safe to use?",
    answer: `Yes, absolutely. All our products are made from high-quality herbs and natural ingredients. No Chemicals | No Parabens | No Sulfates | Lab-Tested | Safe for Daily Use.`,
  },
  {
    question: "Do your products have any side effects?",
    answer: `Ayurvedic products are generally safe. Results may vary individually. If you are pregnant, breastfeeding, or have any medical condition, consult a doctor before use.`,
  },
  {
    question: "How can I place an order?",
    answer: `You can order directly from our official website: www.bamuso.com. Choose your product → Add to Cart → Secure Checkout.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `We accept: UPI, Net Banking, Debit/Credit Cards, Wallets, Cash on Delivery (COD)*. (COD may have a small additional fee).`,
  },
  {
    question: "How long does delivery take?",
    answer: `Your order usually arrives in 3–7 business days. Order confirmation and tracking details will be sent via SMS/Email.`,
  },
  {
    question: "Can I return or replace a product?",
    answer: `Yes, returns/replacements are available under these conditions:
- Wrong product delivered
- Fully damaged product
- Unused condition
- Within 15 days
- Original packaging`,
  },
  {
    question: "How do I initiate a return or replacement?",
    answer: `You can send a return request via:
- Email: support@bamuso.com
- Website: Returns Form in your account section.`,
  },
  {
    question: "Do you ship outside India?",
    answer: `Currently, BAMUSO Ayurveda delivers only within India. International shipping coming soon.`,
  },
  {
    question: "Are BAMUSO products tested and certified?",
    answer: `Yes. Every product undergoes strict quality checks. We comply with GMP, AYUSH, ISO, and FSSAI standards to ensure safety and effectiveness.`,
  },
  {
    question: "Are BAMUSO products 100% herbal?",
    answer: `Yes, our formulations are made from authentic Ayurvedic herbs and natural extracts—no toxic chemicals.`,
  },
  {
    question: "Can I use BAMUSO products daily?",
    answer: `Yes, most products are safe for daily use. Follow the instructions on the product label.`,
  },
  {
    question: "Do you offer discounts or subscriptions?",
    answer: `Yes. We provide seasonal offers, festival discounts, and subscription benefits. Visit the website for current deals.`,
  },
  {
    question: "Do BAMUSO products work for everyone?",
    answer: `Ayurveda is natural, so results vary based on individual body type, diet, and lifestyle. Consistent use and a balanced routine improve results.`,
  },
  {
    question: "Can children use BAMUSO products?",
    answer: `Some products are suitable for children. We recommend consulting a pediatrician first.`,
  },
  {
    question: "Are your products cruelty-free?",
    answer: `Yes. BAMUSO Ayurveda products are 100% cruelty-free — not tested on animals.`,
  },
  {
    question: "Do you provide customer support?",
    answer: `Yes. Our dedicated support team is available Monday – Sunday, 9:00 AM – 9:00 PM.`,
  },
  {
    question: "Can I buy BAMUSO products offline?",
    answer: `Currently, our products are available online. Soon, they will be in offline Ayurvedic stores too.`,
  },
  {
    question: "Do you offer free consultation?",
    answer: `Yes, we provide free Ayurvedic guidance and lifestyle support. You can book consultation via our website.`,
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-4 text-center">
          Frequently Asked Questions (FAQs)
        </h1>
        <p className="text-lg text-foreground/70 text-center mb-12">
          Inspired by Nature, Powered by Trust — Clear and reliable answers to all your questions in one place.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="mb-2">Still Have Questions?</p>
          <p className="text-foreground/70">
            Reach us anytime at:
          </p>
          <p className="flex justify-center items-center gap-2 text-primary mt-2">
            <Mail className="w-4 h-4" />bamusoayurveda@gmail.com
          </p>
          <p className="flex justify-center items-center gap-2 text-primary mt-1">
            <Phone className="w-4 h-4" /> +91 9990-3590-97
          </p>
        </div>
      </div>
    </div>
  );
}
