'use client';

import { Card } from '@/components/ui/card';
import { Mail, MapPin, Globe,ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Terms & Conditions</h1>
          </div>

          <p className="text-foreground/70 mb-8">Last Updated: January 2025</p>

        <Card className="p-8 space-y-6 border border-border">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Welcome to Bamuso Ayurveda. By accessing or using our website <a href="https://www.bamuso.com" className="text-primary underline">www.bamuso.com</a> and 
purchasing our Ayurvedic products, you agree to the terms mentioned below. Please read them 
carefully. 
          </p>

          {/* 1. General Terms */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">1. General Terms</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>All prices listed on our website are in Indian Rupees (INR).</li>
              <li>All Bamuso Ayurveda products are strictly for personal use only. Reselling, redistribution, or commercial use without written permission is prohibited.</li>
              <li>We reserve the right to refuse service, cancel orders, or limit product quantities at our discretion.</li>
              <li>Product images shown are for representation. Minor color variations may occur due to screen/device settings.</li>
            </ul>
          </div>

          {/* 2. Return & Replacement Policy */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">2. Return & Replacement Policy</h2>
            <p className="text-foreground/70">
             We offer a smooth and transparent return process. You can request a return or replacement 
only if: 
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>You received the wrong product</li>
              <li>The product is damaged or leaking on arrival</li>
            </ul>
            <p className="text-foreground/70">Return Conditions:</p>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>The request must be raised within 15 days of delivery.</li>
              <li>Product must be unused, undamaged, and in original packaging.</li>
              <li>Combo kits or products purchased as part of a combo cannot be returned individually.</li>
              <li>Returns are valid only for orders placed on www.bamuso.com.</li>
              <li>Each product is eligible for replacement only once.</li>
            </ul>
            <p className="text-foreground/70">How to initiate a return:</p>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Fill the Returns Form in your “My Account” section, or</li>
              <li>Email us at <a href="mailto:support@bamuso.com" className="text-primary underline">support@bamuso.com</a></li>
            </ul>
          </div>

          {/* 3. Shipping & Delivery */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">3. Shipping & Delivery Policy</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Orders are delivered within 3–7 business days depending on your location.</li>
              <li>Orders below ₹699 carry a ₹49 shipping charge.</li>
              <li>Cash on Delivery (COD) orders include an additional ₹50 fee.</li>
              <li>Once shipped, you will receive SMS/Email updates with tracking details.</li>
            </ul>
          </div>

          {/* 4. Refund Policy */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">4. Refund Policy</h2>
            <p className="text-foreground/70">Refund timelines:</p>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Prepaid Orders: 7–10 working days</li>
              <li>Approved Returns: Within 15 days of product pickup</li>
              <li>E-wallet Payments: Within 24 hours</li>
              <li>COD Refunds: Processed via NEFT/UPI only</li>
            </ul>
            <p className="text-foreground/70">Refund mode:</p>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Prepaid: Refunded to the original payment method</li>
              <li>COD: Refunded through bank/UPI details shared by the customer</li>
            </ul>
            <p className="text-foreground/70">(COD & shipping fees are non-refundable.)</p>
          </div>

          {/* 5. Order Cancellation Policy */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">5. Order Cancellation Policy</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Orders can be cancelled within 2 hours of placing the order by emailing <a href="mailto:support@bamuso.com" className="text-primary underline">support@bamuso.com</a>.</li>
              <li>Orders cannot be cancelled once shipped.</li>
              <li>If we cancel an order due to stock issues or incorrect details, a full refund will be issued within 7–15 business days.</li>
            </ul>
          </div>

          {/* 6. Privacy Policy */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">6. Privacy Policy</h2>
            <p className="text-foreground/70">
              We value your privacy. By using our website, you agree to our data collection and usage practices as described in our Privacy Policy.
            </p>
          </div>

          {/* 7. Product Use & Limitations */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">7. Product Use & Limitations</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>All Bamuso Ayurveda products are intended only for personal consumption & wellness use.</li>
              <li>Overuse, misuse, or consumption beyond recommended dosage is at the customer's discretion.</li>
              <li>BAMUSO may apply purchase limits to prevent stock misuse. Exceeding limits may result in temporary restriction (up to 2 weeks).</li>
            </ul>
          </div>

          {/* 8. Liability Disclaimer */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">8. Liability Disclaimer</h2>
            <ul className="list-disc list-inside text-foreground/70 space-y-1">
              <li>Bamuso Ayurveda is not responsible for any loss arising from improper usage, incorrect dosage, or mishandling by the customer.</li>
              <li>We shall not be held liable for indirect, incidental, or consequential damages arising from use of our products or services.</li>
              <li>Ayurvedic products work differently for every individual; results may vary.</li>
            </ul>
          </div>

          {/* 9. Contact Information */}
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-bold text-foreground">9. Contact Information</h2>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@bamuso.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Meethapur, Badarpur, New Delhi – 110044</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>www.bamuso.com</span>
            </div>
          </div>

          <p className="text-foreground/70 mt-4">
            Bamuso Ayurveda – Inspired by Nature, Powered by Trust. Thank you for choosing Bamuso Ayurveda. We are committed to delivering safe, effective, and authentic Ayurvedic wellness solutions.
          </p>
        </Card>
      </div>
    </div>
  );
}
