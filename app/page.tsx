// import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";

// import {Button} from "@/components/ui/button";
// import {
//   Menu,
//   X,
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
//   ChevronDown,
// } from "lucide-react";
import StolzlThinButton from "@/components/ui/StolzlThinButton";
import TimelineStatsSection from "@/app/stats-section";
import RetreatsCarousel from "@/components/retreats-carousel";

export default function HomePage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [currentRetreat, setCurrentRetreat] = useState(0);

  // const retreats = [
  //   {
  //     image: "/images/bhutan-mountains-min.jpg",
  //     alt: "Group meditation session in a serene natural setting",
  //     superTitle: "FEATURED EXPERIENCE",
  //     title: "Escape to the Himalayas",
  //     href: "/retreats",
  //     description:
  //       "Immerse yourself in transformative practices that unite body, mind, and spirit. Our signature retreats blend yoga, meditation, and conscious living in breathtaking natural environments.",
  //   },
  //   {
  //     image: "/images/dubai-desert-min.jpg",
  //     alt: "Serene coastal yoga retreat",
  //     superTitle: "UPCOMING RETREAT",
  //     title: "Dubai Wellness Getaway",
  //     href: "/retreats/coastal-serenity",
  //     description:
  //       "In the golden light of Dubai’s desert and skyline, we crafted a space for intentional rest and deep renewal. From guided meditations to luxury wellness experiences, this retreat is your permission to slow down and rise higher.",
  //   },
  // ];

  // const handlePrevRetreat = () => {
  //   setCurrentRetreat(prev => (prev === 0 ? retreats.length - 1 : prev - 1));
  // };

  // const handleNextRetreat = () => {
  //   setCurrentRetreat(prev => (prev === retreats.length - 1 ? 0 : prev + 1));
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     setIsScrolled(scrollPosition > 100);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{fontFamily: "Acumin Pro Light, sans-serif"}}
    >
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pose-1-min.avif"
            alt="Serene yoga session at sunrise with mountain backdrop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/25 to-black/90" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
          <div className="flex flex-col items-center -mt-44">
            {/* Logo */}
            <Image
              src="/new-logo-white.svg"
              alt="The Flow Logo"
              width={100}
              height={100}
              priority
              className="w-auto h-48 mb-6 opacity-90"
            />

            {/* Alternating Text */}
            {/* Desktop version */}
            <div className="hidden md:block relative h-10">
              <span
                className="absolute text-3xl text-[#8B7C6B] font-extralight tracking-[0.2em] animate-text-fade font-theSeasonsLightItalic -mt-4"
                style={{opacity: 0.9}}
              >
                Lightness of Body
              </span>
              <span
                className="absolute text-3xl text-[#8B7C6B] font-extralight tracking-[0.2em] animate-text-fade animation-delay-4000 font-theSeasonsLightItalic -mt-4"
                style={{opacity: 0}}
              >
                Freedom of Mind
              </span>
            </div>

            {/* Mobile version (centered text) */}
            <div className="block md:hidden relative h-8 -mt-8">
              <span
                className="absolute inset-0 flex items-center justify-center text-2xl text-[#8B7C6B] font-extralight tracking-[0.2em] animate-text-fade font-theSeasonsLight"
                style={{opacity: 0.9}}
              >
                Lightness of Body
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center text-2xl text-[#8B7C6B] font-extralight tracking-[0.2em] animate-text-fade animation-delay-4000 font-theSeasonsLight"
                style={{opacity: 0}}
              >
                Freedom of Mind
              </span>
            </div>
          </div>
        </div>
        <style>{`
          .animate-text-fade {
            animation: fade 8s infinite;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes fade {
            0% {
              opacity: 0.9;
            }
            40% {
              opacity: 0.9;
            }
            50% {
              opacity: 0;
            }
            90% {
              opacity: 0;
            }
            100% {
              opacity: 0.9;
            }
          }
        `}</style>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-30 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-5xl md:text-6xl font-extralight text-stone-800 mb-16 tracking-wide leading-tight"
            style={{fontFamily: "TheSeasons-Light, serif"}}
          >
            MINDFUL LIVING AND
            <br />
            CONSCIOUS COMMUNITY
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-light text-stone-500 leading-relaxed mb-12">
              The Flow Fest creates transformative experiences through mindful
              movement, conscious nutrition, and authentic community connection.
              Discover the art of intentional living in our carefully curated
              spaces designed to nurture your journey toward holistic well
              being.
            </p>
            {/* <Link href="/our-story"> */}
            <Link href="/about">
              <StolzlThinButton>Discover Our Story</StolzlThinButton>
            </Link>
          </div>
        </div>
      </section>
      {/* Flow Fest 25 */}
      <section className="py-32 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[600px] rounded-none overflow-hidden">
            <div className="flex flex-col justify-center h-full px-0 md:px-12 lg:px-20">
              <h3
                className="text-5xl md:text-6xl font-light text-stone-900 mb-8 md:mb-12 leading-tight"
                style={{fontFamily: "TheSeasons-Light, serif"}}
              >
                The Flow Fest
                <br />
                2025
              </h3>
              <p className="text-lg text-stone-700 font-normal mb-6 max-w-lg">
                Join us on November 6–8, 10 AM – 7 PM at Gulshan Society Lake
                Park for Bangladesh’s leading celebration of holistic wellness.
                This year’s festival blends movement, mindfulness, and music
                with: Hundreds of free classes (yoga, martial arts, Zumba).
                Eco-conscious market featuring organic brands and responsible
                consumption. Panels & workshops on mental health, nutrition, and
                Sufi mindfulness. Family-friendly fun with art therapy, kids’
                zones, and live music.
              </p>
              <div className="flex items-center gap-4 mb-8 md:mb-0">
                <Link
                  href="https://eventure.services/e/Flow-Fest-2025-685a6492b5679d50defb0a6f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StolzlThinButton>Register Now</StolzlThinButton>
                </Link>
                <Link href="/dhaka/fest" rel="noopener noreferrer">
                  <StolzlThinButton>More info</StolzlThinButton>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-lg flex items-start md:items-center justify-end mt-8 lg:mt-0">
              <Image
                src="/images/home/Flow Fest S2.webp"
                alt="The FLow Fest Poster"
                fill
                className="object-contain rounded-none"
                style={{objectPosition: "center"}}
              />
            </div>
          </div>
        </div>
      </section>

      <RetreatsCarousel />

      {/* Timeline approach */}
      <TimelineStatsSection />

      {/* Enlightenment Market Section */}
      {/* <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-light text-stone-500 tracking-[0.2em] uppercase">Discover</span>
                <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide leading-tight">
                  The Enlightenment
                  <br />
                  Market
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-xl font-light text-stone-600 leading-relaxed">
                  Your gateway to conscious practitioners and wellness businesses within The Flow community.
                </p>
                <p className="text-lg font-light text-stone-600 leading-relaxed">
                  Connect with verified coaches, transformative healers, and conscious businesses who share our
                  commitment to authentic wellness and mindful living. From meditation masters to sustainable brands,
                  discover the practitioners and partners who can support your journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enlightenment-market">
                  <Button className="bg-stone-800 hover:bg-stone-900 text-white px-12 py-4 text-sm font-light tracking-[0.1em] rounded-none">
                    EXPLORE MARKETPLACE
                  </Button>
                </Link>
                <Link href="/enlightenment-market/coaches">
                  <Button
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 px-12 py-4 text-sm font-light tracking-[0.1em] bg-transparent rounded-none"
                  >
                    FIND COACHES
                  </Button>
                </Link>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-stone-50 p-6 text-center">
                    <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🧘</span>
                    </div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Coaches</h3>
                    <p className="text-sm font-light text-stone-600">Verified wellness practitioners</p>
                  </div>
                  <div className="bg-stone-50 p-6 text-center">
                    <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🌱</span>
                    </div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Businesses</h3>
                    <p className="text-sm font-light text-stone-600">Conscious brands & services</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-stone-50 p-6 text-center">
                    <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">✨</span>
                    </div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Healers</h3>
                    <p className="text-sm font-light text-stone-600">Transformative healing arts</p>
                  </div>
                  <div className="bg-stone-50 p-6 text-center">
                    <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">🏢</span>
                    </div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Retreats</h3>
                    <p className="text-sm font-light text-stone-600">Immersive wellness destinations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Navigation */}
    </div>
  );
}
