"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, MapPin, ArrowRight, Filter } from "lucide-react";

export default function CoachesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const coaches = [
    {
      name: "Sarah Chen",
      title: "Mindful Movement Instructor",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      reviews: 127,
      specialties: ["Yoga", "Meditation", "Breathwork"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Transformative yoga and meditation practices rooted in ancient wisdom and modern science.",
      experience: "8 years",
      sessions: "500+ sessions",
      price: "$75/session",
    },
    {
      name: "Tenzin Norbu",
      title: "Meditation Master",
      location: "Bhutan",
      rating: 5.0,
      reviews: 89,
      specialties: ["Meditation", "Mindfulness", "Spiritual Guidance"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Traditional Tibetan meditation techniques for modern practitioners seeking inner peace.",
      experience: "15 years",
      sessions: "1000+ sessions",
      price: "$100/session",
    },
    {
      name: "Maya Patel",
      title: "Holistic Wellness Coach",
      location: "Mumbai, India",
      rating: 4.9,
      reviews: 156,
      specialties: ["Nutrition", "Lifestyle Design", "Stress Management"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Integrative approach to wellness combining ancient Ayurveda with modern lifestyle coaching.",
      experience: "6 years",
      sessions: "400+ sessions",
      price: "$60/session",
    },
    {
      name: "Dr. James Wilson",
      title: "Integrative Medicine Practitioner",
      location: "London, UK",
      rating: 4.8,
      reviews: 203,
      specialties: ["Functional Medicine", "Nutrition", "Wellness Consulting"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Evidence-based integrative medicine approach to optimal health and vitality.",
      experience: "12 years",
      sessions: "800+ sessions",
      price: "$120/session",
    },
    {
      name: "Aria Nakamura",
      title: "Breathwork Facilitator",
      location: "Tokyo, Japan",
      rating: 4.9,
      reviews: 92,
      specialties: ["Breathwork", "Trauma Release", "Energy Healing"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Powerful breathwork sessions for emotional release and spiritual awakening.",
      experience: "5 years",
      sessions: "300+ sessions",
      price: "$80/session",
    },
    {
      name: "Carlos Rodriguez",
      title: "Movement Therapist",
      location: "Barcelona, Spain",
      rating: 4.7,
      reviews: 134,
      specialties: ["Movement Therapy", "Somatic Healing", "Body Awareness"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Somatic movement practices for healing trauma and reconnecting with your body.",
      experience: "7 years",
      sessions: "450+ sessions",
      price: "$70/session",
    },
  ];

  const coachingPrograms = [
    {
      title: "Mindful Living Intensive",
      duration: "8 weeks",
      format: "Group + Individual",
      description:
        "Comprehensive program combining meditation, movement, and lifestyle design for holistic transformation.",
    },
    {
      title: "Breathwork Certification",
      duration: "6 months",
      format: "Hybrid Learning",
      description:
        "Professional certification program for aspiring breathwork facilitators and practitioners.",
    },
    {
      title: "Wellness Coach Training",
      duration: "12 weeks",
      format: "Online + Retreats",
      description:
        "Complete training program for those seeking to become certified wellness coaches.",
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
            <span className="text-stone-800">Coaches</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8 tracking-wide">
            Coaches
          </h1>
          <p className="text-xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Connect with verified wellness coaches, practitioners, and teachers
            who can guide your transformation journey.
          </p>
        </div>
      </section>

      {/* Who are our coaches? Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Who are our coaches?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl font-light text-stone-600 leading-relaxed">
                Our coaches are carefully vetted practitioners who embody The
                Flow's values of authenticity, compassion, and transformative
                wisdom.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Each coach brings years of experience, specialized training, and
                a deep commitment to supporting your wellness journey. From
                meditation masters to movement therapists, breathwork
                facilitators to holistic wellness coaches, our community
                represents diverse modalities united by a shared dedication to
                conscious living.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-extralight text-stone-800 mb-2">
                    50+
                  </div>
                  <div className="text-sm font-light text-stone-600 tracking-wide">
                    Verified Coaches
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-stone-800 mb-2">
                    4.8
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
                alt="Diverse group of wellness coaches and practitioners"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coach Profiles Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide">
              Coach Profiles
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
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-white border border-stone-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-center mb-6">
                    <Image
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-light text-stone-800 mb-1">
                      {coach.name}
                    </h3>
                    <p className="text-sm font-light text-stone-600 mb-2">
                      {coach.title}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-stone-500 mb-2">
                      <MapPin size={14} />
                      <span className="text-sm font-light">
                        {coach.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star
                          size={14}
                          className="text-yellow-400 fill-current"
                        />
                        <span className="text-sm font-light text-stone-600">
                          {coach.rating}
                        </span>
                      </div>
                      <span className="text-sm font-light text-stone-500">
                        ({coach.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="font-light text-stone-500">
                        Experience:
                      </span>
                      <span className="font-light text-stone-700">
                        {coach.experience}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-light text-stone-500">
                        Sessions:
                      </span>
                      <span className="font-light text-stone-700">
                        {coach.sessions}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-light text-stone-500">Price:</span>
                      <span className="font-light text-stone-700">
                        {coach.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {coach.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-light rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-light text-stone-600 leading-relaxed mb-6">
                    {coach.description}
                  </p>

                  <div className="flex flex-col space-y-3">
                    <button className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide border-b border-stone-200 pb-2">
                      <span>VIEW PROFILE</span>
                      <ArrowRight size={16} />
                    </button>
                    <button className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide">
                      <span>BOOK SESSION</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Programs Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Coaching Programs
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive training and certification programs for aspiring
              wellness practitioners and coaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center space-y-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-light text-stone-800 tracking-wide">
                  {program.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-light text-stone-500">
                      Duration:
                    </span>
                    <span className="text-sm font-light text-stone-700">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-light text-stone-500">
                      Format:
                    </span>
                    <span className="text-sm font-light text-stone-700">
                      {program.format}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-light text-stone-600 leading-relaxed">
                  {program.description}
                </p>
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
              <Image src="/logo.png" alt="The Flow Logo" width={40} height={40} className="w-10 h-10" />
              <div>
                <h4 className="text-2xl font-extralight tracking-[0.3em] text-stone-800">the flow</h4>
                <p className="text-sm font-light text-stone-600 tracking-[0.2em] mt-1">COACHES DIRECTORY</p>
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
