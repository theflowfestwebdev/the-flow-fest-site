"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";

interface NavBarProps {
  activeLocation?: "dhaka" | "dubai" | "galle";
}

export default function NavBar({activeLocation}: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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

  const navLinkClass = (location: string) =>
    `text-sm font-light transition-colors tracking-[0.1em] ${
      activeLocation === location
        ? isScrolled
          ? "text-stone-900 border-b border-stone-900"
          : "text-white/90 border-b border-white"
        : isScrolled
          ? "text-stone-700 hover:text-stone-900"
          : "text-white/90 hover:text-white"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo (always visible) */}
            <div className="flex items-center mr-12 ml-4">
              <Link href="/" className="flex items-start">
                <Image
                  src="/flowfest-icon.svg"
                  alt="The Flow Logo"
                  width={200}
                  height={200}
                  className="w-12"
                />
              </Link>
            </div>

            {/* Desktop Nav + Hamburger */}

            <div className="flex items-center justify-end md:justify-between space-x-8 md:space-x-16 w-full">
              {/* Desktop Links (hidden on mobile) */}
              <div className="hidden md:flex items-center space-x-12">
                <Link href="/dhaka" className={navLinkClass("dhaka")}>
                  DHAKA
                </Link>
                <Link href="/dubai" className={navLinkClass("dubai")}>
                  DUBAI
                </Link>
                <Link href="/galle" className={navLinkClass("galle")}>
                  GALLE
                </Link>
              </div>
              <div className="flex items-center space-x-12">
                <div className="hidden md:flex items-center space-x-12">
                  <Link href="/about" className={navLinkClass("about")}>
                    ABOUT
                  </Link>
                  <Link href="/media" className={navLinkClass("media")}>
                    MEDIA
                  </Link>
                  <Link href="/contact" className={navLinkClass("contact")}>
                    CONTACT
                  </Link>
                  {/* Hamburger (always visible) */}
                </div>
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className={`mr-12 p-1.5 md:p-2 transition-colors ${
                    isScrolled
                      ? "text-stone-700 hover:text-stone-900"
                      : "text-white/90 hover:text-white"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu size={18} className="md:hidden" />
                  <Menu size={20} className="hidden md:block" />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex overflow-hidden">
          <div className="w-full md:w-96 bg-stone-50 p-6 md:p-8 flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <div className="flex items-center space-x-3">
                <Image
                  src="/new-logo-cropped.svg"
                  alt="The Flow Fest Logo"
                  width={32}
                  height={32}
                  className="w-auto h-14 md:h-14"
                />
                <div>
                  {/* <h2 className="text-xl font-extralight tracking-[0.2em] text-stone-800">the flow</h2>
                  <p className="text-xs font-light text-stone-600 tracking-[0.2em] mt-1">WELLNESS & LIFESTYLE</p> */}
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 md:p-2 text-stone-700 hover:text-stone-900 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} className="md:hidden" />
                <X size={20} className="hidden md:block" />
              </button>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-sm font-light text-stone-600 tracking-[0.2em] uppercase">
                  Locations
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <Link
                    href="/dhaka"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dhaka
                  </Link>
                  <Link
                    href="/dubai"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dubai
                  </Link>
                  <Link
                    href="/galle"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galle
                  </Link>
                </div>
              </div>
              <hr className="border-stone-200" />
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-sm font-light text-stone-600 tracking-[0.2em] uppercase">
                  Explore
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {/* <Link href="/fest" className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide" onClick={() => setIsMenuOpen(false)}>Fest</Link> */}
                  <Link
                    href="/about"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href="/retreats"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Retreats
                  </Link>
                  {/* <Link href="/wisdom" className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide" onClick={() => setIsMenuOpen(false)}>Wisdom</Link> */}
                  {/* <Link href="/enlightenment-market" className="block text-lg font-ligitght text-stone-800 hover:text-stone-600 transition-colors tracking-wide" onClick={() => setIsMenuOpen(false)}>Enlightenment Market</Link> */}
                  {/* <Link href="/our-story" className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide" onClick={() => setIsMenuOpen(false)}>Our Story</Link> */}
                  <Link
                    href="/media"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Media
                  </Link>
                  <Link
                    href="https://merchandise.dhakaflow.com/store/fae94c46-dfc0-4889-9dcf-ef414762a7b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-lg font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
}
