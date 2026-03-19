import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-mono",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Meridian",
  description: "Weekly briefings for builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${ibmPlexMono.variable} ${sourceSerif4.variable}`}
    >
      <body>
        <header className="masthead">
          <Link className="masthead-title" href="/">Meridian</Link>
          <nav className="masthead-nav" aria-label="Primary">
            <Link href="/">Latest</Link>
            <Link href="/briefings">Archive</Link>
            <Link href="/raw">Raw</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        {children}

        <footer className="colophon">
          <span className="colophon-mark">Meridian</span>
          <p>Weekly briefings for builders</p>
        </footer>
      </body>
    </html>
  );
}
