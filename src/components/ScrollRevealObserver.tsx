"use client";

import { useLayoutEffect } from "react";

export function ScrollRevealObserver() {
  useLayoutEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    const viewportHeight = window.innerHeight;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    elements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      if (
        bounds.bottom <= 0 ||
        (bounds.top < viewportHeight && bounds.bottom > 0)
      ) {
        element.classList.add("scroll-reveal-visible");
      }
      element.classList.add("scroll-reveal-pending");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
