import React from "react";
// import { Analytics } from "@vercel/analytics/next"
import Project_Card from "../components/Project_Card";
// import { portfolioData } from "./Database/projectData";
import { portfolioData } from './../Database/projectData';
// import Project from './../components/Project_Card';

const ProjectIndex: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Portfolio</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioData.map((Project) => (
            <Project_Card
              key={Project.id}
              image={Project.image}
              title={Project.title}
              description={Project.description}
              link={Project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectIndex;
