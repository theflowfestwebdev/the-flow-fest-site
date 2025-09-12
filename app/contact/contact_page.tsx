"use client";

import type React from "react";

import {useSearchParams} from "next/navigation";
import {useEffect, useRef} from "react";
import {useState} from "react";
import StolzlThinButton from "@/components/ui/StolzlThinButton";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({type: null, message: ""});

  // Pre-fill subject from query param
  useEffect(() => {
    const subjectFromURL = searchParams.get("subject");
    const messageFromURL = searchParams.get("message");
    if (subjectFromURL) {
      setFormData(prev => ({
        ...prev,
        subject: subjectFromURL,
      }));
    }
    if (messageFromURL) {
      setFormData(prev => ({
        ...prev,
        message: messageFromURL,
      }));
    }

    // Scroll to form if query parameters are present
    if ((subjectFromURL || messageFromURL) && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Drop spam submissions when honeypot is filled
    if (formData.company && formData.company.trim() !== "") {
      setSubmitStatus({
        type: "success",
        message: "Thanks. We received your message.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ""});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          company: formData.company,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thanks! Your message has been sent.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send. Please try again.",
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <div className="w-full h-[350px] overflow-hidden hidden md:block">
        <img
          src="/images/home/5.jpg"
          alt="Banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      </div>
      {/* <section className="pt-32 pb-16 px-8 bg-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-stone-800 mb-8 tracking-wide">Contact Us</h1>
          <p className="text-xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to connect, collaborate, or learn more about The Flow community.
          </p>
        </div>
      </section> */}

      {/* Contact Form Section */}

      <div className="relative overflow-x-hidden">
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 pointer-events-none hidden md:block ">
          <img
            src="/images/mandala.png"
            alt="Mandala"
            className="w-full h-auto rotate-6"
          />
        </div>
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto" ref={formRef}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">
                Contact Form
              </h2>
              <p className="text-lg font-light text-stone-600 leading-relaxed">
                Send us a message. We are here and ready to assist you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative">
              {/* Honeypot field - keep off-screen */}
              <div
                className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-light text-stone-700 mb-2 tracking-wide"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm font-light"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-light text-stone-700 mb-2 tracking-wide"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm font-light"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-light text-stone-700 mb-2 tracking-wide"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm font-light font-acuminLight"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="events">Events & Workshops</option>
                  <option value="retreats">Retreats</option>
                  <option value="coaching">Coaching Services</option>
                  <option value="business">Business Partnership</option>
                  <option value="media">Media & Press</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-light text-stone-700 mb-2 tracking-wide"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm font-light resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`text-sm font-light px-4 py-2 rounded-md ${submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="text-center">
                <StolzlThinButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING…" : "SEND MESSAGE"}
                </StolzlThinButton>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Our Location Section */}
      {/* <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">Our Location</h2>
            <p className="text-lg font-light text-stone-600 leading-relaxed">
              Visit us at our headquarters or connect with our global community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin size={20} className="text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Headquarters</h3>
                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                      The Flow Global HQ
                      <br />
                      Dhanmondi, Dhaka 1205
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone size={20} className="text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Phone</h3>
                    <p className="text-sm font-light text-stone-600">+880 1700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail size={20} className="text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Email</h3>
                    <p className="text-sm font-light text-stone-600">info@theflow.global</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock size={20} className="text-stone-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-2">Office Hours</h3>
                    <p className="text-sm font-light text-stone-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-light text-stone-800 mb-2">Follow Us</h3>
                <div className="flex space-x-6">
                  <Link href="#" className="text-stone-600 hover:text-stone-800">Facebook</Link>
                  <Link href="#" className="text-stone-600 hover:text-stone-800">Instagram</Link>
                  <Link href="#" className="text-stone-600 hover:text-stone-800">Twitter</Link>
                  <Link href="#" className="text-stone-600 hover:text-stone-800">LinkedIn</Link>
                </div>
              </div>
            </div>

            <div className="relative h-96 bg-stone-100">
              <Image
                src="/images/map.png"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
