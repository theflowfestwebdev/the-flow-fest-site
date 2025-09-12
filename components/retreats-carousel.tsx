"use client";

import {useEffect, useState, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight, ChevronLeft, ChevronRight} from "lucide-react";

const retreats = [
  {
    image: "/images/retreats/cox-s-bazar-beach.webp",
    alt: "Serene coastal yoga retreat",
    superTitle: "UPCOMING RETREAT",
    title: "Coxʼs bazar serene coastal retreat",
    href: "/retreats",
    description:
      "Flow by the sea. Recharge with yoga, breathwork, and beachside serenity at the world’s longest natural beach.",
  },
  {
    image: "/images/retreats/seagull-resort.jpg",
    alt: "Serene coastal yoga retreat",
    superTitle: "UPCOMING RETREAT",
    title: "Seagull Resort Wellness Retreat",
    href: "/retreats",
    description:
      "Join us at Seagull Resort for a weekend of movement, meditation, and mindful connection.",
  },
  {
    image: "/images/retreats/home-bhutan-retreat.jpg",
    alt: "Bhutan retreat",
    superTitle: "UPCOMING RETREAT",
    title: "Bhutan Wellness Retreat",
    href: "/retreats",
    description:
      "Explore mindfulness, nature, and cultural immersion in the heart of the Himalayas.",
  },
];

const RetreatsCarousel = () => {
  const [currentRetreat, setCurrentRetreat] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-advance effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRetreat(prev => (prev + 1) % retreats.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentRetreat(prev => (prev + 1) % retreats.length);
    }
    if (isRightSwipe) {
      setCurrentRetreat(prev => (prev - 1 + retreats.length) % retreats.length);
    }
  };

  const goToPrevious = () => {
    setCurrentRetreat(prev => (prev - 1 + retreats.length) % retreats.length);
  };

  const goToNext = () => {
    setCurrentRetreat(prev => (prev + 1) % retreats.length);
  };

  return (
    <section
      className="relative mb-32 h-[60vh] md:h-[70vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {retreats.map((retreat, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentRetreat === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/20 to-black/50" />

          <Image
            src={retreat.image}
            alt={retreat.alt}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <p className="text-white text-sm font-light tracking-[0.2em] mb-3 md:mb-4 opacity-90">
              {retreats[currentRetreat].superTitle}
            </p>
            <Link
              href={retreats[currentRetreat].href}
              className="group inline-flex items-center space-x-2"
            >
              <h3
                className="text-white text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight hover:underline transition-all"
                style={{fontFamily: "TheSeasons-Light, serif"}}
              >
                {retreats[currentRetreat].title}
              </h3>
              <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6 opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </Link>
            <p className="text-white/90 text-base md:text-lg font-light leading-tight mt-6 md:mt-8">
              {retreats[currentRetreat].description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Arrows - hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -translate-y-1/2 left-8 z-20 text-white p-2 rounded-full hover:bg-white/10 transition-colors hidden md:block"
        aria-label="Previous retreat"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 right-8 z-20 text-white p-2 rounded-full hover:bg-white/10 transition-colors hidden md:block"
        aria-label="Next retreat"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {retreats.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentRetreat(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentRetreat === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RetreatsCarousel;
