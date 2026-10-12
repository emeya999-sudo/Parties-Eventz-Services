import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "About Parties&Eventz Services | Event Support in Nigeria",
  description:
    "Learn about Parties&Eventz Services and the event coordination, media, guest services, and planning support available for occasions across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory pt-20 text-espresso">
      <section
        aria-labelledby="about-heading"
        className="container-editorial py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              About Parties&amp;Eventz Services
            </p>
            <h1
              id="about-heading"
              className="max-w-2xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              Support shaped around your event
            </h1>
            <p className="mt-6 text-base leading-7 text-taupe-deep sm:text-lg sm:leading-8">
              Every event has its own priorities. Parties&amp;Eventz Services
              supports celebrations and events across Nigeria with coordination,
              guest services, photography, videography, live streaming, and
              souvenirs procurement. You can ask about one service or discuss
              several, depending on what you are planning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
            <article className="rounded-sm border border-ivory-border/70 bg-white p-7 shadow-subtle sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Coordination
              </p>
              <h2 className="font-serif text-2xl font-medium sm:text-3xl">
                Keep the practical details in view
              </h2>
              <p className="mt-4 text-sm leading-7 text-taupe-deep sm:text-base">
                Event-day coordination can help bring vendor arrangements,
                schedules, and logistics together from setup through closing.
                Sharing your event plans and the parts you would like help
                organising gives us a starting point for discussing the support
                that may suit you.
              </p>
            </article>

            <article className="rounded-sm border border-ivory-border/70 bg-white p-7 shadow-subtle sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Media
              </p>
              <h2 className="font-serif text-2xl font-medium sm:text-3xl">
                Remember and share the occasion
              </h2>
              <p className="mt-4 text-sm leading-7 text-taupe-deep sm:text-base">
                Photography and videography can document important moments,
                from ceremonies and portraits to candid scenes with guests.
                Zoom or YouTube live streaming is another option when you want
                people who cannot attend in person to follow the event.
              </p>
            </article>

            <article className="rounded-sm border border-ivory-border/70 bg-white p-7 shadow-subtle sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Guest experience
              </p>
              <h2 className="font-serif text-2xl font-medium sm:text-3xl">
                Think through arrivals and attendance
              </h2>
              <p className="mt-4 text-sm leading-7 text-taupe-deep sm:text-base">
                Ushering can help welcome guests and guide them to their seats.
                Bouncer services can assist with venue entry and crowd
                management. These services let you discuss how guests will
                arrive and move through your event.
              </p>
            </article>

            <article className="rounded-sm border border-ivory-border/70 bg-white p-7 shadow-subtle sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Your requirements
              </p>
              <h2 className="font-serif text-2xl font-medium sm:text-3xl">
                Start with what matters to you
              </h2>
              <p className="mt-4 text-sm leading-7 text-taupe-deep sm:text-base">
                When you get in touch, share the occasion, intended date,
                location, and the services you are considering. You can also
                describe your priorities, questions, or any details that may
                help explain what you need. This gives us a basis for discussing
                your requirements.
              </p>
            </article>
          </div>

          <div className="mt-12 border-t border-ivory-border pt-8 sm:mt-16 sm:pt-10">
            <h2 className="font-serif text-2xl font-medium sm:text-3xl">
              Event support, considered together
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-taupe-deep sm:text-base">
              From vendor and schedule coordination to media coverage, guest
              assistance, and souvenirs, the services can be discussed in
              relation to your event plans. Let us know what you already have
              arranged and where you would like support; you do not need to
              have every detail decided before starting the conversation.
            </p>
            <Link
              href="/plan-your-event"
              className="btn-gold mt-8 inline-flex px-7 py-3 text-xs tracking-wider"
            >
              Discuss Your Event
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
