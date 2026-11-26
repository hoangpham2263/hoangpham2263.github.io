import { ToolsView, toolsTabMetadata } from "@/views/tools";

export const metadata = toolsTabMetadata("en", "docs");

export default function Page() {
  return <ToolsView locale="en" tab="docs" />;
}
