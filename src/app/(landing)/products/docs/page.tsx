import { ToolsView, toolsTabMetadata } from "@/views/tools";

export const metadata = toolsTabMetadata("vi", "docs");

export default function Page() {
  return <ToolsView locale="vi" tab="docs" />;
}
