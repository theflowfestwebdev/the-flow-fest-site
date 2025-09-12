"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Star,
  MapPin,
  ArrowRight,
  Filter,
  Globe,
  Users,
} from "lucide-react";

export default function BusinessesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const businesses = [
    {
      name: "Conscious Living Co.",
      type: "Sustainable Wellness Products",
      location: "Dubai, UAE",
      rating: 4.8,
      reviews: 234,
      categories: ["Eco Products", "Wellness Gear", "Sustainable Living"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Ethically sourced wellness products that support your journey and the planet.",
      founded: "2019",
      employees: "25-50",
      website: "consciousliving.co",
    },
    {
      name: "Serenity Retreat Center",
      type: "Wellness Retreat Destination",
      location: "Galle, Sri Lanka",
      rating: 4.9,
      reviews: 78,
      categories: ["Retreats", "Accommodation", "Wellness Programs"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Oceanfront retreat center offering transformative wellness experiences in paradise.",
      founded: "2020",
      employees: "10-25",
      website: "serenityretreat.lk",
    },
    {
      name: "Mindful Nutrition",
      type: "Holistic Nutrition Consultancy",
      location: "Mumbai, India",
      rating: 4.7,
      reviews: 156,
      categories: ["Nutrition", "Meal Planning", "Health Coaching"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Personalized nutrition plans based on Ayurvedic principles and modern science.",
      founded: "2018",
      employees: "5-10",
      website: "mindfulnutrition.in",
    },
    {
      name: "Flow Tech Solutions",
      type: "Wellness Technology Platform",
      location: "San Francisco, USA",
      rating: 4.6,
      reviews: 89,
      categories: ["Technology", "Apps", "Digital Wellness"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Innovative technology solutions for wellness practitioners and studios.",
      founded: "2021",
      employees: "50-100",
      website: "flowtech.com",
    },
    {
      name: "Sacred Spaces Design",
      type: "Wellness Space Architecture",
      location: "Bali, Indonesia",
      rating: 4.9,
      reviews: 67,
      categories: ["Architecture", "Interior Design", "Sacred Geometry"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Creating healing environments that inspire transformation and well-being.",
      founded: "2017",
      employees: "10-25",
      website: "sacredspaces.design",
    },
    {
      name: "Pure Elements",
      type: "Natural Wellness Products",
      location: "Vancouver, Canada",
      rating: 4.8,
      reviews: 198,
      categories: ["Natural Products", "Aromatherapy", "Skincare"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Premium natural wellness products crafted with pure, organic ingredients.",
      founded: "2016",
      employees: "25-50",
      website: "pureelements.ca",
    },
  ];

  const collaborationOpportunities = [
    {
      title: "Partnership Program",
      description:
        "Join our network of conscious businesses and access exclusive collaboration opportunities.",
      benefits: ["Cross-promotion", "Shared resources", "Community events"],
    },
    {
      title: "Vendor Marketplace",
      description:
        "Showcase your products and services to our global wellness community.",
      benefits: ["Direct sales", "Brand exposure", "Customer insights"],
    },
    {
      title: "Retreat Partnerships",
      description:
        "Collaborate with retreat centers and wellness destinations worldwide.",
      benefits: [
        "Venue partnerships",
        "Program development",
        "Revenue sharing",
      ],
    },
  ];

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

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm font-light text-stone-500">
            <Link href="/enlightenment-market" className="hover:text-stone-700">
              Enlightenment Market
            </Link>
            <span>/</span>
            <span className="text-stone-800">Businesses</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8 tracking-wide">
            Businesses
          </h1>
          <p className="text-xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover conscious businesses, wellness brands, and innovative
            companies aligned with The Flow's values.
          </p>
        </div>
      </section>

      {/* Who are our businesses Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Who are our businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl font-light text-stone-600 leading-relaxed">
                Our business directory features conscious companies that
                prioritize sustainability, ethical practices, and positive
                impact on both people and planet.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                From wellness product manufacturers to retreat centers,
                technology platforms to sustainable brands, each business in our
                network shares our commitment to conscious living and holistic
                well-being. They are carefully vetted partners who align with
                The Flow's values and mission.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-extralight text-stone-800 mb-2">
                    100+
                  </div>
                  <div className="text-sm font-light text-stone-600 tracking-wide">
                    Verified Businesses
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-stone-800 mb-2">
                    25
                  </div>
                  <div className="text-sm font-light text-stone-600 tracking-wide">
                    Countries
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-stone-800 mb-2">
                    4.7
                  </div>
                  <div className="text-sm font-light text-stone-600 tracking-wide">
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Conscious businesses and sustainable wellness companies"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Directory Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide">
              Business Directory
            </h2>
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 px-6 py-2 text-sm font-light tracking-[0.1em] bg-transparent rounded-none flex items-center space-x-2"
            >
              <Filter size={16} />
              <span>Filter</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="bg-white border border-stone-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={business.image || "/placeholder.svg"}
                      alt={business.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-light text-stone-800">
                        {business.name}
                      </h3>
                      <p className="text-sm font-light text-stone-600">
                        {business.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4 text-stone-500">
                    <MapPin size={14} />
                    <span className="text-sm font-light">
                      {business.location}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm font-light text-stone-600">
                        {business.rating}
                      </span>
                    </div>
                    <span className="text-sm font-light text-stone-500">
                      ({business.reviews} reviews)
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="font-light text-stone-500">
                        Founded:
                      </span>
                      <span className="font-light text-stone-700">
                        {business.founded}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-light text-stone-500">Team:</span>
                      <span className="font-light text-stone-700">
                        {business.employees}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-light text-stone-500">
                        Website:
                      </span>
                      <div className="flex items-center space-x-1">
                        <Globe size={12} className="text-stone-400" />
                        <span className="font-light text-stone-700 text-xs">
                          {business.website}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {business.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-light rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-light text-stone-600 leading-relaxed mb-6">
                    {business.description}
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
        </div>
      </section>

      {/* Collaboration Opportunities Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Collaboration Opportunities
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Join our network of conscious businesses and unlock new
              opportunities for growth and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center space-y-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                  <Users size={24} className="text-stone-600" />
                </div>
                <h3 className="text-2xl font-light text-stone-800 tracking-wide">
                  {opportunity.title}
                </h3>
                <p className="text-sm font-light text-stone-600 leading-relaxed">
                  {opportunity.description}
                </p>
                <div className="space-y-2">
                  {opportunity.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                      <span className="text-sm font-light text-stone-600">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 text-sm font-light tracking-[0.1em] bg-transparent rounded-none"
                >
                  LEARN MORE
                </Button>
              </div>
            ))}
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
                  BUSINESS DIRECTORY
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
