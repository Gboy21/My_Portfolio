import React from "react";
import Project_Card from "../components/Project_Card";
import { portfolioData } from "../Database/Project_Database";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
}


const ProjectIndex: React.FC<ProjectProps> = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Portfolio</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              
      {portfolioData.map((project) => (
        <Project_Card
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
      
  
        </div>
      </div>
    </section>


  );
};

export default ProjectIndex;
