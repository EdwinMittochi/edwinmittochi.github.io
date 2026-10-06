import { experience } from "@/data/portfolio";
import { Card, SectionHeading } from "@/components/ui";

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mt-6">
      <Card className="px-6 py-8 sm:px-8">
        <SectionHeading icon={<ExperienceIcon />} title="EXPERIENCE" />

        <ol className="space-y-8">
          {experience.map((item) => (
            <li
              key={item.period}
              className="grid gap-3 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-accent">{item.period}</span>
              </div>

              <div>
                <h3 className="text-base font-bold">{item.role}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>

              <span className="hidden justify-self-start rounded-full border border-accent px-5 py-2 text-xs font-semibold text-accent md:inline-block md:justify-self-end">
                {item.type}
              </span>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
