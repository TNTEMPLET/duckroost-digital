import { siteConfig } from "@/config/site";

export function Contact() {
  const mail = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent("Project inquiry")}`;

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[var(--color-surface-elevated)] p-8 sm:p-10">
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Ready when you are
      </h2>
      <p className="mt-4 text-[var(--color-mist)]">
        Tell me what you&apos;re building — new product, internal tool, or
        rescue mission. I&apos;ll reply with next steps and a realistic path
        forward.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={mail}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-surface)] transition-opacity hover:opacity-90"
        >
          Email {siteConfig.links.email}
        </a>
        {siteConfig.links.calendly ? (
          <a
            href={siteConfig.links.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/10"
          >
            Schedule a call
          </a>
        ) : null}
      </div>
      <p className="mt-6 text-xs text-[var(--color-mist)]/80">
        Add your Calendly URL in{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-[var(--color-mist)]">
          src/config/site.ts
        </code>{" "}
        to show a booking button.
      </p>
    </div>
  );
}
