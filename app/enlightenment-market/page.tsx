"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Star, MapPin, ArrowRight } from "lucide-react";

export default function EnlightenmentMarketPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    "ALL",
    "YOGA INSTRUCTORS",
    "MEDITATION TEACHERS",
    "BREATHWORK FACILITATORS",
    "WELLNESS COACHES",
    "HEALING PRACTITIONERS",
    "WELLNESS BUSINESSES",
    "RETREAT CENTERS",
    "CONSCIOUS BRANDS",
  ];

  const featuredListings = [
    {
      name: "Sarah Chen",
      title: "Mindful Movement Instructor",
      type: "Coach",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      reviews: 127,
      specialties: ["Yoga", "Meditation", "Breathwork"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Transformative yoga and meditation practices rooted in ancient wisdom and modern science.",
    },
    {
      name: "Tenzin Norbu",
      title: "Meditation Master",
      type: "Coach",
      location: "Bhutan",
      rating: 5.0,
      reviews: 89,
      specialties: ["Meditation", "Mindfulness", "Spiritual Guidance"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Traditional Tibetan meditation techniques for modern practitioners seeking inner peace.",
    },
    {
      name: "Conscious Living Co.",
      title: "Sustainable Wellness Products",
      type: "Business",
      location: "Dubai, UAE",
      rating: 4.8,
      reviews: 234,
      specialties: ["Eco Products", "Wellness Gear", "Sustainable Living"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Ethically sourced wellness products that support your journey and the planet.",
    },
    {
      name: "Maya Patel",
      title: "Holistic Wellness Coach",
      type: "Coach",
      location: "Mumbai, India",
      rating: 4.9,
      reviews: 156,
      specialties: ["Nutrition", "Lifestyle Design", "Stress Management"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Integrative approach to wellness combining ancient Ayurveda with modern lifestyle coaching.",
    },
    {
      name: "Serenity Retreat Center",
      title: "Wellness Retreat Destination",
      type: "Business",
      location: "Galle, Sri Lanka",
      rating: 4.9,
      reviews: 78,
      specialties: ["Retreats", "Accommodation", "Wellness Programs"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Oceanfront retreat center offering transformative wellness experiences in paradise.",
    },
    {
      name: "Dr. James Wilson",
      title: "Integrative Medicine Practitioner",
      type: "Coach",
      location: "London, UK",
      rating: 4.8,
      reviews: 203,
      specialties: ["Functional Medicine", "Nutrition", "Wellness Consulting"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Evidence-based integrative medicine approach to optimal health and vitality.",
    },
  ];

  const filteredListings =
    selectedCategory === "ALL"
      ? featuredListings
      : featuredListings.filter((listing) => {
          if (
            selectedCategory === "WELLNESS COACHES" &&
            listing.type === "Coach"
          )
            return true;
          if (
            selectedCategory === "WELLNESS BUSINESSES" &&
            listing.type === "Business"
          )
            return true;
          return false;
        });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="The Flow Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-12">
              <Link
                href="/dhaka"
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                DHAKA
              </Link>
              <Link
                href="/dubai"
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                DUBAI
              </Link>
              <Link
                href="/galle"
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                GALLE
              </Link>
              <Link
                href="/retreats"
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-[0.1em]"
              >
                RETREATS
              </Link>
              <Button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 text-sm font-light tracking-[0.1em] rounded-none">
                JOIN THE FLOW
              </Button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-stone-700 hover:text-stone-900 transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

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
                    className="block text-lg font-light text-stone-900 hover:text-stone-600 transition-colors tracking-wide border-b border-stone-300 pb-1"
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
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
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
            Enlightenment Market
          </h1>
          <p className="text-xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Your gateway to conscious practitioners and wellness businesses
            within The Flow community.
          </p>
        </div>
      </section>

      {/* What is it? Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              What is it?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl font-light text-stone-600 leading-relaxed">
                The Enlightenment Market is a curated directory connecting you
                with verified wellness practitioners, conscious businesses, and
                transformative services within The Flow ecosystem.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Whether you're seeking a meditation teacher, yoga instructor,
                wellness coach, or conscious business partner, our marketplace
                brings together the most authentic and skilled practitioners in
                the wellness community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enlightenment-market/coaches">
                  <Button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 text-sm font-light tracking-[0.1em] rounded-none">
                    FIND COACHES
                  </Button>
                </Link>
                <Link href="/enlightenment-market/businesses">
                  <Button
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 text-sm font-light tracking-[0.1em] bg-transparent rounded-none"
                  >
                    EXPLORE BUSINESSES
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Wellness practitioners and conscious businesses connecting in The Flow community"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-8 tracking-wide">
              Categories
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-light tracking-wide transition-colors ${
                  selectedCategory === category
                    ? "bg-stone-800 text-white"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400"
              />
              <input
                type="text"
                placeholder="Search practitioners and businesses..."
                className="w-full pl-12 pr-4 py-3 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm font-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Featured Listings
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most trusted and experienced practitioners and
              businesses in the wellness community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing, index) => (
              <div
                key={index}
                className="bg-white border border-stone-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-light text-stone-800">
                        {listing.name}
                      </h3>
                      <p className="text-sm font-light text-stone-600">
                        {listing.title}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-light tracking-wide rounded-full mt-1 ${
                          listing.type === "Coach"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {listing.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4 text-stone-500">
                    <MapPin size={14} />
                    <span className="text-sm font-light">
                      {listing.location}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm font-light text-stone-600">
                        {listing.rating}
                      </span>
                    </div>
                    <span className="text-sm font-light text-stone-500">
                      ({listing.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-light rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-light text-stone-600 leading-relaxed mb-6">
                    {listing.description}
                  </p>

                  <div className="flex flex-col space-y-3">
                    <button className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide border-b border-stone-200 pb-2">
                      <span>VIEW PROFILE</span>
                      <ArrowRight size={16} />
                    </button>
                    <button className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide">
                      <span>CONNECT</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-stone-800 hover:bg-stone-900 text-white px-12 py-4 text-sm font-light tracking-[0.1em] rounded-none">
              VIEW ALL LISTINGS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      {/* <footer className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-12 md:mb-0 flex items-center space-x-4">
              <Image src="/logo.png" alt="The Flow Logo" width={40} height={40} className="w-10 h-10" />
              <div>
                <h4 className="text-2xl font-extralight tracking-[0.3em] text-stone-800">the flow</h4>
                <p className="text-sm font-light text-stone-600 tracking-[0.2em] mt-1">ENLIGHTENMENT MARKET</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-12 text-sm font-light text-stone-600">
              <Link href="/dhaka" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Dhaka
              </Link>
              <Link href="/dubai" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Dubai
              </Link>
              <Link href="/galle" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Galle
              </Link>
              <Link href="/retreats" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Retreats
              </Link>
              <Link href="/wisdom" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Wisdom
              </Link>
              <Link href="/enlightenment-market" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Enlightenment Market
              </Link>
              <Link href="/our-story" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Our Story
              </Link>
              <Link href="/contact" className="hover:text-stone-900 transition-colors tracking-[0.1em]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
