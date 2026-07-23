import { projectData } from "@/data/projectsData";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
  title: "Projects | Harsh Mistry (harshmistry / harshmisty) | Portfolio",
  description:
    "Explore the engineering and software development projects of Harsh Mistry (harshmistry / harshmisty). Showcase of full-stack apps, data pipelines, AI integrations, and cloud solutions.",
  alternates: {
    canonical: "https://harsh-mistry.vercel.app/projects",
  },
  openGraph: {
    title: "Projects by Harsh Mistry (harshmistry / harshmisty)",
    description:
      "Explore full-stack web and data engineering portfolio projects built by Harsh Mistry (harshmistry / harshmisty).",
    url: "https://harsh-mistry.vercel.app/projects",
    type: "website",
  },
};

const Projects = () => {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects Showcase by Harsh Mistry",
    "description": "A collection of software development, AI, and data engineering projects by Harsh Mistry (harshmistry / harshmisty).",
    "url": "https://harsh-mistry.vercel.app/projects",
    "creator": {
      "@type": "Person",
      "name": "Harsh Mistry",
      "alternateName": ["harshmistry", "harshmisty"]
    },
    "about": {
      "@type": "Thing",
      "name": "Software Engineering, AI/ML, and Data Engineering Projects"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": projectData.length,
      "itemListElement": projectData.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://harsh-mistry.vercel.app/projects/${project.slug}`,
        "name": project.name,
        "description": project.description
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ProjectsClient projectData={projectData} />
    </>
  );
};

export default Projects;
