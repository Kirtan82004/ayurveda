'use client';

import Link from 'next/link';
import { Facebook, Instagram, Send,Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/LOGO.webp"
                alt="BAMUSO Ayurveda Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-xl font-serif font-bold text-primary">
                BAMUSO Ayurveda
              </span>
            </Link>
            <p className="text-sm opacity-70 mt-3">
              India’s trusted Ayurvedic wellness brand for daily health & long-term care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="opacity-70 hover:opacity-100">Health Tips / Blog</Link></li>
              <li><Link href="/products" className="opacity-70 hover:opacity-100">Shop Products</Link></li>
              <li><Link href="/about" className="opacity-70 hover:opacity-100">About Us</Link></li>
              <li><Link href="/contact" className="opacity-70 hover:opacity-100">Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal-disclaimer" className="opacity-70 hover:opacity-100">Legal Disclaimer</Link></li>
              <li><Link href="/privacy" className="opacity-70 hover:opacity-100">Privacy Policy</Link></li>
              <li><Link href="/terms" className="opacity-70 hover:opacity-100">Terms & Conditions</Link></li>
              <li><Link href="/faq" className="opacity-70 hover:opacity-100">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-70 mb-1">📞 +91  9990-3590-97</p>
            <p className="text-sm opacity-70 mb-1">💬 WhatsApp Support Available</p>
            <p className="text-sm opacity-70">✉ support@bamusoayurveda.com</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/Bamusoayurveda"
                target="_blank"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/bamuso_ayurveda"
                target="_blank"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://t.me/+3L1419GJ4pZkY2Nl"
                target="_blank"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-white transition"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@BamusoAyurveda7"
                target="_blank"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-white transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center text-sm opacity-70">
          <p>
            © 2025 BAMUSO Ayurveda. All rights reserved. <br />
            Consult a qualified Ayurvedic practitioner before use.
          </p>
        </div>
      </div>
    </footer>
  );
}
