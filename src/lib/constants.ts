import type { LucideIcon } from 'lucide-react';
import { Code2, Cloud, Database, Smartphone, Brain, Briefcase, UserCircle, MessageSquare, Linkedin, Github, Mail, Star, Building } from 'lucide-react';

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
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
    company: "Tech Solutions Inc.",
    role: "Senior Software Engineer",
    startDate: "Jan 2020",
    endDate: "Present",
    responsibilities: [
      "Led the development of a new microservices-based architecture, improving system scalability by 40%.",
      "Mentored junior engineers, fostering a collaborative and high-performing team environment.",
      "Designed and implemented key features for the company's flagship product using React and Python.",
      "Optimized database queries, reducing average response time by 25%.",
    ],
    logoUrl: "https://picsum.photos/seed/techinc/100/100",
    logoHint: "modern office",
  },
  {
    id: "exp-2",
    company: "Innovatech Ltd.",
    role: "Software Engineer",
    startDate: "Jun 2017",
    endDate: "Dec 2019",
    responsibilities: [
      "Developed and maintained full-stack web applications using Angular and Node.js.",
      "Collaborated with cross-functional teams to define project requirements and deliver solutions.",
      "Participated in code reviews and contributed to improving code quality and development processes.",
      "Integrated third-party APIs to enhance application functionality.",
    ],
    logoUrl: "https://picsum.photos/seed/innovatech/100/100",
    logoHint: "innovation lightbulb",
  },
  {
    id: "exp-3",
    company: "Web Wizards Co.",
    role: "Junior Web Developer",
    startDate: "Jul 2015",
    endDate: "May 2017",
    responsibilities: [
      "Assisted in the development of client websites using HTML, CSS, JavaScript, and PHP.",
      "Performed website maintenance and updates, ensuring optimal performance.",
      "Gained experience with version control systems (Git) and agile methodologies.",
      "Contributed to UI/UX design discussions and implementation.",
    ],
    logoUrl: "https://picsum.photos/seed/webwizards/100/100",
    logoHint: "coding computer",
  },
];


export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/omar-mostafiz/",
  github: "https://github.com/omarm43",
  email: "mail@omarmostafiz.com"
};
