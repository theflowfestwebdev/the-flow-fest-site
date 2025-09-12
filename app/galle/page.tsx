import Image from "next/image";
import Link from "next/link";
import StolzlThinButton from "@/components/ui/StolzlThinButton";

export default function GallePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/galle-min.jpg"
            alt="Beautiful coastal landscape of Galle, Sri Lanka with ancient fort and turquoise waters"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/60 to-black/80" />

        {/* Add top padding on mobile to clear navbar */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8 pt-24 md:pt-0">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.4em] mb-12 font-theSeasonsRegular">
              GALLE
            </h1>
            <div className="space-y-8">
              <p className="text-2xl md:text-4xl font-theSeasonsLight font-extralight tracking-[0.3em] opacity-90 leading-relaxed">
                Coming soon...
              </p>
              <div className="w-24 h-px bg-white/60 mx-auto"></div>
              <p className="text-lg font-light text-white mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide">
                The Flow Fest is expanding to the ancient coastal city of Galle,
                Sri Lanka.
                <br />
                Where history meets serenity, and wellness finds its perfect
                home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-32 md:py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-800 mb-16 tracking-wide leading-tight font-theSeasonsLight">
            A new chapter begins in this
            <br />
            Sri Lankan cultural jewel
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg font-light text-stone-600 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide">
              Nestled within the UNESCO World Heritage site of Galle Fort, our
              newest location will offer transformative wellness experiences
              against the backdrop of ancient ramparts and endless ocean views.
            </p>
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-stone-800 mb-8 tracking-wide font-theSeasonsLight">
            Be the first to know
          </h2>
          <p className="text-lg font-light text-stone-600 mb-12 leading-relaxed">
            Join our notification list to receive updates about our Galle
            launch, events, and exclusive early access opportunities.
          </p>
          <div>
            <Link href="/contact?subject=events&message=Please notify me for Galle!">
              <StolzlThinButton>NOTIFY ME</StolzlThinButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
    </div>
  );
}
