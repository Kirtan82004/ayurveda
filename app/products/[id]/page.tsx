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
    name: 'BMS Super X Oil',
    category: 'Male Wellness',
    MRP: '₹999',
    price: '₹699',
    rating: 4.8,
    reviews: 124,
    description: 'Best Massage Oil for men, strength, vitality aur nourishment support. ',
    longDescription: 'BMS Super X Oil ek premium Ayurvedic herbal wellness oil hai jo praachin Ayurvedic herbs aur nourishing base oils ka powerful combination hai. Yeh specially design kiya gaya hai natural vitality, stamina support, body nourishment aur circulation improvement ke liye.Is formulation mein use kiye gaye herbs Ayurvedic texts mein rasayana (rejuvenating), balya (strength promoting), aur vajikarana (vitality enhancing) properties ke liye jane jate hain. Regular external use se body ko warmth, relaxation, nourishment aur overall wellness support milta hai.Light texture hone ki wajah se oil skin mein easily absorb hota hai aur deep herbal action provide karta hai.',
    images: ['/images/oil1.webp', '/images/oil2.webp', '/images/oil3.webp', '/images/box.webp'],
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23F5E1A4%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23B8860B%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EBMS Oil%3C/text%3E%3C/svg%3E',
    ingredients: [
      { name: "Akarkara", function: "Traditional vitality enhancer; supports stamina" },
      { name: "Kesar (Saffron)", function: "Antioxidant; promotes strength & nourishment" },
      { name: "Shilajit", function: "Rejuvenator; supports energy & endurance" },
      { name: "Lavang (Clove)", function: "Warming herb; supports circulation & soothing action" },
      { name: "Kaunch Beej", function: "Supports reproductive health & vitality" },
      { name: "Jaiphal (Nutmeg)", function: "Nervous balance & warming comfort" },
      { name: "Ashwagandha", function: "Adaptogen; supports strength & stress relief" },
      { name: "Jaitoon Oil (Olive Oil)", function: "Enhances herbal absorption & skin nourishment" },
      { name: "Till Oil (Sesame Oil)", function: "Deep penetrating oil; supports circulation" }
    ],
    benefits: [
      "Natural stamina & vitality support",
      "Promotes healthy blood circulation",
      "Supports reproductive wellness",
      "Helps in muscle relaxation & comfort",
      "Deep tissue nourishment",
      "Supports stress relief & body relaxation",
      "Herbal antioxidant support"
    ],
    dosage: 'Apply a few drops, warm between your palms, and gently massage onto the desired area. Use 1–2 times daily, preferably after a bath or before bedtime, or as advised by a physician/Ayurvedic expert. For external use only.',
    packDetails: {
      form: "Herbal Oil",
      quantity: "15 Ml",
      shelfLife: "36 Months",
      storage: "Store in cool & dry place, away from sunlight"
    },
    manufacturingQuality: {
      manufacturedBy: "Human Pharmecia Inc.",
      certifiedBy: ["AYUSH", "GMP"]
    },
    safetyInformation: [
      "For external use only",
      "Avoid contact with eyes",
      "Do not apply on cuts or wounds",
      "Pregnant or lactating women should consult doctor before use",
      "If irritation occurs, discontinue use",
      "Keep away from children",
      "Not intended to diagnose, treat, cure or prevent any disease"
    ],
    whyChoose: [
      "Authentic Ayurvedic herbal blend",
      "Premium base oils for deep penetration",
      "Supports natural body strength & wellness",
      "No harmful chemicals",
      "Easy absorption & non-sticky",
      "Suitable for regular wellness routine"
    ],
    faqs: [
      {
        question: "What is BMS Super X Oil?",
        answer:
          "BMS Super X Oil is an Ayurvedic proprietary herbal oil made with traditional herbs like Ashwagandha, Shilajit, Akarkara, and Kesar. It is used for body nourishment, circulation support, and overall wellness."
      },
      {
        question: "Is this oil for internal or external use?",
        answer:
          "This product is strictly for external use only. It should not be consumed orally."
      },
      {
        question: "How do I use this oil?",
        answer:
          "Take a small quantity (a few drops) and gently massage onto the required body area. It can be used 1–2 times daily, preferably after a bath or before bedtime."
      },
      {
        question: "Who can use BMS Super X Oil?",
        answer:
          "It is suitable for adult men and women. People with sensitive skin should perform a patch test before regular use."
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Herbal products work gradually. With regular use, users may experience improved body relaxation, nourishment, and comfort. Results may vary from person to person."
      },
      {
        question: "Can this oil help with body weakness or fatigue?",
        answer:
          "The herbs used in this formulation are traditionally known in Ayurveda for supporting strength, vitality, and nourishment, which may be helpful during periods of tiredness or low energy."
      },
      {
        question: "Does it contain chemicals or artificial fragrance?",
        answer:
          "This is an Ayurvedic herbal oil prepared with traditional herbs and natural base oils. No artificial medicinal chemicals are added."
      },
      {
        question: "Is it safe for daily use?",
        answer:
          "Yes, it is generally considered safe for daily use when applied in the recommended quantity. Discontinue use if irritation occurs."
      },
      {
        question: "Can I apply it on sensitive areas?",
        answer:
          "Apply only on external body areas with gentle massage. Avoid contact with eyes, mucous membranes, cuts, or open wounds."
      },
      {
        question: "How should I store the oil?",
        answer:
          "Keep the bottle tightly closed and store in a cool, dry place away from direct sunlight."
      },
      {
        question: "Does this product cure any disease?",
        answer:
          "No. This is an Ayurvedic wellness support oil. It is not intended to diagnose, treat, cure, or prevent any disease."
      }
    ]
  },
  {
  id: 2,
  name: "BMS Super X Capsule",
  category: "Male Wellness",
  MRP: '₹1999',
  price: "₹999",
  rating: 4.7,
  reviews: 96,
  description: "Boosts Vitality, Stamina & Physical Strength. Natural Support for Stress Relief & Overall Performance Capsules",
  longDescription:
    "BMS Super X Capsule ek Ayurvedic formulation hai jo traditional herbs aur mineral Rasayan ke powerful combination se tayyar ki gayi hai. Yeh formulation body ko daily vitality, strength aur overall wellness support dene ke liye design ki gayi hai. Busy lifestyle, stress aur physical fatigue ko manage karne me madad karta hai. Herbal ingredients body ko nourish karte hain, stress handling capacity support karte hain aur active lifestyle maintain karne me help karte hain.",

  images: ["/images/capsule1.webp", "/images/capsule2.webp","/images/capsule3.webp",'/images/box.webp'],
  image:
    "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23F5E1A4%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2216%22 fill=%22%23B8860B%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EBMS Capsule%3C/text%3E%3C/svg%3E",

  ingredients: [
    { name: "Jaifal (Nutmeg)", function: "Nervous system support, relaxation & sleep support" },
    { name: "Gokhru (Tribulus)", function: "Vitality & urinary wellness support" },
    { name: "Safed Musli", function: "Physical strength & stamina support" },
    { name: "Kokilaksh", function: "Reproductive & urinary health support" },
    { name: "Dalchini (Cinnamon)", function: "Blood circulation & digestion support" },
    { name: "Shatavri", function: "Hormonal balance & immunity support" },
    { name: "Lata Kasturi", function: "Nerve wellness & vitality support" },
    { name: "Lavang (Clove)", function: "Circulation & natural defense support" },
    { name: "Kesar (Saffron)", function: "Mood, energy & overall vitality support" },
    { name: "Ashwagandha", function: "Stress relief, strength & stamina support" },
    { name: "Sonth (Dry Ginger)", function: "Digestion & absorption support" },
    { name: "Kaunch Beej", function: "Reproductive wellness & vitality support" }
  ],

  benefits: [
    "Daily energy, stamina aur performance support",
    "Sustained energy levels & physical endurance support",
    "Stress management & mood wellness support",
    "Healthy blood circulation support",
    "Nutrient absorption support",
    "Hormonal balance support",
    "Reproductive wellness support",
    "Immunity & body rejuvenation support"
  ],

  dosage:
    "1 capsule daily at night with lukewarm milk or water, or as directed by a healthcare professional or experienced Doctor’s direction ",

  packDetails: {
    form: "Capsules",
    quantity: "30 Capsules",
    shelfLife: "36 Months",
    storage: "Store in cool & dry place, away from sunlight"
  },

  manufacturingQuality: {
    manufacturedBy: "Human Pharmecia Inc.",
    certifiedBy: ["AYUSH", "GMP"]
  },

  safetyInformation: [
    "Ayurvedic wellness supplement",
    "Not intended to diagnose, treat, cure, or prevent any disease",
    "People with BP, diabetes, heart conditions should consult doctor before use",
    "Not recommended for pregnant or lactating women",
    "Keep away from children"
  ],

  whyChoose: [
    "Traditional Ayurvedic herbs + Rasayan",
    "Natural formulation",
    "Busy lifestyle ke liye wellness support",
    "Trusted Ayurvedic manufacturing standards"
  ],

  faqs:[
  {
    question: "What is BMS Super X and who is it designed for?",
    answer: "BMS Super X is a premium Ayurvedic formulation designed to support daily vitality, strength, and overall wellness. It is specifically crafted for individuals with busy lifestyles who experience physical fatigue, low energy, stress, or general body weakness. It helps restore stamina and supports an active lifestyle."
  },
  {
    question: "How does BMS Super X work to improve energy levels?",
    answer: "The formulation combines traditional herbs like Ashwagandha and Safed Musli with powerful mineral Rasayans like Shilajit and Makar Dhwaj. These ingredients work synergistically to nourish the body from within, improve nutrient absorption, and support the nervous system, leading to sustained energy and reduced fatigue."
  },
  {
    question: "What are the key ingredients in BMS Super X?",
    answer: "BMS Super X contains a potent blend of herbs and minerals. Key herbal ingredients include Ashwagandha, Safed Musli, Kaunch Beej, Kesar (Saffron), and Shatavari. It is further enhanced with mineral Rasayans such as Shuddh Shilajit, Tribhang Bhasma, and Abhrak Bhasma for deep rejuvenation."
  },
  {
    question: "What is the recommended dosage for best results?",
    answer: "For optimal benefits, take 1 capsule daily at night. It is best consumed with lukewarm milk to enhance the absorption of the Ayurvedic herbs. If milk is not available, it can also be taken with lukewarm water."
  },
  {
    question: "How long should I take BMS Super X to see visible results?",
    answer: "Ayurvedic supplements work on the root cause and generally require consistency. While you may feel improvements in energy levels within the first few weeks, it is recommended to continue the course for at least 2-3 months for long-term vitality and strength benefits."
  },
  {
    question: "Can I take this supplement if I have Diabetes or High Blood Pressure?",
    answer: "BMS Super X is a natural formulation; however, individuals with specific medical conditions such as Diabetes, High Blood Pressure, or heart conditions should consult a doctor or healthcare professional before starting this supplement to ensure it aligns with their current treatment."
  },
  {
    question: "Is BMS Super X safe for long-term use?",
    answer: "Yes, BMS Super X is an Ayurvedic wellness supplement made from natural ingredients and is generally considered safe for adult consumption. It is non-habit forming and designed to support your daily routine naturally."
  },
  {
    question: "Is this product suitable for women?",
    answer: "While the product supports overall vitality and hormonal balance, it has specific safety restrictions. It is not recommended for pregnant or lactating women. Women planning to use it for general fatigue should consult a healthcare professional first."
  },
  {
    question: "Can I take BMS Super X with water instead of milk?",
    answer: "Yes, you can take the capsule with lukewarm water. However, according to Ayurveda, milk acts as an Anupana (vehicle) that helps deliver the potency of herbs like Ashwagandha and Shilajit deeper into the tissues, so milk is the preferred method."
  },
  {
    question: "Are there any side effects?",
    answer: "BMS Super X is an Ayurvedic product manufactured under GMP and AYUSH-certified standards. When taken as per the directed dosage, it typically does not cause side effects. However, do not exceed the recommended dose."
  },
  {
    question: "Does this product help with stress and mood?",
    answer: "Yes, ingredients like Ashwagandha, Jaifal (Nutmeg), and Kesar (Saffron) are included specifically to support the nervous system, improve mood, and help the body manage daily stress more effectively."
  },
  {
    question: "Is there an age limit for using BMS Super X?",
    answer: "This product is intended for adults looking to improve their vitality and strength. It should be kept out of reach of children and is not recommended for use by minors."
  },
  {
    question: "What is the shelf life of the product?",
    answer: "The product has a shelf life of 36 months (3 years) from the date of manufacturing. Please store it in a cool, dry place away from direct sunlight."
  },
  {
    question: "Is BMS Super X a certified product?",
    answer: "Yes, BMS Super X is manufactured by Human Pharmecia Inc. and is a quality-assured product with AYUSH and GMP (Good Manufacturing Practice) certifications, ensuring it meets high standards of safety and quality."
  }
]
},

  {
    id: 3,
    name: "Neem Face Mask",
    category: "Skin",
    MRP: '₹999',
    price: "₹599",
    rating: 4.7,
    reviews: 156,
    description: "Natural antibacterial skin treatment",
    images: ["/images/neem-mask.webp"],
    image: "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23F5E1A4%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23B8860B%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3ENeem Mask%3C/text%3E%3C/svg%3E",
    ingredients: [
      { name: "Neem Extract", function: "Antibacterial skin cleansing" },
      { name: "Turmeric", function: "Skin brightening support" },
      { name: "Aloe Vera", function: "Skin soothing" }
    ],
    benefits: [
      "Reduces acne",
      "Deep cleansing",
      "Soothes irritation",
      "Brightens complexion"
    ],
    dosage: "Apply 2–3 times weekly",
    packDetails: {
      form: "Face Mask Powder",
      quantity: "100g",
      shelfLife: "18 Months",
      storage: "Cool & dry place"
    },
    manufacturingQuality: {
      manufacturedBy: "Ayurveda Naturals",
      certifiedBy: ["GMP"]
    },
    safetyInformation: [
      "For external use only",
      "Avoid contact with eyes"
    ],
    whyChoose: [
      "Natural skin purification",
      "Traditional herbal care"
    ],
    faqs: []
  },

  {
    id: 4,
    name: "Brahmi Hair Oil",
    category: "Hair",
    MRP: '₹999',
    price: "₹349",
    rating: 4.8,
    reviews: 203,
    description: "Cooling and strengthening hair oil",
    images: ["/images/brahmi-oil.webp"],
    image: "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23F5E1A4%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fontSize=%2220%22 fill=%22%23B8860B%22 textAnchor=%22middle%22 dominantBaseline=%22middle%22%3EBrahmi Oil%3C/text%3E%3C/svg%3E",
    ingredients: [
      { name: "Brahmi", function: "Hair strengthening" },
      { name: "Coconut Oil", function: "Hair nourishment" },
      { name: "Sesame Oil", function: "Scalp circulation" }
    ],
    benefits: [
      "Strengthens hair roots",
      "Reduces hair fall",
      "Improves hair texture"
    ],
    dosage: "Massage into scalp 2–3 times weekly",
    packDetails: {
      form: "Hair Oil",
      quantity: "200ml",
      shelfLife: "24 Months",
      storage: "Cool & dry place"
    },
    manufacturingQuality: {
      manufacturedBy: "Ayurveda Naturals",
      certifiedBy: ["GMP"]
    },
    safetyInformation: ["For external use only"],
    whyChoose: ["Cooling Ayurvedic oil"],
    faqs: []
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = PRODUCTS.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );
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
      image: product.images[0] || product.image,
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
              <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden relative">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {product.images?.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {product.images.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`${product.name}-${index}`}
                        onClick={() => setSelectedImage(img)}
                        className={`w-10 h-10 object-cover rounded-full border cursor-pointer ${selectedImage === img ? "border-primary" : "border-border"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>




            {/* Product Info */}
            <div>
              <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
              <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">{product.name}</h1>
              <h2 className="text-lg text-foreground/70 mb-6">{product.description}</h2>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold text-foreground">{product.rating}</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <span className="text-sm text-foreground/70">({product.reviews} reviews)</span>
              </div>

              <p className="text-2xl font-serif font-bold text-primary mb-6"><span className='text-foreground/50 line-through'>{product.MRP}</span> {product.price}</p>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">{product.longDescription}</p>

              <div className="bg-secondary p-6 rounded-lg mb-8">
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Form:</span>
                    <span className="font-semibold text-foreground">{product.packDetails.form}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Weight:</span>
                    <span className="font-semibold text-foreground">{product.packDetails.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Shelf Life:</span>
                    <span className="font-semibold text-foreground">{product.packDetails.shelfLife}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Storage:</span>
                    <span className="font-semibold text-foreground">{product.packDetails.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Certified By:</span>
                    <span className="font-semibold text-foreground">{product.manufacturingQuality.certifiedBy[0]},{product.manufacturingQuality.certifiedBy[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Manufactured By:</span>
                    <span className="font-semibold text-foreground">{product.manufacturingQuality.manufacturedBy}</span>
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
                    <span className="text-foreground">{ingredient.name}</span>
                    <span className="text-foreground/70"> - {ingredient.function}</span>

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

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Ingredients */}
            <Card className="p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">SAFETY INFORMATION</h2>
              <ul className="space-y-3">
                {product.safetyInformation.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{info}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">WHY CHOOSE {product.name}</h2>
              <ul className="space-y-3">
                {product.whyChoose.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
         {(product.id==2) ? (
          <div className="mt-16">
            <Card className="p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">MINERAL RASAYAN SUPPORT</h2>
              <p className="text-lg text-foreground/80 leading-relaxed"><span className='font-bold'>Shuddh Shilajit –</span> Energy & stamina support</p>
              <p className="text-lg text-foreground/80 leading-relaxed"><span className='font-bold'>Tribhang Bhasma –</span> Nerve wellness support</p>
              <p className="text-lg text-foreground/80 leading-relaxed"><span className='font-bold'>Abhrak Bhasma –</span> Body rejuvenation support</p>
              <p className="text-lg text-foreground/80 leading-relaxed"><span className='font-bold'>Makar Dhwaj  –</span> Traditional Rasayan for vitality & strength support</p>
            </Card>
          </div>
         ) : null}

          <div className="mt-16">
            <Card className="p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">FAQs</h2>
              <div className="space-y-4">
                {product.faqs.map((faq, index) => (
                  <div key={index}>
                    <p className="font-semibold text-foreground mb-1">{faq.question}</p>
                    <p className="text-foreground/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
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
                      src={relatedProduct.images[0] || "/placeholder.svg"}
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
