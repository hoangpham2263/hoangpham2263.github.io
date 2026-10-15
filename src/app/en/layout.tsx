import HtmlLang from "@/components/html-lang";
import { getSiteText } from "@/config/localized";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

const text = getSiteText("en");

export const metadata: Metadata = {
  title: text.title,
  description: text.description,
  openGraph: {
    title: text.title,
    description: text.description,
    url: `${siteConfig.origin}/en`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.og, width: 2880, height: 1800, alt: siteConfig.name }],
    type: "website",
    locale: "en_US",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
      {children}
    </>
  );
}
