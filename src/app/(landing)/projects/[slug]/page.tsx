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
    <article className="w-full mt-6 space-y-6">
      <div>
        <Link
          href="/"
          className="group/back inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft
            size={16}
            className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
          />
          All projects
        </Link>
      </div>
      <Picture
        image={project.image}
        width={1200}
        height={800}
        alt={project.title}
        className="w-full border rounded-2xl"
      />
      <header className="space-y-3">
        <h1 className="font-heading text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h1>
        <p className="text-sm text-foreground/80 leading-6">{project.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <p key={tag} className="px-2 py-1 rounded bg-muted text-foreground/75 text-xs">
              {tag}
            </p>
          ))}
        </div>
        <LinksSection links={project.links} />
      </header>
      {/* Compact typography for short project write-ups */}
      <div className="border-t pt-6 text-[15px] leading-7 [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:pb-0 [&_h2]:text-xl [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_p:not(:first-child)]:mt-3 [&_ul]:my-2 [&_ol]:my-2">
        <MDXContentRenderer code={project.body} />
      </div>
    </article>
  );
}
