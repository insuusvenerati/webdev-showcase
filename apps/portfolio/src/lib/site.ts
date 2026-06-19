/**
 * Central business configuration for the portfolio/services site.
 *
 * Everything client-facing lives here so the page markup stays clean and you
 * only ever edit one file to rebrand, re-price, or update contact details.
 *
 * ── Replace the placeholders marked `← TODO` with your real details. ──
 */

export interface Inclusion {
  icon: InclusionIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export type InclusionIcon =
  | "design"
  | "hosting"
  | "domain"
  | "seo"
  | "updates"
  | "copy"
  | "camera";

export const site = {
  brand: {
    name: "Norwood Web", // ← TODO: your studio name
    ownerName: "Sean Norwood", // ← TODO: your name
    tagline: "Websites for local businesses — done for you, start to finish.",
  },

  contact: {
    email: "norwood.sean@gmail.com", // ← TODO: your email
    phone: "+1 (850) 6370332", // ← TODO: your phone
    serviceArea: "Pensacola & The Surrounding Area", // ← TODO: your area
  },

  pricing: {
    price: 149, // ← TODO: your monthly price
    cadence: "/month",
    startingLabel: "from",
    note: "One flat monthly fee. No big upfront build cost, no surprise invoices.",
    highlight: "Everything included",
  },

  /** The all-inclusive monthly subscription. */
  inclusions: [
    {
      icon: "design" as InclusionIcon,
      title: "Custom website",
      description:
        "A site designed and built around your business — not a template. Mobile-friendly and fast on every device.",
    },
    {
      icon: "hosting" as InclusionIcon,
      title: "Hosting & security",
      description:
        "Reliable, fast hosting on a global edge network, plus SSL and uptime monitoring. You never touch a server.",
    },
    {
      icon: "domain" as InclusionIcon,
      title: "Your domain",
      description:
        "We register and connect your .com (or .ca) and professional email setup. Already own one? We’ll move it over.",
    },
    {
      icon: "seo" as InclusionIcon,
      title: "Local SEO setup",
      description:
        "Get found on Google — optimized titles, fast pages, Google Business Profile, and clean local search basics.",
    },
    {
      icon: "updates" as InclusionIcon,
      title: "Monthly updates",
      description:
        "Need a new photo, a price change, or a seasonal banner? Up to two content updates every month, on the house.",
    },
    {
      icon: "copy" as InclusionIcon,
      title: "Copywriting",
      description:
        "No staring at a blank page. I write the words that turn visitors into customers, in your business’s voice.",
    },
    {
      icon: "camera" as InclusionIcon,
      title: "Photography",
      description:
        "Professional photos of your work, shop, or menu — sourced and edited so your site looks the part.",
    },
  ] satisfies Inclusion[],

  process: [
    {
      step: "01",
      title: "Free chat",
      description:
        "A no-pressure call to learn about your business, your customers, and what you want your website to do.",
    },
    {
      step: "02",
      title: "Design & build",
      description:
        "I write the copy, handle the photography, and build your site — sharing progress and getting your sign-off.",
    },
    {
      step: "03",
      title: "Launch",
      description:
        "Domain, hosting, and local SEO are all set up. Your new site goes live and starts working for you.",
    },
    {
      step: "04",
      title: "Ongoing care",
      description:
        "Monthly updates and support for one flat fee. Your site stays fresh, fast, and found — hands-off for you.",
    },
  ] satisfies ProcessStep[],

  faq: [
    {
      question: "Is there a big upfront cost?",
      answer:
        "No. The website, hosting, domain, and SEO are all included in one flat monthly subscription — no large build invoice to get started.",
    },
    {
      question: "Do I have to write anything myself?",
      answer:
        "Not a word. I handle all the copywriting and photography. You review and approve — I do the heavy lifting.",
    },
    {
      question: "What if I need a change later?",
      answer:
        "Every plan includes up to two content updates each month (new photos, price changes, seasonal banners). Just email and it’s done.",
    },
    {
      question: "Do I own my website and domain?",
      answer:
        "Yes — your domain and all your content are yours. If you ever leave, everything comes with you.",
    },
  ] satisfies FaqItem[],

  trust: [
    { value: "All-inclusive", label: "Site, hosting, domain & SEO in one fee" },
    { value: "~2 weeks", label: "From first chat to launch" },
    { value: "100% hands-off", label: "Copy, photos & updates handled for you" },
    { value: "Local", label: "Built for businesses in your area" },
  ] satisfies TrustStat[],
};
