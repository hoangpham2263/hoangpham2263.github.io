import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import Picture from "@/components/picture";
import ZoomImage from "@/components/zoom-image";
import ContentCard from "@/components/content-card";
import BlogFilter from "@/components/blog-filter";
import { siteConfig } from "@/config/site.config";
import { getDictionary, languageAlternates, localePath, ogLocale, type Locale } from "@/i18n";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const formatDate = (date: string, locale: Locale) =>
  new Date(date).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
    day: "2-digit",
    month: locale === "vi" ? "2-digit" : "short",
    year: "numeric",
  });

const postsFor = (locale: Locale) =>
  blogs
    .filter((b) => b.published && b.lang === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const categoriesOf = (posts: ReturnType<typeof postsFor>) => {
  const counts = new Map<string, number>();
  posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
  return [...counts].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
};

export function blogListMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).blog;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/blog", locale),
  };
}

export function BlogListView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).blog;
  const posts = postsFor(locale);
  return (
    <div className="w-full max-w-5xl mt-0 md:mt-6">
      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t.empty}</p>
      ) : (
        <BlogFilter categories={categoriesOf(posts)} allLabel={t.all}>
          {posts.map((post) => (
            <div key={post.slugAsParams} data-category={post.category}>
            <ContentCard
              title={post.title}
              description={post.description}
              href={localePath(locale, `/blog/${post.slugAsParams}`)}
              image={post.image}
              tags={post.tags}
              meta={`${formatDate(post.date, locale)} · ${post.category}`}
              locale={locale}
            />
            </div>
          ))}
        </BlogFilter>
      )}
    </div>
  );
}

export type BlogPostProps = { params: Promise<{ slug: string }> };

const findPost = async (params: BlogPostProps["params"], locale: Locale) => {
  const slug = (await params).slug;
  return (
    blogs.find((b) => b.slugAsParams === slug && b.lang === locale) ??
    blogs.find((b) => b.slugAsParams === slug)
  );
};

export async function blogPostMetadata(params: BlogPostProps["params"], locale: Locale): Promise<Metadata> {
  const post = await findPost(params, locale);
  if (!post) return {};
  const path = `/blog/${post.slugAsParams}`;
  return {
    title: `${post.title} | ${siteConfig.creator.name}`,
    description: post.description,
    keywords: [...post.tags, ...siteConfig.keywords],
    alternates: languageAlternates(path, locale),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteConfig.siteUrl}${localePath(locale, path)}`,
      locale: ogLocale(locale),
      images: post.image ? [{ url: `${siteConfig.siteUrl}${post.image.src}`, width: post.image.width, height: post.image.height, alt: post.title }] : undefined,
    },
  };
}

export function blogStaticParams() {
  return [...new Set(blogs.filter((b) => b.published).map((b) => b.slugAsParams))].map((slug) => ({ slug }));
}

export async function BlogPostView({ params, locale }: BlogPostProps & { locale: Locale }) {
  const post = await findPost(params, locale);
  if (!post) notFound();
  const t = getDictionary(locale).blog;
  return (
    <article className="w-full mt-0 md:mt-6 space-y-6">
      <Link
        href={localePath(locale, "/blog")}
        className="group/back inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" />
        {t.allPosts}
      </Link>
      {/* Image left (whole, not cropped), title and details right */}
      <header className={post.image ? "grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center" : ""}>
        {post.image && (
          <ZoomImage src={post.image.src} alt={post.title}>
            <Picture image={post.image} width={1200} height={675} alt={post.title} className="w-full h-auto border rounded-xl bg-muted" />
          </ZoomImage>
        )}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">{formatDate(post.date, locale)} · {post.category}</p>
          <h1 className="font-heading text-[22px] font-semibold leading-snug sm:text-2xl">{post.title}</h1>
          <p className="text-sm text-foreground/85 leading-6">{post.description}</p>
        </div>
      </header>
      <div className="border-t pt-6 text-[15px] leading-7 [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:pb-0 [&_h2]:text-xl [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_p:not(:first-child)]:mt-3 [&_ul]:my-2 [&_ol]:my-2">
        <MDXContentRenderer code={post.body} />
      </div>
    </article>
  );
}
