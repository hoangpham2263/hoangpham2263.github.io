import { projects } from "#velite";
import Picture from "@/components/picture";
import { StepForward } from "lucide-react";
import Link from "next/link";
import { z } from "velite";
import LinksSection from "../links-section";
import { localePath, type Locale } from "@/i18n";

type ProjectCardProps = {
  project: z.infer<typeof projects.schema>;
  locale?: Locale;
};

export default function ProjectCard({ project, locale = "en" }: ProjectCardProps) {
  const href = localePath(locale, `/projects/${project.slugAsParams}`);
  return (
    <div className="flex flex-col-reverse md:flex-row p-3 justify-between gap-3 md:gap-2 rounded-xl border overflow-hidden">
      <div className="space-y-2 w-full md:w-3/5">
        <Link href={href} className="space-y-2 group/link">
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold font-heading">{project.title}</h1>
            </div>
            <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-sm text-foreground/85 leading-6 max-w-2xl">{project.description}</p>
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Employer tag is shown on the detail page only */}
          {project.tags.filter((tag) => tag !== "Puramu").map((tag) => (
            <p key={tag} className="px-2 py-1 rounded bg-muted text-foreground/85 text-xs">
              {tag}
            </p>
          ))}
        </div>
        <div className="pt-2 md:mb-4">
          <LinksSection links={project.links} locale={locale} />
        </div>
      </div>
      <div className="w-full md:w-2/5 aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl">
        <Link href={href}>
          <Picture
            image={project.image}
            width={600}
            height={338}
            quality={100}
            alt={project.title}
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
}
