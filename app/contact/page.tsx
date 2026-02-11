'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
          </div>
          {/* Support Message Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    <Card className="p-10 border border-border shadow-sm">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">
        We’re Always Here For You
      </h2>

      <p className="text-foreground/80 leading-relaxed mb-6 text-center">
        Hum aapki har query, complaint, order support aur Ayurvedic guidance ke
        liye hamesha uplabdh hain. Aapki health, trust aur satisfaction —
        yahi hamari sabse badi priority hai.
      </p>

      <p className="text-foreground/80 leading-relaxed mb-6 text-center">
        Bamuso Ayurveda mein hum sirf products nahi bechte, hum aapke behtar
        swasthya ki yatra mein aapke saathi hain.
      </p>

      <p className="text-foreground/80 leading-relaxed mb-8 text-center">
        Chahe aapko product ke baare mein jaankari chahiye, order se judi madad,
        ya Ayurvedic wellness guidance — hamari team aapki sahayata ke liye
        taiyar hai.
      </p>

      {/* Why Contact */}
      <div className="bg-secondary rounded-xl p-6 mb-8">
        <h3 className="text-xl font-serif font-bold mb-4 text-center">
          Why Contact Bamuso Ayurveda?
        </h3>

        <div className="grid sm:grid-cols-2 gap-3 text-foreground/80">
          <p>✔ Genuine Ayurvedic Guidance</p>
          <p>✔ Fast Order Support</p>
          <p>✔ Customer Satisfaction First</p>
          <p>✔ Safe & Trusted Wellness Products</p>
        </div>
      </div>

      {/* Hindi Trust Message */}
      <div className="text-center">
        <h3 className="text-xl font-serif font-bold mb-4">
          Your Health Matters to Us
        </h3>

        <p className="text-foreground/80 leading-relaxed">
          हम सुरक्षित, प्राकृतिक और असरदार Ayurvedic solutions देने के लिए
          प्रतिबद्ध हैं। हम मानते हैं कि सही मार्गदर्शन और शुद्ध Ayurvedic
          समाधान से हर व्यक्ति बेहतर, संतुलित और ऊर्जावान जीवन जी सकता है।
          इसी विश्वास के साथ हम हर ग्राहक की सहायता करते हैं।
        </p>
      </div>
    </Card>
  </div>
</section>
        </div>

      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Direct Contact Card */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-3 text-foreground">WhatsApp Chat</h3>
              <p className="text-foreground/70 mb-6">Fastest way to reach us. Chat with our wellness experts anytime.</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="https://wa.me/919990359097" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </a>
              </Button>
            </Card>

            {/* Phone Card */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Phone</h3>
              <p className="text-foreground/70 mb-6">Call us during business hours for immediate assistance.</p>
              <a href="tel:+919990359097" className="text-2xl font-serif font-bold text-primary">
                +91 9990 3590 97
              </a>

            </Card>

            {/* Email Card */}
            <Card className="p-8 border border-border text-center hover:shadow-lg transition">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Email</h3>
              <p className="text-foreground/70 mb-6">Send us an email and we'll respond within 24 hours.</p>
              <a
                href="mailto:support@bamuso.com"
                className="text-lg font-serif font-bold text-primary block break-all"
              >
                support@bamuso.com
              </a>
              <p className="text-sm text-foreground/60 mt-2">
                Alternate: bamusoayurveda@gmail.com
              </p>
            </Card>
          </div>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours & Location */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 text-foreground">Hours & Location</h2>

              <Card className="p-6 border border-border mb-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Business Hours</h3>
                    <p>Monday – Sunday: 9:00 AM – 9:00 PM</p>
                    <p>Support: 365 Days Available</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Address</h3>
                    <p className="text-foreground/70">
                      BAMUSO Ayurveda<br />
                      Main Road, Meethapur<br />
                      Badarpur, New Delhi – 110044<br />
                      India
                    </p>

                  </div>
                </div>
              </Card>
            </div>

            {/* FAQ & Support */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 text-foreground">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">How do I order?</h3>
                  <p className="text-foreground/70">You can order through WhatsApp, email, or by calling us. Our team will guide you through the process and process your order quickly.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">What's your delivery time?</h3>
                  <p className="text-foreground/70">We deliver within 3-7 business days across India. COD (Cash on Delivery) is available for most locations.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Can I return products?</h3>
                  <p className="text-foreground/70">Yes, we offer 30 days return policy. Check our Returns & Refunds policy for complete details.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Are products organic?</h3>
                  <p className="text-foreground/70">Our products are 100% herbal and sourced from trusted suppliers. They're GMP certified and free from synthetic additives.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 border border-border text-center">
            <h2 className="text-2xl font-serif font-bold mb-3 text-foreground">
              Stay Updated with Wellness Tips
            </h2>
            <p className="text-foreground/70 mb-8">
              Subscribe to our WhatsApp channel for wellness tips, product updates, and special offers
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://whatsapp.com/channel/0029Va8znqQ42DciLmcEAY2T" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Subscribe on WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-foreground/70">5/5</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "BAMUSO Ayurveda products are amazing! I noticed a significant improvement in my health within weeks. Highly recommended!"
              </p>
              <p className="font-semibold text-foreground">- Priya Sharma</p>
            </Card>

            <Card className="p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-foreground/70">5/5</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "The customer service is exceptional. They provided personalized recommendations and the products work as promised."
              </p>
              <p className="font-semibold text-foreground">- Rajesh Kumar</p>
            </Card>

            <Card className="p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-foreground/70">5/5</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "Finally found authentic Ayurvedic products at reasonable prices. The quality is consistent and delivery is fast."
              </p>
              <p className="font-semibold text-foreground">- Anjali Singh</p>
            </Card>
          </div>
        </div>
      </section>
     

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">
            Find Us on Map
          </h2>

          <div className="rounded-xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps?q=Meethapur,Badarpur,New Delhi 110044&output=embed"
              className="w-full h-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Connect With Us
          </h2>
          <p className="text-foreground/70 mb-10">
            Follow us on social media for daily wellness tips, offers & updates
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.facebook.com/Bamusoayurveda"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/bamuso_ayurveda"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@BamusoAyurveda7"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition"
            >
              <Youtube className="w-5 h-5 text-red-600" />
              YouTube
            </a>

            <a
              href="https://t.me/+3L1419GJ4pZkY2Nl"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition"
            >
              <Send className="w-5 h-5 text-sky-500" />
              Telegram
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
