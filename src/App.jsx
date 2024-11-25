import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation // Add this line
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Library from "./pages/Library";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import ComingSoon from "./pages/ComingSoon";
import Footer from "./components/Footer";
import EnrollmentClass from "./components/EnrollmentClass/EnrollmentClass.jsx";

function App() {
  const HeaderWrapper = () => {
    const location = useLocation(); // Now it's correctly defined
    return location.pathname !== "/login" ? <Header /> : null;
  };

  const FooterWrapper = () => {
    const location = useLocation(); // Now it's correctly defined
    return location.pathname !== "/login" ? <Footer /> : null;
  };

  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<ComingSoon />} />
        <Route path="/library" element={<Library />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/enrollinclass" element={<EnrollmentClass />} />
      </Routes>
      <FooterWrapper />
    </Router>
  );
}

export default App;
