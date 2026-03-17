import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Web Developer - MERN Stack",
    icon: backend,
  },
  {
    title: "Aspiring Cloud Engineer",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Development Intern – MERN Stack",
    companyName: "Internship Alert",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Jan 2025",
    points: [
    "Designed and deployed RESTful APIs with the MERN stack, improving scalability and application performance.",
    "Implemented secure access controls and best coding practices, strengthening data protection and system reliability.",
    "Managed sprints via GitHub Agile boards, achieving 100% on-time sprint delivery across all projects.",
  ],
  },
  {
    title: "Software Engineer Intern",
    companyName: "Wave Techtronics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
    "Reduced deployment errors by 40% by Dockerizing backend services, standardizing environment configuration across dev, staging, and production.",
    "Cut release cycles by 30% through end-to-end CI/CD pipeline automation handling builds, test suites, and deployment triggers.",
    "Improved real-time interface responsiveness by building dynamic React.js and Node.js modules for live-data dashboards.",
  ],
  },
  {
  title: "Freelance Software Developer",
  companyName: "Self-Employed", 
  icon: shopify, // Make sure to import a freelance or code icon at the top
  iconBg: "#383E56", 
  date: "Dec 2025 - Present",
  points: [
    "Specializing in Frontend Development to build high-performance, visually immersive web applications using React.js and Tailwind CSS.",
    "Developing custom UI components and 3D web interfaces for diverse clients, ensuring unique brand identities.",
    "Optimizing website performance and SEO to improve client search rankings and user retention rates.",
    "Managing the end-to-end development lifecycle, from initial wireframing in Figma to final cloud deployment.",
  ],
},
 
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Uber-clone",
    description:
      "A full-stack ride-hailing platform that connects riders with drivers, enabling real-time booking, secure JWT authentication, and dual-role management for seamless and efficient urban transportation.",
    tags: [
      {
        name: "react-19",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "Vite-8",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/im-vishu/uber-clone",
  },
  {
    name: "fuzzy-broccoli",
    description:
      "A full-stack beauty platform where users search cosmetic products, discover affordable dupes, share reviews, and join real-time discussions with an admin panel and blog system.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "SupaBase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "AuthO",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/im-vishu/fuzzy-broccoli",
  },
  {
    name: "MediSync",
    description:
      "Full-stack doctor appointment booking platform that connects patients with healthcare providers, enabling real-time slot booking, role-based access control, and secure JWT authentication for seamless medical management.",
    tags: [
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Restful API",
        color: "pink-text-gradient",
      },
      {
        name: "JWT & Bcrypt",
        color: "blue-text-gradient",
      }
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/im-vishu/MediSync",
  },

  {
    name: "EchoSuggest",
    description:
      "A full-stack AI-powered e-commerce recommendation engine that delivers personalized product suggestions using hybrid collaborative and content-based filtering with a React frontend and FastAPI backend.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI(python)",
        color: "pink-text-gradient",
      },
      {
        name: "Axios",
        color: "blue-text-gradient",
      },

      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      }
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/im-vishu/EchoSuggest",
  },
];

export { services, technologies, experiences, testimonials, projects };
