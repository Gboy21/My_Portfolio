// src/constants/SidebarLinks.tsx
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

export const sidebarLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Skills", path: "/skills", icon: <FaCode />, special: true },
  { name: "Contact Us", path: "/contact", icon: <FaEnvelope /> },
];
