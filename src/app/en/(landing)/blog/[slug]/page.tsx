import { BlogPostView, blogPostMetadata, blogStaticParams, type BlogPostProps } from "@/views/blog";

export const generateMetadata = ({ params }: BlogPostProps) => blogPostMetadata(params, "en");
export const generateStaticParams = blogStaticParams;

export default function BlogPostPage({ params }: BlogPostProps) {
  return <BlogPostView params={params} locale="en" />;
}
