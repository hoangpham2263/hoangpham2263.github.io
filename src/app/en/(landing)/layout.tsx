import LandingLayoutView from "@/views/landing-layout";
import { languageAlternates } from "@/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: languageAlternates("/", "en"),
};

export default function EnLandingLayout({ children }: { children: React.ReactNode }) {
  return <LandingLayoutView locale="en">{children}</LandingLayoutView>;
}
