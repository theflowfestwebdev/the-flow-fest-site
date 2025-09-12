"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, Calendar, MapPin, Clock} from "lucide-react";
import StolzlThinButton from "@/components/ui/StolzlThinButton";
import {sanityClient, eventsQuery, type Event} from "@/lib/sanity";
import {formatEventDate, getEventTypes} from "@/lib/utils";
import {sampleEvents} from "@/lib/sampleEvents";
import {urlFor} from "@/lib/sanity";

export default function DhakaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Check if Sanity is configured
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "your-project-id") {
          // Use sample events if Sanity is not configured
          setEvents(sampleEvents);
          setError(null);
        } else {
          // Try to fetch from Sanity
          const fetchedEvents = await sanityClient.fetch(eventsQuery);
          setEvents(fetchedEvents);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Using sample data instead.");
        // Fallback to sample events
        setEvents(sampleEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const eventTypes = getEventTypes(events);

  const filteredEvents =
    selectedFilter === "ALL"
      ? events
      : events.filter(event => event.type === selectedFilter);

  return (
    <div
      className="min-h-screen bg-white"
      style={{fontFamily: "Acumin Pro Light, sans-serif"}}
    >
      {/* Hero Section - FlowFest 25 Focus */}
      <section className="pt-40 pb-24 px-8 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-sm font-light tracking-[0.2em] opacity-80 uppercase">
                  Dhaka, Bangladesh
                </span>
              </div>
              <h1
                className="text-6xl md:text-7xl font-extralight mb-6"
                style={{fontFamily: "TheSeasons-Light, serif"}}
              >
                THE FLOW FEST 2025
              </h1>
              <p className="text-xl font-light leading-relaxed mb-12 max-w-lg">
                The Flow Fest's biggest celebration returns to where it all
                began. Join us for three days of transformation in Dhaka.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-12 text-lg opacity-90 font-light mb-12">
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a
                  href="https://eventure.services/e/Flow-Fest-2025-685a6492b5679d50defb0a6f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <StolzlThinButton className="w-full sm:w-auto">
                    Register Now
                  </StolzlThinButton>
                </a>
                <Link href="/dhaka/fest" className="w-full sm:w-auto">
                  <StolzlThinButton className="w-full sm:w-auto">
                    Event Details
                  </StolzlThinButton>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] max-w-md w-screen">
              <Image
                src="/images/dhaka/Flow Fest S3.webp"
                alt="Register for Flow Fest 2025 Dhaka - The Flow's biggest celebration in Bangladesh"
                fill
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className="text-5xl md:text-6xl font-extralight text-stone-800 mb-6"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Dhaka Events Calendar
            </h2>
            <p className="text-lg font-light text-stone-500 leading-relaxed">
              Discover our regular wellness gatherings transforming Dhaka's
              landscape.
            </p>
          </div>
          {/* <div className="flex flex-wrap gap-3 justify-center">
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`px-6 py-2 text-sm rounded-full uppercase transition-colors duration-300 ${
                  selectedFilter === type
                    ? "bg-[#8B7C6B] text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 uppercase"
                }`}
                style={{
                  fontFamily: "Stolzl Book, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                {type.charAt(0) + type.slice(1).toLowerCase()}
              </button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800 mx-auto"></div>
              <p className="mt-4 text-stone-600 font-light">
                Loading events...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              {/* <p className="text-red-600 font-light">{error}</p> */}
              <p>Unable to load events</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 text-stone-600 hover:text-stone-800 font-light underline"
              >
                Try again
              </button>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-stone-600 font-light">
                No events found for the selected filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <div
                  key={event._id}
                  className="bg-white rounded-lg overflow-hidden border border-stone-200/80 hover:shadow-xl transition-shadow duration-300 group max-w-sm w-fit"
                >
                  {/* Event Image */}
                  {event.image && event.image.asset ? (
                    <div className="w-full">
                      <Image
                        src={urlFor(event.image)
                          .auto("format")
                          .quality(75)
                          .url()}
                        width={400}
                        height={500}
                        alt={event.image.alt || event.title}
                        style={{objectFit: "cover"}}
                        className="rounded-t-lg"
                        priority // remove this if image is not above-the-fold
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-stone-100 flex items-center justify-center text-stone-300">
                      <span>No Image</span>
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2 text-stone-500">
                        <Calendar size={16} />
                        <span className="text-sm font-light tracking-wider uppercase">
                          {event.date}
                        </span>
                      </div>
                      {/* <span className="text-sm font-light text-stone-500">{event.spots}</span> */}
                    </div>

                    <div className="mb-6">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium tracking-widest ${event.typeColor} rounded-full uppercase`}
                        style={{fontFamily: "Stolzl Book, sans-serif"}}
                      >
                        {event.title}
                      </span>
                    </div>

                    <h3 className="text-1xl font-extralight text-stone-800 mb-4 ">
                      {event.description}
                    </h3>

                    <div className="flex items-center space-x-2 mb-6 text-stone-600">
                      <a
                        href={event.location_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide border-b border-stone-200 pb-2 cursor-pointer"
                      >
                        <MapPin size={16} />
                        <span className="text-sm font-light">
                          {event.location}
                        </span>
                      </a>
                    </div>

                    <div className="flex items-center space-x-2 mb-8 text-stone-600">
                      <Clock size={16} />
                      <span className="text-sm font-light">{event.time}</span>
                    </div>

                    <div className="flex flex-col space-y-3">
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide border-b border-stone-200 pb-2 cursor-pointer"
                      >
                        <span className="hover:underline">REGISTER</span>
                        <ArrowRight size={16} />
                      </a>

                      {/* <button className="flex items-center justify-between text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide">
                        <span>EVENT DETAILS</span>
                        <ArrowRight size={16} />
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-800 flex flex-col items-center">
        <div className="max-w-7xl">
          <div className="text-center max-w-xl mx-auto px-20 py-10 flex flex-col justify-between border-b border-primary/30">
            <h3
              className="text-4xl md:text-5xl font-extralight text-white mb-6 "
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Check out our studio schedule to discover our weekly classes.
            </h3>
            <Link href={"https://schedule.dhakaflow.com/"}>
              <StolzlThinButton>STUDIO SCHEDULE</StolzlThinButton>
            </Link>
          </div>
        </div>
        <div className="mt-24 flex flex-col lg:flex-row items-center justify-center mx-8">
          <div className="relative aspect-[4/5] max-w-md w-screen">
            <Image
              src={"/images/dhaka/workplace-workshop-1.jpg"}
              alt="Workplace wellness programs"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-contain px-4"
            />
          </div>
          <div className="text-center max-w-xl mx-auto py-10 lg:px-16 flex flex-col">
            <h3
              className="text-4xl md:text-5xl font-extralight text-white mb-6 mx-8"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Discover more on our Workplace Wellness programs to bring the flow
              to your team.
            </h3>
            <div className="w-1/2 mt-12 h-20 border-r border-primary/30"></div>
          </div>
        </div>
        <div className="my-12 flex flex-col lg:flex-row-reverse items-center justify-center mx-8">
          <div className="relative aspect-[4/5] max-w-md w-screen">
            <Image
              src={"/images/dhaka/workplace-workshop-2.jpg"}
              alt="Workplace wellness programs"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-contain px-4"
            />
          </div>
          <div className="text-center max-w-xl mx-auto py-10 lg:px-16 flex flex-col">
            <h3
              className="text-4xl md:text-5xl font-extralight text-white mb-6 mx-8"
              style={{fontFamily: "TheSeasons-Light, serif"}}
            >
              Let the statistics speak for themselves.
            </h3>
            <p className="text-xl font-light text-white/85 leading-relaxed mb-8 max-w-lg px-4">
              Get in touch and enroll your team into our workplace wellness
              programs now to get in the flow, and power up your productivity.
            </p>
            <Link href={"/contact?subject=events"}>
              <StolzlThinButton>Contact Us</StolzlThinButton>
            </Link>
          </div>
        </div>
      </section>
      <div
        id="class_initializer"
        className="hidden bg-teal-100 text-teal-800 text-orange-100 text-orange-800"
      ></div>
      {/* Where it all began Section */}
      {/* <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8" style={{ fontFamily: 'TheSeasons-Light, serif' }}>
                Where It All Began
              </h2>
              <p className="text-lg font-light text-stone-500 leading-relaxed mb-6">
                Dhaka is the birthplace of The Flow movement. Here, amidst the vibrant energy of Bangladesh's capital, we began our journey of transforming urban wellness culture.
              </p>  
              <p className="text-lg font-light text-stone-500 leading-relaxed mb-10">
                From the bustling streets to the peaceful parks, we're creating pockets of tranquility and mindful community in the heart of this magnificent city.
              </p>
              <StolzlThinButton>
                Our Story
              </StolzlThinButton>
            </div>
            <div className="h-[500px] w-full relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Dhaka skyline with traditional and modern architecture, showing the vibrant city where The Flow began"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Culture Transformation Section */}
      {/* <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-16" style={{ fontFamily: 'TheSeasons-Light, serif' }}>
            Transforming the Dhaka Wellness Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-white border border-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-extralight text-stone-800" style={{ fontFamily: 'TheSeasons-Light, serif' }}>Urban Oasis</h3>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-xs mx-auto">
                Creating peaceful sanctuaries within the city's green spaces, offering respite from urban chaos.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-white border border-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-extralight text-stone-800" style={{ fontFamily: 'TheSeasons-Light, serif' }}>Community Building</h3>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-xs mx-auto">
                Fostering connections between like-minded individuals seeking wellness and mindful living.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-white border border-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-2xl font-extralight text-stone-800" style={{ fontFamily: 'TheSeasons-Light, serif' }}>Sustainable Practices</h3>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-xs mx-auto">
                Leading by example with zero-waste events and eco-conscious wellness practices.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8" style={{ fontFamily: 'TheSeasons-Light, serif' }}>
            Be Part of our Journey
          </h2>
          <p className="text-lg font-light text-stone-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join our growing community of mindful practitioners who are transforming how we live, breathe, and connect in Bangladesh's vibrant capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StolzlThinButton>
              Join The Flow
            </StolzlThinButton>
            <StolzlThinButton>
              Follow Our Journey
            </StolzlThinButton>
          </div>
        </div>
      </section> */}

      {/* Footer Navigation */}
    </div>
  );
}
