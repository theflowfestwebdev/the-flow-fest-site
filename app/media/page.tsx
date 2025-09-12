"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StolzlThinButton from "@/components/ui/StolzlThinButton";
import {
  sanityClient,
  mediaItemsQuery,
  type MediaItem,
  urlFor,
} from "@/lib/sanity";
import { Menu, X, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function MediaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const archiveUrl = "https://www.dhakaflow.com/media/";

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(mediaItems.map((m) => m.category).filter(Boolean))
    );
    return ["ALL", ...unique];
  }, [mediaItems]);

  const sampleMediaItems: MediaItem[] = [
    {
      _id: "sample-1",
      title:
        "The Flow Expands Global Wellness Movement to Dubai with FlowFest 26",
      publication: "Wellness Today",
      date: "2024-12-15",
      category: "PRESS RELEASES",
      excerpt:
        "The Flow announces its biggest celebration yet, bringing transformative wellness experiences to the UAE.",
      image: { asset: { _ref: "", _type: "reference" }, alt: "Featured image" },
      link: "#",
      featured: true,
    },
    {
      _id: "sample-2",
      title: "How The Flow is Revolutionizing Urban Wellness Culture",
      publication: "Mindful Living Magazine",
      date: "2024-11-28",
      category: "FEATURES",
      excerpt:
        "An in-depth look at how The Flow is creating pockets of tranquility in bustling cities worldwide.",
      image: { asset: { _ref: "", _type: "reference" }, alt: "Article image" },
      link: "#",
      featured: false,
    },
  ];

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "your-project-id") {
          setMediaItems(sampleMediaItems);
          setError(null);
        } else {
          const fetched = await sanityClient.fetch(mediaItemsQuery);
          setMediaItems(fetched);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching media items:", err);
        setError("Failed to load media. Using sample data instead.");
        setMediaItems(sampleMediaItems);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const filteredMedia =
    selectedCategory === "ALL"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  const pressKit = [
    {
      title: "Brand Guidelines",
      description: "Logo usage, color palette, and brand identity guidelines",
      format: "PDF",
    },
    {
      title: "High-Resolution Images",
      description: "Professional photos of events, facilities, and community",
      format: "ZIP",
    },
    {
      title: "Founder Bio & Headshots",
      description: "Executive biographies and professional photography",
      format: "PDF + Images",
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics, milestones, and company information",
      format: "PDF",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-stone-50 mb-8 tracking-wide font-theSeasonsLight">
            Media
          </h1>
          <p className="text-xl font-light text-stone-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with The Flow Fest's latest news, press coverage, and
            media resources.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">
              Featured Story
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {mediaItems.find((m) => m.featured && m.image?.asset) ? (
                <Image
                  src={urlFor(mediaItems.find((m) => m.featured)!.image)
                    .width(700)
                    .height(500)
                    .auto("format")
                    .quality(80)
                    .url()}
                  alt={
                    mediaItems.find((m) => m.featured)!.image?.alt ||
                    mediaItems.find((m) => m.featured)!.title
                  }
                  width={700}
                  height={500}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Featured story image"
                  width={700}
                  height={500}
                  className="w-full h-96 object-cover"
                />
              )}
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm font-light text-stone-500">
                <span className="bg-stone-100 px-3 py-1 rounded-full font-stolzlBook tracking-[0.12em]">
                  {mediaItems.find((m) => m.featured)?.category ||
                    "PRESS RELEASE"}
                </span>
                <div className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>{mediaItems.find((m) => m.featured)?.date || ""}</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-stone-800 leading-tight">
                {mediaItems.find((m) => m.featured)?.title ||
                  "Featured Story Title"}
              </h3>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                {mediaItems.find((m) => m.featured)?.excerpt || ""}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-light text-stone-500">
                  Published by{" "}
                  {mediaItems.find((m) => m.featured)?.publication || ""}
                </span>
                {mediaItems.find((m) => m.featured)?.link ? (
                  <a
                    href={mediaItems.find((m) => m.featured)!.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-light text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    <span>READ FULL ARTICLE</span>
                    <ExternalLink size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-8 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-4 tracking-wide font-theSeasonsLight">
              Latest Media Coverage
            </h2>
            <p className="text-lg font-light text-stone-600">
              Discover how The Flow Fest is being featured across wellness and
              lifestyle publications.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <StolzlThinButton
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category ? "bg-[#8B7C6B] text-white" : ""
                }`}
              >
                {category}
              </StolzlThinButton>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia
              .filter((m) => !m.featured)
              .map((item, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="mb-6 overflow-hidden">
                    {item.image?.asset ? (
                      <Image
                        src={urlFor(item.image)
                          .width(400)
                          .height(300)
                          .auto("format")
                          .quality(80)
                          .url()}
                        alt={item.image.alt || item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm font-light text-stone-500">
                      <span className="bg-stone-100 px-3 py-1 rounded-full font-stolzlBook tracking-[0.12em]">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-light text-stone-800 group-hover:text-stone-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 font-light leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-stone-500">
                        {item.publication}
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-sm font-light text-stone-700 hover:text-stone-900 transition-colors"
                        >
                          <span>READ MORE</span>
                          <ArrowRight size={14} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Archive + Media Inquiries (Complementary Cards) */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Archive Card */}
            <div className="bg-white border border-stone-200 p-10 text-center flex flex-col items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-4 tracking-wide font-theSeasonsLight">
                  Browse Full Archive
                </h2>
                <p className="text-lg font-light text-stone-600 mb-8 leading-relaxed">
                  Looking for older coverage?
                </p>
              </div>
              <a href={archiveUrl} target="_blank" rel="noopener noreferrer">
                <StolzlThinButton className="px-10 py-4">
                  VIEW MEDIA ARCHIVE
                </StolzlThinButton>
              </a>
            </div>

            {/* Media Inquiries Card */}
            <div className="bg-white border border-stone-200 p-10 text-center flex flex-col items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-4 tracking-wide font-theSeasonsLight">
                  Media Inquiries
                </h2>
                <p className="text-lg font-light text-stone-600 mb-8 leading-relaxed">
                  For press inquiries, interview requests, or additional
                  information.
                </p>
              </div>
              <Link href="/contact?subject=media">
                <StolzlThinButton className="px-10 py-4">
                  CONTACT MEDIA TEAM
                </StolzlThinButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
