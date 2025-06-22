import {
  FaMicrosoft,
  FaShieldAlt,
  FaPython,
  FaDatabase,
  FaCode,
  FaCogs,
  FaHandshake,
  FaUsers,
  FaLanguage,
  FaChalkboardTeacher,
  FaClock,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon: IconType;
  level?: number; // Optional for soft skills
};

export const technicalSkills: SkillItem[] = [
  { name: "Microsoft 365 Administration", icon: FaMicrosoft, level: 85 },
  { name: "Cybersecurity & Fraud Prevention", icon: FaShieldAlt, level: 90 },
  { name: "Python, React, Java (Servlets + JSP)", icon: FaPython, level: 80 },
  { name: "SQL, PostgreSQL", icon: FaDatabase, level: 75 },
  { name: "HTML/CSS/JavaScript", icon: FaCode, level: 85 },
  { name: "Automation & Process Optimization", icon: FaCogs, level: 78 },
];

export const softSkills: SkillItem[] = [
  { name: "Accuracy-Oriented", icon: FaHandshake },
  { name: "Cross-Functional Collaboration", icon: FaUsers },
  { name: "Bilingual Communication", icon: FaLanguage },
  { name: "Technical Training", icon: FaChalkboardTeacher },
  { name: "Time Management", icon: FaClock },
];
