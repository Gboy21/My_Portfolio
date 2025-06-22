export interface ProjectItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const portfolioData: ProjectItem[] = [
  {
    id: "1",
    image: "/images/projects/1.jpg",
    title: "AI-Powered Life Expectancy Prediction",
    description: "Django web app that predicts life expectancy using machine learning and WHO data.",
    link: "https://github.com/gboy21/life-expectancy-predictor",
  },
  {
    id: "2",
    image: "/images/projects/dental.jpg",
    title: "Online Dental Appointment Booking System",
    description: "Django web app that allows users to book dental appointments online.",
    link: "https://github.com/gboy21/auca-library",
  },
  {
    id: "3",
    image: "/images/projects/code.jpg",
    title: "E-commerce Dashboard (KOAS Trading)",
    description: "MERN stack dashboard with OTP verification, product orders, and secure login system.",
    link: "https://github.com/gboy21/koas-ecommerce",
  },
  {
    id: "4",
    image: "/images/projects/library.jpg",
    title: "AUCA Library Management System",
    description: "Spring Boot + JSP application to manage books, users, late fees, and role-based access.",
    link: "https://github.com/gboy21/auca-library",
  },
  {
    id: "5",
    image: "/images/projects/vr.webp",
    title: "VR Interview Simulator",
    description: "A virtual reality interview simulator built with Typescript, Javascript, and React.",
    link: "https://github.com/Gboy21/VR_PROJECT",
  },
  {
    id: "6",
    image: "/images/projects/todo.jpg",
    title: "Todo App",
    description: "A simple todo app built with React, Redux, and Tailwind CSS.",
    link: "https://github.com/Gboy21/Todo-App",
  },
];
