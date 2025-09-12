"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import * as React from "react";

interface StatItem {
  number: string;
  label: string;
  description: string;
  image: string;
}

const stats: StatItem[] = [
  {
    number: "35,000",
    label: "Members",
    description:
      "A thriving community of conscious individuals committed to holistic wellbeing",
    image: "/images/timeline/1.jpg",
  },
  {
    number: "30",
    label: "Coaches",
    description:
      "Certified mindfulness and wellness coaches guiding transformative journeys",
    image: "/images/timeline/3.jpg",
  },
  {
    number: "35",
    label: "Retreats",
    description:
      "Transformative experiences in carefully curated spaces for inner growth",
    image: "/images/timeline/2.jpg",
  },
  {
    number: "11",
    label: "Festivals",
    description:
      "Immersive gatherings celebrating mindful living and authentic connection",
    image: "/images/home/9-min.jpg",
  },
];

function TimelineItem({
  stat,
  index,
  isLeft,
}: {
  stat: StatItem;
  index: number;
  isLeft: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-center min-h-[40vh] md:min-h-[50vh] py-8 md:py-12"
    >
      {/* Desktop Timeline dot - hidden on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div
          className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-700 ${
            isVisible ? "bg-gray-900 scale-110" : "bg-gray-300 scale-100"
          }`}
        />
      </div>

      {/* Mobile Layout - Simple stacked */}
      <div className="block md:hidden w-full max-w-md mx-auto px-6">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{transitionDelay: `${index * 150}ms`}}
        >
          {/* Mobile Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image
              src={stat.image || "/placeholder.svg"}
              alt={`${stat.label} - ${stat.description}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 90vw, 33vw"
            />
          </div>

          {/* Mobile Content */}
          <div className="text-center space-y-3">
            <div className="text-4xl font-light text-gray-900 tracking-tight font-theSeasonsLight">
              {stat.number}
            </div>
            <div className="text-xl font-light text-gray-800 tracking-wide uppercase font-acuminLight">
              {stat.label}
            </div>
            <p className="text-base text-gray-600 leading-relaxed font-light font-acuminLight">
              {stat.description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Alternating columns */}
      <div className="hidden md:block w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 items-center">
          {isLeft ? (
            <>
              {/* Left side - Stat content */}
              <div className="col-span-5">
                <div
                  className={`text-right pr-8 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="space-y-4">
                    <div className="text-5xl md:text-6xl lg:text-6xl font-light text-gray-900 tracking-tight font-theSeasonsLight">
                      {stat.number}
                    </div>
                    <div className="text-2xl md:text-3xl font-light text-gray-800 tracking-wide uppercase font-acuminLight">
                      {stat.label}
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed font-light max-w-md ml-auto font-acuminLight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center spacer */}
              <div className="col-span-2"></div>

              {/* Right side - Image */}
              <div className="col-span-5">
                <div
                  className={`pl-8 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 -translate-x-8 scale-95"
                  }`}
                  style={{transitionDelay: `${index * 100 + 200}ms`}}
                >
                  <div className="relative aspect-square max-w-sm rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={stat.image || "/placeholder.svg"}
                      alt={`${stat.label} - ${stat.description}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Left side - Image */}
              <div className="col-span-5">
                <div
                  className={`pr-8 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-8 scale-95"
                  }`}
                  style={{transitionDelay: `${index * 100 + 200}ms`}}
                >
                  <div className="relative aspect-square max-w-sm ml-auto rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={stat.image || "/placeholder.svg"}
                      alt={`${stat.label} - ${stat.description}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Center spacer */}
              <div className="col-span-2"></div>

              {/* Right side - Stat content */}
              <div className="col-span-5">
                <div
                  className={`text-left pl-8 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="space-y-4">
                    <div className="text-5xl md:text-6xl lg:text-6xl font-light text-gray-900 tracking-tight font-theSeasonsLight">
                      {stat.number}
                    </div>
                    <div className="text-2xl md:text-3xl font-light text-gray-800 tracking-wide uppercase font-acuminLight">
                      {stat.label}
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed font-light max-w-md font-acuminLight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TimelineStatsSection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({type: null, message: ""});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your email address",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ""});

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email.trim(), company}),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Successfully subscribed to newsletter!",
        });
        setEmail(""); // Clear the form
        setCompany("");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({type: null, message: ""});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  return (
    <section className="bg-white relative">
      {/* Vertical Timeline Line - only visible on desktop */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 z-0 hidden md:block"
        style={{top: "15%", bottom: "20%"}}
      />

      {/* Section Header */}
      <div className="relative z-10 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-5xl md:text-4xl lg:text-6xl font-light text-gray-900 tracking-tight mb-4 md:mb-6"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            So Far...
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            Discover the transformative reach of our conscious community and the
            meaningful connections we've fostered through mindful living.
          </p>
        </div>
      </div>

      {/* Timeline Items */}
      <div className="relative z-10 pb-12 md:pb-20">
        {stats.map((stat, index) => (
          <TimelineItem
            key={stat.label}
            stat={stat}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>

      {/* Section Footer */}
      <div className="relative z-10 pt-16 md:pt-24 pb-16 md:pb-20 text-center overflow-x-hidden">
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 pointer-events-none hidden lg:block">
          <img
            src="/images/mandala.png"
            alt="Mandala"
            className="w-full h-auto rotate-6"
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 space-y-6 md:space-y-8">
          <h2
            className="text-5xl md:text-5xl lg:text-6xl font-extralight text-stone-800 mb-6 md:mb-8 tracking-wide leading-relaxed text-center"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            To flow with us,
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-stone-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            Subscribe to our newsletter.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto flex flex-col gap-4 md:gap-6 relative"
          >
            {/* Honeypot field - keep off-screen */}
            <div
              className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-md text-base md:text-lg font-light focus:outline-none focus:ring-2 focus:ring-stone-300 placeholder:text-stone-400"
              disabled={isSubmitting}
            />

            {/* Status message */}
            {submitStatus.type && (
              <div
                className={`text-sm md:text-base font-light px-4 py-2 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="text-stone-600 text-sm md:text-base font-light">
              {/* All information provided will be handled in accordance with our
              <a href="/privacy-policy" className="underline ml-1 hover:text-stone-800 transition-colors">Privacy Policy</a> */}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-1/3 bg-stone-500 tracking-[0.18em] hover:bg-stone-700 disabled:bg-stone-400 disabled:cursor-not-allowed text-white text-base md:text-lg font-normal rounded-md py-3 mt-2 mx-auto transition-colors"
              style={{fontFamily: "Stolzl Book, sans-serif"}}
            >
              {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
