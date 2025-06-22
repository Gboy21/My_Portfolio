import React from "react";
import { softSkills, technicalSkills } from "./../Database/skillsData";

const Skills: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Skills & Capabilities
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Empowering business and technology through advanced technical skills and strong interpersonal abilities.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center mb-2 text-gray-800 dark:text-gray-300">
                  <skill.icon className="mr-2 text-primary-600 dark:text-primary-300" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
                    style={{ width: `${skill.level ?? 70}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <skill.icon className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-300" />
                <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
