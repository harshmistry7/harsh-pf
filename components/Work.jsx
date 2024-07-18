"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swipper component

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import {Pagination} from 'swiper/modules';

//components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

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


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
          I'm passionate about crafting innovative and user-friendly web experiences. Here's a glimpse into some of my latest web development projects
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[520px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: "true" }}
          >
            {/* show only 4 proejcts for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
