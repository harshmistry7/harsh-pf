import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Code, Link2Icon, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader>
        {/* image */}
        <div
          className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%]
          xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl rounded-t-[12px]"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* hover buttons */}
          <div className="flex gap-x-4">
            {/* Live link */}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon className="text-white" />
              </Link>
            )}
            {/* GitHub link */}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Code className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-5">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg mb-4">{project.description}</p>

        {/* Details link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-x-1.5 text-sm font-medium text-primary hover:underline transition-colors"
        >
          View Details
          <ArrowRight size={14} />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;