import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Event Portfolio Concepts | Weddings & Celebrations | Parties&Eventz",
  description:
    "Browse sample event portfolio concepts featuring Nigerian wedding traditions, celebrations, event styling, corporate occasions, and media coverage.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory pt-20 text-espresso">
        <section
          aria-labelledby="portfolio-heading"
          className="container-editorial py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl sm:mb-12">
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                A portfolio of possibilities
              </p>
              <h1
                id="portfolio-heading"
                className="max-w-3xl font-serif text-4xl font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              >
                A celebration, in every detail.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-taupe-deep sm:text-lg sm:leading-8">
                Explore visual directions for meaningful gatherings, from
                Nigerian wedding traditions to polished corporate occasions
                and the moments in between.
              </p>
            </div>

            <div className="mb-10 flex items-start gap-4 border-y border-ivory-border py-4 sm:mb-12 sm:items-center">
              <span
                className="mt-1 h-8 w-1 shrink-0 bg-gold sm:mt-0"
                aria-hidden="true"
              />
              <p className="max-w-4xl text-sm leading-6 text-taupe-deep">
                <span className="font-semibold text-espresso">
                  Sample portfolio concepts.
                </span>{" "}
                These photographs illustrate possible creative directions;
                they are not presented as completed client projects.
              </p>
            </div>

            <PortfolioGallery />
          </div>
        </section>

        <section
          aria-labelledby="portfolio-enquiry-heading"
          className="bg-espresso py-16 text-ivory sm:py-20"
        >
          <div className="container-editorial mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Your occasion, your story
            </p>
            <h2
              id="portfolio-enquiry-heading"
              className="mb-4 font-serif text-3xl font-normal text-ivory sm:text-4xl"
            >
              Let&apos;s shape what comes next
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-ivory/80 sm:text-base">
              Share the occasion you have in mind and the kind of support that
              would make it feel like yours.
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
    </>
  );
}
