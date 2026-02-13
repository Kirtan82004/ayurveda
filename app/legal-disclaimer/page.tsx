'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
                The Ayurvedic products available on Bamuso Ayurveda are developed using traditional
                Ayurvedic knowledge, natural herbs, and wellness principles. These products are meant to
                support general health and lifestyle balance.
              </p>
              <p className="mt-1 text-foreground/80">
                They are not intended to diagnose, treat, cure, or
                prevent any disease, <span className='text-red-400'>as defined under Indian laws.</span>  
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Regulatory Compliance</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• All products are manufactured in facilities that comply with the Drugs & Cosmetics Act,
                  1940, relevant Rules, and applicable AYUSH guidelines.</li>
                <li>• Information on this website, product pages, packaging, or promotional material is
                  provided only for educational and informational purposes.</li>
                <li>• Nothing on our website should be interpreted as medical or therapeutic advice unless
                  explicitly stated by a registered medical practitioner.</li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Medical Advice Disclaimer</h2>
              <p className="text-foreground/80">
               Ayurvedic results vary from person to person based on body type, diet, lifestyle, medical conditions, and consistency of use.
              </p>

              <p className="mt-1 text-foreground/80">Please <span className="font-bold">consult a qualified medical practitioner</span> before using our products if you are: </p>
              <ul className='ml-2.5'>
                <li>• Pregnant or breastfeeding</li>
                <li>• Living with chronic or pre-existing medical conditions </li>
                <li>• Taking prescription medicines </li>
                <li>• Undergoing medical treatment </li>
                <li>• Allergic to specific herbs  </li>
              </ul>
              <p className="text-foreground/80">Our content, blogs, videos, and product descriptions are <span className="font-bold">not a substitute</span> for clinical diagnosis, treatment, or professional medical guidance. </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-foreground/80">Bamuso Ayurveda shall not be responsible or liable for: </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Any side effects caused by misuse, overuse, or failure to follow dosage instructions </li>
                <li>• Self-diagnosis or self-treatment based solely on website information  </li>
                <li>• Any damage, loss, or consequences arising from reliance on online content </li>
                <li>• Variations in product results among individuals  </li>
                <li>• Minor color/packaging variations due to digital display differences </li>
              </ul>
              <p className="mt-1 text-foreground/80">If you are dissatisfied with any part of our website or information, your only remedy is to 
                <span className="font-bold"> discontinue using the website or product.</span> </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Third-Party Links</h2>
              <p className="text-foreground/80">
                Our website may contain links to external websites, blogs, or platforms for convenience or
                informational purposes.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Bamuso Ayurveda does <span className="font-bold">not endorse or control</span>  such websites. </li>
                <li>• We do <span className="font-bold">not guarantee</span> the accuracy, safety, or reliability of third-party content or services.  </li>
                <li>• Users are advised to review their respective <span className="font-bold">privacy and legal policies</span> before
                  interacting with third-party sites. </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Legal Jurisdiction</h2>
              <p className="text-foreground/80">
                This Disclaimer and all related matters are governed by the laws of <span className="font-bold">India</span>.
                
              </p>
              <p className="mt-1 text-foreground/80">In case of disputes, claims, or legal proceedings, the jurisdiction will exclusively lie with the
                Courts of Delhi, India. </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Acceptance of Terms</h2>
              <p className="text-foreground/80">
                By accessing our website, purchasing our products, or using our services, you acknowledge
                and agree that:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• You have read the Legal Disclaimer </li>
                <li>• You understand the nature and limitations of Ayurvedic products  </li>
                <li>• You are using our products voluntarily and responsibly </li>
                <li>• You accept all terms stated in this Disclaimer </li>
              </ul>
              <p className="text-foreground/80">
                If you do not agree with these terms, please refrain from buying or using our products or website services. 
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Legal Policies Overview</h2>
              <p className="text-foreground/80">
                Below are short summaries for users who want a quick glance at our legal structure.
              </p>
              <h3 className="text-xl font-serif font-bold mt-4 mb-2 text-foreground">Privacy Policy (Brief)</h3>
              <p className="text-foreground/80">
                We collect and protect your data (name, email, phone, address, device info) to process orders,
                improve services, and ensure platform security. Cookies may be used to personalize
                experience. We do not sell your data to third parties.
                
              </p>
              <p className="mt-1 text-foreground/80">For concerns, contact: <span className='font-bold'>support@bamuso.com</span>  .</p>
              <h3 className="text-xl font-serif font-bold mt-4 mb-2 text-foreground">Terms of Service (Brief)</h3>
              <p className="text-foreground/80">Prices in INR, personal-use only, limited returns, shipping timelines, refunds, and cancellations
                governed by clear guidelines. </p>
              <h3 className="text-xl font-serif font-bold mt-4 mb-2 text-foreground">Return, Refund & Shipping Policies</h3>
              <p className="text-foreground/80">
                Returns allowed only in specific cases (wrong/damaged product). Refunds processed within
                7–15 days depending on payment mode.
              </p>

            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
