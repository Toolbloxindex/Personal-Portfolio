import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
      <style
        href="critical-header-styles"
        precedence="default"
      >{`/* critical: applied before the main stylesheet loads, prevents the mobile header/toggle flash on refresh. Mirrors --bg, --text and --header-h in globals.css. */
        .menu-toggle{display:none;background:transparent;border:0;color:#f2eded}
        @media(max-width:560px){.menu-toggle{display:inline-flex}}
        .site-header{position:fixed;top:0;left:0;right:0;height:80px;background:#131010}
      `}</style>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
