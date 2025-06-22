import React from "react";
// import { Analytics } from "@vercel/analytics/next"
const About: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        {/* Light mode image */}
        <img
          className="w-full dark:hidden"
          src="/images/projects/code.jpg"
          alt="coding is my passion"
        />
        {/* Dark mode image */}
        <img
          className="w-full hidden dark:block"
          src="/images/projects/code.jpg"
          alt="dashboard"
        />

        {/* Text Content */}
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300 text-base md:text-lg font-light">
            I’m Muhire Gilbert, a passionate Software Engineer and IT Solutions Specialist dedicated to building secure, scalable, and impactful digital systems. With hands-on experience in both front-end and back-end development, I’ve contributed to applications that enhance efficiency and user experience—particularly in the financial and education sectors. I thrive in fast-paced, collaborative environments and constantly seek to grow through continuous learning and innovation. My mission is to use technology not just to build applications, but to create meaningful change.
          </p>
          <a
            href="contact"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Let’s connect
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
