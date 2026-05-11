import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

const lastUpdated = "May 11, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects information for client web applications and Meta integrations.`,
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Who we are",
    body: [
      `${siteConfig.name} ("we," "us") builds and operates custom web applications for businesses and organizations. This policy describes how we handle information when you use our websites, client applications we host, and related integrations such as Meta (Facebook) developer apps.`,
      `Questions about this policy: ${siteConfig.links.email}.`,
    ],
  },
  {
    title: "Scope",
    body: [
      "This policy applies to duckroostdigital.com and to client sites and admin tools we develop and operate, including AP Baseball program sites and the Meta developer app used to publish to the AP Baseball Facebook Page.",
      "Each client site may collect additional information under that organization's own practices. Where a client site links here, this policy covers the developer services and integrations described on this page.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "Account and contact information you provide when signing in, requesting access, or contacting us (for example name, email address, and role).",
      "Content you submit through applications we operate, such as admin posts, uploaded images, and operational records needed to run those features.",
      "Technical data such as IP address, browser type, device information, and server logs used for security, troubleshooting, and performance.",
      "When you authorize a Meta integration, Meta may share Page identifiers, Page access tokens, and related metadata needed to publish or sync content on your behalf. We do not receive your Facebook password.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "Provide, secure, and maintain websites and admin tools.",
      "Authenticate administrators and enforce role-based access.",
      "Publish or manage Facebook Page content when an authorized admin uses connected features.",
      "Respond to support requests and comply with law.",
    ],
  },
  {
    title: "Sharing",
    body: [
      "We use infrastructure providers (for example hosting, databases, and file storage) that process data on our behalf under contract.",
      "Meta processes data according to its own terms when you connect Facebook or Instagram features.",
      "We do not sell personal information.",
    ],
  },
  {
    title: "Retention and security",
    body: [
      "We keep information only as long as needed for the purposes above, unless a longer period is required by law or legitimate business needs.",
      "We use reasonable administrative, technical, and organizational safeguards. No method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may contact us to request access, correction, or deletion of information we control, subject to legal and operational limits.",
      "You can revoke Meta permissions in your Facebook settings. Removing access may disable features that depend on those permissions.",
    ],
  },
  {
    title: "Children",
    body: [
      "Our developer sites and admin tools are intended for adults managing programs and operations. They are not directed to children under 13, and we do not knowingly collect personal information from children under 13 through these properties.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update this policy from time to time. The Last updated date at the top of this page will change when we do.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-16 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-[var(--color-mist)]">Last updated {lastUpdated}</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--color-highlight)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-mist)]">
            This page explains how {siteConfig.name} handles information for the sites and
            integrations we build, including Meta apps used for AP Baseball Facebook Page
            publishing.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title} aria-labelledby={`privacy-${section.title}`}>
                <h2
                  id={`privacy-${section.title}`}
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-highlight)]"
                >
                  {section.title}
                </h2>
                <PrivacySectionBody paragraphs={section.body} />
              </section>
            ))}
          </div>

          <p className="mt-12 text-sm text-[var(--color-mist)]">
            Contact:{" "}
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-[var(--color-accent-soft)] underline-offset-4 hover:underline"
            >
              {siteConfig.links.email}
            </a>
            . Return to the{" "}
            <Link
              href="/"
              className="text-[var(--color-accent-soft)] underline-offset-4 hover:underline"
            >
              home page
            </Link>
            .
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function PrivacySectionBody({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--color-mist)]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
