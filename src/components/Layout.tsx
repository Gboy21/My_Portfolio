// // src/components/Layout.tsx
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-white dark:bg-gray-900">
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:block w-64 h-screen border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sticky top-0">
//         <Sidebar mode="desktop" />
//       </aside>

//       {/* Mobile Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} mode="mobile" />

//       <main className="flex-1 p-4 sm:p-6 md:p-10">
//         {/* Hamburger Button for Mobile */}
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="md:hidden mb-6 text-gray-700 dark:text-white"
//           aria-label="Open sidebar"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;
