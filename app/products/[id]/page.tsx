'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/cart-context';

const PRODUCTS = [
  {
    id: 1,
    name: 'Ashwagandha Powder',
    category: 'Immunity',
    price: '₹499',
    rating: 4.8,
    reviews: 124,
    description: 'Stress-relief and energy-boosting adaptogenic blend',
    longDescription: 'Ashwagandha, also known as Withania Somnifera, is a powerful adaptogen that has been used in Ayurveda for centuries. Our premium Ashwagandha powder is sourced from organic farms and contains no additives or preservatives.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23D4B5A0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%239B7C66%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EAshwagandha%3C/text%3E%3C/svg%3E',
    ingredients: ['Withania Somnifera (Ashwagandha)', 'No additives', 'No preservatives'],
    benefits: ['Reduces stress and anxiety', 'Boosts immunity', 'Improves sleep quality', 'Enhances energy levels', 'Supports cognitive function'],
    dosage: '1/4 to 1/2 teaspoon twice daily with warm milk or water',
    weight: '100g',
    shelf_life: '24 months from manufacturing date',
  },
  {
    id: 2,
    name: 'Turmeric Golden Milk',
    category: 'Immunity',
    price: '₹399',
    rating: 4.9,
    reviews: 89,
    description: 'Anti-inflammatory and immunity-boosting blend',
    longDescription: 'Our Golden Milk blend combines premium turmeric with complementary spices to create a potent anti-inflammatory drink. Perfect for daily wellness.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8C4A0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23B8860B%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ETurmeric%3C/text%3E%3C/svg%3E',
    ingredients: ['Turmeric (Curcuma Longa)', 'Ginger', 'Black Pepper', 'Cinnamon', 'Cardamom'],
    benefits: ['Anti-inflammatory properties', 'Boosts immunity', 'Supports joint health', 'Aids digestion', 'Promotes skin health'],
    dosage: '1 teaspoon in warm milk, once or twice daily',
    weight: '150g',
    shelf_life: '24 months from manufacturing date',
  },
  {
    id: 3,
    name: 'Neem Face Mask',
    category: 'Skin',
    price: '₹599',
    rating: 4.7,
    reviews: 156,
    description: 'Natural antibacterial and skin-purifying treatment',
    longDescription: 'Our Neem Face Mask combines the antibacterial properties of Neem with nurturing botanicals to cleanse and rejuvenate your skin naturally.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23C8E6C9%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23558B2F%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ENeem Mask%3C/text%3E%3C/svg%3E',
    ingredients: ['Neem Leaf Extract', 'Turmeric', 'Fuller\'s Earth', 'Aloe Vera', 'Rose Water'],
    benefits: ['Antibacterial properties', 'Reduces acne', 'Deep cleansing', 'Soothes irritation', 'Brightens complexion'],
    dosage: 'Apply 2-3 times per week, leave for 15-20 minutes',
    weight: '100g',
    shelf_life: '18 months from manufacturing date',
  },
  {
    id: 4,
    name: 'Brahmi Hair Oil',
    category: 'Hair',
    price: '₹349',
    rating: 4.8,
    reviews: 203,
    description: 'Cooling and strengthening oil for hair care',
    longDescription: 'Brahmi oil is a traditional Ayurvedic remedy for hair care, known for its cooling and nourishing properties. Perfect for scalp health.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23A1887F%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23FFFFFF%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EBrahmi Oil%3C/text%3E%3C/svg%3E',
    ingredients: ['Brahmi Extract', 'Coconut Oil', 'Sesame Oil', 'Hibiscus Flowers'],
    benefits: ['Strengthens hair roots', 'Cooling effect on scalp', 'Reduces hair fall', 'Improves hair texture', 'Prevents premature greying'],
    dosage: 'Massage into scalp 2-3 times per week, leave for 30 minutes',
    weight: '200ml',
    shelf_life: '24 months from manufacturing date',
  },
  {
    id: 5,
    name: 'Triphala Churna',
    category: 'Digestion',
    price: '₹299',
    rating: 4.6,
    reviews: 178,
    description: 'Digestive and detoxifying herbal blend',
    longDescription: 'Triphala is a classical Ayurvedic formulation made from three fruits: Haritaki, Bibhitaki, and Amalaki. It supports digestive health and natural detoxification.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23D2A679%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%238B6F47%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ETriphala%3C/text%3E%3C/svg%3E',
    ingredients: ['Haritaki', 'Bibhitaki', 'Amalaki (Indian Gooseberry)'],
    benefits: ['Supports digestion', 'Gentle detoxification', 'Promotes regular bowel movements', 'Rich in Vitamin C', 'Improves nutrient absorption'],
    dosage: '1/2 to 1 teaspoon at night with warm water',
    weight: '100g',
    shelf_life: '24 months from manufacturing date',
  },
  {
    id: 6,
    name: 'Sesame Ubtan',
    category: 'Skin',
    price: '₹449',
    rating: 4.7,
    reviews: 92,
    description: 'Traditional brightening and exfoliating paste',
    longDescription: 'Our Sesame Ubtan is a traditional Ayurvedic paste that gently exfoliates and brightens the skin while maintaining its natural moisture.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8C4A0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23C4956D%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EUbtan%3C/text%3E%3C/svg%3E',
    ingredients: ['Sesame Powder', 'Turmeric', 'Chickpea Flour', 'Rose Water', 'Sandalwood'],
    benefits: ['Gentle exfoliation', 'Brightens complexion', 'Reduces blemishes', 'Nourishes skin', 'All skin types'],
    dosage: 'Apply 1-2 times per week, leave for 15 minutes',
    weight: '100g',
    shelf_life: '18 months from manufacturing date',
  },
  {
    id: 7,
    name: 'Hibiscus Hair Rinse',
    category: 'Hair',
    price: '₹329',
    rating: 4.5,
    reviews: 67,
    description: 'Natural conditioning and color-enhancing rinse',
    longDescription: 'Traditional Hibiscus flowers combined with herbal essences to condition hair and enhance natural color.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8A8C8%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%238B4C6D%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EHibiscus%3C/text%3E%3C/svg%3E',
    ingredients: ['Hibiscus Flowers', 'Neem Leaves', 'Fenugreek Seeds', 'Curry Leaves'],
    benefits: ['Conditions hair naturally', 'Enhances hair color', 'Adds shine', 'Reduces hair fall', 'Prevents dandruff'],
    dosage: 'Brew and use as final rinse after shampooing, 2-3 times weekly',
    weight: '50g (dried flowers)',
    shelf_life: '24 months from manufacturing date',
  },
  {
    id: 8,
    name: 'Ginger Digestion Tea',
    category: 'Digestion',
    price: '₹279',
    rating: 4.6,
    reviews: 145,
    description: 'Warming blend for digestive comfort',
    longDescription: 'A soothing herbal tea blend that aids digestion and soothes the digestive tract with warming spices.',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23D4A574%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%238B6F47%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EGinger Tea%3C/text%3E%3C/svg%3E',
    ingredients: ['Ginger Root', 'Fennel Seeds', 'Cumin Seeds', 'Coriander Seeds', 'Black Pepper'],
    benefits: ['Aids digestion', 'Reduces bloating', 'Warms the digestive system', 'Soothes stomach', 'Anti-inflammatory'],
    dosage: 'Steep 1 teaspoon in hot water for 3-5 minutes, drink 1-2 times daily',
    weight: '80g (dried herbs)',
    shelf_life: '24 months from manufacturing date',
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);

  const product = PRODUCTS.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;

    const priceNumber = parseInt(product.price.replace('₹', '').replace(',', ''));
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      priceNumber,
    });

    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/products" className="flex items-center gap-1 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-4 h-4" />
            Products
          </Link>
          <span className="text-foreground/50">/</span>
          <span className="text-foreground font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
              <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold text-foreground">{product.rating}</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <span className="text-sm text-foreground/70">({product.reviews} reviews)</span>
              </div>

              <p className="text-2xl font-serif font-bold text-primary mb-6">{product.price}</p>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">{product.longDescription}</p>

              <div className="bg-secondary p-6 rounded-lg mb-8">
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Weight:</span>
                    <span className="font-semibold text-foreground">{product.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Shelf Life:</span>
                    <span className="font-semibold text-foreground">{product.shelf_life}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-8 items-center">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-primary hover:bg-secondary transition"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-l border-r border-border font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-primary hover:bg-secondary transition"
                  >
                    +
                  </button>
                </div>
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
              </div>

              {showAddedMessage && (
                <div className="mb-4 p-3 bg-primary/10 border border-primary rounded-lg text-primary text-sm font-semibold">
                  Added {quantity} item(s) to cart!
                </div>
              )}

              <div className="flex gap-3 mb-8">
                <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                  <Link href="/cart">View Cart</Link>
                </Button>
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                  <a href={`https://wa.me/918377997202?text=I want to order ${product.name} (${product.price})`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order Now
                  </a>
                </Button>
              </div>

              <Card className="border border-border p-4 bg-muted/50">
                <p className="text-sm text-foreground/70">
                  <strong>Note:</strong> These products are herbal formulations. Always consult a qualified Ayurvedic practitioner before use.
                </p>
              </Card>
            </div>
          </div>

          {/* Detailed Info Tabs */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Ingredients */}
            <Card className="p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Ingredients</h2>
              <ul className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Dosage */}
          <Card className="p-8 border border-border mt-12">
            <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">How to Use</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{product.dosage}</p>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-foreground">More from {product.category}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition">
                  <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-foreground mb-2">{relatedProduct.name}</h3>
                    <p className="text-2xl font-serif font-bold text-primary mb-4">{relatedProduct.price}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={`/products/${relatedProduct.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
