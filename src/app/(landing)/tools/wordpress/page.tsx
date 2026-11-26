import { WordPressKitView, wordpressMetadata } from "@/views/tools";

export const metadata = wordpressMetadata("vi");

export default function WordPressPage() {
  return <WordPressKitView locale="vi" />;
}
