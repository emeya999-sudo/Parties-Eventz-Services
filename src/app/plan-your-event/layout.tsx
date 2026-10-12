import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Event | Event Enquiry | Parties&Eventz Services",
  description:
    "Tell Parties&Eventz Services about your occasion, event date, location, budget, and the planning, coordination, or media support you are considering.",
};

export default function PlanYourEventLayout({
  children,
}: LayoutProps<"/plan-your-event">) {
  return children;
}
