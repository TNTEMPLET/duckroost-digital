import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/18 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-[var(--color-brand-teal)]/20 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Web development
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-highlight)] sm:text-5xl md:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-mist)]">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-highlight)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] transition-opacity hover:opacity-90"
          >
            View web apps
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--color-brand-teal)_35%,transparent)] bg-[color-mix(in_oklab,var(--color-brand-teal)_12%,transparent)] px-6 py-3 text-sm font-medium text-[var(--color-highlight)] transition-colors hover:border-[color-mix(in_oklab,var(--color-accent-soft)_45%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-brand-teal)_18%,transparent)]"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
