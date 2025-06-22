// src/data/portfolioData.ts
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  price?: number;
  technologies: string[];
  role: string;
  link: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Timtom Aviation Internal Dashboard",
    description:
      "Developed and managed the internal web dashboard for Timtom Aviation Ltd, integrating React for UI and Python backend services.",
    image: "/images/projects/1.jpg",
    rating: 4.9,
    price: 0,
    technologies: ["React", "CSS", "Python", "REST API"],
    role: "Fullstack Developer",
    link: "#",
  },
  {
    id: "2",
    title: "Dental Appointment System",
    description:
      "Built a web-based dental management system using React and Spring Boot Technologies.",
    image: "/images/projects/2.jpg",
    rating: 4.8,
    price: 0,
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    role: "IT Manager",
    link: "#",
  },
  {
    id: "3",
    title: "AI Dataset Annotation Tool",
    description:
      "Designed a UI for data annotation, used in machine learning projects to label and validate large datasets.",
    image:
      "https://cvat.ai/resources/blog/best-open-source-image-annotation-tools/screenshot-cvat.png",
    rating: 5.0,
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    role: "Data Annotator",
    link: "#",
  },
  {
    id: "4",
    title: "Personal Portfolio Website",
    description:
      "A responsive, modern personal portfolio highlighting skills, projects, and services.",
    image:
      "https://framer.com/marketplace/templates/bruno-personal-portfolio-template/screenshot.png",
    rating: 5.0,
    technologies: ["Next.js", "Tailwind", "Typescript"],
    role: "UI/UX Designer",
    link: "#",
  },
  {
    id: "5",
    title: "Logistics Management Web App",
    description:
      "Built a web-based logistics and delivery system to track cargo and vehicle movement in real time.",
    image:
      "https://encord.com/blog/best-image-annotation-tools/superannotate-screenshot.png",
    rating: 4.7,
    technologies: ["React", "Node.js", "MongoDB"],
    role: "Fullstack Developer",
    link: "#",
  },
  {
    id: "6",
    title: "Kigali Conference Reservation UI",
    description:
      "Created a user-centric interface for booking conference halls with calendar integration.",
    image:
      "https://supervisely.com/blog/releasing-new-image-annotation-tool/screenshot.png",
    rating: 4.6,
    technologies: ["Figma", "React", "Tailwind CSS"],
    role: "UI Designer",
    link: "#",
  },
];
