"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Instagram, Facebook, Youtube} from "lucide-react";
import {Input} from "@/components/ui/input";

interface FooterProps {
  subtitle?: string;
  links?: {href: string; label: string}[];
}

const defaultLinks = [
  {href: "/dhaka", label: "Dhaka"},
  {href: "/dubai", label: "Dubai"},
  {href: "/galle", label: "Galle"},
  {href: "/retreats", label: "Retreats"},
  {href: "/wisdom", label: "Wisdom"},
  {href: "/enlightenment-market", label: "Enlightenment Market"},
  {href: "/our-story", label: "Our Story"},
];

const locationLinks = [
  {href: "/dhaka", label: "Dhaka"},
  {href: "/dubai", label: "Dubai"},
  {href: "/galle", label: "Galle"},
];
const pageLinks = [
  // { href: "/fest", label: "Fest" },
  {href: "/about", label: "About us"},
  {href: "/retreats", label: "Retreats"},
  // { href: "/wisdom", label: "Wisdom" },
  // { href: "/enlightenment-market", label: "Enlightenment Market" },
  // { href: "/our-story", label: "Our Story" },
  {href: "/media", label: "Media"},
  {
    href: "https://merchandise.dhakaflow.com/store/fae94c46-dfc0-4889-9dcf-ef414762a7b7",
    label: "Shop",
  },
];

export default function Footer({
  subtitle = "GLOBAL WELLNESS COMMUNITY",
  links = defaultLinks,
}: FooterProps) {
  return (
    <>
      {/* Newsletter Banner
      <div className="w-full bg-stone-50 py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="text-white text-3xl md:text-4xl font-light tracking-widest text-center md:text-left" style={{ fontFamily: 'TheSeasons-Regular, serif' }}>
          JOIN OUR FAMILY
        </div>
        <form className="flex flex-col md:flex-row gap-4 md:gap-2 w-full max-w-2xl md:ml-12">
          <Input type="email" placeholder="TYPE YOUR EMAIL ADDRESS..." className="flex-1 px-4 py-3 bg-white text-stone-700 border-none text-base font-light" />
          <button type="submit" className="bg-[#8B7C6B] hover:bg-[#6e6356] text-white px-8 py-3 text-base font-light tracking-[0.1em]" style={{ letterSpacing: '0.15em' }}>
            JOIN US
          </button>
        </form>
      </div> */}
      {/* Main Footer */}
      <footer className="bg-stone-50 pt-12 pb-16 md:pb-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-y-12 md:gap-y-0 md:gap-x-12 px-2 md:px-16">
          {/* Logo column - hidden on mobile */}
          <div className="flex-[0.8] hidden md:flex flex-col items-start justify-center mb-0 md:pl-0">
            <Image
              src="/new-logo-cropped.svg"
              alt="The Flow Logo"
              width={100}
              height={100}
              className="w-auto h-44 -mt-10"
            />
            <p className="text-sm font-light text-stone-600 tracking-[0.2em] -mt-10 text-left">
              {subtitle}
            </p>
          </div>
          {/* Links columns */}
          <div className="flex-[2.2] flex flex-row justify-center gap-x-16 md:gap-x-24 gap-y-8 md:gap-y-12">
            <div className="space-y-3 min-w-[140px] text-center md:text-left">
              <div className="text-xs font-light uppercase tracking-[0.2em] text-stone-500 mb-4 md:mb-5">
                LOCATIONS
              </div>
              {locationLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block hover:text-stone-900 transition-colors tracking-[0.1em] text-sm font-light text-stone-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3 min-w-[140px] text-center md:text-left">
              <div className="text-xs font-light uppercase tracking-[0.2em] text-stone-500 mb-4 md:mb-5">
                EXPLORE
              </div>
              {pageLinks.map(link =>
                link.href.startsWith("http") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-stone-900 transition-colors tracking-[0.1em] text-sm font-light text-stone-600"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:text-stone-900 transition-colors tracking-[0.1em] text-sm font-light text-stone-600"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
          {/* Contact and Socials column */}
          <div className="flex-[0.8] flex flex-col items-center md:items-end space-y-4 md:space-y-6 md:pr-8 w-full md:w-auto">
            <div className="flex flex-row space-x-6 mb-2">
              <a
                href="https://www.facebook.com/theflowfest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  size={28}
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/theflowfestglobal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram
                  size={28}
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCgTmEqwgM6m2A_qjh6OfD1g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube
                  size={28}
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                />
              </a>
            </div>
            <div className="text-stone-700 text-sm font-light text-center md:text-right">
              <div>The Flow Fest Global HQ</div>
              <div>House 4D, Rd No 73</div>
              <div>Dhaka 1212, Bangladesh</div>
              {/* <div className="mt-2">hello@theflow.com</div>
              <div>+880 1332-659890</div> */}
            </div>
            <Link href="/contact" className="w-full md:w-auto">
              <button className="border border-stone-400 text-stone-600 px-6 md:px-8 py-2 rounded-md text-base font-light hover:bg-stone-50 transition-colors mt-2 w-full md:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 md:mt-0 md:absolute right-4 md:right-8 bottom-2 text-xs text-stone-400 tracking-wide text-center md:text-right px-4 md:px-0">
          Copyright 2025 @ Dhaka Flow | All Rights Reserved
        </div>
      </footer>
    </>
  );
}
