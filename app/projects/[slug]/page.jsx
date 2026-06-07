import { projectData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

export async function generateStaticParams() {
  return projectData
    .filter((project) => typeof project.slug === "string" && project.slug.length > 0)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Project Details`,
    description: project.description,
  };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetails project={project} />;
};

export default ProjectPage;