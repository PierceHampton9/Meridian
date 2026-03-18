import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-impact",
});

export const metadata: Metadata = {
  title: "Meridian",
  description: "A dashboard for weekly industry pain-point briefings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmMono.variable} ${bebasNeue.variable}`}
    >
      <body>
        <div className="cine-bar cine-bar-top" aria-hidden="true" />
        <div className="cine-bar cine-bar-bottom" aria-hidden="true" />

        <div className="global-atmos" aria-hidden="true">
          <div className="ga-dots" />
          <div className="ga-line ga-line-h1" />
          <div className="ga-line ga-line-h2" />
          <div className="ga-line ga-line-v1" />
          <div className="ga-glow ga-glow-1" />
          <div className="ga-glow ga-glow-2" />
          <div className="ga-cross ga-cross-1" />
          <div className="ga-cross ga-cross-2" />
          <div className="ga-cross ga-cross-3" />
          <div className="ga-dot ga-dot-1" />
          <div className="ga-dot ga-dot-2" />
          <div className="ga-dot ga-dot-3" />
          <div className="ga-dot ga-dot-4" />
          <div className="ga-dot ga-dot-5" />
          <div className="ga-scanline" />
        </div>

        <div className="shell">
          <header className="site-header">
            <Link className="brand" href="/">
              MERIDIAN
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/">Latest</Link>
              <Link href="/briefings">Archive</Link>
              <Link href="/raw">Raw</Link>
              <Link href="/about">About</Link>
            </nav>
          </header>
          <main className="page-main">{children}</main>
          <footer className="site-footer">
            <span>PUBLIC BRIEFINGS</span>
            <span>JOURNALISM MVP</span>
            <span>NO LOGIN</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
