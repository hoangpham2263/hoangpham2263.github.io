import { BlogListView, blogListMetadata } from "@/views/blog";

export const metadata = blogListMetadata("vi");

export default function BlogPage() {
  return <BlogListView locale="vi" />;
}
