import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu, X, Calendar, MapPin, Users, Music, Sparkles} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StolzlThinButton from "@/components/ui/StolzlThinButton";

export default function DubaiPage() {
  return (
    <div className="min-h-screen bg-white font-acuminLight">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dubai/dubai-flow-min.png"
            alt="Dubai skyline at sunset with modern architecture and desert landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/55 to-black/80" />

        {/* Add pt on mobile so text isn’t pushed into navbar */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8 pt-24 md:pt-0">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.4em] mb-8 font-theSeasonsRegular">
              DUBAI
            </h1>
            <p className="text-lg md:text-2xl font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
              Join our two-day outdoor wellness festival featuring free yoga,
              breathwork, and dance, plus a conscious marketplace of plant-based
              cuisine and eco-friendly brands.
            </p>
            <div className="mt-8 space-y-2">
              <p className="text-base md:text-lg font-light tracking-wide">
                Zero plastic. All plant-based. Community-focused.
              </p>
            </div>
            <div className="mt-12">
              <a
                href="https://eventure.services/e/Dubai-Flow--6866696bb5679d50defb0f59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-7 py-2 border rounded-full text-white border-white bg-transparent font-normal uppercase tracking-[0.18em] text-base shadow-none transition-all duration-200 hover:bg-white hover:text-black font-stolzlThin">
                  GET YOUR TICKETS →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-32 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">
              Two Days of Transformation
            </h2>
            <p className="text-xl font-light text-stone-600 max-w-4xl mx-auto leading-relaxed">
              The Flow Fest Dubai brings together the world's leading wellness
              practitioners, conscious musicians, and mindful entrepreneurs for
              an unprecedented celebration of human potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Users size={32} className="text-stone-600" />
              </div>
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                Conscious Community
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                Connect with 5,000+ like-minded souls from around the globe in
                workshops, circles, and shared experiences that deepen our
                collective journey toward wellness.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Music size={32} className="text-stone-600" />
              </div>
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                Sacred Sounds
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                Experience transformative performances from conscious artists,
                sound healers, and musicians who create frequencies that elevate
                the soul and inspire inner peace.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Sparkles size={32} className="text-stone-600" />
              </div>
              <h3 className="text-2xl font-extralight text-stone-800 tracking-wide">
                Holistic Experiences
              </h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                Immerse yourself in yoga, meditation, breathwork, healing arts,
                conscious cuisine, and sustainable living practices from master
                teachers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 mx-auto max-w-lg md:max-w-5xl md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] w-full relative">
              <Image
                src="/images/dubai-poster.jpg"
                alt="Wellness vendors and partners collaborating at FlowFest"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide"
                style={{fontFamily: "TheSeasons-Light, serif"}}
              >
                Join Us as a Partner
              </h2>
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-6">
                We're thrilled to expand Flow Fest to Dubai: an epicenter of
                innovation, wellness, and conscious living. From curated vendors
                to transformative coaches and visionary sponsors, we're inviting
                partners who share our passion for holistic growth and
                meaningful impact.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-6">
                If you're based in the UAE and committed to elevating wellness,
                sustainability, and community connection, we'd love to
                collaborate. Whether you're showcasing mindful products, leading
                immersive experiences, or co-creating the vibe, Flow Fest Dubai
                is your platform to shine.
              </p>
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-8">
                Let’s build something extraordinary, together.
              </p>
              <div className="buttongrid grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-4 items-center">
                <Link href="/contact?subject=business" target="_blank">
                  <StolzlThinButton>Become a Vendor</StolzlThinButton>
                </Link>
                <Link href="/contact?subject=business" target="_blank">
                  <StolzlThinButton>Become a Coach</StolzlThinButton>
                </Link>
                <Link href="/contact?subject=business" target="_blank">
                  <StolzlThinButton>Become a Sponsor</StolzlThinButton>
                </Link>
                <Link href="/contact?subject=business" target="_blank">
                  <StolzlThinButton>Become a Partner</StolzlThinButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      {/* <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">
              Featured Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Large outdoor yoga session at sunrise with Dubai skyline in background"
                width={700}
                height={500}
                className="w-full h-80 object-cover mb-6"
              />
              <h3 className="text-2xl font-extralight text-stone-800 mb-4 tracking-wide">Desert Dawn Yoga</h3>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Begin each day with 1,000+ practitioners in synchronized movement as the sun rises over the Arabian
                desert, creating a powerful field of collective intention and energy.
              </p>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Conscious music performance with artists and audience in meditation"
                width={700}
                height={500}
                className="w-full h-80 object-cover mb-6"
              />
              <h3 className="text-2xl font-extralight text-stone-800 mb-4 tracking-wide">Sacred Sound Journeys</h3>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Experience transformative sound healing sessions and conscious music performances that transport you to
                deeper states of awareness and connection with your inner wisdom.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Breathwork circle with participants in deep meditation"
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-light text-stone-800 mb-2 tracking-wide">Master Breathwork</h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                Powerful breathing techniques with world-renowned facilitators.
              </p>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Sustainable living workshop with eco-friendly practices demonstration"
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-light text-stone-800 mb-2 tracking-wide">Conscious Living</h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                Learn sustainable practices for mindful, eco-conscious living.
              </p>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Healing arts session with practitioners offering various modalities"
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-light text-stone-800 mb-2 tracking-wide">Healing Arts</h3>
              <p className="text-sm font-light text-stone-600 leading-relaxed">
                Experience diverse healing modalities from master practitioners.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Early Bird Section */}
      {/* <section className="py-24 px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">
            Early Bird Registration
          </h2>
          <p className="text-xl font-light text-stone-600 mb-12 leading-relaxed">
            Secure your place at FlowFest 26 and join us for this transformative celebration. Limited early bird tickets
            available.
          </p>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg font-light text-stone-600 mb-2">Early Bird Price</p>
              <p className="text-4xl font-extralight text-stone-800 tracking-wide">AED 1,299</p>
              <p className="text-sm font-light text-stone-500">Regular Price: AED 1,799</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-stone-800 hover:bg-stone-900 text-white px-12 py-4 text-sm font-light tracking-[0.1em] rounded-none">
                REGISTER NOW
              </Button>
              <Button
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-12 py-4 text-sm font-light tracking-[0.1em] bg-transparent rounded-none"
              >
                JOIN WAITLIST
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Navigation */}
    </div>
  );
}
