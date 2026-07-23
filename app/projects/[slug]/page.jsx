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
    title: `${project.name} | Project Details | Harsh Mistry (harshmistry / harshmisty)`,
    description: `${project.description}. View key features, integrations, and source code of project ${project.name} by Harsh Mistry.`,
    alternates: {
      canonical: `https://harsh-mistry.vercel.app/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} | Harsh Mistry Portfolio`,
      description: project.description,
      url: `https://harsh-mistry.vercel.app/projects/${slug}`,
      type: "website",
    },
  };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);
  if (!project) notFound();

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": project.category === "next js" || project.category === "react js" ? "SoftwareSourceCode" : "CreativeWork",
    "name": project.name,
    "description": project.description,
    "url": `https://harsh-mistry.vercel.app/projects/${project.slug}`,
    "codeRepository": project.github || undefined,
    "creator": {
      "@type": "Person",
      "name": "Harsh Mistry",
      "alternateName": ["harshmistry", "harshmisty"]
    },
    "programmingLanguage": project.techStack || undefined
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <ProjectDetails project={project} />
    </>
  );
};

export default ProjectPage;