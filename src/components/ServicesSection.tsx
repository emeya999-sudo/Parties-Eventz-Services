import Link from "next/link";

const serviceAreas = [
  {
    index: "01",
    title: "Planning & coordination",
    description:
      "Concept and theme support for social celebrations, alongside vendor, schedule, and event-day coordination.",
  },
  {
    index: "02",
    title: "Photography & media",
    description:
      "Photo shoots, event photography, videography, and Zoom or YouTube live streaming for in-person and remote guests.",
  },
  {
    index: "03",
    title: "Guest support",
    description:
      "Ushering to welcome and direct arrivals, with bouncer services for venue entry and crowd management.",
  },
  {
    index: "04",
    title: "Souvenirs",
    description:
      "Souvenir sourcing, with custom branding and packaging options to discuss for your celebration.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-ivory-border bg-ivory py-20 text-espresso md:py-28"
    >
      <div className="container-editorial">
        <div className="mb-12 max-w-3xl md:mb-14" data-scroll-reveal>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-5 bg-gold" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Event support, at a glance
            </span>
          </div>
          <h2
            id="services-heading"
            className="mb-5 font-serif text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl"
          >
            Bring the right details into focus
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-taupe-deep sm:text-lg">
            From preparing the event day to welcoming guests and documenting
            special moments, choose the areas where support would be useful.
            Explore the full service list to see what each option involves.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-stagger
        >
          {serviceAreas.map((area) => (
            <article
              key={area.index}
              className="service-card border border-ivory-border/80 bg-white p-6 shadow-subtle sm:p-7"
              data-scroll-reveal
            >
              <span className="mb-5 block font-serif text-xl font-medium text-gold">
                {area.index}
              </span>
              <h3 className="mb-3 font-serif text-2xl font-medium text-espresso">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-taupe-deep">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10" data-scroll-reveal>
          <Link
            href="/services"
            className="btn-outline inline-flex text-xs tracking-wider"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
