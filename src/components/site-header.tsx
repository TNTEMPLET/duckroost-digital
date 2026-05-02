import Link from "next/link";
import { siteConfig } from "@/config/site";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--color-surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white"
        >
          {siteConfig.name}
        </Link>
        <nav
          className="flex items-center gap-3 sm:gap-6"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-sm text-[var(--color-mist)] transition-colors hover:text-white sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#work"
            className="text-sm text-[var(--color-mist)] transition-colors hover:text-white sm:hidden"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-xs font-medium text-[var(--color-surface)] transition-opacity hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
