import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://harsh-mistry.vercel.app"),
  title: "Harsh Mistry | Software Developer | AI & Web Enthusiast",
  description:
    "Portfolio of Harsh Mistry — a passionate Software Developer specializing in full-stack web development, AI/ML integration, and cloud-based solutions. Explore my projects, technical skills, and innovative approach to building modern digital experiences.",
  keywords: [
    "Harsh Mistry",
    "Software Developer",
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
    title: "Harsh Mistry | Software Developer Portfolio",
    description:
      "Discover the portfolio of Harsh Mistry — showcasing expertise in full-stack web development, AI/ML projects, and cloud-based solutions.",
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
    title: "Harsh Mistry | Software Developer | AI & Web Enthusiast",
    description:
      "Explore Harsh Mistry’s portfolio featuring AI/ML projects, web development, and cloud-based solutions built with modern technologies.",
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
    url: "https://harsh-mistry.vercel.app",
    image: "https://harsh-mistry.vercel.app/og-image.jpg",
    jobTitle: "Software Developer",
    description:
      "Software Developer passionate about Full Stack Development, AI/ML, and Cloud-based solutions.",
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
      "Full Stack Development",
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
    url: "https://harsh-mistry.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://harsh-mistry.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    description:
      "Official portfolio website of Harsh Mistry — showcasing projects in web development, AI/ML, and cloud-based applications.",
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
