"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu, X, Play, Pause, Volume2} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StolzlThinButton from "@/components/ui/StolzlThinButton";
import {sanityClient, retreatsQuery, type Retreat, urlFor} from "@/lib/sanity";
import {sampleRetreats} from "@/lib/sampleRetreats";

export default function RetreatsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [retreats, setRetreats] = useState<Retreat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const fetchRetreats = async () => {
      try {
        setLoading(true);
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "your-project-id") {
          setRetreats(sampleRetreats);
          setError(null);
        } else {
          const fetched = await sanityClient.fetch(retreatsQuery);
          setRetreats(fetched);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching retreats:", err);
        setError("Failed to load retreats. Using sample data instead.");
        setRetreats(sampleRetreats);
      } finally {
        setLoading(false);
      }
    };

    fetchRetreats();
  }, []);

  return (
    <div className="min-h-screen bg-white font-acuminLight">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/25 to-black/80 z-10" />

        <div className="absolute inset-0">
          <video
            src="/videos/retreats-splash.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            style={{objectFit: "cover", width: "100%", height: "100%"}}
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-theSeasonsRegular tracking-[0.4em] mb-8">
              THE FLOW FEST
            </h1>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-[0.3em] mb-12">
              RETREATS
            </h2>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
              Our retreats are an immersive experience, dedicated to the
              practice of renewal
              <br />
              and designed to transform more than your body.
            </p>
          </div>
        </div>

        {/* Video Controls */}
        {/* <div className="absolute bottom-8 right-8 flex items-center space-x-4">
          <button 
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            className="text-white hover:text-white/80 transition-colors"
          >
            {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />} 
          </button>
          <button className="text-white hover:text-white/80 transition-colors">
            <Volume2 size={24} />
          </button>
        </div> */}

        {/* Help Button */}
        {/* <div className="absolute bottom-8 left-8">
          <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-light hover:bg-white/30 transition-colors">
            <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
              <span className="text-xs">?</span>
            </div>
            <span>Help</span>
          </button>
        </div> */}
      </section>

      {/* Retreat Details Sections */}
      <section className="py-24 px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800 mx-auto"></div>
              <p className="mt-4 text-stone-600 font-light">
                Loading retreats...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 font-light">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 text-stone-600 hover:text-stone-800 font-light underline"
              >
                Try again
              </button>
            </div>
          ) : (
            <div className="space-y-24 flex flex-col items-center">
              {retreats.map((retreat, idx) => (
                <div
                  key={retreat._id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                  {/* Image */}
                  <div
                    className={`max-w-sm md:max-w-lg md:w-full ${
                      idx % 2 === 0
                        ? "order-2 lg:order-1"
                        : "order-2 lg:order-2"
                    }`}
                  >
                    {retreat.image && retreat.image.asset ? (
                      <Image
                        src={
                          retreat.image.asset.url
                            ? retreat.image.asset.url
                            : urlFor(retreat.image)
                                .auto("format")
                                .quality(80)
                                .url()
                        }
                        alt={retreat.image.alt || retreat.title}
                        width={300}
                        height={400}
                        className="w-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-[500px] bg-stone-200" />
                    )}
                  </div>

                  {/* Details */}
                  <div
                    className={
                      idx % 2 === 0
                        ? "order-2 md:order-2 space-y-8"
                        : "order-2 md:order-1 space-y-8"
                    }
                  >
                    <div>
                      <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-4 tracking-wide font-theSeasonsLight">
                        {retreat.title}
                      </h2>
                      {retreat.subtitle && (
                        <h3 className="text-3xl md:text-4xl font-extralight text-stone-700 tracking-wide">
                          {retreat.subtitle}
                        </h3>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xl font-light text-stone-600 tracking-wide">
                          {retreat.dateRange}
                        </p>
                      </div>

                      <div className="flex md:flex-col gap-12 md:gap-6 items-start">
                        <div className="">
                          <p className="text-lg font-light text-stone-600 mb-2">
                            Led by
                          </p>
                          <p className="text-lg text-stone-800">
                            {retreat.leaders && retreat.leaders.length > 0 ? (
                              <span className="underline decoration-stone-400 underline-offset-4">
                                {retreat.leaders.join(
                                  '</span> and <span class="underline decoration-stone-400 underline-offset-4">'
                                )}
                              </span>
                            ) : (
                              <span>—</span>
                            )}
                          </p>
                        </div>

                        <div>
                          <p className="text-lg font-light text-stone-600 mb-2">
                            Hosted by
                          </p>
                          <p className="text-lg text-stone-800">
                            <span className="underline decoration-stone-400 underline-offset-4">
                              {retreat.hostedBy}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8">
                      <Link
                        href={`/contact?subject=retreats&message=Please put me on the waitlist for the ${encodeURIComponent(retreat.title)}!`}
                      >
                        <StolzlThinButton>SIGN UP</StolzlThinButton>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start sm:gap-8 text-center mt-40 px-8">
          <h2 className="text-3xl md:text-4xl font-extralight text-black font-theSeasonsLight mb-8 tracking-wide">
            Check out our past retreats.
            {/* <span className="font-sans">!</span> */}
          </h2>
          {/* <a
            href="mailto:theretreat@theflow.com"
            className="text-xl font-light text-stone-800 underline decoration-stone-500 underline-offset-4 hover:text-stone-600 transition-colors tracking-wide"
          >
            theretreat@theflow.com
          </a> */}
          <Link
            href="https://www.youtube.com/@theflowfest/playlists"
            target="_blank"
          >
            <StolzlThinButton>Click Here</StolzlThinButton>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide font-theSeasonsLight">
              What will you experience?
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* The Flow */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                The Flow
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                The Flow Fest retreats are uniquely curated to give students
                more time to connect to the subtle layers of body, mind, and
                spirit.
              </p>
            </div>

            {/* Integration */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                Integration
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                The retreat brings the flow fest together with complimentary
                modalities and programming to expand, deepen, and integrate your
                experience.
              </p>
            </div>

            {/* Nourishment */}
            {/* <div className="text-center space-y-6">
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                Nourishment
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                All meals on our retreats are gluten-free, dairy-free,
                refined-sugar free and sourced from local farms.
              </p>
            </div> */}

            {/* Community */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                Community
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                We believe the most profound experiences happen when sharing
                space with like-minded people. From morning meditations to
                evening bonfires, we are on this journey together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-stone-100 mb-8 tracking-wide font-theSeasonsLight">
            Any questions?
          </h2>
          {/* <a
            href="mailto:theretreat@theflow.com"
            className="text-xl font-light text-stone-800 underline decoration-stone-500 underline-offset-4 hover:text-stone-600 transition-colors tracking-wide"
          >
            theretreat@theflow.com
          </a> */}
          <Link href="/contact?subject=retreats">
            <StolzlThinButton>Message us</StolzlThinButton>
          </Link>
        </div>
      </section>

      {/* Footer Navigation */}
    </div>
  );
}
