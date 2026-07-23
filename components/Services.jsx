import { GanttChartSquare, Blocks, PenTool } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Full Stack Development ",
    description:
      "I build fast, scalable, and secure web applications from end to end. From responsive frontends and robust backend APIs to databases, authentication, and cloud deployment, I create complete solutions that are designed for performance, maintainability, and business growth."
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "AI Automation & Workflows",
    description:
      "I design intelligent AI-powered workflows that automate repetitive business processes and improve productivity. Whether it's AI agents, document processing, chatbots, automated replies, workflow orchestration, CRM integrations, or custom LLM-powered solutions, I help businesses save time and operate more efficiently.",
  },
  {
    icon: <PenTool size={72} strokeWidth={0.8} />,
    title: "Data Engineering ",
    description:
      "I develop reliable data pipelines and engineering solutions that transform raw data into actionable insights. From ETL/ELT pipelines and database optimization to data integration, analytics, and reporting, I build scalable data infrastructure that enables smarter business decisions.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-16 xl:gap-y-24 xl:gap-x-8 xl:items-stretch'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full flex flex-col pt-20 pb-8 px-6 items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center flex-1 flex flex-col gap-y-3'>
                  <CardTitle className='text-xl'>{item.title}</CardTitle>
                  <CardDescription className='text-sm leading-relaxed'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
