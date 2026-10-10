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
      className={`group/card relative isolate overflow-hidden rounded-2xl border bg-white/2 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] ${className}`}
      style={{ borderColor: "var(--card-border)" }}
    >
      {/* Glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]"
      >
        <div
          className="absolute -inset-y-1/2 -left-1/2 w-1/3 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover/card:left-[130%] group-hover/card:opacity-100 motion-reduce:transition-none"
        />
      </div>

      <div className="relative z-0">
        {children}
      </div>
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
