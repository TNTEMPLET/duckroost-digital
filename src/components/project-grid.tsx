import Image from "next/image";
import type { Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const isRemoteImage = project.imageSrc.startsWith("http");

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-teal)_18%,transparent)] bg-[var(--color-surface-elevated)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_12%,transparent)] transition-shadow hover:shadow-[0_24px_80px_-24px_color-mix(in_oklab,var(--color-accent)_22%,transparent)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          unoptimized={!isRemoteImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-elevated)] via-transparent to-transparent opacity-80" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-highlight)]">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-mist)]">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[color-mix(in_oklab,var(--color-brand-teal)_22%,transparent)] bg-[color-mix(in_oklab,var(--color-brand-teal)_8%,transparent)] px-3 py-1 text-xs text-[var(--color-mist)]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoHref ? (
            <a
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-highlight)] underline-offset-4 hover:underline"
            >
              Demo site
            </a>
          ) : null}
          <a
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            Live site
          </a>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-mist)] underline-offset-4 hover:text-[var(--color-highlight)] hover:underline"
            >
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
