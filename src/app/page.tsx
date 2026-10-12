import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollRevealObserver } from "@/components/ScrollRevealObserver";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Event Planning & Event Services in Nigeria | Parties&Eventz",
  description:
    "Explore event planning support, coordination, guest services, photography, videography, and live streaming for celebrations and corporate occasions in Nigeria.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-espresso">
      <Header overlayOnHome />

      <main id="top" className="flex-1">
        <ScrollRevealObserver />
        <Hero />

        <section
          aria-labelledby="introduction-heading"
          data-scroll-reveal
          className="border-b border-ivory-border bg-ivory-muted/40 py-16 sm:py-20 md:py-24"
        >
          <div className="container-editorial">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-14 lg:gap-20">
              <div>
                <p className="eyebrow mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  Parties&amp;Eventz Services
                </p>
                <h2
                  id="introduction-heading"
                  className="font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl"
                >
                  Thoughtful support for the event you have in mind
                </h2>
                <figure className="mt-7">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-ivory-border/70 shadow-subtle">
                    <Image
                      src="/images/accra-business-trade-show.jpg"
                      alt="Exhibitors speaking with a visitor at a trade show in Accra, Ghana"
                      fill
                      sizes="(min-width: 1024px) 35vw, (min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </div>
              <div className="max-w-3xl">
                <p className="text-base leading-relaxed text-taupe-deep sm:text-lg sm:leading-8">
                  Planning a celebration or corporate occasion means bringing
                  many details together. Parties&amp;Eventz Services offers
                  practical event support across Nigeria, from coordination and
                  guest services to photography, videography, live streaming,
                  and souvenirs procurement.
                </p>
                <p className="mt-5 text-base leading-relaxed text-taupe-deep sm:text-lg sm:leading-8">
                  You can discuss one service or several. Tell us about your
                  occasion, what you already have arranged, and where you would
                  value support; that gives the conversation a useful starting
                  point without needing every detail decided in advance.
                </p>
                <Link
                  href="/plan-your-event"
                  className="link-editorial mt-6 inline-flex items-center gap-2 text-sm"
                >
                  Share your event plans <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section
          aria-labelledby="approach-heading"
          className="border-b border-ivory-border bg-ivory-muted/40 py-20 md:py-28"
        >
          <div className="container-editorial">
            <div className="mb-12 max-w-3xl md:mb-16" data-scroll-reveal>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                A considered approach
              </p>
              <h2
                id="approach-heading"
                className="font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl"
              >
                Support that starts with your priorities
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-taupe-deep sm:text-lg">
                Every occasion has different needs. Our services give you
                options to discuss around your plans, whether your focus is
                keeping event-day details in view, helping guests find their
                way, or recording moments to revisit.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-10" data-reveal-stagger>
              <article className="border-t border-gold/50 pt-5" data-scroll-reveal>
                <h3 className="font-serif text-2xl font-medium">
                  Coordinate the details
                </h3>
                <p className="mt-3 text-sm leading-7 text-taupe-deep sm:text-base">
                  Discuss vendor arrangements, schedules, and logistics for
                  event-day coordination, from setup through closing.
                </p>
              </article>
              <article className="border-t border-gold/50 pt-5" data-scroll-reveal>
                <h3 className="font-serif text-2xl font-medium">
                  Consider the guest experience
                </h3>
                <p className="mt-3 text-sm leading-7 text-taupe-deep sm:text-base">
                  Ushering and bouncer services can support guest arrivals,
                  seating directions, venue entry, and crowd management.
                </p>
              </article>
              <article className="border-t border-gold/50 pt-5" data-scroll-reveal>
                <h3 className="font-serif text-2xl font-medium">
                  Capture and share moments
                </h3>
                <p className="mt-3 text-sm leading-7 text-taupe-deep sm:text-base">
                  Photography, videography, and live streaming offer ways to
                  document an occasion and include people joining remotely.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-preview-heading"
          className="border-b border-ivory-border bg-ivory py-16 sm:py-20 md:py-24"
        >
          <div className="container-editorial">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center md:gap-14" data-scroll-reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  About our approach
                </p>
                <h2
                  id="about-preview-heading"
                  className="font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl"
                >
                  Make room for what matters to you
                </h2>
                <p className="mt-5 text-base leading-relaxed text-taupe-deep sm:text-lg">
                  We begin with the event you are planning and the support you
                  are looking for. Explore how coordination, media, guest
                  services, and souvenirs can be discussed in relation to your
                  requirements on our About page.
                </p>
              </div>
              <Link
                href="/about"
                className="btn-outline inline-flex shrink-0 text-xs tracking-wider"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          aria-labelledby="portfolio-preview-heading"
          className="border-b border-ivory-border bg-ivory-muted/40 py-12 sm:py-14"
        >
          <div className="container-editorial">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between" data-scroll-reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-2">Portfolio</p>
                <h2
                  id="portfolio-preview-heading"
                  className="font-serif text-2xl font-medium sm:text-3xl"
                >
                  Event highlights
                </h2>
                <p className="mt-2 text-sm leading-6 text-taupe-deep sm:text-base">
                  Explore sample portfolio concepts, clearly identified as
                  creative directions rather than completed client projects.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="link-editorial inline-flex shrink-0 items-center gap-2 text-sm"
              >
                Visit Portfolio <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="enquiry"
          aria-labelledby="enquiry-heading"
          className="bg-espresso py-20 text-ivory sm:py-24"
        >
          <div className="container-editorial mx-auto max-w-3xl text-center" data-scroll-reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Your event, your priorities
            </p>
            <h2
              id="enquiry-heading"
              className="mb-5 font-serif text-3xl font-normal text-ivory sm:text-4xl md:text-5xl"
            >
              Let&apos;s start with what you&apos;re planning
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-ivory/80 sm:text-base sm:leading-7">
              Share the occasion, your intended date, location, and the kind of
              support you are considering. We can use those details to begin a
              conversation about your event requirements.
            </p>
            <Link
              href="/plan-your-event"
              className="btn-gold inline-flex px-7 py-3 text-xs tracking-wider"
            >
              Plan Your Event
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
