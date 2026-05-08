import { siteConfig } from "@/config/site";

const shot = (path: string) =>
  `${path}?v=${siteConfig.projectScreenshotCacheKey}`;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveHref: string;
  demoHref?: string;
  repo?: string;
  /** Path under /public or remote URL (configure next.config remotePatterns). */
  imageSrc: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "AP Baseball Command and Control",
    description:
      "League administration: registrations, rosters, reporting, and operational tools for AP Baseball staff.",
    tags: ["Next.js", "TypeScript", "Admin"],
    liveHref: "https://admin.apbaseball.com",
    demoHref: "https://apbaseball-demo-admin.vercel.app",
    imageSrc: shot("/projects/ap-baseball-admin.png"),
    imageAlt:
      "Screenshot of the AP Baseball master admin control center dashboard",
  },
  {
    title: "Gonzales Diamond Youth Baseball",
    description:
      "Public DYB program site: team information, schedules, and season updates for families and coaches.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveHref: "https://dyb.apbaseball.com",
    demoHref: "https://apbaseball-demo-dyb.vercel.app",
    imageSrc: shot("/projects/gonzales-dyb.png"),
    imageAlt: "Screenshot of the Gonzales Diamond Youth Baseball website homepage",
  },
  {
    title: "Ascension Little League",
    description:
      "Little League program hub: league news, resources, and season details for the LLB division.",
    tags: ["Next.js", "TypeScript", "Vercel"],
    liveHref: "https://llb.apbaseball.com",
    demoHref: "https://apbaseball-demo-llb.vercel.app",
    imageSrc: shot("/projects/ascension-llb.png"),
    imageAlt: "Screenshot of the Ascension Little League website homepage",
  },
];
