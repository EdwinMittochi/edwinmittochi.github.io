import { projects } from "@/data/portfolio";
import { Card, SectionHeading } from "@/components/ui";

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-6">
      <Card className="px-6 py-8 sm:px-8">
        <SectionHeading
          icon={<ProjectsIcon />}
          title="PROJECTS"
          action={
            <a
              href="#projects"
              className="hidden items-center gap-2 text-sm font-semibold text-accent hover:underline sm:inline-flex"
            >
              View All Projects <ArrowUpRight />
            </a>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group flex flex-col rounded-2xl border border-line bg-card-2 p-6 transition-colors hover:border-accent"
            >
              <span className="text-xl" aria-hidden>
                {project.icon}
              </span>
              <h3 className="mt-4 text-base font-bold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-accent px-3 py-1.5 text-xs font-semibold text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <span className="mt-5 flex justify-end text-fg transition-colors group-hover:text-accent">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
}
