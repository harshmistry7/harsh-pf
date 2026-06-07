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
} from "lucide-react";

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
    text: "Graduation: May 2026 — CGPA: 8.58/10",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech — Information Technology",
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
        university: "A. D. Patel Institute of Technology — B.Tech (IT)",
        qualalification: "Bachelor of Technology — CGPA: 8.58/10",
        years: "2022-2026",
      },
      {
        university: "The Radiant International School, Surat",
        qualalification: "Class XII — Science — 82.80%",
        years: "2020-2022",
      },
      {
        university: "J. H. Ambani Saraswati Vidyamandir",
        qualalification: "Class X — 81.60%",
        years: "2019-2020",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "Crest Infosystems",
        role: "Software Engineer L1 — Data Engineer",
        years: "Jan 2026 - Present",
      },
      {
        Company: "Reliance Industries Limited",
        role: "Vocational IT Trainee",
        years: "May 2025 - Jun 2025",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      { name: "Python" },
      { name: "SQL" },
      { name: "PySpark" },
      { name: "Apache Airflow" },
      { name: "Data Modeling & Warehousing" },
    ],
  },
  {
    title: "Tools",
    data: [
      { imgPath: "/about/aws.svg" },
      { imgPath: "/about/spark.svg" },
      { imgPath: "/about/airflow.svg" },
      { imgPath: "/about/glue.svg" },
    ],
  },
];

// Reusable timeline card used by both Experience and Education
const TimelineItem = ({ title, subtitle, years, index, total }) => {
  return (
    <div className="flex gap-x-4 group">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center pt-1">
        <div className="w-[11px] h-[11px] rounded-full bg-blue-100 border-2 border-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:bg-blue-500" />
        {index < total - 1 && (
          <div className="w-px flex-1 bg-border mt-1 min-h-[24px]" />
        )}
      </div>
      {/* Card */}
      <div className="flex-1 border border-border rounded-xl p-3.5 mb-5 transition-colors duration-200 group-hover:border-blue-400 bg-background">
        <div className="font-semibold text-base leading-none mb-1">{title}</div>
        <div className="text-sm text-muted-foreground mb-3">{subtitle}</div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300 px-2.5 py-1 rounded-md">
          <Calendar size={13} />
          {years}
        </span>
      </div>
    </div>
  );
};

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  const experienceData = getData(QualificationData, "Experience").data;
  const educationData = getData(QualificationData, "education").data;

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>

          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualification">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Tab */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Data Engineering — ETL, Lakehouse, and Analytics
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I design and build scalable ETL/ELT pipelines, enforce
                      data quality, and enable analytics with cloud-native
                      tooling and distributed processing.
                    </p>
                    {/* Info grid */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border" />
                      <div>English, Hindi, Gujarati</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualification Tab */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3 items-center text-[22px] text-primary mb-2 pb-2 border-b border-border">
                          <Briefcase size={22} />
                          <div className="capitalize font-medium text-base">
                            {getData(QualificationData, "Experience").title}
                          </div>
                        </div>
                        {experienceData.map((item, index) => (
                          <TimelineItem
                            key={index}
                            index={index}
                            total={experienceData.length}
                            title={item.Company}
                            subtitle={item.role}
                            years={item.years}
                          />
                        ))}
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3 items-center text-[22px] text-primary mb-2 pb-2 border-b border-border">
                          <GraduationCap size={22} />
                          <div className="capitalize font-medium text-base">
                            {getData(QualificationData, "education").title}
                          </div>
                        </div>
                        {educationData.map((item, index) => (
                          <TimelineItem
                            key={index}
                            index={index}
                            total={educationData.length}
                            title={item.university}
                            subtitle={item.qualalification}
                            years={item.years}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use Everyday</h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4" />
                      <div className="flex flex-col gap-y-2">
                        {getData(skillData, "Skills").data.map((item, index) => (
                          <div
                            key={index}
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                          >
                            <div className="font-medium">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4" />
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "Tools").data.map((item, index) => (
                          <div key={index}>
                            <Image
                              src={item.imgPath}
                              width={48}
                              height={48}
                              alt=""
                              priority
                            />
                          </div>
                        ))}
                      </div>
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