import React from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import certifications from "@/data/certificationsData";

const Certifications = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 border border-border rounded-md">
              {cert.imgPath ? (
                <a href={cert.imgPath} target="_blank" rel="noreferrer">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={cert.imgPath}
                      alt={cert.title}
                      width={600}
                      height={600}
                      className="rounded-md object-cover max-w-full h-auto"
                    />
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-primary" />
                </div>
              )}

              <div className="font-semibold mb-1">{cert.title}</div>
              <div className="text-sm text-muted-foreground mb-3">
                {cert.issuer} • {cert.year}
              </div>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  View Certificate
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
