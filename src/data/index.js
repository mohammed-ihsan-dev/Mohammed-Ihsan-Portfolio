import {
  Layout,
  Database,
  Server,
  Smartphone,
  Globe
} from 'lucide-react';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiVite,
  SiFigma
} from 'react-icons/si';

// Profile Data
export const profile = {
  name: "Mohammed Ihsan",
  role: "Full Stack (MERN) Developer",
  location: "Kerala, India",
  email: "mohammed.ihsan.dev@gmail.com",
  social: {
    github: "https://github.com/mohammed-ihsan-dev",
    linkedin: "https://www.linkedin.com/in/itsihsaney/",
    twitter: "https://x.com/itsihsaney?s=21",
    instagram: "https://instagram.com/_ihsaney",
    email: "mailto:mohammed.ihsan.dev@gmail.com"
  },
  about: "I am a passionate Full Stack Developer specializing in the MERN stack. With a background in web development and freelance design, I build scalable, high-performance web applications that look great and work smoothly. I love solving complex problems and turning ideas into reality through code.",
  // Short intro for Hero
  intro: "Building digital experiences with code and creativity. Specialized in the MERN stack and modern web technologies."
};

// Skills Data
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" }, // Express is usually black/white
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: Globe, color: "#FFFFFF" },
      { name: "JWT Authentication", icon: Server, color: "#FFFFFF" },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Responsive Design", icon: Smartphone, color: "#FFFFFF" },
    ]
  }
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "MERN E-Commerce App",
    description: "A fully functional e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/mohammed-ihsan-dev/BaeBy-ecommerce-project",
    live: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "EaseMyTrip UI Clone",
    description: "A pixel-perfect responsive clone of the EaseMyTrip website, demonstrating advanced CSS and layout skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "This modern, dark-themed portfolio website built with React and Tailwind CSS to showcase my work and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mohammed-ihsan-dev/Mohammed-Ihsan-Portfolio",
    live: "https://mohammed-ihsan.vercel.app/",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop"
  }
];

// Experience Data
export const experience = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Bridgeon Solutions",
    period: "2025 - Present",
    description: "Assisting in building web applications, fixing bugs, and collaborating with senior developers on real-world projects."
  },
  {
    id: 2,
    role: "Freelance Web Designer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Designed and developed custom websites for local clients, focusing on responsiveness and user experience."
  }
];
