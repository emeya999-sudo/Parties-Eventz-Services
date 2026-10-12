import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Event Planning, Photography & Coordination | Parties&Eventz",
  description:
    "Explore event coordination, photography, videography, live streaming, guest support, and souvenirs services for celebrations and corporate events.",
};

const services = [
  {
    index: "01",
    title: "Parties & Events Services",
    description:
      "Bring your ideas for a birthday, anniversary, or other social celebration into a clear concept and theme. We can also help coordinate vendors, giving you a place to start as you shape the event.",
  },
  {
    index: "02",
    title: "Photo Shoot",
    description:
      "Mark the occasion before the event with a portrait session, engagement shoot, or styled studio shoot. Creative direction helps give the photographs a look suited to you and your plans.",
  },
  {
    index: "03",
    title: "Event Photography Coverage",
    description:
      "Keep a visual record of the ceremony, family portraits, candid moments, and key parts of the day. Photography coverage can help you revisit the moments shared with your guests.",
  },
  {
    index: "04",
    title: "Videography",
    description:
      "Choose highlight reels or fuller event documentation to revisit and share after the celebration. Videography includes professional audio and multiple camera angles.",
  },
  {
    index: "05",
    title: "Zoom & YouTube Live Streaming",
    description:
      "Include friends, family, or colleagues who cannot attend in person by streaming your event through Zoom or YouTube. This gives remote guests a way to follow along from elsewhere.",
  },
  {
    index: "06",
    title: "Ushering",
    description:
      "Ushering support helps welcome guests, direct arrivals, and guide people to their seats. It can be useful when you want guests to know where to go as they arrive.",
  },
  {
    index: "07",
    title: "Bouncers",
    description:
      "Bouncer services can assist with venue entry and crowd management. Discuss your venue and event plans with us to explain the support you have in mind.",
  },
  {
    index: "08",
    title: "Event Coordination",
    description:
      "On-the-day coordination brings vendor arrivals, schedules, and event logistics into view, from setup through closing. This support is for clients who want help keeping the day's moving parts organised.",
  },
  {
    index: "09",
    title: "Souvenirs Procurement",
    description:
      "Choose guest souvenirs that suit your celebration, with sourcing, custom branding, and packaging support. Share your preferences and we can discuss what you have in mind.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory pt-20 text-espresso">
      <section
        aria-labelledby="services-page-heading"
        className="container-editorial py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Services for your event
            </p>
            <h1
              id="services-page-heading"
              className="max-w-2xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              Find the support that fits your plans
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-taupe-deep sm:text-lg sm:leading-8">
              Every event brings its own details to organise, from welcoming
              guests to capturing the occasion. Explore the services below to
              see what each can involve, then enquire about one service or
              combine several to suit your event.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.index}
                className="service-card group flex flex-col justify-between rounded-sm border border-ivory-border/70 bg-white p-7 shadow-subtle sm:p-8"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-serif text-xl font-medium text-gold">
                      {service.index}
                    </span>
                    <span
                      className="service-card__divider h-px w-8 bg-ivory-border transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="service-card__title mb-3.5 font-serif text-2xl font-medium text-espresso transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-taupe-deep sm:text-base">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/plan-your-event"
                  className="mt-8 flex items-center justify-between border-t border-ivory-muted pt-4 text-xs font-semibold uppercase tracking-wider text-gold-deep transition-colors hover:text-gold focus-visible:ring-2 focus-visible:ring-espresso/75"
                >
                  <span>Enquire about {service.title}</span>
                  <span
                    className="service-card__arrow transform transition-transform"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="services-enquiry-heading"
        className="bg-espresso py-16 text-ivory sm:py-20"
      >
        <div className="container-editorial mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Start planning
          </p>
          <h2
            id="services-enquiry-heading"
            className="mb-4 font-serif text-3xl font-normal text-ivory sm:text-4xl"
          >
            Let&apos;s talk about your event
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-ivory/80 sm:text-base">
            Tell us what you are planning, when and where it will take place,
            and which services you are considering. You can share the details
            through our event enquiry page.
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
