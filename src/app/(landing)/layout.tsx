import LandingLayoutView from "@/views/landing-layout";
import { languageAlternates } from "@/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: languageAlternates("/", "vi"),
};

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return <LandingLayoutView locale="vi">{children}</LandingLayoutView>;
}
