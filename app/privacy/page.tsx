'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
          </div>

          <p className="text-foreground/70 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-foreground/80">
                At Bamuso Ayurveda, your privacy and trust matter to us. This Privacy Policy explains how we
                collect, use, store, and protect your information when you visit our website www.bamuso.com or
                purchase our Ayurvedic products. By using our website and services, you agree to the terms outlined in this policy.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Information We Collect</h2>
              <p className="text-foreground/80 mb-3">We may collect information about you in a variety of ways:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Personal Information:</strong> Name, email address, phone number, Billing Address / Shipping Address </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Non-Personal Information :</strong> Browser type, IP address, pages visited, time spent</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To process, confirm, and deliver your orders  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To share order updates, tracking details, and delivery information </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To provide customer support and resolve queries </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To send offers, wellness tips, updates, and promotional messages (only with your
                    consent) </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To improve website performance and provide a personalized shopping experience </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To monitor fraudulent activity and ensure platform safety & security </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Cookies & Tracking Technologies </h2>
              <p className="text-foreground/80 mb-3">
                We use cookies, web beacons, pixels, and similar tools to:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Remember your preferences </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Save items in your cart</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Improve loading speed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Analyze website traffic & performance </span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">You may disable cookies from browser settings. However, some features may not work properly
                without them.</p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Data Security</h2>
              <p className="text-foreground/80 mb-3">We take strong security measures to protect your data: </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Encrypted connections (HTTPS)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Secure payment gateways</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Strict access control </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Regular monitoring and updates </span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">However, no online method is 100% secure. While we do our best, we cannot guarantee
                absolute security. </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Third-Party Partners </h2>
              <p className="text-foreground/80 mb-3">We may work with trusted third-party platforms such as: </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Payment processors </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Logistics partners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Email/SMS service providers </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Analytics tools</span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">They may use cookies or collect limited information to provide seamless services.
                Please refer to their respective privacy policies for more details.  </p>
            </Card>
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Your Privacy Rights  </h2>
              <p className="text-foreground/80 mb-3">Depending on your location and applicable laws, you may request to:  </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Access your personal data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Update or correct your information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Delete your account/data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Restrict or object to data processing </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Withdraw consent for promotional messages </span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">To exercise these rights, email us at:
                <a href="mailto:support@bamuso.com" className="text-primary hover:underline"> support@bamuso.com</a>   </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground"> Data Retention </h2>
              <p className="text-foreground/80">
                We retain your information only as long as required:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>To fulfill orders </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>For legal, taxation, or regulatory compliance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>For resolving disputes or ensuring service continuity </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Third-Party Links</h2>
              <p className="text-foreground/80">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of other websites. Please review their privacy policies before providing personal information.
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Children’s Privacy</h2>
              <p className="text-foreground/80">
                We do not knowingly collect or store information from individuals under 18 years of age.
                If you believe a minor has shared data with us, please contact us immediately so we can delete
                it.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Updates to This Policy</h2>
              <p className="text-foreground/80">
                We may update this Privacy Policy occasionally to reflect changes in laws, technology, or our
                practices.
                Updated versions will be posted on this page with a revised “Last Updated” date.
                We encourage you to review this page regularly.
              </p>
            </Card>

            <Card className="p-6 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about this Privacy Policy or how we handle your personal data, please contact us:
              </p>
              <div className="space-y-2 text-foreground/80">
                <p><Mail className="w-4 h-4 inline mr-2" /> support@bamuso.com</p>
                <p><strong>WhatsApp:</strong> +91 98765 43210</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                <a href="https://wa.me/918377997202" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
