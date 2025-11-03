import { Outfit } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Mistry | Software Developer | Web, AI & Cloud Enthusiast",
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
  authors: [{ name: "Harsh Mistry" }],
  openGraph: {
    title: "Harsh Mistry | Software Developer Portfolio",
    description:
      "Discover the portfolio of Harsh Mistry — showcasing expertise in full-stack web development, AI/ML projects, and cloud-based solutions.",
    url: "https://harsh-mistry.vercel.app",
    siteName: "Harsh Mistry Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Mistry Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mistry | Software Developer | AI & Web Enthusiast",
    description:
      "Explore Harsh Mistry’s portfolio featuring AI/ML projects, web development, and cloud-based solutions built with modern technologies.",
    images: ["/og-image.jpg"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="3LuxwOqfsbeZjeS2Ut_0dGcVlrFBjgmRYxfXdOOrgv4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsh Mistry",
              url: "https://harsh-mistry.vercel.app",
              image: "https://harsh-mistry.vercel.app/og-image.jpg",
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Personal Projects",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "A. D. Patel Institute of Technology",
              },
              sameAs: [
                "https://www.linkedin.com/in/harsh-mistry7/",
                "https://github.com/harshmistry7",
                "https://harsh-mistry.vercel.app",
              ],
              knowsAbout: [
                "Full Stack Development",
                "React.js",
                "Next.js",
                "Spring Boot",
                "Node.js",
                "Java",
                "Python",
                "AI",
                "Machine Learning",
                "Cloud Computing",
              ],
              description:
                "Harsh Mistry is a Software Developer specializing in Full Stack Web Development, AI/ML solutions, and Cloud-based applications. Passionate about building scalable digital products that solve real-world problems.",
            }),
          }}
        />
      </head>
      <body className={outfit.className} >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
