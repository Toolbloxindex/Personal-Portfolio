import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thomascorreia.dev"),
  title: {
    default: "Tomás Correia · Founder & Full-Stack Developer",
    template: "%s · Tomás Correia",
  },
  description:
    "Tomás Correia is a founder and full-stack developer in Delft, NL. Founded Veblen at sixteen and BookHero at seventeen; now studying Computer Science at TU Delft.",
  authors: [{ name: "Tomás Correia" }],
};

export const viewport: Viewport = {
  themeColor: "#131010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
