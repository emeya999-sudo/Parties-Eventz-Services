"use client";

import { useState, type FormEvent } from "react";
import { Header } from "@/components/Header";

const services = [
  "Parties & Events Services",
  "Photo Shoot",
  "Event Photography Coverage",
  "Videography",
  "Zoom & YouTube Live Streaming",
  "Ushering",
  "Bouncers",
  "Event Coordination",
  "Souvenirs Procurement",
];

const inputClassName =
  "mt-2 w-full min-w-0 rounded-sm border border-ivory-border bg-white px-4 py-3 text-sm text-espresso placeholder:text-taupe/70 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

const labelClassName =
  "block text-sm font-semibold text-espresso";

type FormErrors = Record<string, string>;

export default function PlanYourEventPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionNotice, setSubmissionNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: FormErrors = {};
    const requiredFields = [
      ["firstName", "Please enter your first name."],
      ["lastName", "Please enter your last name."],
      ["email", "Please enter your email address."],
      ["phone", "Please enter your phone number."],
      ["eventType", "Please select an event type."],
      ["eventLocation", "Please enter your event location."],
      ["eventDetails", "Please tell us a little about your event."],
    ] as const;

    for (const [name, message] of requiredFields) {
      if (!String(formData.get(name) ?? "").trim()) {
        nextErrors[name] = message;
      }
    }

    const email = String(formData.get("email") ?? "").trim();
    const emailInput = form.querySelector<HTMLInputElement>("#email");
    if (email && emailInput && !emailInput.validity.valid) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    setSubmissionNotice("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmissionNotice(
      "Your details look complete, but online submission is not connected yet. Nothing has been sent.",
    );
  }

  function errorFor(name: string) {
    return errors[name] ? (
      <span id={`${name}-error`} className="mt-1 block text-sm text-red-800">
        {errors[name]}
      </span>
    ) : null;
  }

  function fieldErrorProps(name: string) {
    return {
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    };
  }

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-ivory pt-20 text-espresso">

      <section className="container-editorial py-10 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl min-w-0 items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div className="min-w-0 pt-2 lg:pt-8">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Start a conversation
            </p>
            <h1 className="max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Let&apos;s Plan Your Event
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-taupe-deep sm:text-lg sm:leading-8">
              Tell us what you are celebrating and the support you need. Share a
              few details in the form and our team can understand your plans and
              the services you have in mind.
            </p>

            <div className="mt-9 border-l-2 border-gold pl-5">
              <h2 className="font-serif text-2xl font-medium">
                A thoughtful start, made simple
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-taupe-deep">
                Let us know the occasion, location, and your priorities. The
                details you provide help shape a conversation around the right
                event services for you.
              </p>
            </div>

            <div className="mt-10 border-t border-ivory-border pt-7">
              <p className="eyebrow mb-4">Services we offer</p>
              <ul className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 text-espresso"
                  >
                    <span
                      className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-ivory-border/80 bg-white p-5 shadow-card sm:p-8 lg:p-10">
            <div className="mb-7 border-b border-ivory-border pb-6">
              <p className="eyebrow mb-2">Event enquiry</p>
              <h2 className="font-serif text-3xl font-medium sm:text-4xl">
                Tell us about your plans
              </h2>
              <p className="mt-3 text-sm leading-6 text-taupe-deep">
                Fields marked <span className="font-semibold text-gold-deep">*</span>{" "}
                are required.
              </p>
            </div>

            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              {Object.keys(errors).length > 0 && (
                <div
                  role="alert"
                  className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900"
                >
                  Please review the highlighted fields and correct the
                  information before continuing.
                </div>
              )}

              <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="firstName" className={labelClassName}>
                    First name <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={inputClassName}
                    {...fieldErrorProps("firstName")}
                  />
                  {errorFor("firstName")}
                </div>
                <div className="min-w-0">
                  <label htmlFor="lastName" className={labelClassName}>
                    Last name <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className={inputClassName}
                    {...fieldErrorProps("lastName")}
                  />
                  {errorFor("lastName")}
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="email" className={labelClassName}>
                    Email address <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClassName}
                    {...fieldErrorProps("email")}
                  />
                  {errorFor("email")}
                </div>
                <div className="min-w-0">
                  <label htmlFor="phone" className={labelClassName}>
                    Phone number <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className={inputClassName}
                    {...fieldErrorProps("phone")}
                  />
                  {errorFor("phone")}
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="eventType" className={labelClassName}>
                    Event type <span className="text-gold-deep">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    defaultValue=""
                    className={inputClassName}
                    {...fieldErrorProps("eventType")}
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    <option>Wedding</option>
                    <option>Birthday celebration</option>
                    <option>Anniversary</option>
                    <option>Corporate event</option>
                    <option>Conference or seminar</option>
                    <option>Graduation</option>
                    <option>Naming ceremony</option>
                    <option>Funeral or memorial</option>
                    <option>Other celebration</option>
                  </select>
                  {errorFor("eventType")}
                </div>
                <div className="min-w-0">
                  <label htmlFor="eventDate" className={labelClassName}>
                    Event date{" "}
                    <span className="font-normal text-taupe">(optional)</span>
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventLocation" className={labelClassName}>
                  Event location <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="eventLocation"
                  name="eventLocation"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="City, area, or venue"
                  required
                  className={inputClassName}
                  {...fieldErrorProps("eventLocation")}
                />
                {errorFor("eventLocation")}
              </div>

              <fieldset className="min-w-0">
                <legend className={labelClassName}>
                  Services required{" "}
                  <span className="font-normal text-taupe">(select all that apply)</span>
                </legend>
                <div className="mt-3 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service, index) => (
                    <label
                      key={service}
                      className="flex min-w-0 items-start gap-3 rounded-sm border border-ivory-border/80 px-3 py-3 text-sm leading-5 text-espresso transition-colors hover:border-gold/60"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                        aria-label={service}
                        id={`service-${index}`}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="budget" className={labelClassName}>
                  Estimated budget in Nigerian naira{" "}
                  <span className="font-normal text-taupe">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className={inputClassName}
                >
                  <option value="">Select a budget range</option>
                  <option>Under ₦500,000</option>
                  <option>₦500,000 – ₦1,500,000</option>
                  <option>₦1,500,000 – ₦3,000,000</option>
                  <option>₦3,000,000 – ₦5,000,000</option>
                  <option>Above ₦5,000,000</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label htmlFor="eventDetails" className={labelClassName}>
                  Additional event details{" "}
                  <span className="text-gold-deep">*</span>
                </label>
                <textarea
                  id="eventDetails"
                  name="eventDetails"
                  rows={5}
                  required
                  placeholder="Tell us about your plans, priorities, or anything else we should know."
                  className={`${inputClassName} resize-y`}
                  {...fieldErrorProps("eventDetails")}
                />
                {errorFor("eventDetails")}
              </div>

              {submissionNotice && (
                <p
                  role="status"
                  className="rounded-sm border border-gold/40 bg-gold-subtle px-4 py-3 text-sm leading-6 text-espresso"
                >
                  {submissionNotice}
                </p>
              )}

              <button
                type="submit"
                className="btn-gold w-full rounded-sm py-4 text-xs tracking-[0.12em] sm:text-sm"
              >
                Submit Event Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
