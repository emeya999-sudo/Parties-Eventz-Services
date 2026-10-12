"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function Header({ overlayOnHome = false }: { overlayOnHome?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMenuOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
      }

      if (event.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-espresso/95 backdrop-blur-md border-b border-ivory-border/10 py-3 shadow-card"
          : overlayOnHome
            ? "bg-transparent border-transparent py-5"
            : "bg-espresso/60 backdrop-blur-sm border-b border-white/10 py-5"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 py-0.5"
        >
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ivory group-hover:text-gold transition-colors">
            Parties<span className="text-gold">&</span>Eventz
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] text-taupe-light font-medium -mt-1 group-hover:text-ivory transition-colors">
            Services
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-ivory/90 hover:text-gold transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xs"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-your-event"
            className="btn-gold text-xs tracking-wider uppercase py-2.5 px-5"
          >
            Plan Your Event
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-ivory hover:text-gold hover:bg-espresso-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={isMenuOpen || undefined}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] min-h-[100svh] w-[80vw] max-w-[360px] flex-col overflow-y-auto overscroll-contain border-l border-ivory-border/15 bg-espresso/98 px-6 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] shadow-floating transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-serif text-xl text-ivory">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-ivory hover:bg-espresso-surface hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav
          aria-label="Mobile Navigation"
          className="flex flex-col gap-4 text-left"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="border-b border-white/5 py-3 text-lg font-serif tracking-wide text-ivory transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/plan-your-event"
              onClick={handleLinkClick}
              className="btn-gold w-full text-center py-3 text-xs tracking-wider uppercase"
            >
              Plan Your Event
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}
