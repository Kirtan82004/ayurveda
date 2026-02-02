'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Legal Disclaimer</h1>
          </div>

          <p className="text-foreground/70 mb-8">Last Updated: 2025</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-foreground/80">
                The Ayurvedic products on Bamuso Ayurveda are made using traditional knowledge, natural herbs, and wellness principles. They are intended to support general health and lifestyle balance and are not meant to diagnose, treat, cure, or prevent any disease.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Regulatory Compliance</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>All products comply with the Drugs & Cosmetics Act, AYUSH guidelines, and relevant rules.</li>
                <li>Information on our website or packaging is for educational purposes only.</li>
                <li>Nothing should be considered medical advice unless given by a registered practitioner.</li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Medical Advice Disclaimer</h2>
              <p className="text-foreground/80">
                Results may vary based on individual body type, diet, lifestyle, medical conditions, and consistency. Consult a medical practitioner if you are pregnant, breastfeeding, have a medical condition, or are taking medications.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>We are not responsible for misuse, overuse, or ignoring dosage instructions.</li>
                <li>Product results may vary per individual.</li>
                <li>Minor packaging/color differences may occur.</li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Third-Party Links</h2>
              <p className="text-foreground/80">
                We may link to external websites but do not control or guarantee their content, safety, or reliability.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Legal Jurisdiction</h2>
              <p className="text-foreground/80">
                All matters are governed by the laws of India. Disputes will fall under the jurisdiction of Delhi courts exclusively.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Acceptance of Terms</h2>
              <p className="text-foreground/80">
                By using our website or products, you acknowledge that you have read and understood this disclaimer and use our products responsibly.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-foreground/80 mb-4">
                For queries regarding this legal disclaimer, reach out to us:
              </p>
              <div className="space-y-2 text-foreground/80">
                <p><strong>Email:</strong> support@bamuso.com</p>
                <p><strong>WhatsApp:</strong> +91 9990-3590-97</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
