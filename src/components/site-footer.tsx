import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--color-brand-teal)_18%,transparent)] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-mist)]">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <Link
            href="/privacy"
            className="text-[var(--color-mist)] hover:text-[var(--color-highlight)]"
          >
            Privacy
          </Link>
          {siteConfig.links.github ? (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-mist)] hover:text-[var(--color-highlight)]"
            >
              GitHub
            </a>
          ) : null}
          {siteConfig.links.linkedin ? (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-mist)] hover:text-[var(--color-highlight)]"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
