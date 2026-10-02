import { projects } from "#site/content";
import LinksSection from "@/components/links-section";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import Picture from "@/components/picture";
import { siteConfig } from "@/config/site.config";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

async function getProjectFromParam(params: { slug: string }) {
  const slug = (await params).slug;
  const project = projects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return null;
  }
  return project;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParam(params);

  if (!project) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.siteUrl}${project.image?.src}`);
  ogUrl.searchParams.set("heading", project.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${project.title} | ${siteConfig.creator.name}`,
    description: project.description,
    keywords: [...project.tags, ...siteConfig.keywords, project.title],
    openGraph: {
      title: `${project.title} | ${siteConfig.creator.name}`,
      description: project.description,
      type: "article",
      url: `${siteConfig.siteUrl}/projects/${project.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<ProjectPageProps["params"][]> {
  const slugs = projects.map((project) => project.slugAsParams);
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParam(params);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:py-10">
      <div className="rounded-2xl sm:border p-0 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-5">
          <Link href="/" className="group/back text-xs">
            <ArrowLeft
              size={18}
              className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
            />
            <span className="sr-only">Back to home</span>
          </Link>
          <p className="px-2 py-1 text-xs rounded bg-secondary">{new Date(project.date).getFullYear()}</p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-8">
            <Picture
              image={project.image}
              width={600}
              height={400}
              alt={project.title}
              className="border rounded-xl mx-auto"
            />
            <h1 className="mt-6 mb-3 font-heading text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h1>
            <p className="mb-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <div className="mb-4">
              <LinksSection links={project.links} />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <p key={tag} className="text-xs px-2 py-1 rounded bg-secondary">
                  {tag}
                </p>
              ))}
            </div>
          </aside>
          {/* Compact typography for short project write-ups */}
          <article className="text-[15px] leading-7 [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:pb-0 [&_h2]:text-xl [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_p:not(:first-child)]:mt-3 [&_ul]:my-2 [&_ol]:my-2">
            <MDXContentRenderer code={project.body} />
          </article>
        </div>
      </div>
    </main>
  );
}
