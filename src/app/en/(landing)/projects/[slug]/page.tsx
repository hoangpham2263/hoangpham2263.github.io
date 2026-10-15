import ProjectView, { projectMetadata, projectStaticParams, type ProjectPageProps } from "@/views/project";

export const generateMetadata = ({ params }: ProjectPageProps) => projectMetadata(params, "en");
export const generateStaticParams = projectStaticParams;

export default function EnProjectPage({ params }: ProjectPageProps) {
  return <ProjectView params={params} locale="en" />;
}
