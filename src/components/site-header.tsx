"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--color-brand-teal)_22%,transparent)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="group flex shrink-0 items-center gap-0 rounded-lg outline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--color-accent-soft)]"
          onClick={closeMobileMenu}
        >
          <Image
            src={siteConfig.brandLogo}
            alt=""
            width={80}
            height={80}
            sizes="(max-width: 640px) 48px, 56px"
            className="h-12 w-12 shrink-0 object-contain opacity-90 [filter:saturate(0.9)_contrast(0.95)_brightness(0.95)] sm:h-14 sm:w-14"
            priority
          />
          <span className="-ml-0.5 font-[family-name:var(--font-display)] text-base font-semibold leading-none tracking-tight sm:-ml-1 sm:text-lg">
            <span className="text-[color-mix(in_oklab,var(--color-highlight)_86%,white)] transition-colors group-hover:text-white">
              DuckRoost
            </span>{" "}
            <span className="text-[#f7cf57] [text-shadow:0_0_10px_color-mix(in_oklab,#f7cf57_34%,transparent)] transition-colors group-hover:text-[#ffe08f]">
              Digital
            </span>
          </span>
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
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--color-brand-teal)_28%,transparent)] bg-[color-mix(in_oklab,var(--color-brand-teal)_10%,transparent)] text-[var(--color-highlight)] transition-colors hover:border-[color-mix(in_oklab,var(--color-accent-soft)_45%,transparent)] hover:text-[var(--color-accent-soft)] sm:hidden"
          >
            <span aria-hidden className="text-lg leading-none">
              ≡
            </span>
          </button>
          <Link
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-xs font-medium text-[var(--color-surface)] transition-opacity hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </div>
      {mobileMenuOpen ? (
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMobileMenu}
            className="fixed inset-0 z-50 bg-black/60"
          />
          <aside className="fixed right-0 top-0 z-[60] h-full w-[80%] max-w-xs border-l border-[color-mix(in_oklab,var(--color-brand-teal)_28%,transparent)] bg-[var(--color-surface-elevated)] p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-highlight)]">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--color-brand-teal)_30%,transparent)] text-[var(--color-mist)] transition-colors hover:text-[var(--color-highlight)]"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {nav.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-base text-[var(--color-highlight)] transition-colors hover:text-[var(--color-accent-soft)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-surface)]"
              >
                Let&apos;s talk
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
