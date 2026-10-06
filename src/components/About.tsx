import { profile, skills } from "@/data/portfolio";
import { Card, SectionHeading } from "@/components/ui";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function About() {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_2fr]">
      <section id="about">
        <Card className="flex h-full flex-col px-6 py-8 sm:px-8">
          <SectionHeading icon={<UserIcon />} title="ABOUT ME" />
          <p className="text-sm leading-relaxed text-muted">{profile.about}</p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-white"
            >
              Read More <ArrowRight />
            </a>
          </div>
        </Card>
      </section>

      <section id="skills">
        <Card className="h-full px-6 py-8 sm:px-8">
          <SectionHeading icon={<CodeIcon />} title="SKILLS" />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-center gap-2 rounded-full border border-line bg-card-2 px-4 py-3 text-xs font-semibold sm:text-sm"
              >
                <span aria-hidden>{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
