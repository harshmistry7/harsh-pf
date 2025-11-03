"use client";

import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  University,
} from "lucide-react";
import { get } from "react-hook-form";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Harsh Mistry",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7016400310",
  },
  {
    icon: <MailIcon size={20} />,
    text: "harshmistryarm@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 7 October, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Pursuing B.Tech In IT",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Surat, India",
  },
];

const QualificationData = [
  {
    title: "education",
    data: [
      {
        university: "J. H. Ambani, Surat",
        qualalification: "10th",
        years: "2020",
      },
      {
        university: "The Radiant International School, Surat",
        qualalification: "12th Science",
        years: "2022",
      },
      {
        university: "A. D. Patel Institute of Technology, Anand (CVM University)",
        qualalification: "Bachelor of Technology",
        years: "2022-Present",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "SMS FOR YOU",
        role: "Graphic Designer",
        years: "2024",
      },
      {
        Company: "Google DSC, ADIT",
        role: "Design Co-Lead",
        years: "2023-2025",
      },
      {
        Company: "Freelance",
        role: "Web Developer",
        years: "2023-Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "FrontEnd Web Devlopment",
      },
      {
        name: "JS and Frameworks",
      },
      {
        name: "Graphic Design"
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/vercel.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/adobe-illustrator.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Aboutme
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px]
                    bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Umatched Service Quality for Over 2 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I Specialize in crafting intutive websites with
                      cutting-edge technology , delivering dynamic and engaging
                      user exeperiences
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"> </div>
                      <div>English, Hindi, Gujarati</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left ">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <div className="capitalize font-medium">
                            {getData(QualificationData, "Experience").title}
                          </div>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(QualificationData, "Experience").data.map(
                            (item, index) => {
                              const { Company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                        group-hover:translate-y-[84px] transition-all duration-500"
                                    >
                                      {" "}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {Company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base flex gap-x-4 font-medium">
                                      <Calendar className='text-primary '/>{years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <div className="capitalize font-medium">
                            {getData(QualificationData, "education").title}
                          </div>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(QualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualalification, years } =
                                item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                        group-hover:translate-y-[84px] transition-all duration-500"
                                    >
                                      {" "}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualalification}
                                    </div>
                                    <div className="text-base flex gap-x-4 font-medium">
                                      <Calendar className='text-primary '/>{years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List */}
                      <div>
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 ]">
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left ">
                        Tools
                      </h4>
                    </div>
                    <div className="border-b border-border mb-4"></div>
                    {/* tools list */}
                    <div className=' flex gap-x-8 justify-center xl:justify-start'>
                      {getData(skillData, "Tools").data.map((item, index) => {
                        const { imgPath } = item;
                        return (
                          <div key={index}>
                            <Image
                              src={imgPath}
                              width={48}
                              height={48}
                              alt=""
                              priority
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
