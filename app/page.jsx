// import Image from "next/image";

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Certifications />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
