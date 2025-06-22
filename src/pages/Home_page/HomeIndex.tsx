import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
            Hi, I'm Muhire Gilbert
            <br className="hidden md:block" />
            <span className="text-primary-700 dark:text-primary-400">
              — IT Solutions Specialist & Software Developer
            </span>
          </h1>
{/* 
          <p className="mb-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            I'm a passionate Software Engineer dedicated to building secure, scalable, and impactful digital
            solutions. With hands-on experience in back-end and front-end development, I’ve contributed to
            systems that improve operational efficiency and user experience—especially in the financial and
            education sectors. I thrive in fast-paced, collaborative environments and constantly seek to grow
            through learning, innovation, and real-world problem-solving. My goal is to use technology not just
            to build applications, but to create meaningful change.
          </p> */}

          {/* Hobbies Section */}
          <div className="mb-6 max-w-2xl rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              What I Enjoy Beyond Code
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              When I’m not coding, I love exploring the world of design, mentoring fellow learners, and producing music with my choir. I also enjoy diving into cybersecurity articles, playing with new tech tools, and taking peaceful walks to reflect and recharge.
            </p>
          </div>

          <div className="flex flex-wrap">
            <a
              href="about"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              Get started
              <svg
                className="-mr-1 ml-2 h-5 w-5"
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

        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src="/images/projects/me.jpg" alt="My image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
