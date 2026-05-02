/**
 * Business identity — edit before launch.
 * Naming finalists (verify domain + LA Secretary of State before filing):
 * - DuckRoost Digital (default — St. Amant’s “Duck Roost”)
 * - Roost Line Labs
 * - St. Amant Works (digital)
 */
export const siteConfig = {
  /** Increment when re-running `npm run capture-screenshots` so images aren’t stuck in CDN/browser cache. */
  projectScreenshotCacheKey: "2",
  name: "DuckRoost Digital",
  tagline: "Web apps built right.",
  description:
    "Custom web applications for businesses and beyond. Fast, reliable, and easy to maintain.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://duckroost-digital.vercel.app",
  locale: "en_US",
  links: {
    email: "hello@example.com",
    calendly: "",
    github: "",
    linkedin: "",
  },
} as const;
