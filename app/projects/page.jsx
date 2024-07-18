"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "next js",
    name: "Digital Buissness",
    description: "Your One-Stop Solution for Digital Transformation",
    link: "https://digital-buisness.vercel.app/",
    github: "https://github.com/harshmistry7/Digital-Buisness.git",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "The Branded Sapiens ",
    description: "Empowering Social Media Strategies for TBS, a Leading Marketing Agency",
    link: "https://www.thebrandedsapiens.com/",
    github: "https://github.com/harshmistry7/TBS.git",
  },
  {
    image: "/work/3.png",
    category: "HTML",
    name: "Cyber Security Club ADIT",
    description: "Your One-Stop Shop for Cybersecurity Resources",
    link: "https://harshmistry7.github.io/cscadit/",
    github: "https://github.com/harshmistry7/cscadit.git",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Portfolio Website",
    description: "Your Online Portfolio Showcase",
    link: "www.harshmistry.tech",
    github: "",
  },
  {
    image: "/work/5.png",
    category: "HTML",
    name: "Zone",
    description: "A Platform for Streamlining Drone Operations",
    link: "https://harshmistry7.github.io/Zone/",
    github: "https://github.com/harshmistry7/Zone.git",
  },
  {
    image: "/work/6.png",
    category: "HTML",
    name: "Graphixcy",
    description: "Your Visual Identity Architect",
    link: "https://harshmistry7.github.io/resume/",
    github: "https://github.com/harshmistry7/resume.git",
  },
];


//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all the projects , else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category}  key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
