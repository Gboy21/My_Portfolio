// Header.tsx
import React, { useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    if (window.innerWidth < 640) {
      setIsSidebarOpen(prev => !prev);
    }
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Sidebar receives state and toggle handler */}
    <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} mode="mobile" />

      <header>
        <nav className="bg-white w-full z-50 flex justify-between items-center border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          {/* Left: Logo and Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Icon (mobile only) */}
            <button
              onClick={handleSidebarToggle}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>

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
          </div>

          {/* Navigation links - optional for desktop */}
          <ul className="hidden lg:flex space-x-8 font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Skills", href: "/skills" },
              { name: "My Projects", href: "/project" },
              { name: "Contact Us", href: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <DarkThemeToggle />
        </nav>
      </header>
    </>
  );
};

export default Header;
