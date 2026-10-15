import ResumeView, { resumeMetadata } from "@/views/resume";

export const metadata = resumeMetadata("en");

export default function EnResumePage() {
  return <ResumeView locale="en" />;
}
