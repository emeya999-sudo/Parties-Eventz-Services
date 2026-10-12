"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Weddings",
  "Celebrations",
  "Corporate",
  "Media",
] as const;

type PortfolioCategory = (typeof categories)[number];
type ProjectCategory = Exclude<PortfolioCategory, "All">;

const projects: {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  layout: string;
}[] = [
  {
    title: "Tradition in full colour",
    category: "Weddings",
    description:
      "A lively procession brings cultural dress, music and family together.",
    image: "/images/nigerian-traditional-wedding-procession.jpg",
    imageAlt:
      "Guests gather beneath a ceremonial canopy during a Nigerian traditional wedding procession",
    layout: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "An intimate celebration",
    category: "Weddings",
    description:
      "A traditional Nigerian wedding portrait centred on family and ceremony.",
    image: "/images/nigerian-wedding-group.jpg",
    imageAlt:
      "A couple seated with family and wedding party in traditional Nigerian attire",
    imagePosition: "center 52%",
    layout: "lg:col-span-5 lg:row-span-2",
  },
  {
    title: "A moment in champagne",
    category: "Weddings",
    description:
      "A refined bridal look framed by warm neutrals and understated detail.",
    image: "/images/nigerian-bride-editorial.jpg",
    imageAlt:
      "A Nigerian bride in a champagne embellished gown on an elegant staircase",
    imagePosition: "center 48%",
    layout: "lg:col-span-4",
  },
  {
    title: "A birthday, brightly",
    category: "Celebrations",
    description:
      "A joyful birthday idea with a festive backdrop and cake at its heart.",
    image: "/images/birthday-celebration.jpg",
    imageAlt:
      "A young child in traditional blue attire celebrating with a birthday cake",
    imagePosition: "center 44%",
    layout: "lg:col-span-4",
  },
  {
    title: "A place at the table",
    category: "Weddings",
    description:
      "Floral centrepieces and considered table details set a welcoming scene.",
    image: "/images/wedding-table-details.jpg",
    imageAlt:
      "A wedding reception table styled with pink and white floral centrepieces",
    imagePosition: "center 48%",
    layout: "lg:col-span-4",
  },
  {
    title: "Ideas in motion",
    category: "Corporate",
    description:
      "A trade-show setting for conversation, discovery and new connections.",
    image: "/images/accra-business-trade-show.jpg",
    imageAlt:
      "Business professionals talking at a trade show in Accra, Ghana",
    imagePosition: "center 42%",
    layout: "lg:col-span-6",
  },
  {
    title: "Behind the frame",
    category: "Media",
    description:
      "A videographer at work among the flowers and finishing touches of an event.",
    image: "/images/wedding-videographer.jpg",
    imageAlt:
      "An event videographer with a camera stabilizer among floral decorations",
    imagePosition: "center 46%",
    layout: "lg:col-span-6",
  },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Browse by occasion
          </p>
          <h2
            id="portfolio-gallery-heading"
            className="font-serif text-2xl font-medium text-espresso"
          >
            Explore the concepts
          </h2>
          <p
            className="mt-1 text-sm text-taupe-deep"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing {visibleProjects.length} concept{" "}
            {visibleProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>
        <div
          role="group"
          aria-label="Filter concept projects by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-ivory-border bg-transparent text-taupe-deep hover:border-gold hover:text-espresso"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <section
        aria-labelledby="portfolio-gallery-heading"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[19rem] lg:grid-cols-12 lg:gap-6"
      >
        {visibleProjects.map((project, index) => {
          const filteredLayout =
            activeCategory === "All"
              ? project.layout
              : visibleProjects.length === 1
                ? "lg:col-span-12"
                : "lg:col-span-6";

          return (
            <article
              key={project.title}
              className={`service-card group flex flex-col overflow-hidden border border-ivory-border/80 bg-white shadow-subtle ${filteredLayout}`}
            >
            <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-ivory-muted lg:aspect-auto lg:min-h-0 lg:flex-1">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority={activeCategory === "All" && index === 0}
                sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectPosition: project.imagePosition }}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                {project.category}
              </p>
              <h2 className="font-serif text-xl font-medium leading-tight text-espresso sm:text-2xl">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-taupe-deep">
                {project.description}
              </p>
            </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
