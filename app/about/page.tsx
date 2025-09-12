import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StolzlThinButton from "@/components/ui/StolzlThinButton";
import {Flower2, CalendarDays, Briefcase, Users} from "lucide-react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{fontFamily: "Acumin Pro Light, sans-serif"}}
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/1.jpg"
            alt="The Flow Fest community in nature, practicing mindful movement"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
          <h1
            className="text-5xl md:text-8xl font-extralight my-4 tracking-wide leading-tight"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            About us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl font-extralight tracking-[0.08em] opacity-90 leading-relaxed text-white">
            We curate transformative experiences that nurture body, mind, and
            spirit, building mindful communities through movement, meditation,
            nature, and nourishment.
          </p>
        </div>
      </section>

      {/* Slide 1: Welcome to The Flow Fest (replaces Mission Section) */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-sm font-light text-stone-500 tracking-[0.2em] uppercase">
              Welcome to The Flow Fest
            </span>
            <h2
              className="text-5xl md:text-6xl font-extralight text-stone-800 mb-16 tracking-wide leading-tight"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              “A movement of healing, connection, and conscious living.”
            </h2>
            <div className="space-y-6">
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                The Flow Fest is Bangladesh’s leading wellness platform,
                creating transformative spaces for breath, movement, community,
                and self-discovery.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                We believe healing is collective, and joyful.
              </p>
            </div>
            <div>
              {/* <Link href="/our-story">
                <StolzlThinButton>Discover Our Story</StolzlThinButton>
              </Link> */}
            </div>
          </div>
          <div className="relative w-full h-[420px] md:h-[520px]">
            <Image
              src="/images/about/4.jpg"
              alt="Sound healing meditation session at the flow fest"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3
              className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              What We Stand For
            </h3>
            <p className="text-lg font-light text-stone-600 leading-relaxed max-w-3xl mx-auto mt-6">
              Our gatherings are designed with intention and care, for people
              and the planet. We practice inclusivity, compassion, and
              sustainability in everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white border border-stone-200 p-6 transition-all duration-300 hover:shadow-md hover:border-stone-300 rounded-md">
              <h4 className="text-xl font-light text-stone-800 mb-3">
                Ahimsa (Non-violence)
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                We honor all living beings, cultivating environments of respect,
                safety, and kindness.
              </p>
            </div>
            <div className="group bg-white border border-stone-200 p-6 transition-all duration-300 hover:shadow-md hover:border-stone-300 rounded-md">
              <h4 className="text-xl font-light text-stone-800 mb-3">
                Sustainability
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                Our events minimize waste, with a commitment to zero single-use
                plastic and conscious consumption.
              </p>
            </div>
            <div className="group bg-white border border-stone-200 p-6 transition-all duration-300 hover:shadow-md hover:border-stone-300 rounded-md">
              <h4 className="text-xl font-light text-stone-800 mb-3">
                Inclusive Community
              </h4>
              <p className="text-stone-600 font-light leading-relaxed">
                We welcome every body and every story, creating spaces where
                everyone can learn and belong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Purpose (Slides 2–3 combined) */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[420px] md:h-[520px]">
            <Image
              src="/images/about/3.jpg"
              alt="People practicing mindful movement in nature"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="space-y-8">
            <h2
              className="text-5xl md:text-6xl font-extralight text-stone-800 mb-4 tracking-wide leading-tight"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Our Story and Purpose
            </h2>
            <div className="space-y-6">
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Born from a moment of social awakening, The Flow Fest began in
                parks and protest zones, offering breathwork and meditation to
                students during a time of national unrest.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Since then, we've grown into a thriving wellness ecosystem with
                studios, festivals, retreats, and a global community. Our
                purpose: to heal ourselves, our communities, and our planet, one
                breath at a time.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                We support mental, physical, emotional, and spiritual well being
                through accessible, inclusive experiences rooted in South Asian
                wisdom and global practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings & Reach (Slides 4–5 combined) */}
      <section className="py-24 md:py-32 px-8 bg-stone-50">
        <div className="flex items-start gap-12">
          <div className="w-screen flex flex-col items-center">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center lg:items-end w-full max-w-7xl">
              <div>
                <h2
                  className="text-5xl md:text-6xl font-extralight text-stone-800 mb-16 tracking-wide leading-tight text-center"
                  style={{fontFamily: "TheSeasons-Light, serif"}}
                >
                  What We Offer
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-full content-start">
                  <Link
                    href="/dhaka"
                    target="_blank"
                    className="group w-full bg-white shadow rounded-md py-8 px-20 flex flex-col items-center justify-center hover:cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-50  flex items-center justify-center my-4 group-hover:bg-stone-100 transition-all duration-300">
                      <Flower2 size={18} className="text-primary" />
                    </div>
                    <div className="text-lg font-light text-stone-700 text-center">
                      Festivals
                    </div>
                  </Link>
                  <Link
                    href="/retreats"
                    target="_blank"
                    className="group w-full bg-white shadow rounded-md py-8 px-20 flex flex-col items-center justify-center hover:cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-50  flex items-center justify-center my-4 group-hover:bg-stone-100 transition-all duration-300">
                      <CalendarDays size={18} className="text-primary" />
                    </div>
                    <div className="text-lg font-light text-stone-700 text-center">
                      Retreats
                    </div>
                  </Link>
                  <Link
                    href="/contact?subject=events"
                    target="_blank"
                    className="group w-full bg-white shadow rounded-md py-8 px-20 flex flex-col items-center justify-center hover:cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-50  flex items-center justify-center my-4 group-hover:bg-stone-100 transition-all duration-300">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div className="text-lg font-light text-stone-700 text-center">
                      Workplace Workshops
                    </div>
                  </Link>
                  <Link
                    href="https://schedule.dhakaflow.com/"
                    target="_blank"
                    className="group w-full bg-white shadow rounded-md py-8 px-20 flex flex-col items-center justify-center hover:cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-50  flex items-center justify-center my-4 group-hover:bg-stone-100 transition-all duration-300">
                      <Users size={18} className="text-primary" />
                    </div>
                    <div className="text-lg font-light text-stone-700 text-center">
                      Studio Classes
                    </div>
                  </Link>
                </div>
              </div>
              <div className="aspect-[1/1] max-w-2xl md:max-w-lg w-full relative">
                <Image
                  src="/images/about/2.jpg"
                  alt="Wellness vendors and partners collaborating at FlowFest"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 text-center">
              <div className="text-3xl font-light text-stone-800">35+</div>
              <div className="text-stone-600 font-light">Coaches</div>
            </div>
            <div className="bg-white border border-stone-200 p-6 text-center">
              <div className="text-3xl font-light text-stone-800">20,000+</div>
              <div className="text-stone-600 font-light">Community members</div>
            </div>
            <div className="bg-white border border-stone-200 p-6 text-center">
              <div className="text-3xl font-light text-stone-800">30+</div>
              <div className="text-stone-600 font-light">Retreats</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Why It Matters & Global Vision (Slides 6–7 combined) */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-16 items-center">
          <div className="space-y-8">
            <h2
              className="text-5xl md:text-6xl font-extralight text-stone-800 tracking-wide leading-tight"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Why It Matters
            </h2>
            <p className="text-lg font-light text-stone-600 leading-relaxed">
              The world is facing a mental health crisis, and The Flow Fest is
              part of the solution. We offer a local, trauma-informed,
              culturally-rooted response to rising anxiety, burnout, and
              disconnection.
            </p>
            <p className="text-lg font-light text-stone-600 leading-relaxed">
              We create safe spaces for healing, especially for women and youth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
