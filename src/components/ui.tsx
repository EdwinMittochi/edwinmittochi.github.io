import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/2 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] ${className}`}
      style={{ borderColor: "var(--card-border)" }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  icon,
  title,
  action,
}: {
  icon: ReactNode;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="flex items-center gap-3 text-xl font-bold tracking-wide sm:text-2xl">
        <span className="text-accent">{icon}</span>
        {title}
      </h2>
      {action}
    </div>
  );
}

/** Blurred red glow used behind cards in the design. */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute h-64 w-64 rounded-full bg-accent blur-[120px] ${className}`}
    />
  );
}
