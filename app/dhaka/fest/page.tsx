// import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
  Menu,
  X,
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import StolzlThinButton from "@/components/ui/StolzlThinButton";

export default function FestPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const scrollToSectionSlowly = (id: string) => {
  //   const target = document.getElementById(id);
  //   if (!target) return;

  //   const startY = window.scrollY;
  //   const endY = target.getBoundingClientRect().top + startY;
  //   const duration = 1200; // milliseconds

  //   const startTime = performance.now();

  //   const step = (currentTime: number) => {
  //     const elapsed = currentTime - startTime;
  //     const progress = Math.min(elapsed / duration, 1);
  //     const easeInOutQuad =
  //       progress < 0.5
  //         ? 2 * progress * progress
  //         : -1 + (4 - 2 * progress) * progress;

  //     window.scrollTo(0, startY + (endY - startY) * easeInOutQuad);

  //     if (progress < 1) {
  //       requestAnimationFrame(step);
  //     }
  //   };

  //   requestAnimationFrame(step);
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="pt-40 pb-24 px-8 text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/fest-bg.jpg')",
        }}
      >
        {/* Optional: Add a dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-sm font-light tracking-[0.2em] opacity-80 uppercase">
              November 6-8, 2025
            </span>
          </div>
          <h1
            className="text-6xl md:text-7xl font-extralight mb-8 tracking-wide"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            THE FLOW FEST 2025
          </h1>
          <p className="text-xl font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            The Flow Fest's biggest celebration returns to where it all began.
            Join us for three days of transformation, connection, and wellness
            in the heart of Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg opacity-90 font-light mb-12">
            <div className="flex items-center space-x-3">
              <Calendar size={18} />
              <span style={{fontFamily: "Stolzl Book, sans-serif"}}>
                NOV 6-8, 2025
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} />
              <span style={{fontFamily: "Stolzl Book, sans-serif"}}>
                GULSHAN SOCIETY LAKE PARK
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://eventure.services/e/Flow-Fest-2025-685a6492b5679d50defb0a6f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-7 py-2 border rounded-full text-white border-white bg-transparent font-normal uppercase tracking-[0.18em] text-base shadow-none transition-all duration-200 hover:bg-white hover:text-black font-stolzlThin">
                Register Now
              </Button>
            </a>
            {/* <Button
              onClick={() => scrollToSectionSlowly("session-preview")}
               className="px-7 py-2 border rounded-full text-white border-white bg-transparent font-normal uppercase tracking-[0.18em] text-base shadow-none transition-all duration-200 hover:bg-white hover:text-black font-stolzlThin"
              >
               Event Schedule
            </Button> */}
          </div>
        </div>
      </section>

      {/* Vendor Opportunities Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide"
                style={{fontFamily: "TheSeasons-Light, serif"}}
              >
                Join Us as a Partner
              </h2>
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-6">
                We're opening up exciting opportunities for vendors, coaches,
                and sponsors to be part of our upcoming event from November 6 to
                8.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-6">
                If you're passionate about wellness, empowerment, and making a
                difference, this is the perfect chance to get involved.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-8">
                Whether you're looking to showcase your products, share your
                expertise, or partner with us to create an unforgettable
                experience, we'd love to hear from you. Let's collaborate and
                make this event truly impactful.
              </p>
              <div className="buttongrid grid sm:grid-rows-2 sm:grid-cols-2 gap-4 items-center">
                <Link
                  href="https://forms.gle/Dw1LGrr86n6QPCHr7"
                  target="_blank"
                >
                  <StolzlThinButton>Become a Vendor</StolzlThinButton>
                </Link>
                <Link
                  href="https://forms.gle/yv1B2jJQ6WcBW4fy7"
                  target="_blank"
                >
                  <StolzlThinButton>Become a Coach</StolzlThinButton>
                </Link>
                <Link
                  href="https://forms.gle/myYHvaVwG54sxfeR9"
                  target="_blank"
                >
                  <StolzlThinButton>Become a Sponsor</StolzlThinButton>
                </Link>
                <Link href="/contact?subject=business" target="_blank">
                  <StolzlThinButton>Become a Partner</StolzlThinButton>
                </Link>
              </div>
            </div>
            <div className="aspect-[4/5] w-full relative">
              <Image
                src="/images/fest/Flow Fest S1.webp"
                alt="Wellness vendors and partners collaborating at FlowFest"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Festival Map Section 
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide" style={{ fontFamily: 'TheSeasons-Light, serif' }}>
              Festival Layout
            </h2>
            <p className="text-lg font-light text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Explore our carefully designed festival grounds with dedicated spaces for workshops, vendors, and community connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Main Stage</h3>
              <p className="text-sm font-light text-stone-600">Opening ceremonies, keynote speakers, and evening performances</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Workshop Zones</h3>
              <p className="text-sm font-light text-stone-600">Intimate sessions for movement, meditation, and wellness practices</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Vendor Village</h3>
              <p className="text-sm font-light text-stone-600">Wellness products, local artisans, and sustainable living solutions</p>
            </div>
          </div>

          <div className="h-96 bg-stone-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-stone-400 mx-auto mb-4" />
              <p className="text-stone-600 font-light">Festival Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      * Session Previews Section 
      <section id="session-preview" className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide" style={{ fontFamily: 'TheSeasons-Light, serif' }}>
              What to Expect
            </h2>
            <p className="text-lg font-light text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Discover the transformative experiences awaiting you at FlowFest 2025. From intimate workshops to community celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            * {/* Morning Movement *
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock size={16} className="text-stone-500" />
                <span className="text-sm font-light text-stone-500">6:30 AM</span>
              </div>
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Morning Movement</h3>
              <p className="text-sm font-light text-stone-600 mb-6 leading-relaxed">
                Start your day with gentle yoga and mindful movement as the sun rises over the lake. Perfect for all levels.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-stone-500">Lake View Area</span>
                <ArrowRight size={16} className="text-stone-400" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock size={16} className="text-stone-500" />
                <span className="text-sm font-light text-stone-500">10:00 AM</span>
              </div>
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Breathwork Intensive</h3>
              <p className="text-sm font-light text-stone-600 mb-6 leading-relaxed">
                Experience the power of conscious breathing techniques to release tension and unlock your full potential.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-stone-500">Workshop Zone A</span>
                <ArrowRight size={16} className="text-stone-400" />
              </div>
            </div>

            
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock size={16} className="text-stone-500" />
                <span className="text-sm font-light text-stone-500">All Day</span>
              </div>
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Wellness Market</h3>
              <p className="text-sm font-light text-stone-600 mb-6 leading-relaxed">
                Explore sustainable wellness products, local artisans, and discover tools for your mindful lifestyle.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-stone-500">Vendor Village</span>
                <ArrowRight size={16} className="text-stone-400" />
              </div>
            </div>

            
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock size={16} className="text-stone-500" />
                <span className="text-sm font-light text-stone-500">4:00 PM</span>
              </div>
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Community Circle</h3>
              <p className="text-sm font-light text-stone-600 mb-6 leading-relaxed">
                Connect with fellow practitioners in a celebration of mindful community and shared experiences.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-stone-500">Main Stage</span>
                <ArrowRight size={16} className="text-stone-400" />
              </div>
            </div>

            * Evening Meditation 
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock size={16} className="text-stone-500" />
                <span className="text-sm font-light text-stone-500">7:30 PM</span>
              </div>
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Evening Meditation</h3>
              <p className="text-sm font-light text-stone-600 mb-6 leading-relaxed">
                Wind down with guided meditation as the sun sets, preparing your mind and body for restful sleep.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-stone-500">Garden Sanctuary</span>
                <ArrowRight size={16} className="text-stone-400" />
              </div>
            </div>

            * Wellness Talks 
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="flex items-center space-x-2 mb-4">
                <Clock size={16} className="text-stone-500" />
                <span className="text-sm font-light text-stone-500">Throughout Day</span>
              </div>
              <h3 className="text-xl font-extralight text-stone-800 mb-4">Wellness Talks</h3>
              <p className="text-sm font-light text-stone-600 mb-6 leading-relaxed">
                Learn from wellness experts about nutrition, mental health, and sustainable living practices.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-stone-500">Knowledge Hub</span>
                <ArrowRight size={16} className="text-stone-400" />
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Call to Action */}
      <section className="py-32 px-8 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-extralight mb-8 tracking-wide"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            Ready to Transform?
          </h2>
          <p className="text-lg font-light mb-12 leading-relaxed max-w-2xl mx-auto">
            Join us for three days of transformation, connection, and wellness.
            Secure your spot at the Flow Fest Dhaka 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://eventure.services/e/Flow-Fest-2025-685a6492b5679d50defb0a6f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StolzlThinButton>Register Now</StolzlThinButton>
            </Link>
            <Link href="/contact">
              <StolzlThinButton>Contact Us</StolzlThinButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      {/* <Footer subtitle="FLOWFEST 2025" /> */}
    </div>
  );
}
