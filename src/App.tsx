import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FooterComponent from "./components/FooterComponent";
import MainNavBar from "./components/MainNavBar";
import HomeIndex from "./pages/Home_page/HomeIndex";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ProjectIndex from "./pages/ProjectIndex";

// import Sidebar from "./components/Sidebar";

// import { Sidebar } from "flowbite-react";

const App: React.FC = () => {
  return (
    <Router>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectIndex />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
