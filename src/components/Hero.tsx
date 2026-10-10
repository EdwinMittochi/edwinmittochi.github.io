import TypingText from "@/components/TypingText";
import RotatingTitle from "./RotatingTitle";
import Image from "next/image";
import { profile, socials } from "@/data/portfolio";
import { Card, Glow } from "@/components/ui";

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-6 sm:pt-8">
      <Glow className="-top-20 left-1/4 opacity-[var(--glow-1)]" />
      <Card className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 min-h-[1.75rem] text-lg font-semibold text-accent sm:min-h-[2rem] sm:text-xl">
                <TypingText text={profile.greeting} speed={100} />
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <RotatingTitle />
            <div className="my-6 h-1 w-24 rounded bg-accent" />
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                View My Work <ArrowRight />
              </a>
              <a
                href={profile.cvHref}
                download
                className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-accent hover:text-white"
              >
                Download CV
              </a>
            </div>

            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-xs font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    {social.glyph}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile photo */}
          <div className="w-full max-w-[400px] rounded-2xl border-2 border-accent p-4 sm:p-6 lg:justify-self-end">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-line bg-card-2 sm:h-[480px]">
              <Image
                src="/profile-photo.jpg"
                alt={`${profile.name} profile photo`}
                fill
                priority
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
        
      </Card>
    </section>
  );
}
