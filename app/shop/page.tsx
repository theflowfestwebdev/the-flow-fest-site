"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, ShoppingCart, Heart, Filter } from "lucide-react";
import NavBar from "@/components/NavBar";

export default function ShopPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    {
      name: "Mindful Movement Mat",
      price: "$89",
      originalPrice: "$120",
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=400",
      category: "Yoga & Movement",
      isNew: true,
      isSale: true,
    },
    {
      name: "Sacred Meditation Cushion",
      price: "$65",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=400",
      category: "Meditation",
      isNew: false,
      isSale: false,
    },
    {
      name: "Flow Essential Oil Set",
      price: "$45",
      rating: 4.7,
      reviews: 234,
      image: "/placeholder.svg?height=400&width=400",
      category: "Aromatherapy",
      isNew: true,
      isSale: false,
    },
    {
      name: "Conscious Living Journal",
      price: "$28",
      rating: 4.6,
      reviews: 178,
      image: "/placeholder.svg?height=400&width=400",
      category: "Mindfulness",
      isNew: false,
      isSale: false,
    },
  ];

  const specialOffers = [
    {
      title: "New Member Discount",
      description:
        "Get 20% off your first order when you join The Flow community",
      code: "FLOW20",
      discount: "20% OFF",
    },
    {
      title: "Bundle & Save",
      description: "Purchase any 3 items and receive 15% off your entire order",
      code: "BUNDLE15",
      discount: "15% OFF",
    },
    {
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $75",
      code: "FREE75",
      discount: "FREE SHIPPING",
    },
  ];

  const latestArrivals = [
    {
      name: "Bamboo Water Bottle",
      price: "$32",
      image: "/placeholder.svg?height=300&width=300",
      category: "Sustainable Living",
    },
    {
      name: "Crystal Healing Set",
      price: "$78",
      image: "/placeholder.svg?height=300&width=300",
      category: "Energy Healing",
    },
    {
      name: "Organic Tea Collection",
      price: "$24",
      image: "/placeholder.svg?height=300&width=300",
      category: "Wellness Teas",
    },
    {
      name: "Meditation Timer",
      price: "$56",
      image: "/placeholder.svg?height=300&width=300",
      category: "Meditation",
    },
    {
      name: "Sustainable Yoga Blocks",
      price: "$38",
      image: "/placeholder.svg?height=300&width=300",
      category: "Yoga & Movement",
    },
    {
      name: "Mindfulness Card Deck",
      price: "$22",
      image: "/placeholder.svg?height=300&width=300",
      category: "Mindfulness",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="w-full md:w-96 bg-stone-50 p-12 overflow-y-auto">
            <div className="flex justify-between items-start mb-16">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="The Flow Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-xl font-extralight tracking-[0.2em] text-stone-800">
                    the flow
                  </h2>
                  <p className="text-xs font-light text-stone-600 tracking-[0.2em] mt-1">
                    WELLNESS & LIFESTYLE
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-stone-700 hover:text-stone-900 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-sm font-light text-stone-600 tracking-[0.2em] uppercase">
                  Locations
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/dhaka"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dhaka
                  </Link>
                  <Link
                    href="/dubai"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dubai
                  </Link>
                  <Link
                    href="/galle"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galle
                  </Link>
                </div>
              </div>

              <div>
                <Link
                  href="/retreats"
                  className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Retreats
                </Link>
              </div>

              <hr className="border-stone-200" />

              <div className="space-y-8">
                <h3 className="text-sm font-light text-stone-600 tracking-[0.2em] uppercase">
                  Explore
                </h3>
                <div className="space-y-6">
                  <Link
                    href="/wisdom"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Wisdom
                  </Link>
                  <Link
                    href="/enlightenment-market"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Enlightenment Market
                  </Link>
                  <Link
                    href="/our-story"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/shop"
                    className="block text-lg font-light text-stone-900 hover:text-stone-600 transition-colors tracking-wide border-b border-stone-300 pb-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8 tracking-wide">
            Shop
          </h1>
          <p className="text-xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover mindfully curated wellness products that support your
            journey toward conscious living.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide">
              Featured Products
            </h2>
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 px-6 py-2 text-sm font-light tracking-[0.1em] bg-transparent rounded-none flex items-center space-x-2"
            >
              <Filter size={16} />
              <span>Filter</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.isNew && (
                      <span className="bg-stone-800 text-white px-2 py-1 text-xs font-light tracking-wide">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white px-2 py-1 text-xs font-light tracking-wide">
                        SALE
                      </span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={16} className="text-stone-600" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-stone-800 hover:bg-stone-900 text-white py-2 text-sm font-light tracking-[0.1em] rounded-none">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-light text-stone-500 tracking-wide uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-light text-stone-800 group-hover:text-stone-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star
                        size={12}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm font-light text-stone-600">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm font-light text-stone-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-light text-stone-800">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm font-light text-stone-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Special Offers
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Exclusive deals and promotions for The Flow community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center space-y-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎁</span>
                </div>
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 bg-stone-800 text-white text-sm font-light tracking-wide">
                    {offer.discount}
                  </span>
                  <h3 className="text-xl font-light text-stone-800 tracking-wide">
                    {offer.title}
                  </h3>
                  <p className="text-sm font-light text-stone-600 leading-relaxed">
                    {offer.description}
                  </p>
                  <div className="border border-stone-200 p-3 bg-stone-50">
                    <span className="text-sm font-light text-stone-700 tracking-wide">
                      Code: <strong>{offer.code}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Arrivals Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Latest Arrivals
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Fresh additions to our carefully curated collection of wellness
              essentials.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {latestArrivals.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={14} className="text-stone-600" />
                  </button>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-light text-stone-500 tracking-wide uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-sm font-light text-stone-800 group-hover:text-stone-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm font-light text-stone-800">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-stone-800 hover:bg-stone-900 text-white px-12 py-4 text-sm font-light tracking-[0.1em] rounded-none">
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-8 tracking-wide">
            Stay in the Flow
          </h2>
          <p className="text-lg font-light text-stone-600 mb-12 leading-relaxed">
            Subscribe to receive updates on new products, exclusive offers, and
            wellness insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm font-light"
            />
            <Button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 text-sm font-light tracking-[0.1em] rounded-none">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      {/* <footer className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-12 md:mb-0 flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="The Flow Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h4 className="text-2xl font-extralight tracking-[0.3em] text-stone-800">
                  the flow
                </h4>
                <p className="text-sm font-light text-stone-600 tracking-[0.2em] mt-1">
                  WELLNESS SHOP
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-12 text-sm font-light text-stone-600">
              <Link
                href="/dhaka"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Dhaka
              </Link>
              <Link
                href="/dubai"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Dubai
              </Link>
              <Link
                href="/galle"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Galle
              </Link>
              <Link
                href="/retreats"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Retreats
              </Link>
              <Link
                href="/wisdom"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Wisdom
              </Link>
              <Link
                href="/enlightenment-market"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Enlightenment Market
              </Link>
              <Link
                href="/our-story"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
