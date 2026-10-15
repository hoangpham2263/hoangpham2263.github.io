import RootProviders from "@/components/providers";
import { siteConfig } from "@/config/site.config";
import { getSiteText } from "@/config/localized";
import { cn } from "@/lib/utils";
import "@/styles/code.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist } from "next/font/google";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const text = getSiteText("vi");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: text.title,
  description: text.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/hp-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: text.title,
    description: text.description,
    url: siteConfig.origin,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.og,
        width: 2880,
        height: 1800,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.socials.x,
    title: text.title,
    description: text.description,
    images: {
      url: siteConfig.og,
      width: 2880,
      height: 1800,
      alt: siteConfig.name,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={cn("min-h-screen lg:h-screen lg:overflow-hidden bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
