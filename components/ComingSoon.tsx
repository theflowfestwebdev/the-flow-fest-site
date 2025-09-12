import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import StolzlThinButton from "@/components/ui/StolzlThinButton"

interface ComingSoonProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  showBackButton?: boolean
  backUrl?: string
}

export default function ComingSoon({
  title = "COMING SOON",
  subtitle = "Something beautiful is brewing",
  description = "We're crafting something special for you. Stay tuned for updates on this exciting new experience.",
  backgroundImage = "/images/pose-1.jpg",
  showBackButton = true,
  backUrl = "/"
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Coming soon background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
          <div className="flex flex-col items-center -mt-20">
            {/* Centered Logo */}
            <Image
              src="/new-logo-white.svg"
              alt="The Flow Logo"
              width={100}
              height={100}
              className="w-auto h-32 mb-12 opacity-90"
            />
            
            {/* Main Content */}
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extralight tracking-[0.3em] font-theSeasonsRegular">
                  {title}
                </h1>
                <div className="w-24 h-px bg-white/40 mx-auto"></div>
                {/* <p className="text-2xl md:text-3xl font-extralight tracking-[0.2em] opacity-90 font-theSeasonsLightItalic">
                  {subtitle}
                </p> */}
              </div>
              
              <p className="text-lg font-light max-w-lg mx-auto leading-relaxed tracking-wide opacity-80">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                {/* <Link href="/contact?subject=general&message=I'm interested in updates about this page!">
                  <StolzlThinButton>
                    NOTIFY ME
                  </StolzlThinButton>
                </Link> */}
                
                {showBackButton && (
                  <Link href={backUrl}>
                    <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-light tracking-wide">
                      <ChevronLeft size={16} />
                      <span>Back to Home</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 