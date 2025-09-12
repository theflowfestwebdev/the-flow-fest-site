"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import StolzlThinButton from "@/components/ui/StolzlThinButton"

export default function NotFound() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Acumin Pro Light, sans-serif' }}>
      <NavBar />
      
      {/* 404 Content */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Image */}
          <div className="absolute inset-0 scroll-animate">
            <Image
              src="/images/pose-1.jpg"
              alt="Serene yoga session at sunrise with mountain backdrop"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 scroll-animate">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-light text-stone-300 tracking-[0.1em] mb-4">
                404
              </h1>
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-[0.2em] mb-6 font-theSeasonsLight">
                PAGE NOT FOUND
              </h2>
              <p className="text-lg md:text-xl font-light text-stone-600 tracking-[0.1em] max-w-2xl mx-auto leading-relaxed">
                The page you're looking for seems to have wandered off on its own journey. 
                Perhaps it's time to return to your center and find your way back home.
              </p>
            </div>

          {/* Action Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
  <Link href="/">
    <StolzlThinButton className="group flex items-center gap-3 bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 text-base font-light tracking-[0.1em] transition-all duration-300">
      <Home size={20} className="group-hover:scale-110 transition-transform" />
      RETURN HOME
    </StolzlThinButton>
  </Link>

  <StolzlThinButton 
    onClick={() => window.history.back()}
    className="group flex items-center gap-3 border border-stone-400 text-stone-600 hover:bg-stone-800 px-8 py-4 text-base font-light tracking-[0.1em] transition-all duration-300"
  >
    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
    GO BACK
    </StolzlThinButton>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
