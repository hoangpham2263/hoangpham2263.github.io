import type { Metadata } from "next";
import HomeView from "@/views/home";

// Projects list on its own URL (used by the mobile menu); the home page is the canonical copy
export const metadata: Metadata = { alternates: { canonical: "/en" } };

export default function EnProjects() {
  return <HomeView locale="en" />;
}
