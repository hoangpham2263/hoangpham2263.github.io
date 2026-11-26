import { WordPressKitView, wordpressMetadata } from "@/views/tools";

export const metadata = wordpressMetadata("en");

export default function WordPressPage() {
  return <WordPressKitView locale="en" />;
}
