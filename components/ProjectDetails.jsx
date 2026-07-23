"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, FileText, Paperclip, ExternalLink, ArrowLeft, Code, PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ─── Status badge colours ─────────────────────────────────────────── */
const statusConfig = {
  Live: {
    dot: "#22c55e",
    bg: "bg-green-500/10 dark:bg-green-400/10",
    text: "text-green-700 dark:text-green-400",
  },
  "In Progress": {
    dot: "#f59e0b",
    bg: "bg-amber-500/10 dark:bg-amber-400/10",
    text: "text-amber-700 dark:text-amber-400",
  },
  Completed: {
    dot: "#3b82f6",
    bg: "bg-blue-500/10 dark:bg-blue-400/10",
    text: "text-blue-700 dark:text-blue-400",
  },
};

/* ─── Numbered feature/integration list item ────────────────────────── */
const NumberedItem = ({ index, title, points }) => (
  <li className="relative pl-9">
    <span className="absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold select-none">
      {index + 1}
    </span>
    <p className="text-sm font-semibold text-foreground mb-1.5">{title}</p>
    <ul className="flex flex-col gap-1">
      {points.map((p, j) => (
        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
          {p}
        </li>
      ))}
    </ul>
  </li>
);

/* ─── Extract file ID from any Google Drive URL format ─────────────── */
const extractGdriveId = (url = "") => {
  const match =
    url.match(/\/file\/d\/([^/?&#]+)/) ||
    url.match(/[?&]id=([^&]+)/);
  return match ? match[1] : url;
};

/* ─── Main component ────────────────────────────────────────────────── */
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
    video,
  } = project;

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => setIsFading(false), 200);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        const nextIndex = (lightboxIndex + 1) % screenshots.length;
        setLightboxIndex(nextIndex);
        setActiveImageIndex(nextIndex);
      }
      if (e.key === "ArrowLeft") {
        const prevIndex = (lightboxIndex - 1 + screenshots.length) % screenshots.length;
        setLightboxIndex(prevIndex);
        setActiveImageIndex(prevIndex);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, screenshots.length]);

  const statusCfg = statusConfig[status];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-5xl py-12 px-4 md:px-8">
        
        {/* Split Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Info & Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {statusCfg ? (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusCfg.bg} ${statusCfg.text}`}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusCfg.dot }} />
                    {status}
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
                    {status}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                {name}
              </h1>
            </div>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              {longDescription?.length > 0 ? (
                longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-muted text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-muted text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Code size={16} />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/3] rounded-2xl border border-border/40 overflow-hidden bg-muted/20 flex items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={image}
                alt={name}
                width={400}
                height={300}
                className="rounded-xl object-contain max-h-[85%] w-auto shadow-sm"
                priority
              />
            </div>
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-border/30 pt-12 mb-16">
          {/* Left Column: Keywords & Tech Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {keywords.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((kw) => (
                    <span key={kw} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-border/60 bg-background text-foreground/80 cursor-default hover:border-primary/50 transition-colors">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {techStack.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-border bg-muted text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Features & Integrations */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {keyFeatures.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Features</h3>
                <ol className="flex flex-col gap-5 list-none">
                  {keyFeatures.map((feat, i) => (
                    <NumberedItem key={i} index={i} title={feat.title} points={feat.points} />
                  ))}
                </ol>
              </div>
            )}

            {keyIntegrations.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Integrations</h3>
                <ol className="flex flex-col gap-5 list-none">
                  {keyIntegrations.map((intg, i) => (
                    <NumberedItem key={i} index={i} title={intg.title} points={intg.points} />
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Project Assets Section */}
        {(video || screenshots.length > 0) && (
          <div className="border-t border-border/30 pt-12">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-8">Project Assets</h3>
            
            {/* Video walkthrough if available */}
            {video && (
              <div className="mb-12">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Video Cast</h4>
                <div className="rounded-2xl border border-border/40 overflow-hidden bg-muted/10 shadow-md">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://drive.google.com/file/d/${extractGdriveId(video)}/preview`}
                      className="absolute inset-0 w-full h-full border-none"
                      allow="autoplay"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex items-center justify-between px-6 py-4 bg-muted/20 border-t border-border/30">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <PlayCircle size={16} className="text-primary" />
                      Walkthrough Demo
                    </div>
                    <a
                      href={video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <ExternalLink size={12} />
                      Open in Drive
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Screenshots Gallery Section (Featured Image + Thumbnail Carousel) */}
            {screenshots.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">Screenshots</h4>
                
                {/* 1. Large Featured Image */}
                <div className="mb-6 flex flex-col items-center">
                  <div
                    onClick={() => setLightboxIndex(activeImageIndex)}
                    className="relative w-full max-w-3xl aspect-[16/10] rounded-2xl border border-border/40 overflow-hidden bg-muted/20 flex items-center justify-center p-4 cursor-zoom-in shadow-md hover:shadow-lg transition-all duration-300 group/featured"
                  >
                    <Image
                      src={screenshots[activeImageIndex].src}
                      alt={screenshots[activeImageIndex].label}
                      fill
                      className={`object-contain transition-opacity duration-200 ${isFading ? "opacity-0" : "opacity-100"}`}
                      sizes="(max-w-1024px) 100vw, 800px"
                      priority
                    />
                    {/* Hover zoom indicator overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/featured:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-[10px] font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        Click to Zoom
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-semibold text-center mt-3 tracking-wide">
                    {screenshots[activeImageIndex].label}
                  </p>
                </div>

                {/* 2. Thumbnail Carousel Header (with custom navigation buttons) */}
                {screenshots.length > 3 && (
                  <div className="flex items-center justify-between mb-4 mt-8">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Gallery Thumbnails
                    </span>
                    <div className="flex gap-2 z-10">
                      <button className="swiper-button-prev-custom w-8 h-8 rounded-full border border-border/60 bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:hover:text-muted-foreground [&.swiper-button-disabled]:hover:border-border/60 transition-colors duration-200">
                        <ChevronLeft size={16} />
                      </button>
                      <button className="swiper-button-next-custom w-8 h-8 rounded-full border border-border/60 bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:hover:text-muted-foreground [&.swiper-button-disabled]:hover:border-border/60 transition-colors duration-200">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
                
                {/* 3. Thumbnail Carousel (Swiper slider displaying exactly 3 thumbnails) */}
                <div className="w-full max-w-xl mx-auto mt-4">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={12}
                    modules={[Pagination, Navigation]}
                    navigation={{
                      prevEl: ".swiper-button-prev-custom",
                      nextEl: ".swiper-button-next-custom"
                    }}
                    className="project-screenshots-swiper pb-4"
                  >
                    {screenshots.map((shot, i) => (
                      <SwiperSlide key={i} className="h-auto">
                        <button
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-full aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                            activeImageIndex === i
                              ? "border-primary shadow-md ring-2 ring-primary/20 scale-[0.98] opacity-100"
                              : "border-border/50 hover:border-primary/50 opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`View screenshot ${i + 1}: ${shot.label}`}
                        >
                          <Image
                            src={shot.src}
                            alt={shot.label}
                            fill
                            className="object-cover"
                            sizes="180px"
                          />
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            )}
          </div>
        )}

      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8 select-none">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev button */}
          {screenshots.length > 1 && (
            <button
              onClick={() => {
                const prevIndex = (lightboxIndex - 1 + screenshots.length) % screenshots.length;
                setLightboxIndex(prevIndex);
                setActiveImageIndex(prevIndex);
              }}
              className="absolute left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label="Previous Screenshot"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Main content */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-4 z-40">
            <div className="relative w-[85vw] h-[60vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black">
              <Image
                src={screenshots[lightboxIndex].src}
                alt={screenshots[lightboxIndex].label}
                fill
                className="object-contain"
                sizes="85vw"
                priority
              />
            </div>
            <p className="text-white/90 text-sm font-medium tracking-wide">
              {screenshots[lightboxIndex].label} ({lightboxIndex + 1} of {screenshots.length})
            </p>
          </div>

          {/* Next button */}
          {screenshots.length > 1 && (
            <button
              onClick={() => {
                const nextIndex = (lightboxIndex + 1) % screenshots.length;
                setLightboxIndex(nextIndex);
                setActiveImageIndex(nextIndex);
              }}
              className="absolute right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label="Next Screenshot"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;