import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://harsh-mistry.vercel.app"),
  title: "Harsh Mistry (harshmistry / harshmisty) | Freelance ERP Developer | Software Developer | Data Engineer",
  description:
    "Official portfolio of Harsh Mistry (harshmistry / harshmisty) — a passionate Freelance Software Developer & Data Engineer specializing in custom ERP solutions, full-stack web applications, and data pipeline integrations.",
  keywords: [
    "Harsh Mistry",
    "harshmistry",
    "harshmisty",
    "Freelance ERP Developer",
    "ERP Developer",
    "Custom ERP Solutions",
    "Enterprise Resource Planning",
    "Software Developer",
    "Data Engineer",
    "Full Stack Developer",
    "AI Developer",
    "Machine Learning",
    "Web Developer",
    "Next.js",
    "React",
    "Spring Boot",
    "Node.js",
    "Python",
    "Java",
    "Cloud Computing",
    "Portfolio",
    "Tech Projects",
  ],
  authors: [{ name: "Harsh Mistry", url: "https://harsh-mistry.vercel.app" }],
  publisher: "Harsh Mistry",
  alternates: {
    canonical: "https://harsh-mistry.vercel.app",
  },
  openGraph: {
    title: "Harsh Mistry (harshmistry / harshmisty) | Freelance ERP & Software Portfolio",
    description:
      "Discover the portfolio of Harsh Mistry (harshmistry / harshmisty) — showcasing expertise in freelance custom ERP systems, full-stack web development, and data engineering.",
    url: "https://harsh-mistry.vercel.app",
    siteName: "Harsh Mistry Portfolio",
    images: [
      {
        url: "https://harsh-mistry.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Mistry Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mistry (harshmistry / harshmisty) | Freelance ERP Developer Portfolio",
    description:
      "Explore Harsh Mistry’s portfolio featuring freelance custom ERP development, AI/ML workflows, and cloud-based data solutions.",
    images: ["https://harsh-mistry.vercel.app/og-image.jpg"],
    creator: "@harshmistry",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "X-Robots-Tag": "index, follow",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Mistry",
    alternateName: ["harshmistry", "harshmisty"],
    url: "https://harsh-mistry.vercel.app",
    image: "https://harsh-mistry.vercel.app/og-image.jpg",
    jobTitle: "Freelance ERP Developer & Data Engineer",
    description:
      "Freelance Software Developer specializing in Custom ERP Systems, Full Stack Web Development, and Data Engineering solutions.",
    sameAs: [
      "https://github.com/harshmistry7",
      "https://www.linkedin.com/in/harsh-mistry7/",
      "https://harsh-mistry.vercel.app",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Harsh Mistry Portfolio",
    },
    knowsAbout: [
      "Custom ERP Systems",
      "Enterprise Resource Planning",
      "Freelance Software Development",
      "Full Stack Development",
      "Data Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "Spring Boot",
      "Node.js",
      "Python",
      "Java",
      "Cloud Computing",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Harsh Mistry Portfolio",
    alternateName: ["harshmistry", "harshmisty"],
    url: "https://harsh-mistry.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://harsh-mistry.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    description:
      "Official portfolio website of Harsh Mistry (harshmistry / harshmisty) — showcasing custom ERP systems, freelance web development, AI/ML, and cloud-based applications.",
    publisher: {
      "@type": "Person",
      name: "Harsh Mistry",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
