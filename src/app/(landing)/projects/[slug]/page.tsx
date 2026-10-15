import ProjectView, { projectMetadata, projectStaticParams, type ProjectPageProps } from "@/views/project";

export const generateMetadata = ({ params }: ProjectPageProps) => projectMetadata(params, "vi");
export const generateStaticParams = projectStaticParams;

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectView params={params} locale="vi" />;
}
