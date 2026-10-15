import { ToolsView, toolsMetadata } from "@/views/tools";

export const metadata = toolsMetadata("en");

export default function ToolsPage() {
  return <ToolsView locale="en" />;
}
