import ResumeView, { resumeMetadata } from "@/views/resume";

export const metadata = resumeMetadata("vi");

export default function ResumePage() {
  return <ResumeView locale="vi" />;
}
