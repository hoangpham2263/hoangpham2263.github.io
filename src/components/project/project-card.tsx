import { projects } from "#velite";
import ContentCard from "@/components/content-card";
import { z } from "velite";
import { localePath, type Locale } from "@/i18n";

type ProjectCardProps = {
  project: z.infer<typeof projects.schema>;
  locale?: Locale;
};

export default function ProjectCard({ project, locale = "vi" }: ProjectCardProps) {
  return (
    <ContentCard
      title={project.title}
      description={project.description}
      href={localePath(locale, `/projects/${project.slugAsParams}`)}
      image={project.image}
      // Employer tag is shown on the detail page only
      tags={project.tags.filter((tag) => tag !== "Puramu")}
      links={project.links}
      locale={locale}
    />
  );
}
