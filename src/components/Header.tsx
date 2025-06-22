import React, { useState } from "react";
import { DarkThemeToggle } from "flowbite-react";

const Header: React.FC = () => {
  const [isMenuOpen] = useState(false);

  return (
    <header>
        
      <nav className="bg-white flex justify-between border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
         {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/projects/logo.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Gboy Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Gilbert
            </span>
          </a>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
         

   

          {/* Desktop and Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { name: "Home", href: "/", active: true },
                { name: "About", href: "/about" },
                { name: "Skills", href: "/skills" },
                { name: "My Projects", href: "/project" },
                { name: "Contact Us", href: "/contact" }
                
                
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className={`block py-2 pr-4 pl-3 ${
                      item.active
                        ? "text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700"
                        : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    } lg:p-0`}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
         <DarkThemeToggle />
      </nav>
     
    </header>
  );
};

export default Header;
