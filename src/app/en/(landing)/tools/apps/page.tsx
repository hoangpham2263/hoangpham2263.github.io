import { ToolsView, toolsTabMetadata } from "@/views/tools";

export const metadata = toolsTabMetadata("en", "apps");

export default function Page() {
  return <ToolsView locale="en" tab="apps" />;
}
