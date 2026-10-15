import { BlogListView, blogListMetadata } from "@/views/blog";

export const metadata = blogListMetadata("en");

export default function BlogPage() {
  return <BlogListView locale="en" />;
}
