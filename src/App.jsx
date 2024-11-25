import React from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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

  return (
    <Router>
      {/* Ichanged the code by rendering the Header and Footer directly to show them on all pages */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<ComingSoon />} />
        <Route path="/library" element={<Library />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/enrollinclass/:classid" element={<EnrollmentClass />} />

                  //https://www.alamaanois.com/enrollinclass?classid=9651253
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


