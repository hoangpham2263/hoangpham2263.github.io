import ExperienceView from "@/views/experience";
import { experienceMetadata } from "@/views/experience-metadata";

export const metadata = experienceMetadata("en");

export default function EnExperiencePage() {
  return <ExperienceView locale="en" />;
}
