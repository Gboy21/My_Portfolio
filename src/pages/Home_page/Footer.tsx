// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
//       <div className="mx-auto max-w-screen-xl">
//         <div className="md:flex md:justify-between">
//           {/* Logo + Title */}
//           <div className="mb-6 md:mb-0">
//             <a href="https://flowbite.com" className="flex items-center">
//               <img
//                 src="https://flowbite.com/docs/images/logo.svg"
//                 className="mr-3 h-8"
//                 alt="FlowBite Logo"
//               />
//               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//                 Flowbite
//               </span>
//             </a>
//           </div>

//           {/* Footer Links */}
//           <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//             <div>
//               <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                 Resources
//               </h2>
//               <ul className="text-gray-600 dark:text-gray-400">
//                 <li className="mb-4">
//                   <a href="https://flowbite.com" className="hover:underline">
//                     Flowbite
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://tailwindcss.com/" className="hover:underline">
//                     Tailwind CSS
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                 Follow us
//               </h2>
//               <ul className="text-gray-600 dark:text-gray-400">
//                 <li className="mb-4">
//                   <a
//                     href="https://github.com/themesberg/flowbite"
//                     className="hover:underline"
//                   >
//                     Github
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://discord.gg/4eeurUVvTy"
//                     className="hover:underline"
//                   >
//                     Discord
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//                 Legal
//               </h2>
//               <ul className="text-gray-600 dark:text-gray-400">
//                 <li className="mb-4">
//                   <a href="#" className="hover:underline">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Terms &amp; Conditions
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

//         {/* Bottom bar */}
//         <div className="sm:flex sm:items-center sm:justify-between">
//           <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//             © 2022{" "}
//             <a href="https://flowbite.com" className="hover:underline">
//               Flowbite™
//             </a>
//             . All Rights Reserved.
//           </span>

//           {/* Social icons */}
//           <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
//             {[
//               "facebook",
//               "instagram",
//               "twitter",
//               "github",
//               "dribbble",
//             ].map((platform, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//                 aria-label={platform}
//               >
//                 {/* Use <i> or actual <svg> icons */}
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                   dangerouslySetInnerHTML={{ __html: socialIcons[index] }}
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // NOTE: You'll need to define the SVGs as raw strings in `socialIcons`
// const socialIcons: string[] = [
//   // Facebook
//   `<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477..."/>`,
//   // Instagram
//   `<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06..."/>`,
//   // Twitter
//   `<path d="M8.29 20.251c7.547 0 11.675-6.253..."/>`,
//   // GitHub
//   `<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484..."/>`,
//   // Dribbble
//   `<path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48..."/>`,
// ];
