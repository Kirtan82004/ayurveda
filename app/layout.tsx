import React from "react"
import Script from "next/script";
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from './cart-context'
import Header from "@/components/header"
import './globals.css'
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
   metadataBase: new URL("https://bamuso-ayurveda.vercel.app"),
  title: "Buy Ayurvedic Products Online in India | BAMUSO Ayurveda",
  description:
    "Shop authentic Ayurvedic products online from BAMUSO Ayurveda. Ashwagandha, Turmeric, Brahmi Oil & more. 100% natural, AYUSH & GMP certified.",

  verification: {
    google: "iiP4-0rBA5X0Hlu0MqcnxVLx2PKE5zQJZmgAj13rO04",
  },

  alternates: {
    canonical: "https://bamuso-ayurveda.vercel.app/",
  },

  openGraph: {
    title: "BAMUSO Ayurveda – Trusted Ayurvedic Wellness Store",
    description:
      "Pure, natural & certified Ayurvedic products for immunity, skin & hair care.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
         <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
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
