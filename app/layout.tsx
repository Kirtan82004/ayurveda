import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from './cart-context'
import Header from "@/components/header"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pure Ayurveda - Natural Wellness & Herbal Products',
  description: 'Discover authentic Ayurvedic products for immunity, skin health, and wellness. 100% herbal, GMP certified.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          <Header/>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
