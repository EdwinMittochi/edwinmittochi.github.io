import { profile, socials } from "@/data/portfolio";
import { Container } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold">
          {profile.name.toUpperCase()}
        </p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {social.glyph}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
