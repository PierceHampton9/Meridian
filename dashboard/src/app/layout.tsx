import type { Metadata } from "next";
import { Playfair_Display, Lora, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
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
      className={`${playfairDisplay.variable} ${lora.variable} ${inter.variable}`}
    >
      <body>
        <div className="page-container">
          <header className="masthead">
            <div className="masthead-left">
              <span className="accent">Meridian</span>{" // Weekly"}
            </div>
            <div className="masthead-center">
              <Link className="masthead-title" href="/">Meridian</Link>
            </div>
            <nav className="masthead-nav" aria-label="Primary">
              <Link href="/">Latest</Link>
              <Link href="/briefings">Archive</Link>
              <Link href="/raw">Raw</Link>
              <Link href="/about">About</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="colophon">
            <div>
              <span className="colophon-brand">Meridian</span> &copy; 2026
            </div>
            <div className="colophon-links">
              <Link href="/briefings">Archive</Link>
              <Link href="/raw">Raw</Link>
              <Link href="/about">About</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
