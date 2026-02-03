import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from './cart-context'
import Header from "@/components/header"
import './globals.css'
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Buy Ayurvedic Products Online in India | BAMUSO Ayurveda",
  description:
    "Shop authentic Ayurvedic products online from BAMUSO Ayurveda. Ashwagandha, Turmeric, Brahmi Oil & more. 100% natural, AYUSH & GMP certified.",
  keywords: [
    "Ayurvedic products online",
    "Buy ayurvedic medicine India",
    "Ashwagandha powder",
    "Brahmi hair oil",
    "Natural herbal products",
    "BAMUSO Ayurveda"
  ],
  alternates: {
    canonical: "https://bamuso-ayurveda.vercel.app/",
  },
  openGraph: {
    title: "BAMUSO Ayurveda – Trusted Ayurvedic Wellness Store",
    description:
      "Pure, natural & certified Ayurvedic products for immunity, skin & hair care. Order online across India.",
    url: "https://bamuso-ayurveda.vercel.app/",
    siteName: "BAMUSO Ayurveda",
    images: [
      {
        url: "/images/ayurveda-1.webp",
        width: 1200,
        height: 630,
        alt: "BAMUSO Ayurveda Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="iiP4-0rBA5X0Hlu0MqcnxVLx2PKE5zQJZmgAj13rO04" />
      <body className={`font-sans antialiased`}>
        <CartProvider>
          <Header/>
          {children}
          <Footer/>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
