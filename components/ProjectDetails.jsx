"use client";

import Image from "next/image";
import Link from "next/link";
import { Info, FileText, Paperclip, ExternalLink, ArrowLeft, Github } from "lucide-react";

const statusStyles = {
  Live: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  Completed: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
};

const Section = ({ icon: Icon, title, children }) => (
  <div className="mb-8 rounded-xl border border-border overflow-hidden">
    <div className="flex items-center gap-x-3 px-5 py-3 bg-primary/10 border-b border-border">
      <Icon size={18} className="text-primary" />
      <h3 className="font-semibold text-base capitalize">{title}</h3>
    </div>
    <div className="p-5">{children}</div>
  </div>
);

const ProjectDetails = ({ project }) => {
  const {
    name,
    status,
    image,
    description,
    longDescription,
    keywords = [],
    techStack = [],
    keyFeatures = [],
    keyIntegrations = [],
    link,
    github,
    screenshots = [],
  } = project;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl py-10 px-4">

        <Link
          href="/projects"
          className="inline-flex items-center gap-x-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <h1 className="section-title mb-8 text-center">Project Details</h1>

        {/* Project Information */}
        <Section icon={Info} title="Project Information">
          <div className="grid md:grid-cols-2 gap-x-8 mb-5">
            <div className="mb-3">
              <div className="font-semibold text-sm text-foreground mb-1">Project Name:</div>
              <div className="text-sm text-muted-foreground">{name}</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold text-sm text-foreground mb-1">Project Status:</div>
              <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold ${statusStyles[status] ?? "bg-secondary text-secondary-foreground"}`}>
                {status}
              </span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground mb-2">Project Description:</div>
            {longDescription?.length > 0 ? (
              <div className="flex flex-col gap-y-3">
                {longDescription.map((para, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        </Section>

        {/* Project Summary */}
        <Section icon={FileText} title="Project Summary">
          {(keywords.length > 0 || techStack.length > 0) && (
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              {keywords.length > 0 && (
                <div>
                  <div className="font-semibold text-sm mb-2">Keywords:</div>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((kw) => (
                      <span key={kw} className="text-xs px-2.5 py-1 rounded-md border border-border bg-secondary text-secondary-foreground font-medium">{kw}</span>
                    ))}
                  </div>
                </div>
              )}
              {techStack.length > 0 && (
                <div>
                  <div className="font-semibold text-sm mb-2">Technology Stacks:</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-md border border-border bg-secondary text-secondary-foreground font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {(keyFeatures.length > 0 || keyIntegrations.length > 0) && (
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              {keyFeatures.length > 0 && (
                <div>
                  <div className="font-semibold text-sm mb-3">Key Features:</div>
                  <ol className="flex flex-col gap-y-3 list-none">
                    {keyFeatures.map((feat, i) => (
                      <li key={i}>
                        <div className="font-semibold text-sm">{i + 1}. {feat.title}</div>
                        <ul className="mt-1 flex flex-col gap-y-1 pl-4">
                          {feat.points.map((p, j) => (
                            <li key={j} className="text-xs text-muted-foreground list-disc">{p}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {keyIntegrations.length > 0 && (
                <div>
                  <div className="font-semibold text-sm mb-3">Key Integrations:</div>
                  <ol className="flex flex-col gap-y-3 list-none">
                    {keyIntegrations.map((intg, i) => (
                      <li key={i}>
                        <div className="font-semibold text-sm">{i + 1}. {intg.title}</div>
                        <ul className="mt-1 flex flex-col gap-y-1 pl-4">
                          {intg.points.map((p, j) => (
                            <li key={j} className="text-xs text-muted-foreground list-disc">{p}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          <div>
            <div className="font-semibold text-sm mb-2">Project Links:</div>
            <div className="flex flex-col gap-y-2">
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-x-1.5">
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-x-1.5">
                  <Github size={13} /> GitHub Repository
                </a>
              )}
              {!link && !github && <span className="text-sm text-muted-foreground">No links available.</span>}
            </div>
          </div>
        </Section>

        {/* Project Assets */}
        <Section icon={Paperclip} title="Project Assets">
          <div className="mb-6">
            <div className="font-semibold text-sm mb-3">Project Preview:</div>
            <div className="rounded-xl border border-border overflow-hidden bg-secondary/40 flex items-center justify-center p-6">
              <Image src={image} alt={name} width={500} height={320} className="rounded-lg shadow-md object-contain" priority />
            </div>
          </div>
          {screenshots.length > 0 ? (
            <div>
              <div className="font-semibold text-sm mb-4">Screenshots:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {screenshots.map((shot, i) => (
                  <div key={i} className="flex flex-col gap-y-1.5">
                    <div className="text-xs text-muted-foreground font-medium">{i + 1}.</div>
                    <div className="rounded-lg border border-border overflow-hidden bg-secondary aspect-video relative">
                      <Image src={shot.src} alt={shot.label} fill className="object-cover" />
                    </div>
                    <div className="text-xs text-center text-muted-foreground">{shot.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No screenshots available.</p>
          )}
        </Section>

      </div>
    </div>
  );
};

export default ProjectDetails;