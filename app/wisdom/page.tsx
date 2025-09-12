"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Quote } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function WisdomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const articles = [
    {
      title: "The Art of Mindful Movement",
      excerpt:
        "Discover how conscious movement can transform your relationship with your body and mind.",
      author: "Sarah Chen",
      readTime: "5 min read",
      category: "Movement",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Breathwork for Modern Life",
      excerpt:
        "Ancient breathing techniques adapted for contemporary wellness practices.",
      author: "Tenzin Norbu",
      readTime: "8 min read",
      category: "Breathwork",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Creating Sacred Space in Urban Environments",
      excerpt:
        "How to cultivate tranquility and mindfulness in the heart of the city.",
      author: "Maya Patel",
      readTime: "6 min read",
      category: "Lifestyle",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Science of Community Healing",
      excerpt:
        "Research-backed insights into how collective wellness practices amplify individual transformation.",
      author: "Dr. James Wilson",
      readTime: "10 min read",
      category: "Science",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const insights = [
    {
      title: "Weekly Flow Insights",
      description:
        "Curated wisdom from our global community of practitioners and teachers.",
      type: "Newsletter",
    },
    {
      title: "Meditation Research",
      description:
        "Latest scientific findings on the benefits of mindfulness and meditation practices.",
      type: "Research",
    },
    {
      title: "Wellness Trends",
      description:
        "Emerging practices and philosophies shaping the future of conscious living.",
      type: "Trends",
    },
  ];

  const wisdomQuotes = [
    {
      quote:
        "The body benefits from movement, and the mind benefits from stillness.",
      author: "Sakyong Mipham",
    },
    {
      quote: "Wellness is not a destination, it is a way of traveling.",
      author: "The Flow Community",
    },
    {
      quote:
        "In the depth of winter, I finally learned that within me there lay an invincible summer.",
      author: "Albert Camus",
    },
    {
      quote: "The present moment is the only time over which we have dominion.",
      author: "Thích Nhất Hạnh",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8 tracking-wide">
            Wisdom
          </h1>
          <p className="text-xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover insights, practices, and perspectives that illuminate the
            path to conscious living and holistic well-being.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Articles
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Thoughtful explorations of wellness, mindfulness, and conscious
              living from our community of practitioners and teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="mb-6 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm font-light text-stone-500">
                    <span className="bg-stone-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-light text-stone-800 group-hover:text-stone-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-stone-500">
                      By {article.author}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-stone-400 group-hover:text-stone-600 transition-colors"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Insights
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Stay connected with the latest developments in wellness,
              mindfulness research, and conscious living practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-8 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-light tracking-wide rounded-full">
                    {insight.type}
                  </span>
                  <h3 className="text-xl font-light text-stone-800 tracking-wide">
                    {insight.title}
                  </h3>
                  <p className="text-sm font-light text-stone-600 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wisdom Quotes Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
              Wisdom Quotes
            </h2>
            <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Timeless wisdom and contemporary insights to inspire your journey
              toward conscious living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {wisdomQuotes.map((item, index) => (
              <div
                key={index}
                className="bg-stone-50 p-8 text-center space-y-6"
              >
                <Quote size={32} className="text-stone-400 mx-auto" />
                <blockquote className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed italic">
                  "{item.quote}"
                </blockquote>
                <cite className="text-sm font-light text-stone-500 tracking-wide not-italic">
                  — {item.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
    </div>
  );
}
