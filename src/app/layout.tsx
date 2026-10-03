import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, Newsreader } from "next/font/google";
import { AppShell } from "@/components/shell/app-shell";
import "./globals.css";

// Self-hosted at build time so the app works offline. globals.css maps the
// design system font tokens (--font-sans, --font-serif, ...) onto these.
const geist = Geist({ variable: "--nf-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--nf-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--nf-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});
const cinzel = Cinzel({ variable: "--nf-cinzel", subsets: ["latin"] });

const fontVariables = [geist, geistMono, newsreader, cinzel].map((font) => font.variable).join(" ");

export const metadata: Metadata = {
  title: "Talewick",
  description: "Advanced desktop book reader",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="ember" className={fontVariables}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
