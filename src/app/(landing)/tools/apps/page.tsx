import { ToolsView, toolsTabMetadata } from "@/views/tools";

export const metadata = toolsTabMetadata("vi", "apps");

export default function Page() {
  return <ToolsView locale="vi" tab="apps" />;
}
