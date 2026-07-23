import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Contact Harsh Mistry | harshmistry | harshmisty",
  description:
    "Get in touch with Harsh Mistry (harshmistry / harshmisty), Software Developer and Data Engineer. Let's chat about collaboration opportunities in web development, data pipelines, and AI integrations.",
  alternates: {
    canonical: "https://harsh-mistry.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Harsh Mistry (harshmistry / harshmisty)",
    description:
      "Get in touch with Harsh Mistry (harshmistry / harshmisty) for software development and data engineering opportunities.",
    url: "https://harsh-mistry.vercel.app/contact",
    type: "website",
  },
};

const Contact = () => {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Harsh Mistry",
    "description": "Contact details and communication form for Harsh Mistry (harshmistry / harshmisty).",
    "url": "https://harsh-mistry.vercel.app/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Harsh Mistry",
      "alternateName": ["harshmistry", "harshmisty"],
      "jobTitle": "Software Developer & Data Engineer",
      "email": "harshmistryarm@gmail.com",
      "telephone": "+91 7016400310",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Surat",
        "addressCountry": "India"
      }
    }
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              <div>Say Hello 👋</div>
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together</h1>
            <p className='subtitle max-w-[400px]'>Have a project in mind? I'm always excited to collaborate with passionate individuals and businesses.  Let's chat about how I can help you bring your vision to life.</p>
          </div>
          {/* illustration */} 
          <div className='hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base
          xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>harshmistryarm@gmail.com</div>
            </div>
             {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>Surat,India</div>
            </div >
             {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>+91 7016400310</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
