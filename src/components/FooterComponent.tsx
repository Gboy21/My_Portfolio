import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://facebook.com/mgilberto",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/_gboy.21",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/muhiregilbert14",
      label: "Twitter",
    },
    {
      icon: FaGithub,
      url: "https://github.com/Gboy21",
      label: "GitHub",
    },
    {
      icon: FaDribbble,
      url: "https://dribbble.com/gboy21",
      label: "Dribbble",
    },
  ];

  return (
    <footer className="bg-white p-4 sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          {/* Logo + Title */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/images/projects/logo.jpg"
                className="mr-3 h-8"
                alt="Gboy Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Gilbert
              </span>
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/Gboy21"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/gboy21"
                    className="hover:underline"
                  >
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://x.com/muhiregilbert14"
                    className="hover:underline"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/mgilberto"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        {/* Bottom Bar */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Gilbert
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons with React Icons */}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {socialLinks.map(({ icon: Icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
