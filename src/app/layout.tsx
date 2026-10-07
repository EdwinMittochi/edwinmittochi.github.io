import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted Geist (bundled with Next.js) — the build environment has no
// network access, so next/font/google cannot be used here.
const inter = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edwin Mittochi | Computer Scientist & Developer",
  description:
    "Portfolio of Edwin Mittochi — Computer Scientist, developer and IT professional building reliable, efficient and user-friendly digital solutions.",
};

// Runs before first paint so the saved theme is applied without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans">
  <div className="relative min-h-screen">
    {/* Background glow */}
    {/* Black + red background */}
{/* Theme-aware background */}
<div className="pointer-events-none fixed inset-0 -z-10 bg-[var(--page)]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(185,28,28,0.14),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(127,29,29,0.16),transparent_40%)]" />
</div>

    {children}
  </div>
</body>
    </html>
  );
}

