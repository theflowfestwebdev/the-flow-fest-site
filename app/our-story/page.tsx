"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Play, Pause } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="The Flow community gathering in nature - people practicing yoga and meditation in a beautiful outdoor setting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-extralight tracking-[0.3em] mb-12">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-extralight tracking-[0.2em] opacity-90 leading-relaxed max-w-4xl">
              The Flow is a wellness platform curating experiences that
              cultivate healthy lifestyles.
            </p>
          </div>
        </div>

        {/* Video Play Button */}
        <div className="absolute bottom-12 right-12">
          <button
            onClick={toggleVideo}
            className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </section>

      {/* Movement Section */}
      <section className="py-32 md:py-40 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide leading-tight">
                The Flow is a wellness platform
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-light text-stone-600 leading-relaxed">
                  In each city we visit, we bring together wellness promoters
                  and wellness seekers, to create a community around holistic
                  wellbeing.
                </p>
                <p className="text-lg font-light text-stone-600 leading-relaxed">
                  We believe healing happens through movement, meditation and
                  connection, in nature.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Diverse group of people practicing yoga together in a serene natural setting"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flow Fest Section (replaces Philosophy) */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-12 tracking-wide text-center">
            Flow Fest
          </h2>
          <ol className="list-decimal pl-6 space-y-8">
            <li className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
              Flow Fest creates communities around holistic wellbeing through
              yoga, meditation, mindfulness, functional fitness, nutrition,
              mental health, and nature's healing powers to nurture the body,
              mind, and spirit.
            </li>
            <li className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
              Flow Fest gathers communities in extraordinary places to restore
              mind, body, and spirit through the timeless arts of connection
              from the stillness of meditation to the resonance of sound, from
              the nourishment of Ayurveda to the joy of moving together.
            </li>
            <li className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
              Flow Fest unites the healers, seekers, and dreamers who make a
              city come alive blending ancient wisdom and modern science to
              create mindful communities where we heal together.
            </li>
            <li className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
              Flow Fest is a vibrant community where the curious and the
              committed come together to explore and grow. Blending ancient
              wisdom with modern science, we nurture the mind, body, and spirit
              through shared experiences in yoga, meditation, mindful movement,
              and the healing gifts of nature creating a space where everyone
              can learn, connect, and belong.
            </li>
          </ol>
        </div>
      </section>

      {/* Video Section - Festival Highlights */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Experience Our Festivals
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the energy and community spirit that defines
              The Flow experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Festival scene with people dancing and celebrating wellness together"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Play size={24} />
                  </div>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Peaceful meditation circle at sunrise during a Flow festival"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Play size={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Zero waste festival setup with sustainable practices and eco-friendly materials"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide leading-tight">
                Our Vision & Values
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-light text-stone-600 leading-relaxed">
                  Our vision is to create spaces that are free, healthy, clean,
                  inclusive and green. Every gathering, every event, every
                  moment is designed with intention and care for our planet.
                </p>
                <p className="text-lg font-light text-stone-600 leading-relaxed">
                  Our events are conducted with zero plastic waste. We uphold
                  the principle of <em className="text-stone-800">ahimsa</em>{" "}
                  which means non-violence towards any living being. Our food
                  offerings feature healthy, delicious, plant-based meals that
                  nourish both body and soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
