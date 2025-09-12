// "use client"

// import { useState, useRef } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Play, Pause } from "lucide-react"
// import NavBar from "@/components/NavBar"
// import Footer from "@/components/Footer"

// export default function OurStoryPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const toggleVideo = () => {
//     if (videoRef.current) {
//       if (isVideoPlaying) {
//         videoRef.current.pause()
//       } else {
//         videoRef.current.play()
//       }
//       setIsVideoPlaying(!isVideoPlaying)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
     
//      <NavBar /> 

//       {/* Hero Section with Video */}
//       <section className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="The Flow community gathering in nature - people practicing yoga and meditation in a beautiful outdoor setting"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/40" />

//         <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
//           <div className="mb-16">
//             <h1 className="text-6xl md:text-7xl font-extralight tracking-[0.3em] mb-12">Our Story</h1>
//             <p className="text-xl md:text-2xl font-extralight tracking-[0.2em] opacity-90 leading-relaxed max-w-4xl">
//               A wellness movement born from the belief that healthy people create a healthy planet
//             </p>
//           </div>
//         </div>

//         {/* Video Play Button */}
//         <div className="absolute bottom-12 right-12">
//           <button
//             onClick={toggleVideo}
//             className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
//           >
//             {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
//           </button>
//         </div>
//       </section>

//       {/* Movement Section */}
//       <section className="py-32 md:py-40 px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
//             <div className="space-y-8">
//               <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide leading-tight">
//                 The Flow is a wellness movement
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-xl font-light text-stone-600 leading-relaxed">
//                   <span className="text-stone-800 font-normal">#Flow2Wellness</span>
//                 </p>
//                 <p className="text-lg font-light text-stone-600 leading-relaxed">
//                   It is a community for anyone who has made wellness their lifestyle or livelihood. A space where
//                   ancient wisdom meets modern living, where individual transformation ripples into collective healing.
//                 </p>
//                 <p className="text-lg font-light text-stone-600 leading-relaxed">
//                   <em>Healthy people, healthy planet.</em>
//                 </p>
//               </div>
//             </div>
//             <div>
//               <Image
//                 src="/placeholder.svg?height=600&width=800"
//                 alt="Diverse group of people practicing yoga together in a serene natural setting"
//                 width={800}
//                 height={600}
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Philosophy Section */}
//       <section className="py-24 px-8 bg-stone-50">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="space-y-12">
//             <p className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed max-w-4xl mx-auto">
//               Through the beneficial traditions of movement and mindfulness, meditation and yoga and the incredible
//               healing power of nature, good food and fresh air, we hope to help you nurture your body, improve your
//               fitness, feed your mind and nourish your soul.
//             </p>
//             <div className="w-24 h-px bg-stone-300 mx-auto"></div>
//             <p className="text-2xl md:text-3xl font-extralight text-stone-800 tracking-wide">
//               Happiness is a state of mind.
//               <br />
//               Let us help you live your best life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Video Section - Festival Highlights */}
//       <section className="py-32 px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-8 tracking-wide">
//               Experience Our Festivals
//             </h2>
//             <p className="text-lg font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
//               Immerse yourself in the energy and community spirit that defines The Flow experience
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
//             <div className="relative">
//               <div className="relative h-80 overflow-hidden">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Festival scene with people dancing and celebrating wellness together"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/20" />
//                 <button className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
//                     <Play size={24} />
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative h-80 overflow-hidden">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Peaceful meditation circle at sunrise during a Flow festival"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/20" />
//                 <button className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
//                     <Play size={24} />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-32 px-8 bg-stone-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
//             <div>
//               <Image
//                 src="/placeholder.svg?height=600&width=800"
//                 alt="Zero waste festival setup with sustainable practices and eco-friendly materials"
//                 width={800}
//                 height={600}
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>
//             <div className="space-y-8">
//               <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 tracking-wide leading-tight">
//                 Our Vision & Values
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-lg font-light text-stone-600 leading-relaxed">
//                   Our vision is to create spaces that are free, healthy, clean, inclusive and green. Every gathering,
//                   every event, every moment is designed with intention and care for our planet.
//                 </p>
//                 <p className="text-lg font-light text-stone-600 leading-relaxed">
//                   Our events are conducted with zero plastic waste. We uphold the principle of{" "}
//                   <em className="text-stone-800">ahimsa</em> which means non-violence towards any living being. Our food
//                   offerings feature healthy, delicious, plant-based meals that nourish both body and soul.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Community Gallery */}
//       <section className="py-32 px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//             <div className="md:col-span-2">
//               <Image
//                 src="/placeholder.svg?height=500&width=800"
//                 alt="Large community gathering with people of all ages practicing yoga together"
//                 width={800}
//                 height={500}
//                 className="w-full h-80 md:h-96 object-cover"
//               />
//             </div>
//             <div className="space-y-8">
//               <Image
//                 src="/placeholder.svg?height=200&width=400"
//                 alt="Healthy vegetarian meal being shared at a Flow event"
//                 width={400}
//                 height={200}
//                 className="w-full h-36 object-cover"
//               />
//               <Image
//                 src="/placeholder.svg?height=200&width=400"
//                 alt="Children participating in mindful movement activities"
//                 width={400}
//                 height={200}
//                 className="w-full h-36 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Closing Message */}
//       <section className="py-32 md:py-40 px-8 bg-stone-100">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="space-y-12">
//             <p className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
//               Step away from the chaos of our urban world, and into the stillness of your own heart.
//             </p>
//             <div className="space-y-6">
//               <p className="text-2xl md:text-3xl font-extralight text-stone-800 tracking-[0.2em]">
//                 Lightness of body, freedom of mind.
//               </p>
//               <div className="w-16 h-px bg-stone-400 mx-auto"></div>
//               <p className="text-3xl md:text-4xl font-extralight text-stone-800 tracking-[0.3em]">
//                 Surrender to the flow.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-24 px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-12 tracking-wide">
//             Ready to join our movement?
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Button className="bg-stone-800 hover:bg-stone-900 text-white px-12 py-4 text-sm font-light tracking-[0.1em] rounded-none">
//               JOIN THE FLOW
//             </Button>
//             <Link href="/dhaka">
//               <Button
//                 variant="outline"
//                 className="border-stone-300 text-stone-700 hover:bg-stone-100 px-12 py-4 text-sm font-light tracking-[0.1em] bg-transparent rounded-none"
//               >
//                 EXPLORE EVENTS
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//           <Footer />
          
//     </div>
//   )
// }
