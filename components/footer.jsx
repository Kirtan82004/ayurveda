'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-3">BAMUSO Ayurveda</h3>
            <p className="text-sm opacity-70">
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
            <p className="text-sm opacity-70 mb-1">📞 +91 98765 43210</p>
            <p className="text-sm opacity-70 mb-1">💬 WhatsApp Support Available</p>
            <p className="text-sm opacity-70">✉ support@bamusoayurveda.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} BAMUSO Ayurveda. All rights reserved. <br />
            Consult a qualified Ayurvedic practitioner before use.
          </p>
        </div>
      </div>
    </footer>
  );
}
