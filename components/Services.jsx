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
    title: "Web Design ",
    description:
      "I craft user-friendly and visually stunning websites that convert visitors into leads.  Let's create a website that perfectly reflects your brand identity.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development ",
    description:
      "I bring websites to life, turning designs into functional and interactive experiences.  From complex web apps to seamless e-commerce solutions, I can handle it all.",
  },
  {
    icon: <PenTool size={72} strokeWidth={0.8} />,
    title: "Graphic Design ",
    description:
      "I create high-impact visual elements that elevate your brand.  Whether it's logos, social media graphics, or marketing materials, I'll help you tell your story visually.",
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
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                <CardHeader className='text-primary absolute -top-[60px]'>
                    <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                </CardHeader>
                <CardContent className='text-center'>
                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                    <CardDescription clasName='text-lg'>{item.description}</CardDescription>
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
