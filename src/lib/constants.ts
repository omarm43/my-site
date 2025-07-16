import type { LucideIcon } from 'lucide-react';
import { Code2, Cloud, Database, Smartphone, Brain, Briefcase, UserCircle, MessageSquare, Linkedin, Github, Mail, Star, Building } from 'lucide-react';

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  imageHint: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    name: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product listings, cart functionality, and Stripe integration for payments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "#", // Replace with actual link
    image: "https://picsum.photos/seed/project1/600/400",
    imageHint: "online shopping",
  },
  {
    id: "project-2",
    name: "Task Management App",
    description: "A collaborative task management tool with boards, lists, and cards, inspired by Trello. Real-time updates using WebSockets.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "#",
    image: "https://picsum.photos/seed/project2/600/400",
    imageHint: "to do list",
  },
  {
    id: "project-3",
    name: "Personal Blog",
    description: "A statically generated blog built with Astro and MDX, focusing on performance and SEO. Features include dark mode and content collections.",
    tech: ["Astro", "MDX", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/yourusername/personal-blog",
    image: "https://picsum.photos/seed/project3/600/400",
    imageHint: "writing reading",
  },
];

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  Icon?: LucideIcon;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  Icon?: LucideIcon;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Languages",
    Icon: Code2,
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    Icon: Briefcase,
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Flask", level: "Intermediate" },
    ],
  },
  {
    name: "Databases",
    Icon: Database,
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Firebase Firestore", level: "Advanced" },
    ],
  },
  {
    name: "Cloud & DevOps",
    Icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git & GitHub", level: "Expert" },
      { name: "Vercel", level: "Advanced" },
    ],
  },
  {
    name: "Other Tools",
    Icon: UserCircle,
    skills: [
      { name: "Figma", level: "Intermediate" },
      { name: "Jira", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  logoUrl?: string;
  logoHint?: string;
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    company: "ATeleSys",
    role: "Software Engineer",
    startDate: "Mar 2025",
    endDate: "Present",
    responsibilities: [
      "Led the development of AI-powered automation tools that streamlined content creation and deployed customized LLM client facing receptionists.",
      "Deployed an end-to-end n8n automation pipeline that generated SEO-optimized WordPress blog posts using GPT-4, DALL·E, DeepSeek, and Google Drive content. This reduced content creation time by 90% and increased publishing volume by 5x.",
      "Enhanced content quality and engagement by incorporating visually appealing, context-aware imagery and localized property descriptions using generative AI.",
      "Built a fully customizable AI receptionist system using Twilio (VoIP), AWS Lambda, and OpenAI APIs, tailored per clinic to handle 24/7 incoming calls with dynamic routing and real-time appointment booking.",
      "Designed the system to support up to 5 concurrent calls, improving lead response time and reducing staff overhead.",
      "Migrated the backend from PostgreSQL to MongoDB for a real estate brokerage, redesigning schemas and refactoring APIs to enable more flexible data handling and improve database performance by 50%. (for a vendor)",
    ],
    logoUrl: "/images/ats.png",
    logoHint: "modern office",
  },
  {
    id: "exp-2",
    company: "AO2.app",
    role: "Mobile App Developer",
    startDate: "Jun 2024",
    endDate: "Jan 2025",
    responsibilities: [
      "AO2 - An innovative mobile application specializing in offering secondary business phone numbers and eSIM solutions.",
      "Participated in the design and led the development of a new mobile app from concept to beta, utilizing React Native, NodeJS, and AWS Serverless Lambda functions.",
      "Integrated Apple StoreKit and Google Play Billing frameworks to seamlessly manage inapp purchases and user subscriptions, enhancing the app's revenue model while maintaining a smooth user experience.",
      "Implemented new features for an existing app through third-party APIs, enhancing user acquisition by 300%.",
      "Utilized Agile methodologies, participating in sprint planning, daily stand-ups, and code reviews to deliver high-quality features on time.",
    ],
    logoUrl: "/images/ao2.png",
    logoHint: "AO2.app",
  },
  {
    id: "exp-3",
    company: "Mitsubishi Heavy Industries RJ Aviation Group",
    role: "Software Developer Intern",
    startDate: "May 2022",
    endDate: "Aug 2023",
    responsibilities: [
      "Led the development of a web application using React and Flask to streamline access to technical publications, improving customer satisfaction and reducing publication retrieval time by 300% for key clients.",
      "Developed and implemented custom Omnimark scripts to resolve SGML data issues, increasing data integrity and enhancing client trust, which strengthened the relationship with the company's largest client.",
      "Implemented XSLT scripts to validate XML data accuracy, enhancing quality control over vendor-converted SGML data and eliminating data-related errors.",
      "Managed and optimized the internal database and publishing tool for technical publications, ensuring data accuracy and reliability for over 30 internal users.",
      "Was responsible for the technical administrative duties of technical publications such as; adding/removing writers and their privileges, creating manuals and sections, and freezing manuals and adding cut-off dates.",
    ],
    logoUrl: "/images/mhi.jpeg",
    logoHint: "MHI RJ",
  },
];


export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/omar-mostafiz/",
  github: "https://github.com/omarm43",
  email: "mail@omarmostafiz.com"
};
