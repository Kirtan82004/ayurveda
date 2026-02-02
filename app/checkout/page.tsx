'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '@/app/cart-context';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitOrderToSheet = async (paymentMode: string) => {
    const items = cartItems
      .map(i => `${i.name} x${i.quantity}`)
      .join(", ");

    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
      items,
      total: cartTotal.toString(),
      payment: paymentMode,
      status: "New Order",
    });

    const url =
      "https://script.google.com/macros/s/AKfycbypuJHFbeQf5WEX3ISxlpogxpg0gu0fOd6GspUaMLzn6bfhY6rNQpdoh7trPWrDlDHTLw/exec?" +
      params.toString();

    await fetch(url, {
      method: "GET",
      mode: "no-cors",
    });
  };

  const generateOrderMessage = () => {
    const items = cartItems.map((item) => `${item.name} x${item.quantity} - ${item.price}`).join('\n');
    const message = `*NEW ORDER*\n\nCustomer Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nDelivery Address:\n${formData.address}\n${formData.city}, ${formData.pincode}\n\n*Order Items:*\n${items}\n\n*Total Amount: ₹${cartTotal.toLocaleString()}*\n\nPlease confirm the order.`;
    return encodeURIComponent(message);
  };

 const handleCODOrder = async () => {
  if (!Object.values(formData).every(Boolean)) {
    alert("Please fill all fields");
    return;
  }

  const whatsappUrl = `https://wa.me/918377997202?text=${generateOrderMessage()}`;

  // ✅ Open WhatsApp FIRST (direct user click)
  window.open(whatsappUrl, "_blank");

  // ⏳ Sheet entry in background
  submitOrderToSheet("COD");

  alert("Redirecting to WhatsApp to confirm your order...");
  clearCart();
};

  const RAZORPAY_LINK = "https://rzp.io/l/abcd1234";

  const handlePayNow = async () => {
    if (!Object.values(formData).every(Boolean)) {
      alert("Please fill all fields");
      return;
    }

    await submitOrderToSheet("ONLINE");

    window.open(
      `${RAZORPAY_LINK}?amount=${cartTotal * 100}`,
      "_blank"
    );

    alert("Redirecting to secure payment...");
    clearCart();
  };


  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">

        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Your cart is empty</h1>
            <p className="text-foreground/70 mb-8">Add items to your cart before checkout</p>
            <Button asChild size="lg">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/cart" className="text-primary hover:text-primary/80 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-4xl font-serif font-bold">Checkout</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <Card className="p-8 border border-border">
                <h2 className="text-2xl font-serif font-bold mb-8 text-foreground">Delivery Information</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Delivery Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, Apartment 4B"
                      rows={3}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Mumbai"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="400001"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <Card className="p-6 border border-border sticky top-24">
                <h2 className="text-xl font-serif font-bold mb-6 text-foreground">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-foreground/70">
                        {item.name} <br /> x{item.quantity}
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

                <div className="space-y-3">
                  <Button
                    onClick={handleCODOrder}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Place Order (COD / WhatsApp)
                  </Button>

                  <Button
                    onClick={handlePayNow}
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary font-bold"
                  >
                    💳 Pay Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
