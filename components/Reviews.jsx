"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

//import swipper component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png", 
    name: "Alice Walker",
    job: "Project Manager",
    review:
      "Harsh's expertise in web development was crucial for the success of our e-commerce platform. His ability to work effectively with both designers and back-end engineers ensured a seamless development process. The platform launched on time and has been performing exceptionally well."
  },
  {
    avatar: "/reviews/avatar-2.png", 
    name: "Bob Jones",
    job: "CEO",
    review:
      "Harsh's creative problem-solving skills were invaluable during our website redesign. He identified innovative solutions to complex challenges, resulting in a user-friendly and visually appealing website that has significantly boosted our conversion rate."
  },
  {
    avatar: "/reviews/avatar-3.png", 
    name: "Charlie Lee",
    job: "Full-Stack Developer",
    review:
      "I had the pleasure of collaborating with Harsh on a challenging web application project. His strong understanding of code and attention to detail were impressive. He's a valuable asset to any development team."
  },
  {
    avatar: "/reviews/avatar-4.png", // Replace with your actual avatar image path
    name: "Diana Martinez",
    job: "Marketing Director",
    review:
      "Harsh's dedication to building responsive websites has been instrumental in reaching a wider audience through mobile devices. His knowledge of SEO best practices has also helped improve our website's organic search ranking."
  },
  {
    avatar: "/reviews/avatar-5.png", // Replace with your actual avatar image path
    name: "Emily Williams",
    job: "UX Designer",
    review:
      "Harsh's open communication and collaborative spirit made working together on our latest project a smooth experience. He was receptive to feedback and always eager to learn new design trends. I highly recommend him for any web development project."
  },
  {
    avatar: "/reviews/avatar-6.png", // Replace with your actual avatar image path
    name: "Frank Garcia",
    job: "CTO",
    review:
      "Harsh's strong work ethic and dedication to deadlines are commendable. He consistently delivers high-quality work on time and within budget. I trust him to handle complex development tasks independently and effectively."
  },
  // Add another review if you want 7 (optional)
];


const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* swiper */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-sm text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
