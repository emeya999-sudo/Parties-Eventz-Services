import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
];

const serviceLinks = [
  "Event Coordination",
  "Photography & Videography",
  "Live Streaming",
  "Ushering",
  "Souvenirs Procurement",
];

const footerLinkClassName =
  "w-fit text-sm leading-6 text-ivory/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

export function Footer() {
  return (
    <footer className="mt-auto bg-espresso text-ivory">
      <div className="container-editorial py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex rounded-sm font-serif text-2xl font-semibold tracking-tight text-ivory transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Parties<span className="text-gold">&amp;</span>Eventz
            </Link>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-taupe-light">
              Services
            </p>
            <p className="mt-5 text-sm leading-7 text-ivory/70">
              Event planning support, coordination, guest services, and media
              for celebrations and corporate occasions across Nigeria.
            </p>
          </div>

          <nav aria-labelledby="footer-explore-heading">
            <h2
              id="footer-explore-heading"
              className="mb-4 font-serif text-xl font-medium text-ivory"
            >
              Explore
            </h2>
            <ul className="flex flex-col items-start gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-serif text-xl font-medium text-ivory">
              <Link
                href="/services"
                className="rounded-sm transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Our Services
              </Link>
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm leading-6 text-ivory/70">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Explore services <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-xl font-medium text-ivory">
              Get in Touch
            </h2>
            <p className="max-w-xs text-sm leading-7 text-ivory/70">
              Planning an upcoming event? Tell us about the occasion and the
              support you are looking for.
            </p>
            <Link
              href="/plan-your-event"
              className="btn-gold mt-5 inline-flex px-5 py-3 text-xs tracking-wider"
            >
              Plan Your Event
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-ivory/15 pt-5 sm:mt-12 sm:pt-6">
          <p className="text-xs leading-5 text-ivory/60">
            &copy; 2026 Parties&amp;Eventz Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
