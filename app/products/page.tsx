'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/cart-context';

const PRODUCTS = [
  {
    id: 1,
    name: 'BMS Super X Oil',
    category: 'Male Wellness',
    MRP: '₹999',
    price: '₹699',
    description: "Best Massage Oil for men, strength, vitality aur nourishment support. ",
    image: '/images/oil1.webp'
  },
  {
    id: 2,
    name: "BMS Super X Capsule",
    category: "Male Wellness",
    MRP: '₹1999',
    price: "₹999",
    description: 'Boosts vitality, stamina & physical strength',
    image: '/images/capsule1.webp'
  },
  {
    id: 3,
    name: 'Neem Face Mask',
    category: 'Skin',
    MRP: '₹799',
    price: '₹599',
    description: 'Natural antibacterial and skin-purifying treatment',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23C8E6C9%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23558B2F%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ENeem Mask%3C/text%3E%3C/svg%3E',
  },
  {
    id: 4,
    name: 'Brahmi Hair Oil',
    category: 'Hair',
    MRP: '₹499',
    price: '₹399',
    description: 'Cooling and strengthening oil for hair care',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23A1887F%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23FFFFFF%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EBrahmi Oil%3C/text%3E%3C/svg%3E',
  },
  {
    id: 5,
    name: 'Triphala Churna',
    category: 'Digestion',
    MRP: '₹299',
    price: '₹199',
    description: 'Digestive and detoxifying herbal blend',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23D2A679%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%238B6F47%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ETriphala%3C/text%3E%3C/svg%3E',
  },
  {
    id: 6,
    name: 'Sesame Ubtan',
    category: 'Skin',
    MRP: '₹499',
    price: '₹449',
    description: 'Traditional brightening and exfoliating paste',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8C4A0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23C4956D%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EUbtan%3C/text%3E%3C/svg%3E',
  },
  {
    id: 7,
    name: 'Hibiscus Hair Rinse',
    category: 'Hair',
    MRP: '₹329',
    price: '₹279',
    description: 'Natural conditioning and color-enhancing rinse',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8A8C8%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%238B4C6D%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EHibiscus%3C/text%3E%3C/svg%3E',
  },
  {
    id: 8,
    name: 'Ginger Digestion Tea',
    category: 'Digestion',
    MRP: '₹329',
    price: '₹279',
    description: 'Warming blend for digestive comfort',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23D4A574%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%238B6F47%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EGinger Tea%3C/text%3E%3C/svg%3E',
  },
];

const CATEGORIES = [
  'All',
  'Male Wellness',
  'Women Wellness',
  'Immunity & Daily Health',
  'Weight & Digestion',
  'Skin & Hair Care',
  'Mind & Sleep',
  'Special Health Support',
];


export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">
              Shop Ayurvedic Products — BAMUSO Ayurveda
            </h1>
          </div>
          <p className="text-foreground/70">
            India’s most trusted Ayurvedic wellness range for daily health
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-primary text-accent-foreground' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition flex flex-col">
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:ease-in-out duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-sm text-primary font-semibold mb-1">{product.category}</p>
                  <h3 className="font-serif font-bold text-foreground mb-2 flex-1">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-serif font-bold text-primary"><span className='font-light text-sm line-through mr-1'>{product.MRP}</span>{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        const priceNumber = parseInt(product.price.replace('₹', '').replace(',', ''));
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          image: product.image,
                          priceNumber,
                        });
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <Link href={`/products/${product.id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">No products found in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
