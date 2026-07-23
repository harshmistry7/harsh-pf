"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { projectData } from "@/data/projectsData";
export { projectData };

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Highlights of data engineering projects: scalable ETL/ELT, feature
            pipelines and analytics platforms.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;