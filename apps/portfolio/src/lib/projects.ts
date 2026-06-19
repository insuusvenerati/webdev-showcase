/**
 * Showcase of client work (the other apps in this monorepo, presented as
 * example projects). Copy is written for local business owners — each entry
 * leads with the *outcome* the business gets, and the industry it serves, so a
 * visitor can quickly find work that looks like theirs.
 *
 * Add a new entry here when you land a new client; the homepage grid reads
 * straight from this list.
 */

export type Industry = "Food & Beverage" | "Beauty & Grooming" | "Home Services";

export interface Project {
  /** Workspace package name under `apps/`. Used for the demo link. */
  slug: string;
  businessName: string;
  industry: Industry;
  /** One-line outcome the owner cares about. */
  headline: string;
  /** What the site does for them, in plain language. */
  description: string;
  /** The concrete business results delivered. */
  outcomes: string[];
  /** Live demo URL. */
  url: string;
  /** Brand colors, used to tint the card preview + accents. */
  colors: {
    from: string;
    to: string;
    text: string;
  };
}

export const projects: Project[] = [
  {
    slug: "bakery",
    businessName: "La Petite Miette",
    industry: "Food & Beverage",
    headline: "An appetizing storefront that turns scrollers into regulars.",
    description:
      "A warm, menu-forward site for a neighborhood bakery. Mouth-watering photography, clear opening hours, and an easy path from “found on Google” to “walking through the door.”",
    outcomes: [
      "Showcases the menu with photography that sells",
      "Shows up in local searches for bakeries nearby",
      "Mobile-friendly — most customers browse on their phone",
    ],
    url: "https://bakery.stiforr.workers.dev/",
    colors: { from: "#C58967", to: "#E3A857", text: "#2A1F1B" },
  },
  {
    slug: "barber",
    businessName: "Apex Barber Co.",
    industry: "Beauty & Grooming",
    headline: "A sharp, modern site that fills the booking calendar.",
    description:
      "A bold, high-contrast site for a premium barbershop. Services and pricing up front, a lookbook that builds trust, and a booking button that’s always one tap away.",
    outcomes: [
      "Pricing and services front and center",
      "Lookbook builds trust before the first cut",
      "Booking button on every page",
    ],
    url: "https://barber.stiforr.workers.dev/",
    colors: { from: "#1A1A1A", to: "#3A3A3A", text: "#F5F5F5" },
  },
  {
    slug: "landscaping",
    businessName: "Greenfield Landscaping",
    industry: "Home Services",
    headline: "A credible portfolio that wins bigger jobs.",
    description:
      "A grounded, portfolio-led site for a landscaping studio. Project galleries do the selling, service tiers set expectations, and a clear quote request turns visitors into leads.",
    outcomes: [
      "Portfolio galleries that prove the work",
      "Clear service tiers and coverage area",
      "Quote requests routed straight to your inbox",
    ],
    url: "https://landscaping.stiforr.workers.dev/",
    colors: { from: "#2F5D3A", to: "#6B8E5A", text: "#F4F1E8" },
  },
];

/**
 * Industries served, derived from the projects above. Rendered as quick-filter
 * badges on the homepage so visitors can jump to work like theirs.
 */
export const industries: Industry[] = [
  ...new Set(projects.map((p) => p.industry)),
];
