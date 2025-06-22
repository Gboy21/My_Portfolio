// src/components/Sidebar.tsx
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../constants/SidebarLinks";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  mode: "mobile" | "desktop";
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose, mode }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== "mobile") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, mode]);

  const sidebarContent = (
    <ul className="space-y-2 font-semibold mt-10">
      {sidebarLinks.map(({ name, path, icon, special }) => (
        <li key={name}>
          <NavLink
            to={path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 text-base rounded-lg transition-all duration-200 group ${
                isActive
                  ? "text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-white pl-4 border-l-4 border-blue-600"
                  : special
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:pl-5"
              }`
            }
          >
            <span className="text-lg">{icon}</span>
            <span>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  if (mode === "mobile") {
    return (
      <>
        {isOpen && (
          <div
            onClick={onClose}
            className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
          />
        )}
        <aside
          ref={sidebarRef}
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 bg-white dark:bg-gray-800 border-r dark:border-gray-700 transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Sidebar"
        >
          <div className="px-4 pb-6 overflow-y-auto relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl"
              aria-label="Close Sidebar"
            >
              &times;
            </button>
            {sidebarContent}
          </div>
        </aside>
      </>
    );
  }

  return <div>{sidebarContent}</div>;
};

export default Sidebar;
