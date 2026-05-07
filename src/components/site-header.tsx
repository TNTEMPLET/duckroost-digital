import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--color-brand-teal)_22%,transparent)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="flex shrink-0 items-center rounded-lg outline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--color-accent-soft)]"
        >
          <Image
            src={siteConfig.brandLogo}
            alt=""
            width={512}
            height={512}
            sizes="(max-width: 640px) 40px, 44px"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
        </Link>
        <nav
          className="flex items-center gap-3 sm:gap-6"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-sm text-[var(--color-mist)] transition-colors hover:text-[var(--color-highlight)] sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#work"
            className="text-sm text-[var(--color-mist)] transition-colors hover:text-[var(--color-highlight)] sm:hidden"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-xs font-medium text-[var(--color-surface)] shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--color-accent)_55%,transparent)] transition-[opacity,box-shadow] hover:opacity-95 hover:shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--color-accent-soft)_45%,transparent)] sm:px-4 sm:text-sm"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
