'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, Trash2 } from 'lucide-react';
import { useCart } from '@/app/cart-context';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  console.log("cartItems:", cartItems); 
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/products" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Shopping Cart</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Your cart is empty</h2>
              <p className="text-foreground/70 mb-8">Start adding our Ayurvedic products to your cart</p>
              <Button asChild size="lg">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden p-6 border border-border">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center shrink-0">
                          <img
                            src={item.image || '/placeholder.svg'}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.name}</h3>
                          <p className="text-2xl font-serif font-bold text-primary mb-4">{item.price}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 text-primary hover:bg-secondary transition"
                              >
                                −
                              </button>
                              <span className="px-4 py-1 border-l border-r border-border font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-primary hover:bg-secondary transition"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-destructive hover:text-destructive/80 transition p-2 hover:bg-destructive/10 rounded-lg"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="md:col-span-1">
                <Card className="p-6 border border-border sticky top-24">
                  <h2 className="text-xl font-serif font-bold mb-6 text-foreground">Order Summary</h2>

                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-foreground/70">
                          {item.name} x {item.quantity}
                        </span>
                        <span className="font-semibold text-foreground">
                          ₹{(item.priceNumber * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between mb-6 text-lg">
                    <span className="font-serif font-bold text-foreground">Total:</span>
                    <span className="font-serif font-bold text-primary text-2xl">₹{cartTotal.toLocaleString()}</span>
                  </div>

                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 mb-3">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
