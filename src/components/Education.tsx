import { education } from "@/data/portfolio";
import { Card, SectionHeading } from "@/components/ui";

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="h-6 w-6">
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </svg>
  );
}

export default function Education() {
  return (
    <section id="education">
      <Card className="h-full px-6 py-8 sm:px-8">
        <SectionHeading icon={<EducationIcon />} title="EDUCATION" />

        <ol className="space-y-6">
          {education.map((item) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-line bg-card-2 p-6 transition-colors ">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-accent">{item.period}</p>
                <h3 className="mt-1 text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
