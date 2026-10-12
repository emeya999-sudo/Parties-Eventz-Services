import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex items-end justify-start overflow-hidden bg-espresso text-ivory pt-24 pb-20 md:pt-24 md:pb-24"
    >
      {/* Background Photograph — Nigerian traditional wedding procession */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nigerian-traditional-wedding-procession.jpg"
          alt="Guests gathered beneath a ceremonial canopy at a Nigerian traditional wedding procession"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients for Deep Contrast & Legibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(30, 20, 18, 0.28) 0%, rgba(30, 20, 18, 0.12) 24%, rgba(30, 20, 18, 0) 52%, rgba(30, 20, 18, 0.18) 78%, rgba(30, 20, 18, 0.34) 100%), linear-gradient(to right, rgba(30, 20, 18, 0.85) 0%, rgba(30, 20, 18, 0.65) 45%, rgba(30, 20, 18, 0.40) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="container-editorial relative z-10 flex w-full flex-col items-start text-left px-4 sm:px-6">
        <div className="w-full max-w-[640px]">
        {/* Eyebrow Label */}
        <div className="hero-entrance hero-entrance--label inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-gold/70" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-gold">
            PARTIES&EVENTZ SERVICES · EVENT PLANNING
          </span>
          <span className="w-6 h-px bg-gold/70" aria-hidden="true" />
        </div>

        {/* Hero Headline */}
        <h1
          id="hero-heading"
          className="hero-entrance hero-entrance--headline max-w-[640px] font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-ivory mb-6"
        >
          Your Vision. Our Expertise. Unforgettable Moments.
        </h1>

        {/* Supporting Paragraph */}
        <p className="hero-entrance hero-entrance--description max-w-[640px] font-sans text-base sm:text-lg md:text-xl text-ivory/85 font-normal leading-relaxed mb-10">
          From intimate celebrations to grand occasions, we bring your ideas to life through thoughtful planning, beautiful styling and seamless coordination.
        </p>

        {/* Call to Action Controls */}
        <div className="hero-entrance hero-entrance--actions flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto">
          <Link
            href="/services"
            className="btn-gold w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-center"
          >
            Explore Our Services
          </Link>
          <Link
            href="/plan-your-event"
            className="hero-plan-cta btn-outline w-full sm:w-auto px-8 py-3.5 text-xs font-medium tracking-wider uppercase text-center !text-ivory border-ivory/30 hover:border-gold hover:bg-ivory/10 hover:!text-ivory"
          >
            Plan Your Event
          </Link>
        </div>

        </div>
      </div>
    </section>
  );
}
