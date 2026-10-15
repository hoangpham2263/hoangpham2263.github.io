import { experienceMetadata } from "@/views/experience-metadata";

export const metadata = experienceMetadata("vi");

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
