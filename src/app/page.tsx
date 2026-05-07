import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section
          id="work"
          className="scroll-mt-20 border-t border-[color-mix(in_oklab,var(--color-brand-teal)_14%,transparent)] bg-[color-mix(in_oklab,var(--color-surface-elevated)_35%,var(--color-surface))] px-4 py-20 sm:px-6"
          aria-labelledby="work-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="work-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-highlight)] sm:text-4xl"
            >
              Web apps
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-mist)]">
              Live league and program sites for AP Baseball — admin, DYB, and
              LLB.
            </p>
            <div className="mt-12">
              <ProjectGrid projects={projects} />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="scroll-mt-20 px-4 py-20 sm:px-6"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading" className="sr-only">
            About
          </h2>
          <About />
        </section>
        <section
          id="contact"
          className="scroll-mt-20 border-t border-[color-mix(in_oklab,var(--color-brand-teal)_14%,transparent)] px-4 py-20 sm:px-6"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
          <Contact />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
